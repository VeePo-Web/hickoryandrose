import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      progressRef.current += Math.random() * 15 + 5;
      if (progressRef.current >= 100) {
        progressRef.current = 100;
        clearInterval(interval);
      }
      setProgress(Math.min(progressRef.current, 100));
    }, 120);

    const holdTimer = setTimeout(() => setPhase("hold"), 400);
    const exitTimer = setTimeout(() => setPhase("exit"), 1600);
    const doneTimer = setTimeout(() => setIsLoading(false), 2400);
    return () => {
      clearInterval(interval);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const ease = [0.25, 0.1, 0.25, 1.0] as const;

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <>
            {/* Left curtain */}
            <motion.div
              key="curtain-left"
              initial={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-y-0 left-0 w-1/2 z-[101] bg-foreground"
            />
            {/* Right curtain */}
            <motion.div
              key="curtain-right"
              initial={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-y-0 right-0 w-1/2 z-[101] bg-foreground"
            />

            {/* Content layer (above curtains) */}
            <motion.div
              key="loader-content"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="fixed inset-0 z-[102] flex flex-col items-center justify-center pointer-events-none"
            >
              {/* Film grain */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px 128px",
                }}
              />

              <div className="text-center relative">
                {/* Top ornamental line */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={phase !== "enter" ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.05, ease }}
                  className="w-12 h-px mx-auto mb-10 origin-center"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.35), transparent)" }}
                />

                {/* Monogram with staggered reveals */}
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "130%" }}
                    animate={phase !== "enter" ? { y: "0%" } : {}}
                    transition={{ duration: 0.7, ease }}
                    className="flex items-baseline justify-center gap-3"
                  >
                    <motion.span
                      className="font-serif-wedding text-5xl md:text-6xl font-light tracking-[0.1em] text-background/80"
                      initial={{ opacity: 0 }}
                      animate={phase !== "enter" ? { opacity: 1 } : {}}
                      transition={{ delay: 0.15, duration: 0.4 }}
                    >
                      H
                    </motion.span>
                    <motion.span
                      className="font-script text-4xl md:text-5xl text-background/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={phase !== "enter" ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.25, duration: 0.5 }}
                    >
                      &
                    </motion.span>
                    <motion.span
                      className="font-script text-5xl md:text-6xl text-background/80"
                      initial={{ opacity: 0 }}
                      animate={phase !== "enter" ? { opacity: 1 } : {}}
                      transition={{ delay: 0.35, duration: 0.4 }}
                    >
                      R
                    </motion.span>
                  </motion.div>
                </div>

                {/* Gold shimmer progress bar */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={phase !== "enter" ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2, ease }}
                  className="w-24 h-px mx-auto mt-8 origin-center overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-background/8" />
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/40 via-gold/70 to-gold/40"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.15 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut", repeat: 1 }}
                  />
                </motion.div>

                {/* Brand name */}
                <div className="overflow-hidden mt-6">
                  <motion.p
                    initial={{ y: "100%", opacity: 0 }}
                    animate={phase !== "enter" ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.45, ease }}
                    className="font-sans-wedding text-[0.5rem] tracking-[0.4em] uppercase text-background/15 font-light"
                  >
                    Hickory & Rose
                  </motion.p>
                </div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={phase !== "enter" ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.65 }}
                  className="font-serif-wedding text-[0.6rem] italic text-background/8 mt-3 tracking-wide"
                >
                  Luxury Wedding Planning
                </motion.p>
              </div>

              {/* Bottom location */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={phase !== "enter" ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.75 }}
                className="absolute bottom-10 flex items-center gap-3"
              >
                <span className="w-5 h-px bg-background/6" />
                <span className="font-sans-wedding text-[0.4rem] tracking-[0.35em] uppercase text-background/8 font-light">
                  Edmonton · Alberta
                </span>
                <span className="w-5 h-px bg-background/6" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default LoadingScreen;
