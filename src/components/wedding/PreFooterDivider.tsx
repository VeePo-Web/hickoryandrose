import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import inquireImage from "@/assets/inquire-editorial.jpg";

const PreFooterDivider = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      aria-label="Booking prompt"
    >
      {/* Parallax watermark */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ y: watermarkY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.025 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[14rem] md:text-[22rem] text-foreground leading-none tracking-tight whitespace-nowrap">
          Inquire
        </span>
      </motion.div>

      {/* Decorative script ampersand */}
      <motion.div
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-script text-[16rem] md:text-[22rem] text-foreground leading-none">
          &
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — editorial image inset (desktop only) */}
          <motion.div
            className="lg:col-span-4 hidden lg:block"
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="aspect-[3/4] overflow-hidden relative group">
              <motion.img
                src={inquireImage}
                alt="Elegant wedding stationery detail with florals"
                className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ y: imageY }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-primary/15" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-primary/15" />
            </div>
          </motion.div>

          {/* Right — content */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <ScrollReveal>
              {/* Top ornamental line — scroll-linked */}
              <motion.div
                className="w-24 h-px mx-auto lg:mx-0 mb-10 origin-center lg:origin-left"
                style={{
                  scaleX: lineScale,
                  background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.35), transparent)",
                }}
              />

              {/* Section ornament */}
              <motion.span
                className="font-serif-wedding text-4xl font-light text-primary/8 block mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                ❖
              </motion.span>

              <p className="font-overline text-muted-foreground/35 mb-6">
                Limited Availability
              </p>

              <p className="font-serif-wedding text-display-md text-foreground/70 italic leading-relaxed mb-4">
                Currently accepting a limited number of weddings for 2025 & 2026.
              </p>

              <p className="font-sans-wedding text-body-sm text-muted-foreground/40 font-light mb-4 max-w-md mx-auto lg:mx-0">
                We take on a curated number of couples each season to ensure every
                wedding receives our full attention and care.
              </p>

              {/* Trust signals */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                {["Complimentary Discovery Call", "No Commitment Required"].map((signal, i) => (
                  <span
                    key={signal}
                    className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/25"
                  >
                    {i > 0 && <span className="mr-3">·</span>}
                    {signal}
                  </span>
                ))}
              </div>

              <Link
                to="/inquire"
                className="inline-flex items-center font-overline transition-colors duration-300 group relative"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--gold)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Check Availability
                <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" style={{ WebkitTextFillColor: "hsl(var(--gold))" }}>
                  →
                </span>
              </Link>

              {/* Bottom ornamental line — scroll-linked */}
              <motion.div
                className="w-24 h-px mx-auto lg:mx-0 mt-10 origin-center lg:origin-left"
                style={{
                  scaleX: lineScale,
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                }}
              />

              {/* Bottom attribution */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-script text-lg text-primary/10 mt-8"
              >
                Hickory & Rose
              </motion.p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterDivider;
