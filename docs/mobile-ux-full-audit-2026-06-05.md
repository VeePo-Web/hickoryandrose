# Hickory & Rose Mobile UX Full Audit - 2026-06-05

## Scope

This audit follows the attached Mobile-Only Fantasy UX Wrap prompt.

Hard boundary:

- Mobile only.
- No desktop audit or desktop recommendations except "do not touch it."
- No copy, route, metadata, schema, or image-subject changes recommended unless noted as a technical accessibility or SEO bug.
- No implementation changes were made during this audit.

Primary mobile targets:

- 360x740
- 375x812
- 390x844
- 414x896
- 430x932

Routes audited:

- `/`
- `/services`
- `/portfolio`
- `/about`
- `/approach`
- `/journal`
- `/inquire`
- `/faq`
- `/404`

## Audit Method

Local production build:

- `http://127.0.0.1:4174`

Artifacts:

- Metrics: `C:\Users\Nuc2020\AppData\Local\Temp\hickory-mobile-ux-audit-2026-06-05\metrics.json`
- Summary: `C:\Users\Nuc2020\AppData\Local\Temp\hickory-mobile-ux-audit-2026-06-05\summary.json`
- Screenshots: `C:\Users\Nuc2020\AppData\Local\Temp\hickory-mobile-ux-audit-2026-06-05\screenshots`

The sweep captured top, middle, bottom, and full-page screenshots at 360px and 390px, then gathered hard metrics across all five target widths.

## Automated Result

Strong foundation:

- 45 mobile route/viewport combinations audited.
- `horizontalOverflow: 0` on every route and every audited phone width.
- One visible `h1` on every route.
- Zero console errors and zero page errors.
- Each 390px route has exactly one eager/high-priority image, the hero image.
- No below-fold image was promoted to eager loading by the mobile pass.
- FAQ accordions open cleanly with `horizontalOverflow: 0`.

Remaining issues:

- Mobile nav overlay is visually broken when opened.
- `/inquire` direct load auto-scrolls to the form and skips the hero.
- Home headline final layout is clean, but the mobile entrance animation briefly fragments the word "effortlessly."
- Portfolio and Journal sticky filters persist into the footer.
- Portfolio "Day-Of" filter wraps awkwardly on phone.
- FAQ testimonial carousel controls are visually elegant but below the 44px touch-width target.
- Several editorial labels and metadata lines render below 12px on mobile.
- A few visible images have empty alt text.
- Approach `h1` text extraction reads as `HowWePlanYourPerfectDay` because words are animated without text spaces in the DOM.

## Priority Findings

### P0 - Mobile Menu Opens As A Blank Panel

Evidence:

- `home-390x844-menu-motion-no-preference.png`
- `home-390x844-menu-motion-reduce.png`

Observed:

- At 390x844, tapping the hamburger opens a blank warm-white panel with only the close icon visible.
- The nav links exist in the DOM, but their viewport rect starts around `y: 1819` from a fresh top-of-page open.
- After a deep scroll, the links start around `y: 11924`.
- Overlay rect measured `h: 4188` on a 390x844 viewport, so its centered content lands far below the screen.

Likely source:

- `src/components/wedding/NavigationMobileMenu.tsx:19` uses `fixed inset-0`.
- `src/components/wedding/NavigationMobileMenu.tsx:73` centers content in a `flex-1` column.
- The menu renders inside the transformed `motion.nav` from `src/components/wedding/Navigation.tsx`, creating a bad containing block for the "fixed" overlay.

Mobile-only fix direction:

- Render the mobile menu outside the transformed nav tree, or portal it to `document.body`.
- At minimum, force the overlay to `height: 100dvh`, `max-height: 100dvh`, and `overflow-y: auto` inside the mobile media query.
- Verify opening at top, middle, and bottom scroll positions.
- Verify keyboard focus reaches visible menu links.

### P0 - Inquire Page Skips The Hero On Direct Mobile Load

Evidence:

- `inquire-390x844-top-settled-3s.png`
- Direct `/inquire` load at 390x844 settled at `scrollY: 803`.

Observed:

- The first impression on the conversion route is the form area, not the hero.
- The user misses the opening promise, hero image, and trust setup.

Likely source:

- `src/components/wedding/InquireFormSteps.tsx:76` has `autoFocus` on the first input.

Mobile-only fix direction:

- Disable initial autofocus on phone so direct visitors start at the top.
- Preserve validation focus behavior after errors.
- If desktop autofocus must be preserved, gate the initial autofocus by viewport or pointer type.

### P1 - Home Hero Headline Fragments During Mobile Entrance

Evidence:

- `home-360x740-top.png`
- `home-390x844-top.png`
- Settled screenshots after 3 seconds are clean: `home-360x740-top-settled-3s.png`, `home-390x844-top-settled-3s.png`.

Observed:

- Final mobile layout is good.
- During entrance, the character-by-character animation briefly exposes a broken partial state of "effortlessly."
- On a luxury brand homepage, that moment reads less intentional than the rest of the site.

Likely source:

- `src/components/wedding/HeroSection.tsx:24`
- `src/components/wedding/HeroSection.tsx:26`
- `src/components/wedding/HeroSection.tsx:205`
- `src/components/wedding/HeroSection.tsx:207`

Mobile-only fix direction:

- Keep desktop as-is.
- On mobile, animate by word or line instead of individual characters.
- Shorten stagger timing on phone.
- Honor reduced-motion with a no-fragment fade/reveal.

### P1 - Portfolio And Journal Filters Stick Into Footer

Evidence:

- `portfolio-390x844-bottom.png`
- `journal-390x844-bottom.png`

Observed:

- Portfolio and Journal filters remain sticky even when the user reaches footer/navigation content.
- The control is useful in the content index, but it becomes irrelevant visual chrome in the footer.

Likely source:

- `src/pages/Portfolio.tsx:133`
- `src/pages/Journal.tsx:97`

Mobile-only fix direction:

- Scope sticky behavior to the gallery/article-list region.
- Or disable sticky on phone and keep a horizontal-scroll filter row in normal document flow.
- Verify it does not appear over CTA, pre-footer, or footer sections.

### P1 - Portfolio "Day-Of" Filter Wraps Poorly

Evidence:

- `portfolio-360x740-mid.png`
- `portfolio-390x844-mid.png`

Observed:

- The filter label breaks as `DAY-` and `OF`.
- This is not content overflow, but it feels like a cramped control rather than an intentional mobile segment.

Likely source:

- `src/pages/Portfolio.tsx:135`
- `src/pages/Portfolio.tsx:136`

Mobile-only fix direction:

- Add `whitespace-nowrap` to filter buttons.
- Let the filter row scroll horizontally with clear edge padding.
- Keep the text exactly `Day-Of`.

### P2 - FAQ Testimonial Pager Is Below Touch Width Target

Evidence:

- `faq-390x844-mid.png`
- Metrics report three visible controls at `w: 32`, `h: 44`.

Likely source:

- `src/components/wedding/FAQTestimonialCarousel.tsx:59`

Mobile-only fix direction:

- Keep the visual bar at 32px if desired.
- Wrap it in a 44px minimum hit area, or apply `min-width: 44px` with an inner bar.

### P2 - Tiny Editorial Text Reduces Mobile Readability

Evidence:

- Tiny text appears on all 45 audited route/viewport combinations.
- Most common sizes: `8px`, `8.8px`, `9.6px`, `11.2px`.

High-impact examples:

- Services hero credential labels at 8px.
- About hero credential labels at 8px.
- Inquire hero trust labels at 8px.
- Footer "Travel fees apply outside Greater Edmonton." at 9.6px.
- Home "Begin Your Story" nested span measured 11.2px in one CTA state.

Mobile-only fix direction:

- Set a mobile readability floor for visible editorial metadata, around 11.5px to 12px.
- Reduce tracking on the smallest uppercase labels instead of shrinking text below readable size.
- Preserve desktop microtype exactly.

### P2 - Approach H1 Has No Spaces In Extracted Text

Evidence:

- Mobile metric extracted the Approach `h1` as `HowWePlanYourPerfectDay`.

Likely source:

- `src/pages/Approach.tsx:181`
- `src/pages/Approach.tsx:187`

Observed:

- The visual heading reads correctly.
- The DOM/accessibility text can be interpreted as one joined word.

Mobile-safe fix direction:

- Preserve the visual word animation.
- Add actual spaces between mapped word spans, or provide an accessible `aria-label="How We Plan Your Perfect Day"` while hiding duplicate visual-only spans from assistive tech if needed.

### P2 - Visible Image Alt Hygiene

Evidence from 390px image audit:

- Home: two visible images with empty alt.
- Services: one visible image with empty alt.
- Portfolio: one visible image with empty alt.
- About: two visible images with empty alt.
- Approach: one visible image with empty alt.
- Journal: one visible image with empty alt.
- 404: hero image has empty alt.

Mobile-safe fix direction:

- If an image is purely decorative, keep `alt=""`.
- If it carries content or product/brand context, add accurate alt without changing visible content.
- The 404 hero should be reviewed first because it is the only image on that route.

## Page-By-Page UX Notes

### Home

Passes:

- Final hero composition is strong after animation settles.
- Hero image crop feels cinematic and brand-appropriate at 360 and 390.
- No horizontal overflow.
- CTA and trust row are reachable.

Needs:

- Fix shared mobile menu.
- Fix mobile headline entrance fragmentation.
- Raise tiny metadata/CTA states to a readable floor.

### Services

Passes:

- Hero crop, service package flow, comparison, partner, and investment sections are readable.
- Package content stacks cleanly.
- CTA/footer do not overflow.

Needs:

- Raise tiny hero credential labels and micro-overlines.
- Keep small investment/design labels readable without losing editorial tone.

### Portfolio

Passes:

- Hero and gallery crops feel intentional.
- Masonry rhythm is strong on phone.
- No image-loading layout instability was observed.

Needs:

- Fix sticky filter leaking into footer.
- Prevent `Day-Of` from splitting.
- Keep filter row thumb-friendly and horizontally scrollable.

### About

Passes:

- Hero crop is intimate and on-brand.
- Founder/story sequencing feels premium.
- Testimonials are readable.

Needs:

- Tiny hero trust/status labels should be raised.
- Review visible images with empty alt.

### Approach

Passes:

- Hero composition is strong.
- Process timeline and differentiators scan well on phone.
- No horizontal overflow or interaction issues observed.

Needs:

- Fix accessible `h1` spacing.
- Keep small metadata readable.

### Journal

Passes:

- Hero, featured article, and article card rhythm feel editorial.
- Article imagery is well cropped.

Needs:

- Sticky filters should not persist into footer.
- Keep filter behavior consistent with Portfolio but with enough horizontal breathing room.

### Inquire

Passes:

- Form controls are comfortable.
- Inputs are 16px and easy to read.
- Step indicator is calm and usable after the user reaches it.

Needs:

- Remove mobile initial autofocus behavior so the route opens at the hero.
- Preserve focus only for user-triggered validation errors.
- Review tiny trust labels in the hero and response-time block.

### FAQ

Passes:

- Hero and mosaic image crops are good.
- FAQ buttons are large and readable.
- First FAQ item opens cleanly with no overflow.
- SEO content remains visible/crawlable.

Needs:

- FAQ testimonial carousel pager needs 44px-width hit targets.
- Tiny "Our Promise" and footer travel-fee text should be raised.

### 404

Passes:

- Route returns without console errors.
- No horizontal overflow.
- Recovery section is usable on phone.

Needs:

- Review whether the only hero image should have descriptive alt.
- Keep footer microcopy readable.

## Recommended Mobile-Only Fix Sequence

1. Fix the mobile nav overlay first. This is the only blocking UX issue.
2. Disable mobile initial autofocus on `/inquire`.
3. Replace mobile home headline character reveal with a word/line reveal.
4. Contain or disable mobile sticky filters for Portfolio and Journal.
5. Make Portfolio filter buttons `whitespace-nowrap` and horizontally scrollable.
6. Increase FAQ testimonial pager hit areas to 44px.
7. Add a mobile minimum font-size/letter-spacing rule for visible micro-labels.
8. Fix Approach `h1` accessible spacing.
9. Review visible empty-alt images and add alt only where the image is meaningful.

## Verification Required After Fixes

Mobile only:

- Recheck `/`, `/services`, `/portfolio`, `/about`, `/approach`, `/journal`, `/inquire`, `/faq`, and `/404`.
- Recheck 360x740, 375x812, 390x844, 414x896, and 430x932.
- Confirm mobile menu links are visible when opened from top, middle, and bottom scroll positions.
- Confirm `/inquire` direct load starts at `scrollY: 0`.
- Confirm no horizontal overflow.
- Confirm one `h1` per page.
- Confirm no console errors.
- Confirm all visible interactive controls meet 44px hit target.
- Confirm no new eager below-fold images.
- Run Lighthouse spot checks for `/`, `/portfolio`, `/inquire`, and `/faq` to confirm SEO and Best Practices remain 100 and CLS remains below 0.1.
