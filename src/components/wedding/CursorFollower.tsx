import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]");
      setIsHovering(!!interactive);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference"
      style={{ x, y }}
    >
      {/* Inner dot */}
      <motion.div
        animate={{
          width: isHovering ? 48 : 8,
          height: isHovering ? 48 : 8,
          opacity: isHovering ? 0.25 : 0.5,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"
      />
      {/* Outer ring — appears on hover */}
      <motion.div
        animate={{
          width: isHovering ? 56 : 8,
          height: isHovering ? 56 : 8,
          opacity: isHovering ? 0.12 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-0 left-0 rounded-full border border-primary -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
};

export default CursorFollower;
