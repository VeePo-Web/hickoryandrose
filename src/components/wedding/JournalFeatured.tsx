import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import type { Article } from "./JournalArticleCard";

interface JournalFeaturedProps {
  article: Article & { image: string };
}

const JournalFeatured = ({ article }: JournalFeaturedProps) => (
  <section className="py-section-mobile md:py-section-tablet bg-card">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ImageReveal direction="left">
            <div className="aspect-[4/5] overflow-hidden relative group">
              <img
                src={article.image}
                alt={article.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4">
                <span
                  className="font-sans-wedding text-[0.55rem] tracking-[0.18em] uppercase text-white/80 backdrop-blur-sm px-3 py-1.5"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--primary) / 0.2))" }}
                >
                  Featured
                </span>
              </div>
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/0 group-hover:border-white/15 transition-colors duration-500" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/0 group-hover:border-white/15 transition-colors duration-500" />
            </div>
          </ImageReveal>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-primary/60">
                {article.category}
              </span>
              <span className="w-4 h-px bg-border/40" />
              <span className="font-sans-wedding text-[0.55rem] tracking-[0.08em] text-muted-foreground/30">
                {article.readTime}
              </span>
            </div>
            <h2 className="font-serif-wedding text-display-lg text-foreground mb-4 leading-tight">
              {article.title}
            </h2>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-6">
              {article.excerpt}
            </p>
            <div className="border-l-2 border-primary/15 pl-5 mb-8">
              <p className="font-serif-wedding text-sm italic text-foreground/50 leading-relaxed">
                "{article.pullQuote}"
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans-wedding text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground/30">
                {article.date}
              </span>
              <span className="font-sans-wedding text-xs tracking-[0.1em] uppercase text-primary/50 inline-flex items-center gap-2 group cursor-pointer">
                Read Article
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default JournalFeatured;
