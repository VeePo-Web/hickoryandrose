import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const mentions = [
  { name: "Wedding Bells", type: "Magazine" },
  { name: "Style Me Pretty", type: "Editorial" },
  { name: "Rocky Mountain Bride", type: "Feature" },
  { name: "Junebug Weddings", type: "Spotlight" },
  { name: "Edmonton Journal", type: "Profile" },
];

const PressMentionsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-14 bg-card border-y border-border/30 overflow-hidden relative"
      aria-label="Press mentions"
    >
      {/* Subtle background watermark */}
      <motion.div
        className="absolute inset-0 flex items-center pointer-events-none select-none"
        style={{ x: marqueeX }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-[6rem] md:text-[10rem] text-foreground/[0.015] whitespace-nowrap tracking-tight italic">
          As Featured In · As Featured In · As Featured In
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8 md:mb-10 justify-center">
            <motion.span
              className="w-8 h-px bg-border/50 origin-right hidden md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <p className="font-sans-wedding text-[0.55rem] tracking-[0.25em] uppercase text-muted-foreground/30 font-light">
              As Featured In
            </p>
            <motion.span
              className="w-8 h-px bg-border/50 origin-left hidden md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-14 gap-y-4">
          {mentions.map((mention, i) => (
            <motion.div
              key={mention.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="text-center group cursor-default"
            >
              <p className="font-serif-wedding text-lg md:text-xl text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500 tracking-tight">
                {mention.name}
              </p>
              <p className="font-sans-wedding text-[0.45rem] tracking-[0.2em] uppercase text-muted-foreground/15 group-hover:text-muted-foreground/30 transition-colors duration-500 mt-0.5">
                {mention.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressMentionsSection;
