

# Assessment: Navigation Logo Gold Shimmer -- Already Implemented

The diagonal gold shimmer sweep on both the full "Hickory & Rose" logo and the condensed "H & R" monogram is **already live** in `Navigation.tsx`:

- **Full logo** (line 168): `motion.span` with `110deg` gold gradient, animates `x` from `-100%` to `200%`, 1.2s duration, 0.6s delay
- **Monogram** (line 105): Same gradient treatment, 1.0s duration, 0.8s delay

Both use `overflow-hidden` on their parent and run once on mount with `[0.25, 0.1, 0.25, 1]` easing.

---

## Next Upgrade: Footer Monogram Watermark Shimmer + CTA Button Gold Sweep Parity

Since the Navigation logo shimmer is complete, the following elements still lack shimmer parity and feel flat by comparison:

### 1. Footer monogram watermark -- add diagonal gold shimmer on scroll-into-view
The Footer component renders a large "H & R" watermark (likely in `Footer.tsx`). It currently has no shimmer sweep, creating an inconsistency with the nav. Add a single-fire shimmer using `whileInView` with the same `110deg` gold gradient treatment, triggered once when the footer scrolls into the viewport.

### 2. Mobile menu monogram -- add shimmer on open
`NavigationMobileMenu.tsx` renders the brand name when the mobile menu opens. It currently lacks any shimmer treatment. Add the same diagonal sweep triggered on mount (when `isOpen` becomes true) with a 0.3s delay.

### Files Modified
- `src/components/wedding/Footer.tsx` -- watermark shimmer on scroll-into-view
- `src/components/wedding/NavigationMobileMenu.tsx` -- shimmer on mobile menu open

