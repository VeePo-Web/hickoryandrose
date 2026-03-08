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
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center bg-foreground/90 backdrop-blur-sm hover:bg-primary group transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 relative"
          aria-label="Back to top"
        >
          {/* SVG progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
            aria-hidden="true"
          >
            <circle
              cx="22"
              cy="22"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--background) / 0.08)"
              strokeWidth="1"
            />
            <circle
              cx="22"
              cy="22"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--gold))"
              strokeWidth="1.5"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-100 ease-out"
            />
          </svg>

          <ArrowUp
            size={13}
            strokeWidth={1.5}
            className="relative z-10 text-background/70 group-hover:text-primary-foreground group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
