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
  const founderImgScale = useTransform(founderScroll, [0, 0.5, 1], [1.05, 1, 0.98]);

  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
      <div ref={founderRef} className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <ImageReveal direction="left" delay={0.1}>
              <div className="aspect-[3/4] overflow-hidden sticky top-28 relative group">
                {/* Cinematic letterbox bars */}
                <div className="absolute top-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none" />

                {/* Gold shimmer sweep on hover */}
                <div
                  className="absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.08) 40%, hsl(var(--gold) / 0.12) 50%, hsl(var(--gold) / 0.08) 60%, transparent 100%)" }}
                />

                <motion.img
                  src={founderImage}
                  alt="Founder of Hickory & Rose"
                  className="w-full h-[110%] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ y: founderImgY, scale: founderImgScale }}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Gold corner reveals — all 4 corners */}
                <div className="absolute top-3 left-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute top-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute top-0 right-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>
                <div className="absolute bottom-3 left-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute bottom-0 left-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>

                {/* Frame index mark */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-white/40">FR01</span>
                </div>

                {/* Caption reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                  <span className="block w-6 h-px mb-2" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.5), transparent)" }} />
                  <span className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-white/50">Founder, Hickory &amp; Rose</span>
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
