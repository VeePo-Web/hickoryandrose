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
    span: "col-span-2 row-span-2",
  },
  {
    src: detailImage,
    alt: "Elegant calligraphy place card with gold cutlery on fine linen",
    span: "col-span-1 row-span-1",
  },
  {
    src: editorialImage,
    alt: "Sage eucalyptus and ivory garden rose floral arrangement detail",
    span: "col-span-1 row-span-1",
  },
  {
    src: ceremonyImage,
    alt: "Outdoor ceremony with mountain backdrop and floral arch",
    span: "col-span-1 row-span-1",
  },
  {
    src: firstDanceImage,
    alt: "Couple's first dance under string lights at outdoor reception",
    span: "col-span-1 row-span-1",
  },
  {
    src: venueImage,
    alt: "Rustic barn venue at twilight with warm string lights and mountain backdrop",
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
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground text-center mb-4">
              Some Favorites
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif-wedding text-display-lg text-foreground text-center mb-4">
              Moments Together
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-sans-wedding text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              A few photos from along the way.
            </p>
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
                  className="w-full h-full overflow-hidden cursor-pointer group block"
                  data-cursor-hover data-cursor-label="View"
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
                </button>
              </ImageReveal>
            ))}
          </div>
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
              <motion.img
                key={selectedIndex}
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="max-w-full max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
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
