# Sections 4 (Experience) & 5 (About & Authority) — Subtle Refinement Plan + Critical Credibility Audit

Two sections handled together because they share the same axis: who Hickory & Rose is, and what experience the bride can trust. While auditing for Section 5 I found a **serious honesty issue** that should be fixed in this pass — the site currently displays multiple unverified statistics the owner never claimed. We need to bring the credentials in line with what she actually said in 5.5.

---

## ⚠️ Priority issue — Unverified credibility claims

Owner's only stated credibility signals (5.5):
- Styled shoot — August 15, 2026
- Summer 2026 — fully booked (3 weddings)
- Fall 2026 — fully booked (2 weddings)
- Growing vendor referral network
- "Not yet" to professional brand photos (5.11)

Current site claims (none verified by owner):

| File | Line | Claim | Status |
|---|---|---|---|
| `HeroSection.tsx` | 42 | "150+ Weddings" | ❌ Fabricated |
| `FounderTeaserSection.tsx` | 9–11 | "150+ Weddings Coordinated", "8 Years of Experience", "100% Client Satisfaction" | ❌ Fabricated |
| `AboutFounderSection.tsx` | 8–12, 108 | "WPIC Certified", "7+ Years", "80+ Vendor Partners" | ❌ Unverified |
| `TrustBarSection.tsx` | 224 | "150+" | ❌ Fabricated |
| `Portfolio.tsx` | 112 | "75+ Weddings Planned", "8 Years of Experience", "100% Client Satisfaction", "15–20 Weddings Per Year" | ❌ Fabricated |
| `StatsSection.tsx` | 8 | "7 Years of Experience, since 2018" | ❌ Unverified |
| `About.tsx` | 112 | "50+ Weddings", "WPIC Certified", "Featured in Style Me Pretty" | ❌ Fabricated |
| `About.tsx` | 435 | "WPIC Member", "Alberta Wedding Network", "Featured Vendor — Jasper Park Lodge" | ❌ Unverified |

**The fix**: replace every fabricated metric with the **real, owner-confirmed credibility signals** — framed editorially so they feel like proof, not numbers.

**Proposed replacement credentials set** (uses only what the owner actually told us):

```ts
const credentials = [
  { value: "2026", label: "Summer & Fall Fully Booked" },
  { value: "Aug 15", label: "Editorial Styled Shoot" },
  { value: "Growing", label: "Vendor Network" },
];
```

For the hero "trust strip" (currently `["150+ Weddings", ...]`):

```ts
["Summer 2026 — Fully Booked", "Edmonton & Alberta", "Now Booking 2027"]
```

For the `About.tsx` credential pill row:

```ts
["2026 Season Fully Booked", "Editorial Shoot — Aug 2026", "Now Booking 2027"]
```

For `StatsSection.tsx` and the Portfolio stats grid — remove the year/weddings counters entirely and replace with **editorial proof points** (qualitative, not quantitative):

| Stat | Replace with |
|---|---|
| "8 Years of Experience" | "Edmonton-Based Studio" / "Trusted by Alberta couples" |
| "150+ / 75+ / 50+ Weddings" | "Limited Calendar — Intentional By Design" |
| "100% Client Satisfaction" | (remove — unverifiable) |
| "15–20 Weddings Per Year" | "Two-Person Team — Standard from 2027" |

This keeps the section visually intact while removing any claim the owner can't back up.

For the `AboutFounderSection.tsx` "WPIC Certified Wedding Planner" line (line 108): soften to **"Founder & Lead Planner"** until the owner confirms certifications.

For `About.tsx:435` (the recognition row): replace with the actual credibility signals — *"Editorial Styled Shoot — August 2026"*, *"Summer & Fall 2026 — Fully Booked"*, *"Now Welcoming 2027 Couples"*.

---

## Section 4 — Experience plan

### 4.1 / 4.2 — Feeling words ✅ already in `brand-identity.ts`. No change.

### 4.5 — "Story-driven, personal" + 2.5 — "feel, not just look"

Owner's strongest single insight from the questionnaire (paraphrased): *"create the wedding the way you want it to feel — not just the way it looks."*

This is currently **not stated on the site**. Add it as a quiet pull-quote in the `BrandManifestoSection` — one line, no new layout. Proposed:

> *"We design for how it feels — not just how it looks."*

Placement: existing manifesto block, between current paragraphs. One sentence, italic, editorial. No visual restructuring.

### 4.9 — Venue coordinator vs day-of ✅ FAQ already correct. No change.

### 4.3, 4.4, 4.6, 4.7, 4.8, 4.10, 4.11 — TBC

These are owner-research items (ideal energy, micro-moments, experience failures, hero stories). Mark in `brand-identity.ts` under an `experience` block so we have one source of truth:

```ts
experience: {
  coupleFeel: ["dream vision", "love", "comfort", "luxury", "calm"],
  guestFeel: ["structured", "smooth", "calm", "love", "enjoyable"],
  feelOverLook: "We design for how it feels — not just how it looks.",
  personalizationPrinciples: [
    "Story-driven planning",
    "Their love story made visible",
    "Personalized elements throughout",
    "Family and friends woven into the experience",
  ],
  venueCoordinatorVsPlanner:
    "A venue coordinator manages the venue. A wedding day coordinator works for you — managing every vendor, every in-between moment, and the rhythm of the day from start to finish.",
  // TBC by owner
  idealEnergyArc: "",       // 4.3
  luxuryGuestExperience: "", // 4.4
  microMomentsProtected: [], // 4.6
  experienceFailures: [],    // 4.7
  nonNegotiables: [],        // 4.8
  biggestRiskRemoved: "",    // 4.10
  proofStoriesToTell: [],    // 4.11
},
```

---

## Section 5 — About & Authority plan

### 5.1 — Founder story
Owner: *"I'll work on this"*. The current `AboutFounderSection.tsx` story is plausibly written but unverified ("started Hickory & Rose because too many brides told me…"). **Soften** to a shorter, honest opening that doesn't put words in her mouth — pending her own version.

**Proposed replacement paragraphs** (uses only her self-described personality from 5.2):

```
I'm Alexandra — the founder of Hickory & Rose. I started this studio
because I believe a wedding should feel as beautiful to live inside as
it looks in the photos.

My couples describe me as organized, calming, and genuinely easy to
work with. I run on thoughtful preparation and quiet leadership — the
kind that lets you stay present on a day that's only going to happen
once.

Hickory & Rose exists to protect the beauty, intention, and experience
behind every celebration. I'd love to do that for yours.
```

Pull-quote stays (it's good and on-brand). "Personal Philosophy" list stays.

### 5.2 — Personality ✅
Add a short "How I Show Up" label list using her exact words. Insert as a quiet caption beneath the founder image or next to the credential row:

```
Organized · Friendly · Calming · Detailed · Experienced
```

### 5.3 / 5.4 — TBC, flagged in config.

### 5.5 — Credibility signals
Covered in the priority section above. Replace fabricated numbers with the owner's actual signals.

### 5.6 — Reviews/press: TBC, flagged.

### 5.7 — Testimonials hero proofs: TBC. **Current site shows hard testimonials with named couples** (`Lauren & Ethan`, etc.) in `AboutTestimonials.tsx` and `TestimonialSection.tsx`. These are placeholders. Mark them clearly as "sample testimonials, pending owner-supplied real ones" — but **don't remove yet** since the layout depends on them. Add a `TODO` comment in the file headers.

### 5.11 — No professional brand photos yet
Owner explicitly said "Not yet". The site uses placeholder `founder-portrait.jpg`. Add a code comment marking it as placeholder so it's swapped when real photos arrive. No visual change.

### 5.15 — Vendor list pending
The "80+ Vendor Partners" claim must go (handled above). Use "Growing vendor network" until she sends the real list.

---

## Files touched

**Honesty/credibility fixes (high priority):**
1. `src/components/wedding/HeroSection.tsx` — fix trust strip
2. `src/components/wedding/FounderTeaserSection.tsx` — replace credentials array
3. `src/components/wedding/AboutFounderSection.tsx` — replace credentials, soften "WPIC Certified" line, rewrite the 3 founder paragraphs, add personality caption
4. `src/components/wedding/TrustBarSection.tsx` — replace "150+" stat
5. `src/components/wedding/StatsSection.tsx` — replace fabricated stats
6. `src/pages/Portfolio.tsx` — replace stat grid
7. `src/pages/About.tsx` — replace 2× credential pill rows

**Section 4 additions:**
8. `src/components/wedding/BrandManifestoSection.tsx` — add "we design for how it feels" pull-quote line
9. `src/config/brand-identity.ts` — add `experience` block

**Section 5 additions:**
10. `src/config/brand-identity.ts` — add `founder` block with personality words + flagged TBCs
11. Code comments in `AboutTestimonials.tsx`, `TestimonialSection.tsx`, and the founder portrait import — mark as placeholder pending owner content

## What stays untouched

All layout, animation, imagery (photo files stay — just the *claims* on top change), navigation, hero motion, the FAQ venue-vs-planner answer, the philosophy pillars, and Alexandra's pull quote.

---

## Why the honesty fix matters

The owner's brand is built on calm, trust, and "Polished Paige" — a discerning bride who'll absolutely Google "WPIC Certified" and "Style Me Pretty feature". One unverified credential, surfaced by a sharp prospect, vaporizes the entire trust-building exercise the rest of the site is doing. Replacing inflated numbers with the owner's real, current, modest-but-true signals is **more credible**, not less — it reads as quietly confident rather than overstated.

Ready to implement on approval.
