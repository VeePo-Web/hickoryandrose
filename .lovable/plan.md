

# VeePo Badge -- Add "veepo.ca" Domain Branding

## Issue
The badge currently shows only the VeePo logo image and tagline "Where Vision Meets Precision" but never displays the actual domain **veepo.ca** as text. The link correctly points to `https://veepo.ca/case-studies`, but visually there's no indication it's veepo.ca (vs veepo.com). The user wants the `.ca` TLD prominently shown.

## Changes (1 file: `src/components/wedding/Footer.tsx`)

1. **Add "veepo.ca" domain text** below the logo and above the tagline -- a clean, medium-weight label like `VEEPO.CA` in `text-[0.7rem] md:text-[0.85rem]` with wide tracking, white/60 opacity (hover white/90), using the same sans-wedding font. This makes the Canadian domain unmistakable.

2. **Update alt text** on the logo from `"VeePo"` to `"VeePo.ca"`.

3. **Update aria-label** to include "veepo.ca" explicitly.

