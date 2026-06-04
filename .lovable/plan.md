# Remaining SEO + A11y Gaps — Focused Pass

After the canonical-domain fix, a sweep of pages and head metadata reveals three concrete gaps still worth closing. Each is small, high-leverage, and contained to presentation/SEO code.

---

## 1. `NotFound.tsx` is missing SEO hygiene (high priority)

The 404 page sets `document.title` directly but:
- Does **not** call `setPageMeta`, so canonical, OG, Twitter, and description tags from the previous route leak onto the 404.
- Does **not** emit `<meta name="robots" content="noindex,follow">`, so Google can (and will) index 404s — wasting crawl budget and surfacing dead URLs in search.

**Fix:**
- Add a `setRobotsMeta("noindex,follow")` helper in `src/lib/seo.ts` that creates/updates the robots meta tag and **removes it again on cleanup** (so other routes stay indexable).
- In `NotFound.tsx`, replace the manual `document.title` line with `setPageMeta({...})` and call `setRobotsMeta("noindex,follow")`, returning a cleanup that resets robots to `index,follow`.

---

## 2. No `BreadcrumbList` structured data on inner pages

`index.html` has `LocalBusiness` JSON-LD and `FAQ.tsx` has `FAQPage` JSON-LD, but no inner page emits `BreadcrumbList` — which Google uses to render breadcrumb trails in SERPs (visible ranking signal + better CTR).

**Fix:**
- Add a `setBreadcrumbSchema(items)` helper in `src/lib/seo.ts` that injects/updates a single `<script type="application/ld+json" id="breadcrumb-schema">` element.
- Call it from each inner page's `useEffect` alongside `setPageMeta`:
  - `/about` → Home › About
  - `/approach` → Home › Approach
  - `/services` → Home › Services
  - `/portfolio` → Home › Portfolio
  - `/journal` → Home › Journal
  - `/faq` → Home › FAQ
  - `/inquire` → Home › Inquire
- Skip on `/` (home) and on 404.

---

## 3. `sitemap.xml` has no `lastmod` dates

Sitemap entries lack `<lastmod>`, which means crawlers can't prioritize freshness and Search Console flags this as a quality issue.

**Fix:** Add `<lastmod>2026-06-04</lastmod>` to every URL entry in `public/sitemap.xml` (today's date as a baseline; can be updated when content meaningfully changes).

---

## Files touched

- `src/lib/seo.ts` — add `setRobotsMeta`, `setBreadcrumbSchema` helpers
- `src/pages/NotFound.tsx` — wire `setPageMeta` + `setRobotsMeta("noindex,follow")` with cleanup
- `src/pages/About.tsx`, `Approach.tsx`, `Services.tsx`, `Portfolio.tsx`, `Journal.tsx`, `FAQ.tsx`, `Inquire.tsx` — add `setBreadcrumbSchema` call
- `public/sitemap.xml` — add `<lastmod>` to all 8 URL entries

## What stays untouched

No visual, layout, animation, or content changes. Pure metadata + SEO scaffolding.

---

## What is NOT needed (verified)

- **PressMentionsSection fabricated copy** — component is commented out in `Index.tsx` (line 81 TODO), not rendered. No user-facing leak.
- **`.lovable/plan.md` honesty sweep** — appears to be a historical doc from a prior pass; no live fabricated content surfaced in spot checks (Est. 2018, named couples) on this run beyond the already-hidden PressMentions component.
- **`prefers-reduced-motion`** — already covered globally via `MotionConfig reducedMotion="user"`, Lenis guard, and CursorFollower guard.
- **OG image absolute URLs / canonical www** — both fixed in prior passes.

Ready to execute on your approval.
