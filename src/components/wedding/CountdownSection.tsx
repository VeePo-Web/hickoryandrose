import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-02-15T16:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="bg-sage-mist py-section-mobile md:py-section-tablet relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-primary/30" />
            <span className="text-primary/30 text-xs">✦</span>
            <span className="w-10 h-px bg-primary/30" />
          </div>
          <p className="font-overline text-muted-foreground text-center mb-4">
            We can't wait to see you
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-display-lg text-foreground text-center mb-12">
            February 15, 2025
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4 md:gap-8">
            {timeUnits.map((unit, i) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-card w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-3 border border-border shadow-subtle">
                  <span className="font-serif-wedding text-2xl md:text-4xl text-primary font-light">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                </div>
                <p className="font-overline text-muted-foreground text-[0.55rem] md:text-[0.625rem]">
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom flourish */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <span className="w-8 h-px bg-primary/20" />
          <span className="font-script text-sm text-primary/25">H & R</span>
          <span className="w-8 h-px bg-primary/20" />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
