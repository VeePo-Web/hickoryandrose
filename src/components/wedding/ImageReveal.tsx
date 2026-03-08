import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, memo } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const clipVariants = {
  up: {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0% 0 0 0)" },
  },
  left: {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0% 0 0)" },
  },
  right: {
    hidden: { clipPath: "inset(0 0 0 100%)" },
    visible: { clipPath: "inset(0 0 0 0%)" },
  },
};

const ImageReveal = memo(({ children, className = "", delay = 0, direction = "up" }: ImageRevealProps) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Image clip-path reveal */}
      <motion.div
        initial={clipVariants[direction].hidden}
        whileInView={clipVariants[direction].visible}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
});

ImageReveal.displayName = "ImageReveal";

export default ImageReveal;
