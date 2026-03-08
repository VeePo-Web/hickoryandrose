import { Link } from "react-router-dom";
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
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background" aria-label="Our approach">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              How We Work
            </p>
            <h2 className="font-serif-wedding text-display-lg text-foreground">
              A Process Built on Trust
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <div className="text-center md:text-left group">
                <p className="font-serif-wedding text-4xl md:text-5xl font-light text-primary/20 mb-4 group-hover:text-primary/40 transition-colors duration-500">
                  {step.number}
                </p>
                <h3 className="font-serif-wedding text-display-md text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed">
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
              className="inline-flex items-center font-sans-wedding text-xs tracking-[0.15em] uppercase text-accent hover:text-primary transition-colors duration-200 group"
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
