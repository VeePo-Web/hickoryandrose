import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  { label: "Calm Leadership", detail: "Quiet confidence under pressure" },
  { label: "Elevated Design", detail: "Cohesive, intentional aesthetics" },
  { label: "Protected Presence", detail: "Your day, fully felt" },
];

const BrandPromiseSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
      {/* Large decorative ampersand */}
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

          <p className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-12">
            Calm becomes a luxury. We protect what matters most on your wedding
            day: your presence, your peace of mind, and the freedom to fully
            feel it.
          </p>

          {/* Brand pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                className="py-6 md:py-0 md:px-6 border-t md:border-t-0 md:border-l border-border/40 first:border-t-0 md:first:border-l-0"
              >
                <p className="font-overline text-primary text-[0.6rem] mb-1.5">
                  {pillar.label}
                </p>
                <p className="font-sans-wedding text-xs text-muted-foreground/50 font-light">
                  {pillar.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
