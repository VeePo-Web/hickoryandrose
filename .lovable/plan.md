# Sections 6 (Portfolio & Galleries) & 7 (Website Strategy) — Plan + Honesty Audit

Doing both together because they share the same constraint: most of Section 6 is owner-pending (5/7 questions TBC), and Section 7's structural answers are already implicit in the existing IA — what's missing is **honesty about what content the site is actually allowed to show today**. While auditing for Section 6 I found a third major credibility leak (after Sections 5's testimonials and stats): the portfolio + homepage display **fabricated couples, venues, and press features** the owner has never had.

---

## ⚠️ Priority issue — Fabricated portfolio + press content

Owner's actual portfolio/press status:
- **6.11 — featured weddings**: TBC (none provided)
- **5.11 — professional brand photos**: "Not yet"
- **5.5 — credibility signals**: only the Aug 15 2026 styled shoot, Summer/Fall 2026 fully booked, growing vendor network
- **Press/editorial features**: never mentioned by owner

Current site content that violates this:

| File | Line(s) | Fabrication | Severity |
|---|---|---|---|
| `Portfolio.tsx` | 23–32 | 8 named couples + venues + seasons ("Sarah & Michael · Fairmont 2024", "Emma & James · The Glass House 2024", …) | High |
| `Portfolio.tsx` | 145–153 | Featured Story Spotlight with quote attributed to fake couple Sarah & Michael | High |
| `Portfolio.tsx` | 172–175 | Testimonial attributed to Emma & James at The Glass House Autumn 2024 | High |
| `Portfolio.tsx` | 73 | "the moments we've had the privilege of helping create" — implies extensive portfolio body | Medium |
| `PressMentionsSection.tsx` | 6–7 + grid | "Wedding Bells — Top Wedding Planners to Watch 2024", "Style Me Pretty — Editor's Pick 2023", plus the "As Featured In · As Featured In" ticker | Critical |
| `AboutTestimonials.tsx` / `TestimonialSection.tsx` | various | Named couple testimonials (already flagged in Section 5 pass but kept visually — same logic applies here) | High |

A discerning Polished Paige bride checks press features in 10 seconds. "Style Me Pretty 2023" is searchable. Finding nothing is worse than finding modest-but-true.

### Fix strategy — **keep the aesthetic, anonymize the claim**

We do NOT remove the visual sections. The compositions are good and the imagery is fine to keep as **portfolio-direction inspiration** until real shoots arrive. We just stop attributing them to fake people, fake venues, and fake press.

**Portfolio.tsx — anonymize the 8 wedding cards**:

Replace named tuple with category-only labels. The masonry visual stays identical:

```ts
// SAMPLE STORIES — anonymized until owner provides real featured weddings (6.11)
const weddingStories = [
  { src: heroImage, alt: "Garden reception tablescape at golden hour",
    title: "Garden Reception", venue: "Edmonton", season: "Summer", category: "Full Planning", aspect: "aspect-[3/4]" },
  { src: receptionImage, alt: "Rustic farmhouse reception with eucalyptus and candlelight",
    title: "Farmhouse Candlelight", venue: "Alberta", season: "Autumn", category: "Full Planning", aspect: "aspect-square" },
  { src: ceremonyImage, alt: "Mountain ceremony with floral arch and white draping",
    title: "Mountain Ceremony", venue: "Canadian Rockies", season: "Summer", category: "Partial Planning", aspect: "aspect-[4/5]" },
  { src: bouquetImage, alt: "Bridal bouquet with white roses and sage eucalyptus",
    title: "Bridal Florals", venue: "Edmonton", season: "Spring", category: "Day-Of", aspect: "aspect-[3/4]" },
  { src: venueImage, alt: "Rustic barn venue at twilight with string lights",
    title: "Twilight Barn", venue: "Alberta", season: "Autumn", category: "Full Planning", aspect: "aspect-[16/10]" },
  { src: editorialImage, alt: "Sage and ivory floral arrangement detail",
    title: "Floral Detail", venue: "Edmonton", season: "Winter", category: "Day-Of", aspect: "aspect-square" },
  { src: firstDanceImage, alt: "First dance under string lights at outdoor reception",
    title: "First Dance", venue: "River Valley", season: "Summer", category: "Partial Planning", aspect: "aspect-[3/4]" },
  { src: detailImage, alt: "Calligraphy place card with gold cutlery detail",
    title: "Place Setting", venue: "Edmonton", season: "Spring", category: "Full Planning", aspect: "aspect-square" },
];
```

The masonry component receives the new shape; we'll thread `title` where `couple` was. Visual layout is unchanged — every column, gap, aspect ratio, and hover state stays the same.

**Featured Story Spotlight** — replace with an editorial "Direction" card (no fake quote, no fake couple). Keep the same hero image, swap the body text to an honest design-direction note:

```tsx
<PortfolioFeaturedStory
  image={heroImage}
  alt="Garden reception at golden hour — aesthetic direction"
  title="Garden Reception"
  venue="Edmonton"
  season="Summer"
  description="A glimpse of the aesthetic direction Hickory & Rose is built around — soft textures, candlelight, and the quiet sophistication of refined rustic elegance."
  quote="Designed for how it feels — not just how it looks."
/>
```

(The `couple` prop becomes `title`; the testimonial quote becomes our own brand line from Section 4.5. This means a small prop rename in `PortfolioFeaturedStory.tsx`.)

**Portfolio testimonial section (lines 159–178)** — same treatment as Section 5's testimonials: keep the block, replace the named attribution with an editorial pull-quote from the brand itself, and mark the original with a TODO for when real testimonials arrive:

```tsx
<blockquote>"We design for how it feels — not just how it looks. Every detail intentional, every moment protected."</blockquote>
<p>Hickory & Rose · Design Philosophy</p>
```

**Portfolio hero subhead** — change `"the moments we've had the privilege of helping create"` → `"A glimpse into the aesthetic we design around — and the kind of day we plan for our couples."`

**Portfolio "Editorial Intro" 8 Stories counter** (line 100) — change `{weddingStories.length} Stories` → `Aesthetic Direction`. Plural-of-zero scrutiny disappears.

**`PressMentionsSection`** — the most exposed lie on the site. Two options:

- **A (recommended)**: Stop rendering it on the homepage until real press exists. Remove the `<PressMentionsSection />` line from `Index.tsx` (the component file stays — easy to re-enable later). The homepage flow is long enough that one section dropping is invisible.
- **B**: Replace its data with a single honest tile — "Editorial Styled Shoot · August 2026" — and rename the section heading to "What's Next" instead of "As Featured In". This keeps a visual beat in the rhythm but is harder to make feel intentional with one card.

Recommendation: **A**. Cleaner. Re-introduce when she has the first real feature.

---

## Section 6 — Portfolio plan (what we can answer today)

| Q | Status | Action |
|---|---|---|
| 6.1 Purpose ("most important sales engine") | ✅ Established | No change |
| 6.2 Gallery storage | TBC | Flag in config |
| 6.3 Real vs styled-shoot ratio | TBC (today: 0 real, 1 upcoming styled) | Flag in config |
| 6.4 Curation rule | Owner-pending — what makes a wedding feature-worthy | Flag |
| 6.5 Ten-second proof | ✅ Already implicit: refined rustic elegance, cohesive design, calm execution | Lift into config |
| 6.6 Organization (stories vs grid) | Defaults to both — current site uses masonry grid + per-card story page (future) | Flag |
| 6.11 Featured weddings list | TBC | Anonymize sample data now; swap on receipt |
| 6.13 Privacy restrictions | TBC | Flag |
| 6.14 Vendor credit format | TBC | Flag |
| 6.15 Editing style | TBC | Flag |

Add a `portfolio` block to `brand-identity.ts` so this is one source of truth:

```ts
portfolio: {
  purpose: "Primary sales engine — proves aesthetic + execution",
  tenSecondProof: "Refined rustic elegance · cohesive design · elevated execution · calm in the room",
  contentStatus: {
    realWeddings: 0,                          // 6.3
    styledShoots: 0,                          // first one: 2026-08-15
    upcomingShoots: ["2026-08-15"],
    professionalBrandPhotosAvailable: false,  // 5.11
    namedTestimonialsAvailable: false,        // 5.7
    pressFeaturesAvailable: false,            // 5.6 — PressMentionsSection currently hidden on homepage
  },
  // TBC owner
  galleryStorage: "",        // 6.2
  curationRule: "",          // 6.4
  organization: "",          // 6.6
  privacyRestrictions: "",   // 6.13
  vendorCreditFormat: "",    // 6.14
  editingStyle: "",          // 6.15
  featuredWeddings: [],      // 6.11
},
```

---

## Section 7 — Website Strategy plan

### What's already correct on the site (no change needed)

- **7.1 Primary action** = Inquire. Confirmed across `HeroSection`, `CTASection`, nav, sticky CTAs. ✅
- **7.5 Pages** = Home, About, Approach, Services, Portfolio, Journal, FAQ, Inquire. ✅
- **7.6 Top menu** matches. ✅
- **7.7 Critical path** = Home → Services → Inquire is the dominant journey; About / Portfolio are reassurance side-trips. ✅
- **7.9 Trust signals above the fold** — currently three signals (Edmonton & Alberta · refined rustic elegance · now booking 2027). ✅ post Section 5 fix.
- **7.18 Inquiry tone** = warm + clear. Already implemented via `InquireCelebration` redesign from Sections 1–3. ✅
- **7.20 Response expectation** — currently "Replies within 24–48 business hours" on `Inquire`. ✅
- **7.21 Lead magnet** = not enabled (owner TBC). ✅
- **7.23–7.25 CTA language + capacity** = "Now booking 2027" + "Limited weddings each season" already surfaced post Section 3.

### What needs a quiet edit

**7.10 — Homepage story arc**: currently 16+ stacked sections. Audit shows two structural risks:

1. `PressMentionsSection` — remove (above)
2. `StatsSection` — already softened in Section 5 pass, but we should double-check it still flows after `PressMentionsSection` is removed. Order becomes: Hero → BrandPromise → Trust → NowBooking → ServicesOverview → Gallery → Testimonial → EditorialSplit → LoveQuote → ProcessTeaser → FounderTeaser → Stats → BrandManifesto → Filmstrip → VendorShowcase → CTA → Instagram → JournalTeaser. Still long but each beat has a clear emotional job. No further restructuring without owner input on 7.10.

**7.11 — Services page advantage** — already covered in Section 3 (Investment Philosophy, comparison grid). No change.

**7.12–7.15 — Approach page / framework name** — TBC. The `Approach` page exists but the framework isn't formally named. Flag in config: `frameworkName: ""` and `namedFramework: null` — pending owner. No edits today; she may want to name it after seeing the rest land.

**7.16 — Reviews page emphasis** — TBC; the Reviews/Testimonials surfaces are currently using sample data (Section 5 pass already flagged). No change beyond what's already done.

**7.17 — FAQ purpose** — current FAQ is well-scoped to objection-filtering. ✅

**7.24 — CTA promise** — TBC owner. Current CTA copy ("Begin Your Inquiry" / "Plan with calm") works as placeholder.

Add a `websiteStrategy` block to `brand-identity.ts`:

```ts
websiteStrategy: {
  primaryAction: "inquire",                    // 7.1 ✅
  criticalPath: ["Home", "Services", "Inquire"], // 7.7
  pages: ["Home", "About", "Approach", "Services", "Portfolio", "Journal", "FAQ", "Inquire"],
  homepageRhythm: {
    pressMentionsEnabled: false,               // off until real press
    statsEnabled: true,                         // qualitative only post Section 5
    testimonialsAttribution: "anonymized",      // sample data; swap on real reviews
  },
  inquiryTone: ["warm", "clear", "confident"], // 7.18 ✅
  responseSLA: "Replies within 24–48 business hours", // 7.20 ✅
  leadMagnet: { enabled: false },              // 7.21
  // TBC owner
  homepageStoryArc: "",                        // 7.10
  servicesPageAdvantage: "",                   // 7.11
  approachProves: "",                          // 7.12
  namedFramework: null as boolean | null,       // 7.13
  frameworkName: "",                           // 7.14
  ctaPrimaryLanguage: "",                      // 7.23
  ctaPromise: "",                              // 7.24
},
```

---

## Files touched

**Section 6 honesty edits:**
1. `src/pages/Portfolio.tsx` — anonymize 8 sample stories, replace Featured Story attribution, replace named testimonial, soften hero subhead, change "8 Stories" → "Aesthetic Direction"
2. `src/components/wedding/PortfolioFeaturedStory.tsx` — rename `couple` prop → `title` (or accept both for compat)
3. `src/components/wedding/PortfolioMasonryGrid.tsx` — accept `title` field instead of `couple` (or both)

**Section 7 honesty edit:**
4. `src/pages/Index.tsx` — comment out `<PressMentionsSection />` with a `// TODO: re-enable when real press features arrive (5.6)` note

**Config:**
5. `src/config/brand-identity.ts` — add `portfolio` block and `websiteStrategy` block

---

## What stays untouched

Every layout, animation, photo file, hero motion, gallery composition, FAQ copy, services page, Approach page, navigation, footer, inquire flow, and the lazy-loading rhythm. Only attribution copy + one homepage section removal.

---

## Why this matters

Sections 5 + 6 + 7 all leak the same way: the site is dressed for an established planner with five years of press and a hundred named testimonials, when the owner is at the start of an intentional, editorial debut. Polished Paige notices that gap immediately. Anonymizing the sample work + dropping the fake press lets the site tell the **actual** story — *"a refined new studio with a clear point of view, booked through 2026, and welcoming a small 2027 calendar"* — which is far more compelling than overstated numbers a careful bride will fact-check in a single search.

Ready to execute.
