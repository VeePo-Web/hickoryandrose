import { useState, useEffect, useCallback, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { z } from "zod";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import { toast } from "@/hooks/use-toast";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";
import GoldFrame from "@/components/wedding/GoldFrame";
import BreathingDiamond from "@/components/wedding/BreathingDiamond";
import InquireStepIndicator from "@/components/wedding/InquireStepIndicator";
import InquireCelebration from "@/components/wedding/InquireCelebration";
import inquireHeroImage from "@/assets/inquire-hero.jpg";
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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
    `w-full px-0 py-3 bg-transparent border-0 border-b font-sans-wedding text-base md:text-lg text-foreground font-light placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 transition-colors duration-300 ${
      errors[field] ? "border-destructive" : "border-border/60 focus:border-transparent"
    }`;

  /** Wraps an input to add the gold underline focus effect */
  const InputWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="input-gold-focus relative">{children}</div>
  );

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
          <InputWrapper>
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
          </InputWrapper>
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
          <InputWrapper>
            <input
              type="text"
              id="partner"
              name="partner"
              value={formData.partner}
              onChange={(e) => set("partner", e.target.value)}
              className={inputCls("partner")}
              placeholder="First & last name"
            />
          </InputWrapper>
        </div>

        <div>
          <label htmlFor="email" className="font-overline text-muted-foreground mb-2 block">
            Email Address *
          </label>
          <InputWrapper>
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
          </InputWrapper>
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
            <InputWrapper>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={(e) => set("date", e.target.value)}
                className={inputCls("date")}
                placeholder="Month / Year or TBD"
              />
            </InputWrapper>
          </div>
          <div>
            <label htmlFor="venue" className="font-overline text-muted-foreground mb-2 block">
              Venue
            </label>
            <InputWrapper>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={(e) => set("venue", e.target.value)}
                className={inputCls("venue")}
                placeholder="Venue name or TBD"
              />
            </InputWrapper>
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
        <InputWrapper>
          <input
            type="text"
            id="referral"
            name="referral"
            value={formData.referral}
            onChange={(e) => set("referral", e.target.value)}
            className={inputCls("referral")}
            placeholder="Instagram, referral, Google…"
          />
        </InputWrapper>
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
        <InputWrapper>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => set("message", e.target.value)}
            className={`${inputCls("message")} resize-none border rounded-none`}
            placeholder="What does your dream wedding look like? What's most important to you?"
          />
        </InputWrapper>
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
      <Navigation variant="overlay" />

      {/* ─── Cinematic Parallax Hero ─── */}
      <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden grain-overlay vignette">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={inquireHeroImage}
            alt="Calligraphy envelope with sage wax seal, gold pen, eucalyptus, and vintage ring box on cream linen"
            className="w-full h-[120%] object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/10" />
        </motion.div>

        {/* Large parallax watermark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <span className="font-serif-wedding text-[14rem] md:text-[22rem] text-white leading-none tracking-tight whitespace-nowrap">
            Inquire
          </span>
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
          style={{ opacity: heroOpacity }}
        >
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-white/50 mb-4">
              <span className="inline-flex items-center gap-3">
                <motion.span
                  className="w-8 h-px bg-white/30 origin-right"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                Begin Your Story
                <motion.span
                  className="w-8 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6">
              Let's Plan Something Beautiful
            </h1>
            <p className="font-sans-wedding text-body-sm text-white/60 leading-relaxed max-w-xl mx-auto font-light">
              No commitment — just a warm conversation about your wedding day.
            </p>
          </ScrollReveal>
        </motion.div>

        <GoldFrame inset="20px" delay={1} />

        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-4 py-3 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {["Complimentary Call", "No Commitment", "48hr Response"].map((t, i) => (
            <span key={t} className="font-sans-wedding text-[0.5rem] tracking-[0.18em] uppercase text-white/30 flex items-center gap-4">
              {i > 0 && <BreathingDiamond size={4} />}
              {t}
            </span>
          ))}
        </motion.div>

        <motion.span
          className="absolute bottom-8 right-8 font-serif-wedding text-sm text-white/15 tracking-widest z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          06
        </motion.span>
      </section>

      {/* ─── What to Expect — editorial micro-section ─── */}
      <section className="py-10 md:py-14 bg-card border-b border-border/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { num: "01", title: "Share your story", desc: "Fill out the form below — it takes about 3 minutes." },
                { num: "02", title: "We'll be in touch", desc: "Expect a warm, personal response within 48 hours." },
                { num: "03", title: "Discovery call", desc: "A relaxed 30-minute conversation about your vision — no obligation." },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="font-serif-wedding text-2xl font-light shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--gold) / 0.5), hsl(var(--primary) / 0.3))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p className="font-sans-wedding text-sm font-medium text-foreground mb-1">{item.title}</p>
                    <p className="font-sans-wedding text-xs text-muted-foreground/60 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Form Section ─── */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left — editorial image (desktop) */}
            <div className="hidden lg:block lg:col-span-2 sticky top-28">
              <div className="relative">
                {/* Ambient gold glow behind image */}
                <motion.div
                  className="absolute -inset-6 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.06 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  style={{ background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.15), transparent 70%)" }}
                  aria-hidden="true"
                />

                <motion.div
                  initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="relative group"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={inquireEditorialImage}
                      alt="Wedding planner working with mood boards, sage fabric swatches, and floral samples"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={1000}
                    />
                    {/* Gold corner frames on hover */}
                    <div className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                      <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.35), transparent)" }} />
                      <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                      <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.35), transparent)" }} />
                      <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    </div>
                  </div>
                </motion.div>

                {/* Parallax watermark */}
                <motion.div
                  className="absolute -bottom-8 -right-4 pointer-events-none select-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.025 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                >
                  <span className="font-serif-wedding text-[6rem] text-foreground leading-none tracking-tight italic whitespace-nowrap">
                    Begin
                  </span>
                </motion.div>
              </div>

              <div className="mt-8 relative">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-10 h-px mb-4 origin-left"
                  style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.3), hsl(var(--primary) / 0.1))" }}
                />
                <p className="font-serif-wedding text-lg italic text-muted-foreground/60 leading-relaxed">
                  "Every great wedding starts with a simple conversation."
                </p>
                <p className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/25 mt-3">
                  — Hickory & Rose
                </p>
              </div>
            </div>

            {/* Right — form wizard */}
            <div className="lg:col-span-3">
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
                <div className="h-px bg-border/40 w-full overflow-hidden relative">
                  <motion.div
                    className="h-full relative"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                  >
                    {/* Traveling shimmer on progress bar */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.3) 50%, transparent 100%)" }}
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    />
                  </motion.div>
                  {/* Gold glow beneath progress */}
                  <motion.div
                    className="absolute top-0 left-0 h-[3px] blur-[2px] pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.15))",
                    }}
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
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.18em] uppercase font-light hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.15), transparent 60%)" }} />
                      <span className="relative z-10">Continue</span>
                      <ArrowRight size={14} strokeWidth={1.5} className="relative z-10" />
                    </button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-10 py-4 text-primary-foreground font-sans-wedding text-xs tracking-[0.18em] uppercase font-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 relative overflow-hidden group"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold) / 0.6), hsl(var(--primary)))",
                      }}
                    >
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.2), transparent 50%)" }} />
                      <span className="relative z-10">Send Inquiry</span>
                      <Heart size={14} strokeWidth={1.5} className="relative z-10" />
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

      {/* Trust signals before footer */}
      <section className="py-8 md:py-10 bg-card border-t border-border/20 relative overflow-hidden">
        {/* Subtle radial gold ambient glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.2), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl relative">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "48hr", label: "Response Time" },
              { value: "100%", label: "Response Rate" },
              { value: "Free", label: "Discovery Call" },
            ].map((stat, i) => (
              <div key={stat.label} className="relative">
                {/* Gold diamond between columns (desktop) */}
                {i > 0 && (
                  <span
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rotate-45 hidden md:block"
                    style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.08))" }}
                  />
                )}
                <p className="font-serif-wedding text-lg md:text-xl text-foreground/50 font-light">{stat.value}</p>
                <motion.div
                  className="w-4 h-px mx-auto my-1.5 origin-center"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.25), transparent)" }}
                />
                <p className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-muted-foreground/30 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default Inquire;
