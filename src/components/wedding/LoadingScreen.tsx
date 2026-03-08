import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
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
            {/* Botanical ring pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.15, 0], scale: [0.6, 1.4, 1.8] }}
              transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
              className="absolute w-32 h-32 rounded-full border border-primary pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.1, 0], scale: [0.8, 1.2, 1.5] }}
              transition={{ duration: 2, ease: "easeOut", repeat: Infinity, delay: 0.4 }}
              className="absolute w-24 h-24 rounded-full border border-primary pointer-events-none"
            />

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-center relative z-10"
            >
              <p className="font-serif-wedding text-2xl md:text-3xl font-light tracking-tight text-foreground">
                Hickory <span className="font-normal">&</span>{" "}
                <span className="font-script text-3xl md:text-4xl">Rose</span>
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-16 h-px bg-primary mx-auto mt-4 origin-left"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="font-sans-wedding text-[0.5625rem] tracking-[0.25em] uppercase text-muted-foreground/50 mt-4 font-light"
              >
                Refined Rustic Elegance
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default LoadingScreen;
