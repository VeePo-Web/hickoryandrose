import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Split-curtain wipe — top half slides up, bottom slides down */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
        className="fixed inset-0 z-[91] bg-foreground origin-top pointer-events-none"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="fixed inset-0 z-[90] bg-sage-deep origin-bottom pointer-events-none"
      />

      {/* Brand monogram centered during curtain */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.25, delay: 0.05 }}
        className="fixed inset-0 z-[92] flex items-center justify-center pointer-events-none"
      >
        <div className="text-center">
          <span className="font-serif-wedding text-lg text-primary-foreground/50 tracking-[0.15em]">
            H
          </span>
          <span className="font-script text-2xl text-primary-foreground/30 mx-1">
            &
          </span>
          <span className="font-script text-2xl text-primary-foreground/50">
            R
          </span>
        </div>
      </motion.div>

      {/* Gold accent line that reveals with the content */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="fixed top-0 left-0 right-0 h-px z-[89] origin-left pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
