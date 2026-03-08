import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface EditorialQuoteRibbonProps {
  quote: string;
  attribution?: string;
  direction?: "left" | "right";
}

/**
 * A cinematic horizontal-scrolling quote ribbon — the text slides
 * across the viewport as the user scrolls past. Inspired by editorial
 * magazine layouts and luxury brand sites (Celine, Aesop, etc.).
 */
const EditorialQuoteRibbon = ({
  quote,
  attribution,
  direction = "left",
}: EditorialQuoteRibbonProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["10%", "-30%"] : ["-30%", "10%"]
  );

  const borderScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      className="py-10 md:py-14 bg-foreground overflow-hidden relative"
      aria-label="Editorial quote"
    >
      {/* Top and bottom ruled lines — scroll-linked */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          scaleX: borderScale,
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.15), transparent)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-right"
        style={{
          scaleX: borderScale,
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <motion.div className="whitespace-nowrap" style={{ x }}>
        <p className="font-serif-wedding text-3xl md:text-5xl lg:text-6xl text-background/10 italic tracking-tight inline-block">
          <span className="text-background/[0.06] mr-4">❖</span>
          {quote}
          {attribution && (
            <span className="font-script text-2xl md:text-4xl text-background/[0.06] ml-8">
              — {attribution}
            </span>
          )}
          {/* Duplicate for seamless visual feel */}
          <span className="text-background/[0.04] mx-12">·</span>
          <span className="text-background/[0.06] mr-4">❖</span>
          {quote}
          {attribution && (
            <span className="font-script text-2xl md:text-4xl text-background/[0.06] ml-8">
              — {attribution}
            </span>
          )}
        </p>
      </motion.div>
    </section>
  );
};

export default EditorialQuoteRibbon;
