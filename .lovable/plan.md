

# Full Text Readability Audit — Fix Low-Contrast & Undersized Text

## Problem Scope

The codebase has two systemic readability issues across 60+ files:

### Issue 1: Text smaller than 13px (0.8125rem)
Hundreds of instances of `text-[0.4rem]`, `text-[0.45rem]`, `text-[0.5rem]`, `text-[0.55rem]`, and `text-[0.6rem]` — these render at 6.4px, 7.2px, 8px, 8.8px, and 9.6px respectively. Even the Tailwind `font-overline` utility is 11px (`0.6875rem`). Many of these are used for functional labels like "Est. 2018", "Full Planning", venue names, stats labels, category badges, and navigation metadata.

**Minimum floor:** 13px = `0.8125rem` = Tailwind `text-xs` (12px is close but we'll use `text-[0.8125rem]` or the existing `text-body-sm` / `text-caption` tokens).

The existing design tokens already define:
- `text-label`: 11px (0.6875rem) — needs bump to 13px
- `text-caption`: 11px (0.6875rem) — needs bump to 13px  
- `text-body-sm`: 13px (0.8125rem) — this becomes the floor

### Issue 2: Low-contrast text (grey on white/light backgrounds)
Pervasive use of opacity modifiers that drop contrast below WCAG AA:
- `text-muted-foreground/20` through `/40` — renders as near-invisible grey
- `text-foreground/40`, `text-foreground/50` — washed out
- `text-primary/20`, `text-primary/25`, `text-primary/30` — barely visible sage
- `text-white/20` through `/35` on dark overlays — ghostly
- `text-primary-foreground/20` through `/30` — invisible on dark sections
- `text-brand-text-decorative` and `text-brand-text-ghost` tokens (3.5:1 and 2.2:1 ratio)

**Minimum contrast:** Functional text must use `text-brand-text-tertiary` (5.1:1) or higher. Decorative/ambient text that is truly non-functional (watermarks, frame numbers) can stay at `text-brand-text-decorative` but must be bumped from ghost-level opacity.

## Implementation Plan

### Step 1: Update design tokens (2 files)

**`tailwind.config.ts`** — Bump `text-label` and `text-caption` font sizes from `0.6875rem` to `0.8125rem` (13px).

**`src/index.css`** — Update `font-overline` utility from `0.6875rem` to `0.8125rem`. Bump `--text-ghost` from 2.2:1 to at least 3.5:1 contrast. Bump `--text-decorative` from 3.5:1 to at least 4.5:1.

### Step 2: Fix undersized text across all components (~55 files)

Replace all arbitrary size classes below 13px:
- `text-[0.4rem]` / `text-[0.45rem]` / `text-[0.5rem]` / `text-[0.55rem]` → `text-caption` (now 13px)
- `text-[0.6rem]` → `text-caption` or `text-body-sm`
- `text-xs` (12px) for functional text → `text-[0.8125rem]`

Files with the heaviest concentration (10+ instances each):
- `src/pages/Approach.tsx`
- `src/pages/Services.tsx`
- `src/pages/Portfolio.tsx`
- `src/pages/About.tsx`
- `src/pages/Inquire.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/NotFound.tsx`
- `src/components/wedding/HeroSection.tsx`
- `src/components/wedding/Footer.tsx`
- `src/components/wedding/GallerySection.tsx`
- `src/components/wedding/TrustBarSection.tsx`
- `src/components/wedding/PreFooterDivider.tsx`
- `src/components/wedding/BrandPromiseSection.tsx`
- `src/components/wedding/BrandManifestoSection.tsx`
- `src/components/wedding/EditorialImageBreak.tsx`
- `src/components/wedding/FilmstripSection.tsx`
- `src/components/wedding/ScrollProgress.tsx`
- `src/components/wedding/LoadingScreen.tsx`
- `src/components/wedding/BackToTop.tsx`
- `src/components/wedding/NavigationMobileMenu.tsx`
- `src/components/wedding/PortfolioFeaturedStory.tsx`
- `src/components/wedding/PortfolioMasonryGrid.tsx`
- `src/components/wedding/ApproachProcessTimeline.tsx`
- `src/components/wedding/ApproachStatsRibbon.tsx`
- `src/components/wedding/ApproachDifferentiators.tsx`
- `src/components/wedding/FAQSection.tsx`
- `src/components/wedding/FAQImageMosaic.tsx`
- `src/components/wedding/FAQTestimonialCarousel.tsx`
- `src/components/wedding/AboutFounderSection.tsx`
- `src/components/wedding/AboutPromises.tsx`
- `src/components/wedding/AboutProcessRibbon.tsx`
- `src/components/wedding/AboutTestimonials.tsx`
- `src/components/wedding/AboutValuesGrid.tsx`
- `src/components/wedding/ServiceTierCard.tsx`
- `src/components/wedding/ServiceComparison.tsx`
- `src/components/wedding/ServicesInvestmentPhilosophy.tsx`
- `src/components/wedding/ServicesOverviewSection.tsx`
- `src/components/wedding/ServicesVendorPartners.tsx`
- `src/components/wedding/CTASection.tsx`
- `src/components/wedding/EditorialQuoteRibbon.tsx`
- `src/components/wedding/EditorialSplitSection.tsx`
- `src/components/wedding/FooterNewsletter.tsx`
- `src/components/wedding/FooterServiceAreas.tsx`
- `src/components/wedding/FounderTeaserSection.tsx`
- `src/components/wedding/HeroFloatingInset.tsx`
- `src/components/wedding/HeroSidebars.tsx`
- `src/components/wedding/InstagramSection.tsx`
- `src/components/wedding/JournalArticleCard.tsx`
- `src/components/wedding/JournalFeatured.tsx`
- `src/components/wedding/JournalTeaserSection.tsx`
- `src/components/wedding/NowBookingSection.tsx`
- `src/components/wedding/ProcessTeaserSection.tsx`
- `src/components/wedding/SectionIndicator.tsx`
- `src/components/wedding/TestimonialSection.tsx`
- `src/components/wedding/VendorShowcaseSection.tsx`

### Step 3: Fix low-contrast opacity text across all components (~30 files)

Replace low-opacity color patterns:
- `text-muted-foreground/20` → `text-muted-foreground` or `text-brand-text-tertiary`
- `text-muted-foreground/25` → `text-muted-foreground`
- `text-muted-foreground/30` → `text-muted-foreground`
- `text-muted-foreground/35` → `text-muted-foreground`
- `text-muted-foreground/40` → `text-muted-foreground`
- `text-foreground/40` → `text-brand-text-tertiary`
- `text-foreground/50` → `text-brand-text-secondary`
- `text-primary/20` through `text-primary/35` → `text-primary/60` minimum
- `text-primary-foreground/20` through `/30` → `text-primary-foreground/60` minimum
- `text-white/20` through `/35` (on dark overlays) → `text-white/60` minimum
- `text-background/15` through `/20` → `text-background/50` minimum

**Exception:** True decorative watermarks (large background text like "Portfolio", "Answers") can remain low-opacity as they are not meant to be read. These are typically in large `text-6xl`+ sizes with `pointer-events-none`.

### Execution approach

This is a large-scale find-and-replace operation. Each file will be updated with contextually appropriate replacements — functional labels get full contrast tokens, decorative ambient text gets moderate contrast, and purely ornamental watermarks are left as-is.

