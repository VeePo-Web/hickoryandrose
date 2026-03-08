import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import HeroSection from "@/components/wedding/HeroSection";
import BrandPromiseSection from "@/components/wedding/BrandPromiseSection";
import TrustBarSection from "@/components/wedding/TrustBarSection";
import NowBookingSection from "@/components/wedding/NowBookingSection";
import ServicesOverviewSection from "@/components/wedding/ServicesOverviewSection";
import EditorialImageBreak from "@/components/wedding/EditorialImageBreak";
import TestimonialSection from "@/components/wedding/TestimonialSection";
import EditorialSplitSection from "@/components/wedding/EditorialSplitSection";
import LoveQuoteSection from "@/components/wedding/LoveQuoteSection";
import ProcessTeaserSection from "@/components/wedding/ProcessTeaserSection";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import FounderTeaserSection from "@/components/wedding/FounderTeaserSection";
import StatsSection from "@/components/wedding/StatsSection";
import InstagramSection from "@/components/wedding/InstagramSection";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollProgress from "@/components/wedding/ScrollProgress";
import BackToTop from "@/components/wedding/BackToTop";
import venueImage from "@/assets/portfolio-venue.jpg";

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
      />
      <FounderTeaserSection />
      <StatsSection />
      <CTASection />
      <InstagramSection />
      <Footer />
    </main>
  );
};

export default Index;
