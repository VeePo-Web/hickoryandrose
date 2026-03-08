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

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        {/* Signature wordmark */}
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
              <span className="font-script text-4xl md:text-5xl group-hover:text-primary transition-colors duration-300">Rose</span>
            </span>
          </Link>
          <p className="font-overline text-background/25 mt-5">
            Edmonton's Luxury Wedding Planner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            custom={0}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-overline text-background/40 mb-5">
              About
            </p>
            <p className="font-sans-wedding text-body-sm text-background/45 leading-relaxed mb-6 font-light">
              Refined rustic elegance with calm, intentional leadership. We
              protect what matters most on your wedding day — your presence.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/hickoryandrose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/40 hover:text-background hover:scale-110 transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@hickoryandrose.com"
                className="text-background/40 hover:text-background hover:scale-110 transition-all duration-200"
                aria-label="Email us"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            custom={1}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-overline text-background/40 mb-5">
              Explore
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans-wedding text-body-sm text-background/50 hover:text-background transition-colors duration-200 inline-block hover:translate-x-0.5 transform font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            custom={2}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-overline text-background/40 mb-5">
              Get in Touch
            </p>
            <div className="space-y-3 font-sans-wedding text-body-sm text-background/50 font-light">
              <div className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} className="shrink-0 text-background/40" />
                <span>Edmonton, Alberta</span>
              </div>
              <a
                href="mailto:hello@hickoryandrose.com"
                className="flex items-center gap-2 hover:text-background transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.5} className="shrink-0 text-background/40" />
                hello@hickoryandrose.com
              </a>
              <a
                href="https://www.instagram.com/hickoryandrose"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-background transition-colors duration-200"
              >
                <Instagram size={14} strokeWidth={1.5} className="shrink-0 text-background/40" />
                @hickoryandrose
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-sans-wedding text-xs text-background/30">
            © {new Date().getFullYear()} Hickory & Rose. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="font-sans-wedding text-xs text-background/30 hover:text-background/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-sans-wedding text-xs text-background/30 hover:text-background/60 transition-colors"
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
