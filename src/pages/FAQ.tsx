import { useEffect, useRef, useState, useCallback } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import Footer from "@/components/wedding/Footer";
import CTASection from "@/components/wedding/CTASection";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import MagneticButton from "@/components/wedding/MagneticButton";
import faqEditorialImage from "@/assets/faq-editorial.jpg";
import faqHeroImage from "@/assets/faq-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Services & Planning",
    index: "01",
    questions: [
      { q: "What's the difference between Day-Of Coordination and Full-Service Planning?", a: "Day-Of Coordination is designed for couples who have done the planning themselves and need a professional to execute their vision flawlessly on the wedding day. Full-Service Planning means we're with you from the very beginning — handling design, vendor sourcing, budgeting, logistics, and everything in between, so you can simply enjoy the journey." },
      { q: "How far in advance should I book?", a: "We recommend reaching out 10-14 months before your wedding for Full-Service Planning, and at least 3-4 months for Day-Of Coordination. That said, we're always happy to chat — even if your timeline is tighter, we may be able to help." },
      { q: "Do you plan non-wedding events?", a: "Yes! While weddings are our specialty, we also coordinate milestone celebrations, corporate events, and intimate gatherings. If it involves intentional design and calm logistics, we'd love to be part of it." },
      { q: "Can I customize my package?", a: "Absolutely. Every couple is unique, and our services are designed to be flexible. After our discovery call, we'll craft a custom proposal that matches your specific needs, priorities, and budget." },
    ],
  },
  {
    category: "Process & Communication",
    index: "02",
    questions: [
      { q: "What does the discovery call look like?", a: "It's a relaxed, 30-minute video or phone call where we learn about your vision, your priorities, and how you want to feel on your wedding day. There's absolutely no pressure — it's simply a conversation to see if we're the right fit." },
      { q: "How do you communicate throughout the planning process?", a: "We use a combination of email, a shared planning portal, and scheduled check-in calls. You'll always know what's happening, what's coming next, and what needs your attention — without ever feeling overwhelmed." },
      { q: "Will you be the one on-site on our wedding day?", a: "Yes. The planner you work with throughout the process will be the one leading your wedding day. We believe in personal connection and continuity — no hand-offs to unfamiliar faces." },
    ],
  },
  {
    category: "Investment & Logistics",
    index: "03",
    questions: [
      { q: "What is the investment range for your services?", a: "Day-Of Coordination starts at $2,500, Partial Planning at $5,000, and Full-Service Planning at $8,500. Every proposal is customized based on your unique needs, guest count, and event complexity." },
      { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans spread across the planning timeline. A retainer is required upon booking, with remaining payments due at agreed-upon milestones." },
      { q: "What areas do you serve?", a: "We're based in Edmonton, Alberta, and serve couples throughout the greater Edmonton area, the Alberta Rockies (Jasper, Banff, Lake Louise), and surrounding communities. Travel fees may apply for destination weddings." },
      { q: "How many weddings do you take on per year?", a: "We intentionally limit our calendar to ensure every couple receives our full attention and care. We typically take on 15-20 weddings per year, which means we never feel stretched thin on your day." },
    ],
  },
];

const testimonials = [
  { quote: "We had so many questions, and every single one was answered with patience and warmth. Nothing ever felt rushed.", couple: "Alyssa & Daniel", venue: "Art Gallery of Alberta" },
  { quote: "The transparency around pricing made us feel respected from day one. No hidden fees, no surprises.", couple: "Lauren & Ethan", venue: "Willow Creek Barn" },
  { quote: "From our very first call, we knew we were in the right hands.", couple: "Olivia & Noah", venue: "Jasper Park Lodge" },
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
  const heroRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const advanceTestimonial = useCallback(() => {
    setActiveTestimonial((i) => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advanceTestimonial, 5000);
    return () => clearInterval(timer);
  }, [advanceTestimonial]);

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
      <Navigation variant="overlay" />

      {/* Cinematic Parallax Hero */}
      <section ref={heroRef} className="relative h-[55vh] md:h-[65vh] overflow-hidden grain-overlay vignette">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={faqHeroImage}
            alt="Luxury wedding stationery with sage envelope, gold wax seal, and calligraphy on linen"
            className="w-full h-[120%] object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/10" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <span className="font-serif-wedding text-[14rem] md:text-[22rem] text-white leading-none tracking-tight whitespace-nowrap">
            FAQ
          </span>
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
          style={{ opacity: heroOpacity }}
        >
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-white/50 mb-4">
              <span className="inline-flex items-center gap-3">
                <motion.span
                  className="w-8 h-px bg-white/30 origin-right"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                Common Questions
                <motion.span
                  className="w-8 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6 max-w-3xl">
              Frequently Asked Questions
            </h1>
            <p className="font-sans-wedding text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto font-light">
              We know choosing a wedding planner is a big decision. Here are
              answers to the questions we hear most often.
            </p>
          </ScrollReveal>
        </motion.div>

        <motion.span
          className="absolute bottom-8 right-8 font-serif-wedding text-sm text-white/15 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          05
        </motion.span>
      </section>

      {/* Quick stats bar — trust signal */}
      <section className="py-6 md:py-8 bg-sage-deep border-b border-primary-foreground/[0.06]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "48hr", label: "Response Time" },
              { value: "15–20", label: "Weddings Per Year" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif-wedding text-lg md:text-xl text-primary-foreground/60 font-light">
                  {stat.value}
                </p>
                <p className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-primary-foreground/25 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories — editorial ruled layout with index numbers */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <ScrollReveal key={category.category} delay={catIndex * 0.08}>
              <div className={catIndex > 0 ? "mt-16 md:mt-24" : ""}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline mb-8 md:mb-10">
                  <div className="md:col-span-2">
                    <motion.span
                      className="font-serif-wedding text-5xl md:text-6xl font-light text-primary/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {category.index}
                    </motion.span>
                  </div>
                  <div className="md:col-span-10">
                    <h2 className="font-serif-wedding text-display-md text-foreground">
                      {category.category}
                    </h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-px bg-border/60 mt-4 origin-left"
                    />
                  </div>
                </div>

                <div className="md:grid md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-2" />
                  <div className="md:col-span-10">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${catIndex}-${index}`}
                          className="border-border/30 group"
                        >
                          <AccordionTrigger className="font-sans-wedding text-body text-foreground text-left hover:text-primary hover:no-underline py-6 font-light gap-4">
                            <span className="flex items-baseline gap-4">
                              <span className="font-serif-wedding text-xs text-muted-foreground/30 shrink-0 tabular-nums">
                                {category.index}.{String(index + 1).padStart(2, "0")}
                              </span>
                              <span>{faq.q}</span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed pb-6 pl-12 font-light">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Inline testimonial carousel — NEW */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground/40 mb-8">What Couples Say</p>
            <div className="min-h-[120px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <blockquote className="font-serif-wedding text-pull-quote italic text-foreground/70 leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  <p className="font-sans-wedding text-body-sm font-light text-foreground/50">
                    {testimonials[activeTestimonial].couple}
                  </p>
                  <p className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/30 mt-1">
                    {testimonials[activeTestimonial].venue}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-6 h-[2px] transition-colors duration-300 ${
                    i === activeTestimonial ? "bg-primary/60" : "bg-border/40 hover:bg-border/60"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Editorial image break */}
      <FullWidthImage
        src={faqEditorialImage}
        alt="Gold wedding rings on handwritten calligraphy vows with eucalyptus and candlelight"
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Quote */}
      <section className="py-20 md:py-28 bg-sage-deep">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-12 h-px bg-primary-foreground/20 mx-auto mb-10 origin-center"
            />
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "No question is too small. We're here to make every part of
              the process feel clear, calm, and cared for."
            </blockquote>
            <span className="font-script text-xl text-primary-foreground/35">
              Hickory & Rose
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-section-mobile md:py-section-tablet bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground/50 mb-4">Still Curious?</p>
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
      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default FAQ;
