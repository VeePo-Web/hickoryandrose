# Honesty pass — strip every fabricated photo claim from the site

You're right. The site is full of metadata that *names* specific real venues, real seasons, and real couples for photos that are stock imagery or aesthetic direction. That's the most damaging form of fabrication for a wedding planner — visitors who recognize "Fairmont Hotel Macdonald" or "Jasper Park Lodge" will assume you have weddings to show there, and you don't yet. This pass removes every place/event/couple claim and removes per-photo descriptive captions across the board, exactly as you asked.

What gets kept: business-level service-area statements ("Edmonton, Alberta" as where you serve), the Lake Louise section title (those two photos really are Lake Louise — they're Meg's), navigation/SEO copy that doesn't tie a photo to a place, and the visual design itself. We're only changing words, not layouts.

## Inventory of fabricated claims found

| # | File | What's made up |
|---|------|----------------|
| 1 | `src/components/wedding/GallerySection.tsx` lines 14-69 | 6 photos each with fake `title`, `location` (Fairmont Hotel Macdonald, The Glass House, Art Gallery of Alberta, **Jasper Park Lodge**, Devonian Botanic Garden, Canadian Rockies), `category`, `story` line, and `season "Summer 2024"` style date claims |
| 2 | `src/pages/Portfolio.tsx` lines 25-34 | 8 stories with fabricated `couple` names ("Garden Reception", "Farmhouse Candlelight", "Mountain Ceremony", "Bridal Florals", "Twilight Venue", "Floral Detail", "First Dance", "Place Setting"), fake `venue` ("Edmonton", "Alberta", "Canadian Rockies", "River Valley") and `season` |
| 3 | `src/pages/Portfolio.tsx` lines 148-156 | `PortfolioFeaturedStory` filled with fake couple/venue/description/quote |
| 4 | `src/components/wedding/FilmstripSection.tsx` lines 9-60 | 5 narrative `snippet` lines describing stock photos as real moments ("An intimate mountain exchange under a wild eucalyptus arch") |
| 5 | `src/pages/Index.tsx` lines 67-74 | `FullWidthImage` with caption `"Edmonton · Alberta · The Canadian Rockies"` under a stock timber-venue photo |
| 6 | `src/components/wedding/LakeLouiseDiptychSection.tsx` lines 100-113 | Fake temperature/month meta: `Feb · Frozen · −18°C` and `Aug · Glacial · 14°C`, plus alt text claiming "frozen in February" / "in August" |
| 7 | `src/components/wedding/HeroSection.tsx` line 91 | Alt claims "Canadian Rocky Mountain peaks at golden hour" of a stock tablescape |
| 8 | `src/components/wedding/HeroFloatingInset.tsx` line 39 | Alt describes a stock photo as "Mountain ceremony with candlelit aisle and eucalyptus garlands" |
| 9 | `src/components/wedding/EditorialImageBreak.tsx` line 42 | Long alt claiming "brass candlestick holders... in a heritage timber venue" |
| 10 | `src/components/wedding/EditorialSplitSection.tsx` lines 171, 265 | Two descriptive alts |
| 11 | `src/components/wedding/PortfolioMasonryGrid.tsx` | Renders couple/venue/season/category badges from the fabricated story objects in #2 |

## How each one gets fixed

The pattern is the same across the board: **remove the specific claim, keep the design.** I'm not redesigning anything — just neutralizing language and metadata.

### 1. `GallerySection.tsx` — strip the venue tags and stories

For each of the 6 photos, drop `location`, `story`, `season`, and rework `title`/`category` into honest, neutral aesthetic labels (or remove entirely). Lightbox UI stays — it just stops naming venues and seasons. Where the rendered template currently shows `{photo.location}` or `{photo.story}` or `{photo.season}`, delete those JSX nodes too. The grid keeps its art direction; the captions just go quiet.

### 2 + 3 + 11. `Portfolio.tsx` + `PortfolioMasonryGrid.tsx` + `PortfolioFeaturedStory.tsx`

Rebuild the `weddingStories` array around honest aesthetic categories only (Reception, Ceremony, Florals, Details, etc. — drawn from what the image actually depicts visually, with no place names attached). Remove `couple`, `venue`, `season` fields from the data and from the rendered badges. Remove the filter set ("Full Planning / Partial Planning / Day-Of") since those tag a photo to a service tier you didn't actually plan — replace with `All / Reception / Ceremony / Florals / Details` aesthetic filters tied to the image content, or remove filters entirely until real work exists.

For `PortfolioFeaturedStory`, either:
- **(Preferred) Remove the featured-story block from `Portfolio.tsx` entirely** until a real featured wedding exists. The page already has the TODO comment acknowledging this (line 23). Cleanest move.
- Or call it with honest aesthetic-direction copy that doesn't pretend to be a couple.

I'll go with the removal — it's the most honest option and the page still has a hero, intro band, stats ribbon, masonry, and CTA. It does not feel hollow.

`PortfolioMasonryGrid.tsx` itself: stop rendering the `couple`/`venue`/`season`/`category` badges; replace the badge row with a single small aesthetic label (Reception / Ceremony / Florals / Details) that reflects the image's *content*, not its provenance.

### 4. `FilmstripSection.tsx`

Strip every `snippet` (5 narrative sentences). Strip the `venue` field per slide — even the abstract values like "Design Philosophy" / "Reception Design" read as venue labels in context and should go. Keep the `label` column (Ceremony, Details, Reception, Florals, Celebration) — those are honest visual taxonomies. The component template that renders `{slide.snippet}` and `{slide.venue}` is updated to stop rendering those nodes.

### 5. `Index.tsx` FullWidthImage

Delete `caption="Edmonton · Alberta · The Canadian Rockies"` from the `<FullWidthImage src={venueImage} … />` block (it's tying a stock photo to a place list). The same business statement still appears in the footer service-area list and in SEO meta where it belongs at a business level, not a photo level. Pass an empty/neutral alt: just `alt=""` since the image is decorative within a designed section.

### 6. `LakeLouiseDiptychSection.tsx`

These photos are legitimately Lake Louise — that label stays. But everything around them was speculative:
- Remove the `meta` prop entirely from both panels (drops "Feb · Frozen · −18°C" and "Aug · Glacial · 14°C"). The film-index marks (`FR W·01`, `FR S·01`) and the `Winter`/`Summer` badges stay — winter vs summer is verifiable from looking at the photos.
- Shorten alt text to factual only: `"Lake Louise in winter"` and `"Lake Louise in summer"`. Drop the "February", "−18°C", "August", "Mount Victoria veiled in low cloud" narrative claims.
- Remove the closing service-area microline `"Edmonton · Banff · Lake Louise · Jasper"` from the section — that one's redundant with the footer and shouldn't sit under photo content as if naming where the photos are from.

### 7-10. Alt text cleanup (Hero, HeroFloatingInset, EditorialImageBreak, EditorialSplitSection)

Per your instruction "Don't include descriptions for any picture, because it's all made up," collapse every long descriptive/narrative alt on stock imagery to one of two patterns:
- If the image is **decorative** inside a designed editorial section: `alt=""` plus `aria-hidden="true"`. Lets screen readers skip and stops pretending it depicts a real H&R wedding.
- If the image **must be announced** to screen readers for accessibility (e.g. lone hero image): a 3-5 word non-claiming alt like `"Wedding tablescape"`, `"Ceremony arch"`, `"Floral arrangement"`. No venue, no season, no narrative, no "golden hour", no "heritage timber".

This is the right WCAG move too — decorative content shouldn't have invented alt text.

## What stays untouched

- **Service-area copy** in the footer, nav, SEO meta descriptions, JSON-LD, and `seo.ts` ("Edmonton, Alberta", "Canadian Rockies"). These describe your business reach, not photos.
- **Lake Louise** as the section title in the diptych — those two photos really are Lake Louise.
- **Stats**, **founder copy**, **promises**, **manifesto** — text-only, already audited in earlier turns.
- **OG image** and meta tags.
- **Layout, animation, typography, gold accents, watermarks** — zero design changes. Pure copy + metadata edit.

## Out of scope

- Not adding new photos. Not removing any photos (the stock imagery stays as aesthetic direction, just unlabelled).
- Not rebuilding the Portfolio filter pills logic if "remove filters" turns out to require restructuring — in that case I'll leave a single "All" pill and a clear `// TODO: reinstate filters when real categorized work exists` comment.
- Not changing the Reception Details section (it was never built — the previous turn was interrupted before file writes).
- Not retitling the Portfolio page from "Real Weddings" to something softer. Open to doing that next pass if you want; it's a separate decision since it changes nav copy and SEO.

## Verification

1. After the edits, run: `rg -i "fairmont|jasper park|glass house|art gallery of alberta|devonian|river valley" src/components src/pages` — must return zero results.
2. Run: `rg -n "season:|couple:|venue:|location:|story:|snippet:" src/components src/pages` — should only return service-area or schema usages, not per-photo metadata.
3. Visually walk `/`, `/portfolio`, hover gallery tiles, open the lightbox — confirm no photo names a real venue, no photo claims a season-year, no photo attributes a couple.
4. Run an accessibility scan on `/` and confirm alt attributes are either short-and-factual or empty with `aria-hidden`.
