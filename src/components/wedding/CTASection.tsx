import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import receptionImage from "@/assets/portfolio-reception.jpg";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative py-section-mobile md:py-section-tablet lg:py-section-desktop overflow-hidden grain-overlay vignette"
      aria-label="Get in touch"
    >
      <div className="absolute inset-0">
        <motion.img
          src={receptionImage}
          alt=""
          className="w-full h-[120%] object-cover"
          style={{ y }}
          loading="lazy"
          aria-hidden="true"
        />
        {/* Multi-layer gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/65 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/15 via-transparent to-foreground/10" />
      </div>

      {/* Decorative background monogram */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        aria-hidden="true"
      >
        <span className="font-script text-[12rem] md:text-[18rem] text-white/[0.03] select-none leading-none">
          &
        </span>
      </motion.div>

      <div className="relative container mx-auto px-6 lg:px-8 text-center max-w-2xl">
        <ScrollReveal>
          <p className="font-sans-wedding text-label uppercase text-white/30 mb-6">
            <span className="inline-flex items-center gap-3">
              <span className="w-5 h-px bg-white/20" />
              Let's Begin
              <span className="w-5 h-px bg-white/20" />
            </span>
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-16 h-px bg-white/15 mx-auto mb-10 origin-center"
          />

          <h2 className="font-serif-wedding text-display-lg text-white mb-4 leading-tight">
            Ready to feel calm about your wedding day?
          </h2>
          <p className="font-sans-wedding text-sm text-white/50 leading-relaxed mb-4 max-w-md mx-auto font-light">
            Let's talk about your vision, your day, and how Hickory & Rose can
            make it effortlessly beautiful.
          </p>

          {/* Trust line */}
          <p className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-white/25 mb-12">
            Complimentary discovery call · No obligation · Typically responds within 48 hours
          </p>

          <MagneticButton to="/inquire" variant="outline-light">
            Begin Your Story
          </MagneticButton>

          {/* Subtle bottom attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16"
          >
            <span className="font-script text-lg text-white/15">
              Hickory & Rose
            </span>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
