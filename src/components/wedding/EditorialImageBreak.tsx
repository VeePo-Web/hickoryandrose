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

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden relative"
      aria-label="Editorial wedding detail"
    >
      {/* Top blending gradient — fades from the previous section's bg */}
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
          <p className="font-serif-wedding text-xl md:text-3xl lg:text-4xl text-white italic leading-relaxed tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Every detail, placed with intention.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-px bg-white/50 mx-auto mt-6 origin-center"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EditorialImageBreak;
