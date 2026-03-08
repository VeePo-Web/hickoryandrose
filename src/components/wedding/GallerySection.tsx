import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroImage from "@/assets/hero-wedding.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import editorialImage from "@/assets/editorial-florals.jpg";
import venueImage from "@/assets/portfolio-venue.jpg";

const photos = [
  {
    src: heroImage,
    alt: "Elegant garden reception tablescape at golden hour with sage and ivory florals",
    title: "Golden Hour Reception",
    location: "Fairmont Hotel Macdonald",
    category: "Reception",
    story: "An evening where every candle told a story.",
    season: "Summer 2024",
  },
  {
    src: detailImage,
    alt: "Elegant calligraphy place card with gold cutlery on fine linen",
    title: "Calligraphy Details",
    location: "The Glass House",
    category: "Details",
    story: "Handwritten with intention.",
    season: "Spring 2024",
  },
  {
    src: editorialImage,
    alt: "Sage eucalyptus and ivory garden rose floral arrangement detail",
    title: "Sage & Ivory Florals",
    location: "Art Gallery of Alberta",
    category: "Florals",
    story: "Nature's palette, elevated.",
    season: "Autumn 2023",
  },
  {
    src: ceremonyImage,
    alt: "Outdoor ceremony with mountain backdrop and floral arch",
    title: "Mountain Ceremony",
    location: "Jasper Park Lodge",
    category: "Ceremony",
    story: "Where the mountains bore witness.",
    season: "Summer 2023",
  },
  {
    src: firstDanceImage,
    alt: "Couple's first dance under string lights at outdoor reception",
    title: "First Dance",
    location: "Devonian Botanic Garden",
    category: "Moments",
    story: "The world fell away for three minutes.",
    season: "Summer 2024",
  },
  {
    src: venueImage,
    alt: "Rustic barn venue at twilight with warm string lights and mountain backdrop",
    title: "Twilight Barn Reception",
    location: "Canadian Rockies",
    category: "Venue",
    story: "Golden hour met candlelight.",
    season: "Autumn 2024",
  },
];

/* Editorial masonry spans — asymmetric for visual interest */
const masonrySpans = [
  "col-span-2 row-span-2",  // Hero — large
  "col-span-1 row-span-1",  // Detail
  "col-span-1 row-span-2",  // Florals — tall
  "col-span-1 row-span-1",  // Ceremony
  "col-span-1 row-span-1",  // First Dance
  "col-span-2 row-span-1",  // Venue — wide
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const verticalRuleScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (selectedIndex === null) return;
      setSelectedIndex((selectedIndex + dir + photos.length) % photos.length);
    },
    [selectedIndex]
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [selectedIndex, navigate]);

  return (
    <>
      <section ref={sectionRef} className="bg-background py-20 md:py-32 relative overflow-hidden">
        {/* Parallax watermark */}
        <motion.div
          className="absolute -right-4 top-1/3 pointer-events-none select-none"
          style={{ y: watermarkY }}
          aria-hidden="true"
        >
          <span className="font-serif-wedding text-[8rem] md:text-[14rem] font-light text-foreground/[0.015] leading-none whitespace-nowrap tracking-tight italic">
            Gallery
          </span>
        </motion.div>

        {/* Scroll-linked vertical accent */}
        <motion.div
          className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block"
          style={{ scaleY: verticalRuleScale, transformOrigin: "top" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6 max-w-5xl mx-auto">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif-wedding text-sm text-primary/20 font-light">02</span>
                  <span className="w-8 h-px bg-primary/15" />
                  <p className="font-sans-wedding text-label uppercase text-muted-foreground/40 tracking-[0.2em]">
                    Some Favorites
                  </p>
                </div>
                <h2 className="font-serif-wedding text-display-lg text-foreground">
                  Moments Together
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-16 h-px bg-primary/20 origin-left mt-4"
                />
              </div>
              <p className="font-sans-wedding text-body-sm text-muted-foreground font-light max-w-xs md:text-right leading-relaxed">
                A curated collection of details, emotions, and the quiet beauty we help bring to life.
              </p>
            </div>
          </ScrollReveal>

          {/* Editorial masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4 max-w-5xl mx-auto">
            {photos.map((photo, index) => (
              <ImageReveal
                key={index}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "up" : "left"}
                className={masonrySpans[index]}
              >
                <button
                  onClick={() => setSelectedIndex(index)}
                  className="w-full h-full overflow-hidden cursor-pointer group block relative"
                  data-cursor-hover
                  data-cursor-label="View"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />

                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner frame accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/0 group-hover:border-white/20 transition-colors duration-500" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/0 group-hover:border-white/20 transition-colors duration-500" />

                  {/* Hover editorial overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 font-sans-wedding text-[0.5rem] tracking-[0.18em] uppercase text-white/50 bg-white/10 backdrop-blur-sm px-2.5 py-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {photo.category}
                    </span>

                    {/* Story pull-quote */}
                    <p className="font-serif-wedding text-xs italic text-white/40 mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      "{photo.story}"
                    </p>

                    <p className="font-serif-wedding text-sm md:text-base text-white/90 leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {photo.title}
                    </p>

                    <div className="flex items-center gap-2 mt-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      <span className="w-3 h-px bg-white/25" />
                      <span className="font-sans-wedding text-[0.5rem] tracking-[0.12em] uppercase text-white/35">
                        {photo.location}
                      </span>
                    </div>
                  </div>

                  {/* Frame index */}
                  <span className="absolute top-3 right-3 font-serif-wedding text-[0.5rem] text-white/0 group-hover:text-white/25 transition-colors duration-500 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Season badge — bottom-left */}
                  <span className="absolute bottom-3 left-3 font-sans-wedding text-[0.45rem] tracking-[0.1em] uppercase text-white/0 group-hover:text-white/20 transition-colors duration-500 delay-200">
                    {photo.season}
                  </span>
                </button>
              </ImageReveal>
            ))}
          </div>

          {/* Bottom ornament */}
          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center gap-3 mt-12 md:mt-16" aria-hidden="true">
              <span className="w-8 h-px bg-border/30" />
              <span className="font-serif-wedding text-xs text-primary/10 italic">❖</span>
              <span className="w-8 h-px bg-border/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced Lightbox with editorial metadata */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-background/50 hover:text-background transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} strokeWidth={1} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-background/30 hover:text-background/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} strokeWidth={1} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-background/30 hover:text-background/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={28} strokeWidth={1} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="flex flex-col items-center max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  className="max-w-full max-h-[70vh] object-contain"
                />

                {/* Lightbox editorial metadata */}
                <div className="mt-6 text-center">
                  <span className="font-sans-wedding text-[0.5rem] tracking-[0.18em] uppercase text-background/20 block mb-1">
                    {photos[selectedIndex].category} · {photos[selectedIndex].season}
                  </span>
                  <p className="font-serif-wedding text-lg text-background/70">
                    {photos[selectedIndex].title}
                  </p>
                  <p className="font-serif-wedding text-xs italic text-background/30 mt-2 max-w-sm">
                    "{photos[selectedIndex].story}"
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="w-4 h-px bg-background/10" />
                    <span className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-background/20">
                      {photos[selectedIndex].location}
                    </span>
                    <span className="w-4 h-px bg-background/10" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <span className="font-sans-wedding text-[0.6rem] text-background/30 tracking-[0.15em] tabular-nums">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </span>
              <span className="w-4 h-px bg-background/15" />
              <span className="font-script text-xs text-background/15">H&R</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
