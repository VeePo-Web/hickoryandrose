import { useEffect, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import ImageReveal from "@/components/wedding/ImageReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";

import ceremonyImage from "@/assets/ceremony-setup.jpg";
import approachDetailsImage from "@/assets/approach-details.jpg";
import approachHeroImage from "@/assets/approach-hero.jpg";
import founderImage from "@/assets/founder-portrait.jpg";

const processSteps = [
  { number: "01", title: "Discovery Call", time: "Week 1", description: "We start with a relaxed conversation. Tell us about your vision, your story, and how you want to feel on your wedding day. No pressure, no sales pitch — just genuine connection.", pullQuote: "Every great wedding begins with listening." },
  { number: "02", title: "Proposal & Booking", time: "Week 1–2", description: "Based on our call, we craft a customized proposal that fits your needs and budget. Once you say yes, the real magic begins.", pullQuote: null },
  { number: "03", title: "Design & Planning", time: "Months 2–10", description: "We dive deep into your vision — curating vendors, refining design concepts, building timelines, and handling every logistical detail so you don't have to.", pullQuote: "This is where your vision becomes tangible." },
  { number: "04", title: "Final Details", time: "Month 11", description: "Everything comes together. Final walkthroughs, vendor confirmations, timeline refinements, and a comprehensive rehearsal to ensure every person knows their role.", pullQuote: null },
  { number: "05", title: "Your Wedding Day", time: "The Day", description: "We arrive early, coordinate everything behind the scenes, and lead with calm authority. You simply show up and feel every beautiful moment.", pullQuote: "You feel it. We handle it." },
];

const differentiators = [
  { title: "One Planner, Start to Finish", detail: "The planner you meet is the planner on your wedding day. No hand-offs, no surprises — just continuity and trust." },
  { title: "Curated Vendor Network", detail: "We've spent years building relationships with Edmonton's finest vendors. Every recommendation is personally vetted and aligned with your aesthetic." },
  { title: "Calm Under Pressure", detail: "Rain on ceremony day? Vendor running late? You'll never know. Our team leads with quiet confidence, handling every pivot behind the scenes." },
  { title: "Design-Led Approach", detail: "We don't just coordinate logistics — we design cohesive experiences where every visual element tells your story." },
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
      <section ref={heroRef} className="relative h-[65vh] md:h-[75vh] overflow-hidden grain-overlay vignette">
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
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">01</span>
                <p className="font-overline text-muted-foreground/50 mb-3">Philosophy</p>
                <h2 className="font-serif-wedding text-display-md text-foreground">
                  Planning with intention.
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="font-sans-wedding text-body text-muted-foreground leading-relaxed font-light mb-4 drop-cap">
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
            {/* Gold gradient vertical timeline line */}
            <motion.div
              className="absolute left-[1.75rem] md:left-[3.25rem] top-0 bottom-0 w-px origin-top hidden md:block"
              style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.1), hsl(var(--gold) / 0.35), hsl(var(--gold) / 0.1))" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            />
            {/* Glow trail behind timeline */}
            <motion.div
              className="absolute left-[1.75rem] md:left-[3.25rem] top-0 bottom-0 w-px origin-top hidden md:block blur-[2px]"
              style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.2), transparent)" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
            />

            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 group relative">
                  {/* Step number with timeline dot */}
                  <div className="md:col-span-2 relative flex items-baseline gap-3">
                    <motion.div
                      className="hidden md:block absolute left-[3.25rem] top-3 w-2.5 h-2.5 rounded-full -translate-x-1/2 transition-all duration-500 group-hover:shadow-[0_0_8px_hsl(var(--gold)/0.5)]"
                      style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.6), hsl(var(--gold) / 0.2))" }}
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
                    <span className="w-2 h-2 rotate-45 shrink-0 md:hidden" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.35), hsl(var(--gold) / 0.1))" }} />
                  </div>

                  {/* Title + time */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rotate-45 shrink-0 hidden md:inline-block" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.08))" }} />
                      <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                        {step.title}
                      </h3>
                    </div>
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

      {/* What Makes Us Different — NEW editorial split */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
        <motion.div
          className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.015 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-script text-[20rem] text-foreground leading-none">
            &
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Sticky founder image */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <ImageReveal direction="left" delay={0.1}>
                  <div className="aspect-[3/4] overflow-hidden max-w-md">
                    <img
                      src={founderImage}
                      alt="Hickory & Rose founder reviewing wedding details"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </ImageReveal>
                <p className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-muted-foreground/25 mt-4">
                  Your planner, from first call to last dance
                </p>
              </div>
            </div>

            {/* Right: Differentiators */}
            <div>
              <ScrollReveal>
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">02</span>
                <p className="font-overline text-muted-foreground/50 mb-3">The Difference</p>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-4">
                  What Sets Us Apart
                </h2>
                <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light mb-12 max-w-md">
                  Beyond logistics and timelines, here's what you'll experience working with Hickory & Rose.
                </p>
              </ScrollReveal>

              <div className="border-t border-border/40">
                {differentiators.map((diff, index) => (
                  <ScrollReveal key={diff.title} delay={index * 0.08}>
                    <div className="py-8 md:py-10 border-b border-border/40 group cursor-default relative">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="font-serif-wedding text-2xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif-wedding text-display-sm text-foreground group-hover:text-primary transition-colors duration-500 relative">
                          {diff.title}
                          <span
                            className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
                            style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1), transparent)" }}
                          />
                        </h3>
                      </div>
                      <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light pl-12 group-hover:text-muted-foreground transition-colors duration-500">
                        {diff.detail}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial promise */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
              <div className="md:col-span-1">
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">03</span>
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

      {/* Inline testimonial — editorial with gold ornament */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        {/* Radial gold ambient glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.12), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            {/* Gold diamond ornament */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-8 h-px origin-right"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3))" }}
              />
              <span className="w-2 h-2 rotate-45" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1))" }} />
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-8 h-px origin-left"
                style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), transparent)" }}
              />
            </div>
            <blockquote className="font-serif-wedding text-pull-quote italic text-foreground/60 leading-relaxed mb-5">
              "From the first call, I felt like I was talking to a friend who just happened to be
              incredibly organized. They made the entire process feel effortless."
            </blockquote>
            <p className="font-sans-wedding text-body-sm font-light text-foreground/40">
              Emma & James
            </p>
            <p className="font-sans-wedding text-[0.5rem] tracking-[0.12em] uppercase text-muted-foreground/25 mt-1">
              The Glass House · Autumn 2024
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FullWidthImage
        src={ceremonyImage}
        alt="Outdoor wedding ceremony setup in mountain meadow with floral arch"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Promise quote */}
      <section className="py-20 md:py-28 bg-sage-deep relative overflow-hidden">
        {/* Radial gold ambient glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.15), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            {/* Gold diamond ornament with breathing pulse */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px origin-right"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3))" }}
              />
              <motion.span
                className="w-2.5 h-2.5 rotate-45 shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold) / 0.5), hsl(var(--gold) / 0.15))",
                  boxShadow: "0 0 16px 6px hsl(var(--gold) / 0.12)",
                }}
                animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px origin-left"
                style={{ background: "linear-gradient(270deg, transparent, hsl(var(--gold) / 0.3))" }}
              />
            </div>

            <span className="font-serif-wedding text-6xl text-primary-foreground/[0.06] leading-none block -mb-4" aria-hidden="true">"</span>
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "Our job isn't just to plan your wedding — it's to protect the
              feeling of your day."
            </blockquote>

            {/* Gold gradient separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-10 h-px mx-auto mb-5 origin-center"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.35), transparent)" }}
            />
            <span className="font-script text-xl text-primary-foreground/35">
              Hickory & Rose
            </span>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="w-4 h-px bg-primary-foreground/10" />
              <span className="font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-primary-foreground/20">
                Est. 2018
              </span>
              <span className="w-4 h-px bg-primary-foreground/10" />
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

export default Approach;
