import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = winHeight > 0 ? Math.min(window.scrollY / winHeight, 1) : 0;
      setScrollPercent(pct);
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dashOffset = CIRCUMFERENCE * (1 - scrollPercent);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-primary group transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 relative"
          aria-label="Back to top"
        >
          {/* SVG progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            {/* Background ring */}
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--primary) / 0.15)"
              strokeWidth="1"
            />
            {/* Progress ring */}
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-100 ease-out group-hover:stroke-primary-foreground"
            />
          </svg>

          <ArrowUp
            size={14}
            strokeWidth={1.5}
            className="relative z-10 text-foreground group-hover:text-primary-foreground group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
