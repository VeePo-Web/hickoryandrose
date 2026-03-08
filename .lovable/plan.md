

# VeePo Footer Badge -- Scale Up & Brand-Bold Upgrade

## Current State
The badge (lines 282-334) is a compact dark card with 0.4 opacity logo at h-7/h-8, micro text at 0.5rem, and very low contrast (white/15-25%). It reads as a whisper -- too subtle for an ad. The VeePo logo is vibrant orange + green which gets washed out at 40% opacity.

## Plan (1 file: `src/components/wedding/Footer.tsx`, lines 282-334)

### 1. Double the Badge Size
- Increase padding from `px-8 py-5` to `px-14 py-8 md:px-20 md:py-10`
- Logo from `h-7 md:h-8` to `h-12 md:h-16` -- make it the hero of the badge
- Add `max-w-md md:max-w-lg` width constraint so it feels like a proper card, not a cramped inline element

### 2. Show the Logo at Full Color
- Change logo opacity from `opacity-40 hover:opacity-80` to `opacity-70 hover:opacity-100` -- let the orange/green pop against the black card. The VeePo brand IS color; hiding it defeats the ad purpose
- Add a subtle `drop-shadow` glow in VeePo orange on hover: `filter: drop-shadow(0 0 20px rgba(243,140,30,0.15))`

### 3. Upgrade Typography Hierarchy
- "THIS EXPERIENCE WAS CRAFTED BY" -- bump from 0.5rem to `text-[0.6rem] md:text-[0.7rem]`, increase opacity to `text-white/40 hover:text-white/60`
- Tagline "Where Vision Meets Precision" -- bump to `text-[0.55rem] md:text-[0.65rem]`, opacity to `text-white/30 hover:text-white/50`
- Add a small arrow icon (lucide `ExternalLink` or `ArrowUpRight`) after tagline to signal clickability

### 4. VeePo Brand-Color Border Accent
- Replace the gold-to-white gradient top line with a VeePo-colored gradient: `linear-gradient(90deg, transparent, #F38C1E 40%, #2EAF4B 60%, transparent)` -- orange to green matching the logo
- Add a matching bottom border line for symmetry
- On hover, increase border opacity from 0.4 to 0.7 for a "glow frame" effect

### 5. Hover Interaction Upgrade
- Scale the entire badge to `scale-[1.02]` on hover with `transition-transform duration-500`
- The shimmer sweep stays but increase its intensity from `0.06` to `0.1` white

### 6. Breathing Space
- Add `mb-4` bottom margin after the badge so it doesn't feel cramped against the footer edge

