import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const mentions = [
  { name: "Wedding Bells", type: "Magazine", year: "2024" },
  { name: "Style Me Pretty", type: "Editorial", year: "2023" },
  { name: "Rocky Mountain Bride", type: "Feature", year: "2024" },
  { name: "Junebug Weddings", type: "Spotlight", year: "2023" },
  { name: "Edmonton Journal", type: "Profile", year: "2022" },
];

const PressMentionsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);
  const accentLineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-14 md:py-20 bg-card border-y border-border/20 overflow-hidden relative"
      aria-label="Press mentions"
    >
      {/* Parallax marquee watermark */}
      <motion.div
        className="absolute inset-0 flex items-center pointer-events-none select-none"
        style={{ x: marqueeX }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-[8rem] md:text-[12rem] text-foreground/[0.012] whitespace-nowrap tracking-tight italic">
          As Featured In · As Featured In · As Featured In
        </span>
      </motion.div>

      {/* Animated top accent line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48 origin-center"
        style={{
          scaleX: accentLineScale,
          background: "linear-gradient(90deg, transparent, hsl(var(--border) / 0.4), transparent)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
        <ScrollReveal>
          <div className="flex items-center gap-5 mb-10 md:mb-14 justify-center">
            <motion.span
              className="w-10 h-px origin-right hidden md:block"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--border) / 0.4))" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <span className="font-serif-wedding text-xs text-primary/15">❖</span>
            <p className="font-sans-wedding text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground/25 font-light">
              As Featured In
            </p>
            <span className="font-serif-wedding text-xs text-primary/15">❖</span>
            <motion.span
              className="w-10 h-px origin-left hidden md:block"
              style={{ background: "linear-gradient(90deg, hsl(var(--border) / 0.4), transparent)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </div>
        </ScrollReveal>

        {/* Editorial ruled list layout instead of simple flex */}
        <div className="max-w-3xl mx-auto">
          {mentions.map((mention, i) => (
            <motion.div
              key={mention.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group cursor-default border-t border-border/15 last:border-b"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-12 gap-4 items-center py-5 md:py-6 px-2">
                {/* Index */}
                <div className="col-span-1 hidden md:block">
                  <span className="font-serif-wedding text-sm text-foreground/8 group-hover:text-foreground/20 transition-colors duration-500 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Name */}
                <div className="col-span-8 md:col-span-5">
                  <p className="font-serif-wedding text-lg md:text-xl text-foreground/20 group-hover:text-foreground/50 transition-colors duration-500 tracking-tight">
                    {mention.name}
                  </p>
                </div>
                
                {/* Type badge */}
                <div className="col-span-4 md:col-span-3 text-right md:text-center">
                  <span className="font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-muted-foreground/15 group-hover:text-muted-foreground/35 transition-colors duration-500 px-3 py-1 border border-transparent group-hover:border-border/20">
                    {mention.type}
                  </span>
                </div>
                
                {/* Year */}
                <div className="hidden md:block col-span-2 text-center">
                  <span className="font-serif-wedding text-xs italic text-foreground/8 group-hover:text-foreground/25 transition-colors duration-500">
                    {mention.year}
                  </span>
                </div>
                
                {/* Arrow hint */}
                <div className="hidden md:flex col-span-1 justify-end">
                  <motion.span
                    className="text-foreground/0 group-hover:text-foreground/20 transition-colors duration-500 text-xs"
                    animate={hoveredIndex === i ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom ornament */}
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="w-6 h-px bg-border/20" />
            <span className="font-script text-sm text-primary/8">Hickory & Rose</span>
            <span className="w-6 h-px bg-border/20" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PressMentionsSection;
