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
    <section className="py-10 md:py-14 bg-card border-y border-border" aria-label="Featured in">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans-wedding text-label uppercase text-muted-foreground tracking-[0.2em] text-center mb-8"
        >
          As Seen In
        </motion.p>
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
              className="font-serif-wedding text-base md:text-lg text-muted-foreground/50 whitespace-nowrap relative"
            >
              {name}
              {index < trustLogos.length - 1 && (
                <span className="hidden md:inline absolute -right-7 top-1/2 -translate-y-1/2 w-px h-4 bg-border" />
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBarSection;
