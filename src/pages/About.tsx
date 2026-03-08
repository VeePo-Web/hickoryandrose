import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion } from "framer-motion";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import ImageReveal from "@/components/wedding/ImageReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import BranchDecoration from "@/components/wedding/BranchDecoration";
import MagneticButton from "@/components/wedding/MagneticButton";
import founderImage from "@/assets/founder-portrait.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";

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
  useEffect(() => {
    setPageMeta({
      title: "About Hickory & Rose — Edmonton Wedding Planner | Our Story",
      description: "Meet the heart behind Hickory & Rose. Calm leadership, intentional design, and genuine care — learn why Edmonton couples trust us with their most important day.",
      path: "/about",
    });
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="solid" />

      {/* Editorial Hero with image */}
      <section className="relative bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-primary/30" />
              <span className="font-script text-lg text-primary/40">H & R</span>
              <span className="w-10 h-px bg-primary/30" />
            </div>
            <p className="font-overline text-muted-foreground mb-4">
              About Us
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              Meet Hickory & Rose
            </h1>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed max-w-xl mx-auto font-light">
              Refined rustic elegance, rooted in calm leadership and genuine care
              for every couple we serve.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
        <BranchDecoration className="absolute -right-8 top-12 hidden lg:block" />

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
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
      <section className="py-16 md:py-24 bg-sage-mist">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <hr className="editorial-rule mx-auto mb-10" />
            <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-6">
              "We don't just plan weddings — we protect the feeling of your day."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-primary/30" />
              <span className="font-script text-xl text-primary/60">Hickory & Rose</span>
              <span className="w-8 h-px bg-primary/30" />
            </div>
            <hr className="editorial-rule mx-auto mt-10" />
          </ScrollReveal>
        </div>
      </section>

      <FullWidthImage
        src={bouquetImage}
        alt="Bridal bouquet with white roses and sage eucalyptus"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Values */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card relative overflow-hidden">
        <BranchDecoration className="absolute -left-8 bottom-8 hidden lg:block" flip />

        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-overline text-muted-foreground mb-4">
                Our Values
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                What Guides Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center group">
                  <hr className="editorial-rule mx-auto mb-6" />
                  <h3 className="font-serif-wedding text-display-md text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline — Cinematic */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-overline text-muted-foreground mb-4">
                Our Journey
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                Milestones Along the Way
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-[5px] top-0 bottom-0 w-px bg-primary/20 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] as const }}
            />

            <div className="space-y-0">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.12}>
                  <div className="flex items-start gap-6 md:gap-8 pb-10 last:pb-0 group">
                    <div className="flex flex-col items-center shrink-0 relative">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-primary relative z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.12, type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-[-4px] rounded-full border border-primary/30"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1.5, opacity: [0, 0.5, 0] }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + index * 0.12 }}
                        />
                      </motion.div>
                    </div>
                    <div className="pb-2">
                      <p className="font-serif-wedding text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                        {milestone.year}
                      </p>
                      <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-12 md:py-16 bg-card border-t border-border relative overflow-hidden">
        {/* Subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground text-center mb-8">
              Press & Recognition
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { publication: "Edmonton Bridal Magazine", note: "Featured Planner, 2024" },
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
                >
                  <p className="font-serif-wedding text-base text-foreground mb-1">
                    {press.publication}
                  </p>
                  <p className="font-sans-wedding text-[0.625rem] tracking-[0.12em] uppercase text-muted-foreground/60">
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