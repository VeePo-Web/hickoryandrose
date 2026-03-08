import { motion, useScroll, useSpring } from "framer-motion";
import { memo } from "react";

const ScrollProgress = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Primary progress line — gold gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, hsl(var(--sage-deep)), hsl(var(--gold)), hsl(var(--sage-deep)))",
        }}
      />
      {/* Soft glow underneath */}
      <motion.div
        className="fixed top-[1px] left-0 right-0 h-[4px] z-[59] origin-left opacity-20 blur-[2px]"
        style={{
          scaleX,
          background: "linear-gradient(90deg, hsl(var(--sage-deep)), hsl(var(--gold)), hsl(var(--sage-deep)))",
        }}
      />
    </>
  );
});

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
