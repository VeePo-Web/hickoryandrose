# 1.2 — Shorter Brand Name: Subtle Refinement Plan

**Owner's answer:** Short form is **"Hickory & Rose"**. Decorative monogram **"H&R"** is allowed only as a non-readable watermark / visual flourish (never as a substitute for the brand name in body or chrome copy).

## Audit results

**Short form "Hickory & Rose"** — used consistently across ~40 components (hero, nav, footer, manifesto, founder, testimonials, OG/meta). ✅ No change needed.

**"H&R" appearances** — 4 total:

| File | Line | Context | Status |
|---|---|---|---|
| `Footer.tsx` | 36 | Large decorative monogram watermark, `aria-hidden` | ✅ Correct — decorative |
| `BrandManifestoSection.tsx` | 216 | Faded corner flourish at 30% opacity | ✅ Correct — decorative |
| `GallerySection.tsx` | 425 | Faded script flourish at 10% opacity | ✅ Correct — decorative |
| `Approach.tsx` | 82 | **Editorial chrome label** next to `FR-01` / `DOCUMENTARY` — readable uppercase tracking | ⚠️ Reads as a label, not a watermark |

## Proposed subtle change (one edit)

**`src/pages/Approach.tsx`** line 82 — swap the readable `H&R` chrome label for an editorial reference code that fits the existing `FR-01` / `DOCUMENTARY` rail without abbreviating the brand name in user-facing copy.

```diff
-        <span>H&R</span>
+        <span>HR—STUDIO</span>
```

Alternative wording options if preferred: `STUDIO`, `EST. 2020`, `EDM·AB`. All keep the same visual rhythm and length as `FR-01`.

## Config tidy (optional, low-risk)

Add an explicit `monogram` field to `src/config/brand-identity.ts` so future devs know the rule:

```ts
name: {
  full: "Hickory & Rose Wedding and Event Planning",
  short: "Hickory & Rose",
  monogram: "H&R", // decorative watermark only — never used as readable label
  tagline: "...",
},
```

## What stays untouched

- All three decorative `H&R` watermarks (Footer, Manifesto, Gallery) — these are exactly the intended use.
- Every readable instance of "Hickory & Rose" site-wide.
- No layout, styling, animation, or logic changes.

## Files touched

1. `src/pages/Approach.tsx` — 1 line
2. `src/config/brand-identity.ts` — add `monogram` field (optional)
