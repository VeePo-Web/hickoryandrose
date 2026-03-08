import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    span: "col-span-2 row-span-2",
  },
  {
    src: detailImage,
    alt: "Elegant calligraphy place card with gold cutlery on fine linen",
    title: "Calligraphy Details",
    location: "The Glass House",
    span: "col-span-1 row-span-1",
  },
  {
    src: editorialImage,
    alt: "Sage eucalyptus and ivory garden rose floral arrangement detail",
    title: "Sage & Ivory Florals",
    location: "Art Gallery of Alberta",
    span: "col-span-1 row-span-1",
  },
  {
    src: ceremonyImage,
    alt: "Outdoor ceremony with mountain backdrop and floral arch",
    title: "Mountain Ceremony",
    location: "Jasper Park Lodge",
    span: "col-span-1 row-span-1",
  },
  {
    src: firstDanceImage,
    alt: "Couple's first dance under string lights at outdoor reception",
    title: "First Dance",
    location: "Devonian Botanic Garden",
    span: "col-span-1 row-span-1",
  },
  {
    src: venueImage,
    alt: "Rustic barn venue at twilight with warm string lights and mountain backdrop",
    title: "Twilight Barn Reception",
    location: "Canadian Rockies",
    span: "col-span-2 row-span-1",
  },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, navigate]);

  return (
    <>
      <section className="bg-background py-20 md:py-32 relative overflow-hidden">
        {/* Decorative background index */}
        <motion.div
          className="absolute -right-4 top-12 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          aria-hidden="true"
        >
          <span className="font-serif-wedding text-[10rem] md:text-[16rem] font-light text-foreground/[0.015] leading-none">
            Gallery
          </span>
        </motion.div>

        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6 max-w-5xl mx-auto">
              <div>
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/40 mb-3">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-px bg-border" />
                    Some Favorites
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-lg text-foreground">
                  Moments Together
                </h2>
              </div>
              <p className="font-sans-wedding text-body-sm text-muted-foreground font-light max-w-xs md:text-right leading-relaxed">
                A curated collection of details, emotions, and the quiet beauty we help bring to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {photos.map((photo, index) => (
              <ImageReveal
                key={index}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "up" : "left"}
                className={photo.span}
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
                  {/* Editorial hover caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-5">
                    <p className="font-serif-wedding text-sm md:text-base text-white/90 leading-tight">
                      {photo.title}
                    </p>
                    <p className="font-sans-wedding text-[0.6rem] tracking-[0.12em] uppercase text-white/40 mt-1">
                      {photo.location}
                    </p>
                  </div>
                  {/* Index number */}
                  <span className="absolute top-3 left-3 font-serif-wedding text-xs text-white/0 group-hover:text-white/40 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              </ImageReveal>
            ))}
          </div>

          {/* Bottom rule */}
          <ScrollReveal delay={0.3}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-16 h-px bg-border mx-auto mt-12 md:mt-16 origin-center"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-background/60 hover:text-background transition-colors"
              aria-label="Close lightbox"
            >
              <X size={28} strokeWidth={1} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-background/40 hover:text-background transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-background/40 hover:text-background transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  className="max-w-full max-h-[75vh] object-contain"
                />
                <div className="mt-6 text-center">
                  <p className="font-serif-wedding text-lg text-background/70">
                    {photos[selectedIndex].title}
                  </p>
                  <p className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-background/30 mt-1">
                    {photos[selectedIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans-wedding text-xs text-background/40 tracking-widest">
              {selectedIndex + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
