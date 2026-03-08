import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const PreFooterDivider = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      aria-label="Booking prompt"
    >
      {/* Parallax watermark */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ y: watermarkY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.025 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[14rem] md:text-[22rem] text-foreground leading-none tracking-tight whitespace-nowrap">
          Inquire
        </span>
      </motion.div>

      {/* Decorative script ampersand */}
      <motion.div
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-script text-[16rem] md:text-[22rem] text-foreground leading-none">
          &
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center relative">
        <ScrollReveal>
          {/* Top ornamental line — scroll-linked */}
          <motion.div
            className="w-24 h-px mx-auto mb-10 origin-center"
            style={{
              scaleX: lineScale,
              background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
            }}
          />

          {/* Section index */}
          <motion.span
            className="font-serif-wedding text-4xl font-light text-primary/8 block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ❖
          </motion.span>

          <p className="font-overline text-muted-foreground/35 mb-6">
            Limited Availability
          </p>

          <p className="font-serif-wedding text-display-md text-foreground/70 italic leading-relaxed mb-4">
            Currently accepting a limited number of weddings for 2025 & 2026.
          </p>

          <p className="font-sans-wedding text-body-sm text-muted-foreground/40 font-light mb-4 max-w-md mx-auto">
            We take on a curated number of couples each season to ensure every
            wedding receives our full attention and care.
          </p>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {["Complimentary Discovery Call", "No Commitment Required"].map((signal, i) => (
              <span
                key={signal}
                className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/25"
              >
                {i > 0 && <span className="mr-3">·</span>}
                {signal}
              </span>
            ))}
          </div>

          <Link
            to="/inquire"
            className="inline-flex items-center font-overline text-primary/60 hover:text-primary transition-colors duration-300 group"
          >
            Check Availability
            <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </Link>

          {/* Bottom ornamental line — scroll-linked */}
          <motion.div
            className="w-24 h-px mx-auto mt-10 origin-center"
            style={{
              scaleX: lineScale,
              background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
            }}
          />

          {/* Bottom attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-script text-lg text-primary/10 mt-8"
          >
            Hickory & Rose
          </motion.p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PreFooterDivider;
