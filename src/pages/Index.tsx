import { useEffect, lazy, Suspense, useState } from "react";
import { setPageMeta } from "@/lib/seo";
import { scheduleIdle } from "@/lib/idle";
import HeroSection from "@/components/wedding/HeroSection";
import BrandPromiseSection from "@/components/wedding/BrandPromiseSection";
import TrustBarSection from "@/components/wedding/TrustBarSection";
import NowBookingSection from "@/components/wedding/NowBookingSection";
import DeferredRender from "@/components/wedding/DeferredRender";
import venueImage from "@/assets/portfolio-venue.jpg";
import rockiesImage from "@/assets/service-area-rockies.jpg";

// Lazy-load below-fold sections
const ScrollProgress = lazy(() => import("@/components/wedding/ScrollProgress"));
const BackToTop = lazy(() => import("@/components/wedding/BackToTop"));
const SectionIndicator = lazy(() => import("@/components/wedding/SectionIndicator"));
const ServicesOverviewSection = lazy(() => import("@/components/wedding/ServicesOverviewSection"));
const VendorShowcaseSection = lazy(() => import("@/components/wedding/VendorShowcaseSection"));
const EditorialImageBreak = lazy(() => import("@/components/wedding/EditorialImageBreak"));
const TestimonialSection = lazy(() => import("@/components/wedding/TestimonialSection"));
const EditorialSplitSection = lazy(() => import("@/components/wedding/EditorialSplitSection"));
const EditorialQuoteRibbon = lazy(() => import("@/components/wedding/EditorialQuoteRibbon"));
const GallerySection = lazy(() => import("@/components/wedding/GallerySection"));
const LoveQuoteSection = lazy(() => import("@/components/wedding/LoveQuoteSection"));
const ProcessTeaserSection = lazy(() => import("@/components/wedding/ProcessTeaserSection"));
const FullWidthImage = lazy(() => import("@/components/wedding/FullWidthImage"));
const FounderTeaserSection = lazy(() => import("@/components/wedding/FounderTeaserSection"));
const StatsSection = lazy(() => import("@/components/wedding/StatsSection"));
const PressMentionsSection = lazy(() => import("@/components/wedding/PressMentionsSection"));
const BrandManifestoSection = lazy(() => import("@/components/wedding/BrandManifestoSection"));
const FilmstripSection = lazy(() => import("@/components/wedding/FilmstripSection"));
const InstagramSection = lazy(() => import("@/components/wedding/InstagramSection"));
const JournalTeaserSection = lazy(() => import("@/components/wedding/JournalTeaserSection"));
const CTASection = lazy(() => import("@/components/wedding/CTASection"));
const Footer = lazy(() => import("@/components/wedding/Footer"));

// LocalBusiness JSON-LD lives in index.html (single source of truth, crawler-safe pre-JS).
// Do NOT inject a duplicate here. No aggregateRating until real reviews exist (8.x honesty).

const IdleHomeAffordances = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let cleanupIdle = () => {};
    const timeoutId = window.setTimeout(() => {
      cleanupIdle = scheduleIdle(() => setEnabled(true), 3000);
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
      cleanupIdle();
    };
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <ScrollProgress />
      <BackToTop />
      <SectionIndicator />
    </Suspense>
  );
};

const Index = () => {
  useEffect(() => {
    setPageMeta({
      title: "Hickory & Rose | Edmonton Luxury Wedding Planner",
      description: "Refined, calm wedding planning in Edmonton & the Canadian Rockies. Day-of, partial, and full-service planning for the day you'll actually live in.",
      path: "/",
    });
  }, []);

  return (
    <main id="main-content" className="overflow-hidden">
      <IdleHomeAffordances />
      <HeroSection />
      <BrandPromiseSection />
      <TrustBarSection />
      <NowBookingSection />
      <DeferredRender>
      <Suspense fallback={null}>
        <ServicesOverviewSection />
        <EditorialQuoteRibbon
          quote="Your wedding day should be felt, not managed."
          attribution="Hickory & Rose"
          direction="left"
        />
        <GallerySection />
        <EditorialImageBreak />
        <TestimonialSection />
        <EditorialSplitSection />
        <LoveQuoteSection />
        <ProcessTeaserSection />
        <FullWidthImage
          src={venueImage}
          alt="Rustic barn wedding venue at twilight with warm string lights and mountain backdrop"
          height="h-[50vh] md:h-[60vh]"
          overlay
          caption="Edmonton · Alberta · The Canadian Rockies"
        />
        <FounderTeaserSection />
        <StatsSection />
        <EditorialQuoteRibbon
          quote="Every detail, placed with intention. Every moment, protected."
          direction="right"
        />
        {/* TODO: re-enable <PressMentionsSection /> when real press features arrive (discovery 5.6). Hidden today to avoid fabricated "As Featured In" claims. */}
        <BrandManifestoSection />
        <FullWidthImage
          src={rockiesImage}
          alt="Cinematic aerial view of the Canadian Rocky Mountains at golden hour with alpine lake and evergreen forests"
          height="h-[45vh] md:h-[55vh]"
          overlay
          caption="Serving Edmonton · Jasper · Banff · Lake Louise · The Canadian Rockies"
        />
        <FilmstripSection />
        <VendorShowcaseSection />
        <CTASection />
        <InstagramSection />
        <JournalTeaserSection />
        <Footer />
      </Suspense>
      </DeferredRender>
    </main>
  );
};

export default Index;
