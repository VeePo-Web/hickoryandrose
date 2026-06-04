/**
 * HICKORY & ROSE — Brand Identity Reference
 *
 * This file is a DECISION-MAKING REFERENCE ONLY. It does not render anything.
 * All UI/UX decisions (navigation, footer, visuals, layout, copy, interactions)
 * should be filtered through these brand constants.
 *
 * STATUS: Updated from owner questionnaire responses.
 * Items marked TBC are still awaiting owner input.
 */

export const BRAND_IDENTITY = {
  name: {
    full: "Hickory & Rose Wedding and Event Planning",
    short: "Hickory & Rose",
    monogram: "H&R", // decorative watermark only — never used as a readable label
    tagline: "Seamless, stress-free execution. Luxury, personalized planning. Thoughtfully bringing your vision to life.",
  },

  positioning: {
    oneSentence:
      "Hickory & Rose is an Edmonton-based wedding and event planning studio guiding refined couples through seamless, stress-free celebrations with calm leadership and thoughtful design.",
    namedPromise:
      "Hickory & Rose exists to protect the beauty, intention, and experience behind every celebration.",
    positioningOptions: [
      "Seamless, stress-free execution",
      "Luxury, personalized planning",
      "Thoughtfully bringing your vision to life",
    ],
    differentiators: [
      "Seamless, elegant wedding planning",
      "Friendly, caring planning and coordination",
      "Calm leadership under pressure",
      "Thoughtful preparation that anticipates challenges",
      "Trusted vendor collaboration as a team",
    ],
    knownFor:
      "Seamless, elegant wedding planning paired with friendly, caring coordination.",
    refinedRusticEleganceIs:
      "The harmony of natural beauty, thoughtful design, and elevated details that feel both effortless and timeless.",
    refinedRusticEleganceIsNot:
      "Not rustic-country, not barnyard, not boho-casual. Never cluttered, themed, or kitsch. Never cold or clinical minimalism.",
  },

  voice: {
    tone: ["luxury", "friendly", "caring", "seamless", "calming"],
    boundaries: [
      "Never pushy or sales-y",
      "Never casual to the point of unprofessional",
      "Never cold, clinical, or corporate",
      "Never trend-chasing or buzzword-heavy",
      "Never minimize the couple's vision or feelings",
    ],
    repeatWords: [
      "seamless",
      "calm",
      "thoughtful",
      "intentional",
      "elevated",
      "presence",
      "personalized",
    ],
    avoidWords: [
      "rustic (without 'refined' modifier)",
      "barn",
      "boho",
      "cheap",
      "budget",
      "DIY",
      "chaos",
      "drama",
      "girl boss",
      "babe",
      "obsessed",
      "literally",
      "vibes",
    ],
    manifesto: [
      "We believe every celebration deserves presence.",
      "We believe calm is a form of luxury.",
      "We believe the most beautiful weddings feel inevitable — never forced.",
      "We believe in protecting the joy, not just the timeline.",
      "We believe in showing up, fully, so you can too.",
    ].join("\n"),
    personaIfGuest:
      "The trusted older sister who happens to be exquisitely organized. Calm, warm, never flustered. Quietly fixes problems before anyone notices. Genuinely delighted to be there. Knows when to step in and when to step back.",
  },

  visual: {
    palette: {
      primary: "", // TBC
      secondary: "",
      accent: "",
      background: "",
      text: "",
    },
    typography: {
      display: "",
      body: "",
      accent: "",
    },
    photographyStyle: ["warm", "true-to-life", "editorial", "polished", "candid documentary", "detail-forward"],
    motionLevel: 3, // From 9.14 — owner answered 3
    nonNegotiables: [], // TBC — Section 9.4
    avoid: [], // TBC — Section 9.5
    balance: {
      modernVsTimeless: 3, // From 9.6
      warmthVsMinimalism: 4, // From 9.7
    },
  },

  industry: {
    sector: "Wedding and Event Planning",
    services: [
      "Day-of coordination",
      "Partial planning",
      "Full-service planning",
      "Tailored planning options",
      "Event planning (non-wedding)",
    ],
    serviceArea:
      "Edmonton-based, serving surrounding areas within Alberta. Travel fees apply outside Greater Edmonton.",
    terminology: {
      preferDayOf: "Day-of coordination", // From 8.2
    },
  },

  idealClient: {
    archetype: "Polished Paige",
    description:
      "Design-forward, detail-driven, strong taste, wants calm leadership without losing creative involvement.",
    pressures: [
      "Pressure to deliver a wedding that lives up to her own design taste",
      "Pressure from family expectations and competing opinions",
      "Pressure of a demanding career — limited time and mental bandwidth",
      "Fear of losing creative control to a planner with a different aesthetic",
      "Fear of the day feeling rushed, chaotic, or not 'them'",
      "Fear of being the one fielding vendor questions on the day",
    ],
    firstFiveSeconds:
      "Calm, elevated, immediately understood. A single beautiful image. A confident, quiet headline. No noise, no popups, no 'book now' pressure. She should feel her shoulders drop before she reads a word.",
    firstThirtySeconds:
      "Galleries that show real weddings. Professionalism in every detail. Clarity about what we do and how we work.",
    byInquiry: "Understanding. Excitement. Confidence.",
    weddingFeelForCouple: ["dream vision", "love", "comfort", "luxury", "calm"], // From 4.1
    weddingFeelForGuests: ["structured", "smooth", "calm", "love", "enjoyable"], // From 4.2
  },

  credibility: {
    // From Section 5.5
    signals: [
      "Styled shoot — August 15, 2026",
      "Summer 2026 season — fully booked",
      "Fall 2026 season — fully booked",
      "Growing vendor referral network",
    ],
  },

  capacity: {
    // From 3.25 — owner intends two-person team standard for 2027
    twoPersonTeamFrom2027: true,
  },
} as const;
