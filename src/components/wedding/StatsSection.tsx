import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 75, suffix: "+", label: "Weddings Planned", detail: "and counting" },
  { value: 7, suffix: "", label: "Years of Experience", detail: "since 2018" },
  { value: 100, suffix: "%", label: "Five-Star Reviews", detail: "every single one" },
  { value: 15, suffix: "–20", label: "Weddings Per Year", detail: "intentionally limited" },
];

/* Eased counter with deceleration curve */
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const AnimatedCounter = ({
  target,
  suffix,
  duration = 2.4,
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
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const monogramY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const verticalRuleHeight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="py-section-mobile md:py-section-tablet bg-foreground relative overflow-hidden"
      aria-label="Our impact"
    >
      {/* Parallax monogram */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ y: monogramY }}
      >
        <span className="font-script text-[14rem] md:text-[22rem] text-background/[0.02] select-none leading-none" aria-hidden="true">
          &
        </span>
      </motion.div>

      {/* Vertical center rule — cinematic divider */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-background/[0.06] to-transparent hidden md:block pointer-events-none"
        style={{ height: verticalRuleHeight }}
        aria-hidden="true"
      />

      {/* Section index watermark */}
      <motion.div
        className="absolute top-8 left-8 md:left-16 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-7xl md:text-8xl font-light text-background/[0.03]">
          07
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end mb-16 md:mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-5 h-px bg-background/15" />
                <p className="font-sans-wedding text-label uppercase text-background/25 tracking-[0.2em]">
                  By the Numbers
                </p>
              </div>
              <h2 className="font-serif-wedding text-display-md text-background/60 font-light">
                The Story So Far
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-sans-wedding text-body-sm text-background/25 font-light leading-relaxed max-w-sm md:ml-auto">
                Every number here represents a couple who trusted us with their most important day — and walked away grateful they did.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2x2 grid with hover states */}
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
              className={`py-12 md:py-16 px-4 md:px-8 group cursor-default hover:bg-background/[0.02] transition-colors duration-700 ${
                index >= 2 ? "border-t border-background/[0.06]" : ""
              } ${
                index % 2 === 1 ? "md:border-l md:border-background/[0.06]" : ""
              }`}
            >
              {/* Index */}
              <span className="font-serif-wedding text-xs text-background/10 block mb-4 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="font-serif-wedding text-7xl md:text-8xl font-light text-background/90 mb-4 leading-none tracking-tight group-hover:text-background transition-colors duration-500">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <div className="flex items-center gap-3 mb-2">
                <motion.span
                  className="w-6 h-px bg-primary/40 origin-left group-hover:w-10 transition-all duration-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                />
                <p className="font-sans-wedding text-label uppercase text-background/40 group-hover:text-background/60 transition-colors duration-500">
                  {stat.label}
                </p>
              </div>
              <p className="font-sans-wedding text-xs text-background/20 font-light italic pl-9 group-hover:text-background/30 transition-colors duration-500">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-4 mt-14 md:mt-20" aria-hidden="true">
            <span className="w-10 h-px bg-background/[0.06]" />
            <p className="font-serif-wedding text-xs italic text-background/10">
              Quality over quantity — always.
            </p>
            <span className="w-10 h-px bg-background/[0.06]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
