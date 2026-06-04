# Section 3 (Services, Packages & "Calm Luxury Leadership" Process) — Subtle Refinement Plan

The owner answered Section 3 partially. The key recurring instruction is **prices are not finalized** but she wants "starting at" framing — meaning **no firm dollar amounts should be displayed** until she confirms pricing. The current site has hard prices in three places that contradict this. Plus a couple of factual misalignments (lead time, partial-planning scope) that drifted from her answers.

This plan covers visible site fixes + remaining Section 3 TBC reference fields.

---

## A. Visible site corrections — alignment with owner answers

### A1. Lead time — 3.4
Owner: *"6-8 weeks prior to the wedding, unlimited communication during this time"*

| File | Current | Fix |
|---|---|---|
| `src/pages/Services.tsx:33` | "we step in **4-6 weeks** before" | "we step in **6–8 weeks** before, with **unlimited communication** through to the day," |

The overview component already says "6–8 weeks" — Services.tsx is the only drift.

### A2. Pricing — 3.22 + 3.23
Owner: *"I need to finalize prices… Yes — maybe 'starting at' prices so that we can tailor as needed."*

Until she sends final numbers, **remove all hard dollar amounts** site-wide. Replace with `"Starting at — inquire"` (already the pattern used in `ServicesOverviewSection.tsx`).

| File | Lines | Fix |
|---|---|---|
| `src/pages/Services.tsx` | 31, 51, 71 | `investment` → `"Starting at — inquire"` |
| `src/pages/Services.tsx` | 104 | meta description: drop the three "$X,XXX" amounts; keep edit-safe sentence: *"Explore Hickory & Rose wedding planning services in Edmonton — day-of coordination, partial planning, and full-service planning. Custom proposals tailored to every couple."* |
| `src/pages/Services.tsx` | 182 | pill list `["Three Curated Tiers", "Custom Proposals", "From $2,500"]` → `["Three Curated Tiers", "Custom Proposals", "Tailored to You"]` |
| `src/components/wedding/ServiceComparison.tsx` | 6–8 | `price: "From $X,XXX"` → `price: "Starting at — inquire"` for all three rows |

`src/config/personas/market-research.ts:129` is internal-only persona research notes — leave alone, but I'll add a comment noting prices are outdated.

### A3. Partial Planning scope — 3.6
Owner: *"Exactly as above [day-of], plus remaining vendor sourcing"*

Current `Services.tsx` Partial tier over-promises (mood boards, monthly meetings, budget tracking, décor styling). This contradicts her direct answer. The Overview component is correct (matches her words). Bring Services.tsx in line.

**New Partial `includes` list:**
```ts
includes: [
  "Everything in Day-Of Coordination",
  "Remaining vendor sourcing and curation",
  "Vendor recommendations from our trusted network",
  "Planning check-ins to round out your team",
]
```

Description shortened to: *"For couples who've started planning but need a trusted partner to complete the vendor team and carry the rest of the load with you."*

(3.7/3.8 are TBC — owner needs to flesh out deliverables. Keeping copy minimal & honest until she does.)

### A4. Full-Service — 3.9
Owner: *"From the moment they get engaged, so design, vision, vendors etc"*

Current Services.tsx Full tier copy is close but adds "welcome event and post-wedding brunch coordination" — owner hasn't confirmed. Soften to match her words.

**New Full `includes` list:**
```ts
includes: [
  "Everything in Partial Planning",
  "Design direction and vision development",
  "End-to-end vendor sourcing, negotiation, and management",
  "Comprehensive logistics and production",
  "Held from engagement through final send-off",
]
```

### A5. Vendor collaboration — 3.14
Owner: *"Exactly as noted in your prompts, we need to work as a team always"* ✅ already reflected in `ServicesVendorPartners.tsx`. No change.

### A6. Emergency kit — 3.16
Owner: *"emergency kit available"* ✅ already in Day-Of includes line. No change.

### A7. 2-person team for 2027 — 3.25
Owner: *"I think moving forward for 2027 enquiries I want to always offer a 2 person team"*

Already in `brand-identity.ts` (`capacity.twoPersonTeamFrom2027`). Add a single quiet line in `ServicesInvestmentPhilosophy.tsx` (already exists) so visitors looking at 2027 dates understand the team standard: *"For 2027 weddings, every package includes a two-person planning team as standard."*

I'll add it as a subtle note, not a banner.

---

## B. Brand-identity config — fill remaining Section 3 reference fields

Add a `services` block to `brand-identity.ts` for fields not yet captured (3.5, 3.7, 3.10, 3.13, 3.15, 3.17–3.20, 3.24, 3.26, 3.27 are TBC by owner — leave as `// TBC owner` so we don't invent business operations). Only fill what we *can* derive:

```ts
services: {
  dayOf: {
    leadTime: "6–8 weeks before the wedding",
    communication: "Unlimited communication from intake through the day",
    scopeBoundaries: "", // TBC — 3.5
  },
  partial: {
    coreAddition: "Remaining vendor sourcing and curation",
    deliverables: "", // TBC — 3.7
    flexibilityRules: "", // TBC — 3.8
  },
  fullService: {
    entryPoint: "From the moment of engagement",
    scope: "Design, vision, vendor sourcing, end-to-end execution",
    designLogisticsBalance: "", // TBC — 3.10
  },
  pricing: {
    displayMode: "starting-at-inquire", // 3.23 — owner wants 'starting at' once finalized
    pricesFinalized: false, // 3.22 — pending owner confirmation
    privatePricingLanguage: "", // TBC — 3.24
  },
  vendorPhilosophy: "We work as a team with every vendor — always.",
  contingency: "Emergency kit on hand; calm leadership protects the room.",
  upgrades2027: "Two-person planning team standard for every 2027 wedding.",
},
```

This locks the parts the owner answered and clearly marks what's still pending — no guessing on her operational details.

---

## C. Files touched

1. `src/pages/Services.tsx` — fix lead time, replace 3× prices, fix meta description, fix pill, rewrite Partial + Full `includes`/descriptions
2. `src/components/wedding/ServiceComparison.tsx` — replace 3× prices
3. `src/components/wedding/ServicesInvestmentPhilosophy.tsx` — add quiet 2027 line (read first to find natural placement)
4. `src/config/brand-identity.ts` — add `services` block (above)
5. `src/config/personas/market-research.ts` — add 1-line comment marking the priceAnchor as outdated (internal only)

## D. What stays untouched

- All layout, imagery, motion, hero, gallery, navigation
- All copy already correct (Overview component, Vendor Partners, FAQ venue-vs-planner answer)
- Items the owner explicitly marked "I need to think about" or TBC — flagged in config, not invented

Ready to implement on approval.
