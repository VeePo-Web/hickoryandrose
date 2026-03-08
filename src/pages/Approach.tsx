import { useEffect, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import GoldFrame from "@/components/wedding/GoldFrame";
import BreathingDiamond from "@/components/wedding/BreathingDiamond";
import ImageReveal from "@/components/wedding/ImageReveal";
import ApproachProcessTimeline from "@/components/wedding/ApproachProcessTimeline";
import ApproachDifferentiators from "@/components/wedding/ApproachDifferentiators";
import EditorialSplitSection from "@/components/wedding/EditorialSplitSection";

import ceremonyImage from "@/assets/ceremony-setup.jpg";
import approachDetailsImage from "@/assets/approach-details.jpg";
import approachHeroImage from "@/assets/approach-hero.jpg";

const Approach = () => {
  const heroRef = useRef<HTMLElement>(null);
  const promiseRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { scrollYProgress: promiseScroll } = useScroll({
    target: promiseRef,
    offset: ["start end", "end start"],
  });
  const promiseLineScale = useTransform(promiseScroll, [0, 0.5], [0, 1]);
  const promiseWatermarkY = useTransform(promiseScroll, [0, 1], ["20%", "-20%"]);

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
      <section ref={heroRef} className="relative h-[65vh] md:h-[75vh] overflow-hidden grain-overlay vignette" aria-label="Hero">
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

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <span
            className="font-serif-wedding text-[14rem] md:text-[22rem] leading-none tracking-tight whitespace-nowrap"
            style={{
              background: "linear-gradient(180deg, hsl(var(--gold) / 0.06), hsl(var(--gold) / 0.015))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
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
                <motion.span className="w-8 h-px bg-white/30 origin-right" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
                Our Approach
                <motion.span className="w-8 h-px bg-white/30 origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
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

        <GoldFrame inset="20px" delay={1} />

        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-4 py-3 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {["5-Step Process", "Calm Leadership", "Start to Finish"].map((t, i) => (
            <span key={t} className="font-sans-wedding text-[0.5rem] tracking-[0.18em] uppercase text-white/30 flex items-center gap-4">
              {i > 0 && <BreathingDiamond size={4} />}
              {t}
            </span>
          ))}
        </motion.div>

        {/* Scroll-down indicator */}
        <motion.div
          className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="font-sans-wedding text-[0.45rem] tracking-[0.2em] uppercase text-white/25">Scroll</span>
          <motion.span
            className="w-px h-6"
            style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), transparent)" }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.span
          className="absolute bottom-8 right-8 font-serif-wedding text-sm text-white/15 tracking-widest z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          04
        </motion.span>
      </section>

      {/* Philosophy intro — upgraded with editorial image inset + gold accents */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden" aria-label="Philosophy">
        {/* Ambient gold glow */}
        <div
          className="absolute -left-20 top-1/3 w-[300px] h-[300px] pointer-events-none hidden lg:block"
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.06), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-4">
                {/* Gold-glowed section index */}
                <div className="relative inline-block mb-3">
                  <span className="font-serif-wedding text-5xl font-light text-primary/10 block relative z-10">01</span>
                  <div
                    className="absolute -inset-4 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.08), transparent 70%)" }}
                    aria-hidden="true"
                  />
                </div>
                <p className="font-overline text-muted-foreground/50 mb-3">Philosophy</p>
                <h2 className="font-serif-wedding text-display-md text-foreground">Planning with intention.</h2>

                {/* Editorial image inset — mobile */}
                <div className="md:hidden mt-6 mb-2">
                  <ImageReveal direction="up" delay={0.15}>
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img
                        src={approachDetailsImage}
                        alt="Wedding planning details with gold accents"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </ImageReveal>
                </div>

                {/* Editorial image inset — desktop */}
                <div className="hidden md:block mt-8">
                  <ImageReveal direction="up" delay={0.2}>
                    <div className="aspect-[4/3] overflow-hidden relative group">
                      <img
                        src={approachDetailsImage}
                        alt="Wedding planning details with gold accents"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Gold corner reveals */}
                      {["top-2 left-2", "top-2 right-2 rotate-90", "bottom-2 right-2 rotate-180", "bottom-2 left-2 -rotate-90"].map((pos, i) => (
                        <div
                          key={i}
                          className={`absolute ${pos} w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          aria-hidden="true"
                        >
                          <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.5), transparent)" }} />
                          <span className="absolute top-0 left-0 w-px h-full" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.5), transparent)" }} />
                        </div>
                      ))}
                    </div>
                  </ImageReveal>
                </div>
              </div>

              <div className="md:col-span-8 relative">
                {/* Breathing diamond between columns — desktop */}
                <div className="hidden md:flex justify-start mb-6">
                  <BreathingDiamond size={6} />
                </div>

                <p className="font-sans-wedding text-body text-muted-foreground leading-relaxed font-light mb-4 drop-cap">
                  We believe the planning process should feel as beautiful as the wedding day itself. Our approach is grounded in calm leadership, creative partnership, and an obsessive attention to the details that make your celebration uniquely yours.
                </p>
                <p className="font-sans-wedding text-body-sm text-muted-foreground/70 leading-relaxed font-light">
                  From the first discovery call to the final dance, every touchpoint is designed to reduce your stress, protect your presence, and ensure nothing falls through the cracks.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Gold gradient horizontal rule */}
          <motion.div
            className="h-px mt-12 origin-left"
            style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.2), hsl(var(--gold) / 0.06), transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </section>

      <ApproachProcessTimeline />

      <FullWidthImage
        src={approachDetailsImage}
        alt="Wedding vow booklets with gold rings and eucalyptus on marble"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Editorial Split Section — narrative breathing room */}
      <EditorialSplitSection />

      <ApproachDifferentiators />

      {/* Editorial promise — upgraded with watermark + breathing diamond + scroll-linked line */}
      <section ref={promiseRef} className="py-16 md:py-24 bg-card relative overflow-hidden" aria-label="Our Promise">
        {/* Parallax watermark */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none hidden lg:flex"
          style={{ y: promiseWatermarkY }}
          aria-hidden="true"
        >
          <span className="font-serif-wedding text-[12rem] font-light text-foreground/[0.02] leading-none -rotate-90 origin-center whitespace-nowrap">
            Promise
          </span>
        </motion.div>

        {/* Ambient glow */}
        <motion.div
          className="absolute right-0 top-1/3 w-[300px] h-[300px] pointer-events-none hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.12), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
              <div className="md:col-span-1">
                <div className="relative inline-block mb-3">
                  <span className="font-serif-wedding text-5xl font-light text-primary/10 block relative z-10">03</span>
                  <div
                    className="absolute -inset-4 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.06), transparent 70%)" }}
                    aria-hidden="true"
                  />
                </div>
                <p className="font-overline text-muted-foreground/50 mb-3">Our Promise</p>
                <h3 className="font-serif-wedding text-display-md text-foreground">Every detail, protected.</h3>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-10 h-px mt-4 origin-left" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), transparent)" }} />
                <div className="mt-4">
                  <BreathingDiamond size={6} />
                </div>
              </div>
              <div className="md:col-span-2 relative">
                {/* Scroll-linked vertical gold accent */}
                <motion.div
                  className="absolute left-0 top-0 w-[2px] hidden md:block origin-top"
                  style={{
                    height: "100%",
                    background: "linear-gradient(180deg, hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.08), transparent)",
                    scaleY: promiseLineScale,
                  }}
                />
                <div className="md:pl-8">
                  <p className="font-sans-wedding text-body text-muted-foreground leading-relaxed font-light mb-4">
                    We don't just plan logistics — we anticipate emotions. From the moment your guests arrive to the final dance, we ensure every transition is seamless, every moment is savored, and you never have to think about what comes next.
                  </p>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light mb-6">
                    That's the Hickory & Rose difference: you're not just getting a planner — you're getting a partner who protects the feeling of your day.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Calm Leadership", "Elevated Design", "Seamless Execution"].map((pill) => (
                      <span key={pill} className="font-sans-wedding text-[0.5rem] tracking-[0.12em] uppercase text-primary/35 border border-primary/10 px-3 py-1 relative overflow-hidden group/pill cursor-default">
                        {/* Pill shimmer sweep */}
                        <span
                          className="absolute inset-0 -translate-x-full group-hover/pill:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
                          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.08), transparent)" }}
                          aria-hidden="true"
                        />
                        <span className="relative">{pill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Inline testimonial — upgraded with gold quotation mark + diamond separator + scroll accent */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden grain-overlay" aria-label="Testimonial">
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 0.06 }} viewport={{ once: true }} transition={{ duration: 2 }} style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.12), transparent 70%)" }} aria-hidden="true" />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            {/* Large gold gradient quotation mark */}
            <motion.span
              className="block font-serif-wedding text-8xl leading-none mb-2 select-none"
              style={{
                background: "linear-gradient(180deg, hsl(var(--gold) / 0.25), hsl(var(--gold) / 0.05))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              aria-hidden="true"
            >
              &ldquo;
            </motion.span>

            {/* Diamond ornament */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-10 h-px origin-right" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3))" }} />
              <BreathingDiamond size={6} />
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-10 h-px origin-left" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), transparent)" }} />
            </div>

            <blockquote className="font-serif-wedding text-pull-quote italic text-foreground/60 leading-relaxed mb-5">
              From the first call, I felt like I was talking to a friend who just happened to be incredibly organized. They made the entire process feel effortless.
            </blockquote>

            {/* Scroll-linked gold accent line */}
            <motion.div
              className="w-12 h-px mx-auto mb-5 origin-center"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.35), transparent)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <p className="font-sans-wedding text-body-sm font-light text-foreground/40">Emma & James</p>
            <p className="font-sans-wedding text-[0.5rem] tracking-[0.12em] uppercase text-muted-foreground/25 mt-1">The Glass House · Autumn 2024</p>

            {/* Service tag pill */}
            <div className="mt-4">
              <span className="font-sans-wedding text-[0.45rem] tracking-[0.15em] uppercase text-primary/25 border border-primary/8 px-3 py-1">
                Full-Service Planning
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FullWidthImage src={ceremonyImage} alt="Outdoor wedding ceremony setup in mountain meadow with floral arch" height="h-[35vh] md:h-[45vh]" />

      {/* Promise quote */}
      <section className="py-20 md:py-28 bg-sage-deep relative overflow-hidden grain-overlay vignette" aria-label="Brand Promise">
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 0.06 }} viewport={{ once: true }} transition={{ duration: 2 }} style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.15), transparent 70%)" }} aria-hidden="true" />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-10">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-10 h-px origin-right" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3))" }} />
              <motion.span className="w-2.5 h-2.5 rotate-45 shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.5), hsl(var(--gold) / 0.15))", boxShadow: "0 0 16px 6px hsl(var(--gold) / 0.12)" }} animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.85, 1.15, 0.85] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-10 h-px origin-left" style={{ background: "linear-gradient(270deg, transparent, hsl(var(--gold) / 0.3))" }} />
            </div>
            <span className="font-serif-wedding text-6xl text-primary-foreground/[0.06] leading-none block -mb-4" aria-hidden="true">"</span>
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "Our job isn't just to plan your wedding — it's to protect the feeling of your day."
            </blockquote>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-10 h-px mx-auto mb-5 origin-center" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.35), transparent)" }} />
            <span className="font-script text-xl text-primary-foreground/35">Hickory & Rose</span>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="w-4 h-px bg-primary-foreground/10" />
              <span className="font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-primary-foreground/20">Est. 2018</span>
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
