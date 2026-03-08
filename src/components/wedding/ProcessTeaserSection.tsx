import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

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
    <section
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background"
      aria-label="Our approach"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="font-overline text-muted-foreground mb-4">
              How We Work
            </p>
            <h2 className="font-serif-wedding text-display-lg text-foreground">
              A Process Built on Trust
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 md:py-14 border-t border-border/60 group">
                {/* Number */}
                <div className="md:col-span-2">
                  <motion.span
                    className="font-serif-wedding text-5xl md:text-6xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  >
                    {step.number}
                  </motion.span>
                </div>

                {/* Title */}
                <div className="md:col-span-3">
                  <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-7">
                  <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* Final border */}
          <div className="border-t border-border/60" />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14 md:mt-20">
            <Link
              to="/approach"
              className="inline-flex items-center font-overline text-accent hover:text-primary transition-colors duration-200 group"
            >
              Explore Our Approach
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessTeaserSection;
