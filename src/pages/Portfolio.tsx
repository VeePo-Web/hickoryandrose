import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import ImageReveal from "@/components/wedding/ImageReveal";
import heroImage from "@/assets/hero-wedding.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import editorialImage from "@/assets/editorial-florals.jpg";
import receptionImage from "@/assets/portfolio-reception.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import venueImage from "@/assets/portfolio-venue.jpg";

const weddingStories = [
  { src: heroImage, alt: "Elegant garden reception tablescape at golden hour", couple: "Sarah & Michael", venue: "Fairmont Hotel Macdonald", season: "Summer", category: "Full Planning", aspect: "aspect-[3/4]" },
  { src: receptionImage, alt: "Rustic farmhouse reception with eucalyptus and candlelight", couple: "Emma & James", venue: "The Glass House", season: "Autumn", category: "Full Planning", aspect: "aspect-square" },
  { src: ceremonyImage, alt: "Mountain ceremony with floral arch and white draping", couple: "Olivia & Noah", venue: "Jasper Park Lodge", season: "Summer", category: "Partial Planning", aspect: "aspect-[4/5]" },
  { src: bouquetImage, alt: "Bridal bouquet with white roses and sage eucalyptus", couple: "Alyssa & Daniel", venue: "Art Gallery of Alberta", season: "Spring", category: "Day-Of", aspect: "aspect-[3/4]" },
  { src: venueImage, alt: "Rustic barn venue at twilight with string lights", couple: "Lauren & Ethan", venue: "Willow Creek Barn", season: "Autumn", category: "Full Planning", aspect: "aspect-[16/10]" },
  { src: editorialImage, alt: "Sage and ivory floral arrangement detail", couple: "Hannah & Liam", venue: "Muttart Conservatory", season: "Winter", category: "Day-Of", aspect: "aspect-square" },
  { src: firstDanceImage, alt: "First dance under string lights at outdoor reception", couple: "Rachel & Marcus", venue: "River Valley Estate", season: "Summer", category: "Partial Planning", aspect: "aspect-[3/4]" },
  { src: detailImage, alt: "Calligraphy place card with gold cutlery detail", couple: "Claire & Jonathan", venue: "The Enjoy Centre", season: "Spring", category: "Full Planning", aspect: "aspect-square" },
];

const filters = ["All", "Full Planning", "Partial Planning", "Day-Of"] as const;

const Portfolio = () => {
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    document.title = "Portfolio | Hickory & Rose — Real Weddings Edmonton";
  }, []);

  const filtered = active === "All" ? weddingStories : weddingStories.filter((s) => s.category === active);

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

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container mx-auto px-6 lg:px-8 flex justify-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-sans-wedding text-xs tracking-[0.15em] uppercase px-6 py-2.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((story, index) => (
                <motion.div
                  key={story.couple}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="break-inside-avoid"
                >
                  <ImageReveal delay={index * 0.04} direction={index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"}>
                    <div className={`${story.aspect} overflow-hidden relative group cursor-pointer`}>
                      <img
                        src={story.src}
                        alt={story.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                        <p className="font-serif-wedding text-xl md:text-2xl text-white mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                          {story.couple}
                        </p>
                        <p className="font-sans-wedding text-xs tracking-[0.15em] uppercase text-white/70 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                          {story.venue}
                        </p>
                      </div>
                    </div>
                  </ImageReveal>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
