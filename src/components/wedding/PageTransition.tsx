import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      <div className="page-transition-curtain page-transition-sage" />
      <div className="page-transition-curtain page-transition-foreground" />
      <div
        className="page-transition-gold-line"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.6) 30%, hsl(var(--gold) / 0.8) 50%, hsl(var(--gold) / 0.6) 70%, transparent 100%)",
        }}
      />

      <div className="page-transition-monogram">
        <div className="text-center flex items-baseline gap-2">
          <span className="page-transition-mark page-transition-mark-h font-serif-wedding text-lg text-primary-foreground/50 tracking-[0.15em]">
            H
          </span>
          <span className="page-transition-mark page-transition-mark-amp font-script text-2xl text-primary-foreground/25 mx-0.5">
            &
          </span>
          <span className="page-transition-mark page-transition-mark-r font-script text-2xl text-primary-foreground/50">
            R
          </span>
        </div>
      </div>

      <div className="page-transition-top-line" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.5), transparent)" }} />
      <div
        className="page-transition-glow"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.08), transparent 70%)",
        }}
      />

      <div className="page-transition-content">
        {children}
      </div>
    </>
  );
};

export default PageTransition;
