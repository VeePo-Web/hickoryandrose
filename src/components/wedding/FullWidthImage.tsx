import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FullWidthImageProps {
  src: string;
  alt: string;
  height?: string;
  parallax?: boolean;
  overlay?: boolean;
  caption?: string;
}

const FullWidthImage = ({
  src,
  alt,
  height = "h-[400px] md:h-[600px]",
  parallax = true,
  overlay = false,
  caption,
}: FullWidthImageProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className={`w-full overflow-hidden ${height} relative`}>
      {parallax ? (
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {overlay && (
        <div className="absolute inset-0 bg-foreground/15 pointer-events-none" />
      )}

      {caption && (
        <div className="absolute bottom-0 left-0 right-0 py-6 px-6">
          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-8 h-px bg-white/25 origin-right hidden md:block"
            />
            <p className="font-overline text-white/50 text-center text-[0.6rem] tracking-[0.25em]">
              {caption}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-8 h-px bg-white/25 origin-left hidden md:block"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FullWidthImage;
