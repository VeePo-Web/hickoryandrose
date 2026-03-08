import ScrollReveal from "./ScrollReveal";
import BranchDecoration from "./BranchDecoration";
import { Quote } from "lucide-react";

const LoveQuoteSection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal className="flex justify-center mb-8">
          <BranchDecoration />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="text-wedding-sage/30 mx-auto mb-6" size={48} />
            <blockquote className="font-serif-wedding text-2xl md:text-3xl lg:text-4xl text-wedding-text leading-relaxed mb-8">
              "The best thing to hold onto in life is each other."
            </blockquote>
            <p className="font-sans-wedding text-wedding-text-light">
              — Audrey Hepburn
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LoveQuoteSection;
