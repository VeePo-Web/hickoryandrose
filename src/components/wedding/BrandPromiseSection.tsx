import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import editorialFloralsImage from "@/assets/editorial-florals.jpg";

const pillars = [
  { label: "Calm Leadership", detail: "Quiet confidence under pressure, so you never have to wonder what happens next.", icon: "◆" },
  { label: "Elevated Design", detail: "Cohesive, intentional aesthetics that feel like you — never cookie-cutter.", icon: "◇" },
  { label: "Protected Presence", detail: "Your day, fully felt. We handle the logistics so you can hold the moments.", icon: "○" },
];

const BrandPromiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const floatingImgY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section
      ref={sectionRef}
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden"
    >
      {/* Large decorative "Philosophy" watermark */}
      <motion.div
        className="absolute -right-10 top-1/2 pointer-events-none select-none"
        style={{ y: bgTextY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[12rem] md:text-[18rem] font-light text-foreground leading-none tracking-tight whitespace-nowrap">
          Philosophy
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 md:mb-28">
            {/* Left: Overline + editorial drop-cap quote */}
            <div className="lg:col-span-7">
              {/* Section index */}
              <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-4">
                02
              </span>
              <p className="font-overline text-muted-foreground/50 mb-6">
                Our Philosophy
              </p>
              <p className="font-serif-wedding text-pull-quote text-foreground leading-[1.6] first-letter:font-script first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-primary/60">
                Calm becomes a luxury. We protect what matters most on your wedding
                day: your presence, your peace of mind, and the freedom to fully
                feel every moment as it unfolds around you.
              </p>
            </div>

            {/* Right: Floating editorial image + quote */}
            <div className="lg:col-span-5 lg:pt-8">
              <motion.div style={{ y: floatingImgY }}>
                <ImageReveal direction="right">
                  <div className="aspect-[4/5] overflow-hidden mb-6">
                    <img
                      src={editorialFloralsImage}
                      alt="Sage eucalyptus and ivory garden rose arrangement"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </ImageReveal>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-10 h-px bg-primary/25 mb-4 origin-left"
                />
                <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light italic">
                  "Our approach isn't just about logistics — it's about creating
                  space for you to be fully present on the most important day of
                  your life."
                </p>
                <p className="font-overline text-primary/40 mt-4 text-[0.55rem]">
                  — Founder, Hickory & Rose
                </p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand pillars — editorial ruled rows */}
        <div className="border-t border-border/40">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.label} delay={index * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline py-8 md:py-12 border-b border-border/40 group cursor-default">
                <div className="md:col-span-1">
                  <span className="font-serif-wedding text-3xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-1 flex items-center">
                  <motion.span
                    className="text-primary/20 group-hover:text-primary/40 transition-colors duration-500 text-lg"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    {pillar.icon}
                  </motion.span>
                </div>
                <div className="md:col-span-3 relative">
                  <p className="font-overline text-primary text-[0.6rem] group-hover:tracking-[0.22em] transition-all duration-500">
                    {pillar.label}
                  </p>
                  <motion.div
                    className="h-px bg-primary/30 mt-2 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  />
                </div>
                <div className="md:col-span-7">
                  <p className="font-sans-wedding text-body-sm text-muted-foreground/60 font-light leading-relaxed group-hover:text-muted-foreground transition-colors duration-500">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial manifesto micro-line */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-20 flex items-center justify-center gap-6">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-8 h-px bg-border/40 origin-right hidden md:block"
            />
            <p className="font-serif-wedding text-sm italic text-muted-foreground/40">
              Refined rustic elegance — run with quiet luxury precision.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-8 h-px bg-border/40 origin-left hidden md:block"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
