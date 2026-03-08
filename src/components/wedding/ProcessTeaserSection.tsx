import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";

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
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Editorial image column */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32">
              <ImageReveal direction="up" delay={0.15}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={bouquetImage}
                    alt="Elegant bridal bouquet with sage eucalyptus and ivory garden roses"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={512}
                    height={683}
                  />
                </div>
              </ImageReveal>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full h-px bg-border/40 mt-6 origin-left"
              />
              <p className="font-sans-wedding text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/30 mt-4 font-light">
                Every detail, curated with care
              </p>
            </div>
          </div>

          {/* Right: Content column */}
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="mb-16 md:mb-24">
                <p className="font-overline text-muted-foreground/50 mb-4">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-6 h-px bg-muted-foreground/20" />
                    How We Work
                    <span className="w-6 h-px bg-muted-foreground/20" />
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-lg text-foreground">
                  A Process Built on Trust
                </h2>
                <p className="font-sans-wedding text-body-sm text-muted-foreground/50 font-light mt-4 max-w-lg leading-relaxed">
                  From the first conversation to the last dance, our process is
                  designed to make you feel supported, understood, and completely
                  at ease.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-0">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 md:py-14 border-t border-border/60 group cursor-default">
                    {/* Number */}
                    <div className="md:col-span-2">
                      <motion.span
                        className="font-serif-wedding text-5xl md:text-6xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-700 inline-block group-hover:-translate-x-1.5 transform-gpu"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                        style={{ transition: "color 700ms, transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                      >
                        {step.number}
                      </motion.span>
                    </div>

                    {/* Title with expanding accent line */}
                    <div className="md:col-span-3 relative">
                      <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                        {step.title}
                      </h3>
                      <div className="mt-2 h-px bg-primary/40 w-0 group-hover:w-full transition-all duration-700 ease-out origin-left" />
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
              <div className="border-t border-border/60" />
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-14 md:mt-20">
                <Link
                  to="/approach"
                  className="inline-flex items-center font-overline text-accent hover:text-primary transition-colors duration-200 group"
                >
                  Explore Our Full Approach
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTeaserSection;
