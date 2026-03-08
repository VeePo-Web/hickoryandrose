import { motion, useScroll, useSpring } from "framer-motion";
import { memo } from "react";

const gradientStyle = {
  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
};

const ScrollProgress = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{ scaleX, ...gradientStyle }}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
