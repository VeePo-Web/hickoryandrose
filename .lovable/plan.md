
# Inquire Page — Submission Animation Fix

## Problem Identified
After form submission, the `InquireCelebration` component mounts but the animations don't play properly because:

1. **`ScrollReveal` uses `whileInView`** — This triggers on scroll, but the celebration content is already in the viewport on mount. Some browsers/framer-motion versions may not trigger `whileInView` for elements that are already visible when they mount.

2. **Abrupt component swap** — The `if (submitted) return <InquireCelebration />` causes an instant swap with no exit animation on the form, which feels jarring.

3. **`ScrollReveal` wrapping the CTA** — The `delay={1}` on ScrollReveal combined with `whileInView` means the button may never appear if the viewport check doesn't fire.

## Solution

### 1. Fix ScrollReveal in Celebration Component
Replace `ScrollReveal` in `InquireCelebration.tsx` with a direct `motion.div` using `animate` instead of `whileInView`. Since we know the celebration is visible on mount, we should use mount-triggered animations, not scroll-triggered.

### 2. Add Page Transition Animation
Wrap the conditional rendering in `Inquire.tsx` with `AnimatePresence` so the form fades out before the celebration fades in. This creates a graceful transition.

### 3. Ensure All Animations Use Mount Triggers
Change the CTA section from `ScrollReveal` (scroll-triggered) to a `motion.div` with `initial` + `animate` props (mount-triggered) with appropriate delays to match the beat timing.

## Files Modified: 2

**`src/components/wedding/InquireCelebration.tsx`**
- Replace `<ScrollReveal delay={1}>` wrapping CTA with `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: BEAT3 + 1.4, duration: 0.5 }}>`
- This ensures the CTA appears on mount timing, not scroll

**`src/pages/Inquire.tsx`**
- Wrap the conditional `submitted ? <InquireCelebration /> : <form...>` with `AnimatePresence mode="wait"`
- Add exit animation to the form wrapper
- Add enter animation to InquireCelebration wrapper

This creates a proper 3-act transition: form fades out → page transitions → celebration fades in with its cinematic beat-timed animations.
