import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import receptionImage from "@/assets/portfolio-reception.jpg";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative py-section-mobile md:py-section-tablet lg:py-section-desktop overflow-hidden"
      aria-label="Get in touch"
    >
      <div className="absolute inset-0">
        <motion.img
          src={receptionImage}
          alt=""
          className="w-full h-[120%] object-cover"
          style={{ y }}
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 text-center max-w-2xl">
        <ScrollReveal>
          {/* Monogram flourish */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-12 h-px bg-background/20 origin-right"
            />
            <span className="font-script text-lg text-background/25">H & R</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-12 h-px bg-background/20 origin-left"
            />
          </div>

          <h2 className="font-serif-wedding text-display-lg text-white mb-6">
            Ready to feel calm about your wedding day?
          </h2>
          <p className="font-sans-wedding text-sm text-white/70 leading-relaxed mb-10">
            Let's talk about your vision, your day, and how Hickory & Rose can
            make it effortlessly beautiful.
          </p>
          <MagneticButton to="/inquire" variant="outline-light">
            Let's Talk
          </MagneticButton>

          {/* Bottom diamond accent */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className="w-8 h-px bg-background/15" />
            <span className="text-background/15 text-[0.5rem]">✦</span>
            <span className="w-8 h-px bg-background/15" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
