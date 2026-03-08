

# Upgrade Pass: Large Page Refactoring + Approach Timeline Extraction

## Current State
Console is clean. The previous passes extracted sub-components from Journal, FAQ, and Portfolio (all now under 250 lines). However, four pages still significantly exceed the 250-line component guideline:

| Page | Lines | Status |
|------|-------|--------|
| `Inquire.tsx` | 771 | Needs splitting |
| `Services.tsx` | 679 | Needs splitting |
| `About.tsx` | 561 | Needs splitting |
| `Approach.tsx` | 549 | Needs splitting |

These large files contain distinct, self-contained sections that can be cleanly extracted without visual changes.

## Plan (6 items)

1. **Extract `ApproachProcessTimeline` from Approach.tsx** -- The process steps timeline (lines 167-268, ~100 lines) with the gold vertical connector, timeline dots, and step cards is a self-contained section. Extract into `src/components/wedding/ApproachProcessTimeline.tsx` with `processSteps` data as a prop or co-located constant.

2. **Extract `ApproachDifferentiators` from Approach.tsx** -- The "What Sets Us Apart" section (lines 277-350, ~75 lines) with the sticky founder image and differentiator rows. Extract into `src/components/wedding/ApproachDifferentiators.tsx`. This plus item 1 brings Approach.tsx from 549 to ~250 lines.

3. **Extract `ServicesVendorPartners` from Services.tsx** -- The "Trusted Vendor Partners" section (lines 403-480, ~80 lines) with the editorial split layout and gold shimmer vendor rows. Extract into `src/components/wedding/ServicesVendorPartners.tsx`.

4. **Extract `ServicesInvestmentPhilosophy` from Services.tsx** -- The "Investment Philosophy" section (lines 482-585, ~100 lines) with three pricing pillars and gold ornaments. Extract into `src/components/wedding/ServicesInvestmentPhilosophy.tsx`. Combined with item 3, Services.tsx drops from 679 to ~350 lines.

5. **Extract `InquireFormSteps` from Inquire.tsx** -- The multi-step form rendering logic (the step content JSX, ~300 lines of form fields/pill selectors/service cards) into `src/components/wedding/InquireFormSteps.tsx`, receiving `formData`, `set`, `errors`, `PillSelect`, `ServiceCard`, `InputWrapper`, and `inputCls` as props. Brings Inquire.tsx from 771 to ~350 lines.

6. **Extract `AboutFounderSection` from About.tsx** -- The founder editorial split section (~150 lines) into `src/components/wedding/AboutFounderSection.tsx`. Brings About.tsx from 561 to ~350 lines.

## Technical Approach
- **New files (6)**: All under `src/components/wedding/`
- **Modified files (4)**: `Approach.tsx`, `Services.tsx`, `Inquire.tsx`, `About.tsx` -- import and render extracted components
- **Pure refactor**: No visual changes, no new dependencies
- **Props**: Each extracted component receives typed props for data arrays and callbacks; co-locates static data where it's only used by that component

