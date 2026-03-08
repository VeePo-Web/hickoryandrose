import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion } from "framer-motion";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import ImageReveal from "@/components/wedding/ImageReveal";
import { Calendar, Flower2, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/wedding/MagneticButton";
import servicePlanningImage from "@/assets/service-planning.jpg";
import serviceStationeryImage from "@/assets/service-stationery.jpg";
import serviceFullserviceImage from "@/assets/service-fullservice.jpg";

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
    image: servicePlanningImage,
    imageAlt: "Wedding planner reviewing a detailed timeline at her desk with a floral mood board",
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
    image: serviceStationeryImage,
    imageAlt: "Luxury wedding stationery suite with calligraphy and wax seals on marble",
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
    image: serviceFullserviceImage,
    imageAlt: "Wedding planner styling an elegant reception table with sage florals and crystal glassware",
  },
];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Services = () => {
  useEffect(() => {
    setPageMeta({
      title: "Wedding Planning Services — Day-Of, Partial & Full-Service | Hickory & Rose",
      description: "Explore Hickory & Rose wedding planning services in Edmonton. Day-of coordination from $2,500, partial planning from $5,000, full-service from $8,500. Custom proposals for every couple.",
      path: "/services",
    });
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="solid" />

      {/* Hero */}
      <section className="relative bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-primary/30" />
              <span className="font-script text-lg text-primary/40">H & R</span>
              <span className="w-10 h-px bg-primary/30" />
            </div>
            <p className="font-overline text-muted-foreground mb-4">
              Our Services
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              Wedding Planning Services
            </h1>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed max-w-xl mx-auto font-light">
              Every couple is different. Our services are designed to meet you
              where you are — whether you need a steady hand on the day or a
              trusted partner from the very beginning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Tiers */}
      {serviceTiers.map((service, index) => (
        <div key={service.id}>
          <section
            id={service.id}
            className={`py-section-mobile md:py-section-tablet lg:py-section-desktop ${
              index % 2 === 0 ? "bg-background" : "bg-card"
            }`}
          >
            <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
              <div className={`grid grid-cols-1 ${service.image ? "lg:grid-cols-2 gap-12 lg:gap-16 items-center" : "max-w-4xl mx-auto"}`}>
                {/* Image column (alternating sides) */}
                {service.image && index % 2 === 0 && (
                  <ScrollReveal>
                    <ImageReveal direction="left">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </ImageReveal>
                  </ScrollReveal>
                )}

                {/* Content column */}
                <div>
                  <ScrollReveal delay={service.image ? 0.1 : 0}>
                    <div className={`${service.image ? "" : "text-center"} mb-10`}>
                      <service.icon
                        size={36}
                        strokeWidth={1}
                        className={`text-primary mb-4 ${service.image ? "" : "mx-auto"}`}
                      />
                      <h2 className="font-serif-wedding text-display-lg text-foreground mb-2">
                        {service.title}
                      </h2>
                      <p className="font-serif-wedding text-lg italic text-muted-foreground mb-3">
                        {service.tagline}
                      </p>
                      <p className="font-overline text-primary">
                        {service.investment}
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={service.image ? 0.15 : 0.1}>
                    <p className={`font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light ${service.image ? "" : "text-center max-w-2xl mx-auto"} mb-10`}>
                      {service.description}
                    </p>
                    <div className="bg-sage-mist p-8 md:p-10 mb-8">
                      <p className="font-overline text-muted-foreground mb-4">
                        What's Included
                      </p>
                      <motion.ul
                        className="space-y-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        {service.includes.map((item, i) => (
                          <motion.li
                            key={item}
                            custom={i}
                            variants={listItem}
                            className="flex items-start gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="font-sans-wedding text-body-sm text-foreground font-light">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    <p className={`font-sans-wedding text-caption text-muted-foreground ${service.image ? "" : "text-center"} italic font-light`}>
                      Ideal for: {service.idealFor}
                    </p>
                  </ScrollReveal>
                </div>

                {/* Image on right for odd indexes */}
                {service.image && index % 2 !== 0 && (
                  <ScrollReveal>
                    <ImageReveal direction="right">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </ImageReveal>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* Testimonial break */}
      <section className="py-section-mobile md:py-section-tablet bg-sage-deep">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-10 h-px bg-primary-foreground/30 mx-auto mb-8" />
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "They handled every detail with such grace — we were completely
              free to enjoy our day. It was everything we dreamed of and more."
            </blockquote>
            <p className="font-sans-wedding text-body-sm font-light text-primary-foreground/80">
              Olivia & Noah
            </p>
            <p className="font-sans-wedding text-xs text-primary-foreground/50 mt-1">
              Jasper Park Lodge, Summer 2024
            </p>
            <div className="w-10 h-px bg-primary-foreground/30 mx-auto mt-8" />
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison summary — elevated */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-sage-mist">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-overline text-muted-foreground mb-4">Find Your Fit</p>
              <h2 className="font-serif-wedding text-display-lg text-foreground mb-6">
                Not sure which service is right for you?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { tier: "Day-Of", icon: "🗓", desc: "You've planned it all — we perfect and lead the day.", price: "From $2,500" },
              { tier: "Partial", icon: "🌿", desc: "Collaborate on design and vendors with expert guidance.", price: "From $5,000" },
              { tier: "Full-Service", icon: "👑", desc: "We handle everything from vision to final send-off.", price: "From $8,500" },
            ].map((item, i) => (
              <ScrollReveal key={item.tier} delay={i * 0.1}>
                <div className="bg-background p-8 text-center group hover:shadow-lg transition-shadow duration-500">
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <h3 className="font-serif-wedding text-display-md text-foreground mb-2">
                    {item.tier}
                  </h3>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-4">
                    {item.desc}
                  </p>
                  <p className="font-overline text-primary">{item.price}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-8 font-light max-w-lg mx-auto">
                Every wedding is unique. We'd love to learn about your vision
                and recommend the perfect fit.
              </p>
              <MagneticButton to="/inquire" variant="primary">
                Schedule a Discovery Call
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default Services;