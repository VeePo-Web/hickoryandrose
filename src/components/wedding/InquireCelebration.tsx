import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import BreathingDiamond from "./BreathingDiamond";
import Navigation from "./Navigation";
import Footer from "./Footer";

const InquireCelebration = () => (
  <main id="main-content">
    <Navigation variant="solid" />
    <section className="min-h-[80vh] flex items-center justify-center bg-background px-6 py-32 relative overflow-hidden">
      {/* Gold shimmer burst */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0] }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{ background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.2), transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Breathing diamond cascade */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.2, 0.5], y: [0, -60 - i * 25, -120 - i * 40] }}
            transition={{ duration: 2.5, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            style={{
              left: `${45 + (i % 3) * 5}%`,
              top: "55%",
            }}
          >
            <span
              className="block w-2 h-2 rotate-45"
              style={{ background: `linear-gradient(135deg, hsl(var(--gold) / ${0.4 - i * 0.06}), hsl(var(--gold) / 0.1))` }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg relative z-10"
      >
        <div className="relative inline-block mb-8">
          {/* Expanding ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.5, 2.5, 3.5] }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full"
            style={{ border: "1px solid hsl(var(--gold) / 0.3)" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.15, 0], scale: [0.5, 1.8, 2.8] }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full"
            style={{ border: "1px solid hsl(var(--gold) / 0.2)" }}
          />
          <Heart size={40} strokeWidth={1} className="text-primary relative z-10" />
        </div>

        <BreathingDiamond size={8} className="mx-auto mb-6" />

        <h1 className="font-serif-wedding text-display-lg text-foreground mb-4">
          Thank you, beautiful.
        </h1>
        <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-12">
          Your inquiry has been received. Here's what happens next:
        </p>

        <div className="text-left max-w-sm mx-auto space-y-6 mb-12">
          {[
            { step: "01", text: "We'll review your details and respond within 48 hours." },
            { step: "02", text: "We'll schedule a complimentary discovery call." },
            { step: "03", text: "If we're a fit, you'll receive a custom proposal." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="flex gap-4 items-start"
            >
              <span
                className="font-serif-wedding text-lg shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--gold) / 0.6), hsl(var(--primary) / 0.4))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.step}
              </span>
              <p className="font-sans-wedding text-body-sm text-muted-foreground font-light leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gold separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-12 h-px mx-auto mb-8 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="font-sans-wedding text-xs text-muted-foreground/50 font-light"
        >
          In the meantime, explore our{" "}
          <a href="/portfolio" className="underline underline-offset-4 hover:text-primary transition-colors">portfolio</a>{" "}
          or learn more about our{" "}
          <a href="/approach" className="underline underline-offset-4 hover:text-primary transition-colors">approach</a>.
        </motion.p>
      </motion.div>
    </section>
    <Footer />
  </main>
);

export default InquireCelebration;
