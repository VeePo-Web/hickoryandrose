
# Phase 3 "Igloo.inc" Sensory Layer Upgrade: Approach Page

## Strategic Audit & Vision
The structural layout and initial kinetic behaviors are in place, but true luxury is multi-sensory. To achieve the absolute pinnacle of "Fantasy.co" and "Igloo.inc" quality, we must introduce depth, atmospheric typography, and physical resistance. We will replace standard fades with cinematic optical effects, add deep Z-axis layers, and introduce tactile 3D physics to static elements. 

**Zero new dependencies.**

## Execution Plan (5 Master Craft Upgrades)

### 1. Cinematic "Smoke" Typography Reveal
**Target:** `src/pages/Approach.tsx` (Hero Section)
*   **The Concept:** Standard fade-and-slide animations feel digital. High-end editorial sites use optical "lens focus" effects for typography.
*   **The Execution:** Update the staggered word-by-word headline reveal (`wordChild` variant) to include `filter: blur(12px)` animating to `blur(0px)`. This creates a sophisticated, atmospheric "smoke" or "lens pull" effect as the headline materializes.

### 2. Deep Parallax Marquee 
**Target:** `src/pages/Approach.tsx` (Promise Section)
*   **The Concept:** The Promise section lacks volumetric depth. We need a background layer that moves independently of the content.
*   **The Execution:** Implement an ultra-light, oversized typography marquee (`text-[15rem] opacity-[0.02] whitespace-nowrap`) positioned in the background. Bind its `x` translation to a `useTransform` hooked into the section's `scrollYProgress`, so it slowly crawls horizontally as the user scrolls down, reinforcing the brand pillars.

### 3. 3D Magnetic "Tactile Photograph"
**Target:** `src/components/wedding/ApproachDifferentiators.tsx` (Founder Image)
*   **The Concept:** The sticky founder portrait is currently a flat element. Luxury agencies treat images as physical objects.
*   **The Execution:** Wrap the image container in a 3D perspective context. Use `useMotionValue` to track the cursor's `x/y` relative to the center of the image, mapping it via `useSpring` to `rotateX` and `rotateY` (-5deg to 5deg). This makes the image softly tilt and respond to the cursor like a physical photograph.

### 4. Interactive "Glass Glare" Spotlight
**Target:** `src/components/wedding/ApproachDifferentiators.tsx` (Accordion Rows)
*   **The Concept:** Interactive elements should "catch the light" to feel expensive.
*   **The Execution:** Add a localized mouse tracking system (`onMouseMove`) to each accordion row. Map the cursor's coordinates to a subtle radial gradient mask that acts as a specular highlight, washing a soft gold glare over the text and borders dynamically as the user moves their mouse.

### 5. Staggered Cascade Sequence
**Target:** `src/components/wedding/ApproachStatsRibbon.tsx`
*   **The Concept:** The four statistics counters currently trigger their animations simultaneously, missing an opportunity for editorial rhythm.
*   **The Execution:** Implement a true cascading delay system. Pass a `delay={i * 200}` prop into `AnimatedCounter`. Inside the component, wrap the start of the `requestAnimationFrame` loop in a timeout based on the delay, creating a satisfying, sequential "ripple" of numbers counting up from left to right.
