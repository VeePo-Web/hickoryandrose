import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Curtain overlay with brand accent line */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="fixed inset-0 z-[90] bg-foreground origin-top pointer-events-none"
      >
        {/* Brand monogram centered during transition */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="font-script text-2xl text-primary-foreground/40">
            H & R
          </span>
        </motion.div>
      </motion.div>

      {/* Gold accent line that reveals with the content */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="fixed top-0 left-0 right-0 h-px z-[89] origin-left pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
