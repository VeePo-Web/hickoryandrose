import { motion } from "framer-motion";
import { memo } from "react";

interface BreathingDiamondProps {
  /** Size of the diamond in px */
  size?: number;
  /** Extra Tailwind classes on the wrapper */
  className?: string;
}

/**
 * Breathing diamond ornament with ambient gold glow halo.
 * Used as a visual separator / accent across editorial sections.
 */
const BreathingDiamond = memo(({ size = 10, className = "" }: BreathingDiamondProps) => (
  <div className={`relative inline-flex items-center justify-center ${className}`} aria-hidden="true">
    {/* Glow halo */}
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size * 5,
        height: size * 5,
        background: "radial-gradient(circle, hsl(var(--gold) / 0.1), transparent 70%)",
      }}
      animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.85, 1.15, 0.85] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Diamond */}
    <motion.span
      className="block rotate-45"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, hsl(var(--gold) / 0.45), hsl(var(--gold) / 0.15))",
      }}
      animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
));

BreathingDiamond.displayName = "BreathingDiamond";
export default BreathingDiamond;
