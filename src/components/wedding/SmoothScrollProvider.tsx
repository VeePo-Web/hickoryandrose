import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scheduleIdle } from "@/lib/idle";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<import("lenis").default | null>(null);
  const rafIdRef = useRef<number>(0);
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip smooth scroll on touch devices for better native performance
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let cancelled = false;
    let removeVisibilityListener = () => {};

    const cleanupIdle = scheduleIdle(async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const lenis = new Lenis({
        lerp: 0.07,
        smoothWheel: true,
        wheelMultiplier: 1.2,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafIdRef.current = requestAnimationFrame(raf);
      }
      rafIdRef.current = requestAnimationFrame(raf);

      const handleVisibility = () => {
        if (document.hidden) {
          lenis.stop();
          cancelAnimationFrame(rafIdRef.current);
        } else {
          lenis.start();
          rafIdRef.current = requestAnimationFrame(raf);
        }
      };

      document.addEventListener("visibilitychange", handleVisibility);
      removeVisibilityListener = () => document.removeEventListener("visibilitychange", handleVisibility);
    }, 4000);

    return () => {
      cancelled = true;
      cleanupIdle();
      removeVisibilityListener();
      cancelAnimationFrame(rafIdRef.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScrollProvider;
