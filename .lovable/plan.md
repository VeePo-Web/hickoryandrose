

# Upgrade: Homepage StatsSection — Premium Animated Counter with Editorial Gold Accents

## Current State Assessment

The InquireCelebration, ServiceTierCard shimmer, and FooterServiceAreas fixes are all fully implemented. Scanning the homepage sections for the next meaningful upgrade target, the **StatsSection** stands out as an area that likely uses static numbers without animated counting or premium editorial treatment, which feels flat compared to the cinematic polish applied elsewhere.

## Plan

### 1. Upgrade StatsSection with animated counting + editorial polish

**File:** `src/components/wedding/StatsSection.tsx`

- **Animated number counters**: Add a lightweight `useCountUp` hook (no dependencies) that uses `requestAnimationFrame` to animate numbers from 0 to target when the section scrolls into view via `IntersectionObserver`. Easing via `easeOutExpo` curve. Numbers only animate once.
- **Gold gradient on stat values**: Apply the existing `shimmer-gold` CSS class or inline gold gradient text treatment to the stat numbers for brand cohesion.
- **Parallax watermark**: Add a large low-opacity serif "Numbers" or relevant brand word as a parallax background element (matching the pattern used in TestimonialSection, ProcessTeaserSection, FAQSection).
- **Gold rule separators between stats**: Replace any plain borders/dividers between stat items with gold gradient `h-px` lines that scale in from center on scroll via `whileInView`.
- **Breathing diamond ornament**: Add a centered `BreathingDiamond` ornament below the stats row as a section closer, consistent with the editorial pattern used across other sections.
- **Scroll-linked vertical accent line**: Add a thin gold gradient vertical accent line on the left or right edge (desktop only), matching the pattern in FAQSection and InstagramSection.

### 2. No new dependencies
Uses existing: `framer-motion` (`useScroll`, `useTransform`, `whileInView`), `BreathingDiamond`, `ScrollReveal`, CSS utilities (`shimmer-gold`, gold gradients).

### Files Modified
- `src/components/wedding/StatsSection.tsx` — Full upgrade with animated counters, gold accents, parallax watermark, editorial ornaments

