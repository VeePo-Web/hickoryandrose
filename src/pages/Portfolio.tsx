import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import editorialImage from "@/assets/editorial-florals.jpg";
import receptionImage from "@/assets/portfolio-reception.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import venueImage from "@/assets/portfolio-venue.jpg";

const weddingStories = [
  {
    src: heroImage,
    alt: "Elegant garden reception tablescape at golden hour",
    couple: "Sarah & Michael",
    venue: "Fairmont Hotel Macdonald",
    season: "Summer",
    aspect: "aspect-[3/4]",
  },
  {
    src: receptionImage,
    alt: "Rustic farmhouse reception with eucalyptus and candlelight",
    couple: "Emma & James",
    venue: "The Glass House",
    season: "Autumn",
    aspect: "aspect-square",
  },
  {
    src: ceremonyImage,
    alt: "Mountain ceremony with floral arch and white draping",
    couple: "Olivia & Noah",
    venue: "Jasper Park Lodge",
    season: "Summer",
    aspect: "aspect-[4/5]",
  },
  {
    src: bouquetImage,
    alt: "Bridal bouquet with white roses and sage eucalyptus",
    couple: "Alyssa & Daniel",
    venue: "Art Gallery of Alberta",
    season: "Spring",
    aspect: "aspect-[3/4]",
  },
  {
    src: venueImage,
    alt: "Rustic barn venue at twilight with string lights",
    couple: "Lauren & Ethan",
    venue: "Willow Creek Barn",
    season: "Autumn",
    aspect: "aspect-[16/10]",
  },
  {
    src: editorialImage,
    alt: "Sage and ivory floral arrangement detail",
    couple: "Hannah & Liam",
    venue: "Muttart Conservatory",
    season: "Winter",
    aspect: "aspect-square",
  },
  {
    src: firstDanceImage,
    alt: "First dance under string lights at outdoor reception",
    couple: "Rachel & Marcus",
    venue: "River Valley Estate",
    season: "Summer",
    aspect: "aspect-[3/4]",
  },
  {
    src: detailImage,
    alt: "Calligraphy place card with gold cutlery detail",
    couple: "Claire & Jonathan",
    venue: "The Enjoy Centre",
    season: "Spring",
    aspect: "aspect-square",
  },
];

const Portfolio = () => {
  return (
    <main id="main-content">
      <Navigation variant="solid" />

      {/* Hero */}
      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
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

      {/* Gallery with story cards */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {weddingStories.map((story, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div
                  className={`${story.aspect} overflow-hidden break-inside-avoid relative group cursor-pointer`}
                >
                  <img
                    src={story.src}
                    alt={story.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <p className="font-serif-wedding text-xl md:text-2xl text-white mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      {story.couple}
                    </p>
                    <p className="font-sans-wedding text-xs tracking-[0.15em] uppercase text-white/70 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {story.venue}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial pull-quote */}
      <section className="py-section-mobile md:py-section-tablet bg-sage-mist">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-12 h-px bg-primary mx-auto mb-10" />
            <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-8">
              "Working with Hickory & Rose was the best decision we made. Every
              detail felt intentional, every moment felt protected."
            </blockquote>
            <p className="font-sans-wedding text-sm font-semibold text-foreground">
              Emma & James
            </p>
            <p className="font-sans-wedding text-xs text-muted-foreground mt-1">
              The Glass House, Autumn 2024
            </p>
            <div className="w-12 h-px bg-primary mx-auto mt-10" />
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Portfolio;
