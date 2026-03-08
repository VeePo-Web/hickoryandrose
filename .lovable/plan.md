

# Upgrade Pass: Console Warning Fixes + forwardRef Hardening + BreathingDiamond Performance

## Current State

The codebase is well-modularized after previous passes. All pages are under ~500 lines, most under 250. However, the console reveals two categories of issues that undermine the premium quality bar:

1. **React ref warnings** -- `SectionIndicator` and `BackToTop` render function components as direct children of `AnimatePresence` without `React.forwardRef()`. Framer Motion's `AnimatePresence` attempts to pass refs to children for exit animations, causing React warnings on every page load.

2. **BreathingDiamond infinite animation cost** -- This component is used ~30+ times across all pages (credential strips, separators, ornaments). Each instance runs two independent `Infinity` Framer Motion animation loops (glow halo + diamond scale). On pages with 6+ instances visible simultaneously, this creates unnecessary compositor work.

3. **CursorFollower particle spam** -- The cursor follower spawns up to 7 simultaneous animated `motion.div` particles on mousemove. Each particle creates a new DOM node with its own animation. On fast cursor movement this can degrade frame rate.

## Plan (5 items)

1. **Fix SectionIndicator forwardRef warning** -- The inner `motion.div` child of `AnimatePresence` needs to be the direct animated element. The issue is that `AnimatePresence` wraps a conditional `{visible && <motion.div>}` which works fine, but the component itself is passed as a child somewhere that expects a ref. Wrap the component export with `forwardRef` or ensure `AnimatePresence` children are properly structured.

2. **Fix BackToTop forwardRef warning** -- Same pattern. The `motion.button` inside `AnimatePresence` is fine structurally, but the component is rendered somewhere that passes a ref to it. Add `forwardRef` to the component.

3. **Optimize BreathingDiamond with CSS animations** -- Replace the two `Infinity` Framer Motion `animate` props with equivalent CSS `@keyframes` animations. This moves the animation off the JS thread entirely onto the compositor. Define `@keyframes breathing-diamond-glow` and `@keyframes breathing-diamond-scale` in `index.css`, then use Tailwind `animate-` classes. The visual output is identical but eliminates ~60 JS animation loops site-wide.

4. **Throttle CursorFollower particle spawning** -- Reduce max simultaneous particles from 7 to 4, and increase the minimum distance threshold from 24px to 40px. This reduces DOM churn by ~50% with no visible quality loss.

5. **Add `will-change: transform` to BreathingDiamond** -- Since these elements animate continuously, explicitly declaring `will-change` promotes them to their own compositor layer, preventing repaints of surrounding content.

## Technical Approach
- **Modified files**: `SectionIndicator.tsx`, `BackToTop.tsx`, `BreathingDiamond.tsx`, `CursorFollower.tsx`, `src/index.css`
- **No new files, no new dependencies**
- **CSS keyframes** added to `index.css` and referenced via Tailwind `animation` config in `tailwind.config.ts`
- Console should be completely clean after these fixes

