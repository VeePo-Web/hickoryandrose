import ScrollReveal from "./ScrollReveal";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";

const TestimonialSection = () => {
  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-sage-mist" aria-label="Testimonials">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Testimonial */}
          <ScrollReveal>
            <div>
              <div className="w-8 h-px bg-primary mb-8" />
              <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-8">
                "We actually got to enjoy our wedding day. Every single moment
                felt taken care of — we never once worried about what was
                happening behind the scenes."
              </blockquote>
              <div className="font-sans-wedding">
                <p className="text-sm font-semibold text-foreground">
                  Sarah & Michael
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Fairmont Hotel Macdonald, Edmonton
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mini Gallery */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={ceremonyImage}
                  alt="Outdoor wedding ceremony with mountain backdrop and floral arch"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={512}
                  height={683}
                />
              </div>
              <div className="space-y-3">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={detailImage}
                    alt="Elegant calligraphy place card with gold cutlery on linen"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={firstDanceImage}
                    alt="Couple's first dance under string lights at outdoor reception"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
