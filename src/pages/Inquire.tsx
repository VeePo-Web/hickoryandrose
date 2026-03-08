import { useState, useEffect } from "react";
import Navigation from "@/components/wedding/Navigation";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import { toast } from "@/hooks/use-toast";
import { MessageSquare, Calendar, FileText, Heart } from "lucide-react";

const serviceOptions = [
  "Day-Of Coordination",
  "Partial Planning",
  "Full-Service Planning",
  "Not sure yet",
];

const guestRanges = ["Under 50", "50 – 100", "100 – 150", "150 – 200", "200+"];

const nextSteps = [
  { icon: MessageSquare, step: "01", text: "We'll respond within 48 hours to learn more about your day." },
  { icon: Calendar, step: "02", text: "We'll schedule a complimentary discovery call — relaxed, no pressure." },
  { icon: FileText, step: "03", text: "If we're a fit, we'll send a custom proposal tailored to you." },
  { icon: Heart, step: "04", text: "We begin planning your beautiful, stress-free wedding day." },
];

const Inquire = () => {
  useEffect(() => {
    document.title = "Inquire | Hickory & Rose — Edmonton Wedding Planner";
  }, []);

  const [formData, setFormData] = useState({
    name: "", email: "", partner: "", date: "", venue: "",
    guests: "", service: "", referral: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll be in touch within 48 hours to schedule a discovery call.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-transparent border border-border font-sans-wedding text-sm text-foreground placeholder:text-brand-text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200";

  return (
    <main id="main-content">
      <Navigation variant="solid" />
      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              Start Here
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground mb-6">
              Let's Plan Something Beautiful
            </h1>
            <p className="font-sans-wedding text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Tell us about your vision. There's no commitment — just a warm
              conversation about your wedding day and how we can help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {nextSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <item.icon size={24} strokeWidth={1} className="text-primary mx-auto mb-3" />
                  <p className="font-serif-wedding text-2xl font-light text-primary/30 mb-1">{item.step}</p>
                  <p className="font-sans-wedding text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Your Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="First & last name" />
                </div>
                <div>
                  <label htmlFor="partner" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Partner's Name</label>
                  <input type="text" id="partner" name="partner" value={formData.partner} onChange={handleChange} className={inputClasses} placeholder="First & last name" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Email Address *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="your@email.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Wedding Date</label>
                  <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} className={inputClasses} placeholder="Month / Year or TBD" />
                </div>
                <div>
                  <label htmlFor="venue" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Venue</label>
                  <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} className={inputClasses} placeholder="Venue name or TBD" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Estimated Guest Count</label>
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                    <option value="">Select range</option>
                    {guestRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Service Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="referral" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">How Did You Find Us?</label>
                <input type="text" id="referral" name="referral" value={formData.referral} onChange={handleChange} className={inputClasses} placeholder="Instagram, referral, Google, etc." />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans-wedding text-label uppercase text-muted-foreground mb-2">Tell Us About Your Vision</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="What does your dream wedding look like? What's most important to you?" />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-12 py-4 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.2em] uppercase font-semibold hover:bg-sage-deep transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Send Inquiry
                </button>
                <p className="font-sans-wedding text-xs text-muted-foreground mt-4">
                  We respond to every inquiry within 48 hours.
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Inquire;
