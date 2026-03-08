import { useEffect, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, useScroll, useTransform } from "framer-motion";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import ImageReveal from "@/components/wedding/ImageReveal";
import MagneticButton from "@/components/wedding/MagneticButton";
import servicesHeroImage from "@/assets/services-hero.jpg";
import serviceDayofImage from "@/assets/service-dayof.jpg";
import servicePlanningImage from "@/assets/service-planning.jpg";
import serviceStationeryImage from "@/assets/service-stationery.jpg";
import serviceFullserviceImage from "@/assets/service-fullservice.jpg";
import editorialFloralsImage from "@/assets/editorial-florals.jpg";
import vendorDetailImage from "@/assets/vendor-detail.jpg";

const serviceTiers = [
  {
    id: "day-of",
    title: "Day-Of Coordination",
    tagline: "You planned it. We perfect it.",
    investment: "Starting at $2,500",
    description:
      "For couples who love planning and have handled the details — we step in 4-6 weeks before to review everything, confirm vendors, build your timeline, and lead the day with calm authority.",
    includes: [
      "Detailed timeline creation and management",
      "Vendor confirmation and logistics coordination",
      "Full rehearsal direction",
      "Up to 12 hours of day-of leadership",
      "Setup and teardown oversight",
      "Emergency kit and problem-solving",
    ],
    idealFor:
      "Couples who enjoy planning but want a professional to execute flawlessly.",
    image: serviceDayofImage,
    imageAlt: "Wedding planner leading a ceremony rehearsal at golden hour with an ivory floral arch",
  },
  {
    id: "partial",
    title: "Partial Planning",
    tagline: "Collaboration at every turn.",
    investment: "Starting at $5,000",
    description:
      "For couples who want professional guidance without handing over the reins entirely. We partner with you on design direction, vendor selection, and planning milestones while you maintain creative control.",
    includes: [
      "Everything in Day-Of Coordination",
      "Design concept development and mood boarding",
      "Vendor recommendations and booking assistance",
      "Budget tracking and management",
      "Monthly planning meetings",
      "Décor and styling guidance",
    ],
    idealFor:
      "Couples who want expert support and creative direction while staying involved.",
    image: serviceStationeryImage,
    imageAlt: "Luxury wedding stationery suite with calligraphy and wax seals on marble",
  },
  {
    id: "full",
    title: "Full-Service Planning",
    tagline: "From vision to celebration.",
    investment: "Starting at $8,500",
    description:
      "For couples who want the complete experience — from the earliest conversations about your vision to the final send-off. We become an extension of you, handling every detail so you can simply be present.",
    includes: [
      "Everything in Partial Planning",
      "Complete event design and styling",
      "Full vendor sourcing, negotiation, and management",
      "Stationery and invitation guidance",
      "Guest experience curation",
      "Comprehensive logistics and production management",
      "Welcome event and post-wedding brunch coordination",
    ],
    idealFor:
      "Couples who want a truly hands-free, elevated experience from start to finish.",
    image: serviceFullserviceImage,
    imageAlt: "Wedding planner styling an elegant reception table with sage florals and crystal glassware",
  },
];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Services = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setPageMeta({
      title: "Wedding Planning Services — Day-Of, Partial & Full-Service | Hickory & Rose",
      description: "Explore Hickory & Rose wedding planning services in Edmonton. Day-of coordination from $2,500, partial planning from $5,000, full-service from $8,500. Custom proposals for every couple.",
      path: "/services",
    });
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="overlay" />

      {/* Cinematic Parallax Hero */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden grain-overlay vignette">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={servicesHeroImage}
            alt="Luxury wedding planning flatlay with calligraphy timeline, sage eucalyptus, and gold wax seal on marble"
            className="w-full h-[120%] object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55" />
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
            Services
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
                Our Services
                <motion.span
                  className="w-8 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6 max-w-3xl">
              Services Tailored to You
            </h1>
            <p className="font-sans-wedding text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto font-light">
              Every couple is different. Our services meet you where you are —
              whether you need a steady hand on the day or a trusted partner from
              the very beginning.
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
          01
        </motion.span>
      </section>

      {/* Editorial Intro — asymmetric layout */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
              <div className="md:col-span-5">
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-3">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-px bg-primary/30" />
                    Our Philosophy
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-md text-foreground leading-tight">
                  No two love stories are the same.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                  We don't believe in one-size-fits-all packages. Whether you've already mapped every detail or are starting from a blank page, our role adapts to yours. Each tier below represents a starting point — your custom proposal will reflect what you truly need.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Tiers */}
      {serviceTiers.map((service, index) => (
        <div key={service.id}>
          <section
            id={service.id}
            className={`py-section-mobile md:py-section-tablet lg:py-section-desktop ${
              index % 2 === 0 ? "bg-background" : "bg-card"
            }`}
          >
            <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
              <div className={`grid grid-cols-1 ${service.image ? "lg:grid-cols-2 gap-12 lg:gap-16 items-start" : "max-w-4xl mx-auto"}`}>
                {/* Image column (alternating sides) */}
                {service.image && index % 2 === 0 && (
                  <ScrollReveal>
                    <ImageReveal direction="left">
                      <div className="aspect-[4/5] overflow-hidden sticky top-28">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </ImageReveal>
                  </ScrollReveal>
                )}

                {/* Content column */}
                <div>
                  <ScrollReveal delay={service.image ? 0.1 : 0}>
                    <div className={`${service.image ? "" : "text-center"} mb-10`}>
                      <p className="font-sans-wedding text-label uppercase text-primary/60 mb-3">
                        <span className="inline-flex items-center gap-3">
                          <span className="w-4 h-px bg-primary/30" />
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </p>
                      <h2 className="font-serif-wedding text-display-lg text-foreground mb-2">
                        {service.title}
                      </h2>
                      <p className="font-serif-wedding text-lg italic text-muted-foreground mb-3">
                        {service.tagline}
                      </p>
                      <p className="font-sans-wedding text-label uppercase text-primary">
                        {service.investment}
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={service.image ? 0.15 : 0.1}>
                    <p className={`font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light ${service.image ? "" : "text-center max-w-2xl mx-auto"} mb-10`}>
                      {service.description}
                    </p>
                    <div className="border-t border-border pt-8 mb-8">
                      <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-5">
                        What's Included
                      </p>
                      <motion.ul
                        className="space-y-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        {service.includes.map((item, i) => (
                          <motion.li
                            key={item}
                            custom={i}
                            variants={listItem}
                            className="flex items-start gap-3"
                          >
                            <motion.span
                              className="w-5 h-px bg-primary/40 mt-2.5 shrink-0"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.06 }}
                              style={{ originX: 0 }}
                            />
                            <span className="font-sans-wedding text-body-sm text-foreground font-light">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Ideal-for pull quote */}
                    <div className="border-l-2 border-primary/15 pl-5 mt-8">
                      <p className="font-serif-wedding text-sm italic text-foreground/60 leading-relaxed">
                        Ideal for: {service.idealFor}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Image on right for odd indexes */}
                {service.image && index % 2 !== 0 && (
                  <ScrollReveal>
                    <ImageReveal direction="right">
                      <div className="aspect-[4/5] overflow-hidden sticky top-28">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </ImageReveal>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </section>

          {/* Editorial image break between tiers */}
          {index < serviceTiers.length - 1 && index === 0 && (
            <FullWidthImage
              src={editorialFloralsImage}
              alt="Sage eucalyptus and ivory garden rose arrangement detail"
              height="h-[25vh] md:h-[35vh]"
            />
          )}
        </div>
      ))}

      {/* Testimonial break */}
      <section className="py-20 md:py-28 bg-sage-deep">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-12 h-px bg-primary-foreground/20 mx-auto mb-10 origin-center"
            />
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "They handled every detail with such grace — we were completely
              free to enjoy our day. It was everything we dreamed of and more."
            </blockquote>
            <p className="font-sans-wedding text-body-sm font-light text-primary-foreground/70">
              Olivia & Noah
            </p>
            <p className="font-sans-wedding text-xs text-primary-foreground/40 mt-1">
              Jasper Park Lodge, Summer 2024
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison — horizontal ruled layout */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-px bg-border" />
                  Find Your Fit
                  <span className="w-5 h-px bg-border" />
                </span>
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                Not sure which service is right?
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              { tier: "Day-Of", desc: "You've planned it all — we perfect and lead the day.", price: "From $2,500" },
              { tier: "Partial", desc: "Collaborate on design and vendors with expert guidance.", price: "From $5,000" },
              { tier: "Full-Service", desc: "We handle everything from vision to final send-off.", price: "From $8,500" },
            ].map((item, i) => (
              <ScrollReveal key={item.tier} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 md:py-10 border-t border-border/60 group">
                  <div className="md:col-span-3">
                    <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                      {item.tier}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <p className="font-sans-wedding text-label uppercase text-primary">{item.price}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border/60" />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16">
              <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-8 font-light max-w-lg mx-auto">
                Every wedding is unique. We'd love to learn about your vision
                and recommend the perfect fit.
              </p>
              <MagneticButton to="/inquire" variant="primary">
                Schedule a Discovery Call
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Hickory & Rose — editorial differentiator */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card relative overflow-hidden">
        {/* Decorative background monogram */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-script text-[18rem] md:text-[24rem] text-foreground leading-none">
            R
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-16 md:mb-24">
              <div className="md:col-span-5">
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-px bg-primary/30" />
                    The Difference
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-lg text-foreground leading-tight">
                  Why couples choose us.
                </h2>
              </div>
              <div className="md:col-span-7 md:pt-8">
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                  It's not about what we do — it's about how we make you feel. Our couples consistently describe the same thing: a deep exhale. The relief of knowing every detail is handled with care, taste, and quiet confidence.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
            {[
              {
                title: "Calm Under Pressure",
                desc: "When the unexpected happens — and it always does — we handle it before you even notice. That's the promise.",
                icon: "01",
              },
              {
                title: "Design-Forward Thinking",
                desc: "We don't just execute a vision — we elevate it. Every texture, every colour, every transition point is considered.",
                icon: "02",
              },
              {
                title: "Vendor Relationships",
                desc: "Years of trusted partnerships mean preferred access, better pricing, and a team that works together seamlessly.",
                icon: "03",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="py-10 md:py-12 md:px-8 border-t md:border-t-0 md:border-l border-border/40 first:border-t-0 md:first:border-l-0 group">
                  <span className="font-serif-wedding text-4xl font-light text-primary/10 group-hover:text-primary/20 transition-colors duration-700 block mb-4">
                    {item.icon}
                  </span>
                  <h3 className="font-serif-wedding text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Vendor Partners */}
      <section className="py-section-mobile md:py-section-tablet bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <ImageReveal direction="left">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={vendorDetailImage}
                    alt="Luxury wedding stationery flatlay with gold scissors, calligraphy, sage eucalyptus, and wax seal on marble"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ImageReveal>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-px bg-primary/30" />
                    Our Network
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-4">
                  Trusted Partners
                </h2>
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-10">
                  Over seven years, we've built deep relationships with Edmonton and the Rockies' finest vendors. These partnerships mean preferred availability, seamless collaboration, and an elevated experience for every couple.
                </p>

                <div className="space-y-0 border-t border-border/40">
                  {[
                    { category: "Florals & Styling", names: "Bloomsbury House · Wild North Florals" },
                    { category: "Photography", names: "Everly Studio · Sage & Cedar" },
                    { category: "Catering", names: "The Butternut Tree · RGE RD" },
                    { category: "Venues", names: "Fairmont Macdonald · Jasper Park Lodge" },
                    { category: "Stationery", names: "Quill & Oak · Foiled Calligraphy" },
                  ].map((partner, i) => (
                    <motion.div
                      key={partner.category}
                      className="grid grid-cols-12 gap-4 py-5 border-b border-border/30 group cursor-default"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    >
                      <div className="col-span-4">
                        <p className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-primary/50 group-hover:text-primary transition-colors duration-500">
                          {partner.category}
                        </p>
                      </div>
                      <div className="col-span-8">
                        <p className="font-sans-wedding text-body-sm text-muted-foreground/60 font-light group-hover:text-foreground transition-colors duration-500">
                          {partner.names}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default Services;
