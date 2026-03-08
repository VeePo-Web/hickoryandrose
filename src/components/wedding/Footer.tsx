import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Approach", path: "/approach" },
  { label: "Inquire", path: "/inquire" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif-wedding text-xl font-semibold tracking-tight text-background">
                Hickory <span className="font-normal">&</span>{" "}
                <span className="font-script text-2xl">Rose</span>
              </span>
            </Link>
            <p className="font-sans-wedding text-sm text-background/50 leading-relaxed mb-6">
              Luxury wedding planning in Edmonton, Alberta. Refined rustic
              elegance with calm, intentional leadership.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/hickoryandrose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/40 hover:text-background transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@hickoryandrose.com"
                className="text-background/40 hover:text-background transition-colors duration-200"
                aria-label="Email us"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans-wedding text-label uppercase text-background/40 mb-4">
              Explore
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans-wedding text-sm text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans-wedding text-label uppercase text-background/40 mb-4">
              Get in Touch
            </p>
            <div className="space-y-3 font-sans-wedding text-sm text-background/60">
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
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
