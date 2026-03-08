import HeroSection from "@/components/wedding/HeroSection";
import BrandPromiseSection from "@/components/wedding/BrandPromiseSection";
import TrustBarSection from "@/components/wedding/TrustBarSection";
import NowBookingSection from "@/components/wedding/NowBookingSection";
import ServicesOverviewSection from "@/components/wedding/ServicesOverviewSection";
import EditorialImageBreak from "@/components/wedding/EditorialImageBreak";
import TestimonialSection from "@/components/wedding/TestimonialSection";
import LoveQuoteSection from "@/components/wedding/LoveQuoteSection";
import ProcessTeaserSection from "@/components/wedding/ProcessTeaserSection";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import FounderTeaserSection from "@/components/wedding/FounderTeaserSection";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollProgress from "@/components/wedding/ScrollProgress";
import venueImage from "@/assets/portfolio-venue.jpg";

const Index = () => {
  return (
    <main id="main-content" className="overflow-hidden">
      <ScrollProgress />
      <HeroSection />
      <BrandPromiseSection />
      <TrustBarSection />
      <NowBookingSection />
      <ServicesOverviewSection />
      <EditorialImageBreak />
      <TestimonialSection />
      <LoveQuoteSection />
      <ProcessTeaserSection />
      <FullWidthImage
        src={venueImage}
        alt="Rustic barn wedding venue at twilight with warm string lights and mountain backdrop"
        height="h-[50vh] md:h-[60vh]"
      />
      <FounderTeaserSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
