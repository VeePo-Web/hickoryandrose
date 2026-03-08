import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import BranchDecoration from "./BranchDecoration";

const BrandPromiseSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
      <BranchDecoration className="absolute -right-6 top-8 hidden lg:block opacity-30" />
      <BranchDecoration className="absolute -left-6 bottom-8 hidden lg:block opacity-30" flip />

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
        <ScrollReveal>
          {/* Decorative top flourish */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-12 h-px bg-primary/40 origin-right"
            />
            <span className="font-script text-lg text-primary/40">✦</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-12 h-px bg-primary/40 origin-left"
            />
          </div>

          <p className="font-overline text-muted-foreground/60 mb-6">
            Our Philosophy
          </p>

          <p className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-10">
            Calm becomes a luxury. We protect what matters most on your wedding
            day: your presence, your peace of mind, and the freedom to fully
            feel it.
          </p>

          {/* Bottom flourish */}
          <div className="flex items-center justify-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-px bg-primary/40 origin-right"
            />
            <span className="font-script text-lg text-primary/40">✦</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-px bg-primary/40 origin-left"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
