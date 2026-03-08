import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import heroImage from "@/assets/hero-wedding.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import firstDanceImage from "@/assets/first-dance.jpg";
import bouquetImage from "@/assets/portfolio-bouquet.jpg";
import editorialImage from "@/assets/editorial-florals.jpg";

const photos = [
  { src: heroImage, alt: "Elegant wedding tablescape", caption: "The tablescape that started it all", span: "col-span-2 row-span-2" },
  { src: ceremonyImage, alt: "Mountain ceremony setup", caption: "Jasper morning light", span: "col-span-1 row-span-1" },
  { src: detailImage, alt: "Calligraphy place card detail", caption: "Every name, hand-lettered", span: "col-span-1 row-span-1" },
  { src: firstDanceImage, alt: "First dance under lights", caption: "That first dance feeling", span: "col-span-1 row-span-2" },
  { src: bouquetImage, alt: "Bridal bouquet with eucalyptus", caption: "Sage & garden roses", span: "col-span-1 row-span-1" },
  { src: editorialImage, alt: "Sage floral arrangement", caption: "Detail is everything", span: "col-span-1 row-span-1" },
];

const InstagramSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="bg-card py-section-mobile md:py-section-tablet relative overflow-hidden"
      aria-label="Instagram gallery"
    >
      {/* Parallax watermark */}
      <motion.div
        className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ y: watermarkY }}
        aria-hidden="true"
      >
        <span className="font-script text-[6rem] md:text-[10rem] text-foreground/[0.015] leading-none rotate-90 inline-block">
          Follow
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              {/* Section index + label */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif-wedding text-sm text-primary/20 font-light">09</span>
                <span className="w-8 h-px bg-primary/15" />
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/40 tracking-[0.2em]">
                  Follow Along
                </p>
              </div>
              <a
                href="https://www.instagram.com/hickoryandrose"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif-wedding text-display-md text-foreground hover:text-primary transition-colors duration-300 group inline-flex items-baseline gap-3"
              >
                @hickoryandrose
                <Instagram
                  size={18}
                  strokeWidth={1.5}
                  className="text-muted-foreground/30 group-hover:text-primary transition-colors duration-300"
                />
              </a>
            </div>
            <div className="md:text-right">
              <p className="font-sans-wedding text-body-sm text-muted-foreground font-light max-w-xs leading-relaxed">
                Behind the scenes, real weddings, and the details that make it all come together.
              </p>
              <span className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/25 mt-2 inline-block">
                Updated weekly
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] gap-2 md:gap-3">
          {photos.map((photo, index) => (
            <ImageReveal
              key={index}
              delay={index * 0.06}
              direction={index % 2 === 0 ? "up" : "left"}
              className={photo.span}
            >
              <a
                href="https://www.instagram.com/hickoryandrose"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full overflow-hidden relative group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Editorial hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 md:p-4">
                  <p className="font-serif-wedding text-xs md:text-sm text-white/80 italic leading-snug">
                    {photo.caption}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Instagram size={10} strokeWidth={1.5} className="text-white/40" />
                    <span className="font-sans-wedding text-[0.5rem] tracking-[0.1em] uppercase text-white/40">
                      View on Instagram
                    </span>
                  </div>
                </div>
              </a>
            </ImageReveal>
          ))}
        </div>

        {/* Bottom hashtag attribution */}
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-4 mt-10 md:mt-14">
            <span className="w-10 h-px bg-border/30" />
            <p className="font-sans-wedding text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground/25">
              #HickoryAndRose · #RefinedRusticElegance
            </p>
            <span className="w-10 h-px bg-border/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstagramSection;
