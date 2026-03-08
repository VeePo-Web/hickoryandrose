import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import detailImage from "@/assets/detail-placecard.jpg";

const slides = [
  {
    src: ceremonyImage,
    alt: "Mountain ceremony with floral arch at golden hour",
    couple: "Olivia & Noah",
    venue: "Jasper Park Lodge",
    label: "Ceremony",
  },
  {
    src: detailImage,
    alt: "Calligraphy place card with gold cutlery detail",
    couple: "Claire & Jonathan",
    venue: "The Enjoy Centre",
    label: "Details",
  },
  {
    src: firstDanceImage,
    alt: "First dance under string lights at outdoor reception",
    couple: "Rachel & Marcus",
    venue: "River Valley Estate",
    label: "Celebration",
  },
];

const FilmstripSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Horizontal pan driven by vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-card overflow-hidden relative"
      aria-label="Wedding filmstrip gallery"
    >
      {/* Parallax watermark */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ x: watermarkX }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-[8rem] md:text-[14rem] font-light text-foreground/[0.015] whitespace-nowrap tracking-tight italic">
          Moments
        </span>
      </motion.div>

      {/* Section header */}
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl mb-12 md:mb-16 relative">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-serif-wedding text-sm text-primary/20 font-light">08</span>
          <span className="w-8 h-px bg-primary/15" />
          <p className="font-sans-wedding text-label uppercase text-muted-foreground/40 tracking-[0.2em]">
            Selected Moments
          </p>
          <span className="flex-1 h-px bg-border/30 hidden md:block" />
        </div>
      </div>

      {/* Horizontal filmstrip */}
      <motion.div
        className="flex gap-5 md:gap-8 pl-6 md:pl-16"
        style={{ x }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            className="relative shrink-0 w-[75vw] md:w-[40vw] lg:w-[33vw] group"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Cinematic gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Editorial caption */}
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p className="font-serif-wedding text-lg text-foreground/70 group-hover:text-foreground transition-colors duration-500">
                  {slide.couple}
                </p>
                <p className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-muted-foreground/30 mt-0.5">
                  {slide.venue}
                </p>
              </div>
              <span className="font-serif-wedding text-xs text-primary/15 mt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className="h-px bg-primary/15 mt-3 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FilmstripSection;
