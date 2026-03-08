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
  const decorOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.035]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const secondaryQuoteOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.15]);

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
        <span className="font-script text-[20rem] md:text-[30rem] text-primary-foreground select-none leading-none" aria-hidden="true">
          &
        </span>
      </motion.div>

      {/* Scroll-linked secondary quote layer */}
      <motion.div
        className="absolute bottom-12 right-8 md:right-16 pointer-events-none select-none hidden lg:block"
        style={{ y: watermarkY, opacity: secondaryQuoteOpacity }}
        aria-hidden="true"
      >
        <p className="font-serif-wedding text-xl italic text-primary-foreground/40 max-w-xs text-right leading-relaxed">
          Every detail in service of the moment.
        </p>
      </motion.div>

      {/* Section index watermark */}
      <motion.div
        className="absolute top-8 left-8 md:left-16 pointer-events-none select-none"
        style={{ y: watermarkY }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-7xl md:text-8xl font-light text-primary-foreground/[0.04]">
          05
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
        <ScrollReveal>
          {/* Refined overline with flanking lines */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-10 h-px bg-primary-foreground/15 hidden md:block" />
            <p className="font-overline text-primary-foreground/40">
              Our Promise
            </p>
            <span className="w-10 h-px bg-primary-foreground/15 hidden md:block" />
          </div>

          {/* Pull-quote ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-8 h-px bg-primary-foreground/20 origin-right"
            />
            <span className="font-serif-wedding text-sm text-primary-foreground/25 tracking-widest">❖</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-8 h-px bg-primary-foreground/20 origin-left"
            />
          </div>

          {/* Main quote with editorial quotation marks */}
          <blockquote className="font-serif-wedding text-display-md md:text-display-lg text-primary-foreground leading-relaxed mb-10 relative">
            <motion.span
              className="absolute -top-6 -left-2 md:-left-6 text-primary-foreground/[0.08] text-[5rem] md:text-[7rem] font-light leading-none select-none"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              aria-hidden="true"
            >
              "
            </motion.span>
            We believe your wedding day should be felt, not managed. That the
            details should serve the moment — never compete with it. That calm
            is not the absence of planning, but the presence of it.
            <motion.span
              className="absolute -bottom-8 -right-2 md:-right-6 text-primary-foreground/[0.08] text-[5rem] md:text-[7rem] font-light leading-none select-none"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              aria-hidden="true"
            >
              "
            </motion.span>
          </blockquote>

          {/* Attribution with vertical accent */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-px h-8 bg-primary-foreground/20 origin-top"
            />
            <span className="font-script text-xl text-primary-foreground/35">
              Hickory & Rose
            </span>
            <span className="font-sans-wedding text-[0.55rem] tracking-[0.2em] uppercase text-primary-foreground/20">
              Edmonton · Alberta · Est. 2018
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LoveQuoteSection;
