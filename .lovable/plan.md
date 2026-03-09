
# Phase 5 "Fantasy.co" Cinematic Immersion: Portfolio Page

## Strategic Vision
The Portfolio page is the visual proof of Hickory & Rose's "Calm Luxury" promise. Currently, the masonry grid and featured stories are structurally sound but lack the volumetric depth and optical weight expected of a world-class agency. We will transform this page into a living, tactile film reel by introducing fluid physics, deep parallax windows, and optical focusing effects.

**Zero new dependencies. Pure React + Framer Motion craft.**

## Execution Plan (5 Master Craft Upgrades)

### 1. Liquid Spring Filter Navigation
**Target:** `src/pages/Portfolio.tsx` (Category Filters)
*   **The Concept:** Standard text-change or underline filters feel brittle and digital. High-end editorial sites use fluid, physical indicators that glide with mass.
*   **The Execution:** We will rebuild the category filter row. Instead of static active states, we will use Framer Motion's `layoutId="portfolio-active-filter"` to create a soft, ivory/gold-tinted background pill that physically slides and stretches between the filter words when clicked, using a high-damping spring (`type: "spring", stiffness: 300, damping: 30`).

### 2. Deep Parallax "Window" Masking
**Target:** `src/components/wedding/PortfolioFeaturedStory.tsx`
*   **The Concept:** The featured image currently sits flat on the page. Luxury web design treats image containers as physical windows into a 3D space behind the screen.
*   **The Execution:** We will decouple the `<img>` from its `aspect-[4/5]` container. We will bind a `useScroll` hook to the section, mapping `scrollYProgress` to the image's `y` axis (e.g., scaling it to 1.2 and shifting it from `-10%` to `10%`). As the user scrolls down the page, the image will slowly pan inside its frame, creating a profound, cinematic parallax depth.

### 3. "Slide Projector" Optical Focus Reveal
**Target:** `src/components/wedding/PortfolioFeaturedStory.tsx` (Typography)
*   **The Concept:** Fading in the couple's name is too standard. We want to mimic the physical, mechanical nature of looking at film slides.
*   **The Execution:** We will shatter the featured couple's name into individual characters or words. The reveal animation will start with the text slightly over-scaled (`scale: 1.1`), skewed (`skewX: -5deg`), and heavily blurred (`filter: blur(10px)`). It will snap into perfect focus with a harsh cubic-bezier curve, simulating the physical "clack" and optical alignment of a vintage slide projector.

### 4. Reactive Spotlight Wash
**Target:** `src/components/wedding/PortfolioMasonryGrid.tsx`
*   **The Concept:** Hovering over a masonry item currently just darkens it. We want it to feel like shining a warm, physical light onto a memory.
*   **The Execution:** We will add an `onMouseMove` tracker to the grid container that captures local cursor coordinates. We will inject these as CSS variables (`--mouse-x`, `--mouse-y`) into the grid items. An absolute, pointer-ignoring overlay on each image will use these variables to render a dynamic `radial-gradient` spotlight (a soft, gold-tinted wash). This light will physically follow the user's cursor across the grid.

### 5. High-Friction Masonry Reflow
**Target:** `src/components/wedding/PortfolioMasonryGrid.tsx`
*   **The Concept:** When the user clicks a filter, the images simply pop in and out. They need physical weight.
*   **The Execution:** We will overhaul the `AnimatePresence` configuration. The exit animation will drop down and fade (`y: 20, opacity: 0`). The enter animation will use a staggered delay based on the index, and a high-friction spring (`stiffness: 100, damping: 15`). When changing categories, the grid won't just appear—it will physically "settle" into place piece by piece with tangible momentum.
