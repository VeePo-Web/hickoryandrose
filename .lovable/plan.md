

# Approach Page -- Premium Editorial Upgrade

## Audit Summary
The Approach page (430 lines) has solid bones: parallax hero, 5-step timeline, editorial split, differentiators, promise section, testimonial, brand quote, and CTA. However several sections read as "content blocks with gold accents" rather than a curated editorial narrative. The gaps:

- **No quantitative proof layer** -- no stats/numbers anywhere on the page to build trust
- **Single static testimonial** -- one quote with no rotation or visual weight feels thin
- **Philosophy section is lightweight** -- small image, basic 2-column text, no editorial drama
- **No interactive scroll progress** for the 5-step timeline -- the user can't see where they are in the journey
- **Missing "What Happens Next" bridge** between Promise and CTA -- the conversion path lacks a warm final nudge
- **Hero subtitle animation** is basic fade -- no staggered word reveal

## Plan (8 changes, 3 files)

### 1. Hero -- Staggered Word Reveal (Approach.tsx, lines 95-101)
Replace the static h1/p fade with a word-by-word stagger animation on the headline. Each word fades up with 60ms delay. The subtitle gets a separate delayed entrance. Adds cinematic weight without new dependencies -- just framer-motion variants already in use.

### 2. Add "By the Numbers" Stats Ribbon (new component: `ApproachStatsRibbon.tsx`)
Insert between the Philosophy section and the Process Timeline. A horizontal strip with 3-4 key stats: "150+ Weddings Planned", "98% Vendor Satisfaction", "7+ Years Experience", "48hr Response Time". Each number uses `font-serif-wedding text-display-lg` with a gold gradient fill, staggered count-up on scroll. Separated by breathing diamonds. Background: `bg-card` with grain overlay.

### 3. Upgrade Philosophy Section (Approach.tsx, lines 148-239)
- Make the image column larger (col-span-5 instead of 4) with `aspect-[3/4]` portrait crop and GoldFrame overlay
- Add a pull-quote in script font between the two body paragraphs
- Add a small "Est. 2018" date chip below the section index
- Increase vertical padding to match section rhythm

### 4. Timeline Scroll Progress Indicator (ApproachProcessTimeline.tsx)
Add a fixed-position (sticky within the timeline section) horizontal progress bar at the top of the timeline that fills as the user scrolls through the 5 steps. Uses `useScroll` targeting the timeline container. A small label shows the current step name. Gold gradient fill with glow. Disappears when scrolling past the section.

### 5. Upgrade Testimonial to Dual-Quote (Approach.tsx, lines 333-387)
Replace the single testimonial with two side-by-side quotes in a 2-column grid (stacked on mobile). Each gets its own gold quotation mark, client name, venue, and service tag. This doubles social proof and fills the visual space.

### 6. Add "Your Next Step" Bridge Section (new content in Approach.tsx)
Insert between the Promise section and the ceremony FullWidthImage. A minimal centered section with: "Ready to see if we're the right fit?" headline, a short reassuring paragraph, and three small icon-less trust chips ("No commitment required", "Complimentary call", "Responds within 48hrs"). This warms the conversion path before the CTA.

### 7. Differentiators -- Add Expandable Detail (ApproachDifferentiators.tsx)
Add a `useState` accordion behavior: clicking a differentiator row expands to reveal a longer detail paragraph with a smooth height animation. The expanded state shows a small gold accent line growing from left. Collapsed rows show the current short text; expanded rows reveal 2-3 more sentences of depth.

### 8. Brand Quote Section -- Add Founder Attribution (Approach.tsx, lines 391-421)
Below the Hickory & Rose script name, add a small founder photo thumbnail (32x32 rounded) with "— Sarah, Founder" text. This personalizes the brand promise and adds human connection.

## Files Modified
- `src/pages/Approach.tsx` -- Hero stagger, philosophy upgrade, dual testimonial, bridge section, founder attribution
- `src/components/wedding/ApproachProcessTimeline.tsx` -- Sticky scroll progress indicator
- `src/components/wedding/ApproachDifferentiators.tsx` -- Expandable accordion rows
- `src/components/wedding/ApproachStatsRibbon.tsx` -- New component

## No New Dependencies
All changes use existing framer-motion, Tailwind, and React state. Zero new packages.

