
# Phase 4 "Fantasy.co" Interactive Exhibition: Approach Page

## Strategic Vision
The Approach page now possesses a strong sensory and structural foundation. To push it into the upper echelon of "Awwwards Site of the Month" and Fantasy.co-level execution, we must evolve static content into living, reactive editorial elements. We will introduce kinetic typography, reactive film grain, and high-tension physical masks.

**Zero new dependencies. Pure React + Framer Motion craft.**

## Execution Plan (4 Master Craft Upgrades)

### 1. Scroll-Driven Scrollytelling Typography
**Target:** `src/pages/Approach.tsx` (Brand Promise Quote Section)
*   **The Concept:** Standard fade-ins are predictable. High-end luxury sites force the user to read at the brand's pace by linking typography directly to the scroll wheel.
*   **The Execution:** We will shatter the final brand quote (`"Our job isn't just to plan your wedding..."`) into individual words wrapped in `motion.span`. We will map the section's `scrollYProgress` to stagger the opacity and `y-axis` position of each word. As the user scrolls through the dark section, the sentence visually "reads itself" to them, creating a profound, time-controlled emotional beat.

### 2. SVG Signature "Live Draw"
**Target:** `src/pages/Approach.tsx` (Founder Attribution)
*   **The Concept:** A luxury agency's promise is a personal guarantee. Standard text attribution feels uninspired.
*   **The Execution:** We will replace the standard text "— Sarah" with a bespoke, handwritten SVG cursive signature. Using Framer Motion's `pathLength` bound to a scroll trigger, the signature will physically "draw" itself on the screen just as the quote finishes revealing. This adds an intimate, human-centered touch point.

### 3. Dynamic Velocity Film Grain
**Target:** `src/pages/Approach.tsx` (Page-wide or specific sections)
*   **The Concept:** The current film grain overlay is beautiful but static. Physical materials react to motion.
*   **The Execution:** By utilizing Framer Motion's `useVelocity` hooked into `scrollY`, we will make the `grain-overlay` dynamically reactive. When the user scrolls quickly, the opacity and contrast of the noise will spike (simulating the whir of a film projector). When they stop, the grain settles back to a soft, ambient whisper. 

### 4. "High-Tension" Image Clip Reveal
**Target:** `src/pages/Approach.tsx` (Philosophy Section Image)
*   **The Concept:** The philosophy image reveal is currently standard. Luxury UI utilizes extreme tension and release in its motion curves.
*   **The Execution:** We will overhaul the `ImageReveal` on the portrait image. It will begin trapped in an extreme vertical sliver mask `clip-path: inset(45% 49%)`. As it enters the viewport, it will snap open to full width `inset(0% 0%)` using a custom, high-tension cubic-bezier `ease: [0.83, 0, 0.17, 1]`. This sudden release of energy mimics the opening of a camera shutter.
