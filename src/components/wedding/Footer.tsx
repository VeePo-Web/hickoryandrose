import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
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
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      {/* Gradient accent line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary)) 30%, hsl(var(--gold-accent, 38 60% 55%)) 50%, hsl(var(--primary)) 70%, transparent)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl pt-20 md:pt-28 pb-12 md:pb-16">
        {/* Top: Wordmark centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <Link to="/" className="inline-block group">
            <span className="font-serif-wedding text-3xl md:text-4xl font-light tracking-[-0.03em] text-background">
              Hickory <span className="font-normal opacity-50">&</span>{" "}
              <span className="font-script text-4xl md:text-5xl group-hover:text-primary transition-colors duration-300">
                Rose
              </span>
            </span>
          </Link>
          <p className="font-overline text-background/25 mt-5">
            Edmonton's Luxury Wedding Planner
          </p>
        </motion.div>

        {/* Middle: Ruled navigation row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="border-t border-background/10" />
          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-8 md:py-10"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-sans-wedding text-[0.6875rem] tracking-[0.18em] uppercase text-background/40 hover:text-background transition-colors duration-200 font-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-background/10" />
        </motion.div>

        {/* Bottom: Three-column info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-10 md:pt-14"
        >
          {/* Location */}
          <div className="text-center md:text-left">
            <p className="font-overline text-background/25 mb-3 text-[0.6rem]">
              Location
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 font-sans-wedding text-xs text-background/40 font-light">
              <MapPin size={12} strokeWidth={1.5} className="shrink-0 text-background/25" />
              Edmonton, Alberta
            </div>
            <p className="font-sans-wedding text-[0.65rem] text-background/20 font-light mt-2 leading-relaxed">
              Serving Edmonton · Jasper · Banff · Lake Louise · Calgary · The Rockies
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="font-overline text-background/25 mb-3 text-[0.6rem]">
              Contact
            </p>
            <a
              href="mailto:sales@hickoryandrose.com"
              className="flex items-center justify-center gap-2 font-sans-wedding text-xs text-background/40 hover:text-background transition-colors duration-200 font-light"
            >
              <Mail size={12} strokeWidth={1.5} className="shrink-0 text-background/25" />
              sales@hickoryandrose.com
            </a>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <p className="font-overline text-background/25 mb-3 text-[0.6rem]">
              Follow
            </p>
            <a
              href="https://www.instagram.com/hickoryandrose"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans-wedding text-xs text-background/40 hover:text-background transition-colors duration-200 font-light"
            >
              <Instagram size={12} strokeWidth={1.5} className="text-background/25" />
              @hickoryandrose
            </a>
          </div>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="border-t border-background/8 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-sans-wedding text-[0.65rem] text-background/20">
            © {new Date().getFullYear()} Hickory & Rose. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="font-sans-wedding text-[0.65rem] text-background/20 hover:text-background/50 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="font-sans-wedding text-[0.65rem] text-background/20 hover:text-background/50 transition-colors"
            >
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
