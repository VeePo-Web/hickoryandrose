import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const seasonDetails = [
  { label: "Spring", status: "Limited" },
  { label: "Summer", status: "2 Dates Left" },
  { label: "Autumn", status: "Accepting" },
  { label: "Winter", status: "Open" },
];

const NowBookingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-primary overflow-hidden"
      aria-label="Now booking"
    >
      {/* Top & bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

      {/* Parallax year watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none pr-8 md:pr-16"
        style={{ x: watermarkX }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-[8rem] md:text-[14rem] font-light text-primary-foreground/[0.03] leading-none tracking-tight">
          2026
        </span>
      </motion.div>

      <Link to="/inquire" className="block group relative" aria-label="Inquire about booking">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left: Status indicator + dates */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground/30" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground/50" />
                </span>
                <p className="font-overline text-primary-foreground/35 text-[0.55rem]">
                  Currently Booking
                </p>
              </div>
              <p className="font-serif-wedding text-xl md:text-2xl text-primary-foreground/70 font-light tracking-tight">
                2025 <span className="opacity-30">·</span> 2026
              </p>
            </div>

            {/* Center: Main headline + season availability */}
            <div className="md:col-span-6 text-center">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-8 h-px bg-primary-foreground/15 mx-auto mb-4 origin-center hidden md:block"
              />
              <h2 className="font-serif-wedding text-2xl md:text-3xl text-primary-foreground tracking-tight group-hover:tracking-wide transition-all duration-700 leading-tight mb-3">
                Now Accepting Inquiries
              </h2>

              {/* Season availability grid */}
              <div className="hidden md:flex items-center justify-center gap-6 mt-4">
                {seasonDetails.map((season, i) => (
                  <motion.div
                    key={season.label}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="text-center"
                  >
                    <p className="font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-primary-foreground/25 mb-0.5">
                      {season.label}
                    </p>
                    <p className="font-serif-wedding text-[0.65rem] italic text-primary-foreground/40">
                      {season.status}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="w-8 h-px bg-primary-foreground/15 mx-auto mt-4 origin-center hidden md:block"
              />
            </div>

            {/* Right: CTA hint */}
            <div className="md:col-span-3 md:text-right">
              <span className="font-sans-wedding text-[0.6875rem] tracking-[0.2em] uppercase text-primary-foreground/35 group-hover:text-primary-foreground/70 transition-colors duration-300 inline-flex items-center gap-2">
                Begin Your Story
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
              <p className="font-serif-wedding text-xs italic text-primary-foreground/20 mt-1.5 hidden md:block">
                Complimentary discovery call
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NowBookingSection;
