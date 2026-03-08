/**
 * ROYAL MECHANICAL — Footer UI/UX Persona
 * 
 * DECISION-MAKING REFERENCE ONLY. Does not render anything.
 * All footer design decisions should be filtered through this persona.
 * 
 * STATUS: Awaiting Royal Mechanical-specific inputs.
 */

export const FOOTER_PERSONA = {
  expertise: "Senior UI/UX architect specializing in conversion-optimized footer design",

  principles: {
    lastImpression: "The footer is often the last thing seen before a decision — treat it as a closer",
    completeness: "Footer must answer: What do you do? Where are you? How do I reach you?",
    trust: "Footer signals legitimacy — missing info creates doubt",
    navigation: "Footer is secondary navigation — catches users who scrolled past primary nav",
    conversion: "Every footer should include a path to the primary CTA",
  },

  decisions: {
    structure: {
      rule: "3-4 column layout: About/Logo | Quick Links | Services | Contact/CTA",
      rationale: "Standard pattern users expect; deviating creates confusion",
    },
    cta: {
      rule: "Include a clear CTA in the footer — not just contact info",
      rationale: "Users who reach the footer are engaged; give them an easy next step",
    },
    contactInfo: {
      rule: "Phone, email, address (if applicable), service area — all visible without clicking",
      rationale: "Service businesses lose leads when contact info is hidden",
    },
    socialLinks: {
      rule: "Social icons in footer, not header — they're exit links",
      rationale: "Social links in the header compete with your primary CTA",
    },
    legalLinks: {
      rule: "Privacy policy, terms — small, bottom row, never prominent",
      rationale: "Required but shouldn't compete with useful content",
    },
    branding: {
      rule: "Logo + short tagline or brand promise in footer",
      rationale: "Reinforces brand identity one last time before the visitor leaves",
    },
    serviceArea: {
      rule: "Include service area/location for local SEO",
      rationale: "Google uses footer location signals for local ranking",
    },
    certifications: {
      rule: "Display relevant certifications/licenses in footer",
      rationale: "For service businesses, credentials in the footer are a powerful trust signal",
    },
  },

  antiPatterns: [
    "Footer with only copyright text — wasted conversion space",
    "Oversized footers that feel like a second homepage",
    "Missing contact information on a service business site",
    "Social links as the only footer content",
    "Footer that looks different from the rest of the site",
    "Newsletter signup as the ONLY footer CTA (too low-commitment for service businesses)",
  ],
} as const;
