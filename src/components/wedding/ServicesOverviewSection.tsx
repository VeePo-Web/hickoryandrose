import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "Day-Of Coordination",
    tagline: "You planned it. We perfect it.",
    description:
      "You've planned your wedding with care — we step in to execute it flawlessly. Calm leadership on the day that matters most.",
    investment: "From $2,500",
    link: "/services#day-of",
  },
  {
    number: "02",
    title: "Partial Planning",
    tagline: "Collaboration at every turn.",
    description:
      "Collaborative guidance through the details that need a professional touch, from vendor coordination to design refinement.",
    investment: "From $5,000",
    link: "/services#partial",
  },
  {
    number: "03",
    title: "Full-Service Planning",
    tagline: "From vision to celebration.",
    description:
      "From vision to celebration, we handle every detail. You get to simply be present and enjoy the unfolding of your story.",
    investment: "From $8,500",
    link: "/services#full",
  },
];

const ServicesOverviewSection = () => {
  return (
    <section
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card"
      aria-label="Our services"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="font-overline text-muted-foreground mb-4">
              What We Offer
            </p>
            <h2 className="font-serif-wedding text-display-lg text-foreground">
              Services Tailored to You
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 0.1}>
              <Link
                to={service.link}
                className="group block"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 md:py-14 border-t border-border/60">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <motion.span
                      className="font-serif-wedding text-4xl md:text-5xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-700"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    >
                      {service.number}
                    </motion.span>
                  </div>

                  {/* Title + Tagline */}
                  <div className="md:col-span-4">
                    <h3 className="font-serif-wedding text-display-md text-foreground group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="font-serif-wedding text-sm italic text-muted-foreground/60 mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light max-w-md">
                      {service.description}
                    </p>
                  </div>

                  {/* Investment + Arrow */}
                  <div className="md:col-span-2 flex items-center justify-between md:flex-col md:items-end gap-2">
                    <span className="font-overline text-primary text-[0.625rem]">
                      {service.investment}
                    </span>
                    <span className="font-sans-wedding text-xs text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          {/* Final border */}
          <div className="border-t border-border/60" />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14 md:mt-20">
            <Link
              to="/services"
              className="inline-flex items-center font-overline text-accent hover:text-primary transition-colors duration-200 group"
            >
              View All Services
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

export default ServicesOverviewSection;
