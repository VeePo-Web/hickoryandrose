

# Upgrade: Journal Article Cards Premium Polish & Navigation Context Enhancement

## Current State

**JournalArticleCard** already has: gold shimmer sweep, scale-105 image zoom, gradient overlay, corner frame reveals, pull-quote bottom reveal, circular reading-time indicator, gold underline on title hover, and staggered "Read" arrow. This is already well-polished.

**Navigation** already has: hide/show on scroll, monogram condensation, gold active underlines with diamond dot, shimmer CTA button, and scroll progress bar.

## What Still Feels Flat

1. **No letterbox cinematic bars on card image hover** -- the image zoom happens but lacks the cinematic framing that the hero sections use (top/bottom bars that close in slightly on hover)
2. **Metadata appears statically** -- category, read time, and date below the image are all visible immediately; staggering their reveal on card hover would add editorial sequencing
3. **No nav page-context indicator** -- when scrolled on the Journal page, the nav shows the monogram but gives no hint which section you're in (unlike editorial sites like Kinfolk that show a subtle page label next to the logo)
4. **Sticky filter bar lacks gold accent polish** -- the category filter tabs have a gold underline but no background warmth or breathing diamond separator between items

## Plan

### 1. JournalArticleCard -- Letterbox bars on image hover
Add two 6% height bars (top/bottom) inside the image container that translate inward on `group-hover`, creating a cinematic crop effect. Pure CSS with `transition-transform`.

### 2. JournalArticleCard -- Staggered metadata reveal
Convert the static category/readTime/date row below the image into elements with sequential `transition-delay` values (0ms, 100ms, 200ms) that translate-y and fade on `group-hover`, creating a cascading reveal.

### 3. Navigation -- Page context label
When `showMonogram` is true and on the Journal page, render a small `motion.span` next to the H&R monogram showing "Journal" in label typography with a gold dot separator. Uses `location.pathname` to determine context. Only shows on `/journal`, `/services`, `/portfolio`, `/about`, `/approach`, `/faq` pages.

### 4. Journal sticky filter bar -- Editorial polish  
Add `BreathingDiamond` separators between filter items (desktop only) and a subtle warm background tint (`bg-card/80`) to the sticky bar for better visual distinction from page content.

## Files Modified
- `src/components/wedding/JournalArticleCard.tsx` -- letterbox bars, staggered metadata
- `src/components/wedding/Navigation.tsx` -- page context label next to monogram
- `src/pages/Journal.tsx` -- filter bar polish with diamonds and bg tint

