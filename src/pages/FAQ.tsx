import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import Navigation from "@/components/wedding/Navigation";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import Footer from "@/components/wedding/Footer";
import CTASection from "@/components/wedding/CTASection";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import MagneticButton from "@/components/wedding/MagneticButton";
import faqEditorialImage from "@/assets/faq-editorial.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Services & Planning",
    questions: [
      { q: "What's the difference between Day-Of Coordination and Full-Service Planning?", a: "Day-Of Coordination is designed for couples who have done the planning themselves and need a professional to execute their vision flawlessly on the wedding day. Full-Service Planning means we're with you from the very beginning — handling design, vendor sourcing, budgeting, logistics, and everything in between, so you can simply enjoy the journey." },
      { q: "How far in advance should I book?", a: "We recommend reaching out 10-14 months before your wedding for Full-Service Planning, and at least 3-4 months for Day-Of Coordination. That said, we're always happy to chat — even if your timeline is tighter, we may be able to help." },
      { q: "Do you plan non-wedding events?", a: "Yes! While weddings are our specialty, we also coordinate milestone celebrations, corporate events, and intimate gatherings. If it involves intentional design and calm logistics, we'd love to be part of it." },
      { q: "Can I customize my package?", a: "Absolutely. Every couple is unique, and our services are designed to be flexible. After our discovery call, we'll craft a custom proposal that matches your specific needs, priorities, and budget." },
    ],
  },
  {
    category: "Process & Communication",
    questions: [
      { q: "What does the discovery call look like?", a: "It's a relaxed, 30-minute video or phone call where we learn about your vision, your priorities, and how you want to feel on your wedding day. There's absolutely no pressure — it's simply a conversation to see if we're the right fit." },
      { q: "How do you communicate throughout the planning process?", a: "We use a combination of email, a shared planning portal, and scheduled check-in calls. You'll always know what's happening, what's coming next, and what needs your attention — without ever feeling overwhelmed." },
      { q: "Will you be the one on-site on our wedding day?", a: "Yes. The planner you work with throughout the process will be the one leading your wedding day. We believe in personal connection and continuity — no hand-offs to unfamiliar faces." },
    ],
  },
  {
    category: "Investment & Logistics",
    questions: [
      { q: "What is the investment range for your services?", a: "Day-Of Coordination starts at $2,500, Partial Planning at $5,000, and Full-Service Planning at $8,500. Every proposal is customized based on your unique needs, guest count, and event complexity." },
      { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans spread across the planning timeline. A retainer is required upon booking, with remaining payments due at agreed-upon milestones." },
      { q: "What areas do you serve?", a: "We're based in Edmonton, Alberta, and serve couples throughout the greater Edmonton area, the Alberta Rockies (Jasper, Banff, Lake Louise), and surrounding communities. Travel fees may apply for destination weddings." },
      { q: "How many weddings do you take on per year?", a: "We intentionally limit our calendar to ensure every couple receives our full attention and care. We typically take on 15-20 weddings per year, which means we never feel stretched thin on your day." },
    ],
  },
];

const faqSchemaItems = faqCategories.flatMap((cat) =>
  cat.questions.map((faq) => ({
    "@type": "Question" as const,
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: faq.a,
    },
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems,
};

const FAQ = () => {
  useEffect(() => {
    setPageMeta({
      title: "FAQ — Frequently Asked Questions | Hickory & Rose Wedding Planner",
      description: "Answers to common questions about Hickory & Rose wedding planning services, pricing, process, and coverage areas. Serving Edmonton, the Alberta Rockies, and beyond.",
      path: "/faq",
    });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    script.id = "faq-schema";
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, []);

  return (
    <main id="main-content">
      <Navigation variant="solid" />

      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground mb-4">
              Common Questions
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed max-w-xl mx-auto font-light">
              We know choosing a wedding planner is a big decision. Here are
              answers to the questions we hear most often.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          {faqCategories.map((category, catIndex) => (
            <ScrollReveal key={category.category} delay={catIndex * 0.08}>
              <div className={catIndex > 0 ? "mt-12 md:mt-16" : ""}>
                <h2 className="font-serif-wedding text-display-md text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="font-sans-wedding text-body-sm text-foreground text-left hover:text-primary hover:no-underline py-5 font-light">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed pb-5 font-light">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Editorial image break */}
      <FullWidthImage
        src={faqEditorialImage}
        alt="Gold wedding rings on handwritten calligraphy vows with eucalyptus and candlelight"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Brand-aligned quote + CTA */}
      <section className="py-section-mobile md:py-section-tablet bg-sage-mist">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <hr className="editorial-rule mx-auto mb-10" />
            <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-6">
              "No question is too small. We're here to make every part of
              the process feel clear, calm, and cared for."
            </blockquote>
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="w-8 h-px bg-primary/30" />
              <span className="font-script text-xl text-primary/60">Hickory & Rose</span>
              <span className="w-8 h-px bg-primary/30" />
            </div>
            <hr className="editorial-rule mx-auto" />
          </ScrollReveal>
        </div>
      </section>

      {/* Still have questions — merged CTA */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground mb-4">Still Curious?</p>
            <h3 className="font-serif-wedding text-display-lg text-foreground mb-4">
              We'd love to hear from you.
            </h3>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto font-light">
              No question is too small. Reach out and we'll get back to you
              within 48 hours — or schedule a discovery call to chat in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton to="/inquire" variant="primary">
                Start a Conversation
              </MagneticButton>
              <MagneticButton to="/services" variant="outline">
                Explore Services
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FAQ;
