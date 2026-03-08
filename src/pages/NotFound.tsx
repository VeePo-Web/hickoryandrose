import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";
import editorialFlorals from "@/assets/editorial-florals.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | Hickory & Rose — Edmonton Wedding Planner";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main id="main-content">
      <Navigation variant="solid" />
      <section className="min-h-[90vh] flex flex-col items-center justify-center bg-background px-6 relative overflow-hidden">
        {/* Large decorative 404 */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute font-serif-wedding text-[18rem] md:text-[28rem] font-light text-foreground select-none pointer-events-none"
          aria-hidden="true"
        >
          404
        </motion.p>

        {/* Decorative floral image — faded */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <img
            src={editorialFlorals}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <hr className="editorial-rule mx-auto mb-8" />
            <p className="font-overline text-muted-foreground mb-6">
              Page Not Found
            </p>
            <h1 className="font-serif-wedding text-display-lg text-foreground mb-6">
              This page seems to have wandered off.
            </h1>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed mb-10 font-light max-w-md mx-auto">
              The page you're looking for doesn't exist — but your perfect
              wedding planning journey is just a click away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.15em] uppercase font-light hover:bg-sage-deep transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Return Home
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary text-primary font-sans-wedding text-xs tracking-[0.15em] uppercase font-light hover:bg-primary hover:text-primary-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12 font-sans-wedding text-xs text-muted-foreground/50 font-light"
          >
            Or{" "}
            <Link to="/inquire" className="underline underline-offset-4 hover:text-primary transition-colors">
              reach out directly
            </Link>{" "}
            — we'd love to hear from you.
          </motion.p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
