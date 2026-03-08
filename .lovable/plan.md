

# Upgrade: FAQ Page — Inter-Category Editorial Mosaics & Accordion Polish

## Current State
The FAQ page accordion already has gold left-border reveals (line 164) and hover shimmer sweeps (line 165). The FAQImageMosaic component appears only once above the categories. There are no visual breaks between the three FAQ category groups -- they flow as a continuous text block separated only by a BreathingDiamond divider.

## What Feels Flat
1. **No editorial breathing room between categories** -- three dense text groups back-to-back without imagery creates visual fatigue. Premium editorial sites (Kinfolk, Cereal) interleave imagery between content groups.
2. **The accordion open state lacks depth** -- the gold left-border exists but the content area has no background shift to signal the "active" state visually.
3. **No parallax watermark** on the FAQ categories section, unlike every other major section (StatsSection, FAQSection on homepage, JournalTeaserSection).

## Plan (3 items)

### 1. Insert inline editorial image breaks between FAQ category groups
In `src/pages/FAQ.tsx`, after category index 0 and after category index 1, render a compact editorial image strip. Use the existing `faqEditorialImage` and `faqHeroImage` assets in alternating layouts:
- After "Services & Planning": a single centered image with aspect-[21/9] and gold corner frames, with a pull-quote overlay
- After "Process & Communication": a two-column asymmetric split (7/5 grid) using the other image, matching FAQImageMosaic style but inline and compact

These are simple `img` + `div` compositions directly in FAQ.tsx (no new component needed), wrapped in `ScrollReveal`.

### 2. Add subtle background tint on open accordion items
In the existing `AccordionItem` in FAQ.tsx, add a `group-data-[state=open]:bg-foreground/[0.015]` class to create a barely-visible warm tint when expanded, giving the open state more visual weight alongside the existing gold border.

### 3. Add parallax watermark to FAQ categories section
Add a `motion.div` with a large low-opacity serif "Answers" watermark that tracks scroll via `useScroll`/`useTransform`, matching the pattern in FAQSection, JournalTeaserSection, and StatsSection.

## Files Modified
- `src/pages/FAQ.tsx` — inter-category image breaks, accordion bg tint, parallax watermark

