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
              className={`lg:hidden p-2 transition-colors duration-200 ${
                showSolidBg ? "text-foreground" : "text-white"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation — Full Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-16 bg-warm-white z-40 lg:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full pb-20">
                <ul className="flex flex-col items-center gap-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`font-serif-wedding text-2xl tracking-wide transition-colors ${
                          location.pathname === link.path
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                    className="mt-4"
                  >
                    <Link
                      to="/inquire"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center px-8 py-3 text-[0.6875rem] tracking-[0.18em] uppercase font-sans-wedding font-light bg-primary text-primary-foreground hover:bg-sage-deep transition-colors"
                    >
                      Inquire
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
