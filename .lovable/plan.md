

# Plan: Create H&R Monogram SVG Favicon

## What

Create an SVG favicon matching the loading screen monogram ("H & R") using the brand's gold color and fonts, then update `index.html` to reference it.

## Details

The loading screen monogram uses:
- **H**: `font-serif-wedding` (Cormorant Garamond), light weight, gold color `hsl(40 50% 55%)`
- **&**: `font-script` (Great Vibes), smaller, subtle
- **R**: `font-script` (Great Vibes), gold color

## Steps

1. **Create `public/favicon.svg`** — An inline SVG (32x32 viewBox) with the "H&R" monogram rendered as text elements using the brand fonts and gold color (`#c2a24d` ≈ hsl 40 50% 55%). Include a `<style>` block importing the Google Fonts so the SVG renders correctly in browsers.

2. **Update `index.html`** — Replace the existing favicon reference with:
   ```html
   <link rel="icon" href="/favicon.svg" type="image/svg+xml">
   ```

3. **Keep `favicon.ico` and `favicon.png`** as fallbacks but add the SVG as primary (SVG favicons are supported in all modern browsers and render crisply at any size).

