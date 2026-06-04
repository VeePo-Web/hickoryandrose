# Section 2 (Ideal Client) — Subtle Refinement Plan

The owner's archetype is **"Polished Paige"**: design-forward, detail-driven, strong taste, wants calm leadership without losing creative involvement. Two TBC fields remain (2.7 pressures, 2.8 first-five-seconds). Section 2 also informs visible UX: who the site speaks to, what they feel in the first scroll, what they need to see by inquiry time.

All changes are content-level or micro-copy. No layout, no new sections.

---

## 2.1–2.6 — Archetype & description ✅ already reflected

Used in `Approach.tsx` and persona config files. No change.

## 2.7 — Pressures the Ideal Client Faces (was TBC)

**Proposed list** (synthesized from "Polished Paige" + owner's tone goals):

```ts
pressures: [
  "Pressure to deliver a wedding that lives up to her own design taste",
  "Pressure from family expectations and competing opinions",
  "Pressure of a demanding career — limited time and mental bandwidth",
  "Fear of losing creative control to a planner with a different aesthetic",
  "Fear of the day feeling rushed, chaotic, or not 'them'",
  "Fear of being the one fielding vendor questions on the day",
]
```

**Implementation**: `brand-identity.ts` only. Internal reference doc.

## 2.8 — First Five Seconds on the Site (was TBC)

**Proposed**:

> *Calm, elevated, immediately understood. A single beautiful image. A confident, quiet headline. No noise, no popups, no "book now" pressure. She should feel her shoulders drop before she reads a word.*

**Implementation**: `brand-identity.ts` only. (The hero already executes this — no on-site change required. This field codifies the standard for future hero variants.)

## 2.9 — First Thirty Seconds ✅ already reflected

Currently: *"Galleries that show real weddings. Professionalism in every detail. Clarity about what we do and how we work."* — matches the existing scroll order (hero → trust bar → services → gallery teaser). No change.

## 2.10 — By Inquiry, She Should Feel ✅ already reflected

Currently: *"Understanding. Excitement. Confidence."* Used as the emotional north-star for `InquireCelebration`. No change.

**Subtle fix**: `src/config/personas/discovery-framework.ts:86` still has `byInquiry: "" // TODO`. Sync it with `brand-identity.ts` so the two sources don't drift.

---

## Visible site touches (small, persona-aligned)

A pure config update is invisible. To honor the spirit of Section 2 — making sure the site actually speaks to Polished Paige — make two micro-copy nudges in places the current copy is slightly generic:

### A. `InquireCelebration.tsx` — opening reassurance line

Currently the post-inquiry copy reads:

> *Your inquiry has been received with care. Here is what happens next on the path to a seamless, thoughtfully planned celebration.*

**Refine to lead with the three feelings the owner named (understanding, excitement, confidence):**

> *Your inquiry has been received with care. Take a breath — you're understood, you're in good hands, and the next steps are already in motion.*

Why: matches the owner's stated "by inquiry, she should feel: understanding, excitement, confidence" without adding marketing language.

### B. `Approach.tsx` ideal-client paragraph

The page currently describes the archetype in slightly generic terms ("design-forward, detail-driven"). Re-read in build, and if it reads as a list of adjectives, soften it into a single sentence that names *what she's carrying* — not just what she's like. Will draft on implement once the exact current copy is read.

---

## Files touched

1. `src/config/brand-identity.ts` — fill `pressures` and `firstFiveSeconds`.
2. `src/config/personas/discovery-framework.ts` — fill the `byInquiry` TODO so the two configs match.
3. `src/components/wedding/InquireCelebration.tsx` — one-line softening of the reassurance copy.
4. *(Conditional)* `src/pages/Approach.tsx` — re-read on implement; if the ideal-client paragraph reads as adjective-soup, smooth it into one sentence.

## What stays untouched

Every layout, every image, every animation, every heading hierarchy, the hero, the trust bar, the gallery — all unchanged. Section 2 is about *who we're talking to*, not *what the page looks like*.

Ready to implement on approval.
