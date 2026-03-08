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
      {/* Decorative background monogram */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-script text-[16rem] md:text-[24rem] text-background/[0.02] select-none leading-none" aria-hidden="true">
          H&R
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="font-sans-wedding text-label uppercase text-background/25 tracking-[0.2em] mb-4">
              <span className="inline-flex items-center gap-3">
                <span className="w-5 h-px bg-background/15" />
                By the Numbers
                <span className="w-5 h-px bg-background/15" />
              </span>
            </p>
            <h2 className="font-serif-wedding text-display-md text-background/60 font-light">
              The Story So Far
            </h2>
          </div>
        </ScrollReveal>

        {/* 2x2 grid with ruled dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2">
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
              className={`py-12 md:py-16 px-4 md:px-8 group ${
                index >= 2 ? "border-t border-background/8" : ""
              } ${
                index % 2 === 1 ? "md:border-l md:border-background/8" : ""
              }`}
            >
              <p className="font-serif-wedding text-7xl md:text-8xl font-light text-background/90 mb-3 leading-none tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <div className="flex items-center gap-3 mb-2">
                <motion.span
                  className="w-6 h-px bg-primary/50 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                />
                <p className="font-sans-wedding text-label uppercase text-background/40">{stat.label}</p>
              </div>
              <p className="font-sans-wedding text-xs text-background/20 font-light italic pl-9">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-16 h-px bg-background/10 mx-auto mt-12 md:mt-16 origin-center"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
