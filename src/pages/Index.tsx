import HeroSection from "@/components/wedding/HeroSection";
import BrandPromiseSection from "@/components/wedding/BrandPromiseSection";
import ServicesOverviewSection from "@/components/wedding/ServicesOverviewSection";
import EditorialImageBreak from "@/components/wedding/EditorialImageBreak";
import TestimonialSection from "@/components/wedding/TestimonialSection";
import ProcessTeaserSection from "@/components/wedding/ProcessTeaserSection";
import FounderTeaserSection from "@/components/wedding/FounderTeaserSection";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main id="main-content" className="overflow-hidden">
      <HeroSection />
      <BrandPromiseSection />
      <ServicesOverviewSection />
      <EditorialImageBreak />
      <TestimonialSection />
      <ProcessTeaserSection />
      <FounderTeaserSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
