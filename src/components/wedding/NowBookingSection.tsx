import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NowBookingSection = () => {
  return (
    <section className="relative py-10 md:py-14 bg-primary overflow-hidden" aria-label="Now booking">
      {/* Top & bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

      {/* Large decorative year watermark */}
      <motion.div
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="font-serif-wedding text-[8rem] md:text-[12rem] font-light text-primary-foreground leading-none">
          26
        </span>
      </motion.div>

      <Link to="/inquire" className="block group relative" aria-label="Inquire about booking">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
            {/* Left: Overline + dates with pulsing dot */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2.5 mb-1">
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
              <p className="font-sans-wedding text-[0.55rem] text-primary-foreground/20 font-light mt-1">
                Limited availability remaining
              </p>
            </div>

            {/* Center: Main headline */}
            <div className="md:col-span-6 text-center">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-8 h-px bg-primary-foreground/15 mx-auto mb-4 origin-center hidden md:block"
              />
              <h2 className="font-serif-wedding text-2xl md:text-3xl text-primary-foreground tracking-tight group-hover:tracking-wide transition-all duration-700 leading-tight">
                Now Accepting Inquiries
              </h2>
              <p className="font-serif-wedding text-xs italic text-primary-foreground/25 mt-2 hidden md:block">
                Complimentary discovery call · No commitment required
              </p>
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
                <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NowBookingSection;
