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
import ApproachProcessTimeline from "@/components/wedding/ApproachProcessTimeline";
import ApproachDifferentiators from "@/components/wedding/ApproachDifferentiators";

import ceremonyImage from "@/assets/ceremony-setup.jpg";
import approachDetailsImage from "@/assets/approach-details.jpg";
import approachHeroImage from "@/assets/approach-hero.jpg";

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

        <motion.span
          className="absolute bottom-8 right-8 font-serif-wedding text-sm text-white/15 tracking-widest z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          04
        </motion.span>
      </section>

      {/* Philosophy intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
              <div className="md:col-span-4">
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">01</span>
                <p className="font-overline text-muted-foreground/50 mb-3">Philosophy</p>
                <h2 className="font-serif-wedding text-display-md text-foreground">Planning with intention.</h2>
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

      <ApproachProcessTimeline />

      <FullWidthImage
        src={approachDetailsImage}
        alt="Wedding vow booklets with gold rings and eucalyptus on marble"
        height="h-[35vh] md:h-[45vh]"
      />

      <ApproachDifferentiators />

      {/* Editorial promise */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
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
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">03</span>
                <p className="font-overline text-muted-foreground/50 mb-3">Our Promise</p>
                <h3 className="font-serif-wedding text-display-md text-foreground">Every detail, protected.</h3>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-10 h-px mt-4 origin-left" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), transparent)" }} />
              </div>
              <div className="md:col-span-2 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] hidden md:block" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.25), hsl(var(--gold) / 0.08), transparent)" }} />
                <div className="md:pl-8">
                  <p className="font-sans-wedding text-body text-muted-foreground leading-relaxed font-light mb-4">
                    We don't just plan logistics — we anticipate emotions. From the moment your guests arrive to the final dance, we ensure every transition is seamless, every moment is savored, and you never have to think about what comes next.
                  </p>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light mb-6">
                    That's the Hickory & Rose difference: you're not just getting a planner — you're getting a partner who protects the feeling of your day.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Calm Leadership", "Elevated Design", "Seamless Execution"].map((pill) => (
                      <span key={pill} className="font-sans-wedding text-[0.5rem] tracking-[0.12em] uppercase text-primary/35 border border-primary/10 px-3 py-1">{pill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Inline testimonial */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 0.06 }} viewport={{ once: true }} transition={{ duration: 2 }} style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.12), transparent 70%)" }} aria-hidden="true" />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 h-px origin-right" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3))" }} />
              <span className="w-2 h-2 rotate-45" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1))" }} />
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-8 h-px origin-left" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), transparent)" }} />
            </div>
            <blockquote className="font-serif-wedding text-pull-quote italic text-foreground/60 leading-relaxed mb-5">
              "From the first call, I felt like I was talking to a friend who just happened to be incredibly organized. They made the entire process feel effortless."
            </blockquote>
            <p className="font-sans-wedding text-body-sm font-light text-foreground/40">Emma & James</p>
            <p className="font-sans-wedding text-[0.5rem] tracking-[0.12em] uppercase text-muted-foreground/25 mt-1">The Glass House · Autumn 2024</p>
          </ScrollReveal>
        </div>
      </section>

      <FullWidthImage src={ceremonyImage} alt="Outdoor wedding ceremony setup in mountain meadow with floral arch" height="h-[35vh] md:h-[45vh]" />

      {/* Promise quote */}
      <section className="py-20 md:py-28 bg-sage-deep relative overflow-hidden">
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
