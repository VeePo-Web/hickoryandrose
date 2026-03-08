import { useEffect, useState, useRef } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { memo } from "react";

const CursorFollower = memo(() => {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const isTouchDevice = useRef(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Outer ring — slightly lagged for organic feel
  const outerSpring = { damping: 20, stiffness: 200, mass: 0.8 };
  const outerX = useSpring(0, outerSpring);
  const outerY = useSpring(0, outerSpring);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      isTouchDevice.current = true;
      return;
    }

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      outerX.set(e.clientX);
      outerY.set(e.clientY);
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
  }, [x, y, outerX, outerY, visible]);

  if (isTouchDevice.current || !visible) return null;

  return (
    <>
      {/* Inner dot */}
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
          <AnimatePresence>
            {cursorLabel && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-primary-foreground font-medium"
              >
                {cursorLabel}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Outer gold accent ring — slightly lagged */}
      <motion.div
        className="fixed top-0 left-0 z-[998] pointer-events-none will-change-transform"
        style={{ x: outerX, y: outerY }}
      >
        <motion.div
          animate={{
            width: isHovering ? (cursorLabel ? 80 : 60) : 24,
            height: isHovering ? (cursorLabel ? 80 : 60) : 24,
            opacity: isHovering ? 0.15 : 0.08,
            borderColor: isHovering
              ? "hsl(var(--gold) / 0.4)"
              : "hsl(var(--gold) / 0.15)",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-full border -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
});

CursorFollower.displayName = "CursorFollower";

export default CursorFollower;
