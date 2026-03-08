import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Approach", path: "/approach" },
  { label: "FAQ", path: "/faq" },
  { label: "Inquire", path: "/inquire" },
];

const serviceAreas = [
  "Edmonton", "Jasper", "Banff", "Lake Louise", "Calgary", "The Canadian Rockies",
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background relative" role="contentinfo">
      {/* Gradient accent line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary)) 30%, hsl(var(--gold, 38 60% 55%)) 50%, hsl(var(--primary)) 70%, transparent)",
        }}
      />

      {/* Pre-footer email capture teaser */}
      <div className="border-b border-background/[0.06]">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5">
              <p className="font-sans-wedding text-[0.55rem] tracking-[0.2em] uppercase text-background/20 mb-3">
                Stay Inspired
              </p>
              <h3 className="font-serif-wedding text-2xl md:text-3xl text-background/70 font-light leading-tight">
                Planning wisdom, delivered with care.
              </h3>
              <p className="font-sans-wedding text-xs text-background/25 font-light mt-3 leading-relaxed max-w-xs">
                Curated inspiration, vendor insights, and planning tips — never spam, always intentional.
              </p>
            </div>
            <div className="md:col-span-7 md:flex md:justify-end">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md w-full md:w-auto">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent border-b border-background/15 focus:border-background/40 py-3 px-0 text-sm text-background/60 placeholder:text-background/20 font-sans-wedding font-light outline-none transition-colors duration-300"
                    aria-label="Email address for newsletter"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-3 text-[0.6rem] tracking-[0.2em] uppercase font-sans-wedding font-light border border-background/15 text-background/40 hover:text-background/80 hover:border-background/40 transition-all duration-300 shrink-0"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl pt-24 md:pt-32 pb-10 md:pb-14">
        {/* Top: Large editorial monogram + tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-28">
          {/* Monogram column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <Link to="/" className="inline-block group">
              <span className="font-serif-wedding text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-background leading-tight">
                Hickory
                <br />
                <span className="font-normal opacity-30">&</span>{" "}
                <span className="font-script text-5xl md:text-6xl lg:text-7xl group-hover:text-primary transition-colors duration-500">
                  Rose
                </span>
              </span>
            </Link>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-background/15 origin-left mt-8 mb-6"
            />
            <p className="font-sans-wedding text-sm text-background/35 font-light leading-relaxed max-w-xs">
              Luxury wedding planning rooted in calm leadership, elevated
              design, and the belief that your day should be felt — not
              managed.
            </p>

            {/* Credential badge */}
            <div className="mt-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <p className="font-sans-wedding text-[0.6rem] tracking-[0.15em] uppercase text-background/20 font-light">
                Est. 2018 · Edmonton, Alberta
              </p>
            </div>
          </motion.div>

          {/* Navigation + Contact columns */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
              {/* Navigation */}
              <div>
                <p className="font-overline text-background/20 mb-5 text-[0.6rem]">
                  Explore
                </p>
                <nav aria-label="Footer navigation">
                  <ul className="space-y-3">
                    {footerLinks.map((link, i) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="font-sans-wedding text-sm text-background/40 hover:text-background transition-colors duration-200 font-light inline-flex items-center gap-2 group"
                        >
                          <span className="text-background/10 font-serif-wedding text-[0.6rem] group-hover:text-background/25 transition-colors">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact */}
              <div>
                <p className="font-overline text-background/20 mb-5 text-[0.6rem]">
                  Contact
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:sales@hickoryandrose.com"
                    className="flex items-start gap-2.5 font-sans-wedding text-sm text-background/40 hover:text-background transition-colors duration-200 font-light"
                  >
                    <Mail size={14} strokeWidth={1.5} className="shrink-0 text-background/20 mt-0.5" />
                    <span>sales@hickoryandrose.com</span>
                  </a>
                  <div className="flex items-start gap-2.5 font-sans-wedding text-sm text-background/30 font-light">
                    <MapPin size={14} strokeWidth={1.5} className="shrink-0 text-background/20 mt-0.5" />
                    <span>Edmonton, Alberta</span>
                  </div>
                </div>

                {/* Response time */}
                <div className="mt-6 border-t border-background/[0.06] pt-4">
                  <p className="font-sans-wedding text-[0.55rem] tracking-[0.1em] uppercase text-background/15 font-light">
                    Typically responds within 48 hours
                  </p>
                </div>
              </div>

              {/* Social + Service area */}
              <div>
                <p className="font-overline text-background/20 mb-5 text-[0.6rem]">
                  Follow
                </p>
                <a
                  href="https://www.instagram.com/hickoryandrose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-sans-wedding text-sm text-background/40 hover:text-background transition-colors duration-200 font-light"
                >
                  <Instagram size={14} strokeWidth={1.5} className="text-background/20" />
                  @hickoryandrose
                </a>

                <div className="mt-8">
                  <p className="font-overline text-background/20 mb-3 text-[0.6rem]">
                    Serving
                  </p>
                  <p className="font-sans-wedding text-[0.7rem] text-background/20 font-light leading-relaxed">
                    {serviceAreas.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom legal bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="border-t border-background/[0.08]" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="font-sans-wedding text-[0.65rem] text-background/15 font-light">
              © {new Date().getFullYear()} Hickory & Rose. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="font-sans-wedding text-[0.65rem] text-background/15 hover:text-background/40 transition-colors font-light"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="font-sans-wedding text-[0.65rem] text-background/15 hover:text-background/40 transition-colors font-light"
              >
                Terms
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 font-sans-wedding text-[0.65rem] text-background/15 hover:text-background/40 transition-colors font-light group"
                aria-label="Back to top"
              >
                Top
                <ArrowUp size={10} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
