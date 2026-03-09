
## Situation Assessment

The token foundation is already correct from previous work. The problem is **658 remaining instances** across 47 files where opacity modifiers on text still cause failures. I've now read every key file on the `/about` page and mapped the exact problem patterns.

### What needs fixing — categorized by context

**On dark backgrounds (sage, hero images, dark sections):**
- `text-white/20`, `/25`, `/30` — opacity-modded white is 1.5–2:1 contrast on dark → still unreadable
- `text-primary-foreground/30`, `/35`, `/50` — same problem on sage-deep backgrounds
- These need replacing with solid white variants or intentional decorative tokens

**On light backgrounds (card, background, cream):**
- `text-muted-foreground/50`, `/40`, `/30` — the core "grey on white" complaint
- `text-foreground/50`, `/40`, `/30` — body and pull-quote text at failing contrast
- These need solid `text-brand-text-secondary` (`--text-secondary` at 32% lightness = 6.8:1) or `text-brand-text-tertiary` (42% = 5.1:1)

**Genuinely decorative (watermarks, frame numbers, ornamental indices):**
- `text-primary/10`, `/15`, `/20` — large-scale watermarks. Fine — these are non-informational background texture
- `text-white/15` on frame index "FR01" hover-reveal — fine, it's an on-hover ornament
- `opacity: 0.025` on parallax "Journey" watermark — fine, purely visual

### The Two-Pass Migration Strategy

**Pass 1 — Light Background Components** (the "grey on white" core complaint):
Files where light text fails on cream/white backgrounds. Replace opacity patterns with solid semantic tokens.

Key files:
1. `src/components/wedding/AboutMilestones.tsx` — `text-muted-foreground/50` on labels
2. `src/components/wedding/AboutTestimonials.tsx` — `text-muted-foreground/50`, `/40`, `/30` on venue/season/counter
3. `src/components/wedding/AboutFounderSection.tsx` — `text-muted-foreground/50` on section label
4. `src/pages/About.tsx` — `text-white/70`, `text-muted-foreground/30` on light sections, `text-primary-foreground/35` on signature

**Pass 2 — Dark/Sage Background Components** (white opacity text on dark):
These are separate — white text *on* dark sage or hero imagery backgrounds. The issue is opacity reducing white text below 4.5:1 even on dark backgrounds.

Key pattern:
- `text-white/50` on hero/dark → replace with `text-white/80` or `text-white/90` (still elegant, now readable)
- `text-primary-foreground/50` on sage-deep → replace with `text-primary-foreground/75` minimum
- `text-white/30` body descriptions on dark → replace with `text-white/65` minimum

### The Rule System (Hickory & Rose Typography Style Guide)

**On light backgrounds (warm-white, cream, card):**
```
Purpose → Token → Min opacity or solid
Body copy → text-foreground → solid (11:1)
Secondary/descriptions → text-brand-text-secondary → solid (6.8:1)
Captions/labels → text-brand-text-tertiary → solid (5.1:1)
Decorative only → text-brand-text-decorative/ghost → only for non-readable ornaments
```

**On dark/image backgrounds (sage-deep, hero):**
```
Purpose → Token → Min opacity
Primary text → text-white or text-primary-foreground → solid (AA+)
Secondary/descriptions → text-white/80 or text-primary-foreground/80 → min /75
Captions/labels → text-white/65 → min /60
Decorative (frame indices, ornamental) → text-white/25 → fine (hover-reveal, non-informational)
```

### Exact Files to Edit

Based on my audit of the `/about` page and its components:

1. **`src/components/wedding/AboutMilestones.tsx`**
   - `text-muted-foreground/50` (section label) → `text-brand-text-tertiary`

2. **`src/components/wedding/AboutTestimonials.tsx`**
   - `text-muted-foreground/50` (label + description) → `text-brand-text-secondary`
   - `text-muted-foreground/40` (venue) → `text-brand-text-tertiary`
   - `text-muted-foreground/30` (season) → `text-brand-text-tertiary`
   - `text-muted-foreground/20` (dot separator) → `text-brand-text-decorative`
   - `text-foreground/70` (couple name) → `text-foreground` (solid)
   - `text-muted-foreground/40` (counter) → `text-brand-text-tertiary`

3. **`src/components/wedding/AboutFounderSection.tsx`**
   - `text-muted-foreground/50` (section label) → `text-brand-text-tertiary`
   - `text-foreground/70` (pull quote) → `text-foreground` (solid, italic style carries elegance)

4. **`src/pages/About.tsx`**
   - `text-white/70` (hero subtitle) → `text-white/85`
   - `text-white/50` (overline label) → `text-white/75`
   - `text-white/30` (credential strip) → `text-white/55` (decorative, but improve)
   - `text-primary-foreground/35` (script attribution on sage bg) → `text-primary-foreground/65`
   - `text-muted-foreground/30` (press "As Seen In" label) → `text-brand-text-tertiary`
   - `text-foreground/15` / `/35` (press publication names) → `text-brand-text-secondary` / `text-foreground`

5. **`src/components/wedding/AboutValuesGrid.tsx`**
   - `text-primary/50` (pull quote) → `text-primary` (solid sage, elegant)

### What NOT to touch (intentionally decorative)
- `text-primary/10` — large watermark indices like "01", "02" (oversized, purely textural)
- `text-white/15` — hover-reveal frame index "FR01" (non-informational, on-hover only)
- `opacity: 0.025` / `opacity: 0.015` — parallax watermark text behind content
- `text-foreground/90` — letterbox bars on image hover (visual effect, not text)

### Files to edit: 5 files total
All surgical replacements, no structural changes, zero new dependencies.
