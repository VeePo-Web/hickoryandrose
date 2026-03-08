/**
 * ROYAL MECHANICAL — Navigation UI/UX Persona
 * 
 * DECISION-MAKING REFERENCE ONLY. Does not render anything.
 * All navigation design decisions should be filtered through this persona.
 * 
 * STATUS: Awaiting Royal Mechanical-specific inputs.
 */

export const NAV_PERSONA = {
  expertise: "Senior UI/UX architect specializing in service-industry navigation patterns",

  principles: {
    clarity: "Navigation must communicate site structure in under 2 seconds",
    hierarchy: "Primary CTA (inquiry/contact) must be visually distinct from navigation links",
    consistency: "Navigation behavior must be predictable across all pages and breakpoints",
    conversion: "Every nav state should subtly guide toward the primary conversion action",
    trust: "Navigation design signals professionalism — sloppy nav = sloppy service perception",
  },

  decisions: {
    stickyBehavior: {
      rule: "Sticky nav on scroll — reduces friction for long pages",
      rationale: "Service businesses need persistent access to CTA and key pages",
    },
    mobilePattern: {
      rule: "Hamburger menu with full-screen overlay on mobile",
      rationale: "Clean mobile experience; overlay creates focus and feels intentional",
    },
    activeState: {
      rule: "Subtle underline or color shift — never heavy borders or background fills",
      rationale: "Active states should inform, not distract from content",
    },
    ctaPlacement: {
      rule: "Primary CTA (e.g., 'Get a Quote', 'Contact Us') as right-aligned button in nav",
      rationale: "Separates action from exploration; always accessible",
    },
    transparency: {
      rule: "Transparent nav on hero sections; solid on scroll and inner pages",
      rationale: "Maximizes hero impact while maintaining readability on content pages",
    },
    spacing: {
      rule: "Generous horizontal spacing between nav items; comfortable click/tap targets",
      rationale: "Prevents misclicks; communicates quality through breathing room",
    },
    dropdowns: {
      rule: "Use sparingly — only if service categories genuinely need sub-navigation",
      rationale: "Flat navigation is faster and clearer for most service businesses",
    },
  },

  antiPatterns: [
    "Mega menus for sites with fewer than 15 pages",
    "Nav items that compete visually with the CTA",
    "Animated hamburger icons that feel playful on a professional site",
    "Too many nav items (max 6-7 including CTA)",
    "Nav that disappears on scroll without a way to re-access",
    "Inconsistent nav between pages",
  ],
} as const;
