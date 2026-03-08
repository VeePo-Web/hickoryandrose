import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import StorySection from "@/components/wedding/StorySection";
import ItinerarySection from "@/components/wedding/ItinerarySection";
import AccommodationsSection from "@/components/wedding/AccommodationsSection";
import ThingsToDoSection from "@/components/wedding/ThingsToDoSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <ItinerarySection />
      <AccommodationsSection />
      <ThingsToDoSection />
      <RSVPSection />
      <Footer />
    </main>
  );
};

export default Index;
