

# FAQ Page Gold Accordion Upgrade + "Powered by VeePo" Footer Badge

## Two Tasks

### Task 1: FAQ Accordion Premium Polish

The FAQ accordion items at `src/pages/FAQ.tsx` lines 174-188 already have gold gradient left borders and shimmer sweeps. After auditing, these treatments are already present:
- Gold gradient left border on open (line 177)
- Shimmer sweep on hover (line 178)
- Breathing diamond ornaments between category sections (lines 156-161)

**What's still missing / can be upgraded:**

1. **Expand shimmer on state change**: Currently shimmer only triggers on hover. Add a second shimmer sweep that fires when the accordion opens (using `data-[state=open]` animation).
2. **Gold glow pulse on open**: Add a subtle ambient gold box-shadow that fades in when an item opens.
3. **Answer text fade-in**: Add a staggered opacity+translateY entrance for the answer content when expanding.
4. **Inter-question breathing diamonds**: Add small gold diamond separators between individual questions within each category (not just between categories).

**File**: `src/pages/FAQ.tsx` -- lines 174-188 (accordion items)

### Task 2: "Powered by VeePo" Footer Badge

Add a "The Vision For This Website Is Powered By" + VeePo logo link to the Footer, pointing to `https://veepo.ca/case-studies` (per user request to point to case studies page). Style it to match the Hickory & Rose editorial aesthetic (not the FlexServices blue/green style).

**Implementation:**
1. Copy the `veepo-logo.png` from the FlexServices project into `src/assets/`
2. In `src/components/wedding/Footer.tsx`, add a "powered by" row below the copyright line (line 248), styled with the existing `text-background/15` treatment and gold hover accent -- keeping it subtle and editorial to match the luxury brand.
3. Link href: `https://veepo.ca/case-studies` with `target="_blank" rel="noopener noreferrer"`

**Files modified:**
- `src/pages/FAQ.tsx` -- accordion item upgrades
- `src/components/wedding/Footer.tsx` -- powered by badge
- `src/assets/veepo-logo.png` -- copied from FlexServices project

