import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const publications = [
  { name: "Edmonton Bridal", category: "Regional", year: "2024" },
  { name: "Wedding Bells", category: "National", year: "2023" },
  { name: "Style Me Pretty", category: "International", year: "2024" },
  { name: "Alberta Weddings", category: "Regional", year: "2023" },
  { name: "The Knot", category: "International", year: "2024" },
];

const TrustBarSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" aria-label="Featured in">
      {/* Decorative background text */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.015 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[10rem] md:text-[16rem] font-light text-foreground whitespace-nowrap">
          Featured
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <p className="font-overline text-muted-foreground/40 mb-3">
              <span className="inline-flex items-center gap-3">
                <span className="w-8 h-px bg-gradient-to-r from-transparent to-muted-foreground/20" />
                As Featured In
                <span className="w-8 h-px bg-gradient-to-l from-transparent to-muted-foreground/20" />
              </span>
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial ruled list */}
        <div className="max-w-3xl mx-auto">
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
              <div className="flex items-center justify-between py-6 md:py-8 cursor-default">
                <div className="flex items-baseline gap-4 md:gap-6">
                  {/* Index number */}
                  <span className="font-serif-wedding text-sm text-primary/20 font-light w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Publication name */}
                  <span className="font-serif-wedding text-2xl md:text-3xl lg:text-4xl font-light text-foreground/15 group-hover:text-foreground/50 transition-colors duration-500 tracking-tight italic">
                    {pub.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-5">
                  <motion.div
                    className="h-px bg-primary/15 origin-right hidden md:block"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  />
                  <span className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-muted-foreground/20 hidden md:inline">
                    {pub.category}
                  </span>
                  <span className="font-serif-wedding text-xs text-muted-foreground/15 font-light">
                    {pub.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/40" />
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
