import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Curtain overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="fixed inset-0 z-[90] bg-foreground origin-top pointer-events-none"
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
