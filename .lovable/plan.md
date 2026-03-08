

# Next Upgrade Pass: Journal/FAQ Refactor + NotFound Premium Polish + Homepage Section Depth

## Current State

All pages have GoldFrame heroes, BreathingDiamond ornaments, and gold accents. The homepage has ~20 polished sections. Inner pages (About, Services, Approach, Portfolio, Inquire, FAQ, Journal) all have premium editorial treatment. Console is clean.

**Remaining gaps:**

1. **Journal.tsx is 615 lines** -- exceeds the 250-line component guideline. The article card grid and featured article should be extracted into sub-components.
2. **FAQ.tsx is 497 lines** -- borderline. The testimonial carousel and image mosaic sections should be extracted for maintainability.
3. **NotFound page lacks GoldFrame** -- every other page hero has `<GoldFrame />` and a credential strip, but NotFound does not.
4. **Portfolio.tsx is 463 lines** -- the featured story spotlight and masonry gallery should be extracted.
5. **Homepage `EditorialImageBreak`** -- currently a single component that lacks the breathing diamond ornaments and gold corner frame treatment applied to equivalent image sections on inner pages.
6. **`contain: layout style` performance hardening** -- still not applied to the heaviest homepage sections (CTASection, EditorialSplitSection, ProcessTeaserSection, EditorialQuoteRibbon) which each have multiple infinite Framer Motion loops.

## Plan (6 items)

1. **Extract Journal sub-components** -- Create `src/components/wedding/JournalArticleCard.tsx` (the article card with gold shimmer, reading-time indicator, corner frames, pull-quote hover) and `src/components/wedding/JournalFeatured.tsx` (the featured article split layout). Reduces Journal.tsx from 615 to ~200 lines.

2. **Extract FAQ sub-components** -- Create `src/components/wedding/FAQTestimonialCarousel.tsx` (testimonial carousel with gold transitions) and `src/components/wedding/FAQImageMosaic.tsx` (the 3-panel editorial image mosaic). Reduces FAQ.tsx from 497 to ~250 lines.

3. **Extract Portfolio sub-components** -- Create `src/components/wedding/PortfolioFeaturedStory.tsx` (featured wedding spotlight) and `src/components/wedding/PortfolioMasonryGrid.tsx` (filtered masonry gallery with gold hover frames). Reduces Portfolio.tsx from 463 to ~200 lines.

4. **Upgrade NotFound with GoldFrame and credential strip** -- Add `<GoldFrame inset="20px" delay={1} />` to the hero section, add a bottom credential strip ("Lost? · We'll Guide You · Hickory & Rose") with breathing diamond separators, and add the editorial corner index mark matching other page heroes.

5. **Upgrade EditorialImageBreak** -- Add breathing diamond ornament between the top/bottom gradient vignettes, gold corner frame accents that reveal on hover, and a subtle gold radial glow behind the caption text.

6. **Apply `contain: layout style` to heavy animation sections** -- Add inline `style={{ contain: "layout style" }}` to the outermost wrapper of CTASection, EditorialSplitSection, ProcessTeaserSection, and EditorialQuoteRibbon to isolate paint from their infinite Framer Motion loops and prevent layout thrashing on lower-end devices.

## Technical Approach

- **New files** (6): `JournalArticleCard.tsx`, `JournalFeatured.tsx`, `FAQTestimonialCarousel.tsx`, `FAQImageMosaic.tsx`, `PortfolioFeaturedStory.tsx`, `PortfolioMasonryGrid.tsx`
- **Modified files** (7): `Journal.tsx`, `FAQ.tsx`, `Portfolio.tsx`, `NotFound.tsx`, `EditorialImageBreak.tsx`, `CTASection.tsx`, `EditorialSplitSection.tsx`, `ProcessTeaserSection.tsx`, `EditorialQuoteRibbon.tsx`
- **No new dependencies**
- All gold references use existing `hsl(var(--gold))` CSS variable
- Sub-component extraction is pure refactoring with no visual changes -- just moving existing JSX into named components with typed props

