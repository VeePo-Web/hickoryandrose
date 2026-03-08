import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = winHeight > 0 ? Math.round((window.scrollY / winHeight) * 100) : 0;
      setScrollPercent(pct);
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 border border-primary/30 bg-background/80 hover:bg-primary hover:border-primary text-foreground hover:text-primary-foreground flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 group gap-0.5"
          aria-label="Back to top"
        >
          <ArrowUp size={12} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          <span className="font-sans-wedding text-[0.45rem] tracking-[0.1em] uppercase opacity-50 group-hover:opacity-100 transition-opacity select-none tabular-nums">
            {scrollPercent}%
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
