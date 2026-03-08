
# The "Fantasy.co" Master Craft Upgrade: Approach Page

## Strategic Audit & Vision
While the Approach page now features strong structural motion, it still relies on conventional web patterns (straight lines, standard hover states, static image blocks). To bridge the gap to a true "Igloo.inc / Fantasy.co" tier luxury experience, we must transition from **layout** to **tactile immersion**. The brand identity of *Hickory & Rose*—"protecting the feeling of your day"—must be felt in the physical resistance of the UI and the organic flow of the scroll.

We will introduce five world-class, bespoke interactive patterns. **Zero new dependencies.**

## Execution Plan (5 Bespoke Upgrades)

### 1. The "Golden Thread" Interactive Timeline
**Target:** `src/components/wedding/ApproachProcessTimeline.tsx`
*   **The Concept:** Replace the straight vertical timeline rule with a bespoke, organic bezier curve SVG (The "Golden Thread").
*   **The Execution:** Use Framer Motion's `useScroll` tied to the SVG's `pathLength`. As the user scrolls, a glowing gold thread physically "draws" itself down the page, weaving left and right through the step numbers. 
*   **Brand Tie-in:** Represents the seamless, continuous narrative Hickory & Rose weaves through a couple's planning process.

### 2. Magnetic "Weight" Interactions
**Target:** `src/pages/Approach.tsx` (Promise Section Pills & Bridge CTA)
*   **The Concept:** Premium UI should have physical "mass." Standard hovers feel weightless.
*   **The Execution:** Implement a custom `useMotionValue` tracking system on the "Calm Leadership," "Elevated Design," and "Seamless Execution" pills, as well as the bridge CTA button. 
*   **Technical:** Track `onMouseMove` relative to the element's bounding box. Use `useSpring` to pull the element (`x`, `y`) 10-15px toward the cursor, creating a tactile "snap" effect that feels expensive and deliberate.

### 3. Documentary "Filmstrip" Parallax Unmasking
**Target:** `src/pages/Approach.tsx` (Replacing static `<FullWidthImage>` calls)
*   **The Concept:** Static full-width images interrupt the editorial flow.
*   **The Execution:** Wrap the ceremony and detail images in a new scroll-linked `clip-path` reveal. The image begins masked at `inset(10% 20%)` and smoothly unmasks to `inset(0% 0%)` as it reaches the center of the viewport.
*   **Detail:** Add subtle margin text running alongside the image (`FR-01`, `H&R DOCUMENTARY`) tracking vertically with scroll to simulate looking at raw, high-end photography contact sheets.

### 4. Focused "Whisper" State for Dual Testimonials
**Target:** `src/pages/Approach.tsx` (Testimonial Section)
*   **The Concept:** When reading a deeply personal story, distractions should fade away. 
*   **The Execution:** Add a localized `hoveredIndex` state to the dual testimonial grid. When the user's mouse enters Quote A, Quote B smoothly transitions to `opacity: 0.3`, `filter: blur(3px)`, and `scale: 0.98`.
*   **Result:** Absolute focus is drawn to the active client story, simulating depth of field and intense personal connection.

### 5. Ambient "Lens Mask" Image Reveal
**Target:** `src/pages/Approach.tsx` (Philosophy Section Image)
*   **The Concept:** The portrait image is beautiful but static.
*   **The Execution:** Apply a dynamic radial-gradient `maskImage` linked to the user's cursor position. The image will be 80% opaque at the edges and 100% crystal clear in a soft, moving spotlight that gently follows the mouse.
*   **Technical:** Map `clientX`/`clientY` to CSS variables driving a `WebkitMaskImage` radial gradient. It creates an intimate, "revealing" relationship with the brand's core imagery.

## Technical Constraints & Workflow
*   **Performance:** All animations will use hardware-accelerated properties (`transform`, `opacity`, `clip-path`) or SVG path painting to maintain 60fps.
*   **Dependencies:** Purely relying on existing `framer-motion` springs, scroll tracking, and React state.
