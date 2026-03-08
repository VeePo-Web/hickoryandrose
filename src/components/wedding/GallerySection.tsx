import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    alt: "Intimate couple portrait in golden light with natural greenery",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    alt: "Elegant wedding rings on a bed of ivory petals",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800",
    alt: "Sweeping landscape with soft desert tones at sunset",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800",
    alt: "Joyful couple sharing a laugh during their portrait session",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    alt: "Rustic wedding venue draped in warm string lights at dusk",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800",
    alt: "Outdoor ceremony framed by mountain views and wildflowers",
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

  // Keyboard navigation
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
                  data-cursor-hover
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </button>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with motion */}
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

            {/* Prev / Next */}
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
                src={photos[selectedIndex].src.replace("w=800", "w=1600")}
                alt={photos[selectedIndex].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="max-w-full max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Counter */}
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
