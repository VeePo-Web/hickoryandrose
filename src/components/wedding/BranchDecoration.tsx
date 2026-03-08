import { motion } from "framer-motion";

interface BranchDecorationProps {
  className?: string;
  flip?: boolean;
}

const BranchDecoration = ({ className = "", flip = false }: BranchDecorationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.15 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`pointer-events-none select-none ${flip ? "scale-x-[-1]" : ""} ${className}`}
      aria-hidden="true"
    >
    <svg
      viewBox="0 0 200 60"
      className="w-48 md:w-64 h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left branch */}
      <path
        d="M100 30 Q60 25, 20 35 M40 32 Q35 20, 25 15 M55 30 Q50 18, 42 12 M70 28 Q68 16, 60 8"
        stroke="hsl(var(--wedding-sage))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left leaves */}
      <ellipse cx="22" cy="14" rx="4" ry="8" fill="hsl(var(--wedding-sage))" transform="rotate(-30 22 14)" opacity="0.8" />
      <ellipse cx="40" cy="10" rx="4" ry="8" fill="hsl(var(--wedding-sage))" transform="rotate(-20 40 10)" opacity="0.8" />
      <ellipse cx="58" cy="6" rx="4" ry="8" fill="hsl(var(--wedding-sage))" transform="rotate(-15 58 6)" opacity="0.8" />
      
      {/* Right branch */}
      <path
        d="M100 30 Q140 25, 180 35 M160 32 Q165 20, 175 15 M145 30 Q150 18, 158 12 M130 28 Q132 16, 140 8"
        stroke="hsl(var(--wedding-sage))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right leaves */}
      <ellipse cx="178" cy="14" rx="4" ry="8" fill="hsl(var(--wedding-sage))" transform="rotate(30 178 14)" opacity="0.8" />
      <ellipse cx="160" cy="10" rx="4" ry="8" fill="hsl(var(--wedding-sage))" transform="rotate(20 160 10)" opacity="0.8" />
      <ellipse cx="142" cy="6" rx="4" ry="8" fill="hsl(var(--wedding-sage))" transform="rotate(15 142 6)" opacity="0.8" />
    </svg>
  );
};

export default BranchDecoration;
