

# Services Page Tier Cards -- Premium Hover Upgrade

## Current State

`ServiceTierCard.tsx` already has a diagonal shimmer sweep (line 79-86) but it targets the full section and is subtle. Missing: gold border glow on hover, scale lift on the content card area. The image `GoldCornerFrame` is only `w-6 h-6` (should be `w-8 h-8` per site standard).

Additionally, the **ServiceComparison** rows and **"Why Couples Choose Us"** differentiator cards (Services.tsx lines 369-401) lack hover polish -- plain `border-border/40` dividers with no gold glow or shimmer.

## Plan (6 edits, 2 files)

### `src/components/wedding/ServiceTierCard.tsx`

1. **Gold border glow on content column**: Wrap the content `<div>` (line 106) in a container with `group-hover/tier` box-shadow transition: `0 0 20px hsl(var(--gold) / 0.08), 0 0 40px hsl(var(--gold) / 0.04)` -- subtle ambient gold glow appearing on section hover.

2. **Subtle scale lift on content**: Add `transition-transform duration-700 group-hover/tier:scale-[1.01]` to the content column for a barely perceptible lift that signals interactivity.

3. **Upgrade image GoldCornerFrame to w-8 h-8**: Change from `w-6 h-6` to `w-8 h-8` for consistency with Differentiators and AboutFounder sections.

4. **Add gold glow to image on hover**: Add a `box-shadow` transition on the image container matching the gold ambient glow pattern.

### `src/pages/Services.tsx`

5. **"Why Couples Choose Us" cards -- gold divider upgrade**: Replace `border-border/40` dividers with gold gradient borders using `background: linear-gradient(...)` on pseudo-elements. Add shimmer sweep on hover per card.

6. **"Why Couples Choose Us" cards -- gold glow + scale**: Add `group-hover` gold box-shadow and `scale-[1.02]` lift to each differentiator card.

