import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

const orbitIndexes = [0, 1, 2];

const LoadingScreen = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let finishTimer = 0;
    let finished = false;
    const finishLoading = () => {
      if (finished) return;
      finished = true;
      progressRef.current = 100;
      setProgress(100);
      setPhase("exit");
      finishTimer = window.setTimeout(() => setIsLoading(false), 650);
    };

    const interval = window.setInterval(() => {
      progressRef.current += Math.random() * 22 + 12;
      if (progressRef.current >= 100) {
        progressRef.current = 100;
        window.clearInterval(interval);
      }
      setProgress(Math.min(progressRef.current, 100));
    }, 120);

    const holdTimer = window.setTimeout(() => setPhase("hold"), 180);
    const minDwellTimer = window.setTimeout(() => {
      if (document.readyState === "complete") {
        finishLoading();
      } else {
        window.addEventListener("load", finishLoading, { once: true });
      }
    }, 550);
    const maxDwellTimer = window.setTimeout(finishLoading, 1200);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(holdTimer);
      window.clearTimeout(minDwellTimer);
      window.clearTimeout(maxDwellTimer);
      window.clearTimeout(finishTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  const active = phase !== "enter";
  const exiting = phase === "exit";

  return (
    <>
      {isLoading && (
        <>
          <div className={`loader-curtain loader-curtain-left ${exiting ? "is-exiting" : ""}`} />
          <div className={`loader-curtain loader-curtain-right ${exiting ? "is-exiting" : ""}`} />
          <div className={`loader-gold-wipe ${exiting ? "is-exiting" : ""}`} />

          <div className={`loader-content ${exiting ? "is-exiting" : ""}`}>
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "128px 128px",
              }}
            />

            <div className={`absolute inset-0 pointer-events-none loader-corners ${active ? "is-active" : ""}`} aria-hidden="true">
              <div className="absolute top-8 left-8 md:top-12 md:left-12">
                <div className="loader-corner-h w-8 md:w-12 h-px origin-left" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.2), transparent)" }} />
                <div className="loader-corner-v w-px h-8 md:h-12 origin-top" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.2), transparent)" }} />
              </div>
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <div className="loader-corner-h w-8 md:w-12 h-px origin-right ml-auto" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.2), transparent)" }} />
                <div className="loader-corner-v w-px h-8 md:h-12 origin-top ml-auto" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.2), transparent)" }} />
              </div>
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-start justify-end">
                <div className="loader-corner-v w-px h-8 md:h-12 origin-bottom" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.2), transparent)" }} />
                <div className="loader-corner-h w-8 md:w-12 h-px origin-left" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.2), transparent)" }} />
              </div>
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-end justify-end">
                <div className="loader-corner-v w-px h-8 md:h-12 origin-bottom" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.2), transparent)" }} />
                <div className="loader-corner-h w-8 md:w-12 h-px origin-right" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.2), transparent)" }} />
              </div>
            </div>

            <div className={`loader-breathing-glow ${active ? "is-active" : ""}`} />

            {active &&
              orbitIndexes.map((i) => (
                <span
                  key={`orbit-${i}`}
                  className="loader-orbit absolute w-1 h-1 rotate-45 pointer-events-none"
                  style={{
                    "--orbit-x": `${Math.cos((i * 2 * Math.PI) / 3) * 80}px`,
                    "--orbit-y": `${Math.sin((i * 2 * Math.PI) / 3) * 80}px`,
                    "--orbit-rotate": `${45 + i * 120}deg`,
                    "--orbit-delay": `${0.3 + i * 0.4}s`,
                    background: `linear-gradient(135deg, hsl(var(--gold) / ${0.4 - i * 0.1}), hsl(var(--gold) / 0.05))`,
                  } as CSSProperties}
                  aria-hidden="true"
                />
              ))}

            <div className="text-center relative">
              <div
                className={`loader-top-line w-12 h-px mx-auto mb-10 origin-center ${active ? "is-active" : ""}`}
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.35), transparent)" }}
              />

              <div className="overflow-hidden">
                <div className={`loader-monogram flex items-baseline justify-center gap-3 ${active ? "is-active" : ""}`}>
                  <span className="font-serif-wedding text-5xl md:text-6xl font-light tracking-[0.1em]" style={{ color: "hsl(var(--gold) / 0.7)" }}>
                    H
                  </span>
                  <span className="font-script text-4xl md:text-5xl text-background/20">
                    &
                  </span>
                  <span className="font-script text-5xl md:text-6xl" style={{ color: "hsl(var(--gold) / 0.7)" }}>
                    R
                  </span>
                </div>
              </div>

              <div className={`loader-progress-shell w-24 h-px mx-auto mt-8 origin-center overflow-hidden relative ${active ? "is-active" : ""}`}>
                <div className="absolute inset-0 bg-background/8" />
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/40 via-gold/70 to-gold/40 transition-[width] duration-150"
                  style={{ width: `${progress}%` }}
                />
                <div className="loader-progress-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <p className={`loader-fade-in font-sans-wedding text-caption tracking-[0.3em] text-background/50 mt-3 tabular-nums ${active ? "is-active" : ""}`}>
                {Math.round(progress)}%
              </p>

              <div className="overflow-hidden mt-4">
                <p className={`loader-brand-name font-sans-wedding text-caption tracking-[0.4em] uppercase text-background/50 font-light ${active ? "is-active" : ""}`}>
                  Hickory & Rose
                </p>
              </div>

              <p className={`loader-tagline font-serif-wedding text-caption italic text-background/50 mt-3 tracking-wide ${active ? "is-active" : ""}`}>
                Luxury Wedding Planning
              </p>
            </div>

            <div className={`loader-bottom-location absolute bottom-10 flex items-center gap-3 ${active ? "is-active" : ""}`}>
              <span className="w-5 h-px bg-background/15" />
              <span className="font-sans-wedding text-caption tracking-[0.35em] uppercase text-background/50 font-light">
                Edmonton Â· Alberta Â· Canadian Rockies
              </span>
              <span className="w-5 h-px bg-background/15" />
            </div>
          </div>
        </>
      )}
      {children}
    </>
  );
};

export default LoadingScreen;
