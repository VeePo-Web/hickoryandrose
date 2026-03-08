import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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
      {/* Top and bottom fade blending edges */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

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

      {/* Corner accent frames */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-white/0 group-hover:border-white/15 transition-all duration-700 pointer-events-none z-20" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-white/0 group-hover:border-white/15 transition-all duration-700 pointer-events-none z-20" />

      {/* Corner section index */}
      {index && (
        <motion.div
          className="absolute top-8 right-8 pointer-events-none z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-serif-wedding text-sm font-light text-white/20 tracking-widest">
            {index}
          </span>
        </motion.div>
      )}

      {/* Editorial caption bar */}
      {caption && (
        <motion.div
          className="absolute bottom-6 left-0 right-0 z-20"
          style={{ opacity: captionOpacity }}
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-10 h-px bg-white/20 origin-right hidden md:block"
            />
            <p className="font-overline text-white/45 text-center text-[0.55rem] tracking-[0.3em]">
              {caption}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-10 h-px bg-white/20 origin-left hidden md:block"
            />
          </div>
        </motion.div>
      )}

      {/* Flanking decorative lines on hover */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </section>
  );
};

export default FullWidthImage;
