

# About Page — Fantasy.co Style Guide & File-by-File Specification

## Overview

This is a comprehensive typography and contrast style guide for `/about`, delivering **WCAG AA compliance** (4.5:1 minimum for body text, 3:1 for UI components) while preserving Hickory & Rose's refined editorial aesthetic.

---

## Token Reference (Already Available)

| Token | CSS Variable | Tailwind Class | Contrast | Usage |
|-------|-------------|----------------|----------|-------|
| Primary | `--foreground` | `text-foreground` | 11:1+ | Headlines, body copy |
| Secondary | `--text-secondary` | `text-brand-text-secondary` | 6.8:1 | Descriptions, paragraphs |
| Tertiary | `--text-tertiary` | `text-brand-text-tertiary` | 5.1:1 | Labels, captions |
| Decorative | `--text-decorative` | `text-brand-text-decorative` | 3.5:1 | Non-critical ornaments |
| Ghost | `--text-ghost` | `text-brand-text-ghost` | 2.2:1 | Pure watermarks |

---

## File-by-File Specification

### 1. `src/pages/About.tsx`

| Line | Current Pattern | Replace With | Rationale |
|------|----------------|--------------|-----------|
| 73 | `text-white/50` | `text-white/75` | Hero overline label — AA on dark |
| 76,83 | `bg-white/30` | `bg-white/50` | Overline hairlines — visible |
| 93 | `text-white/70` | `text-white/85` | Hero subtitle — AA on dark |
| 110 | `text-white/30` | `text-white/55` | Credential strip — decorative, improved |
| 118 | `text-white/15` | `text-white/30` | Frame index "03" — decorative, improved |
| 181 | `text-primary-foreground/[0.06]` | Keep as-is | Decorative giant quote mark |
| 195 | `text-primary-foreground/35` | `text-primary-foreground/65` | Signature attribution — readable |
| 306 | `text-muted-foreground/30` | `text-brand-text-tertiary` | "As Seen In" label — AA |
| 355 | `text-foreground/15` | `text-brand-text-decorative` | Publication names default — improved |
| 355 (hover) | `text-foreground/35` | `text-brand-text-secondary` | Publication names hover — AA |
| 366 | `text-muted-foreground/30` → `/50` | `text-brand-text-tertiary` | Press note — AA |

### 2. `src/components/wedding/AboutFounderSection.tsx`

| Line | Current Pattern | Replace With | Rationale |
|------|----------------|--------------|-----------|
| 65 | `text-white/40` | `text-white/60` | "FR01" frame index — decorative |
| 71 | `text-white/50` | `text-white/70` | Founder caption — improved readability |
| 86 | `text-muted-foreground/50` | `text-brand-text-tertiary` | "The Founder" label — AA |
| 95 | `text-muted-foreground` | Keep (solid) | Paragraph body — already AA |
| 116 | `text-foreground/70` | `text-foreground` | Pull quote — full contrast |
| 126 | `hsl(var(--gold) / 0.45)` | `hsl(var(--gold) / 0.65)` | Signature attribution — improved |

### 3. `src/components/wedding/AboutValuesGrid.tsx`

| Line | Current Pattern | Replace With | Rationale |
|------|----------------|--------------|-----------|
| 31 | Already `text-brand-text-tertiary` | Keep | Label — AA ✓ |
| 48 | `text-primary/10` | Keep | Decorative large index |
| 67 | `text-primary/50` | `text-primary` | Pull quote — full sage |
| 71 | `text-muted-foreground` | Keep (solid) | Description — AA ✓ |

### 4. `src/components/wedding/AboutTestimonials.tsx`

| Line | Current Pattern | Replace With | Rationale |
|------|----------------|--------------|-----------|
| 59 | `text-muted-foreground/50` | `text-brand-text-secondary` | "Kind Words" label — AA |
| 67 | `text-muted-foreground/50` | `text-brand-text-secondary` | Description paragraph — AA |
| 111 | `text-foreground/70` | `text-foreground` | Couple name — full contrast |
| 115 | `text-muted-foreground/40` | `text-brand-text-tertiary` | Venue — AA |
| 118 | `text-muted-foreground/20` | `text-brand-text-decorative` | Dot separator — decorative |
| 119 | `text-muted-foreground/30` | `text-brand-text-tertiary` | Season — AA |
| 156 | `text-muted-foreground/40` | `text-brand-text-tertiary` | Progress counter — AA |

### 5. `src/components/wedding/AboutMilestones.tsx`

| Line | Current Pattern | Replace With | Rationale |
|------|----------------|--------------|-----------|
| 31 | `text-primary/10` | Keep | Large decorative "04" index |
| 32 | `text-muted-foreground/50` | `text-brand-text-tertiary` | "Our Journey" label — AA |
| 89 | `text-primary/20` | Keep | Year numbers — decorative |
| 100 | `text-muted-foreground` | Keep (solid) | Event text — AA ✓ |

---

## Visual Rules Summary

**On Light Backgrounds (bg-background, bg-card, bg-cream):**
- Body copy: `text-foreground` or `text-muted-foreground` — solid only
- Secondary descriptions: `text-brand-text-secondary` — never below 6:1
- Labels/captions: `text-brand-text-tertiary` — minimum 5:1
- Decorative indices (large "01", "02"): `text-primary/10` — permitted

**On Dark Backgrounds (bg-sage-deep, hero images):**
- Primary: `text-white` or `text-primary-foreground` — solid
- Secondary: minimum `text-white/80` or `/85`
- Captions/labels: minimum `text-white/70` or `/75`
- Decorative frame indices: minimum `text-white/30` (increased from /15)

**Gold Accents:**
- Gold text (signatures, attributions): minimum `hsl(var(--gold) / 0.55)` on light, `/ 0.65` on dark
- Gold ornaments (hairlines, diamonds): `/0.25` – `/0.4` range permitted

---

## Implementation Checklist

1. [ ] `src/pages/About.tsx` — 11 replacements
2. [ ] `src/components/wedding/AboutFounderSection.tsx` — 6 replacements
3. [ ] `src/components/wedding/AboutValuesGrid.tsx` — 1 replacement
4. [ ] `src/components/wedding/AboutTestimonials.tsx` — 7 replacements
5. [ ] `src/components/wedding/AboutMilestones.tsx` — 1 replacement

**Total: 26 targeted replacements** across 5 files — no structural changes, zero new dependencies.

