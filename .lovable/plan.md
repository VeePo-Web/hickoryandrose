

# Upgrade: Navigation Logo Gold Shimmer Sweep on Page Load

## Current State
The full logo (`Hickory & Rose`, lines 148-159) renders as a `motion.span` with a simple fade-in from `opacity: 0, y: -8`. No shimmer or sweep effect exists on the text. The monogram version (lines 96-147) has a radial gold glow but also no directional sweep.

## Plan (1 file, 2 changes)

### 1. Full logo -- diagonal gold shimmer sweep on mount
Wrap the full logo text in `overflow-hidden relative` and add an absolutely-positioned `motion.span` inside that renders a 110deg linear gradient (`transparent 20% → gold/0.25 50% → transparent 80%`). On mount, animate `x` from `-100%` to `200%` with a 0.6s delay and 1.2s duration, `ease: [0.25, 0.1, 0.25, 1]`. Runs once (no repeat). This creates a left-to-right diagonal shimmer that sweeps across "Hickory & Rose" shortly after page load.

### 2. Monogram -- matching shimmer on mount
Add the same `motion.span` shimmer overlay inside the monogram container (lines 97-147), running once on mount with a slightly longer delay (0.8s) to account for the transition from full logo. Uses `overflow-hidden` on the parent.

## File Modified
- `src/components/wedding/Navigation.tsx` -- add shimmer overlay spans to both logo states

