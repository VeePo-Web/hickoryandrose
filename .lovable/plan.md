

# Approach Page -- Next-Level Polish Pass

## Remaining Gaps Identified

After reviewing all three files in their current upgraded state, several areas still fall below Fantasy.co-level density:

1. **Hero watermark** (line 71): Flat `text-white` at 3% opacity. Every other page's watermark uses a gold gradient clip treatment. This is inconsistent.

2. **Philosophy image corners** (line 164): Still `w-6 h-6` while the site standard (Differentiators, AboutFounder) is `w-8 h-8`. Inconsistent detail.

3. **No grain/vignette on Promise quote section** (line 355): The sage-deep brand promise block lacks the `grain-overlay vignette` classes present on every other cinematic section across the site.

4. **Testimonial section missing grain overlay**: The inline testimonial (line 297) has no textural depth compared to equivalent sections on other pages.

5. **No scroll-down cue on hero**: The hero ends abruptly. Other pages (Services, Portfolio) include an animated chevron or scroll indicator. This page has none.

6. **Mobile gap in Philosophy**: The editorial image (line 151) is `hidden md:block`, leaving mobile with pure text and no visual weight. Need a mobile-visible image variant.

7. **Differentiators section has no closing ornament**: The list ends with the last gold divider but no terminal breathing diamond or signature element to mark section completion (unlike the Timeline which has one).

8. **Promise quote section attribution** (line 369): Uses plain `font-script` while the Testimonial section above uses a gold gradient quotation mark. The brand signature deserves a gold shimmer treatment.

## Plan (8 surgical edits, 2 files)

### `src/pages/Approach.tsx`

1. **Hero watermark gold gradient**: Replace flat `text-white` with `background: linear-gradient(...)` + `WebkitBackgroundClip: text` gold gradient treatment matching the site pattern.

2. **Hero scroll-down indicator**: Add an animated bouncing chevron/line at the bottom center of the hero, below the tag bar, matching the site's editorial scroll cue pattern.

3. **Philosophy image corners to w-8**: Upgrade from `w-6 h-6` to `w-8 h-8` for consistency with Differentiators and AboutFounder.

4. **Mobile image in Philosophy**: Add a `md:hidden` variant of the editorial image above the text column so mobile users see visual weight.

5. **Grain + vignette on sage-deep Promise section**: Add `grain-overlay vignette` classes to the Promise quote `<section>`.

6. **Grain overlay on Testimonial section**: Add `grain-overlay` class.

7. **Gold shimmer on brand signature**: Upgrade "Hickory & Rose" script in Promise section with gold gradient text treatment.

### `src/components/wedding/ApproachDifferentiators.tsx`

8. **Terminal breathing diamond**: Add a `BreathingDiamond` below the differentiator list to mirror the Timeline's closing ornament and provide editorial closure.

