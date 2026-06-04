import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { scheduleIdle } from "@/lib/idle";

interface DeferredRenderProps {
  children: ReactNode;
  className?: string;
  idleDelay?: number;
  rootMargin?: string;
}

const DeferredRender = ({
  children,
  className,
  idleDelay = 6000,
  rootMargin = "1600px 0px",
}: DeferredRenderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    let cleanupIdle = () => {};
    let timeoutId = 0;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const reveal = () => {
      if (!cancelled) setShouldRender(true);
    };

    timeoutId = window.setTimeout(() => {
      cleanupIdle = scheduleIdle(reveal, 3000);
    }, idleDelay);

    if ("IntersectionObserver" in window && ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            reveal();
          }
        },
        { rootMargin },
      );
      observer.observe(ref.current);
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      cleanupIdle();
      observer?.disconnect();
    };
  }, [idleDelay, rootMargin, shouldRender]);

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : null}
    </div>
  );
};

export default DeferredRender;
