import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { Sparkles } from "lucide-react";

const NowBookingSection = () => {
  return (
    <section className="py-10 md:py-14 bg-primary" aria-label="Now booking">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <Sparkles
              size={20}
              strokeWidth={1.5}
              className="text-primary-foreground/60 hidden md:block"
            />
            <p className="font-serif-wedding text-lg md:text-xl text-primary-foreground">
              Now booking{" "}
              <span className="font-semibold">Fall 2025</span> &{" "}
              <span className="font-semibold">2026 weddings</span>
            </p>
            <span className="hidden md:block w-px h-5 bg-primary-foreground/20" />
            <Link
              to="/inquire"
              className="inline-flex items-center px-6 py-2 border border-primary-foreground/40 hover:border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground font-sans-wedding text-xs tracking-[0.15em] uppercase transition-all duration-200"
            >
              Check Availability
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NowBookingSection;
