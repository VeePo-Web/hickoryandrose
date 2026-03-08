import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(1, Math.floor((100 - prev) / 6));
        return Math.min(100, prev + increment);
      });
    }, 60);

    // Reduced from 2000ms to 1200ms for snappier perceived load
    const timer = setTimeout(() => setIsLoading(false), 1200);
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
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-center relative z-10"
            >
              <p className="font-serif-wedding text-2xl md:text-3xl font-light tracking-tight text-foreground">
                Hickory <span className="font-normal opacity-40">&</span>{" "}
                <span className="font-script text-3xl md:text-4xl">Rose</span>
              </p>

              <div className="w-24 h-px bg-border/40 mx-auto mt-8 overflow-hidden">
                <motion.div
                  className="h-full bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="font-sans-wedding text-[0.5625rem] tracking-[0.25em] uppercase text-muted-foreground/40 mt-5 font-light"
              >
                Edmonton · Alberta
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
