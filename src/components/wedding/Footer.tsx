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
                    {footerLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="font-sans-wedding text-sm text-background/40 hover:text-background transition-colors duration-200 font-light block"
                        >
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
                    Edmonton · Jasper · Banff
                    <br />
                    Lake Louise · Calgary
                    <br />
                    The Canadian Rockies
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
          <div className="border-t border-background/8" />
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
