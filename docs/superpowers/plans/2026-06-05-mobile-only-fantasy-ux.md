# Mobile-Only Fantasy UX Wrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a Hickory & Rose mobile experience with Fantasy.co-level craft, page by page and section by section, without changing desktop, content, routes, metadata, or brand intent.

**Architecture:** Treat mobile as a refinement layer over the existing site, not a redesign of the whole application. Preserve the current desktop JSX and desktop Tailwind behavior, then add mobile-only layout, spacing, rhythm, interaction, and performance polish behind mobile media constraints.

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS, existing wedding components, existing optimized image pipeline, existing route shell/performance setup.

---

## Copy/Paste Prompt For The Mobile Pass

You are the mobile UX implementation agent for `VeePo-Web/hickoryandrose`.

Your only job is to create a world-class mobile version of the existing Hickory & Rose website. Think Fantasy.co craft quality, Apple-level clarity, luxury editorial pacing, and Hickory & Rose's own refined rustic wedding brand. This is a mobile wrap and mobile polish pass only.

Non-negotiable constraints:

1. Do not change desktop at all.
2. Do not change content, copy, headings, labels, button text, routes, metadata, schema, or image subject matter.
3. Do not alter the desktop layout, desktop spacing, desktop typography, desktop animations, or desktop component behavior.
4. Do not undo any performance work already in the repo.
5. Do not add heavy third-party libraries.
6. Do not convert this into a landing page or a new design system.
7. Do not hide important content on mobile unless it is purely decorative and the same content remains accessible.
8. Preserve SEO crawlability, one `h1` per page, route canonicals, image alt text, and current route shell behavior.

Definition of mobile:

- Primary target: 390 x 844.
- Secondary targets: 360 x 740, 375 x 812, 414 x 896, 430 x 932.
- Tablet guardrail: 768 x 1024 must not inherit cramped phone-only decisions.
- Desktop guardrail: 1024px and above must remain visually unchanged.

Implementation principle:

- Prefer mobile-only CSS under `@media (max-width: 767px)` in `src/index.css` when a change can be made without touching desktop classes.
- If JSX classes must change, preserve the existing desktop class behavior by moving current values behind `md:` or `lg:` prefixes and adding mobile defaults deliberately.
- For every changed section, verify desktop before and after at 1440 x 900 and 1280 x 832.
- For every changed section, verify mobile at 390 x 844 and 360 x 740.

Quality bar:

- Mobile must feel intentionally composed, not squeezed.
- Text must never overflow, collide, or feel too small to read.
- Touch targets must be at least 44px high/wide where interactive.
- Hero sections should retain emotional gravity but not trap the user.
- Long editorial sections should become rhythmic, scannable, and comfortable on thumb-scroll.
- Forms should feel calm, direct, and effortless.
- Image crops must preserve subject and elegance on portrait screens.
- Decorative motion must be reduced or delayed when it hurts readability or scroll smoothness.
- Performance must remain respected: no eager loading of below-fold assets, no new global JS burden, no desktop regressions.

Start by auditing the current mobile experience page by page. Then implement in small commits, one page or shared system at a time.

## Mobile Experience North Star

Hickory & Rose mobile should feel like a quiet luxury editorial app for wedding planning:

- spacious but not empty
- cinematic but fast
- tactile but not gimmicky
- polished but not over-decorated
- refined rustic, not generic beige luxury
- warm, calm, and high-trust

The mobile user is likely browsing between meetings, during planning conversations, or while comparing vendors. They need clarity, emotional confidence, and simple next steps.

## File Map

Primary shared files:

- `src/index.css` - mobile-only CSS utilities, mobile media queries, animation reductions, overflow fixes.
- `src/App.tsx` - should not need mobile UX changes unless mobile-only shell behavior is required.
- `src/components/wedding/Navigation.tsx` - mobile navigation, header readability, touch target spacing.
- `src/components/wedding/HeroSection.tsx` - home hero mobile composition.
- `src/components/wedding/LoadingScreen.tsx` - mobile loader sizing only if needed.
- `src/components/wedding/PageTransition.tsx` - mobile transition timing only if needed.
- `src/components/wedding/OptimizedImage.tsx` - do not alter unless image sizing/crop props need mobile support.
- `src/components/wedding/DeferredRender.tsx` - preserve performance behavior.
- `src/components/wedding/FullWidthImage.tsx` - mobile image crop and caption treatment.
- `src/components/wedding/CTASection.tsx` - mobile conversion section.
- `src/components/wedding/Footer.tsx` - mobile footer hierarchy and tap targets.

Primary route files:

- `src/pages/Index.tsx`
- `src/pages/Services.tsx`
- `src/pages/Portfolio.tsx`
- `src/pages/About.tsx`
- `src/pages/Approach.tsx`
- `src/pages/Journal.tsx`
- `src/pages/Inquire.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/NotFound.tsx`

High-risk component files likely to need mobile-only polish:

- `src/components/wedding/BrandPromiseSection.tsx`
- `src/components/wedding/TrustBarSection.tsx`
- `src/components/wedding/NowBookingSection.tsx`
- `src/components/wedding/ServicesOverviewSection.tsx`
- `src/components/wedding/GallerySection.tsx`
- `src/components/wedding/TestimonialSection.tsx`
- `src/components/wedding/EditorialSplitSection.tsx`
- `src/components/wedding/ProcessTeaserSection.tsx`
- `src/components/wedding/FounderTeaserSection.tsx`
- `src/components/wedding/StatsSection.tsx`
- `src/components/wedding/BrandManifestoSection.tsx`
- `src/components/wedding/FilmstripSection.tsx`
- `src/components/wedding/InstagramSection.tsx`
- `src/components/wedding/JournalTeaserSection.tsx`
- `src/components/wedding/ServiceTierCard.tsx`
- `src/components/wedding/PortfolioMasonryGrid.tsx`
- `src/components/wedding/AboutFounderSection.tsx`
- `src/components/wedding/AboutTestimonials.tsx`
- `src/components/wedding/ApproachProcessTimeline.tsx`
- `src/components/wedding/InquireFormSteps.tsx`
- `src/components/wedding/FAQImageMosaic.tsx`
- `src/components/wedding/FAQTestimonialCarousel.tsx`

## Baseline And Guardrails

### Task 1: Create Visual Baselines

**Files:**
- No source edits.
- Create local-only screenshots under an ignored screenshots folder if needed.

- [ ] Capture desktop screenshots at `1440x900` for `/`, `/services`, `/portfolio`, `/about`, `/approach`, `/journal`, `/inquire`, `/faq`, and `/404`.
- [ ] Capture mobile screenshots at `390x844` and `360x740` for the same routes.
- [ ] Record obvious mobile issues by route and section in `docs/mobile-ux-audit-2026-06-05.md`.
- [ ] Confirm the desktop screenshots are the preservation target.

Expected desktop rule:

```text
Any implementation that visibly changes desktop at 1024px and above fails, even if mobile improves.
```

### Task 2: Add Mobile-Only CSS Surface

**Files:**
- Modify: `src/index.css`

- [ ] Add a clearly marked mobile-only section near the end of `src/index.css`.
- [ ] Keep every selector inside `@media (max-width: 767px)`.
- [ ] Use mobile helper classes only when they prevent repeated JSX churn.
- [ ] Do not change existing global CSS outside the mobile-only block unless fixing a mobile-only overflow bug.

Required CSS scaffold:

```css
/* Mobile-only Hickory & Rose UX pass.
   Desktop must remain unchanged. Keep all rules inside this media query. */
@media (max-width: 767px) {
  .mobile-safe-x {
    overflow-x: clip;
  }

  .mobile-touch-target {
    min-height: 44px;
    min-width: 44px;
  }

  .mobile-readable-measure {
    max-width: 34rem;
  }

  .mobile-section-rhythm {
    padding-top: clamp(4rem, 14vw, 6rem);
    padding-bottom: clamp(4rem, 14vw, 6rem);
  }
}
```

## Shared Mobile System Plan

### Task 3: Mobile Navigation

**Files:**
- Modify: `src/components/wedding/Navigation.tsx`
- Modify: `src/index.css` only if menu overlay needs mobile-only CSS.

- [ ] Verify header does not cover hero text at 360px.
- [ ] Ensure logo and menu controls meet 44px touch target.
- [ ] Keep desktop nav unchanged by preserving `md:` and `lg:` class behavior.
- [ ] Ensure the menu does not cause horizontal overflow.
- [ ] Ensure route links remain crawlable anchors with unchanged text.
- [ ] Test opening and closing the menu with keyboard and touch.

Acceptance:

```text
At 390x844, the nav feels intentional and calm, with no cramped logo/menu collision.
At 1440x900, the nav screenshot is visually unchanged.
```

### Task 4: Mobile Typography And Rhythm

**Files:**
- Modify: `src/index.css`
- Modify route/component class names only when the existing mobile scale is broken.

- [ ] Audit all `text-display-*`, giant script marks, decorative numerals, and oversized watermarks on mobile.
- [ ] Preserve desktop type scale.
- [ ] Add mobile-only clamps for hero display sizes if they overflow or create awkward wraps.
- [ ] Keep line length comfortable: roughly 28 to 38 characters for body copy on phone.
- [ ] Avoid negative tracking and viewport-width font scaling.

Acceptance:

```text
Every route can be read at 360px without horizontal scroll, clipped words, or decorative type covering content.
```

### Task 5: Mobile Image Cropping

**Files:**
- Modify image-consuming components only where crops break on mobile.
- Do not change asset files unless compression/output is required.

- [ ] Check every hero image subject at 390x844.
- [ ] Use existing `object-position` or mobile-only class changes to protect faces, bouquets, venue details, and calligraphy.
- [ ] Keep route LCP image eager/high priority only for the hero.
- [ ] Keep below-fold images lazy and responsive.
- [ ] Preserve alt text exactly unless correcting a technical bug.

Acceptance:

```text
No hero image feels accidentally cropped on phone. No below-fold image becomes eager.
```

## Page-By-Page Mobile Plan

### Task 6: Home Page Mobile

**Files:**
- Modify: `src/components/wedding/HeroSection.tsx`
- Modify: `src/components/wedding/BrandPromiseSection.tsx`
- Modify: `src/components/wedding/TrustBarSection.tsx`
- Modify: `src/components/wedding/NowBookingSection.tsx`
- Modify below-fold home sections only if mobile issues are visible.

- [ ] Hero: reduce mobile visual clutter while keeping the same content and image.
- [ ] Hero: ensure headline breaks beautifully at 360px, 390px, and 430px.
- [ ] Hero: keep primary CTA visible or naturally reachable without awkward scroll.
- [ ] Brand promise: avoid stacked text feeling like a wall.
- [ ] Trust bar: convert dense rows into calm mobile rhythm without changing labels.
- [ ] Now booking: make availability feel premium and direct, with clear tap target.
- [ ] Gallery/filmstrip/Instagram: prevent multi-image sections from causing horizontal overflow.
- [ ] CTA: preserve conversion intent with mobile-first spacing and full-width tap comfort.
- [ ] Footer: make contact/social/navigation easy to scan with thumb.

Acceptance:

```text
Home mobile feels like the flagship experience, not a compressed desktop homepage.
Desktop home remains visually unchanged.
```

### Task 7: Services Page Mobile

**Files:**
- Modify: `src/pages/Services.tsx`
- Modify: `src/components/wedding/ServiceTierCard.tsx`
- Modify: `src/components/wedding/ServiceComparison.tsx`
- Modify: `src/components/wedding/ServicesVendorPartners.tsx`
- Modify: `src/components/wedding/ServicesInvestmentPhilosophy.tsx`

- [ ] Hero: preserve luxury tone while reducing vertical crowding.
- [ ] Service cards: make each package feel like a premium decision surface on phone.
- [ ] Service cards: keep feature lists scannable, with no cramped bullets.
- [ ] Comparison: avoid table-like compression; use mobile stacking if needed.
- [ ] Vendor partners: keep imagery and partner language elegant without overflow.
- [ ] Investment philosophy: make the closing rationale easy to absorb.

Acceptance:

```text
The services page helps a mobile user compare offerings without fatigue.
No package content changes.
Desktop services remains visually unchanged.
```

### Task 8: Portfolio Page Mobile

**Files:**
- Modify: `src/pages/Portfolio.tsx`
- Modify: `src/components/wedding/PortfolioFeaturedStory.tsx`
- Modify: `src/components/wedding/PortfolioMasonryGrid.tsx`

- [ ] Hero: protect image crop and headline readability.
- [ ] Featured story: ensure image/text sequence feels editorial, not split awkwardly.
- [ ] Masonry grid: create a mobile gallery rhythm with consistent image framing.
- [ ] Avoid layout shifts as images load.
- [ ] Keep every image and caption/content unchanged.

Acceptance:

```text
Portfolio mobile should feel like a curated editorial gallery with no accidental crop or awkward gutter.
Desktop portfolio remains visually unchanged.
```

### Task 9: About Page Mobile

**Files:**
- Modify: `src/pages/About.tsx`
- Modify: `src/components/wedding/AboutFounderSection.tsx`
- Modify: `src/components/wedding/AboutValuesGrid.tsx`
- Modify: `src/components/wedding/AboutProcessRibbon.tsx`
- Modify: `src/components/wedding/AboutTestimonials.tsx`
- Modify: `src/components/wedding/AboutPromises.tsx`

- [ ] Hero: keep the founder/brand story immediately legible.
- [ ] Founder section: make portrait and story sequence feel intimate and premium.
- [ ] Values: turn any dense grid into breathable stacked mobile cards or bands.
- [ ] Testimonials: ensure carousel controls and quote rhythm are thumb-friendly.
- [ ] Promises: keep visual hierarchy clear with no decorative overlay conflict.

Acceptance:

```text
About mobile builds trust quickly and feels personal, not text-heavy.
Desktop about remains visually unchanged.
```

### Task 10: Approach Page Mobile

**Files:**
- Modify: `src/pages/Approach.tsx`
- Modify: `src/components/wedding/ApproachStatsRibbon.tsx`
- Modify: `src/components/wedding/ApproachProcessTimeline.tsx`
- Modify: `src/components/wedding/ApproachDifferentiators.tsx`

- [ ] Hero: preserve calm process promise and reduce overlay density.
- [ ] Stats ribbon: keep stats readable and not tiny.
- [ ] Process timeline: convert to a premium mobile sequence if current timeline compresses.
- [ ] Differentiators: keep cards/sections clear and touch-scroll friendly.
- [ ] Reduce mobile motion if timeline scroll feels heavy.

Acceptance:

```text
Approach mobile should make the process feel calm and inevitable.
Desktop approach remains visually unchanged.
```

### Task 11: Journal Page Mobile

**Files:**
- Modify: `src/pages/Journal.tsx`
- Modify: `src/components/wedding/JournalFeatured.tsx`
- Modify: `src/components/wedding/JournalArticleCard.tsx`

- [ ] Hero: avoid oversized decorative text interfering with the image.
- [ ] Filter tabs: make horizontal scrolling intentional, accessible, and not cramped.
- [ ] Featured article: preserve editorial hierarchy.
- [ ] Article cards: keep image, category, title, excerpt, date, and read time readable.
- [ ] Newsletter form: keep input and button large enough for touch.

Acceptance:

```text
Journal mobile feels like a premium magazine index.
Desktop journal remains visually unchanged.
```

### Task 12: Inquire Page Mobile

**Files:**
- Modify: `src/pages/Inquire.tsx`
- Modify: `src/components/wedding/InquireFormSteps.tsx`
- Modify: `src/components/wedding/InquireStepIndicator.tsx`
- Modify: `src/components/wedding/InquireCelebration.tsx`

- [ ] Hero: make the inquiry promise clear without excessive height.
- [ ] Form intro: keep reassurance visible and calm.
- [ ] Step indicator: make it readable at 360px.
- [ ] Inputs: ensure 44px minimum height, comfortable spacing, visible focus.
- [ ] Buttons: full-width or thumb-friendly where appropriate.
- [ ] Error and validation states: do not change wording, only spacing/readability.
- [ ] Celebration: ensure submitted state fits mobile without clipping.

Acceptance:

```text
Inquire mobile feels like the easiest path to contact Hickory & Rose.
No form content or validation meaning changes.
Desktop inquire remains visually unchanged.
```

### Task 13: FAQ Page Mobile

**Files:**
- Modify: `src/pages/FAQ.tsx`
- Modify: `src/components/wedding/FAQImageMosaic.tsx`
- Modify: `src/components/wedding/FAQTestimonialCarousel.tsx`

- [ ] Hero: keep question/search intent legible.
- [ ] FAQ categories: ensure taps are comfortable and wrapping is clean.
- [ ] Accordions: preserve all question/answer content and semantics.
- [ ] Mosaic: keep mobile crops intentional.
- [ ] Testimonials: avoid cramped quote controls.

Acceptance:

```text
FAQ mobile is fast to scan and easy to tap, with all SEO content intact.
Desktop FAQ remains visually unchanged.
```

### Task 14: 404 Mobile

**Files:**
- Modify: `src/pages/NotFound.tsx`

- [ ] Protect image crop.
- [ ] Keep route recovery buttons thumb-friendly.
- [ ] Ensure no console errors return.
- [ ] Keep desktop unchanged.

Acceptance:

```text
404 mobile feels polished and helpful, not like an afterthought.
```

## Verification Plan

Run after every page group:

```powershell
npm run lint
npm test
npm run build
```

Expected:

```text
lint exits 0, existing Fast Refresh warnings are acceptable unless this task introduces new errors.
tests pass.
build passes and prerenders route shells.
```

Browser verification:

- Open local production build.
- Check mobile at 360x740, 390x844, 414x896.
- Check desktop at 1440x900 and 1280x832.
- Visit `/`, `/services`, `/portfolio`, `/about`, `/approach`, `/journal`, `/inquire`, `/faq`, `/404`.
- Confirm no horizontal scroll on mobile.
- Confirm one `h1` per page.
- Confirm console has no new errors.
- Confirm desktop screenshots are visually unchanged.

Performance verification:

- Re-run Lighthouse for at least `/`, `/services`, `/portfolio`, `/inquire`, `/faq`.
- Confirm SEO remains 100.
- Confirm Best Practices remains 100.
- Confirm CLS remains below 0.1.
- Confirm no below-fold mobile polish added eager images or new global JS.

## Commit Cadence

Use small commits:

1. `docs: add mobile ux implementation plan`
2. `style: add mobile-only ux utilities`
3. `style: polish mobile navigation and hero`
4. `style: polish mobile home sections`
5. `style: polish mobile services and portfolio`
6. `style: polish mobile about and approach`
7. `style: polish mobile journal faq and inquiry`
8. `test: document mobile verification results`

Do not combine desktop-risk changes with multiple pages. If a desktop regression appears, revert the smallest commit that caused it.

## Stop Conditions

Stop and report before proceeding if:

- A requested mobile improvement cannot be made without visible desktop change.
- A content string needs changing to fit mobile.
- A page requires structural SEO changes.
- A component uses desktop-only assumptions that would require a deeper redesign.
- Lighthouse SEO or Best Practices drops below 100.
- CLS rises above 0.1.

## Final Acceptance

The mobile pass is complete only when:

- Every route has been checked at 360, 390, 414, and 430px widths.
- Desktop at 1024px and above is unchanged.
- No content was changed.
- No route metadata/schema/canonical behavior was changed.
- All tests/build/lint pass.
- SEO is still 100 in Lighthouse on audited routes.
- The mobile experience feels intentionally designed section by section, with the Hickory & Rose brand still intact.
