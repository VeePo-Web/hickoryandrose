import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  variant?: "overlay" | "solid";
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Travel & Stay", path: "/travel-stay" },
  { name: "Things to Do", path: "/things-to-do" },
  { name: "Registry", path: "/registry" },
];

const Navigation = ({ variant = "solid" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isOverlay = variant === "overlay";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const showSolidBg = !isOverlay || scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolidBg
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Names - Left side */}
          <Link 
            to="/" 
            className={`font-script text-2xl md:text-3xl transition-colors duration-300 hover:opacity-80 ${
              showSolidBg ? "text-wedding-sage" : "text-white"
            }`}
          >
            S & A
          </Link>

          {/* Desktop Navigation - Center */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 font-sans-wedding text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80 group ${
                    showSolidBg ? "text-wedding-text" : "text-white"
                  }`}
                >
                  {link.name}
                  {/* Active indicator */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-wedding-sage transition-all duration-300 ${
                      location.pathname === link.path 
                        ? "w-6" 
                        : "w-0 group-hover:w-4"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* RSVP Button - Right side (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/rsvp"
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-sans-wedding border transition-all duration-300 ${
                showSolidBg
                  ? "border-wedding-sage text-wedding-sage hover:bg-wedding-sage hover:text-white"
                  : "border-white text-white hover:bg-white/20"
              }`}
            >
              RSVP
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              showSolidBg ? "text-wedding-text" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-wedding-cream-dark"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-6 py-3.5 font-sans-wedding text-sm tracking-[0.15em] uppercase text-wedding-text hover:bg-wedding-cream transition-colors ${
                      location.pathname === link.path
                        ? "font-semibold bg-wedding-cream border-l-4 border-wedding-sage"
                        : "border-l-4 border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              {/* Mobile RSVP Button */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="px-6 pt-4"
              >
                <Link
                  to="/rsvp"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-center text-sm tracking-[0.15em] uppercase font-sans-wedding bg-wedding-sage text-white hover:bg-wedding-sage-light transition-colors"
                >
                  RSVP
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
