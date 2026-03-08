import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { memo } from "react";

const CursorFollower = memo(() => {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const isTouchDevice = useRef(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Don't mount on touch devices at all
    if (window.matchMedia("(pointer: coarse)").matches) {
      isTouchDevice.current = true;
      return;
    }

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor-hover]");
      const interactive = target.closest("a, button, [role='button'], input, textarea, select");

      if (cursorEl) {
        setIsHovering(true);
        setCursorLabel(cursorEl.getAttribute("data-cursor-label") || "");
      } else if (interactive) {
        setIsHovering(true);
        setCursorLabel("");
      } else {
        setIsHovering(false);
        setCursorLabel("");
      }
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

  // Don't render anything on touch devices or when not visible
  if (isTouchDevice.current || !visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference will-change-transform"
      style={{ x, y }}
    >
      <motion.div
        animate={{
          width: isHovering ? (cursorLabel ? 64 : 48) : 8,
          height: isHovering ? (cursorLabel ? 64 : 48) : 8,
          opacity: isHovering ? 0.25 : 0.5,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {cursorLabel && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-primary-foreground font-medium"
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>
      <motion.div
        animate={{
          width: isHovering ? (cursorLabel ? 72 : 56) : 8,
          height: isHovering ? (cursorLabel ? 72 : 56) : 8,
          opacity: isHovering ? 0.12 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-0 left-0 rounded-full border border-primary -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
};

export default CursorFollower;
