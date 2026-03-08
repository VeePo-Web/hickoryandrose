import { Link } from "react-router-dom";
import { Calendar, Flower2, Crown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Calendar,
    title: "Day-Of Coordination",
    description:
      "You've planned your wedding with care — we step in to execute it flawlessly. Calm leadership on the day that matters most.",
    link: "/services#day-of",
  },
  {
    icon: Flower2,
    title: "Partial Planning",
    description:
      "Collaborative guidance through the details that need a professional touch, from vendor coordination to design refinement.",
    link: "/services#partial",
  },
  {
    icon: Crown,
    title: "Full-Service Planning",
    description:
      "From vision to celebration, we handle every detail. You get to simply be present and enjoy the unfolding of your story.",
    link: "/services#full",
  },
];

const ServicesOverviewSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card" aria-label="Our services">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-overline text-muted-foreground mb-4">
              What We Offer
            </p>
            <h2 className="font-serif-wedding text-display-lg text-foreground">
              Services Tailored to You
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="bg-background p-8 md:p-10 shadow-subtle hover:shadow-medium hover:-translate-y-1 transition-all duration-300 text-center group">
                <service.icon
                  size={32}
                  strokeWidth={1}
                  className="text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-serif-wedding text-display-md text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center font-sans-wedding text-xs tracking-[0.15em] uppercase text-accent hover:text-primary transition-colors duration-200"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
