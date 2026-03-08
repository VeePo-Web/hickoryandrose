

# Next Upgrade Pass: Inquire Form Polish + About/FAQ Content Depth + Performance Hardening

## Current State Assessment

All 8 pages now have GoldFrame heroes, BreathingDiamond ornaments, gold-traced accents, and editorial credential strips. The homepage sections are extensively polished. Console is clean.

**Remaining gaps identified:**

1. **Inquire page form UX** -- The multi-step wizard lacks gold-accented step indicators, premium input focus states, and a completion celebration moment. This is the single most important conversion page and deserves the highest editorial treatment.

2. **About page milestone timeline** -- The milestones array renders as a basic vertical list. It should have gold-traced vertical connector lines and breathing diamond nodes (matching the Approach timeline treatment).

3. **FAQ page accordion** -- Uses default Radix accordion styling. Accordion triggers and content lack gold accents, breathing ornaments between categories, and the editorial ruled-line treatment seen elsewhere.

4. **About page testimonial carousel** -- The auto-rotating testimonial section lacks gold shimmer transitions between slides and gold-gradient quotation marks (already applied to TestimonialSection on homepage but not here).

5. **Performance hardening** -- Several large page files exceed 500 lines (Services: 924, Inquire: 885, About: 827). These should be split into sub-components for maintainability and code-splitting benefits.

---

## Plan (8 items)

1. **Upgrade Inquire form step indicator** -- Replace the basic step dots with a gold-gradient horizontal progress bar featuring breathing diamond nodes at each step position. Active step gets a gold glow halo. Completed steps show a gold-filled diamond.

2. **Upgrade Inquire form input focus states** -- Add gold-gradient bottom border on focus (`border-image: linear-gradient(90deg, hsl(var(--gold)), hsl(var(--primary)))`) and a subtle gold radial glow behind the active input field.

3. **Add Inquire form completion celebration** -- After successful submission, render a cinematic gold shimmer burst animation with breathing diamond cascade and a "We'll be in touch" confirmation message styled with editorial typography.

4. **Upgrade About milestone timeline** -- Add a gold-gradient vertical connector line with `scaleY` scroll animation (matching Approach page) and breathing diamond nodes at each milestone year marker.

5. **Upgrade About testimonial carousel transitions** -- Add gold shimmer sweep between slide transitions and gold-gradient quotation marks with breathing opacity animation.

6. **Upgrade FAQ accordion styling** -- Add gold-gradient left border on expanded items, breathing diamond ornament between FAQ categories, and gold shimmer sweep on accordion trigger hover.

7. **Extract sub-components from large pages** -- Split Services.tsx (924 lines) into `ServiceTierCard`, `ServiceComparison`, and `ServiceDifferentiators` sub-components. Split About.tsx into `AboutMilestones`, `AboutTestimonials`, and `AboutValues`.

8. **Add `will-change` and `contain` optimizations** -- Audit all Framer Motion `animate` infinite loops and add `will-change: transform` to containers. Add `contain: layout style` to heavy section wrappers to isolate paint.

## Technical Approach

- **Modified files**: `src/pages/Inquire.tsx`, `src/pages/About.tsx`, `src/pages/FAQ.tsx`, `src/pages/Services.tsx`
- **New sub-component files**: `src/components/wedding/ServiceTierCard.tsx`, `src/components/wedding/ServiceComparison.tsx`, `src/components/wedding/AboutMilestones.tsx`, `src/components/wedding/AboutTestimonials.tsx`
- **No new dependencies** -- all using existing Framer Motion + Tailwind + CSS variables
- **Performance**: Splitting 800+ line files improves tree-shaking and reduces re-render scope. `contain` property isolates paint for sections with infinite animations.

