import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";

const testimonials = [
  {
    quote:
      "We actually got to enjoy our wedding day. Every single moment felt taken care of — we never once worried about what was happening behind the scenes.",
    couple: "Sarah & Michael",
    venue: "Fairmont Hotel Macdonald, Edmonton",
  },
  {
    quote:
      "Hiring Hickory & Rose was the best decision we made in our entire planning process. The calm energy, the attention to detail — it was beyond anything we imagined.",
    couple: "Emma & James",
    venue: "The Glass House, Autumn 2024",
  },
  {
    quote:
      "From our first call, we knew we were in the right hands. Our wedding felt exactly like us — intimate, elegant, and completely stress-free.",
    couple: "Olivia & Noah",
    venue: "Jasper Park Lodge, Summer 2024",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-sage-mist"
      aria-label="Testimonials"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Testimonial with navigation */}
          <ScrollReveal>
            <div>
              <div className="w-8 h-px bg-primary mb-8" />
              <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-8 min-h-[120px]">
                "{active.quote}"
              </blockquote>
              <div className="font-sans-wedding mb-8">
                <p className="text-sm font-semibold text-foreground">
                  {active.couple}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {active.venue}
                </p>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
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
