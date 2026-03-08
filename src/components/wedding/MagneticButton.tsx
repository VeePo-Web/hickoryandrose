import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MagneticButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  className?: string;
}

const MagneticButton = ({ to, children, variant = "primary", className = "" }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
    outline:
      "border border-border text-foreground hover:border-primary hover:text-primary",
    "outline-light":
      "border border-white/50 text-white hover:border-white hover:bg-white/10",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.2 }}
      className="inline-block group/btn"
    >
      <Link
        to={to}
        className={`relative inline-flex items-center font-sans-wedding text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 overflow-hidden group-hover/btn:tracking-[0.25em] ${variants[variant]} ${className}`}
      >
        {/* Hover underline reveal */}
        <span className="absolute bottom-3 left-10 right-10 h-px bg-current origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-out opacity-30" />
        {children}
      </Link>
    </motion.div>
  );
};

export default MagneticButton;
