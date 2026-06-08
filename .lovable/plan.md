# Pre-owner-review audit: little things to fix

A walkthrough of the site against the "no fabricated claims" rule in brand-identity §5.5 / §3.25. Most of the framework is clean — but a handful of components still ship invented numbers, fake press, made-up Instagram captions, or a fabricated founder quote. These would be the things Meg notices first. Grouped by risk.

## 🔴 Tier 1 — Truth & credibility (fix before sending the link)

### 1. `StatsSection.tsx` (home) — fabricated counts
Currently shows: **5 Weddings Booked · 2 Seasons Sold Out · 1 Editorial Shoot · 2027 Now Booking**. The "5" and "2 sold out" numbers were never confirmed by Meg, and they conflict with `ApproachStatsRibbon` (which uses the honest set: 2026 booked / 2027 booking / 1 editorial / 24–48hr response).
Fix: replace the array with the same honest 4-stat set used in `ApproachStatsRibbon`, so the two pages tell the same story.

### 2. `TrustBarSection.tsx` (home) — fake "As Featured In"
Section heading says **"As Featured In"** with a **"5+ Publications"** counter. The row items aren't publications — they're booking-status notes ("2026 Season", "Edmonton", "Two-Person Team"). This reads as a press wall to a casual viewer.
Fix: rename heading to **"Studio Notes"** (or **"At a Glance"**), drop the "5+ Publications" counter, change the parallax watermark from "As Seen In" to a neutral word like "The Studio", and update aria-label / outer copy. Keep the editorial layout — just stop implying press.

### 3. `NowBookingSection.tsx` (home) — fabricated season percentages
Hardcoded: **Spring 85% · Summer 90% (2 Dates Left) · Autumn 45% · Winter 20%**. Pure invention.
Fix: replace the 4-season fill bars with a single honest pair of cards: **"2026 — Summer & Fall Fully Booked"** and **"2027 — Now Booking · Limited Calendar"**. Keep the section's visual treatment (gold borders, animation) — just swap the data.

### 4. `InstagramSection.tsx` (home) — fabricated captions + unverified handle
Captions like *"Jasper morning light"*, *"The tablescape that started it all"*, *"Every name, hand-lettered"* are paired with stock images — implying real weddings that don't exist. Also `@hickoryandrose` and the link `instagram.com/hickoryandrose` need Meg to confirm the account is hers (it's also referenced in `FooterServiceAreas`, the `Footer`'s schema, and `index.html` JSON-LD).
Fix: (a) Replace captions with neutral aesthetic words ("Tablescape", "Ceremony light", "Stationery", "First dance", "Florals", "Details") — no fake place/event claims. (b) Leave the IG handle in place but mark "verify with Meg" in the closing chat note. If she says the handle is different or doesn't exist yet, update all 5 references in one pass.

### 5. `FounderTeaserSection.tsx` — fabricated founder quote
On portrait hover: *"I believe every couple deserves to feel present on their wedding day." — Founder · Hickory & Rose*. Meg never said this.
Fix: replace with a brand line (not attributed to her), e.g. *"A wedding day should feel as beautiful to live inside as it looks in the photos."* — and drop the "Founder · Hickory & Rose" attribution under it, keep only "Hickory & Rose". Already used as a brand statement elsewhere so it's safe.

### 6. `AboutPromises.tsx` — service-specific promise needs verification
*"Unlimited communication, 6–8 weeks out"* is a concrete service commitment. The other four promises are voice/brand-safe.
Fix: soften to *"Open communication in the weeks leading up to your day"* until Meg confirms the exact policy window.

## 🟡 Tier 2 — Polish (5–10 min, do if time)

- `TestimonialSection.tsx` already labels itself **"From the Studio"** and attributes quotes to "Hickory & Rose" — that's honest. Leave as-is, but add a one-line comment so future agents don't try to switch the attribution to fake names.
- `index.html` JSON-LD `sameAs` includes only the Instagram URL — fine, but confirm with Meg before launch.
- `og-image.jpg`, `favicon.png`, `apple-touch-icon.png` exist in `public/` — manually open `og-image.jpg` in preview to confirm it's actually the H&R artwork (not a leftover Lovable default). If wrong, regenerate.
- `sitemap.xml` lastmod is `2026-06-04` — bump to today's date when we ship the fixes above.

## 🟢 Tier 3 — Already flagged in prior audit (don't re-fix now)
Founder portrait still a stock photo, bio still draft copy, press section hidden, no real testimonials or portfolio weddings. These are owner-supplied content gaps — surface them to Meg in the walkthrough note, don't try to solve in build.

## Files touched if approved
1. `src/components/wedding/StatsSection.tsx` — stats array
2. `src/components/wedding/TrustBarSection.tsx` — heading, counter, watermark, aria-label
3. `src/components/wedding/NowBookingSection.tsx` — seasonDetails array + render block
4. `src/components/wedding/InstagramSection.tsx` — photos captions
5. `src/components/wedding/FounderTeaserSection.tsx` — hover quote + attribution
6. `src/components/wedding/AboutPromises.tsx` — first promise line
7. `public/sitemap.xml` — lastmod dates

## Verification
- `rg "5\+ Publications|Jasper morning|2 Dates Left|6–8 weeks"` returns zero.
- Visit `/` in preview: stats row, "Studio Notes" section, "Now Booking" cards, Instagram captions, hover the founder portrait — none should claim anything Meg hasn't told us.
- `/approach` stats unchanged.
