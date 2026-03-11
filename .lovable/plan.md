

# Portfolio Filter Nav — Fix Floating Pill

## Problem
The filter pill (`portfolio-active-pill` layoutId) on the Portfolio page has two issues:

1. **Sticky `top-[72px]`** doesn't match the nav height (`h-16`=64px on mobile, `h-20`=80px on desktop). This causes a visual gap or overlap depending on viewport, making the bar appear to "float" detached from the nav.

2. **Spring animation** (stiffness 300, damping 30) can overshoot, making the pill bounce/float between positions on click.

## Fix (1 file: `src/pages/Portfolio.tsx`)

**Line 126** — Change `top-[72px]` to `top-16 md:top-20` to precisely match the Navigation component's height tokens.

**Lines 134-135** — Replace the spring transition with a snappier tween: `{ type: "tween", duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }`. This eliminates the bouncy overshoot that makes the pill look like it's floating.

