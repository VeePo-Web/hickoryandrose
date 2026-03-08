import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should I wear?",
    answer: "Formal attire works well—cocktail dresses, suits, or something you feel good in. The desert can get cool in the evening, so a light layer is a good idea. Comfortable shoes recommended for walking outdoors.",
  },
  {
    question: "Are children welcome?",
    answer: "We've made this an adults-only evening so everyone can relax. We're happy to share childcare recommendations if that would help.",
  },
  {
    question: "Can I bring a plus one?",
    answer: "If your invitation includes 'and guest,' absolutely. Otherwise, we're keeping the guest list to those named on the invite due to space.",
  },
  {
    question: "What time should I arrive?",
    answer: "We'd suggest arriving around 3:30 PM so you have time to settle in before the ceremony starts at 4:00 PM.",
  },
  {
    question: "Is there parking?",
    answer: "Yes—free parking is available at the venue, and valet will be offered as well.",
  },
  {
    question: "Will it be outdoors?",
    answer: "The ceremony will be outside with views of the desert. If the weather turns, we have an indoor backup ready.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer: "We'd love for you to be fully present, so we're asking for an unplugged ceremony—phones and cameras away. We'll share all the professional photos afterward.",
  },
  {
    question: "What about dietary restrictions?",
    answer: "Just let us know when you RSVP. Our caterer can accommodate most needs.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background py-section-mobile md:py-section-tablet lg:py-section-desktop relative overflow-hidden">
      {/* Decorative background text */}
      <motion.div
        className="absolute -right-10 top-1/4 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[12rem] md:text-[18rem] font-light text-foreground leading-none whitespace-nowrap">
          FAQ
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14 md:mb-20 items-baseline">
            <div className="md:col-span-4">
              <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-px bg-border" />
                  Questions & Answers
                </span>
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground">
                FAQ
              </h2>
            </div>
            <div className="md:col-span-8 md:pt-8">
              <p className="font-sans-wedding text-body-sm text-muted-foreground font-light leading-relaxed">
                A few things that might be helpful to know. If you have other questions,
                just reach out—we're happy to help.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/30 group"
                >
                  <AccordionTrigger className="font-sans-wedding text-body text-foreground text-left hover:text-primary hover:no-underline py-6 font-light gap-4">
                    <span className="flex items-baseline gap-4">
                      <span className="font-serif-wedding text-xs text-muted-foreground/30 shrink-0 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed pb-6 pl-12 font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
