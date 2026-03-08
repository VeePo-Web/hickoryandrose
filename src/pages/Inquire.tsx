import { useState, useEffect, useCallback } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";
import { toast } from "@/hooks/use-toast";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";
import inquireEditorialImage from "@/assets/inquire-editorial.jpg";

/* ─── Schema ─── */
const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  partner: z.string().max(100).optional(),
  date: z.string().max(50).optional(),
  venue: z.string().max(100).optional(),
  guests: z.string().optional(),
  service: z.string().optional(),
  referral: z.string().max(200).optional(),
  message: z.string().max(1000).optional(),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const serviceOptions = [
  { label: "Day-Of Coordination", desc: "You've planned it all — we execute flawlessly." },
  { label: "Partial Planning", desc: "Guidance where you need it, freedom where you don't." },
  { label: "Full-Service Planning", desc: "We handle every detail from vision to vow." },
  { label: "Not sure yet", desc: "Let's figure it out together on a call." },
];

const guestRanges = ["Under 50", "50–100", "100–150", "150–200", "200+"];

const TOTAL_STEPS = 4;

/* ─── Step transition variants ─── */
const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
};

const Inquire = () => {
  useEffect(() => {
    setPageMeta({
      title: "Inquire — Start Planning Your Wedding | Hickory & Rose Edmonton",
      description:
        "Ready to plan your dream wedding? Reach out to Hickory & Rose for a complimentary discovery call. No pressure, just a warm conversation about your vision.",
      path: "/inquire",
    });
  }, []);

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<InquiryForm>({
    name: "", email: "", partner: "", date: "", venue: "",
    guests: "", service: "", referral: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = useCallback(
    (field: keyof InquiryForm, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    [errors]
  );

  /* ─── Navigation ─── */
  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryForm, string>> = {};

    if (step === 0) {
      if (!formData.name.trim() || formData.name.trim().length < 2)
        newErrors.name = "Please enter your full name.";
      if (!formData.email.trim() || !z.string().email().safeParse(formData.email.trim()).success)
        newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const firstKey = Object.keys(newErrors)[0];
      document.getElementById(firstKey)?.focus();
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const prev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = () => {
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      toast({ title: "Please check your details", description: "Name and email are required." });
      setStep(0);
      return;
    }
    setSubmitted(true);
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll be in touch within 48 hours to schedule a discovery call.",
    });
  };

  /* ─── Shared input styles ─── */
  const inputCls = (field: keyof InquiryForm) =>
    `w-full px-0 py-3 bg-transparent border-0 border-b font-sans-wedding text-base md:text-lg text-foreground font-light placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 transition-colors duration-200 ${
      errors[field] ? "border-destructive" : "border-border/60 focus:border-primary"
    }`;

  /* ─── Pill selector ─── */
  const PillSelect = ({
    options,
    value,
    onChange,
  }: {
    options: string[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(value === opt ? "" : opt)}
          className={`px-5 py-2.5 font-sans-wedding text-xs tracking-[0.12em] uppercase font-light border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            value === opt
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  /* ─── Progress bar ─── */
  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  /* ─── Success state ─── */
  if (submitted) {
    return (
      <main id="main-content">
        <Navigation variant="solid" />
        <section className="min-h-[80vh] flex items-center justify-center bg-background px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.2, 0], scale: [0.5, 1.5, 2] }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full border border-primary"
              />
              <Heart size={40} strokeWidth={1} className="text-primary relative z-10" />
            </div>

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
                  <span className="font-serif-wedding text-lg text-primary/30 shrink-0">
                    {item.step}
                  </span>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground font-light leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-12 h-px bg-primary/30 mx-auto mb-8 origin-center"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="font-sans-wedding text-xs text-muted-foreground/50 font-light"
            >
              In the meantime, explore our{" "}
              <a
                href="/portfolio"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                portfolio
              </a>{" "}
              or learn more about our{" "}
              <a
                href="/approach"
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                approach
              </a>
              .
            </motion.p>
          </motion.div>
        </section>
        <Footer />
      </main>
    );
  }

  /* ─── Step content ─── */
  const steps = [
    /* Step 0 — About You (required) */
    <div key="step-0" className="space-y-8">
      <div>
        <p className="font-overline text-primary/60 mb-1">About You</p>
        <h2 className="font-serif-wedding text-2xl md:text-3xl text-foreground font-light">
          Let's start with the basics.
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="font-overline text-muted-foreground mb-2 block">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputCls("name")}
            placeholder="First & last name"
            autoFocus
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 font-sans-wedding text-xs text-destructive" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="partner" className="font-overline text-muted-foreground mb-2 block">
            Partner's Name
          </label>
          <input
            type="text"
            id="partner"
            name="partner"
            value={formData.partner}
            onChange={(e) => set("partner", e.target.value)}
            className={inputCls("partner")}
            placeholder="First & last name"
          />
        </div>

        <div>
          <label htmlFor="email" className="font-overline text-muted-foreground mb-2 block">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputCls("email")}
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 font-sans-wedding text-xs text-destructive" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>
    </div>,

    /* Step 1 — Wedding Details */
    <div key="step-1" className="space-y-8">
      <div>
        <p className="font-overline text-primary/60 mb-1">Wedding Details</p>
        <h2 className="font-serif-wedding text-2xl md:text-3xl text-foreground font-light">
          Tell us about your day.
        </h2>
        <p className="font-sans-wedding text-sm text-muted-foreground/60 font-light mt-2">
          All optional — share what you know so far.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="font-overline text-muted-foreground mb-2 block">
              Wedding Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={(e) => set("date", e.target.value)}
              className={inputCls("date")}
              placeholder="Month / Year or TBD"
            />
          </div>
          <div>
            <label htmlFor="venue" className="font-overline text-muted-foreground mb-2 block">
              Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={(e) => set("venue", e.target.value)}
              className={inputCls("venue")}
              placeholder="Venue name or TBD"
            />
          </div>
        </div>

        <div>
          <p className="font-overline text-muted-foreground mb-3">Estimated Guest Count</p>
          <PillSelect
            options={guestRanges}
            value={formData.guests || ""}
            onChange={(v) => set("guests", v)}
          />
        </div>
      </div>
    </div>,

    /* Step 2 — Service & Source */
    <div key="step-2" className="space-y-8">
      <div>
        <p className="font-overline text-primary/60 mb-1">Your Needs</p>
        <h2 className="font-serif-wedding text-2xl md:text-3xl text-foreground font-light">
          What kind of support are you looking for?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {serviceOptions.map((svc) => (
          <button
            key={svc.label}
            type="button"
            onClick={() => set("service", formData.service === svc.label ? "" : svc.label)}
            className={`text-left p-5 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 group ${
              formData.service === svc.label
                ? "border-primary bg-primary/[0.04]"
                : "border-border/60 hover:border-primary/40"
            }`}
          >
            <p
              className={`font-sans-wedding text-sm font-light tracking-wide mb-1 transition-colors ${
                formData.service === svc.label ? "text-foreground" : "text-foreground/80"
              }`}
            >
              {svc.label}
            </p>
            <p className="font-sans-wedding text-xs text-muted-foreground/60 font-light leading-relaxed">
              {svc.desc}
            </p>
          </button>
        ))}
      </div>

      <div>
        <label htmlFor="referral" className="font-overline text-muted-foreground mb-2 block">
          How Did You Find Us?
        </label>
        <input
          type="text"
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={(e) => set("referral", e.target.value)}
          className={inputCls("referral")}
          placeholder="Instagram, referral, Google…"
        />
      </div>
    </div>,

    /* Step 3 — Vision & Submit */
    <div key="step-3" className="space-y-8">
      <div>
        <p className="font-overline text-primary/60 mb-1">Your Vision</p>
        <h2 className="font-serif-wedding text-2xl md:text-3xl text-foreground font-light">
          Anything else you'd like us to know?
        </h2>
        <p className="font-sans-wedding text-sm text-muted-foreground/60 font-light mt-2">
          Totally optional — we'll cover everything on our discovery call.
        </p>
      </div>

      <div>
        <label htmlFor="message" className="font-overline text-muted-foreground mb-2 block">
          Tell Us About Your Vision
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${inputCls("message")} resize-none border rounded-none`}
          placeholder="What does your dream wedding look like? What's most important to you?"
        />
      </div>

      {/* Summary preview */}
      <div className="border-t border-border/40 pt-6">
        <p className="font-overline text-muted-foreground/40 mb-3">Quick Summary</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 font-sans-wedding text-sm text-muted-foreground font-light">
          <span className="text-muted-foreground/50">Name</span>
          <span className="text-foreground">{formData.name || "—"}</span>
          <span className="text-muted-foreground/50">Email</span>
          <span className="text-foreground">{formData.email || "—"}</span>
          {formData.date && (
            <>
              <span className="text-muted-foreground/50">Date</span>
              <span className="text-foreground">{formData.date}</span>
            </>
          )}
          {formData.service && (
            <>
              <span className="text-muted-foreground/50">Service</span>
              <span className="text-foreground">{formData.service}</span>
            </>
          )}
          {formData.guests && (
            <>
              <span className="text-muted-foreground/50">Guests</span>
              <span className="text-foreground">{formData.guests}</span>
            </>
          )}
        </div>
      </div>
    </div>,
  ];

  return (
    <main id="main-content">
      <Navigation variant="solid" />

      <section className="bg-background min-h-screen pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left — editorial image (desktop) */}
            <div className="hidden lg:block lg:col-span-2 sticky top-28">
              <motion.div
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={inquireEditorialImage}
                    alt="Wedding planner working with mood boards, sage fabric swatches, and floral samples"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    width={800}
                    height={1000}
                  />
                </div>
              </motion.div>
              <div className="mt-6">
                <div className="w-10 h-px bg-primary/20 mb-4" />
                <p className="font-serif-wedding text-lg italic text-muted-foreground/60 leading-relaxed">
                  "Every great wedding starts with a simple conversation."
                </p>
              </div>
            </div>

            {/* Right — form wizard */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="mb-10">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-overline text-muted-foreground/40 mb-3"
                >
                  Start Here
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-serif-wedding text-display-lg text-foreground mb-3"
                >
                  Let's Plan Something Beautiful
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="font-sans-wedding text-sm text-muted-foreground/60 font-light"
                >
                  No commitment — just a warm conversation about your wedding day.
                </motion.p>
              </div>

              {/* Progress bar */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-sans-wedding text-xs text-muted-foreground/40 tracking-widest uppercase font-light">
                    Step {step + 1} of {TOTAL_STEPS}
                  </p>
                  <p className="font-sans-wedding text-xs text-muted-foreground/40 font-light">
                    {step === 0 && "About You"}
                    {step === 1 && "Wedding Details"}
                    {step === 2 && "Your Needs"}
                    {step === 3 && "Your Vision"}
                  </p>
                </div>
                <div className="h-px bg-border/40 w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                  />
                </div>
              </div>

              {/* Step content */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (step === TOTAL_STEPS - 1) handleSubmit();
                  else next();
                }}
                noValidate
              >
                <div className="min-h-[340px] relative">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                    >
                      {steps[step]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/30">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={prev}
                      className="inline-flex items-center gap-2 font-sans-wedding text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-light focus:outline-none focus:ring-2 focus:ring-primary/30 px-2 py-2"
                    >
                      <ArrowLeft size={14} strokeWidth={1.5} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < TOTAL_STEPS - 1 ? (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.18em] uppercase font-light hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                    >
                      Continue
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.18em] uppercase font-light hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                    >
                      Send Inquiry
                      <Heart size={14} strokeWidth={1.5} />
                    </motion.button>
                  )}
                </div>

                <p className="font-sans-wedding text-xs text-muted-foreground/40 mt-4 text-center font-light">
                  We respond to every inquiry within 48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Inquire;
