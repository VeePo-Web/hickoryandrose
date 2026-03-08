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
        {/* Gradient overlay — warm bottom fade for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/65 to-foreground/80" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 text-center max-w-2xl">
        <ScrollReveal>
          <p className="font-overline text-white/30 mb-6">
            Let's Begin
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-16 h-px bg-white/20 mx-auto mb-10 origin-center"
          />

          <h2 className="font-serif-wedding text-display-lg text-white mb-4 leading-tight">
            Ready to feel calm about your wedding day?
          </h2>
          <p className="font-sans-wedding text-sm text-white/60 leading-relaxed mb-12 max-w-md mx-auto">
            Let's talk about your vision, your day, and how Hickory & Rose can
            make it effortlessly beautiful.
          </p>
          <MagneticButton to="/inquire" variant="outline-light">
            Let's Talk
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
