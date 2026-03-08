import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NowBookingSection = () => {
  return (
    <section className="relative py-6 md:py-8 bg-primary overflow-hidden" aria-label="Now booking">
      {/* Top & bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

      <Link to="/inquire" className="block group" aria-label="Inquire about booking">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="flex items-center justify-between gap-8">
            {/* Left accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden md:block flex-1 h-px bg-primary-foreground/15 origin-left"
            />

            {/* Central content */}
            <div className="flex items-center gap-6 md:gap-10 shrink-0">
              <span className="font-overline text-primary-foreground/50 hidden sm:inline">
                2025 & 2026
              </span>
              <span className="font-serif-wedding text-lg md:text-xl text-primary-foreground tracking-tight group-hover:tracking-wide transition-all duration-500">
                Now Accepting Inquiries
              </span>
              <span className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-primary-foreground/50 group-hover:text-primary-foreground/80 transition-colors duration-300 hidden sm:inline-flex items-center gap-2">
                Learn More
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </div>

            {/* Right accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden md:block flex-1 h-px bg-primary-foreground/15 origin-right"
            />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NowBookingSection;
