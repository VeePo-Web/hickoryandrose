import { Link, useNavigate } from "react-router-dom";
import { Heart, Instagram, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const Footer = () => {
  const navigate = useNavigate();

  const handleRSVP = () => {
    toast.info("RSVP feature coming soon!", {
      description: "Please email us at rsvp@aliciaandandres.com",
    });
  };

  const handleInstagram = () => {
    toast.success("Opening Instagram", {
      description: "Follow us @aliciaandandres",
    });
    window.open("https://instagram.com", "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    window.location.href = "mailto:rsvp@aliciaandandres.com?subject=Wedding%20RSVP";
  };

  return (
    <footer className="bg-wedding-sage py-16">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <button
            onClick={handleRSVP}
            className="inline-block font-serif-wedding text-4xl md:text-5xl text-white hover:text-white/80 transition-colors tracking-wide mb-8 cursor-pointer"
          >
            RSVP
          </button>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-sans-wedding text-white/80 text-sm mb-6">
            Please respond by January 15, 2025
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-6 mb-8">
            <button
              onClick={handleInstagram}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </button>
            <button
              onClick={handleEmail}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail size={24} />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <button
            onClick={() => {
              navigator.clipboard.writeText("#AliciaAndAndres2025");
              toast.success("Hashtag copied!", {
                description: "Use #AliciaAndAndres2025 on your posts",
              });
            }}
            className="font-sans-wedding text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            #AliciaAndAndres2025
          </button>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="font-sans-wedding text-xs text-white/40 flex items-center justify-center gap-1">
              Made with <Heart size={12} className="fill-current" /> © 2025 Alicia & Andres
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
