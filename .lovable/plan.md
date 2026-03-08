

# Approach Page -- Premium Upgrade Plan

## Current Assessment

The Approach page has solid bones but several sections feel structurally simple compared to the rest of the site. Specific gaps:

1. **Philosophy intro** (lines 116-136): Plain 2-column text grid with no visual weight -- no image, no decorative elements, no gold accents, no ambient glow. Feels like filler compared to the editorial density elsewhere.

2. **ApproachProcessTimeline**: The timeline dots and vertical line are good, but the step rows lack visual richness -- no imagery, no hover interactions, no gold shimmer treatments on the pull quotes, and the divider lines are plain `bg-border/40`.

3. **ApproachDifferentiators**: The sticky founder image has no cinematic treatment (no letterbox, no gold frame, no hover effects). The differentiator rows lack gold accent animations on the divider lines.

4. **Editorial Promise section** (lines 148-187): Competent but flat -- the gold accent line and pills feel template-level. No ambient watermark, no breathing diamond, no scroll-linked depth.

5. **Inline testimonial** (lines 189-206): Bare compared to the full TestimonialSection on the home page -- no rotating quotes, no gallery, no progress indicators, no gold quotation mark treatment.

6. **Promise quote section** (lines 210-233): Already polished with breathing diamond and gold accents. Minor upgrades only.

7. **Missing entirely**: No editorial split section between major content blocks. The page goes timeline -> image -> differentiators with no visual breathing room or narrative pivot.

## Upgrade Plan (7 items)

### 1. Upgrade Philosophy Intro with editorial image inset + gold accents
In `Approach.tsx` lines 116-136: Add a small editorial image (reuse `approachDetailsImage`) floated alongside the text on desktop, with gold corner frame reveals. Add an ambient gold glow behind the "01" index. Add a gold gradient horizontal rule below the section. Add a breathing diamond ornament between the columns.

### 2. Upgrade ApproachProcessTimeline with hover interactions + gold dividers
In `ApproachProcessTimeline.tsx`: Replace plain `bg-border/40` dividers with gold gradient `linear-gradient` dividers that animate `scaleX` on scroll. Add `group-hover` gold shimmer sweep to each step row. Upgrade pull quote border-left from `border-primary/15` to a gold gradient. Add a subtle gold ambient glow behind the active/hovered step number. Add a small breathing diamond at the end of the timeline.

### 3. Upgrade ApproachDifferentiators sticky image with cinematic treatment
In `ApproachDifferentiators.tsx`: Wrap the founder image in a `group` container with letterbox bars (top/bottom `h-[6%] bg-foreground/90` on hover), gold corner frames (all 4 corners, `w-8 h-8`), hover shimmer sweep, and a hover caption reveal. Add a GoldFrame component around the image. Upgrade the differentiator row dividers from `border-border/40` to gold gradient lines.

### 4. Elevate Editorial Promise section with watermark + depth
In `Approach.tsx` lines 148-187: Add a large parallax watermark ("Promise") behind the section. Replace the flat pills with pills that have a gold shimmer sweep on hover. Add a breathing diamond between the heading and body text. Upgrade the vertical gold accent line to use scroll-linked `scaleY`.

### 5. Replace inline testimonial with richer component
In `Approach.tsx` lines 189-206: Upgrade to include a large gold gradient quotation mark, a gold diamond ornament separator, a scroll-linked gold accent line, and an attribution block with service tag pill -- matching the pattern from `TestimonialSection.tsx`.

### 6. Add Editorial Split Section between timeline and differentiators
In `Approach.tsx`: Insert an `EditorialSplitSection`-style block (or reuse the existing component) between the FullWidthImage and ApproachDifferentiators, providing a narrative breathing point with the sage-deep background quote panel and parallax image.

### 7. Add scroll-linked section index markers throughout
Add floating section index markers ("I", "II", "III", etc. or "01"-"06") to each major section on the Approach page, positioned in the margin area, with scroll-driven opacity transitions -- creating a cohesive editorial pagination feel down the entire page.

## Files Modified
- `src/pages/Approach.tsx` -- Philosophy intro upgrade, editorial promise upgrade, testimonial upgrade, add EditorialSplitSection, add section indices
- `src/components/wedding/ApproachProcessTimeline.tsx` -- Gold dividers, hover shimmer, pull quote upgrade, breathing diamond
- `src/components/wedding/ApproachDifferentiators.tsx` -- Cinematic image treatment, gold divider upgrades

