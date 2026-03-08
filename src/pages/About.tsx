import { useEffect } from "react";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import ImageReveal from "@/components/wedding/ImageReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import BranchDecoration from "@/components/wedding/BranchDecoration";
import founderImage from "@/assets/founder-portrait.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";

const values = [
  {
    title: "Calm Leadership",
    description:
      "We lead with quiet confidence so you never feel rushed, pressured, or anxious.",
  },
  {
    title: "Intentional Design",
    description:
      "Every detail is considered — nothing is accidental, everything has meaning.",
  },
  {
    title: "Genuine Care",
    description:
      "Your wedding isn't a project to us. It's a privilege and a responsibility we take personally.",
  },
];

const milestones = [
  { year: "2018", event: "Hickory & Rose founded in Edmonton, Alberta" },
  { year: "2019", event: "First feature in Edmonton Bridal Magazine" },
  { year: "2020", event: "Expanded to full-service planning & virtual coordination" },
  { year: "2022", event: "50th wedding milestone — Jasper Park Lodge" },
  { year: "2024", event: "Named Top 10 Edmonton Wedding Planners" },
];

const About = () => {
  useEffect(() => {
    document.title = "About | Hickory & Rose — Edmonton Wedding Planner";
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="solid" />

      {/* Hero */}
      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground">
              Meet Hickory & Rose
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
        <BranchDecoration className="absolute -right-8 top-12 hidden lg:block" />

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <ImageReveal direction="left" delay={0.1}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Founder of Hickory & Rose"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ImageReveal>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-6">
                  The heart behind every detail.
                </h2>
                <div className="space-y-4 font-sans-wedding text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I founded Hickory & Rose with a simple belief: your wedding
                    day should feel as calm as it is beautiful.
                  </p>
                  <p>
                    After years in the events industry, I noticed something
                    troubling — too many couples were stressed and exhausted on
                    what should have been their most joyful day. I knew there had
                    to be a better way.
                  </p>
                  <p>
                    Hickory & Rose exists to be that better way. We bring quiet
                    confidence, meticulous planning, and genuine warmth to every
                    wedding we touch. When you work with us, you're not hiring a
                    coordinator — you're gaining a partner who cares deeply about
                    your experience.
                  </p>
                  <p>
                    Based in Edmonton, Alberta, we serve couples who value
                    refined design, intentional details, and the freedom to fully
                    enjoy their celebration.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Editorial image break with parallax */}
      <FullWidthImage
        src={bouquetImage}
        alt="Bridal bouquet with white roses and sage eucalyptus"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Values */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card relative overflow-hidden">
        <BranchDecoration className="absolute -left-8 bottom-8 hidden lg:block" flip />

        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                What Guides Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-8 h-px bg-primary mx-auto mb-6 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-serif-wedding text-display-md text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
                Our Journey
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                Milestones Along the Way
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.08}>
                <div className="flex items-start gap-6 md:gap-8 pb-8 last:pb-0">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    {index < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-1 min-h-[2rem]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="font-serif-wedding text-lg font-semibold text-foreground">
                      {milestone.year}
                    </p>
                    <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default About;
