

# Approach Page -- Next-Level Polish Pass

## Audit Findings
The page already has: staggered hero, stats ribbon, accordion differentiators, dual testimonials, bridge section, founder attribution. Console shows only unrelated warnings (FooterNewsletter ref, CursorFollower ref). The Approach page itself is clean.

## Remaining Gaps to Upgrade

### 1. Process Timeline -- Missing Micro-Narrative Intros (ApproachProcessTimeline.tsx)
Each step jumps straight into description. Add a one-line italic "hook" sentence before the description for steps that don't have pull quotes. This creates editorial rhythm where every step opens with emotional context before practical detail. Add hooks to steps 02 and 04 which currently lack pull quotes.

### 2. Philosophy Section -- Missing Scroll-Linked Parallax on Image (Approach.tsx ~line 216-239)
The desktop portrait image is static. Add a subtle `useScroll` + `useTransform` parallax (y shift of ~30px over scroll range) to the image, matching the editorial motion language used elsewhere on the site.

### 3. Stats Ribbon -- Numbers Lack Stagger Rhythm (ApproachStatsRibbon.tsx)
All 4 counters start animating simultaneously when in view. Stagger each counter's start by 200ms using the existing `useInView` + a delay parameter, so they cascade left-to-right for a more cinematic reveal.

### 4. Brand Quote Section -- Quote Mark Too Small (Approach.tsx ~line 484)
The decorative `"` is `text-6xl` at very low opacity. Increase to `text-8xl` and bump opacity slightly to `0.08` for more editorial gravitas matching the testimonial section's `text-7xl` quotation marks.

### 5. "Your Next Step" Bridge -- Missing Soft CTA Button (Approach.tsx ~line 441-470)
The bridge section has trust chips but no actual call-to-action link. Add a subtle gold-outlined button linking to `/inquire` below the chips: "Begin the Conversation" with hover shimmer.

### 6. Dual Testimonial -- Add Staggered Entrance for Quote Marks (Approach.tsx ~line 382-438)
The gold quotation marks appear instantly. Add a subtle `y: 10` → `0` with 0.3s delay offset between the two columns for a more choreographed reveal.

## Files Modified
- `src/pages/Approach.tsx` -- Parallax on philosophy image, larger quote mark, CTA button in bridge
- `src/components/wedding/ApproachProcessTimeline.tsx` -- Add pull quotes to steps 02 and 04
- `src/components/wedding/ApproachStatsRibbon.tsx` -- Stagger counter start delays

## No New Dependencies

