

# Text Readability Audit — Phase 2: Remaining ~40 Components

## Scope

Continue fixing undersized text (below 13px) and low-contrast opacity modifiers across all remaining files not touched in Phase 1.

## Files and Fixes

### Batch 1: Core UI Components (6 files)

**`LoadingScreen.tsx`** — Lines 283, 294, 305, 319: Replace `text-[0.45rem]`, `text-[0.5rem]`, `text-[0.6rem]`, `text-[0.4rem]` with `text-caption`. Replace `text-background/10`, `text-background/15`, `text-background/8`, `text-background/6` with `text-background/50` minimum. Note: loading screen text is on dark `bg-foreground`, so "background" color on dark = light text. Low opacity here means near-invisible functional text like "Hickory & Rose" and "Edmonton · Alberta".

**`Navigation.tsx`** — Line 150: Replace `text-[0.55rem]` with `text-caption`, replace `text-muted-foreground/40` with `text-muted-foreground`.

**`NavigationMobileMenu.tsx`** — Lines 126, 167, 180, 183: Replace `text-[0.5rem]`, `text-[0.65rem]`, `text-[0.625rem]`, `text-[0.5rem]` with `text-caption`. Replace `text-muted-foreground/20` with `text-muted-foreground`, `text-muted-foreground/15` with `text-muted-foreground/60`, `text-muted-foreground/50` stays OK.

**`BackToTop.tsx`** — Line 100: Replace `text-[0.5rem]` with `text-caption`, replace `text-foreground/40` with `text-muted-foreground`.

**`SectionIndicator.tsx`** — Lines 103, 112, 116: Replace `text-[0.5rem]` and `text-[0.4rem]` with `text-caption`. Replace `text-muted-foreground/20`, `/15`, `/10` with `text-muted-foreground/60` minimum (these are functional section labels).

**`HeroSidebars.tsx`** — Lines 28, 50, 70: Replace `text-[0.45rem]`, `text-[0.4rem]`, `text-[0.6rem]` with `text-caption`. Replace `text-white/20`, `text-white/15`, `text-white/25` with `text-white/60`.

### Batch 2: Section Components (8 files)

**`HeroFloatingInset.tsx`** — Lines 65, 78: Replace `text-[0.6rem]` and `text-[0.5rem]` with `text-caption`. Replace `text-white/30` with `text-white/60`.

**`FilmstripSection.tsx`** — Lines 107, 109, 113, 194, 200, 208, 230, 234, 275, 283, 298, 309: Replace all `text-[0.5rem]`, `text-[0.55rem]`, `text-[0.45rem]` with `text-caption`. Replace `text-primary/20` with `text-primary/60`, `text-muted-foreground/40` with `text-muted-foreground`, `text-muted-foreground/20` with `text-muted-foreground/60`, `text-muted-foreground/15` with `text-muted-foreground/60`, `text-white/40` and `text-white/50` with `text-white/70`, `text-white/30` with `text-white/60`, `text-primary/15` with `text-primary/60`.

**`CTASection.tsx`** — Lines 162, 165, 184, 233, 255: Replace `text-[0.5rem]`, `text-[0.55rem]` with `text-caption`. Replace `text-white/20` with `text-white/60`, `text-white/25` with `text-white/60`, `text-white/15` with `text-white/60`.

**`TestimonialSection.tsx`** — Lines 207, 242, 281, 284, 285, 304, 307, 318: Replace `text-[0.55rem]`, `text-[0.5rem]`, `text-[0.6rem]` with `text-caption`. Replace `text-muted-foreground/40` with `text-muted-foreground`, `text-muted-foreground/25` with `text-muted-foreground/60`, `text-white/50` with `text-white/70`, `text-primary/40` with `text-primary/60`.

**`InstagramSection.tsx`** — Lines 83, 119, 213, 281, 285, 307, 324, 340: Replace `text-[0.55rem]`, `text-[0.5rem]`, `text-[0.6rem]`, `text-[0.45rem]`, `text-[0.4rem]` with `text-caption`. Replace `text-muted-foreground/35` with `text-muted-foreground`, `text-muted-foreground/20` with `text-muted-foreground/60`, `text-white/40` with `text-white/70`, `text-white/35` with `text-white/60`, `text-white/15` with `text-white/50`, `text-white/20` with `text-white/60`.

**`FounderTeaserSection.tsx`** — Lines 189, 205, 250, 277, 326, 352: Replace `text-[0.5rem]`, `text-[0.55rem]` with `text-caption`. Replace `text-white/40` with `text-white/60`, `text-muted-foreground/40` with `text-muted-foreground`, `text-muted-foreground/30` with `text-muted-foreground/60`, `text-muted-foreground/20` with `text-muted-foreground/60`, `text-primary/40` with `text-primary/60`.

**`ProcessTeaserSection.tsx`** — Lines 126, 143, 250, 301: Replace `text-[0.55rem]`, `text-[0.5rem]` with `text-caption`. Replace `text-muted-foreground/20` with `text-muted-foreground/60`, `text-primary/35` with `text-primary/60`.

**`NowBookingSection.tsx`** — Lines 133, 185, 213, 249, 256: Replace `text-[0.55rem]`, `text-[0.65rem]`, `text-[0.5rem]` with `text-caption`. Replace `text-primary-foreground/20` with `text-primary-foreground/50`, `text-primary-foreground/10` with `text-primary-foreground/50`, `text-primary-foreground/15` with `text-primary-foreground/50`.

### Batch 3: More Section Components (6 files)

**`PreFooterDivider.tsx`** — Lines 139, 161: Replace `text-[0.6rem]`, `text-[0.55rem]` with `text-caption`. Replace `text-muted-foreground/25` with `text-muted-foreground/60`.

**`EditorialQuoteRibbon.tsx`** — Search for undersized text and low opacity.

**`EditorialSplitSection.tsx`** — Already partially fixed; verify remaining instances.

**`JournalArticleCard.tsx`**, **`JournalFeatured.tsx`**, **`JournalTeaserSection.tsx`** — Fix any `text-[0.5rem]`/`text-[0.55rem]` and low-contrast patterns.

### Batch 4: Page-Level Files (7 files)

**`Approach.tsx`** — Heavy concentration: lines 47, 72, 80, 211, 225, 273, 518, 520, 602, 609. Replace all `text-[0.4rem]`, `text-[0.45rem]`, `text-[0.5rem]` with `text-caption`. Replace `text-muted-foreground/30`, `text-muted-foreground/25`, `text-primary/25`, `text-primary-foreground/20`, `text-primary-foreground/30`, `text-white/25`, `text-white/30` with higher contrast values.

**`Portfolio.tsx`** — Lines 79, 117 and similar. Same pattern fixes.

**`Services.tsx`**, **`About.tsx`**, **`FAQ.tsx`**, **`Inquire.tsx`**, **`NotFound.tsx`** — Search and fix all instances of undersized text and low opacity.

### Batch 5: Remaining Wedding Components

**`AboutFounderSection.tsx`**, **`AboutProcessRibbon.tsx`**, **`AboutPromises.tsx`**, **`AboutTestimonials.tsx`**, **`AboutValuesGrid.tsx`**, **`ApproachProcessTimeline.tsx`**, **`ApproachStatsRibbon.tsx`**, **`ApproachDifferentiators.tsx`**, **`FAQSection.tsx`**, **`FAQImageMosaic.tsx`**, **`ServiceTierCard.tsx`**, **`ServiceComparison.tsx`**, **`ServicesInvestmentPhilosophy.tsx`**, **`ServicesOverviewSection.tsx`**, **`ServicesVendorPartners.tsx`**, **`PortfolioFeaturedStory.tsx`**, **`PortfolioMasonryGrid.tsx`**, **`VendorShowcaseSection.tsx`**, **`FooterNewsletter.tsx`** — Apply same rules.

## Rules Applied Consistently

1. **Size floor**: All `text-[0.4rem]` through `text-[0.6rem]` become `text-caption` (now 13px after Phase 1 token update)
2. **Contrast floor for functional text**: Opacity modifiers below `/50` on `text-muted-foreground`, `text-foreground`, `text-primary`, `text-primary-foreground`, `text-white` are bumped to `/60` minimum
3. **Exceptions preserved**: Large watermark text (`text-6xl`+) with `pointer-events-none` keeps low opacity as purely decorative

