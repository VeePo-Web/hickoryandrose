import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import founderImage from "@/assets/founder-portrait.jpg";

const FounderTeaserSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card" aria-label="About the founder">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
        >
          {/* Portrait with subtle parallax */}
          <ScrollReveal className="lg:col-span-3">
            <ImageReveal direction="left" delay={0.1}>
              <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none overflow-hidden relative">
                <motion.img
                  src={founderImage}
                  alt="Founder of Hickory & Rose, smiling warmly in a garden setting"
                  className="w-full h-[110%] object-cover"
                  style={{ y: imageY }}
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </ImageReveal>
          </ScrollReveal>

          {/* Story */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div>
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

              {/* Pull quote accent */}
              <div className="border-l-2 border-primary/20 pl-5 mb-8">
                <p className="font-serif-wedding text-base text-foreground/70 italic leading-relaxed">
                  "Calm is not the absence of planning — it's the presence of it."
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
