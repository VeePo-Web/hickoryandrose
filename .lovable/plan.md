

# Upgrade: Inquire Celebration — Cinematic Gold Shimmer & Editorial Confirmation

## What Changes

Rewrite `InquireCelebration.tsx` with these enhancements:

### 1. Multi-layer gold shimmer burst (replaces single radial gradient)
- **Layer 1**: Full-screen radial gold pulse that expands from center, peaks at opacity 0.12, then fades (duration 3s)
- **Layer 2**: Horizontal gold light sweep — a thin gradient band that translates left-to-right across the viewport (duration 2s, delay 0.5s) using CSS `translateX` animation
- **Layer 3**: Subtle vignette overlay using the existing `.vignette` utility class for cinematic depth

### 2. Diamond cascade waterfall (replaces 5 static rising diamonds)
- Increase to 8 diamonds arranged in two staggered columns
- Each diamond rises with different horizontal drift (sinusoidal spread using alternating left offsets)
- Varying sizes (2px to 4px) and opacity curves for depth
- Add a second wave that triggers 1.5s after the first for a "waterfall" effect (total 16 animated elements, still lightweight since they're one-shot animations that complete and unmount)

### 3. Expanding ring upgrade
- Add a third concentric ring with different timing for richer ripple effect
- Replace `Heart` icon with a BreathingDiamond at larger size (24px) as the central ornament — more brand-aligned than a generic heart icon

### 4. Premium editorial typography
- Headline: Change from "Thank you, beautiful." to a two-line editorial layout:
  - Script accent line: `<span className="font-script">` "Thank you" in Great Vibes at smaller size
  - Main serif line: "Your story begins here." in Cormorant Garamond `text-display-xl`
- Add a thin gold editorial rule (`editorial-rule` utility) between headline and body copy
- Body copy: More editorial tone with `drop-cap` class on the first paragraph

### 5. Steps timeline upgrade
- Replace plain numbered list with a vertical gold connector line (1px, gold gradient) connecting the three steps
- Each step number gets a small breathing diamond ornament instead of plain text
- Add staggered clip-path reveal (`inset(100% 0 0 0)` → `inset(0)`) per step for editorial entrance

### 6. Footer CTA upgrade
- Replace plain text links with a proper `MagneticButton` component linking to `/portfolio`
- Add a secondary text link to `/approach` below it
- Wrap in a `ScrollReveal` for entrance animation

### Files Modified
- **`src/components/wedding/InquireCelebration.tsx`** — Full rewrite (~130 lines, under 250 limit)

### No New Dependencies
Uses existing: `framer-motion`, `BreathingDiamond`, `MagneticButton`, `ScrollReveal`, CSS utilities (`font-script`, `editorial-rule`, `vignette`, `grain-overlay`)

