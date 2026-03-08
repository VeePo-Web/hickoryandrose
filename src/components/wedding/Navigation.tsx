import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  variant?: "overlay" | "solid";
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Approach", path: "/approach" },
  { name: "FAQ", path: "/faq" },
];

const Navigation = ({ variant = "solid" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isOverlay = variant === "overlay";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const showSolidBg = !isOverlay || scrolled;

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolidBg
            ? "bg-warm-white/95 backdrop-blur-md shadow-subtle"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif-wedding text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${
                showSolidBg ? "text-foreground" : "text-white"
              }`}
            >
              Hickory <span className="font-normal">&</span>{" "}
              <span className="font-script text-2xl md:text-3xl">Rose</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 font-sans-wedding text-[0.6875rem] tracking-[0.18em] uppercase font-light transition-all duration-200 hover:opacity-80 group ${
                      showSolidBg ? "text-foreground" : "text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-300 ${
                        location.pathname === link.path
                          ? "w-6"
                          : "w-0 group-hover:w-4"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Inquire CTA — Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/inquire"
                className={`inline-flex items-center px-6 py-2.5 text-[0.6875rem] tracking-[0.18em] uppercase font-sans-wedding font-light border transition-all duration-200 ${
                  showSolidBg
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    : "border-white/60 text-white hover:bg-white/10 hover:border-white"
                }`}
              >
                Inquire
              </Link>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation — Cinematic Full Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="fixed inset-0 bg-warm-white z-40 lg:hidden flex flex-col"
            >
              {/* Decorative top accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="h-px bg-primary/20 origin-left mx-6 mt-20"
              />

              <div className="flex-1 flex flex-col items-center justify-center pb-24">
                {/* Brand wordmark in overlay */}
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
                    className="h-px w-12 bg-primary/30 mx-auto mt-4 origin-center"
                  />
                </motion.div>

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
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + navLinks.length * 0.06 + 0.1, duration: 0.5 }}
                  className="mt-10"
                >
                  <Link
                    to="/inquire"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center px-10 py-3.5 text-[0.6875rem] tracking-[0.2em] uppercase font-sans-wedding font-light bg-primary text-primary-foreground hover:bg-sage-deep transition-colors duration-200"
                  >
                    Inquire
                  </Link>
                </motion.div>
              </div>

              {/* Bottom footer in overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="pb-8 text-center"
              >
                <p className="font-sans-wedding text-[0.625rem] tracking-[0.15em] uppercase text-muted-foreground/50 font-light">
                  Edmonton · Alberta · The Rockies
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
