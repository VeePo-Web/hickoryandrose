import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import heroImage from "@/assets/hero-wedding.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import editorialImage from "@/assets/editorial-florals.jpg";

const galleryItems = [
  { src: heroImage, alt: "Elegant garden reception tablescape at golden hour", aspect: "aspect-[4/5]" },
  { src: ceremonyImage, alt: "Mountain ceremony with floral arch and white draping", aspect: "aspect-square" },
  { src: detailImage, alt: "Calligraphy place card with gold cutlery detail", aspect: "aspect-square" },
  { src: firstDanceImage, alt: "First dance under string lights", aspect: "aspect-[4/5]" },
  { src: editorialImage, alt: "Sage and ivory floral arrangement", aspect: "aspect-[4/5]" },
  { src: heroImage, alt: "Reception detail with candlelight and flowers", aspect: "aspect-square" },
];

const Portfolio = () => {
  return (
    <main id="main-content">
      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <Navigation variant="solid" />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              Our Work
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              Real Weddings
            </h1>
            <p className="font-sans-wedding text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Every wedding tells a unique story. Here are some of the moments
              we've had the privilege of helping create.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className={`${item.aspect} overflow-hidden break-inside-avoid`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Portfolio;
