import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import detailImage from "@/assets/detail-placecard.jpg";

const EditorialSplitSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const quoteLineH = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] overflow-hidden"
      aria-label="Editorial quote"
    >
      {/* Quote side */}
      <div className="bg-sage-deep flex items-center justify-center py-section-mobile md:py-section-tablet px-8 lg:px-16 relative overflow-hidden">
        {/* Large decorative ampersand */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute -right-8 -bottom-12 font-script text-[20rem] text-primary-foreground pointer-events-none select-none leading-none"
          aria-hidden="true"
        >
          &
        </motion.span>

        {/* Scroll-linked vertical accent line */}
        <motion.div
          className="absolute left-8 top-0 w-px bg-primary-foreground/10 origin-top"
          style={{ height: quoteLineH }}
        />

        <ScrollReveal>
          <div className="max-w-md relative">
            {/* Index marker */}
            <span className="font-serif-wedding text-sm text-primary-foreground/15 block mb-6">
              03
            </span>

            {/* Decorative ornament */}
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-8 h-px bg-primary-foreground/20 origin-left"
              />
              <span className="font-serif-wedding text-xs text-primary-foreground/20 tracking-widest">❖</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="w-8 h-px bg-primary-foreground/20 origin-left"
              />
            </div>

            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              The best weddings don't feel produced — they feel{" "}
              <em>inevitable</em>. As if every detail was always meant to be
              exactly this way.
            </blockquote>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-6 h-px bg-primary-foreground/15 origin-left"
              />
              <span className="font-script text-xl text-primary-foreground/35">
                Hickory & Rose
              </span>
            </div>

            {/* Philosophy note */}
            <p className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-primary-foreground/15 mt-10">
              Our Design Philosophy
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Image side with parallax */}
      <div className="overflow-hidden relative min-h-[40vh] lg:min-h-0 group">
        <motion.img
          src={detailImage}
          alt="Elegant calligraphy place card with gold cutlery on fine linen"
          className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
          style={{ y: imageY }}
          loading="lazy"
        />
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-700" />
        {/* Image caption */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute bottom-6 right-6"
        >
          <p className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-white/30">
            Detail · Calligraphy & Gold
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialSplitSection;
