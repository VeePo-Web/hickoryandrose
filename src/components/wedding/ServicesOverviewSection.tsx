import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import dayofImage from "@/assets/service-dayof.jpg";
import planningImage from "@/assets/service-planning.jpg";
import fullserviceImage from "@/assets/service-fullservice.jpg";

const services = [
  {
    number: "01",
    title: "Day-Of Coordination",
    tagline: "You planned it. We perfect it.",
    description:
      "You've planned your wedding with care — we step in to execute it flawlessly. Calm leadership on the day that matters most.",
    investment: "From $2,500",
    link: "/services#day-of",
    featured: false,
    image: dayofImage,
    imageAlt: "Wedding planner organizing ceremony setup at golden hour",
  },
  {
    number: "02",
    title: "Partial Planning",
    tagline: "Collaboration at every turn.",
    description:
      "Collaborative guidance through the details that need a professional touch, from vendor coordination to design refinement.",
    investment: "From $5,000",
    link: "/services#partial",
    featured: false,
    image: planningImage,
    imageAlt: "Consultation over floral arrangements with sage eucalyptus",
  },
  {
    number: "03",
    title: "Full-Service Planning",
    tagline: "From vision to celebration.",
    description:
      "From vision to celebration, we handle every detail. You get to simply be present and enjoy the unfolding of your story.",
    investment: "From $8,500",
    link: "/services#full",
    featured: true,
    image: fullserviceImage,
    imageAlt: "Wedding planning flatlay with mood board and calligraphy",
  },
];

const ServicesOverviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const accentLineH = useTransform(scrollYProgress, [0.15, 0.7], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card relative overflow-hidden"
      aria-label="Our services"
    >
      {/* Large decorative "Services" watermark */}
      <motion.div
        className="absolute -left-8 top-1/3 pointer-events-none select-none"
        style={{ y: bgTextY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[10rem] md:text-[16rem] font-light text-foreground leading-none tracking-tight whitespace-nowrap">
          Services
        </span>
      </motion.div>

      {/* Scroll-linked vertical accent line */}
      <motion.div
        className="absolute right-[10%] top-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent origin-top hidden lg:block"
        style={{ height: accentLineH }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24 items-baseline">
            <div className="md:col-span-5">
              <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-4">
                03
              </span>
              <p className="font-overline text-muted-foreground mb-4">
                What We Offer
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                Services Tailored to You
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-12">
              <p className="font-sans-wedding text-body-sm text-muted-foreground/50 font-light leading-relaxed">
                Every couple is different. Our services flex to meet you exactly where you are in your planning journey — whether you need a steady hand on the day or a creative partner from the very beginning.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-0 relative">
          {/* Floating preview image on hover — desktop only */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                key={hoveredIndex}
                className="absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block pointer-events-none"
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-48 xl:w-56 aspect-[3/4] overflow-hidden shadow-2xl">
                  <img
                    src={services[hoveredIndex].image}
                    alt={services[hoveredIndex].imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-muted-foreground/25 mt-3 text-right">
                  {services[hoveredIndex].title}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 0.1}>
              <Link
                to={service.link}
                className="group block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 md:py-14 border-t border-border/60 relative transition-colors duration-500 ${service.featured ? "bg-primary/[0.02] hover:bg-primary/[0.04]" : "hover:bg-primary/[0.01]"}`}>
                  {service.featured && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="absolute top-3 right-4 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span className="font-overline text-[0.5rem] text-primary/60 tracking-[0.25em]">
                        Most Popular
                      </span>
                    </motion.div>
                  )}

                  <div className="md:col-span-1">
                    <motion.span
                      className="font-serif-wedding text-4xl md:text-5xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-700"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    >
                      {service.number}
                    </motion.span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="font-serif-wedding text-sm italic text-muted-foreground/60 mt-1">
                      {service.tagline}
                    </p>
                    <div className="mt-2 h-px bg-primary/40 w-0 group-hover:w-full transition-all duration-700 ease-out origin-left" />
                  </div>

                  <div className="md:col-span-5">
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light max-w-md">
                      {service.description}
                    </p>
                  </div>

                  <div className="md:col-span-2 flex items-center justify-between md:flex-col md:items-end gap-2">
                    <span className="font-overline text-primary text-[0.625rem]">
                      {service.investment}
                    </span>
                    <motion.span
                      className="font-sans-wedding text-sm text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          <div className="border-t border-border/60" />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14 md:mt-20">
            <Link
              to="/services"
              className="inline-flex items-center font-overline text-accent hover:text-primary transition-colors duration-200 group"
            >
              View All Services
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
