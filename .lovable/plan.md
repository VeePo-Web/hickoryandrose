

## Plan: Rebrand Config Files from "Royal Mechanical" to "Hickory & Rose"

All existing `src/config/` reference files currently say "Royal Mechanical." The user wants these to be **Hickory & Rose** — a wedding and event planning brand focused on refined rustic elegance and calm luxury leadership.

### Changes (no frontend changes)

**1. `src/config/brand-identity.ts`** — Replace all "Royal Mechanical" references with "Hickory & Rose Wedding and Event Planning" / "Hickory & Rose". Update industry section to reflect wedding/event planning. Populate positioning with the discovery framework values (refined rustic elegance, calm luxury leadership, protecting presence).

**2. `src/config/personas/discovery-framework.ts`** — Replace all "Royal Mechanical" with "Hickory & Rose." This file already matches the discovery form structure well — just needs the brand name swap and populating key fields from the discovery form content (e.g., named promise = "protect presence", ideal client = "Polished Paige", voice = "calm and editorial").

**3. `src/config/personas/ui-navigation.ts`** — Replace "Royal Mechanical" header. Update CTA examples to wedding context (e.g., "Inquire" instead of "Get a Quote").

**4. `src/config/personas/ui-visual.ts`** — Replace "Royal Mechanical" header. Update imagery/photography references to match wedding planning context (editorial, warm, refined rustic).

**5. `src/config/personas/ui-footer.ts`** — Replace "Royal Mechanical" header. Update examples to wedding planner context (service area = Edmonton, certifications → vendor preferred lists).

**6. `src/config/personas/index.ts`** — Update header comment from "Royal Mechanical" to "Hickory & Rose."

**7. `src/config/index.ts`** — Update header comment.

**8. `src/config/style-guide.ts`** — Update header from "Royal Mechanical" to "Hickory & Rose."

### What gets populated from the discovery form

The discovery form itself is a **methodology template** (questions, not answers). I'll embed the framework's structure and decision criteria as the reference, pre-populate what's explicitly stated in the form's framing (brand name, industry context, ideal client archetype "Polished Paige", positioning concepts like "refined rustic elegance" and "calm luxury leadership"), and leave TODO markers for answers the client hasn't provided yet.

