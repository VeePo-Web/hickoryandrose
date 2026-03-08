import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";

interface PortfolioFeaturedStoryProps {
  image: string;
  alt: string;
  couple: string;
  venue: string;
  season: string;
  description: string;
  quote: string;
}

const PortfolioFeaturedStory = ({ image, alt, couple, venue, season, description, quote }: PortfolioFeaturedStoryProps) => (
  <section className="bg-card py-section-mobile md:py-section-tablet">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <ScrollReveal>
          <ImageReveal direction="left">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ImageReveal>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-3">
              <span className="inline-flex items-center gap-3">
                <span className="w-5 h-px bg-primary/30" />
                Featured Wedding
              </span>
            </p>
            <h2 className="font-serif-wedding text-display-lg text-foreground mb-2">
              {couple}
            </h2>
            <p className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-muted-foreground/40 mb-6">
              {venue} · {season}
            </p>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-6">
              {description}
            </p>
            <div className="border-l-2 border-primary/15 pl-5">
              <p className="font-serif-wedding text-sm italic text-foreground/50 leading-relaxed">
                "{quote}"
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default PortfolioFeaturedStory;
