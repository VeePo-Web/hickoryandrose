

# Upgrade Plan: Premium Editorial Polish Pass

## What I Inspected
All homepage sections (Hero, Gallery, LoveQuote, BrandPromise already upgraded), all inner pages (About, Services, Portfolio, Approach, Journal, Inquire, FAQ, NotFound), shared components (LoadingScreen, PageTransition, PreFooterDivider, Navigation, Footer), and console logs (clean).

## Current State
The homepage has received extensive gold-accent and breathing-diamond upgrades across ~20 sections. However, the **inner pages** (About, Services, Portfolio, Approach, Journal, Inquire) and several **shared components** still lack the same editorial polish level. Key gaps:

1. **Inner page heroes** -- All use basic parallax + gradient overlays but lack the gold-traced cinematic frame, credential strip, and editorial index marks that the homepage hero now has.
2. **PreFooterDivider** -- Missing breathing diamond ornament and gold shimmer accents present in other transitional sections.
3. **Approach page timeline** -- Process steps lack gold-traced connector lines and breathing step indicators consistent with the ProcessTeaserSection upgrade on the homepage.
4. **Services page tier cards** -- No gold accent borders, hover shimmer sweeps, or breathing diamonds between tiers.
5. **Journal page article cards** -- Missing gold corner frame reveals on hover and editorial credential labels.
6. **Portfolio masonry grid** -- No gold-traced hover frames or breathing diamond between filter pills.

## Plan (8 items)

1. **Create a reusable `GoldFrame` sub-component** -- Extracts the 4-line gold-traced cinematic frame pattern (used in HeroSection) into a composable wrapper. Avoids duplicating ~40 lines of motion markup across every inner page hero.

2. **Create a reusable `BreathingDiamond` sub-component** -- Extracts the breathing diamond + glow halo pattern into a single `<BreathingDiamond />` component with size/color props. Currently copy-pasted in 8+ sections.

3. **Upgrade all inner page heroes** (About, Services, Portfolio, Approach, Journal, Inquire, FAQ) -- Add `<GoldFrame />` overlay, a bottom credential strip (page-specific text), and corner editorial index marks matching the homepage hero treatment.

4. **Upgrade PreFooterDivider** -- Add breathing diamond ornament at the center divider, gold shimmer sweep on the horizontal rule, and ambient glow behind the season availability indicator.

5. **Upgrade Approach page timeline** -- Add gold-gradient connector lines between process steps (vertical line with `scaleY` scroll animation), breathing diamond nodes at each step marker, and shimmer sweep on active/hovered step.

6. **Upgrade Services page tier cards** -- Add gold gradient left-border reveal on hover, shimmer sweep across the card surface, and breathing diamond separators between tier sections.

7. **Upgrade Journal article cards** -- Add gold corner frame accents that reveal on hover (top-left + bottom-right traces), and a gold-gradient category pill.

8. **Upgrade Portfolio filter bar + grid cards** -- Add gold underline indicator on active filter, breathing diamond between filter pills, and gold-traced hover frames on masonry grid items.

## Technical Approach

- **New files**: `src/components/wedding/GoldFrame.tsx`, `src/components/wedding/BreathingDiamond.tsx` (each ~30-50 lines)
- **Modified files**: 7 inner pages + PreFooterDivider (adding imports + ~20-40 lines of markup each)
- **No new dependencies** -- all using existing Framer Motion + Tailwind + CSS variables (`--gold`)
- **Performance**: All new motion elements use `will-change: transform`, `pointer-events-none`, and viewport-triggered `whileInView` with `once: true` to avoid re-triggering. Reusable components reduce total bundle size vs. inline duplication.
- **Tokens**: All gold references use existing `hsl(var(--gold))` CSS variable; all spacing uses existing Tailwind `section-*` tokens.

