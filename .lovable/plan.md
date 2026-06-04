# Plan: Owner-Voice Content Refinements (Subtle Pass)

## What this is

A surgical, content-only pass across the existing site to align copy, taglines, and a few small structural details with the owner's questionnaire answers. No layout rebuilds, no new pages, no design system changes. Only answered questions are acted on — every "TBC" is left untouched and flagged for a future pass.

## Guiding voice (locked from answers)

- **Voice descriptors**: luxury, friendly, caring, seamless, calming, organized, detailed, experienced
- **Core promise (1.7)**: *"Hickory & Rose exists to protect the beauty, intention, and experience behind every celebration."*
- **Refined rustic elegance (1.10)**: *"The harmony of natural beauty, thoughtful design, and elevated details — effortless and timeless."*
- **Presence (1.9)**: *"We handle the planning, logistics, and coordination behind the scenes — so you can focus on the moments that matter most."*
- **Wedding feel (4.1)**: dream vision · love · comfort · luxury · calm
- **Guest feel (4.2)**: structured · smooth · calm · love · enjoyable
- **Service area (1.3)**: Edmonton-based, serving surrounding Alberta. *Travel fees apply outside Greater Edmonton.*

---

## Changes by area

### 1. Brand reference file (foundation)
**File**: `src/config/brand-identity.ts`
- Fill in: `positioningOptions`, `namedPromise`, `refinedRusticEleganceIs`, `voice.tone`, `voice.repeatWords`, `industry.serviceArea`, `idealClient.byInquiry`, `idealClient.firstThirtySeconds`.
- Leaves all TBC fields empty with a `// TBC` marker so future content can drop in cleanly.

### 2. Homepage (`src/pages/Index.tsx` + child components)
- **HeroSection**: confirm sub-headline reflects "seamless · stress-free execution · luxury, personalized planning · thoughtfully bringing your vision to life." Tweak only the tagline line(s), not layout.
- **BrandPromiseSection**: replace promise body with the 1.7 line ("…protect the beauty, intention, and experience…").
- **BrandManifestoSection**: keep visual treatment; update the sub-manifesto paragraph to use the 1.9 "protecting presence" language verbatim-ish ("so you can focus on the moments that matter most").
- **TrustBarSection / NowBookingSection**: update trust line to mention "Now booking 2026 · Limited 2027 dates" framing — soft capacity message implied by owner's 2027 mention (3.25). No hard number invented.
- **Founder/Process teasers**: tone-tune copy to the 5.2 descriptors (organized, calming, detailed, experienced).

### 3. About page (`src/pages/About.tsx` + `AboutPromises`, `AboutValuesGrid`)
- **Promises/Values**: replace placeholder values with the answered descriptor set (luxury, friendly, caring, seamless, calming, organized, detailed, experienced) mapped into the existing 4–6 value cards.
- **Founder credentials section**: add the credibility signals from 5.5 — *styled shoot (Aug 2026), 2026 wedding season fully booked, growing vendor referral network* — phrased in a calm, present-tense voice. No fabricated review counts.

### 4. Services pages
- **`ServicesOverviewSection`**: 3 tiers' short descriptions rewritten:
  - **Day-of Coordination (3.3 / 3.4)**: "Fully taken care of. We step in 6–8 weeks before your day with unlimited communication, full timeline build, and vendor coordination so you arrive present and ready."
  - **Partial Planning (3.6)**: "Everything in Day-of Coordination, plus remaining vendor sourcing and curation to round out your team."
  - **Full-Service Planning (3.9)**: "From the moment you're engaged — design, vision, vendor sourcing, and execution. Every element, held end-to-end."
- **`src/pages/Services.tsx`**: add a short "Tailored options also available" line (3.1).
- **Pricing display (3.23)**: where pricing is currently absent or hidden, add unobtrusive *"Starting at — inquire for tailored pricing"* placeholder tags on tier cards. Actual numbers stay TBC.
- **Vendor philosophy line (3.14)**: small inline quote on `ServicesVendorPartners` — *"We work as a team, always."*
- **Emergency kit (3.16)**: one-line mention in the day-of details list — *"On-site emergency kit, always."*
- **2-person team (3.25)**: small "Two-person team standard for 2027 weddings" note on the Full-Service tier.

### 5. FAQ page (`src/pages/FAQ.tsx`)
- Add ONE new Q&A using the 4.9 answer:
  - *Q: "My venue has a coordinator — do I still need a wedding planner?"*
  - *A: "A venue coordinator manages the venue. A wedding day coordinator works for you — managing all of your vendors, every in-between moment, and the rhythm of your day from start to finish."*
- Add another Q from 7.3 framing: *"What does the website show that Instagram can't?"* → *"The full picture of how we plan, lead, and protect your day."*

### 6. Inquire page (`src/pages/Inquire.tsx` + `InquireCelebration`)
- Hero sub-line tuned to 2.10 trio: *"Understanding. Excitement. Confidence — by the time we meet."*
- Confirmation screen copy lightly warmed to the 5.2 descriptors.
- (Veepo badge already in place — untouched.)

### 7. Footer & service-area copy
- **`Footer` / `FooterServiceAreas`**: update service-area line to the 1.3 wording: *"Edmonton-based · Serving surrounding Alberta · Travel fees apply outside Greater Edmonton."*
- Keep all existing footer styling, links, and the no-external-branding policy intact.

### 8. SEO meta + JSON-LD (`src/pages/Index.tsx`, `src/lib/seo.ts` consumers)
- Homepage meta description tightened to lead with the owner's "seamless, elegant, friendly, caring" language while keeping the Edmonton + planning keywords.
- `Index.tsx` JSON-LD: tighten `description`, leave `aggregateRating` alone (no new fabricated proof).
- Terminology: ensure "Day-of coordination" (not "wedding day management") is used everywhere (8.2).

---

## Explicitly NOT changing

- No layout, component structure, or visual system changes.
- No new pages, no nav changes, no animation changes.
- No invented testimonials, ratings, numbers, vendor names, or pricing.
- Every TBC item in the questionnaire is left for a later pass.

## File touch list (estimate, all edits are small)

1. `src/config/brand-identity.ts`
2. `src/components/wedding/HeroSection.tsx`
3. `src/components/wedding/BrandPromiseSection.tsx`
4. `src/components/wedding/BrandManifestoSection.tsx`
5. `src/components/wedding/TrustBarSection.tsx`
6. `src/components/wedding/NowBookingSection.tsx`
7. `src/components/wedding/ServicesOverviewSection.tsx`
8. `src/components/wedding/ServicesVendorPartners.tsx`
9. `src/components/wedding/AboutPromises.tsx`
10. `src/components/wedding/AboutValuesGrid.tsx`
11. `src/components/wedding/AboutFounderSection.tsx`
12. `src/components/wedding/Footer.tsx` and/or `FooterServiceAreas.tsx`
13. `src/components/wedding/InquireCelebration.tsx`
14. `src/pages/Services.tsx`
15. `src/pages/FAQ.tsx`
16. `src/pages/Inquire.tsx`
17. `src/pages/Index.tsx` (meta + JSON-LD description)

## Verification after build

- Spot-check each touched page in preview at desktop + mobile widths.
- Confirm no broken sections, no layout shifts, and that all new copy reads in the owner's voice.
- Re-read the homepage top-to-bottom out loud to confirm tonal consistency.

## Follow-up (separate future pass — not in this plan)

A second content pass once the owner returns answers for the TBC items: brand manifesto (1.19), Polished Paige details (2.1–2.18), service deliverables (3.7, 3.10, 3.13), proof claims (5.9), portfolio organization (6.4–6.8), keywords (8.3–8.4), and visual non-negotiables (9.4–9.5).
