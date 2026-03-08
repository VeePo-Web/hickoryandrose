import { motion } from "framer-motion";

const publications = [
  "Edmonton Bridal",
  "Wedding Bells",
  "Style Me Pretty",
  "Alberta Weddings",
  "The Knot",
];

const TrustBarSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background" aria-label="Featured in">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-overline text-muted-foreground/40 text-center mb-10 md:mb-14"
        >
          As Featured In
        </motion.p>

        {/* Editorial ruled list */}
        <div className="max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub}
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
              <div className="flex items-center justify-between py-5 md:py-6 cursor-default">
                <span className="font-serif-wedding text-lg md:text-xl lg:text-2xl font-light text-foreground/25 group-hover:text-foreground/50 transition-colors duration-500 tracking-tight">
                  {pub}
                </span>
                <span className="font-overline text-muted-foreground/20 text-[0.6rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/40" />
        </div>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-14 md:mt-18"
        />
      </div>
    </section>
  );
};

export default TrustBarSection;
