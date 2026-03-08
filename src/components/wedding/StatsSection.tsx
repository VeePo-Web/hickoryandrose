import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 75, suffix: "+", label: "Weddings Planned" },
  { value: 7, suffix: "", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Five-Star Reviews" },
  { value: 15, suffix: "-20", label: "Weddings Per Year" },
];

const AnimatedCounter = ({
  target,
  suffix,
  duration = 2,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section
      className="py-section-mobile md:py-section-tablet bg-foreground relative overflow-hidden"
      aria-label="Our impact"
    >
      {/* Subtle radial accent */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-overline text-background/30 mb-4">
              By the Numbers
            </p>
            <div className="w-10 h-px bg-background/15 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`text-center relative ${
                index < stats.length - 1
                  ? "md:border-r md:border-background/10"
                  : ""
              }`}
            >
              <p className="font-serif-wedding text-display-xl text-background mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="font-overline text-background/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom flourish */}
        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-3 mt-14 md:mt-20">
            <span className="w-8 h-px bg-background/15" />
            <span className="font-script text-lg text-background/20">H & R</span>
            <span className="w-8 h-px bg-background/15" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
