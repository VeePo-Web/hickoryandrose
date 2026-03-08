

## Plan: Embed Discovery Framework as Decision-Making Reference

### Understanding

You want to embed persona and experience-level decision frameworks directly into the codebase so that all future UI/UX decisions (navigation, footer, visual design, etc.) are filtered through deep domain expertise. This discovery form is the **first** document in that series. No frontend changes.

### What I Need Before Proceeding

I don't have any **Royal Mechanical brand identity or style guide** in the codebase yet. The current site is a wedding site ("Alicia & Andres"). You mentioned adapting this for Royal Mechanical and filtering through the Royal Mechanical brand identity -- but that brand identity doesn't exist in the project yet.

**Before I can embed this properly, I need to know:**

1. **What is Royal Mechanical?** (Industry, services, positioning) -- so I can strip wedding-specific language and adapt the framework correctly.
2. **Do you have a Royal Mechanical style guide / brand doc?** -- If so, please paste it in a follow-up message so I can create the brand reference file alongside this persona framework.

### Proposed Structure (once I have context)

I'll create a `src/config/` directory with reference documents:

```text
src/config/
├── brand-identity.ts        -- Royal Mechanical brand constants (colors, voice, positioning)
├── personas/
│   ├── discovery-framework.ts  -- This discovery form adapted for Royal Mechanical
│   ├── ui-navigation.ts       -- Persona for nav bar decisions (future)
│   ├── ui-visual.ts           -- Persona for visual design decisions (future)
│   └── ui-footer.ts           -- Persona for footer decisions (future)
└── style-guide.ts            -- Royal Mechanical style guide reference
```

Each file exports typed objects with decision criteria, so any component can import and reference them. These are **reference-only** files -- they inform decisions but don't render anything.

### What I'll Do With This Document

- Strip all wedding/event planning references (Hickory & Rose, bridesmaids, venues, etc.)
- Adapt the framework categories to be industry-agnostic for Royal Mechanical
- Preserve the **depth of thinking** -- the discovery methodology, client psychology, positioning strategy, trust engineering, and conversion architecture
- Structure it as exportable TypeScript constants organized by domain (identity, ideal client, offers, experience, brand story, portfolio, website strategy, SEO, design direction, content, technical, launch)

### Next Step

**Please paste the Royal Mechanical brand identity / style guide** so I can properly adapt this framework and remove wedding references with the correct industry context. If you'd prefer, just tell me what Royal Mechanical does and I'll work from there.

