# Lake Louise diptych — the season story on the home page

## What the photos are

Two of your own Lake Louise frames — same valley, opposite seasons:

- **IMG_7120** — frozen lake, low cloud, monochrome silver-blue, tiny figures crossing the ice. Cinematic, hushed, winter.
- **IMG_7122** — turquoise glacial water, snowcap, deep blue summer sky, willow in foreground. Saturated, alive, summer.

They are literally the same view in two seasons. That is rare and editorially powerful. We should not bury them in a gallery — they earn their own moment.

## Where they go: replace the placeholder rockies break on the home page

`src/pages/Index.tsx` lines 83-89 currently shows a single stock-feeling `FullWidthImage` with a generic alpine photo and the caption:

> "Serving Edmonton · Jasper · Banff · Lake Louise · The Canadian Rockies"

That slot is the perfect home: the page is *already* promising Lake Louise, but with a generic image. We replace it with the real thing — and double the impact by showing both seasons.

## What we'll build: `LakeLouiseDiptychSection`

A new dedicated component (`src/components/wedding/LakeLouiseDiptychSection.tsx`) — not a tweak to `FullWidthImage`, because the storytelling deserves its own composition.

### Composition (desktop)

```text
┌─────────────────────────────────────────────────────────────────────┐
│  [eyebrow] LAKE LOUISE · 51.4° N                                    │
│                                                                     │
│  Two seasons.                                                       │
│  One quiet valley.                                                  │  ← serif display, gold hairline beneath
│                                                                     │
│  ┌──────────────────────────┐ │ ┌──────────────────────────────┐  │
│  │                          │ │ │                              │  │
│  │   WINTER (IMG_7120)      │g│ │   SUMMER (IMG_7122)          │  │
│  │   frozen · silver        │o│ │   glacial · turquoise        │  │
│  │   tall portrait crop     │l│ │   tall portrait crop         │  │
│  │   slow parallax up       │d│ │   slow parallax down         │  │
│  │                          │ │ │                              │  │
│  │   ◷ Feb · −18°C          │ │ │   ◷ Aug · 14°C               │  │  ← film-strip corner caption
│  └──────────────────────────┘ │ └──────────────────────────────┘  │
│                              seam                                   │
│  We plan in both. The valley does the rest.                         │  ← italic serif, centered
└─────────────────────────────────────────────────────────────────────┘
```

Mobile: stacked, winter on top, gold horizontal seam between, same captions.

### Luxury treatments (consistent with the existing brand system already in use)

- **Cinematic letterbox bars** that slide in on hover (already a brand motif — see `AboutFounderSection`).
- **Gold corner reveals** on each panel — same 4-corner system used elsewhere.
- **Gold hairline seam** between the two images (vertical desktop, horizontal mobile) with a soft gradient fade at both ends — `linear-gradient(180deg, transparent, hsl(var(--gold)/0.5), transparent)`.
- **Slow opposite-direction parallax** — winter panel drifts up, summer panel drifts down, so as you scroll the seasons "trade places" subtly. `useScroll` + `useTransform`, ±4% Y.
- **Frame index marks** — `FR W·01` on winter, `FR S·01` on summer, top-right corner, tiny uppercase tracking, white/60. Same micro-detail used on the founder portrait.
- **Coordinates eyebrow** — `LAKE LOUISE · 51.4° N` in tracked uppercase sans-wedding. Quietly geographical, never touristy.
- **Watermark** — large faint italic `Louise` behind the type, ~14rem at `text-white/[0.04]`, scroll-bound parallax — matches the watermark treatment in `AboutPromises.tsx`.
- **Cool-to-warm gradient overlay** behind the diptych so the section reads as one composed band rather than two stacked photos.
- **Reduced motion**: parallax and slide-in respect `MotionConfig reducedMotion="user"` (already global in `App.tsx`).

### Type & tokens

- Headline: `font-serif-wedding` display-lg, "Two seasons. One quiet valley." (single line desktop, 2-line stack mobile).
- Eyebrow: `font-sans-wedding text-label uppercase` with gold hairline.
- Captions: same micro-caption system as the founder image (`text-[0.55rem] tracking-[0.15em] uppercase`).
- Closing line: `font-serif-wedding italic` muted-foreground, centered, with a gold rule above.
- Zero hardcoded colors — all `hsl(var(--gold))`, `text-foreground`, `bg-card`, etc.

## Asset handling

Both photos are non-trivial (200KB and 349KB) and never edited in-repo — perfect Lovable Assets case.

1. Upload via the CLI from `/mnt/user-uploads/IMG_7120.jpeg` and `/mnt/user-uploads/IMG_7122.jpeg`, with `--filename lake-louise-winter.jpg` and `--filename lake-louise-summer.jpg` respectively.
2. Write the pointer JSON to `src/assets/lake-louise-winter.jpg.asset.json` and `src/assets/lake-louise-summer.jpg.asset.json`.
3. Import the pointers in the new component and use `pointer.url` as the `src`.
4. Both `<img>` tags get `loading="lazy"` (section is below the fold), `decoding="async"`, and proper alt text:
   - Winter: `"Lake Louise frozen in February — Mount Victoria veiled in low cloud above silver ice"`
   - Summer: `"Lake Louise in August — glacial turquoise water beneath Mount Victoria and the Victoria Glacier"`

## Edits

1. **New file** `src/components/wedding/LakeLouiseDiptychSection.tsx` — the diptych described above.
2. **New file** `src/assets/lake-louise-winter.jpg.asset.json` — CDN pointer.
3. **New file** `src/assets/lake-louise-summer.jpg.asset.json` — CDN pointer.
4. **Edit** `src/pages/Index.tsx` — replace the `<FullWidthImage src={rockiesImage} … />` block (lines 83-89) with `<LakeLouiseDiptychSection />`. Add a `lazy()` import alongside the other lazy section imports so it stays code-split.
5. Leave the existing `rockiesImage` asset and the first `venueImage` FullWidthImage (line 68) alone — they live in different storytelling slots.

## Out of scope

- Not touching Portfolio, About, Approach, Services, FAQ.
- Not regenerating the OG image.
- Not adding a "Destinations" route or expanding the venue list — this is a single hero moment, not a new IA section.
- Not adding tourist-board language ("Visit Banff!") — captions stay sparse, factual, brand-quiet.

## Verification

After build:
1. Open `/` in preview at desktop (1920) and mobile (390). Confirm diptych renders side-by-side desktop, stacked mobile, with both real photos loaded from CDN.
2. Scroll past it slowly and confirm the opposite-direction parallax reads cleanly (no jitter, no layout shift).
3. Hover each panel — letterbox bars and gold corners reveal in sync.
4. Toggle prefers-reduced-motion in devtools and confirm parallax/reveals are disabled.
5. Lighthouse pass on `/` for CLS regressions (the new section is taller than the old one — confirm it doesn't push below-the-fold metrics).
