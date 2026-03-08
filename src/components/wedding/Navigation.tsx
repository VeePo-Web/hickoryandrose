import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

interface NavigationProps {
  variant?: "overlay" | "solid";
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Approach", path: "/approach" },
  { name: "Journal", path: "/journal" },
  { name: "FAQ", path: "/faq" },
];

const Navigation = ({ variant = "solid" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isOverlay = variant === "overlay";

  // Smart hide-on-scroll-down, show-on-scroll-up
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 80);
    if (currentY > 300 && currentY > lastScrollY + 5) {
      setHidden(true);
    } else if (currentY < lastScrollY - 5 || currentY < 100) {
      setHidden(false);
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const showSolidBg = !isOverlay || scrolled;
  const showMonogram = isOverlay && scrolled;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !isOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolidBg
            ? "bg-warm-white/95 backdrop-blur-md shadow-subtle"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with condensed monogram transition */}
            <Link
              to="/"
              className={`relative transition-colors duration-300 ${
                showSolidBg ? "text-foreground" : "text-white"
              }`}
            >
              <AnimatePresence mode="wait">
                {showMonogram ? (
                  <motion.span
                    key="monogram"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-center gap-1.5"
                  >
                    <span className="font-serif-wedding text-lg font-light tracking-tight">H</span>
                    <span className="font-script text-xl text-primary/60">&</span>
                    <span className="font-script text-2xl">R</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="full"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="font-serif-wedding text-xl md:text-2xl font-light tracking-tight"
                  >
                    Hickory <span className="font-normal">&</span>{" "}
                    <span className="font-script text-2xl md:text-3xl">Rose</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Desktop links with editorial hover */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 font-sans-wedding text-[0.6875rem] tracking-[0.18em] uppercase font-light transition-all duration-200 hover:opacity-80 group ${
                        showSolidBg ? "text-foreground" : "text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-dot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                          style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.8), hsl(var(--gold) / 0.3))", boxShadow: "0 0 6px hsl(var(--gold) / 0.3)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {/* Gold shimmer underline on hover */}
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-6 transition-all duration-500 ease-out"
                        style={{
                          background: isActive
                            ? "transparent"
                            : "linear-gradient(90deg, transparent, hsl(var(--gold, 38 60% 55%) / 0.6), transparent)",
                        }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA button with diagonal gold shimmer */}
            <div className="hidden lg:block">
              <Link
                to="/inquire"
                className={`relative inline-flex items-center px-6 py-2.5 text-[0.6875rem] tracking-[0.18em] uppercase font-sans-wedding font-light border transition-all duration-300 overflow-hidden group ${
                  showSolidBg
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    : "border-white/60 text-white hover:bg-white/10 hover:border-white"
                }`}
              >
                {/* Solid fill on hover */}
                <span className={`absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${
                  showSolidBg ? "bg-primary" : "bg-white/10"
                }`} />
                {/* Diagonal gold shimmer sweep */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out pointer-events-none"
                  style={{
                    background: "linear-gradient(110deg, transparent 20%, hsl(var(--gold) / 0.15) 40%, hsl(var(--gold) / 0.25) 50%, hsl(var(--gold) / 0.15) 60%, transparent 80%)",
                  }}
                />
                <span className="relative z-10">Inquire</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-[60] p-2 transition-colors duration-200 ${
                isOpen ? "text-foreground" : showSolidBg ? "text-foreground" : "text-white"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Scroll progress — gold gradient */}
        <motion.div
          className="absolute bottom-0 left-0 h-px"
          style={{
            width: progressWidth,
            background: "linear-gradient(90deg, hsl(var(--primary) / 0.6), hsl(var(--gold, 38 60% 55%) / 0.5), hsl(var(--primary) / 0.2))",
          }}
        />

        {/* ── Mobile fullscreen overlay ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="fixed inset-0 bg-warm-white z-40 lg:hidden flex flex-col"
            >
              {/* Film grain texture */}
              <div
                className="absolute inset-0 opacity-[0.01] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                  backgroundSize: "150px 150px",
                }}
                aria-hidden="true"
              />

              {/* Corner accents */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-20 left-6 w-8 h-8 border-t border-l border-foreground/5 pointer-events-none"
                aria-hidden="true"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-24 right-6 w-8 h-8 border-b border-r border-foreground/5 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="h-px origin-left mx-6 mt-20"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.2), transparent)" }}
              />

              <div className="flex-1 flex flex-col items-center justify-center pb-24">
                {/* Mobile brand mark */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="mb-12"
                >
                  <p className="font-serif-wedding text-3xl font-light text-foreground tracking-tight text-center">
                    Hickory <span className="font-normal">&</span>{" "}
                    <span className="font-script text-4xl">Rose</span>
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="h-px w-12 mx-auto mt-4 origin-center"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)" }}
                  />
                </motion.div>

                {/* Links with staggered entrance */}
                <ul className="flex flex-col items-center gap-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.25 + index * 0.06,
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1.0],
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-6 font-serif-wedding text-2xl tracking-wide transition-all duration-200 ${
                          location.pathname === link.path
                            ? "text-primary"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                      >
                        <span className="inline-flex items-center gap-3">
                          <span className="font-sans-wedding text-[0.5rem] tracking-[0.15em] text-muted-foreground/20 tabular-nums">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {link.name}
                        </span>
                        {location.pathname === link.path && (
                          <span className="inline-block w-1 h-1 rounded-full bg-primary ml-2 -translate-y-1" />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + navLinks.length * 0.06 + 0.1, duration: 0.5 }}
                  className="mt-10"
                >
                  <Link
                    to="/inquire"
                    onClick={() => setIsOpen(false)}
                    className="relative inline-flex items-center px-10 py-3.5 text-[0.6875rem] tracking-[0.2em] uppercase font-sans-wedding font-light bg-primary text-primary-foreground hover:bg-sage-deep transition-colors duration-200 overflow-hidden group"
                  >
                    {/* Mobile gold shimmer sweep */}
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out pointer-events-none"
                      style={{
                        background: "linear-gradient(110deg, transparent 20%, hsl(var(--gold) / 0.2) 40%, hsl(var(--gold) / 0.35) 50%, hsl(var(--gold) / 0.2) 60%, transparent 80%)",
                      }}
                    />
                    <span className="relative z-10">Inquire</span>
                  </Link>
                </motion.div>

                {/* Trust signal */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="font-serif-wedding text-[0.65rem] italic text-muted-foreground/15 mt-6"
                >
                  Complimentary discovery call · 48hr response
                </motion.p>
              </div>

              {/* Bottom location + season */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="pb-8 text-center"
              >
                <p className="font-sans-wedding text-[0.625rem] tracking-[0.15em] uppercase text-muted-foreground/50 font-light">
                  Edmonton · Alberta · The Rockies
                </p>
                <p className="font-sans-wedding text-[0.5rem] tracking-[0.1em] text-muted-foreground/20 mt-1.5">
                  Now booking 2025 · 2026
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
