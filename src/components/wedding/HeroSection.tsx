import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleRSVP = () => {
    navigate("/rsvp");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070')`,
        }}
      >
        {/* Sage Overlay */}
        <div className="absolute inset-0 bg-wedding-sage/60" />
      </div>

      {/* Navigation */}
      <Navigation variant="overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-sans-wedding text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-white/80">
            Together with our families
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight"
        >
          Alicia & Andres
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-2 md:gap-4"
        >
          <p className="font-serif-wedding text-xl md:text-2xl tracking-wide">
            February 15, 2025
          </p>
          <span className="hidden md:inline text-white/60">|</span>
          <p className="font-serif-wedding text-xl md:text-2xl tracking-wide">
            Joshua Tree, California
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <button
            onClick={handleRSVP}
            className="inline-block border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-sans-wedding text-sm tracking-widest uppercase px-8 py-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            RSVP Now
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
