

# Upgrade: JournalFeatured Premium Polish & Portfolio Grid Letterbox Treatment

## Assessment

The JournalArticleCard, Navigation page-context label, and Journal filter bar upgrades from the previous round are **already fully implemented**. All letterbox bars, staggered metadata reveals, gold shimmer sweeps, and the nav context label are live in the codebase.

## What Still Needs Elevation

### 1. JournalFeatured component lacks parity with article cards
The featured article (the large hero-style card at the top of Journal) is missing the premium treatments that the grid cards now have:
- No **letterbox cinematic bars** on image hover
- No **gold shimmer sweep** across the image
- No **reading-time circular indicator**
- The "Read Article" CTA lacks the gold underline expand animation
- The pull-quote border-left uses a flat `border-primary/15` instead of a gold gradient

### 2. PortfolioMasonryGrid cards lack letterbox + shimmer parity
The portfolio grid cards have gold corner frames and gradient overlays but are missing:
- **Letterbox cinematic bars** (top/bottom) matching the Journal card treatment
- **Gold shimmer sweep** on hover matching Journal cards
- The "View Story" text lacks the staggered delay sequencing

## Plan (4 items)

1. **JournalFeatured -- Add letterbox bars + gold shimmer sweep** to the featured image container, matching JournalArticleCard's treatment (6% height bars, shimmer gradient sweep on group-hover)

2. **JournalFeatured -- Add reading-time circular indicator** in the top-right of the featured image, and upgrade the pull-quote left border to a gold gradient using inline style

3. **JournalFeatured -- Upgrade "Read Article" CTA** with a gold underline that expands on hover (matching the title treatment on article cards)

4. **PortfolioMasonryGrid -- Add letterbox bars + gold shimmer sweep** to each portfolio card image container, bringing visual consistency with the Journal cards

## Files Modified
- `src/components/wedding/JournalFeatured.tsx` -- letterbox bars, shimmer sweep, reading-time indicator, pull-quote gold border, CTA polish
- `src/components/wedding/PortfolioMasonryGrid.tsx` -- letterbox bars, gold shimmer sweep on card images

