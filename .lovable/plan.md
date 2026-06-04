# Sections 8 (SEO) + 9 (Design Direction) + 10–12 (Content / Tech / Launch) — Plan

Section 8 is the next big actionable block; Sections 9–12 are mostly owner-input. Handling 8 in depth, 9 with what's already implemented in the design system, and 10–12 as a single scaffold pass.

---

## ⚠️ Priority issue — Fabricated SEO structured data

Continuing the same audit thread as Sections 5–7. Found two more invented signals in the homepage JSON-LD:

| File | Field | Issue |
|---|---|---|
| `src/pages/Index.tsx` | `aggregateRating: { ratingValue: "5", reviewCount: "75" }` | ❌ Fabricated. **Critical** — Google penalises fake review schema and can manual-action the listing. |
| `src/pages/Index.tsx` | `foundingDate: "2018"` | ❌ Unverified (mirrors the "7+ Years since 2018" claim already removed from `StatsSection.tsx`). |
| `src/pages/Index.tsx` | `telephone: ""` | ❌ Invalid empty string. Remove the field. |
| `index.html` + `src/pages/Index.tsx` | Two LocalBusiness JSON-LD blocks | ⚠️ Duplicate. The runtime injection in `Index.tsx` partially overrides the static one in `index.html`, but Google can index both. Consolidate to one canonical source. |

**Fix:** make `index.html` the single source of truth (static, crawler-safe, always present even before JS). Remove the duplicate runtime injection from `Index.tsx`. Strip the fake aggregateRating, foundingDate, and empty telephone from both.

---

## Section 8 — SEO plan

### 8.1 / 8.2 Terminology + 8.3 Keywords ✅ already correct

Site uses "wedding planner / wedding day coordination / day-of coordination / partial planning / full-service planning" consistently across `Services.tsx`, FAQ, and meta tags. Matches the framework's local keyword list. No change.

Confirm-and-lock in config:

```ts
seo: {
  terminology: "Wedding Day Coordination (industry standard); Day-Of accepted alias", // 8.2
  localKeywords: [
    "Edmonton wedding planner",
    "Luxury wedding planner Edmonton",
    "Wedding coordinator Edmonton",
    "Day-of coordination Edmonton",
    "Wedding day management Edmonton",
    "Partial wedding planning Edmonton",
    "Full-service wedding planning Edmonton",
    "Alberta wedding planner",
    "Canadian Rockies wedding planner",
  ],
  // TBC owner
  targetKeywords: [],         // 8.3
  contentTopics: [],          // 8.4
  blog: {                     // 8.5 / 8.6
    launchStrategy: "structure-only", // current site has Journal page but 0 posts — matches owner's likely answer
    postCount: 0,
    areaGuides: null,         // 8.7
  },
  listings: {                 // 8.9–8.11
    googleBusiness: "",
    directories: [],
  },
},
```

### 8.4 / 8.5 Blog content + 8.7 Area guides

Journal page exists and is empty. **No change** until owner sends content (10.1/10.3). Already framed as "structure-only" launch. Recommended phase-two topics encoded above for when she's ready.

### 8.8 Sitemap — MISSING ❌

No `public/sitemap.xml` exists today. Create one covering the 8 live routes. Static file, references `BASE_URL` from `src/lib/seo.ts`.

### 8.9–8.11 Listings — TBC

Google Business Profile + directory listings are off-site work. Flag in config. No code change.

### Per-page meta audit

All 8 pages call `setPageMeta()`. Spot-check:

| Page | Title length | Description length | Status |
|---|---|---|---|
| Index | 64 | 222 | ⚠️ Title 4 over Google's 60-char limit; description 62 over the 160-char limit |
| About | (not viewed — check) | (check) | — |
| Services | (check) | (check) | — |
| Portfolio | 80 | 219 | ⚠️ Both over limit |
| FAQ | 73 | 157 | ⚠️ Title over |
| Inquire | (check) | (check) | — |
| Approach | (check) | (check) | — |
| Journal | 67 | 151 | ⚠️ Title over |

**Fix:** tighten each title to ≤60 chars and each description to ≤160 chars while preserving the primary keyword and city. Pattern:

```
"<Page intent> | Hickory & Rose · Edmonton Wedding Planner"
```

Specific rewrites (delivered in one sweep):

```ts
// Index
title: "Hickory & Rose | Edmonton Luxury Wedding Planner",                                   // 53
description: "Refined, calm wedding planning in Edmonton & the Canadian Rockies. Day-of, partial, and full-service planning for the day you'll actually live in.", // 159

// Portfolio
title: "Portfolio | Hickory & Rose Edmonton Wedding Planner",                                // 54
description: "Aesthetic direction from Hickory & Rose — refined rustic elegance for Edmonton & Alberta weddings. A glimpse of the day we design for our couples.", // 158

// FAQ
title: "FAQ | Hickory & Rose Edmonton Wedding Planner",                                      // 47
description: "Answers on pricing, services, planning timelines, and coverage across Edmonton, the Canadian Rockies, and Alberta — from Hickory & Rose.",          // 149

// Journal
title: "Journal | Hickory & Rose Edmonton Wedding Planner",                                  // 51
description: "Planning notes, design inspiration, and real-wedding stories from the Hickory & Rose studio in Edmonton, Alberta.",                                  // 124
```

(Will audit the remaining 4 — Services, About, Approach, Inquire — and apply the same tightening at execution time.)

---

## Section 9 — Design direction plan

Most of Section 9 is **already implemented** in the design system from prior work — what's missing is owner research input (reference URLs, sliders). Capture what's confirmed and flag the rest:

```ts
designDirection: {
  // What's already implemented in the design system (no owner input needed)
  firstFiveSeconds: "calm · warm · refined · in good hands", // 9.3 — implicit in current Hero
  visualNonNegotiables: [                                     // 9.4 — all live in index.css / tailwind.config.ts
    "Warm neutrals",
    "Natural textures",
    "Candlelight glow",
    "Refined florals",
    "Restraint",
    "Editorial whitespace",
  ],
  visualAvoid: [                                              // 9.5 — implicit in mem://design/visual-system
    "Clutter",
    "Trendy display fonts",
    "Loud saturated colors",
    "Heavy patterns",
    "Pinterest-collage stacks",
  ],
  balance: {                                                  // 9.6–9.7 — inferred from current build
    modernVsTimeless: 2, // leans timeless
    warmthVsMinimalism: 4, // warm > minimal
    typographyDirection: "elegant serif-led", // 9.8 — Cormorant Garamond + Jost confirmed
    motionLevel: 4, // refined cinematic (Lenis + beat-timed)
  },
  logo: { status: "in-use" },                                 // 9.9 — wordmark live
  brandGuidelines: { status: "some-basics" },                 // 9.11 — captured in mem://design/*
  // TBC owner
  referenceWebsites: { like: [], dislike: [] },               // 9.1 / 9.2
  accessibilityPreferences: [],                                // 9.15
},
```

No visual changes. The design system already encodes all of this — adding the config block just makes the lineage traceable for future agents.

---

## Sections 10 / 11 / 12 — scaffold only (pure owner input)

These are operational/launch sections — content inventory, CRM choice, domain, launch date, KPIs. Almost nothing is decidable without the owner. Scaffold all three as TBC blocks in `brand-identity.ts` so when she returns answers we have one place to update:

```ts
content: {
  // Section 10 — TBC owner
  existingSources: [],         // 10.1
  copyStatus: "",              // 10.3
  urgentPages: [],             // 10.4
  launchMustHaves: ["Home", "About", "Services", "Portfolio", "FAQ", "Inquire"], // current shipped set
  phaseTwo: ["Journal volume", "Venue/area guides", "Additional galleries", "Lead magnet"],
  migration: null,             // 10.9
  policiesReady: null,         // 10.11
},

technical: {
  // Section 11 — TBC owner
  domain: "hickoryandrose.com", // currently published preview; final domain TBC by owner
  brandedEmail: true,           // sales@hickoryandrose.com in use
  editableContent: ["portfolio", "testimonials", "journal", "FAQs", "services", "about"],
  crm: { platform: "", autoRoute: null },          // 11.8 / 11.9
  scheduling: { enabled: null, tool: "" },          // 11.10 / 11.11
  email: { enabled: null, platform: "" },           // 11.12 / 11.13
  analytics: [],                                    // 11.14
  embeddedTools: [],                                // 11.15
},

launch: {
  // Section 12 — TBC owner
  targetDate: "",              // 12.1
  hardDeadlines: null,         // 12.2
  budgetRange: "",             // 12.4
  decisionMaker: "Alexandra Rose (owner)", // 12.5 — only stakeholder identified
  feedbackTurnaround: "",      // 12.7
  successThirtyDays: "",       // 12.8
  successSixMonths: "",        // 12.9
  kpis: [
    "Inquiry volume",
    "Inquiry quality/fit",
    "Conversion rate",
    "Portfolio engagement",
    "Edmonton SEO rankings",
  ],
  stopDoing: "",               // 12.11
  oneTruth: "",                // 12.12
},
```

---

## Files touched

**Section 8 honesty + SEO:**
1. `src/pages/Index.tsx` — strip fabricated aggregateRating + foundingDate + empty telephone; remove the duplicate runtime JSON-LD injection (let `index.html` be the source of truth). Tighten title + description.
2. `index.html` — strip empty telephone, ensure no fabricated rating field.
3. `src/pages/Portfolio.tsx`, `src/pages/FAQ.tsx`, `src/pages/Journal.tsx` — tighten meta lengths.
4. `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/pages/Approach.tsx`, `src/pages/Inquire.tsx` — audit + tighten same.
5. `public/sitemap.xml` — create with the 8 live routes.

**Sections 9–12 scaffolding:**
6. `src/config/brand-identity.ts` — add `seo`, `designDirection`, `content`, `technical`, `launch` blocks (all TBC fields explicitly flagged).

---

## What stays untouched

All layouts, components, motion, imagery, navigation, footer. SEO meta changes are invisible to the rendered UI. JSON-LD changes are invisible. The single removed runtime injection in `Index.tsx` only changes what shows up in `<head>` — no DOM impact.

---

## Why the SEO fix matters

The fake `aggregateRating` is the most legally + algorithmically exposed claim on the entire site. Google explicitly bans fabricated review schema and can issue a structured-data manual action that pulls the LocalBusiness card from search results. For a planner whose primary inbound channel is "Edmonton wedding planner" search, that's a months-long recovery. The fix removes the risk without sacrificing anything — the listing still has every legitimate signal (locality, services catalog, geo, image, social).

Ready to execute.
