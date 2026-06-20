import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

interface ScopeBlock {
  letter: string;
  title: string;
  subtitle?: string;
  lead?: string;
  items?: string[];
  body?: string[];
  closing?: string;
  note?: string;
}

const intro =
  "Day-of coordination is designed for couples who have independently planned their wedding and want refined, professional management to oversee execution with precision, discretion, and excellence. Services begin approximately six to eight weeks before your event and continue through the conclusion of the celebration — with Hickory & Rose acting as your primary logistical authority and coordination lead, ensuring every element comes together effortlessly.";

const blocks: ScopeBlock[] = [
  {
    letter: "A",
    title: "Pre-Event Coordination",
    subtitle: "Beginning 6–8 weeks prior",
    lead: "Comprehensive coordination support, including:",
    items: [
      "A detailed consultation to review your plans, priorities, and expectations.",
      "Review and confirmation of all vendor contracts, timelines, and logistical obligations.",
      "Direct communication with all vendors to confirm services, arrival times, setup requirements, and operational needs.",
      "Creation of a bespoke, professionally structured event timeline tailored to every aspect of your day.",
      "Distribution of the finalized timeline to all vendors and key participants.",
      "Coordination with the venue and vendor team to confirm layout, floor plan, and event flow.",
      "A final consultation approximately one to two weeks before your event date.",
      "Assumption of primary logistical communication with vendors in the final weeks leading up to the event.",
    ],
  },
  {
    letter: "B",
    title: "Ceremony Rehearsal Coordination",
    lead: "Professional ceremony rehearsal coordination to ensure a confident, polished, and seamless ceremony experience — directing the ceremony lineup, processional order, and timing, with clear, calm instruction for everyone involved:",
    items: [
      "Professional direction of ceremony order, structure, and flow",
      "Instruction and placement of wedding party participants",
      "Timing guidance for the processional and recessional",
      "Coordination with the officiant and key participants",
      "Clarification of individual roles and expectations",
      "Professional oversight to ensure readiness and confidence",
    ],
    closing:
      "This ensures the ceremony unfolds with elegance, clarity, and composure — so you and your wedding party can be fully present and at ease on the wedding day.",
    note:
      "For rehearsal locations outside of Edmonton, additional travel fees may apply — including mileage and, where applicable, accommodation, in accordance with the Travel and Accommodation terms of your agreement.",
  },
  {
    letter: "C",
    title: "Event Day Coordination & Management",
    lead: "On the wedding day, full oversight and professional management, including:",
    items: [
      "Arrival at the venue at a pre-determined time to oversee preparations.",
      "Coordination and management of all vendor arrivals, setup, and execution.",
      "Oversight of décor placement and styling according to your instructions and event plan.",
      "Assistance with the setup of the ceremony and reception as required.",
      "Coordination of the ceremony lineup, processional timing, and cueing.",
      "Ensuring wedding party members and key participants are prepared and supported.",
      "Professional management of the event timeline from start to finish.",
      "Discreet and effective resolution of any unforeseen issues.",
      "Coordination of key moments including entrances, speeches, dances, and ceremonial traditions.",
      "Liaison between you, venue staff, and vendors to ensure seamless service delivery.",
      "Distribution of vendor payments and gratuities, if provided.",
      "Oversight of personal décor item collection and secure placement at the end of the event.",
      "Assistance with take-down as required.",
      "Ensuring a smooth and elegant conclusion of the celebration.",
    ],
  },
  {
    letter: "D",
    title: "Assistant Coordinator",
    body: [
      "To maintain the highest standard of service, Hickory & Rose reserves the right to assign a professional Assistant Coordinator when appropriate — based on guest count, event scale, or logistical complexity.",
      "The Assistant Coordinator supports seamless execution, guest assistance, and vendor coordination, ensuring exceptional service continuity.",
    ],
  },
  {
    letter: "E",
    title: "Emergency Kit Provision",
    body: [
      "A professional emergency kit is provided, containing essential items to address minor unforeseen needs — including sewing supplies, garment repair tools, first-aid items, beauty essentials, and emergency coordination tools.",
      "These provisions are offered as a professional courtesy to support the comfort and confidence of you and your wedding party.",
    ],
  },
  {
    letter: "F",
    title: "Décor Handling & Personal Item Management",
    body: [
      "Placement and management of personal décor items — including signage, favours, guest books, and similar personal details — is overseen in accordance with your instructions.",
      "At the conclusion of the event, the consolidation of your personal items is also overseen.",
    ],
    note:
      "Clients agree to clearly label and organize all items. Hickory & Rose exercises the utmost care but is not liable for loss or damage beyond reasonable control.",
  },
];

const DayOfScopeSection = () => {
  return (
    <section
      id="day-of-scope"
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card relative overflow-hidden"
      style={{ contain: "layout style" }}
      aria-label="Day-of coordination scope of services"
    >
      {/* Parallax watermark */}
      <motion.div
        className="absolute -left-6 top-24 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.015 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[10rem] md:text-[16rem] font-light text-foreground leading-none tracking-tight italic whitespace-nowrap">
          Day-Of
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 md:mb-20">
            <p className="font-sans-wedding text-label uppercase text-primary/60 mb-4">
              <span className="inline-flex items-center gap-3">
                <span className="w-5 h-px bg-primary/30" />
                Day-Of Coordination
              </span>
            </p>
            <h2 className="font-serif-wedding text-display-lg text-foreground leading-tight mb-6">
              Scope of Services
            </h2>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light max-w-2xl">
              {intro}
            </p>
          </div>
        </ScrollReveal>

        {/* A–F blocks */}
        <div className="border-t border-border/30">
          {blocks.map((block, index) => (
            <ScrollReveal key={block.letter} delay={index * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-9 md:py-12 border-b border-border/25 relative group">
                {/* Letter + accent */}
                <div className="md:col-span-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif-wedding text-4xl md:text-5xl font-light text-primary/15 leading-none">
                      {block.letter}
                    </span>
                    <span
                      className="w-2 h-2 rotate-45 shrink-0 translate-y-[-2px]"
                      style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1))" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-serif-wedding text-xl text-foreground mt-3 leading-snug">
                    {block.title}
                  </h3>
                  {block.subtitle && (
                    <p className="font-sans-wedding text-caption tracking-[0.12em] uppercase text-muted-foreground/70 mt-2">
                      {block.subtitle}
                    </p>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  {block.lead && (
                    <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-5">
                      {block.lead}
                    </p>
                  )}

                  {block.items && (
                    <ul className="space-y-3 mb-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="w-4 h-px bg-primary/40 mt-2.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-sans-wedding text-body-sm text-foreground/85 font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {block.body &&
                    block.body.map((p) => (
                      <p
                        key={p}
                        className="font-sans-wedding text-body-sm text-foreground/85 leading-relaxed font-light mb-4 last:mb-0"
                      >
                        {p}
                      </p>
                    ))}

                  {block.closing && (
                    <p className="font-serif-wedding text-sm italic text-foreground/60 leading-relaxed mt-5">
                      {block.closing}
                    </p>
                  )}

                  {block.note && (
                    <p className="font-sans-wedding text-caption text-muted-foreground/70 leading-relaxed mt-5 pl-4 border-l border-gold/30">
                      {block.note}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing block */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14 md:mt-20 relative overflow-hidden border border-gold/20 bg-background p-8 md:p-12 text-center">
            <span
              className="absolute inset-0 -translate-x-full animate-none pointer-events-none"
              aria-hidden="true"
            />
            <p className="font-sans-wedding text-label uppercase text-muted-foreground mb-4">
              Investment
            </p>
            <p
              className="font-serif-wedding text-display-md leading-none mb-3"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--gold)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Starting at $1,200 + GST
            </p>
            <p className="font-sans-wedding text-body-sm text-muted-foreground font-light max-w-md mx-auto mb-2">
              Add-on features are available at an additional cost — tailored to your day during your consultation.
            </p>
            <p className="font-sans-wedding text-caption text-muted-foreground/70 font-light max-w-md mx-auto mb-8">
              Partial Planning and Full-Service Planning details are coming soon.
            </p>
            <MagneticButton to="/inquire" variant="primary">
              Inquire About Day-Of Coordination
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DayOfScopeSection;
