import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import detailImage from "@/assets/detail-placecard.jpg";
import vendorImage from "@/assets/vendor-detail.jpg";

const EditorialSplitSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const quoteLineH = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);
  const floatingTextY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const decorativeRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const centerLineScale = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.08, 0]);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] overflow-hidden"
      aria-label="Editorial quote"
    >
      {/* Quote side */}
      <div className="bg-sage-deep flex items-center justify-center py-section-mobile md:py-section-tablet px-8 lg:px-16 relative overflow-hidden">
        {/* Large decorative ampersand */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          style={{ rotate: decorativeRotate }}
          className="absolute -right-12 -bottom-16 font-script text-[22rem] text-primary-foreground pointer-events-none select-none leading-none"
          aria-hidden="true"
        >
          &
        </motion.span>

        {/* Floating philosophy label - parallax */}
        <motion.div
          className="absolute top-8 right-8 pointer-events-none select-none hidden lg:block"
          style={{ y: floatingTextY }}
          aria-hidden="true"
        >
          <span className="font-sans-wedding text-[0.45rem] tracking-[0.25em] uppercase text-primary-foreground/10 rotate-90 inline-block origin-top-right">
            Design Philosophy
          </span>
        </motion.div>

        {/* Scroll-linked vertical accent line */}
        <motion.div
          className="absolute left-8 top-0 w-px bg-gradient-to-b from-transparent via-primary-foreground/15 to-transparent origin-top"
          style={{ height: quoteLineH }}
        />

        {/* Corner accents */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-primary-foreground/10" aria-hidden="true" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-primary-foreground/10" aria-hidden="true" />

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
              <em className="text-primary-foreground/90">inevitable</em>. As if every detail was always meant to be
              exactly this way.
            </blockquote>

            {/* Secondary quote - subtle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-sans-wedding text-body-sm text-primary-foreground/30 leading-relaxed mb-8 font-light max-w-sm"
            >
              We obsess over the details so you don't have to. Every choice, every placement, every moment — curated with intention.
            </motion.p>

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
            <p className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-primary-foreground/12 mt-12">
              Our Design Philosophy · Est. 2018
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Image side with parallax */}
      <div 
        className="overflow-hidden relative min-h-[50vh] lg:min-h-0 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={detailImage}
          alt="Elegant calligraphy place card with gold cutlery on fine linen"
          className="absolute inset-0 w-full h-[120%] object-cover"
          style={{ y: imageY }}
          animate={{ scale: isHovered ? 1.03 : 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          loading="lazy"
        />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Corner accent frames on hover */}
        <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-white/0 group-hover:border-white/20 transition-all duration-500" />
        <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-white/0 group-hover:border-white/20 transition-all duration-500" />
        
        {/* Floating inset detail image - reveals on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute bottom-8 left-8 w-32 h-40 overflow-hidden hidden lg:block shadow-2xl"
            >
              <img
                src={vendorImage}
                alt="Vendor collaboration detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Image caption */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute bottom-6 right-6"
        >
          <p className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-white/30 group-hover:text-white/50 transition-colors duration-500">
            Detail · Calligraphy & Gold
          </p>
        </motion.div>
        
        {/* Frame number */}
        <span className="absolute top-4 right-4 font-sans-wedding text-[0.5rem] tracking-[0.2em] text-white/0 group-hover:text-white/25 transition-colors duration-500 tabular-nums">
          FR03
        </span>
      </div>
    </section>
  );
};

export default EditorialSplitSection;
