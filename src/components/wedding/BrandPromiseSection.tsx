import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const BrandPromiseSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
      {/* Large decorative ampersand — very subtle background element */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.025 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-script text-[28rem] leading-none text-foreground">&</span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
        <ScrollReveal>
          <p className="font-overline text-muted-foreground/50 mb-8">
            Our Philosophy
          </p>

          <p className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-10">
            Calm becomes a luxury. We protect what matters most on your wedding
            day: your presence, your peace of mind, and the freedom to fully
            feel it.
          </p>

          {/* Minimal accent line — no generic symbols */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-16 h-px bg-primary/30 mx-auto origin-center"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
