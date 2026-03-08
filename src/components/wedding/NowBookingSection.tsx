import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const marqueeItems = [
  "Now Booking Fall 2025 & 2026 Weddings",
  "✦",
  "Edmonton's Luxury Wedding Planner",
  "✦",
  "Refined Rustic Elegance",
  "✦",
  "Now Booking Fall 2025 & 2026 Weddings",
  "✦",
  "Edmonton's Luxury Wedding Planner",
  "✦",
  "Refined Rustic Elegance",
  "✦",
];

const MarqueeContent = () => (
  <div className="flex items-center gap-8 shrink-0">
    {marqueeItems.map((item, i) => (
      <span
        key={i}
        className={`whitespace-nowrap ${
          item === "✦"
            ? "text-primary-foreground/30 text-xs"
            : "font-serif-wedding text-sm md:text-base text-primary-foreground tracking-wide"
        }`}
      >
        {item}
      </span>
    ))}
  </div>
);

const NowBookingSection = () => {
  return (
    <section className="py-4 md:py-5 bg-primary overflow-hidden" aria-label="Now booking">
      <Link to="/inquire" className="block group">
        <div className="relative flex">
          <motion.div
            className="flex gap-8"
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
