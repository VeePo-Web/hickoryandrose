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
  { number: "01", title: "Discovery Call", time: "Week 1", description: "We start with a relaxed conversation. Tell us about your vision, your story, and how you want to feel on your wedding day. No pressure, no sales pitch — just genuine connection.", pullQuote: "Every great wedding begins with listening." },
  { number: "02", title: "Proposal & Booking", time: "Week 1–2", description: "Based on our call, we craft a customized proposal that fits your needs and budget. Once you say yes, the real magic begins.", pullQuote: null },
  { number: "03", title: "Design & Planning", time: "Months 2–10", description: "We dive deep into your vision — curating vendors, refining design concepts, building timelines, and handling every logistical detail so you don't have to.", pullQuote: "This is where your vision becomes tangible." },
  { number: "04", title: "Final Details", time: "Month 11", description: "Everything comes together. Final walkthroughs, vendor confirmations, timeline refinements, and a comprehensive rehearsal to ensure every person knows their role.", pullQuote: null },
  { number: "05", title: "Your Wedding Day", time: "The Day", description: "We arrive early, coordinate everything behind the scenes, and lead with calm authority. You simply show up and feel every beautiful moment.", pullQuote: "You feel it. We handle it." },
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
            Approach
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
                Our Approach
                <motion.span
                  className="w-8 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </p>
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

        {/* Section corner index */}
        <motion.span
          className="absolute bottom-8 right-8 font-serif-wedding text-sm text-white/15 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          04
        </motion.span>
      </section>

      {/* Philosophy intro — asymmetric editorial */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
              <div className="md:col-span-4">
                <p className="font-overline text-muted-foreground/50 mb-3">Philosophy</p>
                <h2 className="font-serif-wedding text-display-md text-foreground">
                  Planning with intention.
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="font-sans-wedding text-body text-muted-foreground leading-relaxed font-light mb-4">
                  We believe the planning process should feel as beautiful as the wedding day itself. Our approach is grounded in calm leadership, creative partnership, and an obsessive attention to the details that make your celebration uniquely yours.
                </p>
                <p className="font-sans-wedding text-body-sm text-muted-foreground/70 leading-relaxed font-light">
                  From the first discovery call to the final dance, every touchpoint is designed to reduce your stress, protect your presence, and ensure nothing falls through the cracks.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Steps — timeline with vertical connecting line */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <p className="font-overline text-muted-foreground/50 mb-4">Five Steps</p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                From First Call to Final Dance
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div
              className="absolute left-[1.75rem] md:left-[3.25rem] top-0 bottom-0 w-px bg-border/40 origin-top hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            />

            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 group relative">
                  {/* Step number with timeline dot */}
                  <div className="md:col-span-2 relative flex items-baseline">
                    <motion.div
                      className="hidden md:block absolute left-[3.25rem] top-3 w-2 h-2 rounded-full bg-primary/30 -translate-x-1/2 group-hover:bg-primary/60 transition-colors duration-500"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    />
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

                  {/* Title + time */}
                  <div className="md:col-span-3">
                    <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="font-overline text-muted-foreground/40 mt-1">
                      {step.time}
                    </p>
                  </div>

                  {/* Description + pull quote */}
                  <div className="md:col-span-7">
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>
                    {step.pullQuote && (
                      <motion.p
                        className="font-serif-wedding text-lg italic text-primary/40 mt-4 pl-4 border-l border-primary/15"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {step.pullQuote}
                      </motion.p>
                    )}
                  </div>

                  {/* Bottom rule */}
                  <div className="md:col-span-12">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-px bg-border/40 mt-6 origin-left"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FullWidthImage
        src={approachDetailsImage}
        alt="Wedding vow booklets with gold rings and eucalyptus on marble"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Editorial promise */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
              <div className="md:col-span-1">
                <p className="font-overline text-muted-foreground/50 mb-3">Our Promise</p>
                <h3 className="font-serif-wedding text-display-md text-foreground">Every detail, protected.</h3>
              </div>
              <div className="md:col-span-2">
                <p className="font-sans-wedding text-body text-muted-foreground leading-relaxed font-light mb-4">
                  We don't just plan logistics — we anticipate emotions. From the
                  moment your guests arrive to the final dance, we ensure every
                  transition is seamless, every moment is savored, and you never
                  have to think about what comes next.
                </p>
                <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light">
                  That's the Hickory & Rose difference: you're not just getting a planner — you're getting a partner who protects the feeling of your day.
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
