

# Upgrade Pass: Console Fix + Remaining Large Component Splits

## Current State
The forwardRef warning for SectionIndicator persists despite wrapping in `forwardRef`. Five components still exceed the 250-line guideline: Footer.tsx (454), HeroSection.tsx (432), Navigation.tsx (430), Services.tsx (500), About.tsx (483).

## Plan (5 items)

1. **Fix SectionIndicator console warning** -- The outer `AnimatePresence` wrapping `{visible && <motion.div>}` is triggering a ref warning in framer-motion v12. Replace with a simple CSS opacity/translate transition on an always-rendered `<div>` (toggling `opacity-0 pointer-events-none` vs `opacity-100`). Remove the `AnimatePresence` import. This eliminates the warning at its source without visual change.

2. **Extract mobile menu from Navigation.tsx** -- The mobile fullscreen overlay (lines 256-424, ~170 lines) is self-contained with its own animations, link list, and CTA. Extract into `src/components/wedding/NavigationMobileMenu.tsx` receiving `isOpen`, `setIsOpen`, `navLinks`, and `location` as props. Reduces Navigation.tsx from 430 to ~260 lines.

3. **Extract Footer sub-sections** -- The footer contains three distinct zones: newsletter form, service area grid, and bottom legal bar. Extract `FooterNewsletter.tsx` (~80 lines) and `FooterServiceAreas.tsx` (~80 lines). Reduces Footer.tsx from 454 to ~290 lines.

4. **Extract HeroSection floating elements** -- The floating editorial inset image (lines 342-412, ~70 lines) and the left/right sidebar decorations (lines 169-244, ~75 lines) can be extracted into `HeroFloatingInset.tsx` and `HeroSidebars.tsx`. Reduces HeroSection.tsx from 432 to ~280 lines.

5. **Further reduce Services.tsx and About.tsx** -- Services still has ~500 lines; extract the `ServiceComparison` integration section (~80 lines). About has ~483 lines; extract the values grid section into `AboutValuesGrid.tsx` (~100 lines). Both pages drop to ~350-400 lines.

## Technical Approach
- **New files (7)**: `NavigationMobileMenu.tsx`, `FooterNewsletter.tsx`, `FooterServiceAreas.tsx`, `HeroFloatingInset.tsx`, `HeroSidebars.tsx`, `AboutValuesGrid.tsx`, plus Services section extraction
- **Modified files (5)**: `SectionIndicator.tsx`, `Navigation.tsx`, `Footer.tsx`, `HeroSection.tsx`, `About.tsx`, `Services.tsx`
- **Console warning**: Eliminated by removing AnimatePresence from SectionIndicator
- **No new dependencies**, pure refactoring with typed props

