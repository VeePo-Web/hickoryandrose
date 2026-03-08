import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | Hickory & Rose";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main id="main-content">
      <Navigation variant="solid" />
      <section className="min-h-[85vh] flex flex-col items-center justify-center bg-background px-6 relative overflow-hidden">
        {/* Large decorative 404 */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute font-serif-wedding text-[20rem] md:text-[30rem] font-light text-foreground select-none pointer-events-none"
          aria-hidden="true"
        >
          404
        </motion.p>

        <div className="relative z-10 text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="w-12 h-px bg-primary mx-auto mb-8" />
            <p className="font-sans-wedding text-label uppercase text-muted-foreground tracking-[0.2em] mb-6">
              Page Not Found
            </p>
            <h1 className="font-serif-wedding text-display-lg text-foreground mb-6">
              This page seems to have wandered off.
            </h1>
            <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed mb-10">
              The page you're looking for doesn't exist — but we have plenty of
              beautiful things waiting for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.15em] uppercase font-semibold hover:bg-sage-deep transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Return Home
            </Link>
            <Link
              to="/inquire"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary text-primary font-sans-wedding text-xs tracking-[0.15em] uppercase font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
