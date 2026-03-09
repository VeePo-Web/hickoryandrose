

# About Page — Phase 3: Micro-Polish & Delight Layer

## Current State Assessment

The About page now has strong bones: cinematic hero, founder section, quote, values, process ribbon, mosaic, testimonials, promises (glass cards), and press. After auditing the live code, here are the remaining issues that reduce the page from "good" to "world-class":

---

## Issues Found

### 1. Hero Section Index is Wrong
Line 144: The hero shows `03` but the About page is its own route — it should not carry an index from another page's numbering. Remove it or change to a decorative `&` ampersand mark consistent with the brand.

### 2. Credential Strip Overlaps Scroll Indicator
Lines 106-136: Both the credential strip (`bottom-0`) and scroll indicator (`bottom-6`) compete for the same bottom space. On shorter viewports they visually collide. The credential strip needs to sit higher, and the scroll indicator should be below it with proper spacing.

### 3. Signature Quote Section Lacks Section Index
Lines 150-221: Every other section has an editorial index number (01, 02, 04, 05). The signature quote between founder and values has none, breaking the editorial rhythm. It needs a subtle decorative marker.

### 4. Press Section Has No Section Index
Lines 327-455: The "As Seen In" press ribbon is the only major section without an editorial index. Should be `06`.

### 5. Testimonial Auto-Advance Has No Pause on Hover
Line 37: The 6-second auto-rotate has no pause mechanism when a user is reading. This is a UX anti-pattern — users lose their place mid-read.

### 6. Missing `contain` Property on Heavy Sections
Several sections lack CSS containment (`contain: layout style`), which would improve paint performance. The testimonials section has it, but the hero, promises, mosaic, and press sections do not.

---

## Implementation Plan (6 Targeted Edits)

### Files: 3

**1. `src/pages/About.tsx`**
- Replace hero corner index `03` with decorative `&` ampersand (brand motif)
- Move credential strip to `bottom-12` and scroll indicator to `bottom-4` to fix overlap
- Add subtle section marker to signature quote (small `—` gold rule + "01.5" or just a breathing diamond)
- Add `06` index to press section header
- Add `contain: layout style` to hero, mosaic, and press sections

**2. `src/components/wedding/AboutTestimonials.tsx`**
- Add pause-on-hover: clear interval on mouseenter, restart on mouseleave
- This is a critical UX fix — "Polished Paige" reads carefully and hates losing her place

**3. `src/components/wedding/AboutPromises.tsx`**
- Add `style={{ contain: "layout style" }}` to the root section for paint performance

