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
import GoldFrame from "@/components/wedding/GoldFrame";
import BreathingDiamond from "@/components/wedding/BreathingDiamond";
import AboutMilestones from "@/components/wedding/AboutMilestones";
import AboutTestimonials from "@/components/wedding/AboutTestimonials";
import founderImage from "@/assets/founder-portrait.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import aboutHeroImage from "@/assets/about-hero.jpg";
import editorialFloralsImage from "@/assets/editorial-florals.jpg";

const values = [
  {
    title: "Calm Leadership",
    pullQuote: "Presence over panic.",
    description:
      "We lead with quiet confidence so you never feel rushed, pressured, or anxious. Our composed presence on the day means you can exhale and simply be in the moment.",
  },
  {
    title: "Intentional Design",
    pullQuote: "Nothing accidental.",
    description:
      "Every detail is considered — from the arc of your ceremony to the way light falls across your tablescape. We design with purpose so every element tells your story.",
  },
  {
    title: "Genuine Care",
    pullQuote: "Not a project — a privilege.",
    description:
      "Your wedding isn't a line item to us. It's a responsibility we take personally. We invest emotionally because we believe that's the only way to create something truly meaningful.",
  },
];

// milestones and testimonials data moved to sub-components

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { scrollYProgress: founderScroll } = useScroll({
    target: founderRef,
    offset: ["start end", "end start"],
  });
  const founderImgY = useTransform(founderScroll, [0, 1], ["4%", "-4%"]);

  const advanceTestimonial = useCallback(() => {
    setActiveTestimonial((i) => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advanceTestimonial, 6000);
    return () => clearInterval(timer);
  }, [advanceTestimonial]);

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
      <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden grain-overlay vignette">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={aboutHeroImage}
            alt="Wedding planner in sunlit garden conservatory surrounded by white florals"
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
            About
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
                About Us
                <motion.span
                  className="w-8 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
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

        <GoldFrame inset="20px" delay={1} />

        {/* Credential strip */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-4 py-3 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {["Est. 2018", "Edmonton & Rockies", "50+ Weddings"].map((t, i) => (
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
          03
        </motion.span>
      </section>

      {/* Founder Story — editorial asymmetric */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
        <div ref={founderRef} className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <ImageReveal direction="left" delay={0.1}>
                <div className="aspect-[3/4] overflow-hidden sticky top-28 relative group">
                  <motion.img
                    src={founderImage}
                    alt="Founder of Hickory & Rose"
                    className="w-full h-[110%] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ y: founderImgY }}
                    loading="lazy"
                  />
                  {/* Gold corner frame accents on hover */}
                  <div className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                    <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  </div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                    <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  </div>
                </div>
              </ImageReveal>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">01</span>
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-3">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-px bg-primary/30" />
                    The Founder
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-8">
                  The heart behind every detail.
                </h2>
                <div className="space-y-5 font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
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

                <div className="border-l-2 border-primary/20 pl-5 my-10">
                  <p className="font-serif-wedding text-base text-foreground/70 italic leading-relaxed">
                    "Calm is not the absence of planning — it's the presence of it."
                  </p>
                </div>

                <MagneticButton to="/inquire" variant="outline">
                  Work With Us
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Signature Quote — editorial with gold ornaments */}
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
            Promise
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            {/* Gold diamond ornament */}
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
              "We don't just plan weddings — we protect the feeling of your day."
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

      {/* Values — editorial cards with pull quotes */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">02</span>
              <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-px bg-border" />
                  Our Values
                  <span className="w-5 h-px bg-border" />
                </span>
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                What Guides Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="group">
                  <span className="font-serif-wedding text-5xl font-light text-primary/10 group-hover:text-primary/20 transition-colors duration-700 block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    className="h-px bg-primary/25 mb-6 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  />

                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rotate-45 shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.35), hsl(var(--gold) / 0.1))" }} />
                    <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                      {value.title}
                    </h3>
                  </div>

                  <p className="font-serif-wedding text-sm italic text-primary/50 mb-4">
                    {value.pullQuote}
                  </p>

                  <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Image Mosaic — asymmetric 3-image grid */}
      <section className="py-12 md:py-16 bg-card overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            {/* Large left image */}
            <ScrollReveal delay={0} className="col-span-2 md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden relative group">
                <img
                  src={bouquetImage}
                  alt="Bridal bouquet detail with ivory roses and sage greenery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.35), transparent)" }} />
                </div>
                <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.35), transparent)" }} />
                </div>
              </div>
            </ScrollReveal>

            {/* Right stacked pair */}
            <div className="col-span-2 md:col-span-5 flex flex-col gap-3 md:gap-4">
              <ScrollReveal delay={0.1}>
                <div className="aspect-[3/2] overflow-hidden relative group">
                  <img
                    src={editorialFloralsImage}
                    alt="Sage eucalyptus and ivory floral arrangement on ceremony table"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                    <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="aspect-[3/2] overflow-hidden relative group">
                  <img
                    src={aboutHeroImage}
                    alt="Wedding planner coordinating details in sunlit garden"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                    <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Parallax Testimonial Carousel */}
      <section className="py-section-mobile md:py-section-tablet bg-card relative overflow-hidden">
        {/* Parallax watermark */}
        <motion.div
          className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-serif-wedding text-[8rem] md:text-[14rem] text-foreground leading-none tracking-tight italic whitespace-nowrap">
            Voices
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left: Label */}
              <div className="lg:col-span-3">
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">03</span>
                <p className="font-overline text-muted-foreground/50 mb-3">Kind Words</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-10 h-px bg-primary/25 origin-left mb-4"
                />
                <p className="font-sans-wedding text-body-sm text-muted-foreground/50 font-light leading-relaxed">
                  Real words from real couples who trusted us with their most important day.
                </p>
              </div>

              {/* Right: Testimonial crossfade */}
              <div className="lg:col-span-9">
                <div className="min-h-[200px] md:min-h-[180px] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <span className="font-serif-wedding text-6xl text-primary/[0.06] leading-none block -mb-4" aria-hidden="true">"</span>
                      <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-6">
                        {testimonials[activeTestimonial].quote}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="w-px h-10 bg-primary/25 origin-top"
                        />
                        <div>
                          <p className="font-sans-wedding text-body-sm font-medium text-foreground/70">
                            {testimonials[activeTestimonial].couple}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/40">
                              {testimonials[activeTestimonial].venue}
                            </p>
                            <span className="text-muted-foreground/20">·</span>
                            <p className="font-serif-wedding text-xs italic text-muted-foreground/30">
                              {testimonials[activeTestimonial].season}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress bars */}
                <div className="flex items-center gap-4 mt-10" role="tablist" aria-label="Testimonial navigation">
                  <div className="flex gap-2 flex-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className="h-[2px] flex-1 relative overflow-hidden transition-colors"
                        style={{ background: index < activeTestimonial ? "hsl(var(--gold) / 0.2)" : "hsl(var(--primary) / 0.1)" }}
                        aria-label={`View testimonial ${index + 1}`}
                      >
                        {index === activeTestimonial && (
                          <motion.div
                            className="absolute inset-0 origin-left"
                            style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.6), hsl(var(--gold) / 0.35))" }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                            key={`progress-${activeTestimonial}`}
                          />
                        )}
                        {index < activeTestimonial && (
                          <div className="absolute inset-0" style={{ background: "hsl(var(--gold) / 0.35)" }} />
                        )}
                      </button>
                    ))}
                  </div>
                  <span className="font-sans-wedding text-[0.6rem] text-muted-foreground/40 tabular-nums tracking-[0.15em]">
                    {String(activeTestimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Editorial image break */}
      <FullWidthImage
        src={editorialFloralsImage}
        alt="Sage eucalyptus and ivory garden rose arrangement detail"
        height="h-[25vh] md:h-[35vh]"
      />

      {/* Journey — cinematic vertical timeline */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
        {/* Parallax watermark */}
        <motion.div
          className="absolute -right-8 top-1/3 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.015 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-serif-wedding text-[10rem] md:text-[16rem] font-light text-foreground leading-none tracking-tight italic whitespace-nowrap">
            Journey
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">04</span>
              <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-px bg-border" />
                  Our Journey
                  <span className="w-5 h-px bg-border" />
                </span>
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                Milestones Along the Way
              </h2>
            </div>
          </ScrollReveal>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Central timeline spine */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px hidden md:block">
              <motion.div
                className="w-full h-full origin-top"
                style={{ background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.15), hsl(var(--gold) / 0.2), hsl(var(--primary) / 0.15), transparent)" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
            {/* Mobile spine */}
            <div className="absolute left-6 top-0 bottom-0 w-px md:hidden">
              <motion.div
                className="w-full h-full origin-top"
                style={{ background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.15), hsl(var(--gold) / 0.2), hsl(var(--primary) / 0.15), transparent)" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>

            <div className="space-y-0">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: isEven ? -20 : 20, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative group"
                  >
                    {/* Timeline node */}
                    <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                      <motion.div
                        className="w-3 h-3 rotate-45 border border-primary/25 group-hover:border-primary/50 transition-colors duration-500 relative"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                      >
                        <span
                          className="absolute inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.4), hsl(var(--primary) / 0.2))" }}
                        />
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <div className={`pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 py-8 md:py-12 ${isEven ? '' : ''}`}>
                      <div className={`${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                        <span className="font-serif-wedding text-3xl md:text-4xl font-light text-primary/20 group-hover:text-primary/50 transition-colors duration-500 block mb-2">
                          {milestone.year}
                        </span>
                        <motion.div
                          className={`w-8 h-px mb-3 ${isEven ? 'md:ml-auto' : ''}`}
                          style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), hsl(var(--primary) / 0.1))" }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        />
                        <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light group-hover:text-foreground/70 transition-colors duration-500">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Timeline end ornament */}
            <div className="flex justify-center mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-2 h-2 rotate-45 border border-primary/20"
                style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.2), transparent)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition — Editorial "As Seen In" Ribbon */}
      <section className="py-20 md:py-28 bg-card relative overflow-hidden">
        {/* Ambient gold glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.12), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
          <ScrollReveal>
            {/* Header with full-width ruled lines */}
            <div className="flex items-center gap-6 mb-16 md:mb-20">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 h-px origin-left"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.2))" }}
              />
              <div className="text-center shrink-0">
                <p className="font-sans-wedding text-[0.5rem] tracking-[0.3em] uppercase text-muted-foreground/30 mb-2">
                  As Seen In
                </p>
                <span
                  className="w-1.5 h-1.5 rotate-45 inline-block"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.5), hsl(var(--gold) / 0.15))" }}
                />
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 h-px origin-right"
                style={{ background: "linear-gradient(270deg, transparent, hsl(var(--gold) / 0.2))" }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { publication: "Edmonton Bridal", note: "Featured Planner, 2024" },
                { publication: "The Knot", note: "Best of Weddings" },
                { publication: "Style Me Pretty", note: "Real Wedding Feature" },
                { publication: "Alberta Weddings", note: "Top 10 Planners" },
              ].map((press, i) => (
                <motion.div
                  key={press.publication}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative p-6 md:p-8 text-center overflow-hidden"
                  style={{ border: "1px solid hsl(var(--gold) / 0.08)" }}
                >
                  {/* Gold shimmer sweep on hover */}
                  <div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-[1.2s] ease-in-out pointer-events-none"
                    style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.05) 35%, hsl(var(--gold) / 0.1) 50%, hsl(var(--gold) / 0.05) 65%, transparent 100%)" }}
                  />
                  {/* Gold corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                    <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), transparent)" }} />
                    <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.3), transparent)" }} />
                  </div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                    <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.3), transparent)" }} />
                    <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.3), transparent)" }} />
                  </div>
                  {/* Content */}
                  <p className="font-serif-wedding text-xl md:text-2xl italic font-light text-foreground/15 group-hover:text-foreground/35 transition-colors duration-500 mb-2">
                    {press.publication}
                  </p>
                  <motion.div
                    className="w-5 h-px mx-auto mb-2"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.25), transparent)" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  />
                  <p className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors duration-500">
                    {press.note}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom ornament */}
            <div className="flex items-center justify-center gap-4 mt-16">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-8 h-px origin-right"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.15))" }}
              />
              <span
                className="w-1.5 h-1.5 rotate-45 shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.08))" }}
              />
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-8 h-px origin-left"
                style={{ background: "linear-gradient(270deg, transparent, hsl(var(--gold) / 0.15))" }}
              />
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
