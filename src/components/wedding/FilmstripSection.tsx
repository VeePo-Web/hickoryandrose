import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import receptionImage from "@/assets/portfolio-reception.jpg";

const slides = [
  {
    src: ceremonyImage,
    alt: "Mountain ceremony with floral arch at golden hour",
    couple: "Olivia & Noah",
    venue: "Jasper Park Lodge",
    label: "Ceremony",
    season: "Summer 2024",
  },
  {
    src: detailImage,
    alt: "Calligraphy place card with gold cutlery detail",
    couple: "Claire & Jonathan",
    venue: "The Enjoy Centre",
    label: "Details",
    season: "Spring 2023",
  },
  {
    src: receptionImage,
    alt: "Candlelit reception table with sage and ivory florals",
    couple: "Emma & James",
    venue: "The Glass House",
    label: "Reception",
    season: "Autumn 2024",
  },
  {
    src: bouquetImage,
    alt: "Bridal bouquet with white roses and sage eucalyptus",
    couple: "Alyssa & Daniel",
    venue: "Art Gallery of Alberta",
    label: "Florals",
    season: "Spring 2024",
  },
  {
    src: firstDanceImage,
    alt: "First dance under string lights at outdoor reception",
    couple: "Rachel & Marcus",
    venue: "River Valley Estate",
    label: "Celebration",
    season: "Summer 2023",
  },
];

const FilmstripSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Horizontal pan driven by vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-30%"]);
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
          <span className="font-sans-wedding text-[0.55rem] tracking-[0.15em] text-muted-foreground/20 tabular-nums hidden md:block">
            {String(slides.length).padStart(2, "0")} Frames
          </span>
        </div>
      </div>

      {/* Film sprocket holes — top */}
      <div className="flex gap-[3.6rem] md:gap-[5.2rem] pl-6 md:pl-16 mb-3 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`top-${i}`} className="w-3 h-2 rounded-sm bg-foreground/[0.03] shrink-0" />
        ))}
      </div>

      {/* Horizontal filmstrip */}
      <motion.div
        className="flex gap-5 md:gap-8 pl-6 md:pl-16"
        style={{ x }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            className="relative shrink-0 w-[75vw] md:w-[38vw] lg:w-[30vw] group"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Cinematic gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Film frame number overlay */}
              <motion.span
                className="absolute top-3 right-3 font-sans-wedding text-[0.5rem] tracking-[0.2em] text-white/0 group-hover:text-white/30 transition-colors duration-500 tabular-nums"
                aria-hidden="true"
              >
                FR{String(i + 1).padStart(2, "0")}
              </motion.span>
              {/* Hover caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-white/40">
                  {slide.season}
                </p>
              </div>
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

      {/* Film sprocket holes — bottom */}
      <div className="flex gap-[3.6rem] md:gap-[5.2rem] pl-6 md:pl-16 mt-3 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`bot-${i}`} className="w-3 h-2 rounded-sm bg-foreground/[0.03] shrink-0" />
        ))}
      </div>
    </section>
  );
};

export default FilmstripSection;
