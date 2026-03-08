import { useEffect, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, useScroll, useTransform } from "framer-motion";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import ImageReveal from "@/components/wedding/ImageReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import MagneticButton from "@/components/wedding/MagneticButton";
import founderImage from "@/assets/founder-portrait.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import aboutHeroImage from "@/assets/about-hero.jpg";

const values = [
  {
    title: "Calm Leadership",
    description:
      "We lead with quiet confidence so you never feel rushed, pressured, or anxious.",
  },
  {
    title: "Intentional Design",
    description:
      "Every detail is considered — nothing is accidental, everything has meaning.",
  },
  {
    title: "Genuine Care",
    description:
      "Your wedding isn't a project to us. It's a privilege and a responsibility we take personally.",
  },
];

const milestones = [
  { year: "2018", event: "Hickory & Rose founded in Edmonton, Alberta" },
  { year: "2019", event: "First feature in Edmonton Bridal Magazine" },
  { year: "2020", event: "Expanded to full-service planning & virtual coordination" },
  { year: "2022", event: "50th wedding milestone — Jasper Park Lodge" },
  { year: "2024", event: "Named Top 10 Edmonton Wedding Planners" },
];

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setPageMeta({
      title: "About Hickory & Rose — Edmonton Wedding Planner | Our Story",
      description: "Meet the heart behind Hickory & Rose. Calm leadership, intentional design, and genuine care — learn why Edmonton couples trust us with their most important day.",
      path: "/about",
    });
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="overlay" />

      {/* Cinematic Parallax Hero */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={aboutHeroImage}
            alt="Wedding planner in sunlit garden conservatory surrounded by white florals"
            className="w-full h-[120%] object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
          style={{ opacity: heroOpacity }}
        >
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-white/50 mb-4">
              <span className="inline-flex items-center gap-3">
                <span className="w-6 h-px bg-white/30" />
                About Us
                <span className="w-6 h-px bg-white/30" />
              </span>
            </p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6 max-w-3xl">
              Meet Hickory & Rose
            </h1>
            <p className="font-sans-wedding text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto font-light">
              Refined rustic elegance, rooted in calm leadership and genuine care
              for every couple we serve.
            </p>
          </ScrollReveal>
        </motion.div>
      </section>

      {/* Founder Story */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <ImageReveal direction="left" delay={0.1}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Founder of Hickory & Rose"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ImageReveal>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-6">
                  The heart behind every detail.
                </h2>
                <div className="space-y-4 font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                  <p className="drop-cap">
                    I founded Hickory & Rose with a simple belief: your wedding
                    day should feel as calm as it is beautiful.
                  </p>
                  <p>
                    After years in the events industry, I noticed something
                    troubling — too many couples were stressed and exhausted on
                    what should have been their most joyful day. I knew there had
                    to be a better way.
                  </p>
                  <p>
                    Hickory & Rose exists to be that better way. We bring quiet
                    confidence, meticulous planning, and genuine warmth to every
                    wedding we touch.
                  </p>
                </div>
                <div className="mt-8">
                  <MagneticButton to="/inquire" variant="outline">
                    Work With Us
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Signature Quote */}
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
              "We don't just plan weddings — we protect the feeling of your day."
            </blockquote>
            <span className="font-script text-xl text-primary-foreground/35">
              Hickory & Rose
            </span>
          </ScrollReveal>
        </div>
      </section>

      <FullWidthImage
        src={bouquetImage}
        alt="Bridal bouquet with white roses and sage eucalyptus"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Values — horizontal ruled rows */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
                Our Values
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                What Guides Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 border-t border-border/60 group">
                  <div className="md:col-span-1">
                    <span className="font-serif-wedding text-4xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                      {value.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </div>
      </section>

      {/* Journey — horizontal ruled rows */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
                Our Journey
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                Milestones Along the Way
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 border-t border-border/60 group">
                  <div className="md:col-span-2">
                    <span className="font-serif-wedding text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-500">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground/40 text-center mb-12">
              Press & Recognition
            </p>
            <div className="flex flex-wrap items-baseline justify-center gap-x-10 md:gap-x-16 gap-y-6">
              {[
                { publication: "Edmonton Bridal", note: "Featured Planner, 2024" },
                { publication: "The Knot", note: "Best of Weddings" },
                { publication: "Style Me Pretty", note: "Real Wedding Feature" },
                { publication: "Alberta Weddings", note: "Top 10 Planners" },
              ].map((press, i) => (
                <motion.div
                  key={press.publication}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="font-serif-wedding text-xl md:text-2xl font-light text-foreground/25 mb-1">
                    {press.publication}
                  </p>
                  <p className="font-sans-wedding text-[0.625rem] tracking-[0.12em] uppercase text-muted-foreground/40">
                    {press.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default About;
