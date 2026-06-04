# Plan: Rename founder Alexandra Rose → Meg Wolodko

Audit complete. "Alexandra Rose" / "Alexandra" appears in **5 files** (8 hard-coded mentions) plus **1 memory file**. No existing "Meg" or "Wolodko" references — clean swap. Founder portrait image (`founder-portrait.jpg`) stays in place; only alt text and captions change.

## Files to update

### 1. `src/config/brand-identity.ts` (source of truth)
- Line 215: `name: "Alexandra Rose"` → `name: "Meg Wolodko"`
- Line 365: `decisionMaker: "Alexandra Rose (owner)"` → `"Meg Wolodko (owner)"`

### 2. `src/components/wedding/AboutFounderSection.tsx`
- Line 52 alt: `"Alexandra Rose, founder of Hickory & Rose..."` → `"Meg Wolodko, founder..."`
- Line 87 caption: `"Alexandra Rose, Founder"` → `"Meg Wolodko, Founder"`
- Line 109 H2: `Alexandra Rose` → `Meg Wolodko`
- Line 117 body: `"I'm Alexandra — the founder..."` → `"I'm Meg — the founder..."`
- Line 172 quote attribution: `— Alexandra Rose` → `— Meg Wolodko`

### 3. `src/pages/About.tsx`
- Line 34 SEO description: `"Meet Alexandra Rose, founder..."` → `"Meet Meg Wolodko, founder..."`
- Line 312 image alt: `"Wedding planner Alexandra reviewing day-of timeline..."` → `"Wedding planner Meg reviewing day-of timeline..."`

### 4. `src/pages/Approach.tsx`
- Line 602 alt: `"Alexandra Rose, Founder of Hickory & Rose"` → `"Meg Wolodko, Founder..."`
- Line 607 attribution: `— Alexandra Rose, Founder` → `— Meg Wolodko, Founder`

### 5. `mem://business/founder-info`
- Update `description` frontmatter and bullet to reference Meg Wolodko.
- **Important**: I will ask before keeping the "WPIC Certified (7+ years experience)" credential — that was previously flagged as TBC/unverified in the brand audit and we removed similar fabricated credentials from the live site. Same question for "Presence over panic" philosophy line.

### 6. `mem://index.md`
- Update the "Founder Information" reference line description to reflect Meg.

## Not changing
- `founder-portrait.jpg` filename and the TODO comment noting it's a placeholder until real brand photos arrive — the image is generic and the comment still applies.
- Generic "Founder" labels in `FounderTeaserSection`, `ApproachDifferentiators`, `BrandPromiseSection`, `AboutTestimonials` — they don't name the person, so no change needed.
- `sales@hickoryandrose.com` contact email — unchanged.

## One clarifying question before I implement
Should the bio paragraph keep the exact same voice/content (just swap the name), or do you want me to leave a `TODO` placeholder for Meg's actual bio copy? Same question for any credentials (WPIC, years of experience) — confirm, remove, or mark TBC?
