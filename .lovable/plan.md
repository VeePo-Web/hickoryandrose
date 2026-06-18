# Audit and align Meg's image + alt text site-wide

## What's already correct

All four components that render a founder portrait import `@/assets/founder-portrait.jpg`, which was replaced with Meg's real photo last turn. Confirmed usages:

1. `src/components/wedding/FounderTeaserSection.tsx` (home)
2. `src/components/wedding/AboutFounderSection.tsx` (About)
3. `src/components/wedding/ApproachDifferentiators.tsx` (Approach)
4. `src/pages/Approach.tsx` (Approach hero attribution)

No other components reference a founder image — the swap is already site-wide.

## Issues found in the audit

### A. `src/pages/About.tsx` line ~312 — misleading alt text
The image at that spot is `aboutHeroImage` (a ceremony/conservatory scene), but its alt reads:
> "Wedding planner Meg reviewing day-of timeline with vendors in sunlit garden conservatory"

That falsely claims Meg is pictured. Two clean options:
- **(Chosen) Fix the alt** to describe the actual scene without naming Meg: `"Sunlit garden conservatory ceremony setup with vendor timeline in progress"`. Keeps the existing ceremony photo (which is the right visual for that storytelling slot) and stops impersonating Meg.

### B. `src/components/wedding/FounderTeaserSection.tsx` line 148 — alt doesn't match Meg's real photo
Current alt: `"Founder of Hickory & Rose, smiling warmly in a garden setting with sage eucalyptus and ivory roses"`. Meg's real photo is a clean indoor portrait with soft greenery in the background — no roses. Update to: `"Meg Wolodko, founder of Hickory & Rose, smiling warmly in a soft natural-light portrait"`.

### C. `src/components/wedding/ApproachDifferentiators.tsx` line 86 — generic alt
Current: `"Hickory & Rose founder reviewing wedding details"`. Image is actually her smiling portrait. Update to: `"Meg Wolodko, founder of Hickory & Rose"`.

## Out of scope

- Text-only mentions ("Meet the Founder" headings, BrandPromiseSection's "— Founder, Hickory & Rose" quote attribution, SEO meta descriptions) — no image needed, leaving as-is.
- TODO comments referencing "owner".
- OG image, founder name spelling, layouts.

## Verification

After the three alt-text edits, grep for `alt=.*[Mm]eg` and confirm every result honestly describes either Meg's real portrait or another verifiable scene. Visual spot-check home, About, Approach in preview.
