

# Fix: FooterServiceAreas forwardRef Console Warning

## Current State
The InquireCelebration upgrade is already fully implemented with all planned features (gold shimmer burst, diamond cascade, editorial typography, timeline, MagneticButton CTA). However, the console still shows a `forwardRef` warning originating from `FooterServiceAreas` — this appears on every page since Footer is global.

## Root Cause
`FooterServiceAreas` uses `AnimatePresence` wrapping a conditional `motion.span` for the hover venue count tooltip. Framer Motion v12's `AnimatePresence` attempts to clone refs onto its children. The component itself is also rendered inside a `motion.div` parent in `Footer.tsx` (line 110-174), which may attempt to pass refs down.

## Plan (2 items)

1. **Wrap `FooterServiceAreas` in `forwardRef`** to accept the ref from its parent `motion.div` context in Footer.tsx.

2. **Replace the inner `AnimatePresence` + `motion.span`** for the venue count hover tooltip with a simpler CSS opacity/width transition on an always-rendered `<span>`. This eliminates the second nested ref warning source while keeping identical visual behavior. The span uses `overflow-hidden whitespace-nowrap transition-all duration-200` with conditional `opacity-0 w-0` / `opacity-100 w-auto` classes based on `hoveredArea === i`.

## Files Modified
- `src/components/wedding/FooterServiceAreas.tsx` — add `forwardRef`, replace `AnimatePresence` with CSS transition

