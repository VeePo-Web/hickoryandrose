import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 75, suffix: "+", label: "Weddings Planned", detail: "and counting" },
  { value: 7, suffix: "", label: "Years of Experience", detail: "since 2018" },
  { value: 100, suffix: "%", label: "Five-Star Reviews", detail: "every single one" },
  { value: 15, suffix: "–20", label: "Weddings Per Year", detail: "intentionally limited" },
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
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <p className="font-overline text-background/25 mb-16 md:mb-24 text-center">
            By the Numbers
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 gap-x-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group"
            >
              <p className="font-serif-wedding text-7xl md:text-8xl font-light text-background/90 mb-3 leading-none tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-primary/50" />
                <p className="font-overline text-background/40">{stat.label}</p>
              </div>
              <p className="font-sans-wedding text-xs text-background/20 mt-2 font-light italic">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand signature */}
        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-3 mt-20 md:mt-28">
            <span className="w-8 h-px bg-background/10" />
            <span className="font-script text-xl text-background/15">
              H & R
            </span>
            <span className="w-8 h-px bg-background/10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
