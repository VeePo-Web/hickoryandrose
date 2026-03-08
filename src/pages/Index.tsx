import { useEffect, lazy, Suspense } from "react";
import { setPageMeta } from "@/lib/seo";
import HeroSection from "@/components/wedding/HeroSection";
import BrandPromiseSection from "@/components/wedding/BrandPromiseSection";
import TrustBarSection from "@/components/wedding/TrustBarSection";
import NowBookingSection from "@/components/wedding/NowBookingSection";
import ScrollProgress from "@/components/wedding/ScrollProgress";
import BackToTop from "@/components/wedding/BackToTop";
import venueImage from "@/assets/portfolio-venue.jpg";

// Lazy-load below-fold sections
const ServicesOverviewSection = lazy(() => import("@/components/wedding/ServicesOverviewSection"));
const EditorialImageBreak = lazy(() => import("@/components/wedding/EditorialImageBreak"));
const TestimonialSection = lazy(() => import("@/components/wedding/TestimonialSection"));
const EditorialSplitSection = lazy(() => import("@/components/wedding/EditorialSplitSection"));
const LoveQuoteSection = lazy(() => import("@/components/wedding/LoveQuoteSection"));
const ProcessTeaserSection = lazy(() => import("@/components/wedding/ProcessTeaserSection"));
const FullWidthImage = lazy(() => import("@/components/wedding/FullWidthImage"));
const FounderTeaserSection = lazy(() => import("@/components/wedding/FounderTeaserSection"));
const StatsSection = lazy(() => import("@/components/wedding/StatsSection"));
const InstagramSection = lazy(() => import("@/components/wedding/InstagramSection"));
const CTASection = lazy(() => import("@/components/wedding/CTASection"));
const Footer = lazy(() => import("@/components/wedding/Footer"));

const Index = () => {
  useEffect(() => {
    setPageMeta({
      title: "Hickory & Rose — Luxury Wedding Planner in Edmonton, Alberta",
      description: "Edmonton's luxury wedding planner specializing in refined rustic elegance. Day-of coordination, partial & full-service planning. Calm leadership, elevated design.",
      path: "/",
    });
  }, []);

  return (
    <main id="main-content" className="overflow-hidden">
      <ScrollProgress />
      <BackToTop />
      <HeroSection />
      <BrandPromiseSection />
      <TrustBarSection />
      <NowBookingSection />
      <Suspense fallback={null}>
        <ServicesOverviewSection />
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
        <CTASection />
        <InstagramSection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
