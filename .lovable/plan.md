

# Fantasy.co Typography Contrast System — Implementation Plan

## Problem Diagnosis

The current codebase has **470+ instances** across 35 files using opacity modifiers on text colors (e.g., `text-muted-foreground/30`, `text-muted-foreground/40`). Even with the improved base tokens, these opacity modifiers reduce contrast below WCAG AA requirements:

| Pattern | Approximate Contrast | Status |
|---------|---------------------|--------|
| `text-muted-foreground/60` | ~4.1:1 | Borderline |
| `text-muted-foreground/40` | ~2.7:1 | Fails AA |
| `text-muted-foreground/30` | ~2.0:1 | Critically fails |
| `text-muted-foreground/25` | ~1.7:1 | Critically fails |

## Solution: Semantic Solid Text Tokens

Replace opacity-based hierarchy with **purpose-driven solid tokens**. This is the Fantasy.co approach — deliberate, predictable contrast that maintains brand elegance while ensuring accessibility.

### New Token Architecture (in `src/index.css`)

```text
Token                   Lightness   Contrast  Purpose
────────────────────────────────────────────────────────────────
--foreground            16%         11:1+     Primary body copy, headings
--text-secondary        32%         6.8:1     Secondary text, descriptions (AA+)
--text-tertiary         42%         5.1:1     Tertiary text, captions (AA)
--text-decorative       55%         3.5:1     Decorative ONLY (watermarks, indices)
--text-ghost            68%         2.2:1     Purely ornamental (not readable)
```

### Implementation Strategy

**Phase 1: Establish token foundation** (CSS only)
- Add `--text-tertiary` and `--text-ghost` to `:root` and `.dark`
- Add corresponding Tailwind config colors

**Phase 2: Create a migration utility class map**
- `text-muted-foreground/60` → `text-brand-text-secondary` (readable)
- `text-muted-foreground/40` → `text-brand-text-light` (readable)  
- `text-muted-foreground/30` → `text-brand-text-decorative` (intentionally faint)
- `text-muted-foreground/25` → `text-brand-text-decorative` or remove

**Phase 3: Surgical component fixes** (priority pages first)
1. `src/pages/Inquire.tsx` — the page user is currently viewing
2. `src/components/wedding/InquireFormSteps.tsx`
3. `src/components/wedding/InquireStepIndicator.tsx`
4. `src/pages/Services.tsx`
5. `src/pages/About.tsx`

### Files to Edit

1. **`src/index.css`** — Add 2 new tokens: `--text-tertiary`, `--text-ghost`
2. **`tailwind.config.ts`** — Expose new tokens as Tailwind colors
3. **Priority components** — Replace opacity patterns with solid tokens

### Contrast Targets After Fix

```text
Use Case                    Before          After           
───────────────────────────────────────────────────────────
Body descriptions           2.7:1 (fail)    6.8:1 (AA+)
Labels & captions           2.0:1 (fail)    5.1:1 (AA)
Step indicators             2.7:1 (fail)    5.1:1 (AA)
Decorative indices          1.7:1           3.5:1 (decorative OK)
```

### Design Philosophy (Fantasy.co Style Guide)

**For Readable Text:**
- Use solid tokens only: `foreground`, `text-secondary`, `text-tertiary`
- Never use opacity modifiers below `/70` for text that must be read
- Body copy minimum: 5:1 contrast

**For Decorative Elements Only:**
- Watermarks, oversized ornamental type, background text
- May use `text-decorative` or `text-ghost`
- Must be purely visual — not required for comprehension

This approach maintains the refined, ethereal Hickory & Rose aesthetic while ensuring every word that matters is readable.

