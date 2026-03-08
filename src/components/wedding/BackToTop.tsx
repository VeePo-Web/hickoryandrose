import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
          className="fixed bottom-6 right-6 z-50 w-12 h-12 border border-primary/30 bg-background/80 hover:bg-primary hover:border-primary text-foreground hover:text-primary-foreground flex items-center justify-center backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 group"
          aria-label="Back to top"
        >
          <span className="font-overline text-[0.5rem] group-hover:-translate-y-0.5 transition-transform duration-200 select-none">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
