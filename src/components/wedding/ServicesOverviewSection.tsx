import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import serviceDayofImage from "@/assets/service-dayof.jpg";
import servicePlanningImage from "@/assets/service-planning.jpg";
import serviceFullserviceImage from "@/assets/service-fullservice.jpg";

const services = [
  {
    title: "Day-Of Coordination",
    tagline: "You planned it. We perfect it.",
    description:
      "You've planned your wedding with care — we step in to execute it flawlessly. Calm leadership on the day that matters most.",
    investment: "From $2,500",
    link: "/services#day-of",
    image: serviceDayofImage,
    imageAlt: "Luxury wedding stationery suite with sage wax seal and calligraphy",
  },
  {
    title: "Partial Planning",
    tagline: "Collaboration at every turn.",
    description:
      "Collaborative guidance through the details that need a professional touch, from vendor coordination to design refinement.",
    investment: "From $5,000",
    link: "/services#partial",
    image: servicePlanningImage,
    imageAlt: "Wedding planner reviewing timeline at desk with floral mood board",
  },
  {
    title: "Full-Service Planning",
    tagline: "From vision to celebration.",
    description:
      "From vision to celebration, we handle every detail. You get to simply be present and enjoy the unfolding of your story.",
    investment: "From $8,500",
    link: "/services#full",
    image: serviceFullserviceImage,
    imageAlt: "Wedding planner styling reception table with sage florals",
  },
];

const ServicesOverviewSection = () => {
  return (
    <section
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card"
      aria-label="Our services"
    >
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Link
                to={service.link}
                className="group block bg-background overflow-hidden shadow-subtle hover:shadow-large transition-shadow duration-500"
              >
                <ImageReveal
                  direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
                  delay={index * 0.08}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </ImageReveal>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif-wedding text-display-md text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-serif-wedding text-sm italic text-muted-foreground mb-3">
                    {service.tagline}
                  </p>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-overline text-primary">
                      {service.investment}
                    </span>
                    <span className="font-sans-wedding text-xs text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
