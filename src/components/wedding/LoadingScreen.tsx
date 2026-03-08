import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-out curve: fast start, slow finish
        const increment = Math.max(1, Math.floor((100 - prev) / 8));
        return Math.min(100, prev + increment);
      });
    }, 80);

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
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
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            {/* Botanical ring pulse — outer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.12, 0], scale: [0.6, 1.4, 1.8] }}
              transition={{ duration: 2.2, ease: "easeOut", repeat: Infinity }}
              className="absolute w-36 h-36 rounded-full border border-primary pointer-events-none"
            />
            {/* Botanical ring pulse — inner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.08, 0], scale: [0.8, 1.2, 1.5] }}
              transition={{ duration: 2.2, ease: "easeOut", repeat: Infinity, delay: 0.5 }}
              className="absolute w-24 h-24 rounded-full border border-primary pointer-events-none"
            />

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-center relative z-10"
            >
              {/* Decorative monogram above */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-script text-6xl text-primary mb-2"
                aria-hidden="true"
              >
                &
              </motion.p>

              <p className="font-serif-wedding text-2xl md:text-3xl font-light tracking-tight text-foreground">
                Hickory <span className="font-normal opacity-50">&</span>{" "}
                <span className="font-script text-3xl md:text-4xl">Rose</span>
              </p>

              {/* Progress bar */}
              <div className="w-32 h-px bg-border mx-auto mt-6 overflow-hidden">
                <motion.div
                  className="h-full bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.15, ease: "linear" }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="font-sans-wedding text-[0.5625rem] tracking-[0.25em] uppercase text-muted-foreground/50 mt-4 font-light"
              >
                Refined Rustic Elegance
              </motion.p>
            </motion.div>

            {/* Bottom location marker */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-8 font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-muted-foreground"
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
