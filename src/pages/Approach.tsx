import { useEffect, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import MagneticButton from "@/components/wedding/MagneticButton";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import approachDetailsImage from "@/assets/approach-details.jpg";
import approachHeroImage from "@/assets/approach-hero.jpg";

const processSteps = [
  { number: "01", title: "Discovery Call", time: "Week 1", description: "We start with a relaxed conversation. Tell us about your vision, your story, and how you want to feel on your wedding day. No pressure, no sales pitch — just genuine connection." },
  { number: "02", title: "Proposal & Booking", time: "Week 1–2", description: "Based on our call, we craft a customized proposal that fits your needs and budget. Once you say yes, the real magic begins." },
  { number: "03", title: "Design & Planning", time: "Months 2–10", description: "We dive deep into your vision — curating vendors, refining design concepts, building timelines, and handling every logistical detail so you don't have to." },
  { number: "04", title: "Final Details", time: "Month 11", description: "Everything comes together. Final walkthroughs, vendor confirmations, timeline refinements, and a comprehensive rehearsal to ensure every person knows their role." },
  { number: "05", title: "Your Wedding Day", time: "The Day", description: "We arrive early, coordinate everything behind the scenes, and lead with calm authority. You simply show up and feel every beautiful moment." },
];

const Approach = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setPageMeta({
      title: "Our Approach — How We Plan Your Wedding | Hickory & Rose Edmonton",
      description: "From discovery call to wedding day, learn Hickory & Rose's 5-step planning process. Calm leadership, meticulous coordination, and elevated design — every step of the way.",
      path: "/approach",
    });
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="overlay" />

      {/* Cinematic Parallax Hero */}
      <section ref={heroRef} className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={approachHeroImage}
            alt="Wedding day timeline with calligraphy, gold pen, sage eucalyptus and white roses"
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
            <p className="font-overline text-white/50 mb-4">Our Approach</p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6">
              How We Plan Your Perfect Day
            </h1>
            <p className="font-sans-wedding text-body-sm text-white/60 leading-relaxed max-w-xl mx-auto font-light">
              Great weddings don't happen by accident. They're the result of
              thoughtful planning, clear communication, and a deep understanding
              of what matters to you.
            </p>
          </ScrollReveal>
        </motion.div>
      </section>

      {/* Process Steps — horizontal ruled rows */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <p className="font-overline text-muted-foreground/50 mb-4">Five Steps</p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                From First Call to Final Dance
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 md:py-14 border-t border-border/60 group">
                  <div className="md:col-span-2">
                    <motion.span
                      className="font-serif-wedding text-5xl md:text-6xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    >
                      {step.number}
                    </motion.span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="font-overline text-muted-foreground/40 mt-1">
                      {step.time}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </div>
      </section>

      <FullWidthImage
        src={approachDetailsImage}
        alt="Wedding vow booklets with gold rings and eucalyptus on marble"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Editorial promise */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
              <div className="md:col-span-1">
                <p className="font-overline text-muted-foreground/50 mb-3">Our Promise</p>
                <h3 className="font-serif-wedding text-display-md text-foreground">Every detail, protected.</h3>
              </div>
              <div className="md:col-span-2">
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                  We don't just plan logistics — we anticipate emotions. From the
                  moment your guests arrive to the final dance, we ensure every
                  transition is seamless, every moment is savored, and you never
                  have to think about what comes next.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FullWidthImage
        src={ceremonyImage}
        alt="Outdoor wedding ceremony setup in mountain meadow with floral arch"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Promise quote */}
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
              "Our job isn't just to plan your wedding — it's to protect the
              feeling of your day."
            </blockquote>
            <span className="font-script text-xl text-primary-foreground/35">
              Hickory & Rose
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-mobile md:py-section-tablet bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground/50 mb-4">Ready?</p>
            <h2 className="font-serif-wedding text-display-lg text-foreground mb-6">
              Let's Begin Your Planning Journey
            </h2>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-10 font-light">
              Every great wedding starts with a conversation. Tell us about your
              vision and we'll show you how we can bring it to life.
            </p>
            <MagneticButton to="/inquire" variant="primary">
              Schedule a Discovery Call
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default Approach;
