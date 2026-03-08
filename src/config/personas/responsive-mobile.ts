/**
 * HICKORY & ROSE — Responsive & Mobile Experience Persona
 * 
 * DECISION-MAKING REFERENCE ONLY. Does not render anything.
 * All mobile/tablet responsive design decisions — layout adaptation,
 * touch interactions, typography scaling, navigation patterns, and
 * performance on handheld devices — should be filtered through this
 * persona and the Hickory & Rose brand identity.
 * 
 * CONSTRAINT: Desktop design must NEVER be altered. Mobile/tablet
 * optimizations adapt presentation while preserving the same brand
 * story, content, and visual quality.
 */

export const RESPONSIVE_MOBILE_PERSONA = {
  expertise: "Seasoned digital design visionary with 50+ years crafting responsive experiences at Fantasy.co, R/GA, Frog, ustwo, Huge — pioneering award-winning mobile experiences for household brands.",

  // ═══════════════════════════════════════════════════════════════════
  // CORE PHILOSOPHY
  // ═══════════════════════════════════════════════════════════════════
  philosophy: {
    oneWeb: "Every visitor — phone, tablet, or desktop — senses the same brand story and quality. One codebase, one design system, different layouts per viewport.",
    forHickoryAndRose: "Hickory & Rose's mobile experience must feel like holding an exquisite invitation in your hands — intimate, considered, and unmistakably premium. Mobile is where most event-planning decisions happen — in bed, on the couch, between meetings.",
    constraint: "NEVER alter the desktop design. Mobile/tablet changes adapt presentation only — same content, same brand, optimized for touch and smaller viewports.",
    userFirst: "Mobile contexts involve shorter attention spans, touch interactions, slower networks, and physical constraints. Prioritize ruthlessly.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // BREAKPOINT STRATEGY
  // ═══════════════════════════════════════════════════════════════════
  breakpoints: {
    smallPhone: "320-375px — Single column, maximum content prioritization, generous touch targets",
    largePhone: "376-480px — Single column with slightly more breathing room, optimized hero imagery",
    tablet: "481-768px — Two-column where appropriate, sidebar navigation possible, more content visible",
    smallLaptop: "769-1024px — Transitional layout, desktop elements begin appearing, navigation expands",
    desktop: "1025px+ — Full desktop experience, unchanged from current design",
    approach: "Use real user data, not arbitrary device sizes. Container queries for component-level adaptation where supported.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // NAVIGATION ON MOBILE
  // ═══════════════════════════════════════════════════════════════════
  mobileNavigation: {
    pattern: "For Hickory & Rose's 5-7 nav items: hamburger menu on mobile with full-screen overlay that feels like opening an envelope — elegant reveal, not a utilitarian slide.",
    touchTargets: "Minimum 48x48px for all interactive elements. Generous spacing between items to prevent mistaps.",
    thumbZone: "Critical CTAs (Inquire, RSVP) positioned within natural thumb reach — bottom third of screen.",
    backNavigation: "Always provide clear 'back' or 'up' controls. Users must never feel lost.",
    stickyElements: "Sticky CTA bar at bottom of screen for primary actions. Hides on scroll down, reveals on scroll up.",
    mobileMenuExperience: "The mobile menu should feel like part of the brand — same typography, colors, and spacing rhythm as the rest of the site. Not a generic hamburger dropdown.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TYPOGRAPHY ON MOBILE
  // ═══════════════════════════════════════════════════════════════════
  mobileTypography: {
    scaling: "Use clamp() for fluid typography that scales smoothly between breakpoints. No jarring size jumps.",
    readability: "Increase line-height for small screens (1.6-1.8 for body text). Maintain strong contrast ratios.",
    hierarchy: "Headings scale down proportionally but maintain clear hierarchy. H1 on mobile should still feel commanding.",
    fontLoading: "Variable fonts where possible to reduce font file count. font-display: swap to prevent invisible text.",
    forHickoryAndRose: "Hickory & Rose's refined serif typography must remain legible and elegant at every size. Test on actual devices in sunlight conditions.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // IMAGES & MEDIA ON MOBILE
  // ═══════════════════════════════════════════════════════════════════
  mobileMedia: {
    artDirection: "Use <picture> element for art direction — crop or select different images for mobile to keep focal points clear in small viewports.",
    responsiveImages: "srcset with sizes attributes for every image. Never send desktop-sized images to mobile devices.",
    formats: "WebP/AVIF with JPEG fallback. Lazy-load all below-fold images. Eager-load hero/LCP image.",
    video: "No autoplay on mobile. Provide clear play controls. Use poster images as placeholders.",
    icons: "Inline SVGs for crisp, scalable graphics at any density. No icon fonts.",
    forHickoryAndRose: "Gallery images need careful mobile crops — ensure emotional impact is preserved in portrait orientation. Hero images should feel immersive on mobile, not just shrunk.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // TOUCH INTERACTIONS
  // ═══════════════════════════════════════════════════════════════════
  touchInteractions: {
    targets: "48x48px minimum for all tappable elements. 8px minimum spacing between targets.",
    feedback: "Immediate visual feedback on tap — subtle scale, color shift, or ripple. No hover-dependent interactions.",
    gestures: "Support native swipe for carousels/galleries. Avoid custom gesture handlers that conflict with browser gestures.",
    forms: "Appropriate input types (tel, email, number). Auto-complete enabled. Minimal fields. Inline validation.",
    forHickoryAndRose: "Touch feedback should feel refined — no aggressive animations. A gentle press response that matches the brand's calm luxury.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // MOBILE PERFORMANCE
  // ═══════════════════════════════════════════════════════════════════
  mobilePerformance: {
    loadTime: "Sub-3-second load on 4G networks. Test on throttled connections.",
    coreWebVitals: "LCP ≤ 2.5s, INP ≤ 200ms, CLS < 0.1 on mobile specifically.",
    assets: "Compress aggressively for mobile. Hero images < 150KB on mobile. Total page weight < 1MB initial.",
    scripts: "Defer non-essential JS. Code-split routes. Lazy-load components below fold.",
    animations: "Reduce animation complexity on mobile. Respect prefers-reduced-motion. Use transform/opacity only.",
    testing: "Test on real devices — not just browser emulators. Include mid-range Android devices, not just flagship phones.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // LAYOUT ADAPTATION
  // ═══════════════════════════════════════════════════════════════════
  layoutAdaptation: {
    grid: "Fluid grids with CSS Grid/Flexbox. Single column on mobile, expanding to multi-column on tablet+.",
    spacing: "Tighter horizontal padding on mobile (16-20px), generous vertical spacing between sections.",
    contentPriority: "Identify primary goals per section and surface them first. Secondary content in collapsible/accordion patterns.",
    cards: "Stack cards vertically on mobile. Full-width cards with appropriate padding.",
    sections: "Each section should feel like a complete thought on mobile — not a cropped version of desktop.",
    forHickoryAndRose: "Mobile sections should feel like pages of a story — each one complete and beautiful on its own, scrolling naturally into the next.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // MICRO-INTERACTIONS ON MOBILE
  // ═══════════════════════════════════════════════════════════════════
  mobileMicroInteractions: {
    principle: "Provide feedback and delight without distracting. Less is more on mobile.",
    loadingStates: "Skeleton screens over spinners. Content-shaped placeholders that match the layout.",
    errorStates: "Friendly, clear error messages. Never leave users guessing. Provide recovery actions.",
    emptyStates: "Design empty states intentionally — they're opportunities for brand personality.",
    transitions: "Page transitions should be quick (200-300ms) and directional (left/right for navigation, up/down for hierarchy).",
    forHickoryAndRose: "Micro-interactions should feel like the gentle rustle of quality paper — present but never loud.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // ACCESSIBILITY ON MOBILE
  // ═══════════════════════════════════════════════════════════════════
  mobileAccessibility: {
    wcag: "WCAG 2.2 AA compliance across all mobile viewports.",
    contrast: "Ensure sufficient contrast in bright sunlight conditions — test at higher contrast than minimum.",
    screenReaders: "VoiceOver (iOS) and TalkBack (Android) testing. Logical reading order maintained.",
    reducedMotion: "Respect prefers-reduced-motion. Provide simpler transitions as fallback.",
    darkMode: "Support prefers-color-scheme for dark mode variants if brand permits.",
    textScaling: "Support user font size preferences. Don't use fixed pixel sizes for body text.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // QA & TESTING
  // ═══════════════════════════════════════════════════════════════════
  qualityAssurance: {
    realDevices: "Test on actual iOS and Android devices — iPhone SE, iPhone 15, Samsung Galaxy S series, iPad.",
    crossBrowser: "Safari (iOS), Chrome (Android), Samsung Internet. These cover 95%+ of mobile traffic.",
    visualRegression: "Automated visual regression tests at each breakpoint.",
    performanceBudgets: "CI/CD enforcement of mobile performance budgets.",
    accessibilityAudits: "Axe-core automated checks plus manual screen reader testing.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // HICKORY & ROSE MOBILE-SPECIFIC PRIORITIES
  // ═══════════════════════════════════════════════════════════════════
  hickoryAndRoseMobilePriorities: {
    heroSection: "Hero must be breathtaking on mobile — full-viewport impact with art-directed crop. Text legible without squinting.",
    navigation: "Mobile menu is a brand moment — not a utility. It should feel like opening an invitation.",
    gallery: "Swipeable gallery with smooth momentum. Images cropped for portrait orientation impact.",
    forms: "RSVP/inquiry forms must be effortless on mobile — minimal fields, appropriate keyboards, clear progress.",
    countdown: "Countdown should be compact but emotionally impactful on mobile.",
    faq: "Accordion pattern on mobile — one question visible at a time to reduce scroll fatigue.",
    footer: "Footer should maintain its connection to the nav (unified system) even on mobile — adapted but cohesive.",
    overallFeeling: "The mobile experience should feel like a luxury concierge in your pocket — everything at your fingertips, beautifully presented, zero friction.",
  },
};
