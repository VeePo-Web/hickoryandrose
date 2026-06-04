
# Hickory & Rose — Questionnaire vs. Site Audit

Audit performed against `brand-identity.ts`, `design-plan.ts`, `style-guide.ts`, `mem://index.md`, `index.html`, `sitemap.xml`, `robots.txt`, all `src/pages/*`, and the wedding components used on each page. Grep was run for every entry in `voice.avoidWords` and every use of "rustic" to confirm voice compliance.

The headline finding: **honesty guardrails are the weakest link.** The site now ships claims and quotes that contradict the founder's own discovery answers. Fix these first — everything else is polish.

---

## 1. Five Critical Promises — Verdicts

| Promise | Verdict | Evidence |
|---|---|---|
| First-five-seconds (calm, elevated, no pressure) | ⚠️ Partial | Hero copy, type, image are calm and on-brand. But `CursorFollower` + heavy parallax + breathing diamonds + watermarks + shimmer sweeps + magnetic pills + drop caps stacked on every page push motion intensity well past `motionLevel: 3`. Polished Paige's "shoulders drop" moment is happening *despite* the motion, not because of it. |
| Refined rustic elegance (not barn/boho/kitsch) | ❌ Violation | Multiple "barn"/"rustic" hits (see §3) — direct avoidWord breach. The aesthetic itself is on-brand; only the **language** drifts. |
| Polished Paige fit | ✅ Honored | Copy speaks to her pressures ("designed for how it feels, not just how it looks", "calm leadership", "stay present"). Creative-control reassurance is strong on Approach + About. |
| Honesty guardrails | ❌ Multiple violations | See §2. The site claims founding year, weddings-planned counts, real-couple testimonials, and real-venue attributions that the owner has NOT confirmed. |
| Critical path (Home → Services → Inquire) | ✅ Honored | Nav order, hero CTAs, repeated "Inquire/Begin Your Story" CTAs across all pages — frictionless. |

---

## 2. P0 — Brand-integrity violations (FIX THIS WEEK)

Each one of these is a directly-falsifiable claim that contradicts an explicit "TBC / false / 0" in `brand-identity.ts`.

### P0-1. Fake credentials in ApproachStatsRibbon
- **What:** `src/components/wedding/ApproachStatsRibbon.tsx` lines 6–11 ship as fact: `150+ Weddings Planned · Since 2018`, `98% Vendor Satisfaction`, `7+ Years Experience`.
- **Conflict:** `brand-identity.founder.credentialsVerified: false`, `seo.structuredData.foundingDateClaimed: false`, `portfolio.contentStatus.realWeddings: 0`.
- **Fix:** Replace with the honest `StatsSection` model (already used on homepage): "5 Weddings Booked · 2026 calendar", "2 Seasons Sold Out", "Aug 15 Editorial Shoot", "Now Booking 2027". Or simply render `<StatsSection />` and delete the duplicate.
- **File:** `src/components/wedding/ApproachStatsRibbon.tsx`. Effort: S.

### P0-2. Fabricated journal with dated articles
- **What:** `src/pages/Journal.tsx` lines 20–27 ship 6 articles dated Oct 2025 → Mar 2026 with bylines, read-times, pull-quotes — none exist.
- **Conflict:** `seo.blog.postCount: 0`, `seo.blog.launchStrategy: "structure-only"`.
- **Fix:** Either (a) hide the whole grid until the first real essay ships and show only the studio-notebook teaser + email capture; or (b) keep one "Coming with our 2027 season" featured tile and remove the rest. Update the hero subline to match.
- **File:** `src/pages/Journal.tsx`. Effort: S.

### P0-3. Fake "real couple" testimonials presented as real
The bigger issue isn't the placeholder quotes (they're attributed to "Hickory & Rose") — it's the **surrounding framing** that calls them real.
- `src/components/wedding/AboutTestimonials.tsx` line 75: *"Real words from real couples who trusted us with their most important day."* + `aria-label="Client Testimonials"` + "View their gallery" link on placeholder.
- `src/components/wedding/TestimonialSection.tsx` lines 38–42: gallery images captioned with real venues ("Jasper Park Lodge", "Fairmont Macdonald", "The Glass House") + caption "Real Hickory & Rose Weddings" (line 321).
- `src/pages/Services.tsx` lines 306–325: blockquote sits inside a "Trust" watermarked section that reads as a client testimonial.
- `src/pages/Portfolio.tsx` line 176: blockquote in a "Voices" / "Kind Words" testimonial section.
- `src/pages/FAQ.tsx` `testimonials` (line 55).
- **Conflict:** `founder.heroTestimonials: []`, `portfolio.contentStatus.namedTestimonialsAvailable: false`.
- **Fix:** Two clean options:
  1. **Honest reframe (recommended):** Rename every "Kind Words / Real Couples / Voices" block to "From the studio" or "Design Philosophy" and remove "real couples", "their gallery", and any venue tags on placeholder images.
  2. **Hide entirely** until real reviews arrive, replacing with a quiet "Now booking 2027 — testimonials will live here as we publish them."
- **Files:** `AboutTestimonials.tsx`, `TestimonialSection.tsx`, `FAQTestimonialCarousel.tsx`, `Services.tsx` (testimonial section), `Portfolio.tsx` (testimonial section). Effort: M.

### P0-4. "barn" / "rustic" voice violations
`brand-identity.voice.avoidWords` explicitly bans **barn** and **rustic** (without "refined" qualifier). Current hits:
- `HeroSection.tsx:91` — "rustic timber barn"
- `Index.tsx:70` (FullWidthImage alt) — "Rustic barn wedding venue"
- `Portfolio.tsx:30` — "Rustic barn venue at twilight" + couple label "Twilight Barn"
- `GallerySection.tsx:62–63` — alt + title "Twilight Barn Reception"
- `JournalTeaserSection.tsx:34` + `Journal.tsx:23` — "Rustic barn reception", "rustic wood"
- `HeroFloatingInset.tsx:39` — "Mountain barn ceremony"
- `EditorialImageBreak.tsx:42` — "rustic timber barn"
- `CTASection.tsx:102` — "Candlelit barn ceremony"
- **Fix:** Replace "barn" → "timber venue / heritage venue / open-beam venue"; replace bare "rustic" → "refined" or remove the modifier. Same image, brand-true alt.
- **Effort:** S (find/replace pass, ~10 strings).

### P0-5. "budget" voice violation
- `ApproachProcessTimeline.tsx:8` — *"fits your needs and budget"*
- `FAQSection.tsx:26` — *"priorities, and budget"*
- **Conflict:** `voice.avoidWords` lists "budget".
- **Fix:** Replace with "investment" or "your starting point".
- **Effort:** S.

### P0-6. Investment-level claims to verify
`Services.tsx` line 38 promises *"Up to 12 hours of day-of leadership"* and other concrete deliverables. `brand-identity.services.dayOf.scopeBoundaries: ""` (TBC). Mark each numeric scope claim as owner-confirm-required and tag with a TODO in the component until 3.5 / 3.7 / 3.10 land.
- **Effort:** S (audit only; no copy change until owner confirms).

---

## 3. P1 — Populated questionnaire commitments not fully honored on site

| Commitment | Where it should land | Status |
|---|---|---|
| `responseSLA: "Replies within 24–48 business hours"` | All inquiry CTAs / micro-copy | ⚠️ Inquire page hero credential strip says "48hr Response" (line 185) and form footer "within 48 hours" (line 281). Pick one canonical phrasing — "Within 24–48 business hours" — and use it everywhere. |
| `experience.feelOverLook: "We design for how it feels — not just how it looks"` | Should be a hero or proof moment | ✅ Appears on Portfolio featured story + multiple ribbons. |
| `experience.venueCoordinatorVsPlanner` | Should be on FAQ + Services | ✅ FAQ Q1. Consider also promoting to Services hero. |
| `services.upgrades2027: "Two-person team standard"` | Should appear on About / Services / Inquire | ⚠️ Mentioned only in `StatsSection` footnote. Add a one-liner to Services hero or Inquire confirmation. |
| `voice.repeatWords` (seamless, calm, thoughtful, intentional, elevated, presence, personalized) | Should saturate hero/about/services | ✅ All seven words appear with healthy frequency. |
| `idealClient.byInquiry: "Understanding. Excitement. Confidence."` | Inquire hero | ✅ Inquire.tsx:180 verbatim. |
| `voice.manifesto` | Should anchor BrandManifestoSection | Need to verify component renders the five manifesto lines from `brand-identity.ts`. |
| `founder.personality: ["Organized","Friendly","Calming","Detailed","Experienced"]` | About founder section | ✅ Rendered in `AboutFounderSection`. |
| `style-guide.ts` populated | Should mirror tokens used in `index.css` | ⚠️ File is entirely empty (`""` everywhere). Either populate or delete the file — right now it's a maintenance trap. |

**Effort: S–M per row.**

---

## 4. P2 — TBC blockers (owner action required before launch)

Group these and send to the owner as one tidy email. Each is a question that today blocks a real answer on the site.

**Services (Section 3)**
- 3.5 What is **out of scope** for Day-Of beyond the listed deliverables?
- 3.7 What does Partial Planning deliver that Day-Of does not, in concrete terms?
- 3.8 How much of Partial is flexible vs. fixed?
- 3.10 In Full-Service, what is the **design-vs-logistics time split**?
- 3.22 / 3.24 Are starting prices finalized? What language do you want for the "private pricing" line?

**Experience (Section 4)**
- 4.3 Ideal energy arc of the wedding day?
- 4.4 What does luxury guest experience look like in your weddings?
- 4.6 Which micro-moments must be protected (vows, first dance, last dance)?
- 4.7 Three experience failures you've seen at other weddings you would prevent?
- 4.8 Non-negotiables you bring to every wedding?
- 4.10 Biggest risk you remove for the couple?
- 4.11 One proof-story we can tell (anonymized OK)?

**Founder (Section 5)**
- 5.1 Your own founder paragraph (250–400 words)?
- 5.3 Personality online vs. in person?
- 5.4 One thing you don't want assumed about you?
- 5.5 Confirm/deny: WPIC certification, year founded, weddings planned to date.
- 5.6 Press features (any) — exact names and dates.
- 5.7 Three reviews we can quote with name + date + venue.
- 5.11 ETA on professional brand portrait.
- 5.15 Trusted vendor list (with permission to credit).

**Portfolio (Section 6)**
- 6.2 Where will real galleries be hosted (Pic-Time, native gallery, etc.)?
- 6.4 Curation rule (how many images per wedding)?
- 6.6 Organized by wedding story, by category, or both?
- 6.11 First 3 featured weddings to lead with?
- 6.13 Couple privacy restrictions to honor.
- 6.14 Vendor credit format you want.

**Website strategy (Section 7)**
- 7.10 The single homepage story arc in one sentence.
- 7.11 The Services-page advantage statement.
- 7.12 What the Approach page must prove.
- 7.13 / 7.14 Do you want a named planning framework? If yes, the name.
- 7.23 / 7.24 Primary CTA language and CTA promise.

**SEO (Section 8)**
- 8.3 Final priority keyword list.
- 8.4 Content topics for the first 6 essays.
- 8.7 Will we ship area guides (Banff, Jasper, Canmore, Lake Louise)?
- 8.9–8.11 Google Business Profile + directory listings.

**Tech / launch (Sections 11–12)**
- 11.8–11.13 CRM platform, scheduling tool, email platform.
- 11.14 Analytics (GA4? Plausible?).
- 12.1, 12.4, 12.8–12.12 Target launch, budget, 30-day/6-month success metric, what to stop doing, the one truth.

---

## 5. P3 — Technical polish

| Item | What & Why | Files |
|---|---|---|
| Skip-to-content link | No `<a href="#main-content" class="skip-link">` exists. Keyboard users land in the heavy `LoadingScreen`/`Navigation` and cannot bypass to `<main id="main-content">`. | `src/App.tsx` or `src/components/wedding/Navigation.tsx`. Effort: S. |
| `web manifest` | `apple-touch-icon.png` ships; no `manifest.webmanifest`. Android "Add to home screen" + Lighthouse PWA both flag this. | New `public/manifest.webmanifest`, link in `index.html`. Effort: S. |
| `responseSLA` consistency | "48hr" vs "24–48 business hours" used inconsistently. | `Inquire.tsx`, `FAQ.tsx`. Effort: S. |
| Motion budget | Cursor follower + heavy parallax + breathing diamond + magnetic + shimmer + watermark + mask-cursor effect on Approach all stacked. Test on mid-tier mobile; consider disabling cursor follower on touch and one parallax tier on Approach. | `CursorFollower.tsx`, `Approach.tsx`. Effort: M. |
| `style-guide.ts` empty | Either populate from `design-plan.ts` (single source of truth) or delete to avoid bit-rot. | `src/config/style-guide.ts`. Effort: S. |
| Inquire delivery via `mailto:` | For Polished Paige, opening her mail client mid-funnel is friction. Fine as MVP; flag as P3+ to migrate to a real form endpoint (Resend/Formspree/CRM) once 11.8 lands. | `Inquire.tsx`. Effort: M (after owner picks CRM). |
| Press section | `PressMentionsSection` is correctly TODO'd off the homepage — leave it that way until 5.6 lands. | (no change) |

---

## 6. P4 — Phase-two enhancements (post-launch)

- Real Journal essays + filterable taxonomy (after first 3 ship).
- Area guides for Banff / Jasper / Canmore / Lake Louise (SEO, after 8.7).
- Lead magnet (Polished Paige planning checklist or "How to choose a planner" PDF).
- Real-wedding case-study templates (long-form narrative on `/portfolio/[slug]`).
- Newsletter integration (currently `mailto:` capture on Journal).
- Schema enhancements: per-wedding `Event` schema, real `Review` schema once 5.7 lands, `Article` schema per journal post.
- Google Business Profile + The Knot / WeddingWire / Eventective listings (8.9–8.11).

---

## 7. If I could only fix three things this week

**If I could only fix three things this week to most increase inquiry quality from Polished Paige, they would be:** (1) **delete the fabricated "150+ weddings since 2018" credential ribbon on the Approach page** and replace it with the honest 2026/2027 booking story — because Paige's first move after the hero is to vet your credibility, and one falsifiable claim torches the entire calm-trust we're trying to build; (2) **strip the "real couple" framing from every testimonial block** (rename to "Design Philosophy / From the Studio", drop the venue tags on placeholder images, remove "View their gallery") — placeholder copy is fine, fake provenance is not; (3) **hide or shrink the fake-dated Journal grid down to a single "Studio Notebook — publishing with our 2027 season" tile** — Paige will click "Read more" on one of those titles, land on nothing, and silently bounce.

Approve and I'll implement P0-1 through P0-5 in one pass, then ship the P1 SLA-consistency cleanup and the P3 skip-link + manifest.
