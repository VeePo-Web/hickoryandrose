import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const PreFooterDivider = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" aria-label="Booking prompt">
      {/* Decorative ampersand */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-script text-[16rem] md:text-[22rem] text-foreground leading-none">
          &
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center relative">
        <ScrollReveal>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-10 origin-center"
          />

          <p className="font-overline text-muted-foreground/35 mb-6">
            Limited Availability
          </p>

          <p className="font-serif-wedding text-display-md text-foreground/70 italic leading-relaxed mb-4">
            Currently accepting a limited number of weddings for 2025 & 2026.
          </p>

          <p className="font-sans-wedding text-body-sm text-muted-foreground/40 font-light mb-4 max-w-md mx-auto">
            We take on a curated number of couples each season to ensure every
            wedding receives our full attention and care.
          </p>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {["Complimentary Discovery Call", "No Commitment Required"].map((signal, i) => (
              <span key={signal} className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/25">
                {i > 0 && <span className="mr-3">·</span>}
                {signal}
              </span>
            ))}
          </div>

          <Link
            to="/inquire"
            className="inline-flex items-center font-overline text-primary/60 hover:text-primary transition-colors duration-300 group"
          >
            Check Availability
            <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-10 origin-center"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PreFooterDivider;
