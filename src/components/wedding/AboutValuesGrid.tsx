import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    title: "Calm Leadership",
    pullQuote: "Presence over panic.",
    description:
      "We lead with quiet confidence so you never feel rushed, pressured, or anxious. Our composed presence on the day means you can exhale and simply be in the moment.",
  },
  {
    title: "Intentional Design",
    pullQuote: "Nothing accidental.",
    description:
      "Every detail is considered — from the arc of your ceremony to the way light falls across your tablescape. We design with purpose so every element tells your story.",
  },
  {
    title: "Genuine Care",
    pullQuote: "Not a project — a privilege.",
    description:
      "Your wedding isn't a line item to us. It's a responsibility we take personally. We invest emotionally because we believe that's the only way to create something truly meaningful.",
  },
];

const AboutValuesGrid = () => (
  <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">02</span>
          <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-4">
            <span className="inline-flex items-center gap-3">
              <span className="w-5 h-px bg-border" />
              Our Values
              <span className="w-5 h-px bg-border" />
            </span>
          </p>
          <h2 className="font-serif-wedding text-display-lg text-foreground">
            What Guides Us
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {values.map((value, index) => (
          <ScrollReveal key={value.title} delay={index * 0.1}>
            <div className="group">
              <span className="font-serif-wedding text-5xl font-light text-primary/10 group-hover:text-primary/20 transition-colors duration-700 block mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>

              <motion.div
                className="h-px bg-primary/25 mb-6 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              />

              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rotate-45 shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.35), hsl(var(--gold) / 0.1))" }} />
                <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                  {value.title}
                </h3>
              </div>

              <p className="font-serif-wedding text-sm italic text-primary/50 mb-4">
                {value.pullQuote}
              </p>

              <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutValuesGrid;
