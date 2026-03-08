/**
 * ROYAL MECHANICAL — Style Guide Reference
 * 
 * This file is a DECISION-MAKING REFERENCE ONLY. It does not render anything.
 * Populated from the Royal Mechanical style guide once provided.
 * 
 * STATUS: Awaiting Royal Mechanical style guide document.
 */

export const STYLE_GUIDE = {
  // TODO: Populate from Royal Mechanical style guide
  colors: {
    primary: { hex: "", hsl: "", usage: "" },
    secondary: { hex: "", hsl: "", usage: "" },
    accent: { hex: "", hsl: "", usage: "" },
    neutral: { hex: "", hsl: "", usage: "" },
  },

  typography: {
    headingFont: { name: "", weights: [] as string[], usage: "" },
    bodyFont: { name: "", weights: [] as string[], usage: "" },
    sizeScale: {} as Record<string, string>,
  },

  logo: {
    primary: "", // Path to primary logo
    alternate: "", // Path to alternate logo
    icon: "", // Path to icon/favicon
    clearSpace: "", // Minimum clear space rules
    minSize: "", // Minimum size rules
    doNots: [] as string[], // Logo usage restrictions
  },

  spacing: {
    philosophy: "", // e.g., "generous whitespace", "dense and efficient"
    sectionPadding: "",
    componentGap: "",
  },

  imagery: {
    style: [] as string[], // e.g., ["professional", "on-site", "equipment-forward"]
    avoid: [] as string[], // e.g., ["stock photos", "clip art"]
    aspectRatios: {} as Record<string, string>,
  },

  components: {
    buttonStyle: "", // e.g., "solid with slight radius", "sharp corners"
    cardStyle: "", // e.g., "subtle shadow", "bordered"
    inputStyle: "", // e.g., "underline", "bordered"
  },
} as const;
