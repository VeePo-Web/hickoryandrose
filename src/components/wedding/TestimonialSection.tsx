import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
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

  // Auto-advance every 6s
  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  const active = testimonials[activeIndex];

  return (
    <section
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-sage-mist"
      aria-label="Testimonials"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Testimonial with crossfade */}
          <ScrollReveal>
            <div>
              <div className="w-8 h-px bg-primary mb-8" />
              <div className="min-h-[180px] md:min-h-[160px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
                  >
                    <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-8">
                      "{active.quote}"
                    </blockquote>
                    <div className="font-sans-wedding">
                      <p className="text-sm font-semibold text-foreground">
                        {active.couple}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {active.venue}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-primary/30 hover:bg-primary/50 w-2"
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
              <ImageReveal direction="up" delay={0.1}>
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
              </ImageReveal>
              <div className="space-y-3">
                <ImageReveal direction="left" delay={0.2}>
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
                </ImageReveal>
                <ImageReveal direction="left" delay={0.3}>
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
                </ImageReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
