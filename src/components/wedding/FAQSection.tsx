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
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans-wedding text-sm tracking-widest uppercase text-wedding-text-light text-center mb-4">
            Questions & Answers
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-4xl md:text-5xl text-wedding-text text-center mb-4">
            FAQ
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-sans-wedding text-wedding-text-light text-center max-w-2xl mx-auto mb-12">
            A few things that might be helpful to know. If you have other questions, 
            just reach out—we're happy to help.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-wedding-cream rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="font-serif-wedding text-lg text-wedding-text hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans-wedding text-wedding-text-light pb-6">
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
