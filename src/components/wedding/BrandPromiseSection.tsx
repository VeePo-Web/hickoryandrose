import ScrollReveal from "./ScrollReveal";

const BrandPromiseSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
        <ScrollReveal>
          <div className="w-12 h-px bg-primary mx-auto mb-10" />

          <p className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-10">
            Calm becomes a luxury. We protect what matters most on your wedding
            day: your presence, your peace of mind, and the freedom to fully
            feel it.
          </p>

          <div className="w-12 h-px bg-primary mx-auto" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
