import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const LoveQuoteSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const decorScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const decorOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.04]);

  return (
    <section
      ref={ref}
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-sage-deep relative overflow-hidden"
      aria-label="Brand manifesto"
    >
      {/* Background ampersand */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ scale: decorScale, opacity: decorOpacity }}
      >
        <span className="font-script text-[20rem] md:text-[30rem] text-primary-foreground select-none leading-none">
          &
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
        <ScrollReveal>
          <p className="font-overline text-primary-foreground/40 mb-10">
            Our Promise
          </p>

          <blockquote className="font-serif-wedding text-display-md md:text-display-lg text-primary-foreground leading-relaxed mb-12">
            We believe your wedding day should be felt, not managed. That the
            details should serve the moment — never compete with it. That calm
            is not the absence of planning, but the presence of it.
          </blockquote>

          {/* Refined attribution — no generic symbols */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-12 h-px bg-primary-foreground/20 mx-auto mb-4 origin-center"
          />
          <span className="font-script text-xl text-primary-foreground/35">
            Hickory & Rose
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LoveQuoteSection;
