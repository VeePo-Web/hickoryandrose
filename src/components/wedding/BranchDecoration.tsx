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
        viewBox="0 0 240 80"
        className="w-48 md:w-64 lg:w-72 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main stem */}
        <motion.path
          d="M120 40 Q80 35, 25 45"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-primary"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.path
          d="M120 40 Q160 35, 215 45"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="text-primary"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />

        {/* Left branches */}
        <path d="M45 42 Q40 28, 30 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />
        <path d="M60 40 Q55 25, 47 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />
        <path d="M78 38 Q74 24, 65 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />
        <path d="M95 37 Q92 26, 85 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />

        {/* Left leaves */}
        <ellipse cx="28" cy="16" rx="3.5" ry="7" fill="currentColor" transform="rotate(-35 28 16)" opacity="0.5" className="text-primary" />
        <ellipse cx="45" cy="13" rx="3.5" ry="7" fill="currentColor" transform="rotate(-25 45 13)" opacity="0.5" className="text-primary" />
        <ellipse cx="63" cy="11" rx="3.5" ry="7" fill="currentColor" transform="rotate(-18 63 11)" opacity="0.5" className="text-primary" />
        <ellipse cx="83" cy="15" rx="3" ry="6" fill="currentColor" transform="rotate(-12 83 15)" opacity="0.45" className="text-primary" />

        {/* Left lower sub-leaves */}
        <ellipse cx="38" cy="48" rx="2.5" ry="5" fill="currentColor" transform="rotate(40 38 48)" opacity="0.3" className="text-primary" />
        <ellipse cx="65" cy="46" rx="2.5" ry="5" fill="currentColor" transform="rotate(30 65 46)" opacity="0.3" className="text-primary" />

        {/* Right branches */}
        <path d="M195 42 Q200 28, 210 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />
        <path d="M180 40 Q185 25, 193 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />
        <path d="M162 38 Q166 24, 175 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />
        <path d="M145 37 Q148 26, 155 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-primary" />

        {/* Right leaves */}
        <ellipse cx="212" cy="16" rx="3.5" ry="7" fill="currentColor" transform="rotate(35 212 16)" opacity="0.5" className="text-primary" />
        <ellipse cx="195" cy="13" rx="3.5" ry="7" fill="currentColor" transform="rotate(25 195 13)" opacity="0.5" className="text-primary" />
        <ellipse cx="177" cy="11" rx="3.5" ry="7" fill="currentColor" transform="rotate(18 177 11)" opacity="0.5" className="text-primary" />
        <ellipse cx="157" cy="15" rx="3" ry="6" fill="currentColor" transform="rotate(12 157 15)" opacity="0.45" className="text-primary" />

        {/* Right lower sub-leaves */}
        <ellipse cx="202" cy="48" rx="2.5" ry="5" fill="currentColor" transform="rotate(-40 202 48)" opacity="0.3" className="text-primary" />
        <ellipse cx="175" cy="46" rx="2.5" ry="5" fill="currentColor" transform="rotate(-30 175 46)" opacity="0.3" className="text-primary" />

        {/* Center berry cluster */}
        <circle cx="120" cy="38" r="2" fill="currentColor" opacity="0.25" className="text-primary" />
        <circle cx="115" cy="35" r="1.5" fill="currentColor" opacity="0.2" className="text-primary" />
        <circle cx="125" cy="35" r="1.5" fill="currentColor" opacity="0.2" className="text-primary" />
      </svg>
    </motion.div>
  );
};

export default BranchDecoration;
