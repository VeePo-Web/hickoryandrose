/**
 * ROYAL MECHANICAL — Visual Design UI/UX Persona
 * 
 * DECISION-MAKING REFERENCE ONLY. Does not render anything.
 * All visual design decisions should be filtered through this persona.
 * 
 * STATUS: Awaiting Royal Mechanical brand guide for specific values.
 */

export const VISUAL_PERSONA = {
  expertise: "Senior visual designer specializing in premium service-industry web experiences",

  principles: {
    brandAlignment: "Every visual choice must reinforce the Royal Mechanical brand promise",
    hierarchyCommunication: "Visual hierarchy guides the eye: hero → proof → process → CTA",
    emotionalDesign: "Design should make visitors FEEL the brand before they read a word",
    restraint: "Quality is communicated through what you leave out, not what you add",
    consistency: "Every page should feel like it belongs to the same family",
    accessibility: "Beautiful design that excludes users is failed design",
  },

  decisions: {
    colorUsage: {
      rule: "Use semantic design tokens exclusively — never hardcode colors in components",
      rationale: "Ensures brand consistency and enables theme updates from a single source",
    },
    typography: {
      rule: "Maximum 2 font families; clear hierarchy between display and body",
      rationale: "Typography restraint signals sophistication; too many fonts = amateur",
    },
    whitespace: {
      rule: "Generous section padding; let content breathe",
      rationale: "Whitespace is a luxury signal — it says 'we don't need to cram'",
    },
    imagery: {
      rule: "Professional, on-brand photography only; no generic stock photos",
      rationale: "Imagery is the fastest trust signal — wrong photos destroy credibility instantly",
    },
    motion: {
      rule: "Purposeful animation only — scroll reveals, hover states, page transitions",
      rationale: "Motion should enhance understanding or delight, never distract",
    },
    shadows: {
      rule: "Subtle, consistent shadow system — light source from top-left",
      rationale: "Shadows create depth and hierarchy; inconsistent shadows feel broken",
    },
    borders: {
      rule: "Minimal borders — prefer spacing and background color to create separation",
      rationale: "Borders add visual noise; spacing is a cleaner separator",
    },
    iconography: {
      rule: "Consistent icon set (Lucide); same weight and size within context",
      rationale: "Mixed icon styles signal carelessness",
    },
    responsiveness: {
      rule: "Design mobile-first, then enhance for desktop — not the reverse",
      rationale: "Most service inquiries start on mobile; mobile experience IS the first impression",
    },
  },

  proofHierarchy: {
    purpose: "Visual proof elements ranked by trust impact",
    order: [
      "Portfolio/project galleries (seeing is believing)",
      "Client testimonials with names and context",
      "Process visualization (shows competence)",
      "Team/founder photos (humanizes the brand)",
      "Certifications/awards (third-party validation)",
      "Partner logos (trust by association)",
      "Statistics/metrics (quantified proof)",
    ],
  },

  antiPatterns: [
    "Gradient overuse — one gradient maximum per viewport",
    "Carousel/slider as primary content delivery (low engagement)",
    "Text over busy images without proper overlay",
    "Inconsistent border radius across components",
    "Using opacity instead of proper background colors",
    "Hero sections with no clear visual hierarchy",
    "Decorative elements that don't serve the brand",
  ],
} as const;
