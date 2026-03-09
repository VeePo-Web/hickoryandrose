import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import BreathingDiamond from "./BreathingDiamond";

const promises = [
  { 
    promise: "Your call returned same-day",
    subtext: "Because waiting feels like being forgotten"
  },
  { 
    promise: "Timeline finalized 72 hours before",
    subtext: "So you can exhale before the big day"
  },
  { 
    promise: "A backup plan for every vendor",
    subtext: "Peace of mind isn't optional"
  },
  { 
    promise: "Present from setup to send-off",
    subtext: "Not just coordinating — caring"
  },
  { 
    promise: "Your vendors, briefed and aligned",
    subtext: "One vision, executed seamlessly"
  },
];

const AboutPromises = () => (
  <section 
    className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden" 
    style={{ contain: "layout style" }} 
    role="region" 
    aria-label="Our Promises"
  >
    {/* Parallax watermark */}
    <motion.div
      className="absolute -right-8 top-1/3 pointer-events-none select-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.015 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      style={{ willChange: "transform" }}
    >
      <span className="font-serif-wedding text-[10rem] md:text-[16rem] font-light text-foreground leading-none tracking-tight italic whitespace-nowrap">
        Promise
      </span>
    </motion.div>

    <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">04</span>
          <p className="font-sans-wedding text-label uppercase text-brand-text-tertiary mb-4">
            <span className="inline-flex items-center gap-3">
              <span className="w-5 h-px bg-border" />
              What You Can Count On
              <span className="w-5 h-px bg-border" />
            </span>
          </p>
          <h2 className="font-serif-wedding text-display-lg text-foreground">
            Promises We Keep
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Central spine with gold gradient — Desktop */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px hidden md:block">
          <motion.div
            className="w-full h-full origin-top"
            style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.2), hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.2), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>
        {/* Mobile spine */}
        <div className="absolute left-6 top-0 bottom-0 w-px md:hidden">
          <motion.div
            className="w-full h-full origin-top"
            style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.2), hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.2), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>

        <div className="space-y-0">
          {promises.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.promise}
                initial={{ opacity: 0, x: isEven ? -20 : 20, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative group"
              >
                {/* Breathing diamond node */}
                <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <BreathingDiamond size={8} />
                </div>

                {/* Content card */}
                <div className={`pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 py-8 md:py-12`}>
                  <div className={`${isEven ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    {/* Promise number */}
                    <span className="font-serif-wedding text-sm font-light text-primary/20 group-hover:text-primary/50 transition-colors duration-500 block mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Gold underline accent */}
                    <motion.div
                      className={`w-8 h-px mb-3 ${isEven ? "md:ml-auto" : ""}`}
                      style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), hsl(var(--primary) / 0.1))" }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    />
                    {/* Promise text */}
                    <p className="font-serif-wedding text-body-lg md:text-xl text-foreground leading-relaxed font-light group-hover:text-foreground/90 transition-colors duration-500">
                      {item.promise}
                    </p>
                    {/* Subtext — reveals on hover */}
                    <p className="font-sans-wedding text-sm italic text-brand-text-tertiary mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline end ornament */}
        <div className="flex justify-center mt-8">
          <BreathingDiamond size={6} />
        </div>
      </div>
    </div>
  </section>
);

export default AboutPromises;
