import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const marqueeItems = [
  "Now Booking Fall 2025 & 2026 Weddings",
  "Edmonton's Luxury Wedding Planner",
  "Refined Rustic Elegance",
  "Now Booking Fall 2025 & 2026 Weddings",
  "Edmonton's Luxury Wedding Planner",
  "Refined Rustic Elegance",
];

const MarqueeContent = () => (
  <div className="flex items-center gap-12 md:gap-16 shrink-0">
    {marqueeItems.map((item, i) => (
      <span
        key={i}
        className="whitespace-nowrap font-sans-wedding text-[0.6875rem] md:text-[0.8125rem] font-light text-primary-foreground tracking-[0.15em] uppercase"
      >
        {item}
      </span>
    ))}
  </div>
);

const NowBookingSection = () => {
  return (
    <section className="relative py-4 md:py-5 bg-primary overflow-hidden" aria-label="Now booking">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

      <Link to="/inquire" className="block group">
        <div className="relative flex">
          <motion.div
            className="flex gap-12 md:gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            <MarqueeContent />
            <MarqueeContent />
          </motion.div>
        </div>
      </Link>
    </section>
  );
};

export default NowBookingSection;
