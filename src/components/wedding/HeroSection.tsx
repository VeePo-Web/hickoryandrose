import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Navigation from "./Navigation";
import MagneticButton from "./MagneticButton";
import heroImage from "@/assets/hero-wedding.jpg";

const charVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.025,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const AnimatedHeadline = ({ text, startIndex = 0 }: { text: string; startIndex?: number }) => (
  <>
    {text.split("").map((char, i) => (
      <motion.span
        key={`${startIndex + i}-${char}`}
        custom={startIndex + i}
        variants={charVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </>
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "10%"]);

  useEffect(() => {
    document.title = "Hickory & Rose | Edmonton's Luxury Wedding Planner";
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const line1 = "Your wedding day, ";
  const line2 = "effortlessly beautiful.";

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Background Image with Ken Burns zoom + parallax */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Elegant wedding tablescape with sage green and ivory florals at golden hour"
          className="w-full h-[120%] object-cover"
          loading="eager"
          decoding="async"
          width={1920}
          height={1080}
          fetchPriority="high"
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          style={{ y: imgY }}
        />
        {/* Multi-layered gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      </div>

      <Navigation variant="overlay" />

      {/* Content with scroll-linked fade */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Overline with flanking lines */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as const }}
          className="font-sans-wedding text-label uppercase text-white/60 mb-6"
        >
          <span className="inline-flex items-center gap-3">
            <motion.span
              className="w-8 h-px bg-white/30 origin-right"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            Edmonton's Luxury Wedding Planner
            <motion.span
              className="w-8 h-px bg-white/30 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.p>

        <h1 className="font-serif-wedding text-display-xl font-light max-w-4xl mb-6 leading-tight overflow-hidden">
          <AnimatedHeadline text={line1} startIndex={0} />
          <em className="font-light">
            <AnimatedHeadline text={line2} startIndex={line1.length} />
          </em>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: [0.25, 0.1, 0.25, 1.0] as const }}
          className="font-sans-wedding text-base md:text-lg text-white/70 max-w-xl mb-12 leading-relaxed font-light"
        >
          Refined planning. Calm leadership. Every detail, intentional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <MagneticButton to="/inquire" variant="outline-light">
            Begin Your Story
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 0.6 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white cursor-pointer z-10 hover:opacity-80 transition-opacity"
        aria-label="Scroll to content"
      >
        <ChevronDown size={24} strokeWidth={1} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
