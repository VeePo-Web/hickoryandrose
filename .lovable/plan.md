

# About Page: Milestones → "Our Promises" Redesign

## Problem Analysis
The current `AboutMilestones.tsx` displays a fabricated timeline (2018-2024) with fake company history. For a new company, this:
- Lacks authenticity (fake milestones erode trust)
- Doesn't address "Polished Paige's" core anxiety: *"Will they actually deliver?"*
- Wastes valuable page real estate on non-proof content

## Replacement Concept: "Our Promises"
A **commitment-forward section** that builds trust through specificity rather than history. Each promise is:
- Tangible and measurable
- Directly addressing bride anxieties
- Forward-looking (authentic for a new company)

### Content Architecture
```
Section Index: 04
Label: "What You Can Count On"
Heading: "Promises We Keep"

Promise 1: "Your call returned same-day"
    Subtext: Because waiting feels like being forgotten

Promise 2: "Timeline finalized 72 hours before"  
    Subtext: So you can exhale before the big day

Promise 3: "A backup plan for every vendor"
    Subtext: Peace of mind isn't optional

Promise 4: "Present from setup to send-off"
    Subtext: Not just coordinating — caring

Promise 5: "Your vendors, briefed and aligned"
    Subtext: One vision, executed seamlessly
```

## Visual Design
- **Layout**: Staggered 2-column grid with alternating offset (similar rhythm to current milestones)
- **Animation**: Sequential reveal with gold gradient underlines on scroll
- **Ornaments**: Breathing diamond between each pair, gold hairline connectors
- **Watermark**: Parallax "Promise" or "Trust" in serif italic
- **Mobile**: Single column with left-aligned diamonds as nodes

## Implementation
1. **Rename component**: `AboutMilestones.tsx` → `AboutPromises.tsx`
2. **Update data structure**: Replace `milestones[]` with `promises[]`
3. **Refine layout**: Keep staggered visual rhythm, add editorial header with section index "04"
4. **Update imports**: Change `About.tsx` import from `AboutMilestones` to `AboutPromises`
5. **Accessibility**: Add `role="region"` with `aria-label="Our Promises"`

## Files Modified
- `src/components/wedding/AboutMilestones.tsx` → completely rewritten as `AboutPromises.tsx`
- `src/pages/About.tsx` (lines 12, 332) → update import and usage

