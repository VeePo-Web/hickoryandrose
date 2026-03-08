import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import ceremonyImage from "@/assets/ceremony-setup.jpg";

const processSteps = [
  { number: "01", title: "Discovery Call", time: "Week 1", description: "We start with a relaxed conversation. Tell us about your vision, your story, and how you want to feel on your wedding day. No pressure, no sales pitch — just genuine connection." },
  { number: "02", title: "Proposal & Booking", time: "Week 1-2", description: "Based on our call, we craft a customized proposal that fits your needs and budget. Once you say yes, the real magic begins." },
  { number: "03", title: "Design & Planning", time: "Months 2-10", description: "We dive deep into your vision — curating vendors, refining design concepts, building timelines, and handling every logistical detail so you don't have to." },
  { number: "04", title: "Final Details", time: "Month 11", description: "Everything comes together. Final walkthroughs, vendor confirmations, timeline refinements, and a comprehensive rehearsal to ensure every person knows their role." },
  { number: "05", title: "Your Wedding Day", time: "The Day", description: "We arrive early, coordinate everything behind the scenes, and lead with calm authority. You simply show up and feel every beautiful moment." },
];

const Approach = () => {
  useEffect(() => {
    setPageMeta({
      title: "Our Approach — How We Plan Your Wedding | Hickory & Rose Edmonton",
      description: "From discovery call to wedding day, learn Hickory & Rose's 5-step planning process. Calm leadership, meticulous coordination, and elevated design — every step of the way.",
      path: "/approach",
    });
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="solid" />

      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground mb-4">
              Our Approach
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              How We Plan Your Perfect Day
            </h1>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed max-w-xl mx-auto font-light">
              Great weddings don't happen by accident. They're the result of
              thoughtful planning, clear communication, and a deep understanding
              of what matters to you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.08}>
                <div className="relative flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="relative"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="font-sans-wedding text-[11px] font-light text-primary-foreground tracking-[0.1em]">
                          {step.number}
                        </span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: [0, 0.3, 0], scale: [1, 1.6, 1.6] }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                        className="absolute inset-0 rounded-full border border-primary pointer-events-none"
                      />
                    </motion.div>
                    {index < processSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="w-px flex-1 bg-border mt-2 origin-top"
                      />
                    )}
                  </div>

                  <div className={`pb-12 md:pb-16 ${index === processSteps.length - 1 ? "pb-0" : ""}`}>
                    <p className="font-overline text-muted-foreground mb-2">
                      {step.time}
                    </p>
                    <h3 className="font-serif-wedding text-display-md text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FullWidthImage
        src={ceremonyImage}
        alt="Outdoor wedding ceremony setup in mountain meadow with floral arch"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Promise section */}
      <section className="py-section-mobile md:py-section-tablet bg-sage-mist">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <hr className="editorial-rule mx-auto mb-10" />
            <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-8">
              "Our job isn't just to plan your wedding — it's to protect the
              feeling of your day."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-primary/30" />
              <span className="font-script text-xl text-primary/60">
                Hickory & Rose
              </span>
              <span className="w-8 h-px bg-primary/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Approach;