import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import editorialImage from "@/assets/editorial-florals.jpg";

const EditorialImageBreak = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden relative"
      aria-label="Editorial wedding detail"
    >
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

      {/* Editorial overlay with brand quote */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: textOpacity }}
      >
        <div className="bg-foreground/40 backdrop-blur-sm px-8 py-6 md:px-14 md:py-10 text-center max-w-xl">
          <div className="w-8 h-px bg-white/40 mx-auto mb-5" />
          <p className="font-serif-wedding text-lg md:text-2xl text-white leading-relaxed italic">
            Every detail, placed with intention.
          </p>
          <div className="w-8 h-px bg-white/40 mx-auto mt-5" />
        </div>
      </motion.div>
    </section>
  );
};

export default EditorialImageBreak;
