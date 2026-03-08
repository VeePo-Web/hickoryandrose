import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import receptionImage from "@/assets/portfolio-reception.jpg";

const CTASection = () => {
  return (
    <section className="relative py-section-mobile md:py-section-tablet lg:py-section-desktop overflow-hidden" aria-label="Get in touch">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={receptionImage}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 text-center max-w-2xl">
        <ScrollReveal>
          <h2 className="font-serif-wedding text-display-lg text-white mb-6">
            Ready to feel calm about your wedding day?
          </h2>
          <p className="font-sans-wedding text-sm text-white/70 leading-relaxed mb-10">
            Let's talk about your vision, your day, and how Hickory & Rose can
            make it effortlessly beautiful.
          </p>
          <Link
            to="/inquire"
            className="inline-flex items-center border border-white/50 hover:border-white hover:bg-white/10 text-white font-sans-wedding text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-200"
          >
            Let's Talk
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
