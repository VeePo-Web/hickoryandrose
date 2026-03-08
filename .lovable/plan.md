

# Upgrade: InquireCelebration — Cinematic Entrance Choreography & Layered Depth

## Assessment

The InquireCelebration already contains the gold shimmer burst, 16-diamond cascade, triple expanding rings, editorial timeline, and MagneticButton CTA. All other major sections (StatsSection, ServiceTierCard, FooterServiceAreas, FAQSection, etc.) are thoroughly polished. The console is clean.

However, the InquireCelebration can be elevated further with **entrance choreography staggering** and **cinematic depth layers** that currently feel simultaneous rather than sequenced like a premium reveal.

## What feels flat today

1. **All animation layers fire at once** -- the gold pulse, horizontal sweep, diamond cascade, and content all begin near t=0. Premium celebrations (think Apple product reveals) use a clear **sequential curtain**: background atmosphere first, then ornament, then content.
2. **No letterbox cinematic bars** -- every other hero in the site uses grain overlays and vignettes, but InquireCelebration lacks the letterbox bars that would frame it as a "moment."
3. **The headline lacks the shimmer-gold treatment** used on stat values in StatsSection -- "Your story begins here" should have the signature gold shimmer text animation.
4. **Missing ambient particle field** -- subtle floating dust/bokeh particles (4-6 small CSS-animated dots) would add the depth layer present in the LoadingScreen but absent here.

## Plan (4 items)

1. **Stagger the entrance choreography into 3 sequential beats**
   - Beat 1 (0-1s): Radial gold pulse + horizontal sweep (atmosphere)
   - Beat 2 (1-2s): Diamond cascade + expanding rings (ornament)  
   - Beat 3 (2s+): Content fade-in, timeline reveal, CTA
   - Shift existing `delay` values to create this clear 3-act reveal

2. **Add shimmer-gold CSS class to the headline** "Your story begins here" -- apply the existing `shimmer-gold` utility from `index.css` which is already defined but unused on this page

3. **Add 6 ambient floating bokeh particles** -- tiny CSS-animated circles (2-4px) with `animation: float` keyframes, scattered across the section at low opacity (0.03-0.06), using the existing `--gold` token. Pure CSS, no framer-motion cost.

4. **Add cinematic letterbox bars** -- two 3vh-height bars at top/bottom that fade in and then slide away during beat 1, matching the PageTransition curtain pattern. Uses `motion.div` with `scaleY` animation.

## Files Modified
- `src/components/wedding/InquireCelebration.tsx` — re-stagger delays, add shimmer-gold headline, bokeh particles, letterbox bars
- `src/index.css` — add `@keyframes float-particle` (6 lines)

