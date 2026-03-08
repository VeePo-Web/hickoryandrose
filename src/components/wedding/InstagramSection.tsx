import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import heroImage from "@/assets/hero-wedding.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import editorialImage from "@/assets/editorial-florals.jpg";

const photos = [
  { src: heroImage, alt: "Elegant wedding tablescape" },
  { src: ceremonyImage, alt: "Mountain ceremony setup" },
  { src: detailImage, alt: "Calligraphy place card detail" },
  { src: firstDanceImage, alt: "First dance under lights" },
  { src: bouquetImage, alt: "Bridal bouquet with eucalyptus" },
  { src: editorialImage, alt: "Sage floral arrangement" },
];

const InstagramSection = () => {
  return (
    <section className="bg-background" aria-label="Instagram gallery">
      <ScrollReveal>
        <div className="text-center py-12 md:py-16">
          {/* Decorative header */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-border" />
            <span className="font-script text-xl text-primary/40">H & R</span>
            <span className="w-12 h-px bg-border" />
          </div>
          <a
            href="https://www.instagram.com/hickoryandrose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-overline text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <Instagram
              size={16}
              strokeWidth={1.5}
              className="group-hover:scale-110 transition-transform duration-200"
            />
            Follow Along @hickoryandrose
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-3 md:grid-cols-6">
        {photos.map((photo, index) => (
          <motion.a
            key={index}
            href="https://www.instagram.com/hickoryandrose"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="aspect-square overflow-hidden relative group"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
              <Instagram
                size={20}
                strokeWidth={1.5}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
