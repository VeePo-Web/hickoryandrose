# Plan: Final Alexandra/owner-pronoun sweep

## Findings

**"Alexandra"** — 0 hits in shipped code. Only remaining matches are in `.lovable/plan.md` (the historical rename plan document — safe to leave as a record, but I can scrub it for cleanliness).

**"she/her" referring to the owner Meg** — only **1 real hit**:
- `src/config/brand-identity.ts:218` — `story: "", // TBC — 5.1, owner writing her own`

Every other `she/her` match is intentional and correct:
- ~14 hits about **Polished Paige** (the customer persona) in `ideal-customer.ts`, `design-plan.ts`, `ui-visual.ts`, `ui-navigation.ts`, `discovery-framework.ts`, and `brand-identity.ts` lines 133/141 — these describe the *bride*, not the owner.
- 1 hit in `discovery-framework.ts:48` is the brand-as-guest metaphor ("If Hickory & Rose were a guest…how would she show up?") — keeps brand femininity intentional.

## Changes

### 1. `src/config/brand-identity.ts` line 218 (the only ambiguous owner pronoun)
Make the placeholder unambiguous and signed to Meg:
- From: `story: "", // TBC — 5.1, owner writing her own`
- To:   `story: "", // TBC — 5.1, Meg Wolodko to write her own founder story`

### 2. `.lovable/plan.md` (housekeeping — optional but tidy)
Add a one-line footer noting the rename was completed and the file is archived, so future searches for "Alexandra" don't surface a confusing active-looking plan. Body stays as historical record.

## Not changing
- Any "she/her" referring to Polished Paige or to the brand metaphor — those are deliberate.
- Memory files — already updated to Meg.

## Verification after build mode
`rg -ni "alexandra" src/ public/ index.html` → expect 0 hits.
`rg -ni "owner.*\bher\b|\bher\b.*owner" src/` → expect 0 hits.
