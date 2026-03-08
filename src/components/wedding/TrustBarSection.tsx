import ScrollReveal from "./ScrollReveal";

const trustLogos = [
  "Edmonton Bridal Magazine",
  "Wedding Bells",
  "Style Me Pretty",
  "Alberta Weddings",
  "The Knot",
];

const TrustBarSection = () => {
  return (
    <section className="py-10 md:py-14 bg-card border-y border-border" aria-label="Featured in">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans-wedding text-label uppercase text-muted-foreground tracking-[0.2em] text-center mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {trustLogos.map((name) => (
              <span
                key={name}
                className="font-serif-wedding text-base md:text-lg text-muted-foreground/50 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustBarSection;
