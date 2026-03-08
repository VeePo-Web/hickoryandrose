import { motion } from "framer-motion";

const PreFooterDivider = () => {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden" aria-hidden="true">
      <div className="container mx-auto px-6 lg:px-8 max-w-lg text-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-16 h-px bg-border mx-auto origin-center"
          />

          <p className="font-script text-xl text-muted-foreground/20">
            Hickory & Rose
          </p>

          <p className="font-serif-wedding text-xs italic text-muted-foreground/15 tracking-wide">
            Refined Rustic Elegance
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-px bg-border mx-auto origin-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooterDivider;
