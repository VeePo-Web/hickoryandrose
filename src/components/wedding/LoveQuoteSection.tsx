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
  const decorOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.06]);

  return (
    <section
      ref={ref}
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-sage-deep relative overflow-hidden"
      aria-label="Brand manifesto"
    >
      {/* Background botanical accent — very subtle */}
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
          <p className="font-overline text-primary-foreground/50 mb-6">
            Our Promise
          </p>

          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-6 h-px bg-primary-foreground/20" />
            <span className="text-primary-foreground/20 text-xs">✦</span>
            <span className="w-6 h-px bg-primary-foreground/20" />
          </div>

          <blockquote className="font-serif-wedding text-display-md md:text-display-lg text-primary-foreground leading-relaxed mb-10">
            We believe your wedding day should be felt, not managed. That the
            details should serve the moment — never compete with it. That calm
            is not the absence of planning, but the presence of it.
          </blockquote>

          {/* Bottom attribution with flourish */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-px bg-primary-foreground/20" />
            <span className="text-primary-foreground/20 text-xs">✦</span>
            <span className="w-6 h-px bg-primary-foreground/20" />
          </div>
          <span className="font-script text-xl text-primary-foreground/50">
            Hickory & Rose
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LoveQuoteSection;
