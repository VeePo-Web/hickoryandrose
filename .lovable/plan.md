# Speed up page transitions (keep initial loader as-is)

## Goal
Initial site load (`LoadingScreen` cinematic curtain) stays at its current ~2.4s cinematic pacing. The between-page transition (`PageTransition`, fires on every route change) feels snappier — roughly half the current duration — while keeping the same visual choreography (sage + foreground curtains, gold sweep, monogram, content fade).

## Scope
One file: `src/components/wedding/PageTransition.tsx`. No changes to `LoadingScreen.tsx`, routes, or motion variants elsewhere.

## Changes (PageTransition.tsx)

Tighten each motion timing roughly 50%, preserving order/overlap:

| Element | Current (dur / delay) | New (dur / delay) |
|---|---|---|
| Sage base curtain (slide up) | 0.6 / 0.2 | 0.32 / 0.1 |
| Foreground curtain (slide down) | 0.55 / 0.15 | 0.3 / 0.08 |
| Gold shimmer line sweep | 0.7 / 0.35 | 0.38 / 0.18 |
| Monogram container fade-out | 0.2 / 0.1 | 0.14 / 0.05 |
| Monogram char staggers (0, 0.03, 0.06) | 0.2–0.25 | 0.14 / staggers 0, 0.02, 0.04 |
| Top gold accent line reveal | 0.5 / 0.6 | 0.28 / 0.32 |
| Center gold glow pulse | 0.8 / 0.3 | 0.45 / 0.16 |
| Content fade-in (y:10 → 0) | 0.5 / 0.3 | 0.32 / 0.16 |

Net effect: total transition ~0.95s → ~0.5s. Same easing curves (`cubicEase`, `smoothEase`) kept so motion identity is unchanged — just faster.

## Out of scope
- LoadingScreen timings (initial 2.4s arrival is intentional cinematic moment).
- Lenis smooth-scroll behavior.
- Route-level data/code-split loading (already lazy via `Suspense`).

## Verification
Open preview, navigate Home → About → Services → Portfolio. Transitions should feel noticeably faster (~half) but still show the curtain + gold sweep + monogram. First hard reload should still show the long branded loader unchanged.
