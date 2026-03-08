import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-primary" aria-label="Get in touch">
      <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
        <ScrollReveal>
          <h2 className="font-serif-wedding text-display-lg text-primary-foreground mb-6">
            Ready to feel calm about your wedding day?
          </h2>
          <p className="font-sans-wedding text-sm text-primary-foreground/70 leading-relaxed mb-10">
            Let's talk about your vision, your day, and how Hickory & Rose can
            make it effortlessly beautiful.
          </p>
          <Link
            to="/inquire"
            className="inline-flex items-center border border-primary-foreground/50 hover:border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground font-sans-wedding text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-200"
          >
            Let's Talk
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
