import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import founderImage from "@/assets/founder-portrait.jpg";

const differentiators = [
  { title: "One Planner, Start to Finish", detail: "The planner you meet is the planner on your wedding day. No hand-offs, no surprises — just continuity and trust." },
  { title: "Curated Vendor Network", detail: "We've spent years building relationships with Edmonton's finest vendors. Every recommendation is personally vetted and aligned with your aesthetic." },
  { title: "Calm Under Pressure", detail: "Rain on ceremony day? Vendor running late? You'll never know. Our team leads with quiet confidence, handling every pivot behind the scenes." },
  { title: "Design-Led Approach", detail: "We don't just coordinate logistics — we design cohesive experiences where every visual element tells your story." },
];

const ApproachDifferentiators = () => (
  <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden">
    <motion.div
      className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.015 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <span className="font-script text-[20rem] text-foreground leading-none">
        &
      </span>
    </motion.div>

    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Sticky founder image */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <ImageReveal direction="left" delay={0.1}>
              <div className="aspect-[3/4] overflow-hidden max-w-md">
                <img
                  src={founderImage}
                  alt="Hickory & Rose founder reviewing wedding details"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ImageReveal>
            <p className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-muted-foreground/25 mt-4">
              Your planner, from first call to last dance
            </p>
          </div>
        </div>

        {/* Right: Differentiators */}
        <div>
          <ScrollReveal>
            <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">02</span>
            <p className="font-overline text-muted-foreground/50 mb-3">The Difference</p>
            <h2 className="font-serif-wedding text-display-lg text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light mb-12 max-w-md">
              Beyond logistics and timelines, here's what you'll experience working with Hickory & Rose.
            </p>
          </ScrollReveal>

          <div className="border-t border-border/40">
            {differentiators.map((diff, index) => (
              <ScrollReveal key={diff.title} delay={index * 0.08}>
                <div className="py-8 md:py-10 border-b border-border/40 group cursor-default relative">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif-wedding text-2xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif-wedding text-display-sm text-foreground group-hover:text-primary transition-colors duration-500 relative">
                      {diff.title}
                      <span
                        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
                        style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1), transparent)" }}
                      />
                    </h3>
                  </div>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground/60 leading-relaxed font-light pl-12 group-hover:text-muted-foreground transition-colors duration-500">
                    {diff.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ApproachDifferentiators;
