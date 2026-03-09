

# About Page — Phase 2 Polish & Remaining Upgrades

## Audit Findings

After reviewing all 6 About page files post-Phase 1, here are the remaining issues:

### A. Contrast Regressions in New Components

The `AboutProcessRibbon.tsx` created in Phase 1 introduced new contrast issues:
- Line 30: `text-primary-foreground/60` — fails AA on sage-deep (needs `/75`)
- Line 61: `text-primary-foreground/70` — borderline on sage-deep (needs `/80`)
- Line 83: `text-primary-foreground/60` — pull quote fails (needs `/75`)
- Line 85: `text-primary-foreground/40` — attribution fails (needs `/65`)

### B. Hero Micro-Copy Contrast

- Line 94 in `About.tsx`: `text-white/60` on the "For brides who want to be present" line — fails AA on dark hero (needs `/75`)

### C. Mosaic Section (About.tsx lines 216-271)

Currently an anonymous inline section with no editorial label, no section index, no brand storytelling. Feels like a generic image grid compared to every other section which has a serif index number, overline label, and heading.

### D. Press Section Mobile Responsiveness

The certifications row (line 379-386) uses `flex` with `gap-6` which will overflow on small screens. Needs `flex-wrap` and responsive gap.

### E. Testimonial "View Gallery" Link (Phase 2 item)

Plan called for a subtle "View their gallery" link per testimonial — not yet added.

---

## Implementation Plan (7 targeted edits)

1. **Fix ProcessRibbon contrast** — bump 4 opacity values to AA-passing levels
2. **Fix hero micro-copy** — `text-white/60` → `text-white/75` on line 94
3. **Elevate mosaic section** — add editorial section index "05", overline label "Behind the Scenes", and heading; add `role="region"` + `aria-label`
4. **Fix press certifications mobile** — add `flex-wrap` and reduce gap on small screens
5. **Add "View their gallery" link** to testimonials — subtle serif italic link below couple metadata
6. **Add scroll-indicator to hero** — a subtle animated chevron/diamond at bottom suggesting "Meet the Founder" to improve scroll engagement
7. **Improve mosaic image alt text** — more descriptive, SEO-aligned alt attributes for all 3 images

### Files touched: 3
- `src/components/wedding/AboutProcessRibbon.tsx` (contrast fixes)
- `src/components/wedding/AboutTestimonials.tsx` (gallery link)
- `src/pages/About.tsx` (hero fix, mosaic elevation, press mobile fix, scroll indicator)

