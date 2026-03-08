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

// Overlay wipe direction mappings (wipe precedes image reveal)
const overlayClip = {
  up: {
    enter: { clipPath: "inset(100% 0 0 0)" },
    full: { clipPath: "inset(0% 0 0 0)" },
    exit: { clipPath: "inset(0 0 100% 0)" },
  },
  left: {
    enter: { clipPath: "inset(0 100% 0 0)" },
    full: { clipPath: "inset(0 0% 0 0)" },
    exit: { clipPath: "inset(0 0 0 100%)" },
  },
  right: {
    enter: { clipPath: "inset(0 0 0 100%)" },
    full: { clipPath: "inset(0 0 0 0%)" },
    exit: { clipPath: "inset(0 100% 0 0)" },
  },
};

const ImageReveal = memo(({ children, className = "", delay = 0, direction = "up" }: ImageRevealProps) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Colored overlay wipe — precedes image reveal */}
      <motion.div
        className="absolute inset-0 z-10 bg-primary/15 pointer-events-none"
        initial={overlayClip[direction].enter}
        whileInView={[
          overlayClip[direction].full,
          overlayClip[direction].exit,
        ]}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.76, 0, 0.24, 1],
          times: [0.5, 1],
        }}
      />

      {/* Image clip-path reveal — slightly delayed after overlay starts */}
      <motion.div
        initial={clipVariants[direction].hidden}
        whileInView={clipVariants[direction].visible}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.8,
          delay: delay + 0.15,
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
