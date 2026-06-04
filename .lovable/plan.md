# Final Honesty Sweep — All Remaining "Est. 2018" + Named-Couple Surfaces

The prior passes fixed the high-traffic pages but left fabricated content scattered through reusable components and a few page surfaces that weren't audited. A full grep finds **14 remaining user-facing surfaces** that still display content the owner never claimed. This pass closes the loop for real.

---

## What's still leaking

### Fabricated founding year — "Est. 2018"

| File | Line(s) | Surface |
|---|---|---|
| `FounderTeaserSection.tsx` | 354 | Homepage founder teaser |
| `EditorialSplitSection.tsx` | 157 | Homepage editorial split |
| `LoveQuoteSection.tsx` | 106, 253 | Homepage love quote (×2) |
| `LoadingScreen.tsx` | 320 | Site-wide loader |
| `Approach.tsx` | 273 | Approach page header strip |
| `Journal.tsx` | 195 | Journal page header |

**Fix**: replace every `"Est. 2018"` with `"Edmonton · Alberta"` (matches the treatment we applied to the Approach founder block).

### Named-couple testimonials + attributions

| File | Line(s) | Surface |
|---|---|---|
| `TestimonialSection.tsx` | 15, 23, 31 | Homepage testimonial section (3 couples) |
| `AboutTestimonials.tsx` | 10, 17, 24 | About page testimonials (3 couples) |
| `FilmstripSection.tsx` | 13, 23, 33, 43, 53 | Homepage filmstrip (5 couples) |
| `AboutProcessRibbon.tsx` | 85 | About page process ribbon ("— Olivia & Noah") |
| `Services.tsx` | 317 | Services page inline testimonial |

**Fix**: anonymize using the same convention used on Portfolio + Approach + FAQ:
- `couple` field → `"Hickory & Rose"`
- `venue` field → an editorial label that describes *what the quote is about* (e.g. `"Design Philosophy"`, `"Client Communication"`, `"Day-Of Coordination"`, `"Our Approach"`, `"Pricing Philosophy"`)
- Keep the quote bodies — they're brand-true even if the attribution wasn't

For `FilmstripSection.tsx` (5 entries), rotate through editorial labels so they don't all read identically:
1. *Design Philosophy*
2. *Client Communication*
3. *Day-Of Coordination*
4. *Vendor Relationships*
5. *Calm Leadership*

### Fabricated press in `TrustBarSection.tsx`

| File | Line(s) | Issue |
|---|---|---|
| `TrustBarSection.tsx` | 7–8 | "Wedding Bells · Featured Planner · 2023", "Style Me Pretty · Editor's Pick · 2024" |

This is the same lie we already removed from `PressMentionsSection` (hidden from homepage). `TrustBarSection.tsx` is still live on the homepage and broadcasts the same fake features in a "Featured In" badge row.

**Fix**: replace the publications array with the owner's actual proof signals:

```ts
const featuredIn = [
  { name: "2026 Season", category: "Booking Status", year: "", note: "Summer & Fall Fully Booked", badge: "Booked" },
  { name: "Aug 2026", category: "Editorial", year: "", note: "Styled Shoot in Production", badge: "Upcoming" },
  { name: "2027 Season", category: "Now Booking", year: "", note: "Limited Calendar by Design", badge: "Open" },
];
```

This preserves the visual rhythm (3 badge items, same shape/component interface) while replacing fiction with truth.

### Fabricated press in `About.tsx`

| File | Line(s) | Issue |
|---|---|---|
| `About.tsx` | 388 | "Style Me Pretty · Real Wedding Feature" |

**Fix**: same anonymization — replace with "Editorial Styled Shoot · August 2026" or "Now Booking 2027" depending on what's adjacent in the layout.

---

## Files touched

**"Est. 2018" sweep (6 files):**
1. `src/components/wedding/FounderTeaserSection.tsx`
2. `src/components/wedding/EditorialSplitSection.tsx`
3. `src/components/wedding/LoveQuoteSection.tsx` (×2 lines)
4. `src/components/wedding/LoadingScreen.tsx`
5. `src/pages/Approach.tsx` (line 273)
6. `src/pages/Journal.tsx`

**Named-couple sweep (5 files):**
7. `src/components/wedding/TestimonialSection.tsx`
8. `src/components/wedding/AboutTestimonials.tsx`
9. `src/components/wedding/FilmstripSection.tsx`
10. `src/components/wedding/AboutProcessRibbon.tsx`
11. `src/pages/Services.tsx`

**Press sweep (2 files):**
12. `src/components/wedding/TrustBarSection.tsx`
13. `src/pages/About.tsx` (line 388 — verify context first)

---

## What stays untouched

Every visual treatment, animation, image, layout, and component shape. The data shape passed into testimonials/press components is preserved exactly — only the field *values* change. No prop renames, no component re-architecture, no layout shifts.

---

## Why finish this pass cleanly

The site can survive one missed fabrication; it can't survive a discerning bride finding `"Style Me Pretty 2024"` in the TrustBar two seconds after she sees the integrity-true homepage. Either the whole site reads as quietly confident and true, or none of it does. Closing the gap.

Ready to execute.
