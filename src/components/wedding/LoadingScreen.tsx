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
            {/* Clip-path wordmark reveal */}
            <div className="text-center relative">
              {/* Staggered letter reveal */}
              <div className="overflow-hidden">
                <h1 className="font-serif-wedding text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-foreground flex items-baseline justify-center gap-0" aria-label="Hickory & Rose">
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

              {/* Expanding center line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  phase !== "reveal"
                    ? { scaleX: 1, opacity: 1 }
                    : { scaleX: 0, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-16 h-px bg-primary/30 mx-auto mt-6 origin-center"
              />

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
