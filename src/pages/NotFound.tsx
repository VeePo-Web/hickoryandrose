import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main id="main-content">
      <Navigation variant="solid" />
      <section className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-6">
        <p className="font-sans-wedding text-label uppercase text-muted-foreground tracking-[0.2em] mb-6">
          Page Not Found
        </p>
        <h1 className="font-serif-wedding text-display-xl text-foreground mb-4">
          404
        </h1>
        <p className="font-sans-wedding text-base text-muted-foreground mb-10 max-w-md text-center leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back to
          somewhere beautiful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.15em] uppercase font-semibold hover:bg-sage-deep transition-colors duration-200"
          >
            Return Home
          </Link>
          <Link
            to="/inquire"
            className="inline-flex items-center px-8 py-3 border border-primary text-primary font-sans-wedding text-xs tracking-[0.15em] uppercase font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
