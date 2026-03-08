import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PreFooterDivider = () => {
  return (
    <section className="py-14 md:py-20 bg-background relative overflow-hidden" aria-label="Booking prompt">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-16 h-px bg-border mx-auto origin-center"
          />

          <p className="font-serif-wedding text-base md:text-lg text-foreground/60 italic leading-relaxed">
            Currently accepting a limited number of weddings for 2025 & 2026.
          </p>

          <Link
            to="/inquire"
            className="inline-flex items-center font-overline text-primary/60 hover:text-primary transition-colors duration-300 group"
          >
            Check Availability
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>

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
