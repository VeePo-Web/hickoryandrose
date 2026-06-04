# Next Pass — Performance + Polish Gaps

The big SEO/a11y items are closed (canonical www, breadcrumbs, robots on 404, sitemap lastmod, alt text, landmarks, skip link, `lang="en"`, theme-color, hero `fetchPriority="high"`). Three concrete, contained gaps remain.

---

## 1. Hero LCP image isn't preloaded (highest-leverage perf win)

`HeroSection.tsx` correctly sets `loading="eager" fetchPriority="high"` on the LCP image, but the browser still has to wait for React to hydrate and render the `<img>` tag before it discovers the URL. A `<link rel="preload" as="image">` in `index.html` lets the browser start the fetch during HTML parse — typically shaving 200–600ms off LCP on cold loads.

**Fix:** In `index.html`, add right after the existing font preloads:

```html
<link
  rel="preload"
  as="image"
  href="/src/assets/hero-tablescape.jpg"  <!-- exact path from HeroSection import -->
  fetchpriority="high"
/>
```

I'll read `HeroSection.tsx` to confirm the exact built asset path/import, then preload that URL (Vite rewrites `src/assets/*` imports to hashed `/assets/*.jpg` at build, so we may need to import the URL in a small inline `<script type="module">` or — simpler — preload via the `imagetools`/known hashed path. The pragmatic move: import the asset at the top of `main.tsx`, write the resolved URL to a `<link>` injected at runtime before React mounts. Lowest-risk variant: keep `fetchPriority` on the `<img>` (already in place) and additionally add a `modulepreload`-style runtime preload in `main.tsx`.

**Implementation choice (recommended):** add a tiny preload helper in `src/main.tsx` that imports the hero image URL and injects `<link rel="preload" as="image" href={url} fetchpriority="high">` synchronously before `createRoot().render()`. This guarantees the hashed Vite URL is correct in both dev and prod.

---

## 2. Lazy `<img>` tags without `width`/`height` attributes (CLS)

`FilmstripSection.tsx` (line 167) and `GallerySection.tsx` lightbox `<img>` (line 378) use `loading="lazy"` but only the grid img has explicit `width`/`height`. The filmstrip frames are inside a fixed `aspect-[3/4]` wrapper so CLS is already prevented there — **no change needed**. Confirmed by reading the file.

**Action:** Spot-audit the remaining lazy `<img>` tags in `JournalArticleCard`, `JournalFeatured`, `PortfolioMasonryGrid`, `PortfolioFeaturedStory`, `AboutFounderSection` — any lazy `<img>` not wrapped in an aspect-ratio container needs `width`/`height` attributes (intrinsic ratio hint). Add them where missing. No visual change; pure CLS insurance.

---

## 3. PWA / device icon coverage incomplete

`public/` ships `favicon.svg`, `favicon.png`, `favicon.ico`, and `og-image.jpg`, but `index.html` has no:
- `<link rel="apple-touch-icon">` — iOS home-screen icon falls back to a low-quality screenshot.
- `<link rel="manifest" href="/manifest.webmanifest">` — Android "Add to home screen" and Lighthouse PWA checks both flag this.

**Fix:**
1. Add `public/apple-touch-icon.png` (180×180, derived from existing `favicon.png` — can reuse the 512px source if available).
2. Add `public/manifest.webmanifest` with: `name`, `short_name: "Hickory & Rose"`, `start_url: "/"`, `display: "standalone"`, `background_color: "#f7f4f0"` (matches existing `theme-color`), `theme_color: "#f7f4f0"`, and `icons` array pointing to existing `favicon.png` + new apple-touch-icon.
3. In `index.html` `<head>`, add:
   ```html
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
   <link rel="manifest" href="/manifest.webmanifest" />
   ```

Pure additive — no visual or behavioral change.

---

## Files touched

- `index.html` — add apple-touch-icon + manifest links
- `src/main.tsx` — runtime hero image preload (Vite-correct hashed URL)
- `public/manifest.webmanifest` — new file
- `public/apple-touch-icon.png` — new asset (180×180)
- Spot edits to ~5 `JournalArticleCard.tsx` / `JournalFeatured.tsx` / `PortfolioMasonryGrid.tsx` / `PortfolioFeaturedStory.tsx` / `AboutFounderSection.tsx` — add `width`/`height` to lazy imgs only where no aspect-ratio wrapper exists.

## What stays untouched

No content, layout, animation, or copy changes. Verified TODO comments in the codebase (PressMentions, fabricated testimonials, founder portrait) are all intentionally gated behind owner-supplied content and already handled — not in scope for this pass.

Ready to execute on your approval.
