

# VeePo Footer Badge -- Bold Brand-Color Upgrade

## Current State
The badge at lines 282-352 is a dark card with orange-green gradient borders, shimmer hover, and logo at `h-12 md:h-16`. The VeePo brand colors (`#FF8C2A` orange, `#2EAF4B` green from the logo; plus `--brand-orange: 28 87% 58%` = `#FF8C2A` and `--brand-green: 166 72% 47%` from VeePo's CSS) are used in the gradient borders but at low opacity. The user wants it **bolder, bigger, more of an ad** with VeePo's orange and green prominently featured.

## Changes (1 file: `src/components/wedding/Footer.tsx`, lines 282-352)

### 1. Increase Overall Prominence
- Expand `max-w-md md:max-w-lg` to `max-w-lg md:max-w-xl` for a wider card
- Add more vertical breathing room: `py-10 md:py-12`
- Increase border opacity from `border-white/[0.04]` to `border-white/[0.08]`, hover to `border-white/[0.15]`

### 2. Bold VeePo Brand Color Accents
- Top gradient border: increase `h-px` to `h-[2px]`, base opacity from `0.50` to `0.70`, hover to `1.0`
- Bottom gradient border: same `h-[2px]`, base opacity `0.50`, hover `0.80`
- Add a subtle VeePo-orange radial glow behind the logo area: `radial-gradient(ellipse at center, rgba(255,140,42,0.06) 0%, transparent 70%)` as a background layer inside the card

### 3. Logo Size + Color Pop
- Increase logo from `h-12 md:h-16` to `h-14 md:h-20` -- make it unmissable
- Base opacity from `0.70` to `0.85`, hover to `1.0`
- Stronger drop-shadow on hover: `drop-shadow(0 0 30px rgba(255,140,42,0.25))`

### 4. Typography Scale-Up
- "THIS EXPERIENCE WAS CRAFTED BY": bump to `text-[0.65rem] md:text-[0.75rem]`, opacity `text-white/50` base, `text-white/70` hover
- Tagline: bump to `text-[0.6rem] md:text-[0.7rem]`, opacity `text-white/40` base, `text-white/60` hover
- Arrow icon: increase from `size={10}` to `size={12}`

### 5. Enhanced Hover Glow
- Increase box-shadow intensity on hover: `0 0 60px rgba(255,140,42,0.12), 0 0 120px rgba(46,175,75,0.06)` (stronger orange + green glow)
- Scale from `hover:scale-[1.02]` to `hover:scale-[1.03]`

### 6. Add Orange-Green Gradient Accent Line Below "Crafted By" Text
- Insert a small 40px wide, 1px tall gradient line (`#FF8C2A` to `#2EAF4B`) between the micro-label and the logo, acting as a colored divider that reinforces the VeePo brand within the card layout

