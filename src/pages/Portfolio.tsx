import { useEffect, useState, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import ImageReveal from "@/components/wedding/ImageReveal";
import MagneticButton from "@/components/wedding/MagneticButton";
import portfolioHeroImage from "@/assets/portfolio-hero.jpg";
import heroImage from "@/assets/hero-wedding.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import editorialImage from "@/assets/editorial-florals.jpg";
import receptionImage from "@/assets/portfolio-reception.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import venueImage from "@/assets/portfolio-venue.jpg";

const weddingStories = [
  { src: heroImage, alt: "Elegant garden reception tablescape at golden hour", couple: "Sarah & Michael", venue: "Fairmont Hotel Macdonald", season: "Summer 2024", category: "Full Planning", aspect: "aspect-[3/4]" },
  { src: receptionImage, alt: "Rustic farmhouse reception with eucalyptus and candlelight", couple: "Emma & James", venue: "The Glass House", season: "Autumn 2024", category: "Full Planning", aspect: "aspect-square" },
  { src: ceremonyImage, alt: "Mountain ceremony with floral arch and white draping", couple: "Olivia & Noah", venue: "Jasper Park Lodge", season: "Summer 2023", category: "Partial Planning", aspect: "aspect-[4/5]" },
  { src: bouquetImage, alt: "Bridal bouquet with white roses and sage eucalyptus", couple: "Alyssa & Daniel", venue: "Art Gallery of Alberta", season: "Spring 2024", category: "Day-Of", aspect: "aspect-[3/4]" },
  { src: venueImage, alt: "Rustic barn venue at twilight with string lights", couple: "Lauren & Ethan", venue: "Willow Creek Barn", season: "Autumn 2023", category: "Full Planning", aspect: "aspect-[16/10]" },
  { src: editorialImage, alt: "Sage and ivory floral arrangement detail", couple: "Hannah & Liam", venue: "Muttart Conservatory", season: "Winter 2024", category: "Day-Of", aspect: "aspect-square" },
  { src: firstDanceImage, alt: "First dance under string lights at outdoor reception", couple: "Rachel & Marcus", venue: "River Valley Estate", season: "Summer 2023", category: "Partial Planning", aspect: "aspect-[3/4]" },
  { src: detailImage, alt: "Calligraphy place card with gold cutlery detail", couple: "Claire & Jonathan", venue: "The Enjoy Centre", season: "Spring 2023", category: "Full Planning", aspect: "aspect-square" },
];

const filters = ["All", "Full Planning", "Partial Planning", "Day-Of"] as const;

const Portfolio = () => {
  const [active, setActive] = useState<string>("All");
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setPageMeta({
      title: "Real Weddings — Portfolio | Hickory & Rose Edmonton Wedding Planner",
      description: "Browse real Edmonton weddings planned by Hickory & Rose. Elegant receptions, mountain ceremonies, and intimate celebrations — see our work in full-service, partial, and day-of coordination.",
      path: "/portfolio",
    });
  }, []);

  const filtered = active === "All" ? weddingStories : weddingStories.filter((s) => s.category === active);

  return (
    <main id="main-content">
      <Navigation variant="overlay" />

      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={portfolioHeroImage}
            alt="Wedding ceremony with mountain backdrop at golden hour"
            className="w-full h-[120%] object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
          style={{ opacity: heroOpacity }}
        >
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-white/50 mb-4">
              <span className="inline-flex items-center gap-3">
                <span className="w-6 h-px bg-white/30" />
                Our Work
                <span className="w-6 h-px bg-white/30" />
              </span>
            </p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6 max-w-3xl">
              Real Weddings
            </h1>
            <p className="font-sans-wedding text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto font-light">
              Every wedding tells a unique story. Here are some of the moments
              we've had the privilege of helping create.
            </p>
          </ScrollReveal>
        </motion.div>
      </section>

      {/* Editorial Intro */}
      <section className="py-12 md:py-16 bg-card border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
              <div className="md:col-span-4">
                <p className="font-serif-wedding text-display-sm text-foreground/70 italic">
                  From intimate garden ceremonies to grand ballroom receptions — each one as unique as the couple.
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-6">
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                  We believe the best weddings feel like the couple — not a template. Browse our portfolio and imagine what yours could look like.
                </p>
              </div>
              <div className="md:col-span-3 md:col-start-12 hidden md:flex items-center justify-end">
                <span className="font-sans-wedding text-label uppercase text-muted-foreground/30">
                  {weddingStories.length} Stories
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs — refined editorial */}
      <section className="py-5 md:py-6 bg-background border-b border-border/30 sticky top-[72px] z-30">
        <div className="container mx-auto px-6 lg:px-8 flex justify-center gap-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative font-sans-wedding text-xs tracking-[0.15em] uppercase px-5 md:px-7 py-2.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                active === f
                  ? "text-foreground"
                  : "text-muted-foreground/40 hover:text-muted-foreground"
              }`}
            >
              {f}
              {active === f && (
                <motion.div
                  layoutId="portfolio-filter"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-primary/40"
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
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
                      {/* Cinematic gradient reveal */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="font-serif-wedding text-lg md:text-xl text-white mb-0.5">
                          {story.couple}
                        </p>
                        <p className="font-sans-wedding text-[0.625rem] tracking-[0.15em] uppercase text-white/60">
                          {story.venue} · {story.season}
                        </p>
                      </div>
                    </div>
                  </ImageReveal>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mt-16 md:mt-24">
              <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-8 font-light max-w-md mx-auto">
                Every wedding begins with a conversation. Let's talk about yours.
              </p>
              <MagneticButton to="/inquire" variant="primary">
                Begin Your Story
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-28 bg-sage-deep">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-12 h-px bg-primary-foreground/20 mx-auto mb-10 origin-center"
            />
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "Working with Hickory & Rose was the best decision we made. Every
              detail felt intentional, every moment felt protected."
            </blockquote>
            <p className="font-sans-wedding text-body-sm font-light text-primary-foreground/60">
              Emma & James
            </p>
            <p className="font-sans-wedding text-xs text-primary-foreground/30 mt-1">
              The Glass House, Autumn 2024
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default Portfolio;
