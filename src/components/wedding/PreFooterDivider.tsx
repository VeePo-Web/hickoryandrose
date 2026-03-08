import { motion } from "framer-motion";
import BranchDecoration from "./BranchDecoration";

const PreFooterDivider = () => {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden" aria-hidden="true">
      <BranchDecoration className="absolute -right-10 top-2 hidden lg:block opacity-15" />
      <BranchDecoration className="absolute -left-10 bottom-2 hidden lg:block opacity-15" flip />

      <div className="container mx-auto px-6 lg:px-8 max-w-lg text-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Top rule */}
          <div className="flex items-center justify-center gap-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-border origin-right"
            />
            <span className="text-muted-foreground/20 text-xs">✦</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-border origin-left"
            />
          </div>

          {/* Monogram */}
          <p className="font-script text-xl text-muted-foreground/20">
            H & R
          </p>

          {/* Tagline */}
          <p className="font-serif-wedding text-xs italic text-muted-foreground/15 tracking-wide">
            Refined Rustic Elegance
          </p>

          {/* Bottom rule */}
          <div className="flex items-center justify-center gap-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-px bg-border origin-right"
            />
            <span className="text-muted-foreground/20 text-xs">✦</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-px bg-border origin-left"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooterDivider;
