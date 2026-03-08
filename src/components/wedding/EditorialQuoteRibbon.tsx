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

  // Ghost layer moves in opposite direction for depth
  const ghostX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["5%", "-15%"] : ["-15%", "5%"]
  );

  const borderScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const ornamentOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0, 0.06, 0]);
  const ornamentY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={ref}
      className="py-10 md:py-14 bg-foreground overflow-hidden relative"
      aria-label="Editorial quote"
    >
      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-[0.008] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "150px 150px",
        }}
        aria-hidden="true"
      />

      {/* Floating ornament with parallax */}
      <motion.div
        className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{ y: ornamentY, opacity: ornamentOpacity }}
        aria-hidden="true"
      >
        <span className="font-script text-6xl text-background leading-none">&</span>
      </motion.div>

      {/* Top and bottom ruled lines — scroll-linked */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          scaleX: borderScale,
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.15), hsl(var(--gold, 38 60% 55%) / 0.12), transparent)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-right"
        style={{
          scaleX: borderScale,
          background:
            "linear-gradient(90deg, transparent, hsl(var(--gold, 38 60% 55%) / 0.12), hsl(var(--primary) / 0.15), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Ghost parallax layer — opposite direction, lower opacity */}
      <motion.div
        className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none select-none"
        style={{ x: ghostX }}
        aria-hidden="true"
      >
        <p className="font-serif-wedding text-3xl md:text-5xl lg:text-6xl text-background/[0.02] italic tracking-tight">
          {quote}
          <span className="mx-16 text-background/[0.015]">·</span>
          {quote}
        </p>
      </motion.div>

      {/* Main quote layer */}
      <motion.div className="whitespace-nowrap relative" style={{ x }}>
        <p className="font-serif-wedding text-3xl md:text-5xl lg:text-6xl text-background/10 italic tracking-tight inline-block">
          <span className="text-background/[0.06] mr-4">❖</span>
          {quote}
          {attribution && (
            <span className="font-script text-2xl md:text-4xl text-background/[0.06] ml-8">
              — {attribution}
            </span>
          )}
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
