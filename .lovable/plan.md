# Use Meg's real photo everywhere the founder appears

## Findings

Four components render a founder portrait, and all four import the **same** asset:

```
@/assets/founder-portrait.jpg
```

Usages:
1. `src/components/wedding/FounderTeaserSection.tsx` — home page teaser
2. `src/components/wedding/AboutFounderSection.tsx` — About page "Meet Meg"
3. `src/components/wedding/ApproachDifferentiators.tsx` — Approach page
4. `src/pages/Approach.tsx` — Approach hero portrait

Other mentions of "Meg / founder / owner" across the site are **text-only** (headings, alt text, TODO comments, SEO copy) and do not render an image, so no portrait needs to be added there.

## Plan

1. Replace the binary at `src/assets/founder-portrait.jpg` with the uploaded `Meg.jpg`. Same path, same import — all 4 components pick it up automatically with zero code changes.
2. Remove the `TODO (5.11): Placeholder portrait — owner has no professional brand photos yet` comment in `AboutFounderSection.tsx` since we now have a real photo.
3. Spot-check the alt text on each of the 4 usages still reads correctly for Meg (it already does — "Meg Wolodko, founder of Hickory & Rose…"). No copy changes needed.

## Out of scope

- Not adding a new portrait to text-only sections (Brand Promise quote, FAQ, Portfolio, Index hero, etc.) — they intentionally don't show a face and adding one would change the layout.
- Not touching the OG image, About page secondary lifestyle image (`alt="Wedding planner Meg reviewing day-of timeline…"` — that's a separate ceremony scene), or any other assets.
- No new components, no layout changes.

## Verification

After the swap, open the preview at `/`, `/about`, and `/approach` and confirm Meg's new photo renders in all four spots at the existing aspect ratios (3/4 portrait crops). The uploaded photo is roughly 4:3 landscape, so the existing `object-cover` framing will crop to portrait — head/shoulders should remain centered. If framing looks off on any one of the four, follow-up with a per-location `object-position` tweak.
