# Responsive Video Bleed — BrandPromiseSection

Make the ambient `reception-wide.mov` background bleed behave seamlessly across mobile, tablet, and desktop without ever competing with the headline, drop‑cap quote, or pillar rows — while keeping load cost near zero on small screens.

## Problem today

`BrandPromiseSection.tsx` renders the video full‑section with a hard `scale(2.4)` and a radial center mask. On <768px viewports this:
- Pushes motion directly behind the drop‑cap pull‑quote, reducing legibility.
- Loads a ~22 MB `.mov` on phones where it is barely visible.
- Uses a radial mask sized for desktop, so on portrait phones the masked region bleeds across the headline column.

## Approach (presentation‑only, no logic changes)

Single component edit. No new deps. No re‑encode. All work in `src/components/wedding/BrandPromiseSection.tsx`.

### 1. Gate the video by viewport + capability
- Use existing `useIsMobile()` (768px) plus a new `useIsTablet()` check (≥768 and <1024 via `matchMedia`) — no new hook file; inline `matchMedia` in an effect.
- Render the `<video>` only on `lg+` (≥1024px). On mobile and tablet, render a static poster image instead (first‑frame JPG already implied by `preload="metadata"`; we'll add an explicit `poster` derived from `reception-flatlay.jpg` as a stand‑in or generate a dedicated still later — for now reuse `reception-flatlay.jpg` as poster fallback to avoid new asset upload in this pass).
- Also short‑circuit when `navigator.connection?.saveData` is true or `effectiveType` is `2g`/`slow-2g` → poster only.
- `prefersReducedMotion` already short‑circuits; keep.

### 2. Reposition the bleed away from the headline column
- Desktop (lg+): keep current centered radial mask, `scale(2.4)`, opacity `0.22`.
- Tablet (md): shift the mask to the right side so the left text column stays clean. Mask becomes `radial-gradient(ellipse at 75% 50%, black 30%, transparent 70%)`, opacity `0.16`, `scale(2.0)`.
- Mobile (<md): poster only, anchored bottom, opacity `0.10`, mask `linear-gradient(180deg, transparent 0%, transparent 55%, black 80%, transparent 100%)` so it sits behind the pillar rows, never behind the drop‑cap.

### 3. Guarantee text legibility
- Add a `::before` scrim on the headline container at `<lg`: `bg-gradient-to-b from-background via-background/85 to-transparent` over the top 60% so the drop‑cap always has a clean ground.
- Bump headline `relative z-10` (already in place on the container) — verify and reinforce on the inner grid.

### 4. Performance
- `<video>` only mounts at `lg+` → mobile/tablet never fetch the 22 MB file.
- Add `preload="none"` on tablet path (we're not rendering video there anyway, but documented).
- Desktop keeps `preload="metadata"` and `playbackRate = 0.5`.
- Wrap the bleed layer in `will-change: transform, opacity` only while in view via `IntersectionObserver` (lightweight, no framer dep) to avoid GPU layer pinning when section is off‑screen.
- Poster `<img>` uses `loading="lazy"`, `decoding="async"`, `fetchpriority="low"`.

### 5. Reduced motion + a11y
- `prefersReducedMotion` → poster only at every breakpoint.
- `aria-hidden="true"` retained on the bleed layer.

## Files touched
- `src/components/wedding/BrandPromiseSection.tsx` — only file changed.

## Out of scope
- No changes to other sections, no new assets uploaded, no re‑encode of the `.mov`, no new hooks files, no design‑token changes. A dedicated optimized poster/WebM pass can be a follow‑up.

## Verification
- `browser--view_preview` at 375, 768, 1024, 1440 widths; confirm: (a) no video request on mobile/tablet via network panel, (b) drop‑cap quote fully legible at every width, (c) desktop bleed unchanged.
