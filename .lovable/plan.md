

# About Page: "Our Promises" Redesign — From Bland Timeline to Cinematic Commitment

## Problem
The current `AboutPromises.tsx` is a vertical spine with text nodes. Despite good content, it reads as a flat list with no visual weight. Every other section on the About page has editorial imagery, parallax layers, and cinematic texture. This section has none -- making it the weakest link on the page.

## New Concept: "The Hickory & Rose Standard"
Replace the spine-list with a **full-bleed cinematic split section** -- a dramatic background image with overlaid commitment "standards" that feel like luxury brand principles, not bullet points.

### Visual Architecture
```
┌──────────────────────────────────────────────────┐
│  Full-bleed image (ceremony detail / florals)    │
│  with dark gradient overlay + grain + vignette   │
│                                                  │
│  ┌─────────────────────────────────────────┐     │
│  │  04 ── The Hickory & Rose Standard      │     │
│  │                                         │     │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐ │     │
│  │  │ Glass   │  │ Glass   │  │ Glass   │ │     │
│  │  │ Card 1  │  │ Card 2  │  │ Card 3  │ │     │
│  │  │         │  │         │  │         │ │     │
│  │  └─────────┘  └─────────┘  └─────────┘ │     │
│  │                                         │     │
│  │  ┌──────────────┐  ┌──────────────┐    │     │
│  │  │  Glass Card 4 │  │ Glass Card 5 │    │     │
│  │  └──────────────┘  └──────────────┘    │     │
│  │                                         │     │
│  │  Pull-quote + signature                 │     │
│  └─────────────────────────────────────────┘     │
└──────────────────────────────────────────────────┘
```

### Design Details
1. **Background**: Reuse `ceremony-setup.jpg` or `editorial-florals.jpg` with parallax scroll, dark overlay (70-80%), grain-overlay, vignette -- matching hero treatment
2. **Glass-morphism commitment cards**: Semi-transparent cards (`bg-white/[0.04]` with `backdrop-blur-sm` and `border: 1px solid hsl(var(--gold) / 0.08)`) in a responsive grid (3 top, 2 bottom centered on desktop; stacked on mobile)
3. **Each card contains**: Gold number, promise title in serif, subtext in light sans, gold underline accent on scroll
4. **Hover treatment**: Gold shimmer sweep (matching press section pattern) + corner accent reveals
5. **Bottom**: Pull-quote ("We don't make promises lightly") + "Hickory & Rose" script attribution
6. **Parallax watermark**: "Standard" in large serif italic at low opacity

### Content (unchanged, just restyled)
Same 5 promises, same subtexts -- the copy is strong, the presentation was the problem.

### Mobile
Single column of glass cards, full-width, with the background image still visible through the overlay.

## Implementation Plan

### Files Modified: 2
1. **`src/components/wedding/AboutPromises.tsx`** -- Complete rewrite: remove spine/diamond layout, replace with full-bleed cinematic section + glass card grid
2. **`src/pages/About.tsx`** -- No import changes needed (same component name), but remove the `FullWidthImage` editorial break directly above `<AboutPromises />` (line 326-330) since the new section IS a full-bleed image section, making the adjacent image break redundant and creating visual fatigue

### Key Technical Choices
- Parallax via `useScroll` + `useTransform` (existing pattern from CTASection/EditorialSplitSection)
- Glass cards via Tailwind utilities only (`backdrop-blur-sm`, fractional opacity borders) -- no new deps
- Gold shimmer sweep on hover reuses existing CSS pattern from press cards
- `grain-overlay` and `vignette` classes already exist in `index.css`
- `will-change: transform` on parallax image for GPU compositing

