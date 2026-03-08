

# "Powered by VeePo" Footer Badge -- World-Class Upgrade

## Current State

The badge at lines 282-300 is a simple `flex` row with 0.55rem uppercase text at 15% opacity and a logo at 20% opacity. It reads as an afterthought -- barely visible, no personality, no VeePo brand DNA. VeePo's identity is bold, dark, high-contrast, clean modernist typography ("Where Vision Meets Precision"). This badge needs to command attention while remaining tasteful within Hickory & Rose's editorial context.

## VeePo Brand DNA (from site audit)

- **Palette**: Pure black background, white/silver type, high contrast
- **Typography**: Clean geometric sans-serif, large tracking, uppercase
- **Tagline**: "Let VeePo Power Your Vision" / "Where Vision Meets Precision"
- **Tone**: Bold, confident, precise, modern engineering craft
- **Logo**: White mark on dark, minimal

## Plan (1 file, `src/components/wedding/Footer.tsx` lines 282-300)

1. **Dedicated badge container**: Replace the inline flex row with a self-contained badge block that has its own dark background (`bg-black/90` or `bg-[#0a0a0a]`) with subtle rounded corners, creating a "floating card" that visually separates VeePo's identity from Hickory & Rose's sage palette -- like a premium agency credit stamp.

2. **VeePo tagline + logo lockup**: Replace "The vision for this website is powered by" with a tighter two-line layout:
   - Line 1: "THIS EXPERIENCE WAS CRAFTED BY" (micro label, wide tracking, silver)
   - Line 2: VeePo logo (larger, ~h-8) with a hover glow effect
   - Below: "Where Vision Meets Precision" tagline in VeePo's geometric style

3. **Hover interaction**: On hover, the entire badge gets a subtle white border glow (`box-shadow: 0 0 20px rgba(255,255,255,0.06)`), the logo brightens to full white, and a diagonal shimmer sweep crosses the badge (reusing existing `shimmer-sweep` keyframe).

4. **Gold-to-white gradient divider**: A thin gradient line above the badge transitioning from Hickory & Rose gold into VeePo white, visually bridging both brand identities.

5. **Responsive**: Badge stays centered, shrinks gracefully on mobile with smaller type scale.

