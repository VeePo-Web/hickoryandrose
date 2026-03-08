/**
 * ROYAL MECHANICAL — Website Discovery Framework
 * 
 * This file is a DECISION-MAKING REFERENCE ONLY. It does not render anything.
 * It encodes the depth of thinking behind every website decision —
 * from positioning and client psychology to conversion architecture.
 * 
 * Adapted from a comprehensive discovery methodology. All industry-specific
 * references have been generalized for Royal Mechanical's context.
 * 
 * HOW TO USE:
 * - When making UI/UX decisions, reference the relevant section
 * - Each section maps to a functional area of the website
 * - The "decisionCriteria" in each section guide implementation choices
 */

export const DISCOVERY_FRAMEWORK = {

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 1: IDENTITY, POSITIONING, AND THE NAMED PROMISE
  // Guides: Homepage hero, taglines, meta descriptions, about page
  // ═══════════════════════════════════════════════════════════════════
  identity: {
    purpose: "Define what Royal Mechanical communicates in every pixel",
    decisionCriteria: {
      brandName: "Use exact brand name consistently — never abbreviate without intent",
      positioningLine: "One sentence that anchors homepage and SEO. Must pass the 'say it to a stranger' test",
      namedPromise: "What Royal Mechanical exists to protect/deliver — this drives every CTA",
      coreValues: "6-12 words that must describe Royal Mechanical online — these filter every design choice",
      differentiators: "The reasons Royal Mechanical is the obvious choice — these become proof sections",
    },
    voiceGuidance: {
      purpose: "Voice defines how every word on the site sounds",
      toneDirection: "Confident authority with approachable professionalism",
      boundaries: "What the website voice should NEVER do (e.g., overpromise, use jargon without context, be snarky)",
      reinforcementWords: "Words repeated across the site to strengthen identity",
      prohibitedWords: "Words that dilute or misrepresent the brand",
    },
    brandPersona: {
      purpose: "If Royal Mechanical were a person, how would they show up?",
      behavioralCues: "Leadership style, communication style, professionalism signals",
      manifesto: "What Royal Mechanical believes the industry deserves. What it refuses to compromise on.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 2: IDEAL CLIENT PROFILE
  // Guides: Copy tone, imagery selection, objection handling, CTA language
  // ═══════════════════════════════════════════════════════════════════
  idealClient: {
    purpose: "Every design and copy decision should attract THIS person and filter out misfits",
    decisionCriteria: {
      clientDescription: "Who is the ideal client? Their values, priorities, decision-making style",
      clientContext: "Their life/work outside this purchase — decision fatigue, time pressure, stakes",
      fears: "What they're afraid will happen if they choose wrong — drives reassurance messaging",
      desires: "What they're most excited about — drives aspiration messaging",
      pressures: [
        "Loss aversion — they'll remember mistakes",
        "Social/professional evaluation — others will judge the result",
        "Decision fatigue — too many options",
        "Control paradox — wants involvement without operational burden",
        "Budget ambiguity — hidden costs create distrust",
        "Vendor uncertainty — who's actually qualified?",
        "Timeline stress — how does the process work?",
      ],
    },
    firstImpressions: {
      fiveSeconds: "What they need to HEAR in the first 5 seconds on the homepage to stay",
      thirtySeconds: "What they need to SEE in the first 30 seconds to trust (proof elements)",
      byInquiry: "What they need to FEEL by the time they hit the CTA (relief, clarity, confidence)",
    },
    objections: {
      purpose: "Address these gently throughout the site — not on a single FAQ page",
      common: [] as string[], // TODO: Populate with Royal Mechanical's common objections
    },
    misfitProfile: {
      purpose: "Messaging should gently filter these out without being exclusionary",
      signals: "Style mismatch, communication mismatch, expectations mismatch, budget mismatch",
    },
    qualificationSignals: {
      greenFlags: "What ideal clients say/ask/value that reveals fit",
      redFlags: "What reveals it won't be a fit",
      bestQualifyingQuestion: "Single inquiry form question that reveals fit instantly",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 3: SERVICES AND PROCESS
  // Guides: Services page structure, pricing display, process visualization
  // ═══════════════════════════════════════════════════════════════════
  services: {
    purpose: "Eliminate confusion, create confidence, set expectations, justify investment",
    decisionCriteria: {
      serviceClarity: "Each service must be understood in 10 seconds — what it includes and why it matters",
      scopeBoundaries: "What each service explicitly does NOT include — prevents scope creep messaging",
      rightMoment: "When/why someone chooses each service level — drives self-qualification",
      processVisibility: "End-to-end process from first contact to delivery — builds trust through transparency",
      pricingStrategy: "Public vs private pricing, expectation-setting language, investment justification",
    },
    experienceDesign: {
      purpose: "The service experience itself is a trust signal",
      collaboration: "How clients stay involved without carrying operational weight",
      communication: "Response time standards, update cadence, decision-making process",
      qualityStandards: "Non-negotiable execution details that define the brand",
      contingencyMindset: "How Royal Mechanical handles the unexpected — builds confidence",
    },
    capacity: {
      purpose: "Scarcity and quality signals",
      constraints: "Limited capacity messaging — creates urgency and signals quality",
      boundaries: "Scope, timeline, and communication boundaries that protect quality",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 4: EXPERIENCE ENGINEERING
  // Guides: Micro-interactions, page transitions, content pacing, UX flow
  // ═══════════════════════════════════════════════════════════════════
  experience: {
    purpose: "The website itself must FEEL like the service experience",
    decisionCriteria: {
      emotionalArc: "What should the entire website journey feel like? (3-5 words)",
      clientFeeling: "What should clients feel at each stage of interaction?",
      guestExperience: "How do end-users/stakeholders experience the result of Royal Mechanical's work?",
    },
    microMoments: {
      purpose: "Small details that create outsized trust and delight",
      protect: [] as string[], // Moments to protect/highlight
      prevent: [] as string[], // Experience failures to prevent
    },
    standards: {
      purpose: "Non-negotiable execution details reflected in website quality",
      items: [] as string[], // e.g., timeline discipline, communication clarity, precision
    },
    riskRemoval: {
      purpose: "The single biggest risk Royal Mechanical removes for clients",
      primaryRisk: "", // TODO: What clients fear most that RM solves
      proofMethod: "How to prove this risk removal on the website",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 5: BRAND STORY AND TRUST SIGNALS
  // Guides: About page, testimonials placement, credibility architecture
  // ═══════════════════════════════════════════════════════════════════
  brandStory: {
    purpose: "Trust is built through proof, not claims",
    decisionCriteria: {
      founderStory: "Why this work, why now, why Royal Mechanical — told as a consult conversation",
      personality: "How Royal Mechanical shows up in client relationships",
      onlinePresence: "What parts of personality must show online and HOW (language, structure, spacing, tone)",
      assumptions: "What should never be assumed — must be made explicit on the site",
    },
    credibility: {
      existingSignals: [] as string[], // e.g., reviews, portfolios, certifications, years of experience
      heroProofs: "Top 5-10 testimonials that mention key differentiators",
      provableClaims: [] as string[], // 10 specific claims the site must be able to prove
      missingProof: "What social proof would elevate the brand instantly if obtained",
    },
    partnerships: {
      purpose: "Association with quality partners builds trust by proxy",
      featuredPartners: [] as string[], // Vendors/partners to credit/feature
      venues: [] as string[], // Locations/venues to associate with
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 6: PORTFOLIO / PROOF SYSTEM
  // Guides: Gallery design, case study structure, filtering, proof hierarchy
  // ═══════════════════════════════════════════════════════════════════
  portfolio: {
    purpose: "The portfolio is the website's most important sales engine",
    decisionCriteria: {
      curationRule: "What makes a project worthy of being featured?",
      tenSecondProof: "What should the portfolio prove in 10 seconds?",
      organization: "How should portfolio be organized? (individual stories, grid, both)",
      filterTags: [] as string[], // e.g., service type, industry, scale, location
    },
    storyElements: {
      purpose: "Each featured project should include these written elements",
      elements: [
        "Client context/challenge",
        "Scope of work",
        "Solution approach",
        "Results/outcomes",
        "Client testimonial",
        "Key metrics/proof points",
      ],
    },
    imageStrategy: {
      editingStyle: "", // e.g., "professional, true-to-life, clean"
      behindTheScenes: "Images showing process, expertise, leadership in action",
      creditFormat: "", // How partners/subcontractors are credited
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 7: WEBSITE STRATEGY AND CONVERSION ARCHITECTURE
  // Guides: Page structure, navigation, CTA placement, conversion flow
  // ═══════════════════════════════════════════════════════════════════
  websiteStrategy: {
    purpose: "Turn visitors into qualified leads with minimal friction",
    decisionCriteria: {
      primaryAction: "The ONE action every page should drive toward",
      secondaryActions: [] as string[], // Supporting actions
      instagramGap: "What the website must do that social media cannot",
      homepageTruth: "What must be true in the visitor's mind by end of homepage",
    },
    navigation: {
      pages: [] as string[], // TODO: Core pages for Royal Mechanical
      topMenu: "", // Main navigation items
      criticalPath: "If someone only reads 3 pages before inquiring, which 3?",
    },
    homepage: {
      aboveTheFold: "Named promise + supporting line + CTA + proof snippet + location cue",
      storyArc: "Reassurance → proof → process → services → reviews → CTA",
      trustSignals: "3 most important trust signals to show early",
    },
    servicesPage: {
      purpose: "Eliminate confusion, create confidence, set expectations, justify investment",
      betterThan: "What this page should do better than competitor sites",
    },
    inquiryPage: {
      emotionalTone: "What should the inquiry page feel like? (relief, professionalism, warmth, clarity)",
      formFields: [] as string[], // Fields that qualify leads
      responseExpectation: "", // e.g., "Replies within 24-48 business hours"
    },
    leadMagnet: {
      enabled: false, // TODO: Does Royal Mechanical want a downloadable resource?
      options: [] as string[], // Potential lead magnet ideas
    },
    ctaLanguage: {
      primary: "", // TODO: Primary CTA text
      promise: "", // What the CTA promises
      capacityMessage: "", // Limited availability messaging
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 8: SEO AND CONTENT STRATEGY
  // Guides: Meta tags, page titles, content hierarchy, blog topics
  // ═══════════════════════════════════════════════════════════════════
  seo: {
    purpose: "Rank locally and build topical authority",
    decisionCriteria: {
      localKeywords: [] as string[], // TODO: e.g., "mechanical contractor [city]"
      targetKeywords: [] as string[], // All keywords to win
      contentTopics: [] as string[], // Topics the ideal client searches for
    },
    blog: {
      launchStrategy: "", // "launch with posts", "structure only", "no blog"
      postCount: 0,
      areaGuides: false,
    },
    listings: {
      googleBusiness: "", // Link to Google Business Profile
      directories: [] as string[], // Industry directories
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 9: DESIGN DIRECTION
  // Guides: Every visual decision — typography, color, spacing, motion
  // ═══════════════════════════════════════════════════════════════════
  designDirection: {
    purpose: "Visual execution must match brand promise",
    decisionCriteria: {
      referenceWebsites: {
        like: [] as string[], // URLs of sites that match desired polish
        dislike: [] as string[], // URLs of sites to avoid resembling
      },
      firstFiveSeconds: "What should a visitor FEEL in the first 5 seconds?",
      visualNonNegotiables: [] as string[], // Must-haves
      visualAvoid: [] as string[], // Must-avoids
    },
    balance: {
      modernVsTimeless: 3, // 1=very timeless, 5=very modern
      warmthVsMinimalism: 3, // 1=very minimal, 5=very warm
      typographyDirection: "", // "serif-led", "sans-led", "balanced"
      motionLevel: 3, // 1=minimal, 5=refined motion
    },
    accessibility: {
      preferences: [] as string[], // e.g., "larger text", "high contrast", "minimal animation"
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 10: CONTENT AND ASSETS
  // Guides: Content creation priorities, asset sourcing, launch phasing
  // ═══════════════════════════════════════════════════════════════════
  content: {
    purpose: "Know what exists, what's needed, and what's urgent",
    existingSources: [] as string[], // Where current content lives
    copyStatus: "", // "ready", "rough notes", "needs writing"
    urgentPages: [] as string[], // Pages that need copy most urgently
    launchMustHaves: [] as string[], // Non-negotiables for launch day
    phaseTwo: [] as string[], // Can wait until after launch
    migration: false, // Content from existing site?
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 11: TECHNICAL AND INTEGRATIONS
  // Guides: Platform choices, CRM routing, analytics, embedded tools
  // ═══════════════════════════════════════════════════════════════════
  technical: {
    domain: "", // TODO: Domain name
    brandedEmail: false,
    editableContent: [] as string[], // What must be easy to update without dev
    crm: {
      platform: "", // e.g., "HubSpot", "Salesforce"
      autoRoute: false,
    },
    scheduling: {
      enabled: false,
      tool: "", // e.g., "Calendly"
    },
    email: {
      enabled: false,
      platform: "", // e.g., "Mailchimp"
    },
    analytics: [] as string[], // e.g., "Google Analytics", "Search Console"
    embeddedTools: [] as string[], // Existing scripts/widgets
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 12: LAUNCH AND SUCCESS METRICS
  // Guides: Priority decisions, quality benchmarks, KPI tracking
  // ═══════════════════════════════════════════════════════════════════
  launch: {
    targetDate: "", // TODO: Launch date/window
    hardDeadlines: false,
    decisionMaker: "", // Primary approver
    feedbackTurnaround: "", // e.g., "1-2 days"
    success: {
      thirtyDays: "", // What success looks like at 30 days
      sixMonths: "", // What success looks like at 6-12 months
      kpis: [] as string[], // Key performance indicators
    },
    stopDoing: "", // What the website should help Royal Mechanical stop doing repeatedly
    oneTruth: "", // If the website could only communicate ONE truth, what is it?
  },
} as const;
