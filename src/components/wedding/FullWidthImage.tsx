import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FullWidthImageProps {
  src: string;
  alt: string;
  height?: string;
  parallax?: boolean;
  overlay?: boolean;
  caption?: string;
  index?: string;
}

const FullWidthImage = ({
  src,
  alt,
  height = "h-[400px] md:h-[600px]",
  parallax = true,
  overlay = false,
  caption,
  index,
}: FullWidthImageProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.05, 0.15]);
  const captionOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.6]);

  return (
    <section ref={ref} className={`w-full overflow-hidden ${height} relative group`}>
      {parallax ? (
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className="w-full h-[120%] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
        />
      )}

      {/* Cinematic gradient tint — scroll-linked */}
      <motion.div
        className="absolute inset-0 bg-foreground pointer-events-none"
        style={{ opacity: overlay ? overlayOpacity : 0 }}
      />

      {/* Static overlay fallback */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-foreground/15 pointer-events-none" />
      )}

      {/* Corner section index */}
      {index && (
        <motion.div
          className="absolute top-6 left-6 md:top-8 md:left-8 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-serif-wedding text-lg md:text-xl font-light text-white/20">
            {index}
          </span>
        </motion.div>
      )}

      {/* Editorial caption bar */}
      {caption && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 py-6 px-6"
          style={{ opacity: captionOpacity }}
        >
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
        </motion.div>
      )}

      {/* Flanking decorative lines on hover */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </section>
  );
};

export default FullWidthImage;
