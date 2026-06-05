# Hickory & Rose Mobile UX Audit - 2026-06-05

## Scope

Mobile-only UX performance wrap for `VeePo-Web/hickoryandrose`.

Hard constraints preserved:

- No desktop layout changes at 768px and above.
- No copy, route, metadata, schema, or image subject changes.
- No new third-party runtime libraries.
- No changes to eager/lazy image intent.
- Existing deferred route/section rendering behavior preserved.

## Baseline Capture

Local production build was served at `http://127.0.0.1:4174`.

Baseline screenshots were captured under:

- `C:\Users\Nuc2020\AppData\Local\Temp\hickory-mobile-baseline-settled-2026-06-05-fast`

Audited viewports:

- Desktop: 1440x900, 1280x832
- Phone: 360x740, 390x844, 414x896, 430x932
- Tablet guardrail: 768x1024

Audited routes:

- `/`
- `/services`
- `/portfolio`
- `/about`
- `/approach`
- `/journal`
- `/inquire`
- `/faq`
- `/404`

## Baseline Findings

Shared mobile issues:

- 360px and 390px phone widths had horizontal scroll risk on most routes.
- The dominant cause was decorative absolute layers: large watermarks, radial glows, hover shimmer planes, and fixed-width atmospheric elements.
- Several mobile interactive targets were under the 44px Apple HIG threshold, especially nav controls, footer legal links, footer top action, and the home scroll affordance.
- Sticky filter rows on journal and portfolio needed mobile-first horizontal-scroll behavior.
- Form controls needed mobile-safe 16px input text and stronger minimum touch height.
- Animated/decorative headings needed a mobile clamp without changing desktop typography.
- Full-page screenshots can show blank bands unless the page is scrolled first, because below-fold sections are intentionally deferred for performance.

Page notes:

- Home: hero was emotionally strong, but phone polish needed overflow control, safer heading rhythm, clean touch targets, and bottom credential wrapping.
- Services: package sections needed mobile containment for decorative tier watermarks and non-sticky image behavior on phone.
- Portfolio: filter controls needed intentional horizontal scroll, and masonry/decorative layers needed clipping.
- About: founder/story sections needed mobile overflow containment around editorial glows and decorative marks.
- Approach: process sections needed mobile-safe decoration sizing and reduced risk from hover-only shimmer planes.
- Journal: filter tabs needed mobile horizontal-scroll behavior and article index decoration needed clipping.
- Inquire: form fields/buttons needed mobile touch sizing, 16px input text, and safer footer/link targets.
- FAQ: accordion route needed decorative watermark containment while keeping all FAQ text crawlable.
- 404: recovery actions and decorative 404/glow layers needed mobile containment.

## Implemented Mobile-Only Layer

Primary source change:

- `src/index.css`

Implementation summary:

- Added the required `@media (max-width: 767px)` mobile-only UX block.
- Added shared helper classes: `.mobile-safe-x`, `.mobile-touch-target`, `.mobile-readable-measure`, `.mobile-section-rhythm`.
- Clipped phone-only horizontal overflow at `html`, `body`, `#root`, `main`, `section`, and `footer`.
- Added mobile typography clamps for display sizes while preserving desktop Tailwind values.
- Removed mobile negative heading tracking and protected normal word wrapping.
- Added mobile-safe container padding.
- Added 44px minimum interactive targets for phone.
- Added mobile-specific nav hit areas and menu overlay scroll containment.
- Added mobile hero sizing, heading measure, credential wrapping, and scroll button hit area.
- Constrained decorative fixed-width glows/watermarks to the phone viewport.
- Made sticky filter rows horizontally scrollable on phone.
- Disabled sticky image behavior on phone for sections that rely on desktop sticky art direction.
- Set mobile form controls to 16px text and 44px+ heights.
- Made footer legal/top actions meet 44px minimum touch width/height.

## Verification Snapshot

After the mobile layer:

- Every route at 360x740, 390x844, 414x896, and 430x932 reported `horizontalOverflow: 0`.
- Every audited phone route reported `smallTargetCount: 0` after excluding the existing screen-reader-only skip link from visual target checks.
- Every audited route retained exactly one `h1`.
- Every audited route reported zero console errors in the Playwright layout sweep.
- 768x1024 tablet did not inherit phone-only rules because the implementation is capped at 767px.
- Desktop guardrail remains protected by the media-query boundary.

Follow-up visual captures:

- Scrolled mobile full-page pass: `C:\Users\Nuc2020\AppData\Local\Temp\hickory-mobile-visual-after-2026-06-05`
- Home hero wrap check: `C:\Users\Nuc2020\AppData\Local\Temp\hickory-hero-wrap-after-2026-06-05`
- Final layout metrics: `C:\Users\Nuc2020\AppData\Local\Temp\hickory-mobile-final-metrics-2026-06-05`

Command verification:

- `npm run lint`: passed with zero errors. Existing Fast Refresh export warnings remain unchanged.
- `npm test`: passed, 1 test file and 1 test passed.
- `npm run build`: passed and prerendered the 9 route shells. Existing Browserslist and Tailwind ambiguous-class warnings remain unchanged.

Mobile Lighthouse spot checks:

| Route | Performance | Accessibility | Best Practices | SEO | CLS | LCP | FCP | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 47 | 96 | 100 | 100 | 0 | 4960 ms | 1990 ms | 2258 ms |
| `/services` | 53 | 100 | 100 | 100 | 0.000405 | 5277 ms | 2111 ms | 1155 ms |
| `/portfolio` | 55 | 96 | 100 | 100 | 0.000405 | 5081 ms | 2084 ms | 945 ms |
| `/inquire` | 56 | 96 | 100 | 100 | 0.000405 | 4646 ms | 2096 ms | 1102 ms |
| `/faq` | 48 | 96 | 100 | 100 | 0.000405 | 4761 ms | 2226 ms | 1910 ms |

Lighthouse reports were written under `C:\Users\Nuc2020\AppData\Local\Temp\hickory-lighthouse-mobile-2026-06-05`. Lighthouse emitted Windows temp-folder cleanup `EPERM` messages after report generation, but the JSON reports were created and parsed successfully.

Performance note:

- SEO and Best Practices stayed at 100 on all sampled routes, and CLS stayed effectively zero.
- Mobile Performance remains below the 90+ target because the existing app shell, page transition system, and Framer-heavy animation runtime dominate LCP/TBT. This mobile-only wrap intentionally avoided architecture and desktop-affecting changes, so the next 90+ Lighthouse pass should focus on JS execution, animation hydration boundaries, and critical image/route loading strategy.

## Final Page Coverage

- Home: mobile hero, typography, trust credentials, touch targets, below-fold overflow, CTA/footer handling.
- Services: hero, packages, comparison/filter-like rows, vendor/investment sections, CTA/footer.
- Portfolio: hero, featured story, filter tabs, masonry gallery, CTA/footer.
- About: hero, founder, values, process, testimonials, promises, recognition/footer.
- Approach: hero, stats, process timeline, documentary strips, differentiators, CTA/footer.
- Journal: hero, featured article, filter tabs, article cards, newsletter, CTA/footer.
- Inquire: hero, expectation steps, form wizard, step controls, trust signals, footer.
- FAQ: hero, image mosaic, stats, FAQ categories/accordions, testimonial carousel, CTA/footer.
- 404: hero, recovery actions, suggested links, footer.
