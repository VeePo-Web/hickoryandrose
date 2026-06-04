# Section 1 (Brand & Identity) — Items 1.4 through 1.20 — Subtle Refinement Plan

Batched plan for the remaining Section 1 questionnaire items. Each item is either an already-answered owner response that needs to be reflected on-site, or a `TBC` that gets a subtle, on-brand placeholder consistent with the owner's voice (luxury, friendly, caring, seamless, calming).

All changes are content-only: brand-identity config + small copy nudges in existing components. No layout, no styling, no logic changes.

---

## 1.4 — One Clear Sentence (was TBC)

**Proposed sentence** (synthesized from owner's other answers):

> *Hickory & Rose is an Edmonton-based wedding and event planning studio guiding refined couples through seamless, stress-free celebrations with calm leadership and thoughtful design.*

**Implementation**
- `src/config/brand-identity.ts` → fill `positioning.oneSentence`
- `index.html` meta description currently uses a shorter SEO-tuned line — keep that as-is (under 160 chars).
- No visible page edit needed; the one-sentence value is for internal reference + future SEO snippets.

## 1.5 — Named Promise ✅ already reflected

`positioning.namedPromise` is already used as the manifesto pull-quote. No change.

## 1.6–1.10 — Positioning, differentiators, known-for ✅ already reflected

Used throughout `BrandPromiseSection`, `AboutValuesGrid`, `ServicesVendorPartners`. No change.

## 1.11 — Refined Rustic Elegance Is *Not* (was TBC)

**Proposed**:

> *Not rustic-country, not barnyard, not boho-casual. Never cluttered, themed, or kitsch. Never cold minimalism.*

**Implementation**
- `src/config/brand-identity.ts` → fill `positioning.refinedRusticEleganceIsNot`
- Reference-only; not rendered on site.

## 1.12–1.15 — Tone words ✅ already reflected

`voice.tone` matches owner answers. No change.

## 1.16 — Voice Boundaries (was TBC)

**Proposed list** (derived from tone + owner's "calm/caring/luxury" answers):

```ts
boundaries: [
  "Never pushy or sales-y",
  "Never casual to the point of unprofessional",
  "Never cold, clinical, or corporate",
  "Never trend-chasing or buzzword-heavy",
  "Never minimize the couple's vision or feelings",
]
```

**Implementation**: `brand-identity.ts` only. Reference document for future copy.

## 1.17 — Repeat words ✅ already reflected.

## 1.18 — Words/Phrases to Avoid (was TBC)

**Proposed list**:

```ts
avoidWords: [
  "rustic" (without "refined" modifier),
  "barn",
  "boho",
  "cheap",
  "budget",
  "DIY",
  "stress" (without "stress-free"),
  "chaos",
  "drama",
  "girl boss",
  "babe",
  "obsessed",
  "literally",
  "vibes",
]
```

**Action item**: After landing this list, do a one-pass `rg` audit and quietly soften any matches. Initial scan suggests current copy is already clean — will verify on implement.

## 1.19 — Manifesto (was TBC)

**Proposed manifesto** (5 short lines, written in owner's voice):

> *We believe every celebration deserves presence.*
> *We believe calm is a form of luxury.*
> *We believe the most beautiful weddings feel inevitable — never forced.*
> *We believe in protecting the joy, not just the timeline.*
> *We believe in showing up, fully, so you can too.*

**Implementation**
- Save to `brand-identity.ts` (`voice.manifesto`).
- Optional subtle upgrade: feed the final line into the existing `BrandManifestoSection` as a quiet closing line if the owner approves. For this pass, **keep the section visually identical** — config only.

## 1.20 — Persona If H&R Were a Guest at the Wedding (was TBC)

**Proposed persona**:

> *The trusted older sister who happens to be exquisitely organized. Calm, warm, never flustered. Quietly fixes problems before anyone notices. Genuinely delighted to be there. Knows when to step in and when to step back.*

**Implementation**: `brand-identity.ts` only. Internal reference.

---

## Summary of edits

**Files touched (single file):**
1. `src/config/brand-identity.ts` — fill 6 TBC fields with the values above (1.4, 1.11, 1.16, 1.18, 1.19, 1.20).

**On-site copy:** intentionally **no visible changes** in this pass. The Section 1 work is foundation — it locks the internal reference so every future copy pass (Sections 2+, page rewrites, future blog posts, email templates) draws from the same authoritative source.

**Verification after implement:**
- Run `rg` for any `avoidWords` matches in current copy; flag for owner if found.
- Re-read `brand-identity.ts` to confirm no remaining `TBC` strings in Section 1.

---

## Why no visible page changes?

Section 1 of the questionnaire is brand foundation — the kind of thing that should govern every future word, not be pasted verbatim into a hero. Touching visible copy here would risk breaking the carefully composed editorial rhythm we already shipped. The high-leverage move is to lock the reference doc; we'll draw from it as we move into Sections 2 (ideal client), 3 (services), 4 (experience), etc., where the changes *should* be visible.

Ready to implement on approval, then move to Section 2.
