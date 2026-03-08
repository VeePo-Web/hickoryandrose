import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import founderImage from "@/assets/founder-portrait.jpg";

const values = [
  { title: "Calm Leadership", description: "We lead with quiet confidence so you never feel rushed, pressured, or anxious." },
  { title: "Intentional Design", description: "Every detail is considered — nothing is accidental, everything has meaning." },
  { title: "Genuine Care", description: "Your wedding isn't a project to us. It's a privilege and a responsibility we take personally." },
];

const About = () => {
  return (
    <main id="main-content">
      <section className="bg-sage-light pt-32 pb-section-mobile md:pb-section-tablet">
        <Navigation variant="solid" />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h1 className="font-serif-wedding text-display-xl text-foreground">
              Meet Hickory & Rose
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={founderImage} alt="Founder of Hickory & Rose" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-6">
                  The heart behind every detail.
                </h2>
                <div className="space-y-4 font-sans-wedding text-sm text-muted-foreground leading-relaxed">
                  <p>I founded Hickory & Rose with a simple belief: your wedding day should feel as calm as it is beautiful.</p>
                  <p>After years in the events industry, I noticed something troubling — too many couples were stressed and exhausted on what should have been their most joyful day. I knew there had to be a better way.</p>
                  <p>Hickory & Rose exists to be that better way. We bring quiet confidence, meticulous planning, and genuine warmth to every wedding we touch. When you work with us, you're not hiring a coordinator — you're gaining a partner who cares deeply about your experience.</p>
                  <p>Based in Edmonton, Alberta, we serve couples who value refined design, intentional details, and the freedom to fully enjoy their celebration.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif-wedding text-display-lg text-foreground">What Guides Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="font-serif-wedding text-display-md text-foreground mb-3">{value.title}</h3>
                  <p className="font-sans-wedding text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default About;
