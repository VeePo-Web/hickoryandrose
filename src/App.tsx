import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import SmoothScrollProvider from "./components/wedding/SmoothScrollProvider";
import LoadingScreen from "./components/wedding/LoadingScreen";
import PageTransition from "./components/wedding/PageTransition";
import { scheduleIdle } from "./lib/idle";

const Toaster = lazy(() => import("@/components/ui/toaster").then((module) => ({ default: module.Toaster })));
const CursorFollower = lazy(() => import("./components/wedding/CursorFollower"));

// Lazy-loaded routes for code-splitting
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Approach = lazy(() => import("./pages/Approach"));
const Journal = lazy(() => import("./pages/Journal"));
const Inquire = lazy(() => import("./pages/Inquire"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/approach" element={<PageTransition><Approach /></PageTransition>} />
        <Route path="/journal" element={<PageTransition><Journal /></PageTransition>} />
        <Route path="/inquire" element={<PageTransition><Inquire /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </Suspense>
  );
};

const IdleClientEffects = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let cleanupIdle = () => {};
    const timeoutId = window.setTimeout(() => {
      cleanupIdle = scheduleIdle(() => setEnabled(true), 4000);
    }, 6000);

    return () => {
      window.clearTimeout(timeoutId);
      cleanupIdle();
    };
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <Toaster />
      {!window.matchMedia("(pointer: coarse)").matches && <CursorFollower />}
    </Suspense>
  );
};

const App = () => (
  <BrowserRouter>
    <LoadingScreen>
      <SmoothScrollProvider>
        <IdleClientEffects />
        <AnimatedRoutes />
      </SmoothScrollProvider>
    </LoadingScreen>
  </BrowserRouter>
);

export default App;
