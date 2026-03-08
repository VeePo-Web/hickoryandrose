import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import founderImage from "@/assets/founder-portrait.jpg";

const credentials = [
  { value: "150+", label: "Weddings Coordinated" },
  { value: "8", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const FounderTeaserSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const verticalLineH = useTransform(sectionProgress, [0.1, 0.6], ["0%", "100%"]);
  const watermarkY = useTransform(sectionProgress, [0, 1], [40, -40]);
  const ribbonX = useTransform(sectionProgress, [0.2, 0.8], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card relative overflow-hidden"
      aria-label="About the founder"
    >
      {/* Large decorative section index */}
      <motion.div
        className="absolute left-6 md:left-12 top-12 md:top-16 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <span className="font-serif-wedding text-[10rem] md:text-[16rem] font-light text-foreground leading-none">
          04
        </span>
      </motion.div>

      {/* Parallax "About" watermark */}
      <motion.div
        className="absolute -right-10 top-1/3 pointer-events-none select-none"
        style={{ y: watermarkY }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-[8rem] md:text-[14rem] font-light text-foreground/[0.015] whitespace-nowrap tracking-tight italic">
          The Heart
        </span>
      </motion.div>

      {/* Scroll-linked vertical accent line */}
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent origin-top hidden lg:block"
        style={{ height: verticalLineH }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
        >
          {/* Portrait with subtle parallax */}
          <ScrollReveal className="lg:col-span-3">
            <ImageReveal direction="left" delay={0.1}>
              <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none overflow-hidden relative group">
                <motion.img
                  src={founderImage}
                  alt="Founder of Hickory & Rose, smiling warmly in a garden setting with sage eucalyptus and ivory roses"
                  className="w-full h-[110%] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                  style={{ y: imageY }}
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-700" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-4 right-4 hidden md:block"
                >
                  <span className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-white/30">
                    Founder · Hickory & Rose
                  </span>
                </motion.div>
              </div>
            </ImageReveal>

            {/* Editorial pull-quote ribbon between portrait and credentials */}
            <motion.div
              className="relative my-6 md:my-8 py-5 md:py-6 overflow-hidden"
              style={{ x: ribbonX }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-10 h-px bg-primary/20 shrink-0 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <p className="font-serif-wedding text-base md:text-lg italic text-foreground/40 leading-relaxed whitespace-nowrap">
                  "Calm is not the absence of planning — it's the presence of it."
                </p>
                <motion.div
                  className="w-10 h-px bg-primary/20 shrink-0 origin-right"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
              </div>
            </motion.div>

            {/* Credential row below ribbon */}
            <div className="grid grid-cols-3 gap-0 border-t border-border/40">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  className={`text-center py-6 group cursor-default hover:bg-primary/[0.02] transition-colors duration-500 ${
                    i < 2 ? "border-r border-border/40" : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                >
                  <p className="font-serif-wedding text-xl md:text-2xl font-light text-primary/60 group-hover:text-primary transition-colors duration-500">
                    {cred.value}
                  </p>
                  <motion.div
                    className="w-4 h-px bg-primary/20 mx-auto my-2 origin-center"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  />
                  <p className="font-overline text-[0.5rem] text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-500">
                    {cred.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Story */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div>
              <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-4">
                04
              </span>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px bg-primary/30 mb-6 origin-left"
              />

              <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
                Meet the Planner
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground mb-6">
                Hello, I'm the heart behind Hickory & Rose.
              </h2>
              <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-4 font-light">
                I started Hickory & Rose because I believe your wedding day
                should feel as calm as it is beautiful. After years in event
                coordination, I saw too many couples stressed on the day that
                should have been their most joyful.
              </p>
              <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-8 font-light">
                My mission is simple: handle every detail with quiet confidence
                so you can be fully present with the people you love.
              </p>

              {/* Signature flourish */}
              <div className="mb-6">
                <p className="font-script text-2xl text-primary/30 mb-1">Hickory & Rose</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-16 h-px bg-gradient-to-r from-primary/30 via-primary/15 to-transparent origin-left"
                />
                <p className="font-overline text-[0.5rem] text-muted-foreground/30 mt-3">
                  Est. 2018 · Edmonton, Alberta
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center font-sans-wedding text-xs tracking-[0.15em] uppercase text-primary hover:text-sage-deep transition-colors duration-200 group"
              >
                Read My Story
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderTeaserSection;
