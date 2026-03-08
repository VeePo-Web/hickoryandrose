import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";

const processSteps = [
  { number: "01", title: "Discovery Call", time: "Week 1", description: "We start with a relaxed conversation. Tell us about your vision, your story, and how you want to feel on your wedding day. No pressure, no sales pitch — just genuine connection." },
  { number: "02", title: "Proposal & Booking", time: "Week 1-2", description: "Based on our call, we craft a customized proposal that fits your needs and budget. Once you say yes, the real magic begins." },
  { number: "03", title: "Design & Planning", time: "Months 2-10", description: "We dive deep into your vision — curating vendors, refining design concepts, building timelines, and handling every logistical detail so you don't have to." },
  { number: "04", title: "Final Details", time: "Month 11", description: "Everything comes together. Final walkthroughs, vendor confirmations, timeline refinements, and a comprehensive rehearsal to ensure every person knows their role." },
  { number: "05", title: "Your Wedding Day", time: "The Day", description: "We arrive early, coordinate everything behind the scenes, and lead with calm authority. You simply show up and feel every beautiful moment." },
];

const Approach = () => {
  return (
    <main id="main-content">
      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <Navigation variant="solid" />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              Our Approach
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              How We Plan Your Perfect Day
            </h1>
            <p className="font-sans-wedding text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Great weddings don't happen by accident. They're the result of
              thoughtful planning, clear communication, and a deep understanding
              of what matters to you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.08}>
              <div className={`flex gap-6 md:gap-10 ${index < processSteps.length - 1 ? "pb-12 md:pb-16 border-l border-border ml-6 md:ml-8 pl-8 md:pl-12" : "pl-14 md:pl-20"}`}>
                <div className="absolute -ml-14 md:-ml-20 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="font-sans-wedding text-xs font-semibold text-primary-foreground">{step.number}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[3.7rem] md:-left-[5.3rem] w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-sans-wedding text-[10px] font-semibold text-primary-foreground">{step.number}</span>
                  </div>
                  <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-2">{step.time}</p>
                  <h3 className="font-serif-wedding text-display-md text-foreground mb-3">{step.title}</h3>
                  <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Approach;
