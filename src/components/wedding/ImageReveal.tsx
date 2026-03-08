import { motion } from "framer-motion";
import { ReactNode } from "react";

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

const ImageReveal = ({ children, className = "", delay = 0, direction = "up" }: ImageRevealProps) => {
  return (
    <motion.div
      initial={clipVariants[direction].hidden}
      whileInView={clipVariants[direction].visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ImageReveal;
