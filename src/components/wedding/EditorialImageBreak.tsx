import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import editorialImage from "@/assets/editorial-florals.jpg";

const EditorialImageBreak = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [30, 0]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.65, 0.85],
    [0, 1, 1, 0]
  );
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden relative"
      aria-label="Editorial wedding detail"
    >
      {/* Top blending gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

      <div className="aspect-[21/9] md:aspect-[21/9] w-full overflow-hidden">
        <motion.img
          src={editorialImage}
          alt="Elegant floral arrangement with sage eucalyptus and ivory garden roses in warm natural light"
          className="w-full h-[120%] object-cover"
          style={{ y }}
          loading="lazy"
          width={1920}
          height={823}
        />
      </div>

      {/* Bottom blending gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Floating editorial typography */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        style={{ opacity: textOpacity }}
      >
        <motion.div className="text-center" style={{ y: textY }}>
          {/* Flanking lines with animated width */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              className="h-px bg-white/40 origin-right"
              style={{ scaleX: lineWidth, width: 40 }}
            />
            <span className="font-script text-white/50 text-lg">&</span>
            <motion.div
              className="h-px bg-white/40 origin-left"
              style={{ scaleX: lineWidth, width: 40 }}
            />
          </div>
          <p className="font-serif-wedding text-xl md:text-3xl lg:text-4xl text-white italic leading-relaxed tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Every detail, placed with intention.
          </p>
          <motion.div
            className="w-16 h-px bg-white/50 mx-auto mt-6 origin-center"
            style={{ scaleX: lineWidth }}
          />
          {/* Editorial metadata */}
          <p className="font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-white/30 mt-4">
            Hickory & Rose · Refined Rustic Elegance
          </p>
        </motion.div>
      </motion.div>

      {/* Corner index marks */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden md:block" aria-hidden="true">
        <span className="font-serif-wedding text-xs text-white/15 font-light">04</span>
      </div>
      <div className="absolute bottom-6 right-6 z-20 pointer-events-none hidden md:block" aria-hidden="true">
        <span className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-white/15">Editorial</span>
      </div>
    </section>
  );
};

export default EditorialImageBreak;
