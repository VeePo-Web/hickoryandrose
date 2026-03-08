import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import MagneticButton from "./MagneticButton";
import heroImage from "@/assets/hero-wedding-premium.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";

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

const trustCredentials = [
  "150+ Weddings",
  "Top 10 Edmonton Planners",
  "Est. 2018",
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isInsetHovered, setIsInsetHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "10%"]);
  const secondaryImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const secondaryImgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sideTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    document.title = "Hickory & Rose | Edmonton's Luxury Wedding Planner";
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const line1 = "Your wedding day, ";
  const line2 = "effortlessly beautiful.";

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden grain-overlay vignette" aria-label="Hero">
      {/* Background Image with Ken Burns zoom + parallax */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Luxury wedding tablescape in rustic timber barn with sage linen, brass candles, garden roses, and Canadian Rocky Mountain peaks at golden hour"
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

      {/* Radial light glow behind headline */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1.2 }}
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Large decorative ampersand watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <span className="font-script text-[22rem] md:text-[32rem] text-white leading-none">
          &
        </span>
      </motion.div>

      {/* Left sidebar — "Scroll to Explore" vertical text */}
      <motion.div
        className="absolute left-6 md:left-10 top-1/2 z-20 hidden lg:flex flex-col items-center gap-4 pointer-events-none"
        style={{ y: sideTextY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-12 origin-top"
          style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.3))" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 3.4, duration: 0.8 }}
        />
        <span
          className="font-sans-wedding text-[0.45rem] tracking-[0.3em] uppercase text-white/20 font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll to Explore
        </span>
        <motion.div
          className="w-px h-8 origin-top"
          style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.2), transparent)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 3.6, duration: 0.6 }}
        />
      </motion.div>

      {/* Right sidebar — Year + Season */}
      <motion.div
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="font-serif-wedding text-xs text-white/15 tracking-widest" style={{ writingMode: "vertical-rl" }}>
          2025 · 2026
        </span>
      </motion.div>

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

        {/* Trust credential ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="absolute bottom-24 left-0 right-0 flex items-center justify-center gap-6 md:gap-10"
        >
          {trustCredentials.map((cred, i) => (
            <motion.span
              key={cred}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0 + i * 0.15, duration: 0.4 }}
              className="font-sans-wedding text-[0.6rem] md:text-[0.65rem] tracking-[0.18em] uppercase text-white/25 font-light"
            >
              {i > 0 && <span className="mr-6 md:mr-10 opacity-30">·</span>}
              {cred}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating editorial inset image — bottom-right corner */}
      <motion.div
        className="absolute bottom-16 right-6 md:right-12 z-20 hidden lg:block"
        style={{ y: secondaryImgY, opacity: secondaryImgOpacity }}
        initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.2, delay: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="relative group"
          onMouseEnter={() => setIsInsetHovered(true)}
          onMouseLeave={() => setIsInsetHovered(false)}
        >
          <div className="w-40 xl:w-48 aspect-[3/4] overflow-hidden shadow-2xl relative">
            <img
              src={ceremonyImage}
              alt="Mountain barn ceremony with candlelit aisle and eucalyptus garlands"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            {/* Cinematic gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              animate={{ opacity: isInsetHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
            {/* Corner frame accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-white/0 group-hover:border-white/20 transition-all duration-700" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-white/0 group-hover:border-white/20 transition-all duration-700" />
            {/* Hover caption */}
            <motion.div
              className="absolute bottom-3 left-3 right-3"
              initial={false}
              animate={{ opacity: isInsetHovered ? 1 : 0, y: isInsetHovered ? 0 : 6 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-serif-wedding text-[0.6rem] text-white/60 italic">
                "A ceremony as calm as the mountains"
              </p>
            </motion.div>
          </div>
          {/* Elegant caption below inset */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="flex items-center justify-end gap-2 mt-3"
          >
            <span className="w-4 h-px bg-white/15" />
            <span className="font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-white/30">
              Jasper · Alberta
            </span>
          </motion.div>
        </div>
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
