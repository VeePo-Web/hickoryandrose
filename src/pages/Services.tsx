import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import { Calendar, Flower2, Crown, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import servicePlanningImage from "@/assets/service-planning.jpg";
import serviceStationeryImage from "@/assets/service-stationery.jpg";

const serviceTiers = [
  {
    id: "day-of",
    icon: Calendar,
    title: "Day-Of Coordination",
    tagline: "You planned it. We perfect it.",
    investment: "Starting at $2,500",
    description:
      "For couples who love planning and have handled the details — we step in 4-6 weeks before to review everything, confirm vendors, build your timeline, and lead the day with calm authority.",
    includes: [
      "Detailed timeline creation and management",
      "Vendor confirmation and logistics coordination",
      "Full rehearsal direction",
      "Up to 12 hours of day-of leadership",
      "Setup and teardown oversight",
      "Emergency kit and problem-solving",
    ],
    idealFor:
      "Couples who enjoy planning but want a professional to execute flawlessly.",
  },
  {
    id: "partial",
    icon: Flower2,
    title: "Partial Planning",
    tagline: "Collaboration at every turn.",
    investment: "Starting at $5,000",
    description:
      "For couples who want professional guidance without handing over the reins entirely. We partner with you on design direction, vendor selection, and planning milestones while you maintain creative control.",
    includes: [
      "Everything in Day-Of Coordination",
      "Design concept development and mood boarding",
      "Vendor recommendations and booking assistance",
      "Budget tracking and management",
      "Monthly planning meetings",
      "Décor and styling guidance",
    ],
    idealFor:
      "Couples who want expert support and creative direction while staying involved.",
  },
  {
    id: "full",
    icon: Crown,
    title: "Full-Service Planning",
    tagline: "From vision to celebration.",
    investment: "Starting at $8,500",
    description:
      "For couples who want the complete experience — from the earliest conversations about your vision to the final send-off. We become an extension of you, handling every detail so you can simply be present.",
    includes: [
      "Everything in Partial Planning",
      "Complete event design and styling",
      "Full vendor sourcing, negotiation, and management",
      "Stationery and invitation guidance",
      "Guest experience curation",
      "Comprehensive logistics and production management",
      "Welcome event and post-wedding brunch coordination",
    ],
    idealFor:
      "Couples who want a truly hands-free, elevated experience from start to finish.",
  },
];

const editorialBreaks = [
  {
    src: servicePlanningImage,
    alt: "Wedding planner reviewing a detailed timeline at her desk with a floral mood board",
  },
  {
    src: serviceStationeryImage,
    alt: "Luxury wedding stationery suite with calligraphy and wax seals on marble",
  },
];

const Services = () => {
  return (
    <main id="main-content">
      <Navigation variant="solid" />

      {/* Hero */}
      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              Our Services
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              Wedding Planning Services
            </h1>
            <p className="font-sans-wedding text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Every couple is different. Our services are designed to meet you
              where you are — whether you need a steady hand on the day or a
              trusted partner from the very beginning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Tiers with editorial image breaks */}
      {serviceTiers.map((service, index) => (
        <div key={service.id}>
          <section
            id={service.id}
            className={`py-section-mobile md:py-section-tablet lg:py-section-desktop ${
              index % 2 === 0 ? "bg-background" : "bg-card"
            }`}
          >
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <service.icon
                    size={36}
                    strokeWidth={1}
                    className="text-primary mx-auto mb-4"
                  />
                  <h2 className="font-serif-wedding text-display-lg text-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="font-serif-wedding text-lg italic text-muted-foreground mb-3">
                    {service.tagline}
                  </p>
                  <p className="font-sans-wedding text-sm font-semibold text-primary tracking-wide">
                    {service.investment}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-10">
                  {service.description}
                </p>
                <div className="bg-sage-mist p-8 md:p-10 mb-8">
                  <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="font-sans-wedding text-sm text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans-wedding text-xs text-muted-foreground text-center italic">
                  Ideal for: {service.idealFor}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Editorial image break between tiers */}
          {index < editorialBreaks.length && (
            <FullWidthImage
              src={editorialBreaks[index].src}
              alt={editorialBreaks[index].alt}
              height="h-[30vh] md:h-[40vh]"
            />
          )}
        </div>
      ))}

      {/* Comparison summary */}
      <section className="py-section-mobile md:py-section-tablet bg-sage-mist">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-serif-wedding text-display-md text-foreground mb-6">
              Not sure which service is right for you?
            </h2>
            <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed mb-8">
              Every wedding is unique, and so is every couple's planning journey.
              We'd love to learn about your vision and recommend the perfect fit.
            </p>
            <Link
              to="/inquire"
              className="inline-flex items-center px-10 py-4 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.2em] uppercase font-semibold hover:bg-sage-deep transition-colors duration-200"
            >
              Schedule a Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
