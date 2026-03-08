import ScrollReveal from "./ScrollReveal";

const LoveQuoteSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-sage-deep" aria-label="Brand manifesto">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
        <ScrollReveal>
          <p className="font-sans-wedding text-label uppercase text-primary-foreground/50 tracking-[0.2em] mb-8">
            Our Promise
          </p>
          <blockquote className="font-serif-wedding text-display-md md:text-display-lg text-primary-foreground leading-relaxed mb-8">
            We believe your wedding day should be felt, not managed. That the
            details should serve the moment — never compete with it. That calm
            is not the absence of planning, but the presence of it.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-primary-foreground/30" />
            <span className="font-script text-xl text-primary-foreground/60">
              Hickory & Rose
            </span>
            <span className="w-8 h-px bg-primary-foreground/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LoveQuoteSection;
