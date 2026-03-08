import { motion } from "framer-motion";

const publications = [
  { name: "Edmonton Bridal", emphasis: "Bridal" },
  { name: "Wedding Bells", emphasis: "Bells" },
  { name: "Style Me Pretty", emphasis: "Pretty" },
  { name: "Alberta Weddings", emphasis: "Weddings" },
  { name: "The Knot", emphasis: "Knot" },
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

        <div className="flex flex-wrap items-baseline justify-center gap-x-10 md:gap-x-16 gap-y-6">
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
              className="group cursor-default"
            >
              <span className="font-serif-wedding text-xl md:text-2xl lg:text-3xl font-light text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500 tracking-tight">
                {pub.name.split(pub.emphasis).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="font-script text-2xl md:text-3xl lg:text-4xl">
                        {pub.emphasis}
                      </span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </span>
            </motion.div>
          ))}
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
