# Reception + Ceremony cinematic build

## Heads-up before we start
Your `/mnt/user-uploads/` folder also contains **IMG_7120, 7122, 7124, 7125, 7126, 7127** — I have not audited those yet. This plan ships the assets you've already approved. If those six are also reception/tent images at the same quality tier as 7123, several will likely fail audit and won't make the public site. I'll audit them in the next turn if you want; nothing in this plan depends on them.

## Asset decisions (locked from your answers)
| Asset | Decision | Treatment |
|---|---|---|
| IMG_8502.mov (close tablescape) | Approved | Trim 2.0–6.5s, 21:9 center-crop, 0.5× speed, warm-cream LUT, looping ambient |
| IMG_8506.jpeg (overhead flat-lay) | Approved | Hero still, magazine crop |
| IMG_8519.jpeg (long-table perspective) | Approved | 4:5 crop, vignette + soft blur on upper third to mute venue background |
| IMG_8492.mov (pews + stained glass) | Approved — no caption | Heavy treatment: B&W → soft warm grade, 0.6× speed, vignette |
| IMG_8494.mov (altar + crucifix) | Approved — no caption | Paired with #1, same grade, no overlay text |
| IMG_8503.mov (wide reception, PA visible) | Tight crop behind text | 21:9 sliver of centerpiece run only, B&W, 25% opacity, behind body text in Studio Promises beat |
| IMG_7123.jpeg (tent table) | Detail tile only | Crop to wooden "8" table-number + single mercury votive on linen, desaturated, ~180×240px tile in a gallery grid |

## What gets built

### 1. `CeremonyInterludeSection.tsx` (NEW)
- Full-bleed two-video diptych on the homepage, placed between the existing Hero/Manifesto beat and the new Reception beat.
- Left half: IMG_8492 (pews/light). Right half: IMG_8494 (altar). Both autoplay muted loop, slow grade.
- Gold hairline divider between, letterbox bars top/bottom, film-index mark `CR · 01`.
- No caption text per your instruction — visuals carry it.
- Reduced-motion fallback: first frame of each as still image.

### 2. `ReceptionDetailsSection.tsx` (NEW)
- Three-column editorial row on desktop, stacked on mobile.
- Left: IMG_8502 video (looping ambient tablescape).
- Center: IMG_8506 flat-lay still with eyebrow "Reception" + headline "Welcomed by name." + 2-line body.
- Right: IMG_8519 perspective still, 4:5, vignetted.
- Secondary micro-row below: existing blurred seating-board pattern + the IMG_7123 desaturated detail tile + a small typographic mark. Three tiles, equal weight, treated as memorabilia not hero imagery.
- Film-index mark `RC · 02`, same gold-corner frame system as the rest of the site.

### 3. Quiet "Studio Promises" treatment
- Pick the existing `AboutPromises` (or `BrandPromiseSection`) beat and add IMG_8503 as a B&W, 25% opacity, tight-crop background video behind the text. No new section — just background bleed.

### 4. Asset pipeline
- All `.mov` and `.jpeg` files uploaded via `lovable-assets create` from `/mnt/user-uploads/` → `.asset.json` pointers in `src/assets/`. No binaries committed.
- Video treatments (trim, crop, speed, grade) handled via CSS `object-fit`, `clip-path`, `filter`, and `playbackRate` on the `<video>` element — no re-encode. This keeps fidelity high and avoids ffmpeg in the build.

### 5. Page wiring
- New beats inserted into `src/pages/Index.tsx` (homepage) in this order: Hero → Manifesto → **CeremonyInterlude (NEW)** → **ReceptionDetails (NEW)** → existing downstream sections.
- Promises background-video edit applied in place.

## Technical notes
- All videos: `playsInline muted loop autoPlay preload="metadata"`, with `<source>` and a poster from first frame.
- `prefers-reduced-motion` → poster-only fallback for every video.
- All copy, color, and motion stay inside the existing semantic token system — no hardcoded colors.
- No new dependencies.
- No backend, no data, no auth touched.

## Out of scope
- Auditing the six un-reviewed `IMG_71xx` uploads.
- Re-encoding video files (treatments are CSS-only).
- Any change to existing Hero, Manifesto, or downstream sections beyond the Promises background bleed.
