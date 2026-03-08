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
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden grain-overlay vignette">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={portfolioHeroImage}
            alt="Wedding ceremony with mountain backdrop at golden hour"
            className="w-full h-[120%] object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/10" />
        </motion.div>

        {/* Large parallax watermark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <span className="font-serif-wedding text-[14rem] md:text-[22rem] text-white leading-none tracking-tight whitespace-nowrap">
            Portfolio
          </span>
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
          style={{ opacity: heroOpacity }}
        >
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-white/50 mb-4">
              <span className="inline-flex items-center gap-3">
                <motion.span
                  className="w-8 h-px bg-white/30 origin-right"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                Our Work
                <motion.span
                  className="w-8 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
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

        {/* Section corner index */}
        <motion.span
          className="absolute bottom-8 right-8 font-serif-wedding text-sm text-white/15 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          02
        </motion.span>
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

      {/* Filter Tabs — refined editorial with gold accent */}
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
                  className="absolute bottom-0 left-0 w-full h-px origin-left"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Story Spotlight */}
      <section className="bg-card py-section-mobile md:py-section-tablet">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <ImageReveal direction="left">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Sarah & Michael's garden reception at golden hour"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ImageReveal>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-3">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-px bg-primary/30" />
                    Featured Wedding
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-2">
                  Sarah & Michael
                </h2>
                <p className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-muted-foreground/40 mb-6">
                  Fairmont Hotel Macdonald · Summer 2024
                </p>
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-6">
                  An intimate garden ceremony followed by a candlelit reception overlooking the river valley. Every detail — from the hand-lettered menus to the sage and ivory floral installations — reflected their story of quiet sophistication.
                </p>
                <div className="border-l-2 border-primary/15 pl-5">
                  <p className="font-serif-wedding text-sm italic text-foreground/50 leading-relaxed">
                    "Every single moment felt exactly like us. Nothing was rushed, nothing was missed."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
        {/* Parallax watermark */}
        <motion.div
          className="absolute -left-4 top-1/4 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-serif-wedding text-[8rem] md:text-[14rem] font-light text-foreground/[0.015] whitespace-nowrap tracking-tight italic leading-none">
            Stories
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Gold gradient corner frame accents */}
                      <div className="absolute top-3 left-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), transparent)" }} />
                        <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), transparent)" }} />
                      </div>
                      <div className="absolute bottom-3 right-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.4), transparent)" }} />
                        <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.4), transparent)" }} />
                      </div>

                      {/* Category badge */}
                      <span className="absolute top-3 left-3 mt-6 font-sans-wedding text-[0.45rem] tracking-[0.18em] uppercase text-white/0 group-hover:text-white/50 transition-colors duration-500 bg-white/0 group-hover:bg-white/10 backdrop-blur-sm px-2 py-0.5">
                        {story.category}
                      </span>

                      {/* Frame index */}
                      <span className="absolute top-3 right-3 font-serif-wedding text-[0.5rem] text-white/0 group-hover:text-white/25 transition-colors duration-500 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="font-serif-wedding text-lg md:text-xl text-white mb-0.5">
                          {story.couple}
                        </p>
                        <p className="font-sans-wedding text-[0.625rem] tracking-[0.15em] uppercase text-white/60 mb-3">
                          {story.venue} · {story.season}
                        </p>
                        <span className="inline-flex items-center gap-2 font-sans-wedding text-[0.55rem] tracking-[0.18em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                          <span
                            className="w-0 group-hover:w-5 h-px transition-all duration-500 ease-out"
                            style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.6), transparent)" }}
                          />
                          View Story
                        </span>
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

      {/* Testimonial — editorial with gold accents and corner frames */}
      <section className="py-20 md:py-28 bg-sage-deep relative overflow-hidden">
        {/* Radial gold ambient glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.12), transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Parallax watermark */}
        <motion.div
          className="absolute -left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.025 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-serif-wedding text-[10rem] md:text-[14rem] text-primary-foreground leading-none tracking-tight italic whitespace-nowrap">
            Voices
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            {/* Decorative top ornament */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px origin-right"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.25))" }}
              />
              <span
                className="w-2 h-2 rotate-45 shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1))" }}
              />
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px origin-left"
                style={{ background: "linear-gradient(270deg, transparent, hsl(var(--gold) / 0.25))" }}
              />
            </div>

            <span className="font-serif-wedding text-6xl text-primary-foreground/[0.06] leading-none block -mb-4" aria-hidden="true">"</span>
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "Working with Hickory & Rose was the best decision we made. Every
              detail felt intentional, every moment felt protected."
            </blockquote>

            {/* Attribution with gold separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-8 h-px mx-auto mb-4 origin-center"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)" }}
            />
            <p className="font-sans-wedding text-body-sm font-light text-primary-foreground/60">
              Emma & James
            </p>
            <p className="font-sans-wedding text-[0.6rem] tracking-[0.12em] uppercase text-primary-foreground/25 mt-2">
              The Glass House · Autumn 2024
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
