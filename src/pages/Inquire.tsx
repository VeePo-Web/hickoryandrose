import { useState, useEffect, useRef } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion } from "framer-motion";
import { z } from "zod";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import { toast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";
import ImageReveal from "@/components/wedding/ImageReveal";
import inquireEditorialImage from "@/assets/inquire-editorial.jpg";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  partner: z.string().optional(),
  date: z.string().optional(),
  venue: z.string().optional(),
  guests: z.string().optional(),
  service: z.string().optional(),
  referral: z.string().optional(),
  message: z.string().optional(),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const serviceOptions = [
  "Day-Of Coordination",
  "Partial Planning",
  "Full-Service Planning",
  "Not sure yet",
];

const guestRanges = ["Under 50", "50 – 100", "100 – 150", "150 – 200", "200+"];

const Inquire = () => {
  useEffect(() => {
    setPageMeta({
      title: "Inquire — Start Planning Your Wedding | Hickory & Rose Edmonton",
      description: "Ready to plan your dream wedding? Reach out to Hickory & Rose for a complimentary discovery call. No pressure, just a warm conversation about your vision.",
      path: "/inquire",
    });
  }, []);

  const [formData, setFormData] = useState<InquiryForm>({
    name: "", email: "", partner: "", date: "", venue: "",
    guests: "", service: "", referral: "", message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryForm, string>>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof InquiryForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof InquiryForm;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      const firstErrorField = result.error.issues[0]?.path[0] as string;
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.focus();
      }
      return;
    }

    setErrors({});
    setSubmitted(true);
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll be in touch within 48 hours to schedule a discovery call.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof InquiryForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field: keyof InquiryForm) =>
    `w-full px-4 py-3.5 bg-transparent border font-sans-wedding text-body text-foreground font-light placeholder:text-brand-text-light/60 focus:outline-none focus:ring-1 transition-all duration-200 ${
      errors[field]
        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
        : "border-border focus:border-primary focus:ring-primary/20"
    }`;

  const renderField = (
    id: keyof InquiryForm,
    label: string,
    required: boolean,
    element: React.ReactNode
  ) => (
    <div className="relative">
      <motion.label
        htmlFor={id}
        animate={{
          color: errors[id]
            ? "hsl(0 72% 51%)"
            : focusedField === id
            ? "hsl(140 25% 35%)"
            : undefined,
        }}
        className="block font-overline text-muted-foreground mb-2.5 transition-colors"
      >
        {label}{required && " *"}
      </motion.label>
      {element}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focusedField === id ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left ${
          errors[id] ? "bg-destructive" : "bg-primary"
        }`}
      />
      {errors[id] && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1.5 font-sans-wedding text-xs text-destructive font-light"
          role="alert"
          id={`${id}-error`}
        >
          {errors[id]}
        </motion.p>
      )}
    </div>
  );

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
                  <span className="font-serif-wedding text-lg text-primary/30 shrink-0">{item.step}</span>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
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
              <a href="/portfolio" className="underline underline-offset-4 hover:text-primary transition-colors">portfolio</a>
              {" "}or learn more about our{" "}
              <a href="/approach" className="underline underline-offset-4 hover:text-primary transition-colors">approach</a>.
            </motion.p>
          </motion.div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main id="main-content">
      <Navigation variant="solid" />

      {/* Hero — clean */}
      <section className="bg-background pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground/50 mb-4">
              Start Here
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              Let's Plan Something Beautiful
            </h1>
            <p className="font-sans-wedding text-body text-muted-foreground leading-relaxed max-w-xl mx-auto font-light">
              Tell us about your vision. There's no commitment — just a warm
              conversation about your wedding day and how we can help.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-16 h-px bg-primary/30 mx-auto mt-10 origin-center"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* What to Expect — horizontal ruled rows instead of icon grid */}
      <section className="py-12 md:py-16 bg-card border-b border-border/60">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <p className="font-overline text-muted-foreground/40 mb-8 text-center">What to Expect</p>
            <div className="space-y-0">
              {[
                { num: "01", text: "We'll respond within 48 hours to learn more about your day." },
                { num: "02", text: "We'll schedule a complimentary discovery call — relaxed, no pressure." },
                { num: "03", text: "If we're a fit, we'll send a custom proposal tailored to you." },
                { num: "04", text: "We begin planning your beautiful, stress-free wedding day." },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-baseline gap-4 md:gap-6 py-4 border-t border-border/40"
                >
                  <span className="font-serif-wedding text-lg text-primary/25 shrink-0">{item.num}</span>
                  <p className="font-sans-wedding text-body-sm text-muted-foreground font-light">{item.text}</p>
                </motion.div>
              ))}
              <div className="border-t border-border/40" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Editorial image — desktop only */}
            <div className="hidden lg:block lg:col-span-2 sticky top-28">
              <ScrollReveal>
                <ImageReveal direction="left">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={inquireEditorialImage}
                      alt="Wedding planner working with mood boards, sage fabric swatches, and floral samples"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </ImageReveal>
                <div className="mt-6">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-10 h-px bg-primary/20 mb-4 origin-left"
                  />
                  <p className="font-serif-wedding text-lg italic text-muted-foreground/60 leading-relaxed">
                    "Every great wedding starts with a simple conversation."
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
          <div ref={errorSummaryRef} aria-live="polite" className="sr-only">
            {Object.keys(errors).length > 0 && (
              <p>
                There {Object.keys(errors).length === 1 ? "is 1 error" : `are ${Object.keys(errors).length} errors`} in your form. Please correct them to continue.
              </p>
            )}
          </div>

          <ScrollReveal>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderField("name", "Your Name", true,
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)}
                    className={inputClasses("name")} placeholder="First & last name"
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                )}
                {renderField("partner", "Partner's Name", false,
                  <input type="text" id="partner" name="partner" value={formData.partner} onChange={handleChange}
                    onFocus={() => setFocusedField("partner")} onBlur={() => setFocusedField(null)}
                    className={inputClasses("partner")} placeholder="First & last name" />
                )}
              </div>

              {renderField("email", "Email Address", true,
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                  onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
                  className={inputClasses("email")} placeholder="your@email.com"
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderField("date", "Wedding Date", false,
                  <input type="text" id="date" name="date" value={formData.date} onChange={handleChange}
                    onFocus={() => setFocusedField("date")} onBlur={() => setFocusedField(null)}
                    className={inputClasses("date")} placeholder="Month / Year or TBD" />
                )}
                {renderField("venue", "Venue", false,
                  <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange}
                    onFocus={() => setFocusedField("venue")} onBlur={() => setFocusedField(null)}
                    className={inputClasses("venue")} placeholder="Venue name or TBD" />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderField("guests", "Estimated Guest Count", false,
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange}
                    onFocus={() => setFocusedField("guests")} onBlur={() => setFocusedField(null)}
                    className={`${inputClasses("guests")} appearance-none`}>
                    <option value="">Select range</option>
                    {guestRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                )}
                {renderField("service", "Service Interest", false,
                  <select id="service" name="service" value={formData.service} onChange={handleChange}
                    onFocus={() => setFocusedField("service")} onBlur={() => setFocusedField(null)}
                    className={`${inputClasses("service")} appearance-none`}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                )}
              </div>

              {renderField("referral", "How Did You Find Us?", false,
                <input type="text" id="referral" name="referral" value={formData.referral} onChange={handleChange}
                  onFocus={() => setFocusedField("referral")} onBlur={() => setFocusedField(null)}
                  className={inputClasses("referral")} placeholder="Instagram, referral, Google, etc." />
              )}

              {renderField("message", "Tell Us About Your Vision", false,
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
                  onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)}
                  className={`${inputClasses("message")} resize-none`} placeholder="What does your dream wedding look like? What's most important to you?" />
              )}

              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-12 py-4 bg-primary text-primary-foreground font-sans-wedding text-[0.6875rem] tracking-[0.2em] uppercase font-light hover:bg-sage-deep transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Send Inquiry
                </motion.button>
                <p className="font-sans-wedding text-xs text-muted-foreground/50 mt-4">
                  We respond to every inquiry within 48 hours.
                </p>
              </div>
            </form>
          </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Inquire;
