import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const publications = [
  { name: "Edmonton Bridal", category: "Regional" },
  { name: "Wedding Bells", category: "National" },
  { name: "Style Me Pretty", category: "International" },
  { name: "Alberta Weddings", category: "Regional" },
  { name: "The Knot", category: "International" },
];

const TrustBarSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" aria-label="Featured in">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <p className="font-overline text-muted-foreground/40 mb-3">
              <span className="inline-flex items-center gap-3">
                <span className="w-6 h-px bg-muted-foreground/15" />
                As Featured In
                <span className="w-6 h-px bg-muted-foreground/15" />
              </span>
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial ruled list with hover reveals */}
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
                <div className="flex items-baseline gap-6">
                  <span className="font-serif-wedding text-xl md:text-2xl lg:text-3xl font-light text-foreground/20 group-hover:text-foreground/60 transition-colors duration-500 tracking-tight italic">
                    {pub.name}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="font-overline text-muted-foreground/15 text-[0.55rem] hidden md:inline"
                  >
                    {pub.category}
                  </motion.span>
                </div>
                <div className="flex items-center gap-4">
                  <motion.div
                    className="h-px bg-primary/20 origin-right"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  />
                  <span className="font-overline text-muted-foreground/15 text-[0.55rem]">
                    {String(index + 1).padStart(2, "0")}
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
