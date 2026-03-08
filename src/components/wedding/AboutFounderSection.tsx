import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import MagneticButton from "./MagneticButton";
import founderImage from "@/assets/founder-portrait.jpg";

const AboutFounderSection = () => {
  const founderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: founderScroll } = useScroll({
    target: founderRef,
    offset: ["start end", "end start"],
  });
  const founderImgY = useTransform(founderScroll, [0, 1], ["4%", "-4%"]);

  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
      <div ref={founderRef} className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <ImageReveal direction="left" delay={0.1}>
              <div className="aspect-[3/4] overflow-hidden sticky top-28 relative group">
                <motion.img
                  src={founderImage}
                  alt="Founder of Hickory & Rose"
                  className="w-full h-[110%] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ y: founderImgY }}
                  loading="lazy"
                />
                {/* Gold corner frame accents on hover */}
                <div className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.35), transparent)" }} />
                </div>
                <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.35), transparent)" }} />
                  <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.35), transparent)" }} />
                </div>
              </div>
            </ImageReveal>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">01</span>
              <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-3">
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-px bg-primary/30" />
                  The Founder
                </span>
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground mb-8">
                The heart behind every detail.
              </h2>
              <div className="space-y-5 font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light">
                <p className="drop-cap">
                  I founded Hickory & Rose with a simple belief: your wedding
                  day should feel as calm as it is beautiful.
                </p>
                <p>
                  After years in the events industry, I noticed something
                  troubling — too many couples were stressed and exhausted on
                  what should have been their most joyful day. I knew there had
                  to be a better way.
                </p>
                <p>
                  Hickory & Rose exists to be that better way. We bring quiet
                  confidence, meticulous planning, and genuine warmth to every
                  wedding we touch.
                </p>
              </div>

              <div className="border-l-2 border-primary/20 pl-5 my-10">
                <p className="font-serif-wedding text-base text-foreground/70 italic leading-relaxed">
                  "Calm is not the absence of planning — it's the presence of it."
                </p>
              </div>

              <MagneticButton to="/inquire" variant="outline">
                Work With Us
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;
