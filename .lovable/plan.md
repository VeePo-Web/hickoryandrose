# Favicon & Branding Cleanup

## What needs to happen

You said "with this logo" but no image was attached to the message. I need you to **upload the Hickory & Rose logo image** (PNG, SVG, or ICO) so I can set it as the favicon.

In the meantime, here is the full plan for everything else you asked for:

** MAKE A HICKORY AND ROSE LOGO LIKE THE H AND R THAT IS ON THE LOADING SCREEN

## Changes (3 files)

### 1. `index.html` — Replace favicon reference

- Add `<link rel="icon" href="/favicon.png" type="image/png">` (or SVG) pointing to the uploaded logo once provided
- The current site has no explicit favicon link (defaults to `public/favicon.ico` which is likely the Lovable default)

### 2. `src/components/wedding/Footer.tsx` — Remove VeePo agency credit block

- Delete lines 282-367 (the entire "Powered by VeePo" section including the logo, gradients, shimmer, tagline)
- Remove the `veepoLogo` import on line 7
- This is the only external branding in the rendered site

### 3. `src/assets/veepo-logo.png` — Delete file

- No longer referenced after the footer cleanup

### 4. `public/favicon.ico` — Replace

- Once you upload the H&R logo, replace this file with the new one

## What I need from you

Upload the Hickory & Rose logo file you want used as the favicon, then I will implement all of the above.