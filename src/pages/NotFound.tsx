import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";
import MagneticButton from "@/components/wedding/MagneticButton";
import notfoundImage from "@/assets/notfound-editorial.jpg";

const suggestedPages = [
  { label: "Our Services", path: "/services", desc: "Day-of, partial, and full-service planning" },
  { label: "Portfolio", path: "/portfolio", desc: "See our work in refined rustic elegance" },
  { label: "Our Approach", path: "/approach", desc: "How we plan your perfect day" },
];

const NotFound = () => {
  const location = useLocation();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    document.title = "Page Not Found | Hickory & Rose — Edmonton Wedding Planner";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main id="main-content">
      <Navigation variant="overlay" />

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay vignette"
      >
        {/* Parallax editorial background */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={notfoundImage}
            alt=""
            className="w-full h-[120%] object-cover"
            loading="eager"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </motion.div>

        {/* Large decorative 404 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute font-serif-wedding text-[14rem] md:text-[22rem] font-light text-white select-none pointer-events-none"
          aria-hidden="true"
        >
          404
        </motion.p>

        <div className="relative z-10 text-center max-w-xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              className="w-12 h-px bg-white/30 mx-auto mb-6 origin-center"
            />
            <p className="font-sans-wedding text-label uppercase text-white/50 mb-6">
              <span className="inline-flex items-center gap-3">
                <span className="w-6 h-px bg-white/30" />
                Page Not Found
                <span className="w-6 h-px bg-white/30" />
              </span>
            </p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6">
              This page seems to have wandered off.
            </h1>
            <p className="font-sans-wedding text-body-sm text-white/60 leading-relaxed mb-10 font-light max-w-md mx-auto">
              The page you're looking for doesn't exist — but your perfect
              wedding planning journey is just a click away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <MagneticButton to="/" variant="outline-light">
              Return Home
            </MagneticButton>
            <MagneticButton to="/inquire" variant="outline-light">
              Start a Conversation
            </MagneticButton>
          </motion.div>

          {/* Suggested pages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-16 h-px bg-white/15 mx-auto mb-8 origin-center"
            />
            <p className="font-overline text-white/30 mb-6">Or explore</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {suggestedPages.map((page, i) => (
                <motion.div
                  key={page.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                >
                  <Link
                    to={page.path}
                    className="block p-4 border border-white/10 hover:border-white/25 transition-colors duration-300 group"
                  >
                    <p className="font-sans-wedding text-sm text-white/80 group-hover:text-white transition-colors font-light mb-1">
                      {page.label}
                    </p>
                    <p className="font-sans-wedding text-xs text-white/30 font-light">
                      {page.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
