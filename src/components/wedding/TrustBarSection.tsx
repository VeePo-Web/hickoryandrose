import { motion } from "framer-motion";

const trustLogos = [
  "Edmonton Bridal Magazine",
  "Wedding Bells",
  "Style Me Pretty",
  "Alberta Weddings",
  "The Knot",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const TrustBarSection = () => {
  return (
    <section className="py-12 md:py-16 bg-card border-y border-border" aria-label="Featured in">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-px bg-border origin-right"
          />
          <p className="font-sans-wedding text-label uppercase text-muted-foreground tracking-[0.2em]">
            As Seen In
          </p>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-px bg-border origin-left"
          />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {trustLogos.map((name, index) => (
            <motion.span
              key={name}
              variants={item}
              className="font-serif-wedding text-base md:text-lg text-muted-foreground/50 whitespace-nowrap relative group cursor-default"
            >
              <span className="group-hover:text-muted-foreground transition-colors duration-300">
                {name}
              </span>
              {index < trustLogos.length - 1 && (
                <span className="hidden md:inline absolute -right-7 top-1/2 -translate-y-1/2 text-primary/20 text-[0.5rem]">✦</span>
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBarSection;
