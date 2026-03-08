

# Upgrade: AboutFounderSection -- Cinematic Letterbox + Gold Corner Reveals + Parallax Depth

## Current State

The `AboutFounderSection.tsx` portrait container (line 22-39) has:
- Basic parallax (`4%` to `-4%` vertical shift)
- Static gold corner accents that fade in on hover (small, 6x6px, only 2 corners)
- No letterbox bars
- No gold shimmer sweep
- No scroll-driven scale/depth effect
- Corner accents use basic opacity toggle, not animated reveal

This feels flat compared to the Journal cards and FounderTeaserSection which have cinematic letterbox bars, shimmer sweeps, animated corners, and scroll-linked scale transforms.

## Plan (1 file)

### 1. Add cinematic letterbox bars
Insert top/bottom `div` elements (6% height, `bg-foreground/90`) that slide inward from off-screen on hover, matching the `JournalArticleCard` pattern exactly -- using `translate-y-full` / `-translate-y-full` with 700ms cubic-bezier ease.

### 2. Add gold shimmer sweep on hover
Insert an absolutely-positioned gradient overlay that translates from `-translate-x-full` to `translate-x-full` on `group-hover`, using the standard `linear-gradient(90deg, transparent, gold/0.08, gold/0.12, gold/0.08, transparent)` pattern.

### 3. Upgrade gold corner reveals to all 4 corners with animated gold gradients
Expand from 2 corners to all 4 corners, increase size from `w-6 h-6` to `w-8 h-8`, and add the gold gradient `linear-gradient` treatment matching the FounderTeaserSection style.

### 4. Add scroll-linked parallax depth (scale transform)
Use the existing `founderScroll` progress to derive a `scale` transform via `useTransform(founderScroll, [0, 0.5, 1], [1.05, 1, 0.98])`, applied to the image alongside the existing `y` parallax. This creates a subtle depth-of-field zoom effect as the user scrolls.

### 5. Add cinematic hover overlay + caption reveal
Add a `from-foreground/30 via-transparent to-transparent` gradient that fades in on hover, plus a brief founder caption ("Founder, Hickory & Rose") that slides up from the bottom on hover with gold separator line.

### 6. Add frame index mark
Add a small "FR01" frame index in the top-right corner (matching the editorial frame numbering convention) that reveals on hover.

## File Modified
- `src/components/wedding/AboutFounderSection.tsx`

