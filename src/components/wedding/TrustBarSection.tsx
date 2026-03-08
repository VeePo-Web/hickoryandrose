import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const publications = [
  { name: "Edmonton Bridal", category: "Regional", year: "2024", note: "Top 10 Planners" },
  { name: "Wedding Bells", category: "National", year: "2023", note: "Featured Planner" },
  { name: "Style Me Pretty", category: "International", year: "2024", note: "Editor's Pick" },
  { name: "Alberta Weddings", category: "Regional", year: "2023", note: "Cover Feature" },
  { name: "The Knot", category: "International", year: "2024", note: "Best of Weddings" },
];

const TrustBarSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkX = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const verticalRuleScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      aria-label="Featured in"
    >
      {/* Parallax watermark */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ x: watermarkX }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-[8rem] md:text-[14rem] font-light text-foreground/[0.015] whitespace-nowrap tracking-tight italic">
          As Seen In
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <span className="font-serif-wedding text-sm text-primary/20 font-light">03</span>
            <span className="w-8 h-px bg-primary/15" />
            <p className="font-sans-wedding text-label uppercase text-muted-foreground/40 tracking-[0.2em]">
              As Featured In
            </p>
            <span className="flex-1 h-px bg-border/30 hidden md:block" />
          </div>
        </ScrollReveal>

        {/* Editorial ruled list with animated vertical accent */}
        <div className="max-w-4xl mx-auto relative">
          {/* Animated left accent line */}
          <motion.div
            className="absolute -left-6 md:-left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent hidden lg:block"
            style={{ scaleY: verticalRuleScale, transformOrigin: "top" }}
            aria-hidden="true"
          />

          {publications.map((pub, index) => (
            <motion.div
              key={pub.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group"
            >
              <div className="border-t border-border/40 group-first:border-t-0" />
              <div className="flex items-center justify-between py-7 md:py-10 cursor-default">
                <div className="flex items-baseline gap-4 md:gap-6">
                  {/* Index */}
                  <span className="font-serif-wedding text-xs text-primary/15 font-light w-5 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Publication name */}
                  <span className="font-serif-wedding text-2xl md:text-3xl lg:text-4xl font-light text-foreground/15 group-hover:text-foreground/60 transition-colors duration-500 tracking-tight italic">
                    {pub.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                  {/* Award note — visible on hover */}
                  <span
                    className="font-serif-wedding text-xs italic text-primary/30 hidden md:inline opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0"
                  >
                    {pub.note}
                  </span>
                  <motion.div
                    className="h-px bg-primary/15 origin-right hidden md:block"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  />
                  <span className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-muted-foreground/20 hidden md:inline">
                    {pub.category}
                  </span>
                  <span className="font-serif-wedding text-xs text-muted-foreground/15 font-light tabular-nums">
                    {pub.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/40" />
        </div>

        {/* Bottom editorial tagline */}
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-4 mt-14 md:mt-20" aria-hidden="true">
            <span className="w-8 h-px bg-border/30" />
            <p className="font-serif-wedding text-xs italic text-muted-foreground/20">
              Recognized for excellence across Canada and beyond
            </p>
            <span className="w-8 h-px bg-border/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustBarSection;
