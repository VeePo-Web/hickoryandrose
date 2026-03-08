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

      {/* Optional dark overlay for depth */}
      {overlay && (
        <div className="absolute inset-0 bg-foreground/15 pointer-events-none" />
      )}

      {/* Optional editorial caption */}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 py-4 px-6">
          <p className="font-overline text-white/50 text-center text-[0.6rem] tracking-[0.25em]">
            {caption}
          </p>
        </div>
      )}
    </section>
  );
};

export default FullWidthImage;
