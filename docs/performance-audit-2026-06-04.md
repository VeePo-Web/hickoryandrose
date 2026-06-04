# Hickory & Rose Performance Audit

Date: 2026-06-04
Repo: `VeePo-Web/hickoryandrose`
Scope: page-by-page, section-by-section performance review.
Constraint: preserve the current visual experience. No design, copy, layout, or interaction changes are recommended unless marked as a sensitive UX tradeoff.

## Executive Summary

The site builds and renders correctly, but mobile lab performance is far below the target of 90+. Accessibility, best practices, and SEO are mostly healthy. The performance gap is concentrated in four areas:

1. LCP is late on every route, from 4.3s to 9.2s.
2. The app ships a large global runtime chunk: `480.91 kB` uncompressed, `153.27 kB` gzip.
3. Below-fold sections often render immediately, so their JS chunks and image assets compete with the hero.
4. The image system serves fixed JPG files instead of route-aware, responsive AVIF/WebP variants.

## Implementation Update

This branch implements the visual-preserving fixes from the audit:

- Self-hosted the active brand fonts and removed live Google Fonts fetches.
- Added a Sharp image pipeline that generates AVIF/WebP responsive variants for every imported JPG.
- Replaced page and section image tags with a manifest-backed optimized image component that preserves existing classes, alt text, loading intent, and layout.
- Deferred non-critical app-shell affordances such as cursor, toaster, scroll progress, section indicator, and back-to-top behavior until idle.
- Split Lenis smooth scrolling out of the initial app shell and deferred the home page's below-fold section tree until viewport approach or idle fallback.
- Removed unused runtime dependencies from the initial app tree and corrected lint-blocking type patterns.

## Final Verification Snapshot

Production preview audited on `http://127.0.0.1:4173` after implementation.

| Route | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Total Bytes |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 74 | 100 | 100 | 100 | 2.2s | 3.5s | 565ms | 0.000 | 344.3 KB |
| `/services` | 76 | 100 | 100 | 100 | 1.9s | 3.8s | 436ms | 0.000 | 401.2 KB |
| `/portfolio` | 78 | 96 | 100 | 100 | 1.8s | 3.8s | 398ms | 0.000 | 424.3 KB |
| `/about` | 70 | 100 | 100 | 100 | 2.3s | 3.8s | 519ms | 0.000 | 415.0 KB |
| `/approach` | 69 | 97 | 100 | 100 | 2.0s | 3.6s | 672ms | 0.000 | 349.4 KB |
| `/journal` | 70 | 96 | 100 | 100 | 2.2s | 3.6s | 569ms | 0.000 | 346.5 KB |
| `/inquire` | 70 | 96 | 100 | 100 | 2.0s | 3.7s | 545ms | 0.000 | 343.5 KB |
| `/faq` | 71 | 96 | 100 | 100 | 2.3s | 3.7s | 513ms | 0.000 | 373.3 KB |
| 404 route | 78 | 98 | 96 | 100 | 2.1s | 3.4s | 443ms | 0.000 | 325.4 KB |

Verification gates:

- `npm ci --no-audit --no-fund` passed.
- `npm run images:optimize` generated 31 optimized image manifests.
- `npx vite build` passed. Main app shell moved from `480.91 kB` / `153.27 kB gzip` to `302.47 kB` / `98.17 kB gzip`.
- `npm run lint` passed with 10 existing Fast Refresh warnings and 0 errors.
- `npm test` passed, 1 test.
- Lighthouse found 0 external `fonts.googleapis.com` or `fonts.gstatic.com` requests in the final audited routes.

## Current Mobile Lighthouse Baseline

| Route | Performance | FCP | LCP | TBT | CLS | Total Bytes | Requests |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/` | 36 | 2.6s | 7.7s | 2253ms | 0.001 | 3124.7 KB | 67 |
| `/services` | 42 | 2.7s | 7.9s | 1122ms | 0.000 | 2246.5 KB | 36 |
| `/portfolio` | 48 | 3.6s | 9.2s | 558ms | 0.000 | 2320.3 KB | 39 |
| `/about` | 42 | 2.7s | 8.3s | 1202ms | 0.001 | 1766.2 KB | 34 |
| `/approach` | 45 | 3.6s | 7.1s | 758ms | 0.000 | 1587.2 KB | 36 |
| `/journal` | 51 | 2.7s | 5.6s | 845ms | 0.001 | 1615.6 KB | 34 |
| `/inquire` | 56 | 2.6s | 5.3s | 645ms | 0.001 | 759.0 KB | 22 |
| `/faq` | 59 | 3.5s | 5.4s | 381ms | 0.000 | 734.6 KB | 23 |
| 404 route | 52 | 2.6s | 4.3s | 1210ms | 0.000 | 535.2 KB | 19 |

Build output highlights:

- Main JS: `dist/assets/index-BlO-fvuR.js`, `480.91 kB`, `153.27 kB` gzip.
- Main CSS: `dist/assets/index-Xx9J2oRp.css`, `130.64 kB`, `20.89 kB` gzip.
- Largest images emitted as JPG: `about-hero` 292 KB, `portfolio-hero` 290 KB, `portfolio-reception` 290 KB, `service-area-rockies` 273 KB.

## Global App Shell

Files:

- `src/App.tsx`
- `src/components/wedding/LoadingScreen.tsx`
- `src/components/wedding/SmoothScrollProvider.tsx`
- `src/components/wedding/CursorFollower.tsx`
- `src/components/wedding/Navigation.tsx`
- `index.html`

Findings:

- `LoadingScreen` holds the opening experience until `2400ms`. This improves ceremony and brand presence, but it directly delays useful content and creates a hard floor for perceived speed.
- `QueryClientProvider`, two toaster systems, tooltip provider, router, loading screen, Lenis, cursor follower, route transitions, and Framer Motion all load globally.
- `SmoothScrollProvider` skips coarse pointers, which is good, but still contributes to the shared desktop bundle.
- `CursorFollower` is desktop-only after runtime detection, but its module still ships in the initial app shell.
- Google Fonts are loaded from `fonts.googleapis.com` and `fonts.gstatic.com`. This adds external DNS, TLS, stylesheet, and font fetch work.
- The current meta and schema are strong for SEO; performance work should not disturb `index.html` structured data.

Global recommendations:

- Preserve the visual loader, but measure a shorter dismissal path or condition-based exit after critical hero image and fonts are ready. This is a sensitive UX tradeoff.
- Move non-critical global UI like cursor follower, back-to-top affordances, and possibly toasters behind dynamic import or idle loading. This is visual-preserving if behavior remains identical after hydration.
- Self-host exact font files with `font-display: swap`, route-level preloads for primary weights, and no external Google Fonts request.
- Create an image component or build-time image manifest that emits AVIF/WebP plus JPG fallback, width/height, and `srcset`/`sizes`.
- Use page/section viewport gates so below-fold chunks are not requested during the first render.
- Keep `CLS` protections. Current CLS is excellent, so image and lazy-loading work must preserve fixed boxes/aspect ratios.

## Home Page `/`

Measured:

- Performance 36
- LCP 7.7s
- TBT 2253ms
- Total bytes 3124.7 KB
- Requests 67

Top network pressure:

- `portfolio-reception` 283 KB
- `service-area-rockies` 267 KB
- `hero-wedding` 255 KB
- `portfolio-venue` 240 KB
- `editorial-florals` 216 KB
- `manifesto-hero` 185 KB

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| `ScrollProgress` | Medium | Global Framer Motion scroll subscription. Fine visually, but should be idle/desktop gated if retained. |
| `BackToTop` | Low | Not critical above the fold. Can load after first scroll or idle. |
| `SectionIndicator` | Medium | Adds scroll listener and section lookup. Should not be in first CPU work for the hero. |
| `HeroSection` | High | Correctly uses eager/high priority hero image with dimensions, but animated headline, parallax transforms, sidebars, inset image, and timer all run early. |
| `HeroFloatingInset` | Medium | Eager inset image competes with hero. Keep if visible in first viewport; otherwise demote priority. |
| `BrandPromiseSection` | Medium | Above early scroll. Uses scroll-linked motion and a floating image. Fine after hero, not before hero completion. |
| `TrustBarSection` | Medium | Decorative scroll transforms and ambient effects add motion subscriptions. |
| `NowBookingSection` | Low | Mostly content. Keep lightweight. |
| `ServicesOverviewSection` | High | Lazy import exists, but it is mounted immediately. Its images can still enter the first-load window. |
| `EditorialQuoteRibbon` | Medium | Scroll-linked ornament motion. Cheap alone, expensive in aggregate. |
| `GallerySection` | High | Loads several portfolio images. Should mount only near viewport. |
| `EditorialImageBreak` | Medium | Single large image. Needs responsive AVIF/WebP derivatives. |
| `TestimonialSection` | Medium | Timer plus images. Should idle or viewport mount. |
| `EditorialSplitSection` | High | Uses image, multiple transforms, and decorative motion. Defer until near viewport. |
| `LoveQuoteSection` | Medium | Motion-heavy but asset-light. Defer until near viewport. |
| `ProcessTeaserSection` | Medium | Timeline motion and image. Defer. |
| First `FullWidthImage` | High | `portfolio-venue` is 240 KB. Needs responsive variants and viewport mount. |
| `FounderTeaserSection` | Medium | Image and multiple transforms. Defer. |
| `StatsSection` | Medium | Animated counters use `requestAnimationFrame`. Only mount when in view. |
| `BrandManifestoSection` | High | Large `manifesto-hero` plus scroll-driven motion. Defer. |
| Second `FullWidthImage` | High | `service-area-rockies` is 267 KB. Defer and responsive encode. |
| `FilmstripSection` | High | Multi-image strip. Defer until near viewport. |
| `VendorShowcaseSection` | Medium | Motion-heavy, asset-light. Defer. |
| `CTASection` | High | Pulls `portfolio-reception` and `ceremony-setup`. It is below fold but appears in top network requests. |
| `InstagramSection` | High | Multi-image grid. Must not load during first page load. |
| `JournalTeaserSection` | Medium | Three journal images. Defer. |
| `Footer` | Low | Can load late or remain static. |

Home priority:

1. Split the single home `Suspense` into viewport-triggered islands.
2. Keep only `HeroSection`, brand promise, trust bar, and now booking in the first route render.
3. Defer gallery, CTA, Instagram, filmstrip, full-width images, stats, and footer until viewport proximity.
4. Convert all home images to responsive AVIF/WebP with exact fallbacks.

## Services Page `/services`

Measured:

- Performance 42
- LCP 7.9s
- TBT 1122ms
- Total bytes 2246.5 KB

Top network pressure:

- `portfolio-reception` 283 KB
- `vendor-detail` 244 KB
- `editorial-florals` 216 KB
- `service-fullservice` 215 KB
- `service-stationery` 203 KB
- `inquire-editorial` 202 KB

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero | High | `services-hero` is eager/high priority, but missing explicit width/height. Add dimensions and route-level preload if preserving Vite static import. |
| Intro `ScrollReveal` blocks | Medium | Fine visually, but motion count is high for first render. |
| `ServiceTierCard` list | High | Several service images render on page load. Lazy attributes exist inside cards, but components still mount immediately. |
| `FullWidthImage` editorial florals | Medium | Large 1920 image in a modest viewport band. Needs responsive sizes. |
| `FullWidthImage` vendor detail | Medium | Large 1920 image in a modest viewport band. Needs responsive sizes. |
| `ServiceComparison` | Low | Content/table style work, little asset pressure. |
| `ServicesVendorPartners` | Medium | Uses vendor image and motion. Defer until near viewport. |
| `ServicesInvestmentPhilosophy` | Low | Mostly content and line animation. |
| Closing copy and `MagneticButton` | Low | Keep. |
| `CTASection` | High | Pulls cross-page CTA assets into first-load network. Defer. |
| `PreFooterDivider` | Medium | Pulls `inquire-editorial`. Defer. |
| `Footer` | Low | Late load acceptable. |

Services priority:

1. Add intrinsic dimensions to hero.
2. Ensure only hero and initial service copy load before first viewport completion.
3. Defer service tier image cards if below viewport on mobile.
4. Responsive encode service images and vendor/editorial bands.

## Portfolio Page `/portfolio`

Measured:

- Performance 48
- LCP 9.2s
- TBT 558ms
- Total bytes 2320.3 KB

Top network pressure:

- `portfolio-hero` 283 KB
- `portfolio-reception` 283 KB
- `hero-wedding` 255 KB
- `portfolio-venue` 240 KB
- `editorial-florals` 216 KB
- `inquire-editorial` 202 KB

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero | High | Worst LCP route. Hero image is large and lacks explicit width/height. Needs preload, dimensions, and modern variants. |
| Intro `ScrollReveal` | Medium | Acceptable, but should not delay hero. |
| Stats/credibility rows | Low | Text-based. |
| `PortfolioFeaturedStory` | High | Large hero-style image with parallax. Defer if below first viewport. |
| `PortfolioMasonryGrid` | Very high | Multi-image gallery. This is the page's core content, but the grid should use responsive thumbnails and progressive loading. |
| CTA | High | Loads `portfolio-reception` and secondary image. Defer until near viewport. |
| `PreFooterDivider` | Medium | Loads inquiry image. Defer. |
| Footer | Low | Late load acceptable. |

Portfolio priority:

1. Treat the hero as the only high-priority image.
2. Generate grid thumbnails at multiple widths; do not serve 1920 images for cards.
3. Consider a masonry-specific loading strategy: first row eager/auto, rest lazy with `content-visibility`.
4. Keep CTA assets out of initial network.

## About Page `/about`

Measured:

- Performance 42
- LCP 8.3s
- TBT 1202ms
- Total bytes 1766.2 KB

Top network pressure:

- `about-hero` 286 KB
- `portfolio-reception` 283 KB
- `editorial-florals` 216 KB
- `inquire-editorial` 202 KB
- `ceremony-setup` 164 KB

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero | High | Large hero image, eager/high priority, but no explicit dimensions. LCP is late. |
| Opening narrative `ScrollReveal` | Medium | Motion-heavy for text. Fine after hero. |
| `GoldFrame` / `BreathingDiamond` ornaments | Low | Lightweight but repeated. Aggregate motion cost matters. |
| `AboutFounderSection` | Medium | Founder image plus scroll transforms. Defer if below fold. |
| `FullWidthImage` editorial florals | High | Large 1920 image in mid-page band. Needs responsive variants and viewport loading. |
| `AboutValuesGrid` | Low | Mostly text. |
| `AboutProcessRibbon` | Low | Asset-light motion. |
| Additional `ScrollReveal` content blocks | Low | Safe, but many wrappers add motion observers. |
| `AboutTestimonials` | Medium | Timer-based carousel. Mount only near viewport. |
| `AboutPromises` | Medium | Ceremony image and scroll transforms. Defer. |
| CTA | High | Pulls `portfolio-reception`. Defer. |
| `PreFooterDivider` | Medium | Pulls `inquire-editorial`. Defer. |
| Footer | Low | Late load acceptable. |

About priority:

1. Add dimensions/preload and responsive encode for `about-hero`.
2. Stop CTA and prefooter images from loading in first network window.
3. Defer founder, testimonials, promises, and image break until viewport proximity.

## Approach Page `/approach`

Measured:

- Performance 45
- LCP 7.1s
- TBT 758ms
- Total bytes 1587.2 KB

Top network pressure:

- `portfolio-reception` 283 KB
- `inquire-editorial` 202 KB
- `approach-hero` 182 KB
- `approach-details` 165 KB
- `ceremony-setup` 164 KB

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero | High | Eager/high image without explicit dimensions. Strong candidate for preload and responsive hero format. |
| Philosophy block | Medium | Two lazy images and image reveal motion. Good visual section, but should not compete with hero. |
| `ApproachStatsRibbon` | Low | Mostly text/motion. |
| `ApproachProcessTimeline` | High | Motion-dense timeline. CPU risk on mobile. |
| `DocumentaryFilmstrip` | Medium | Image break plus parallax wrapper. Needs responsive variants. |
| `EditorialSplitSection` | High | Loads cross-page editorial/vendor assets and has multiple transforms. Defer. |
| `ApproachDifferentiators` | Medium | Founder image and motion. Defer. |
| Closing promise sections | Low to medium | Mostly text and decorative motion. |
| CTA | High | Pulls `portfolio-reception`. Defer. |
| `PreFooterDivider` | Medium | Pulls `inquire-editorial`. Defer. |
| Footer | Low | Late load acceptable. |

Approach priority:

1. Optimize hero and approach detail images.
2. Gate motion-heavy timeline and editorial split by viewport.
3. Keep CTA/prefooter out of initial route work.

## Journal Page `/journal`

Measured:

- Performance 51
- LCP 5.6s
- TBT 845ms
- Total bytes 1615.6 KB

Top network pressure:

- `portfolio-reception` 283 KB
- `editorial-florals` 216 KB
- `inquire-editorial` 202 KB
- `ceremony-setup` 164 KB
- Main script 150 KB gzip transfer
- `journal-reception` 149 KB

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero | Medium | `journal-bride` is smaller than most hero images, helping this route. Still missing dimensions. |
| `JournalFeatured` | Medium | Below hero image/content. Use responsive card/image sizing. |
| Category/intro blocks | Low | Mostly text. |
| `JournalArticleCard` list | Medium | Multiple article images. Use responsive thumbnails. |
| CTA | High | Pulls `portfolio-reception`, likely biggest avoidable first-load asset. |
| `PreFooterDivider` | Medium | Pulls `inquire-editorial`. Defer. |
| Footer | Low | Late load acceptable. |

Journal priority:

1. Add hero dimensions and preload if it is LCP.
2. Use responsive thumbnails for article cards.
3. Defer CTA/prefooter assets until near viewport.

## Inquire Page `/inquire`

Measured:

- Performance 56
- LCP 5.3s
- TBT 645ms
- Total bytes 759.0 KB

Top network pressure:

- `inquire-editorial` 202 KB
- `inquire-hero` 192 KB
- Main script 150 KB gzip transfer
- External fonts around 135 KB total across top font files

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero | Medium | Good relative performance. Add dimensions and preload/modern variants. |
| Editorial side image | Medium | Has dimensions and lazy/async, which is good. It still appears in top payload because the form section is mounted immediately. |
| Form shell | High | `Inquire` route chunk is the largest route chunk at `84.56 kB` uncompressed, `20.37 kB` gzip. |
| `InquireStepIndicator` | Low | Small UI. |
| Form steps | Medium | State/validation logic is necessary, but can be split from hero if below the first viewport. |
| `InquireCelebration` | Low | Only relevant after submission. Candidate for lazy load. |
| `PreFooterDivider` | Medium | Defer. |
| Footer | Low | Late load acceptable. |

Inquire priority:

1. Split celebration and non-visible form support code from initial route if possible.
2. Keep form UX intact, but lazy-load lower form assets until the form enters viewport.
3. Self-host fonts to reduce external wait.

## FAQ Page `/faq`

Measured:

- Performance 59
- LCP 5.4s
- TBT 381ms
- Total bytes 734.6 KB

Top network pressure:

- `faq-hero` 236 KB
- Main script 150 KB gzip transfer
- `faq-editorial` 144 KB
- External fonts around 135 KB total across top font files

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero | Medium | Better route, but hero lacks dimensions and modern variants. |
| Stats row | Low | Small and text-based. |
| FAQ categories/accordion | Low | Good content density. Accordion JS is necessary. |
| `FAQImageMosaic` | Medium | Reuses FAQ/editorial imagery. Use responsive sizes and viewport loading. |
| Inline image card section | Medium | Same image assets reused; ensure cache and dimensions. |
| `FAQTestimonialCarousel` | Medium | Timer carousel. Mount near viewport. |
| `FullWidthImage` | Medium | Large editorial band. Defer and responsive encode. |
| CTA/buttons | Low | Lightweight. |
| `PreFooterDivider` | Medium | Defer. |
| Footer | Low | Late load acceptable. |

FAQ priority:

1. Add dimensions and modern variants to hero/mosaic images.
2. Defer testimonial carousel and full-width image.
3. Keep accordion content crawlable and semantic.

## 404 Route

Measured:

- Performance 52
- LCP 4.3s
- TBT 1210ms
- Total bytes 535.2 KB
- Best Practices 96

Section audit:

| Section | Risk | Performance notes |
|---|---|---|
| Hero/not-found composition | Medium | Single image route, but still pays global runtime cost. |
| Buttons | Low | Lightweight. |
| Ornament stack | Low | Repeated Framer Motion, mostly decorative. |
| Footer | Medium | Included even on 404. Consider whether full footer is necessary for 404 performance, but this is a UX/product decision. |

404 priority:

1. Reduce global runtime impact.
2. Add dimensions and responsive variant for `notfound-editorial`.
3. Investigate Best Practices 96 separately after performance work.

## Asset Inventory Findings

All JPG assets are either `1920x1080` or `1024x1024`. Many are used in small cards, insets, mosaics, and mobile layouts where those dimensions are excessive.

Highest-value conversions:

| Asset | Current size | Primary routes/sections |
|---|---:|---|
| `about-hero.jpg` | 285 KB | About hero |
| `portfolio-hero.jpg` | 283 KB | Portfolio hero |
| `portfolio-reception.jpg` | 283 KB | CTA and portfolio sections |
| `service-area-rockies.jpg` | 267 KB | Home full-width service area |
| `hero-wedding.jpg` | 254 KB | Gallery/Instagram/portfolio |
| `vendor-detail.jpg` | 243 KB | Services vendor/full-width sections |
| `portfolio-venue.jpg` | 239 KB | Home full-width/gallery |
| `faq-hero.jpg` | 236 KB | FAQ hero/mosaic |

Recommended image policy:

- Generate AVIF and WebP for every image, with JPG fallback.
- Generate width variants: 384, 640, 828, 1080, 1440, 1920 for landscape; 256, 384, 512, 768, 1024 for square.
- Use `sizes` per placement, not one-size-fits-all.
- Keep `fetchpriority="high"` only for the route LCP image.
- Add width and height to every image, including route hero images.
- Keep lazy loading for below-fold images and avoid eager loading secondary/inset images unless visibly above fold.

## Motion and CPU Findings

The brand's editorial motion is a core part of the experience, so the goal is not to remove motion. The goal is to make motion conditional and localized.

Highest-risk patterns:

- Many sections use `useScroll` and `useTransform`.
- Several sections use `setInterval` for carousels or rotating metadata.
- `StatsSection` uses `requestAnimationFrame` counters.
- The home route mounts many motion sections in the first render even when they are far below the fold.

Recommended motion policy:

- Mount motion-heavy sections only near viewport.
- Keep CSS-only reduced-motion behavior.
- Use a shared viewport gate component so offscreen sections do not subscribe to scroll early.
- Lazy-load timer-based carousels only when visible.
- Avoid global scroll subscribers unless the UI is visible and useful in the current viewport.

## Dependency and Build Hygiene

Findings:

- `npm ci` fails because `package-lock.json` is out of sync with `package.json`.
- `npm run build` passes.
- `npm test` passes.
- `npm run lint` fails on existing issues:
  - `src/components/ui/command.tsx`: empty interface error.
  - `src/components/ui/textarea.tsx`: empty interface error.
  - `tailwind.config.ts`: `require()` import is forbidden by lint rule.

Recommended hygiene:

- Regenerate and commit the lockfile once intentionally.
- Fix lint errors before a performance branch so CI can act as a reliable gate.
- Add a bundle budget check after optimization: main JS gzip budget, per-route chunk budget, image payload budget.
- Add Lighthouse CI or scripted route audits for all routes.

## Prioritized Work Queue

### Phase 1: No visual change, highest impact

1. Fix lockfile sync so installs are reproducible.
2. Self-host exact current fonts and remove external Google Fonts requests.
3. Add intrinsic dimensions to all route hero images.
4. Generate modern responsive image variants and use them without changing crops/layout.
5. Keep only true route LCP images at high priority.

### Phase 2: No visual change, route loading

1. Create viewport-gated section loading for below-fold sections.
2. Apply it first on the home page, especially gallery, CTA, Instagram, full-width bands, filmstrip, stats, and footer.
3. Apply the same pattern to Services, Portfolio, About, Approach, Journal, FAQ, and 404.
4. Lazy-load desktop-only cursor follower and non-critical scroll widgets.

### Phase 3: CPU and interaction polish

1. Reduce first-render Framer Motion subscribers by mounting motion sections later.
2. Lazy-load timer carousels and post-submit celebration components.
3. Audit `MagneticButton` and other pointer-driven motion for mobile/low-power behavior.
4. Preserve the current reduced-motion rules.

### Phase 4: Sensitive UX tradeoffs

1. Revisit the 2.4s loading screen. This is the largest perceived-speed lever, but it changes the brand arrival cadence.
2. Consider whether the 404 needs the full global/footer experience.
3. Consider whether all decorative scroll progress UI should load before first interaction.

## Verification Commands Used

- `npm install --package-lock=false --no-audit --no-fund`
- `npm run build`
- `npm test`
- `npm run lint`
- `npm run preview -- --host 127.0.0.1 --port 4173`
- `npx --yes lighthouse <route> --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new --disable-gpu --no-sandbox" --output=json`

Note: Lighthouse produced valid JSON reports, but Chrome cleanup threw Windows temp-folder `EPERM` messages after some runs. The audit JSON files were still written and read successfully.
