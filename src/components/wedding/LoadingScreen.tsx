import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordmarkLetters = "Hickory & Rose".split("");

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"reveal" | "hold" | "exit">("reveal");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 600);
    const exitTimer = setTimeout(() => setPhase("exit"), 1100);
    const doneTimer = setTimeout(() => setIsLoading(false), 1500);
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
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            {/* Subtle grain texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "128px 128px",
              }}
            />

            {/* Subtle radial glow behind wordmark */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={phase !== "reveal" ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/[0.02] blur-3xl" />
            </motion.div>

            {/* Decorative corner ornaments */}
            <motion.div
              className="absolute top-8 left-8 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={phase !== "reveal" ? { opacity: 0.08 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="font-serif-wedding text-sm text-foreground tracking-[0.3em]">❖</span>
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-8 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={phase !== "reveal" ? { opacity: 0.08 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="font-serif-wedding text-sm text-foreground tracking-[0.3em]">❖</span>
            </motion.div>

            {/* Clip-path wordmark reveal */}
            <div className="text-center relative">
              {/* Staggered letter reveal */}
              <div className="overflow-hidden">
                <h1
                  className="font-serif-wedding text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-foreground flex items-baseline justify-center gap-0"
                  aria-label="Hickory & Rose"
                >
                  {wordmarkLetters.map((char, i) => {
                    const isAmpersand = char === "&";
                    const isScript = i >= 10; // "Rose" starts at index 10
                    return (
                      <motion.span
                        key={i}
                        initial={{ y: "110%", opacity: 0 }}
                        animate={
                          phase !== "reveal"
                            ? { y: "0%", opacity: 1 }
                            : { y: "110%", opacity: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: i * 0.035,
                          ease: [0.25, 0.1, 0.25, 1.0],
                        }}
                        className={`inline-block ${
                          isAmpersand
                            ? "opacity-40 mx-0.5"
                            : isScript
                              ? "font-script text-4xl md:text-5xl lg:text-6xl"
                              : ""
                        }`}
                        style={{ whiteSpace: char === " " ? "pre" : undefined }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    );
                  })}
                </h1>
              </div>

              {/* Expanding center line with shimmer */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  phase !== "reveal"
                    ? { scaleX: 1, opacity: 1 }
                    : { scaleX: 0, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-16 h-px mx-auto mt-6 origin-center overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-primary/30" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={
                  phase !== "reveal"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 6 }
                }
                transition={{ duration: 0.4, delay: 0.55 }}
                className="font-sans-wedding text-[0.5625rem] tracking-[0.3em] uppercase text-muted-foreground/35 mt-5 font-light"
              >
                Luxury Wedding Planning
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={
                  phase !== "reveal"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 4 }
                }
                transition={{ duration: 0.4, delay: 0.7 }}
                className="font-serif-wedding text-xs italic text-muted-foreground/20 mt-3"
              >
                Refined rustic elegance
              </motion.p>
            </div>

            {/* Bottom location marker */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase !== "reveal" ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="absolute bottom-10 font-sans-wedding text-[0.5rem] tracking-[0.25em] uppercase text-muted-foreground/25 font-light"
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
