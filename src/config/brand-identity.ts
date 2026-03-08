/**
 * ROYAL MECHANICAL — Brand Identity Reference
 * 
 * This file is a DECISION-MAKING REFERENCE ONLY. It does not render anything.
 * All UI/UX decisions (navigation, footer, visuals, layout, copy, interactions)
 * should be filtered through these brand constants.
 * 
 * STATUS: Awaiting Royal Mechanical brand doc / style guide.
 * Update these values once brand assets are provided.
 */

export const BRAND_IDENTITY = {
  name: {
    full: "Royal Mechanical", // TODO: Confirm full legal/brand name
    short: "Royal Mechanical",
    tagline: "", // TODO: Add tagline from brand guide
  },

  positioning: {
    oneSentence: "", // TODO: Client-friendly one-sentence description
    namedPromise: "", // TODO: "Royal Mechanical exists to ________"
    differentiators: [] as string[], // TODO: Core differentiators
    knownFor: "", // TODO: What Royal Mechanical wants to be known for in market
  },

  voice: {
    tone: [] as string[], // TODO: e.g., ["professional", "confident", "approachable"]
    boundaries: [] as string[], // TODO: Words/phrases to NEVER use
    repeatWords: [] as string[], // TODO: Words to reinforce across site
    avoidWords: [] as string[], // TODO: Words that dilute the brand
  },

  visual: {
    // TODO: Populate from Royal Mechanical style guide
    palette: {
      primary: "", // HSL value
      secondary: "",
      accent: "",
      background: "",
      text: "",
    },
    typography: {
      display: "", // Font for headings
      body: "", // Font for body text
      accent: "", // Optional accent font
    },
    photographyStyle: [] as string[], // e.g., ["industrial", "clean", "professional"]
    motionLevel: 3, // 1-5 scale: 1=minimal, 5=refined motion
    nonNegotiables: [] as string[], // Visual must-haves
    avoid: [] as string[], // Visual must-avoids
  },

  industry: {
    sector: "", // TODO: e.g., "HVAC", "Mechanical Contracting", "Industrial Services"
    services: [] as string[], // TODO: Core service offerings
    serviceArea: "", // TODO: Geographic coverage
  },
} as const;
