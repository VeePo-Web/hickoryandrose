import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import BranchDecoration from "./BranchDecoration";

const steps = [
  {
    number: "01",
    title: "Vision",
    description:
      "We listen deeply to understand your story, your aesthetic, and how you want to feel on your wedding day.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Every detail is curated with intention — vendors, timelines, design elements — so nothing is left to chance.",
  },
  {
    number: "03",
    title: "Celebration",
    description:
      "On your day, we lead calmly behind the scenes. You simply show up and feel every beautiful moment.",
  },
];

const ProcessTeaserSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background" aria-label="Our approach">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <BranchDecoration className="mx-auto mb-6" />
            <p className="font-overline text-muted-foreground mb-4">
              How We Work
            </p>
            <h2 className="font-serif-wedding text-display-lg text-foreground">
              A Process Built on Trust
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 mb-14 relative">
          {/* Connecting line (desktop only) */}
          <motion.div
            className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            style={{ originX: 0 }}
          />

          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.15}>
              <div className="text-center group relative">
                {/* Number circle */}
                <motion.div
                  className="w-16 h-16 rounded-full border border-border bg-background flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary transition-colors duration-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                >
                  <span className="font-serif-wedding text-lg font-light text-muted-foreground group-hover:text-primary transition-colors duration-500">
                    {step.number}
                  </span>
                </motion.div>
                <h3 className="font-serif-wedding text-display-md text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed max-w-xs mx-auto font-light">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Link
              to="/approach"
              className="inline-flex items-center font-overline text-accent hover:text-primary transition-colors duration-200 group"
            >
              Explore Our Approach
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessTeaserSection;
