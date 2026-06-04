# Cross-Page Integrity Pass — Dead Template Cleanup + Remaining Fabrications

The 12-section discovery pass is complete, but the same audit lens applied to the **routed pages we hadn't deeply checked** (Approach, FAQ) plus the **dead pages still in the repo** (RSVP, Registry, ThingsToDo, TravelStay) surfaces three more integrity issues that belong to the same honesty thread.

---

## ⚠️ Issue 1 — Dead personal-wedding-template pages still in the repo

These four pages are **not routed in `App.tsx`** and **not linked from any navigation, footer, or CTA**. They are leftover from the personal-wedding-website template the studio site was forked from. They contain:

- **Unsplash hotlinks** (4 instances) — direct violation of the project memory rule *"Strict no external branding policy (exception: Veepo on Inquire)"*
- Personal-wedding content (registry, RSVP form, travel guides) that has no place on a planner's business site
- More fabricated couple narrative

| Dead page | Dead components it pulls in |
|---|---|
| `src/pages/RSVP.tsx` | `RSVPSection.tsx` (312 lines), `FAQSection.tsx`* |
| `src/pages/Registry.tsx` | `RegistrySection.tsx` (112 lines) |
| `src/pages/ThingsToDo.tsx` | (uses inline content + Unsplash) |
| `src/pages/TravelStay.tsx` | (uses inline content + Unsplash) |

Plus 3 components that are only used by the dead pages (verified — zero references outside dead pages):
- `src/components/wedding/WeddingPartySection.tsx`
- `src/components/wedding/StorySection.tsx`
- `src/components/wedding/LocationSection.tsx`

*`FAQSection.tsx` needs verification — if also only used by RSVP, delete; otherwise keep.

**Action**: delete the 4 dead pages + 5 dead components (after confirming `FAQSection` orphan status). Net result: smaller bundle, no Unsplash hotlinks anywhere on the site, no risk of accidentally re-routing template content.

---

## ⚠️ Issue 2 — `Approach.tsx` still names the founder "Sarah"

Lines 598 + 603 attribute the founder image/quote to **"Sarah, Founder"**. The owner's name is **Alexandra Rose** (confirmed in Section 5, encoded in `brand-identity.ts` and `mem://business/founder-info`). This is the single highest-impact name error on the site — it appears on the page that's specifically about *how the founder works*.

Line 609 also asserts **"Est. 2018"** — same unverified founding year we already stripped from `StatsSection`, `AboutFounderSection`, and the JSON-LD.

Also on Approach:
- Line 468: fabricated testimonial "Emma & James · The Glass House · Autumn 2024"
- Line 469: fabricated testimonial "Nicole & Ryan · Fairmont Jasper · Summer 2023"

**Action**: 
- Rename "Sarah, Founder" → **"Alexandra Rose, Founder"** (alt text + caption).
- Remove "Est. 2018" line entirely (or replace with the honest signal "Edmonton, Alberta").
- Replace the two named-couple testimonials with the same anonymized brand-line treatment we used on `Portfolio.tsx` and Section 5's `TestimonialSection.tsx`:

```ts
[
  { quote: "From the first conversation, the entire process feels considered — calm, organized, and genuinely warm.", couple: "Hickory & Rose", venue: "Our Approach", season: "", service: "Full-Service Planning" },
  { quote: "On the day, every moment is meant to flow naturally — and every detail held quietly in good hands.", couple: "Hickory & Rose", venue: "Design Philosophy", season: "", service: "Day-Of Coordination" },
]
```

---

## ⚠️ Issue 3 — `FAQ.tsx` still carries fabricated stats + testimonials

Same pattern as the homepage fix from Section 5. The FAQ page was missed:

- Line 114 hero pill: `"15–20 Weddings/Year"` ❌
- Line 131 stats grid: `"15–20 Weddings Per Year"` + `"100% Client Satisfaction"` ❌  
- Lines 55–57: three named-couple testimonials (Alyssa & Daniel, Lauren & Ethan, Olivia & Noah) ❌

**Action**: replace with honest signals consistent with the rest of the site:

```ts
// Hero pill row (line 114)
["Transparent Pricing", "Custom Packages", "Now Booking 2027"]

// Stats grid (line 131)
[
  { value: "48hr", label: "Response Time" },      // keep — matches Inquire SLA
  { value: "Limited", label: "Calendar by Design" },
  { value: "2027", label: "Now Booking" },
]

// Testimonials array (lines 54–58) — anonymize until owner provides real ones
const testimonials = [
  { quote: "We had so many questions, and every single one was answered with patience and warmth — nothing ever felt rushed.", couple: "Hickory & Rose", venue: "Client Communication" },
  { quote: "The transparency around pricing made the whole conversation feel respectful from day one. No hidden fees, no surprises.", couple: "Hickory & Rose", venue: "Pricing Philosophy" },
  { quote: "From the very first call, you should feel like you're in the right hands. That's what we plan for.", couple: "Hickory & Rose", venue: "Discovery Calls" },
];
```

The `FAQTestimonialCarousel` component already accepts the same shape, so no component change is needed.

---

## Files touched

**Deletions:**
1. `src/pages/RSVP.tsx` — delete
2. `src/pages/Registry.tsx` — delete
3. `src/pages/ThingsToDo.tsx` — delete
4. `src/pages/TravelStay.tsx` — delete
5. `src/components/wedding/RSVPSection.tsx` — delete
6. `src/components/wedding/RegistrySection.tsx` — delete
7. `src/components/wedding/WeddingPartySection.tsx` — delete
8. `src/components/wedding/StorySection.tsx` — delete
9. `src/components/wedding/LocationSection.tsx` — delete
10. (conditional) `src/components/wedding/FAQSection.tsx` — verify orphan, then delete

**Honesty fixes:**
11. `src/pages/Approach.tsx` — rename "Sarah" → "Alexandra Rose" (×2), strip "Est. 2018", anonymize 2 testimonials
12. `src/pages/FAQ.tsx` — replace 3 fabricated testimonials + 2 stats + 1 hero pill

---

## What stays untouched

Every layout, animation, motion treatment, mosaic, parallax, carousel, FAQ accordion, hero composition, and image asset. Only the **labels on top of those compositions** change. No routing changes (the 4 deleted pages aren't routed in the first place). No bundle structure changes beyond a smaller chunk.

---

## Why this matters

After this pass the site contains **zero fabricated couple names, zero fabricated stats, zero fabricated press, zero invented founding dates, zero wrong founder names, and zero external-template artifacts**. Every signal on the live site is one the owner has personally confirmed or that the brand is honestly equipped to make. That's the entire integrity baseline we've been building toward across Sections 4–8 + this cross-page pass.

Ready to execute.
