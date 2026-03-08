import { useState, useEffect } from "react";
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
    <section className="bg-wedding-cream py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans-wedding text-sm tracking-widest uppercase text-wedding-text-light text-center mb-4">
            We can't wait to see you
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-3xl md:text-4xl text-wedding-text text-center mb-12">
            February 15, 2025
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4 md:gap-8">
            {timeUnits.map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="bg-white w-16 h-16 md:w-24 md:h-24 rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <span className="font-serif-wedding text-2xl md:text-4xl text-wedding-sage">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                </div>
                <p className="font-sans-wedding text-xs md:text-sm text-wedding-text-light uppercase tracking-wide">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountdownSection;
