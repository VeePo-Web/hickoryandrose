import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, memo } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  /** "fade" (default) uses translate+opacity. "clip" uses a cinematic clip-path mask wipe. */
  variant?: "fade" | "clip";
}

const directionOffset = {
  up: { y: 20, x: 0 },
  down: { y: -20, x: 0 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
};

const clipDirectionMap = {
  up: { hidden: "inset(100% 0 0 0)", visible: "inset(0% 0 0 0)" },
  down: { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0% 0)" },
  left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0% 0 0)" },
  right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0%)" },
};

const ScrollReveal = memo(({ children, delay = 0, className = "", direction = "up", variant = "fade" }: ScrollRevealProps) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  if (variant === "clip") {
    const clip = clipDirectionMap[direction];
    return (
      <motion.div
        initial={{ clipPath: clip.hidden, opacity: 0.3 }}
        whileInView={{ clipPath: clip.visible, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
