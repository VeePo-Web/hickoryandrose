import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, ArrowUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = [
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Approach", path: "/approach" },
  { label: "FAQ", path: "/faq" },
  { label: "Inquire", path: "/inquire" },
];

const serviceAreas = [
  { name: "Edmonton", venues: 45 },
  { name: "Jasper", venues: 12 },
  { name: "Banff", venues: 18 },
  { name: "Lake Louise", venues: 8 },
  { name: "Calgary", venues: 22 },
  { name: "The Canadian Rockies", venues: 30 },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <footer ref={footerRef} className="bg-foreground text-background relative" role="contentinfo">
      {/* Gradient accent line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary)) 30%, hsl(var(--gold, 38 60% 55%)) 50%, hsl(var(--primary)) 70%, transparent)",
        }}
      />

      {/* Floating H&R monogram watermark with gold glow */}
      <motion.div
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        aria-hidden="true"
      >
        {/* Radial gold glow behind monogram */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 xl:w-96 xl:h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold, 38 60% 55%) / 0.04), transparent 70%)",
          }}
        />
        <span className="font-serif-wedding text-[12rem] xl:text-[16rem] font-light text-background/[0.02] leading-none tracking-tight relative">
          H
        </span>
        <span className="font-script text-[10rem] xl:text-[14rem] text-background/[0.015] leading-none -ml-8 relative">
          R
        </span>
      </motion.div>

      {/* Pre-footer email capture — upgraded with micro-interactions */}
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
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                      className="w-8 h-8 rounded-full border border-background/20 flex items-center justify-center"
                    >
                      <Check size={14} strokeWidth={1.5} className="text-background/50" />
                    </motion.div>
                    <div>
                      <p className="font-serif-wedding text-sm text-background/60 italic">
                        Welcome to the Hickory & Rose community.
                      </p>
                      <p className="font-sans-wedding text-[0.55rem] text-background/20 mt-1">
                        Check your inbox for a warm welcome.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md w-full md:w-auto"
                  >
                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholder="Your email address"
                        className="w-full bg-transparent border-b border-background/15 focus:border-background/40 py-3 px-0 text-sm text-background/60 placeholder:text-background/20 font-sans-wedding font-light outline-none transition-colors duration-300"
                        aria-label="Email address for newsletter"
                        required
                      />
                      {/* Animated gold focus line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px origin-left"
                        style={{
                          background: "linear-gradient(90deg, hsl(var(--gold, 38 60% 55%)), hsl(var(--primary)))",
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focused ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-3 text-[0.6rem] tracking-[0.2em] uppercase font-sans-wedding font-light border border-background/15 text-background/40 hover:text-background/80 hover:border-background/40 transition-all duration-300 shrink-0 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-background/5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                      <span className="relative z-10">Subscribe</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
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
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(var(--gold) / 0.7), hsl(var(--gold) / 0.2))",
                }}
              />
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 relative">
              {/* Editorial column separators (desktop) */}
              <div className="absolute top-0 bottom-0 left-1/3 w-px hidden md:block" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--background) / 0.06), transparent)" }} />
              <div className="absolute top-0 bottom-0 left-2/3 w-px hidden md:block" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--background) / 0.06), transparent)" }} />
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
                  <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                    {serviceAreas.map((area, i) => (
                      <span
                        key={area.name}
                        className="inline-flex items-center gap-1 group/area cursor-default"
                        onMouseEnter={() => setHoveredArea(i)}
                        onMouseLeave={() => setHoveredArea(null)}
                      >
                        <span className="font-sans-wedding text-[0.7rem] text-background/20 font-light group-hover/area:text-background/50 transition-colors duration-300">
                          {area.name}
                        </span>
                        <AnimatePresence>
                          {hoveredArea === i && (
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: "auto" }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ duration: 0.2 }}
                              className="font-serif-wedding text-[0.55rem] italic text-background/15 overflow-hidden whitespace-nowrap"
                            >
                              ({area.venues} venues)
                            </motion.span>
                          )}
                        </AnimatePresence>
                        {i < serviceAreas.length - 1 && (
                          <span className="text-background/10 mx-0.5">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Centered monogram above legal bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-10"
        >
          <div
            className="w-2 h-2 rotate-45 mb-6"
            style={{
              background: "linear-gradient(135deg, hsl(var(--gold, 38 60% 55%) / 0.3), hsl(var(--gold, 38 60% 55%) / 0.1))",
            }}
          />
          <p className="font-script text-2xl text-background/[0.08]">
            Hickory & Rose
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-16 h-px mt-4 origin-center"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--gold, 38 60% 55%) / 0.15), transparent)",
            }}
          />
        </motion.div>

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
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 font-sans-wedding text-[0.65rem] text-background/15 hover:text-background/40 transition-colors font-light group relative"
                aria-label="Back to top"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Top</span>
                <span className="relative z-10">
                  <ArrowUp size={10} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>
                {/* Gold ambient glow on hover */}
                <motion.span
                  className="absolute -inset-4 rounded-full pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.12), transparent 70%)" }}
                />
                <span
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.08), transparent 70%)" }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
