import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import detailImage from "@/assets/detail-placecard.jpg";

const EditorialSplitSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] overflow-hidden"
      aria-label="Editorial quote"
    >
      {/* Quote side */}
      <div className="bg-sage-deep flex items-center justify-center py-section-mobile md:py-section-tablet px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-md">
            <div className="w-10 h-px bg-primary-foreground/30 mb-8" />
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              The best weddings don't feel produced — they feel{" "}
              <em>inevitable</em>. As if every detail was always meant to be
              exactly this way.
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-primary-foreground/30" />
              <span className="font-script text-lg text-primary-foreground/60">
                Hickory & Rose
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Image side with parallax */}
      <div className="overflow-hidden relative min-h-[40vh] lg:min-h-0">
        <motion.img
          src={detailImage}
          alt="Elegant calligraphy place card with gold cutlery on fine linen"
          className="absolute inset-0 w-full h-[120%] object-cover"
          style={{ y: imageY }}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default EditorialSplitSection;
