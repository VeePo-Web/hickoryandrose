import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"reveal" | "hold" | "exit">("reveal");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 500);
    const exitTimer = setTimeout(() => setPhase("exit"), 1000);
    const doneTimer = setTimeout(() => setIsLoading(false), 1400);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 z-[100] bg-foreground flex flex-col items-center justify-center"
          >
            {/* Subtle film grain texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "128px 128px",
              }}
            />

            {/* Centered editorial monogram */}
            <div className="text-center relative">
              {/* Delicate top line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={phase !== "reveal" ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-10 h-px mx-auto mb-8 origin-center"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.4), transparent)" }}
              />

              {/* H & R monogram — cinematic reveal */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "120%" }}
                  animate={phase !== "reveal" ? { y: "0%" } : { y: "120%" }}
                  transition={{ duration: 0.6, delay: 0, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="flex items-baseline justify-center gap-2"
                >
                  <span className="font-serif-wedding text-4xl md:text-5xl font-light tracking-[0.08em] text-background/80">
                    H
                  </span>
                  <span className="font-script text-3xl md:text-4xl text-background/25">
                    &
                  </span>
                  <span className="font-script text-4xl md:text-5xl text-background/80">
                    R
                  </span>
                </motion.div>
              </div>

              {/* Expanding gold shimmer line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={phase !== "reveal" ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-20 h-px mx-auto mt-6 origin-center overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-background/10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={phase !== "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                transition={{ duration: 0.3, delay: 0.45 }}
                className="font-sans-wedding text-[0.5rem] tracking-[0.35em] uppercase text-background/15 mt-5 font-light"
              >
                Luxury Wedding Planning
              </motion.p>
            </div>

            {/* Bottom location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase !== "reveal" ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.55 }}
              className="absolute bottom-10 font-sans-wedding text-[0.45rem] tracking-[0.3em] uppercase text-background/10 font-light"
            >
              Edmonton · Alberta
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default LoadingScreen;
