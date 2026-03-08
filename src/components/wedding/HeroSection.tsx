import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./Navigation";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  useEffect(() => {
    document.title = "Hickory & Rose | Edmonton's Luxury Wedding Planner";
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Background Image with Ken Burns zoom */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Elegant wedding tablescape with sage green and ivory florals at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Warm overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <Navigation variant="overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="font-sans-wedding text-label uppercase text-white/70 mb-6"
        >
          Edmonton's Luxury Wedding Planner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="font-serif-wedding text-display-xl font-light max-w-4xl mb-6 leading-tight"
        >
          Your wedding day,{" "}
          <em className="font-light">effortlessly beautiful.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="font-sans-wedding text-base md:text-lg text-white/80 max-w-xl mb-10 leading-relaxed"
        >
          Refined planning. Calm leadership. Every detail, intentional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Link
            to="/inquire"
            className="inline-flex items-center border border-white/50 hover:border-white hover:bg-white/10 text-white font-sans-wedding text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Begin Your Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer z-10 hover:opacity-100 transition-opacity"
        aria-label="Scroll to content"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
