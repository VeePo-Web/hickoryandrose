import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    alt: "Couple portrait",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    alt: "Wedding rings",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800",
    alt: "Desert landscape",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800",
    alt: "Couple laughing",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    alt: "Wedding venue",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800",
    alt: "Outdoor ceremony",
    span: "col-span-2 row-span-1",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="font-sans-wedding text-sm tracking-widest uppercase text-wedding-text-light text-center mb-4">
              Some Favorites
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif-wedding text-4xl md:text-5xl text-wedding-text text-center mb-4">
              Moments Together
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-sans-wedding text-wedding-text-light text-center max-w-2xl mx-auto mb-12">
              A few photos from along the way.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(photo.src)}
                  className={`${photo.span} overflow-hidden rounded-lg cursor-pointer group`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.replace("w=800", "w=1600")}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
