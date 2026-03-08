import { useEffect, useRef, useState } from "react";
import { setPageMeta } from "@/lib/seo";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/wedding/Navigation";
import CTASection from "@/components/wedding/CTASection";
import Footer from "@/components/wedding/Footer";
import ScrollReveal from "@/components/wedding/ScrollReveal";
import ImageReveal from "@/components/wedding/ImageReveal";
import PreFooterDivider from "@/components/wedding/PreFooterDivider";
import journalVowsImage from "@/assets/journal-vows.jpg";
import journalBrideImage from "@/assets/journal-bride.jpg";
import journalReceptionImage from "@/assets/journal-reception.jpg";
import editorialFloralsImage from "@/assets/editorial-florals.jpg";
import detailImage from "@/assets/detail-placecard.jpg";
import ceremonyImage from "@/assets/ceremony-setup.jpg";

const articles = [
  {
    image: journalBrideImage,
    alt: "Bride in ivory silk gown standing in sunlit conservatory with orchids and ferns",
    category: "Planning",
    title: "The Art of Being Present on Your Wedding Day",
    excerpt:
      "How letting go of the details you've obsessed over is the final — and most important — step in your wedding journey.",
    readTime: "6 min read",
    date: "March 2026",
    pullQuote: "Presence is the final gift you give yourself.",
    featured: true,
  },
  {
    image: journalVowsImage,
    alt: "Handwritten calligraphy wedding vows with gold pen and eucalyptus on rustic wood",
    category: "Inspiration",
    title: "Writing Vows That Feel Like You",
    excerpt:
      "Forget the templates. Here's how to find words that carry the weight of what you actually feel.",
    readTime: "4 min read",
    date: "February 2026",
    pullQuote: "Your words don't need to be perfect — they need to be yours.",
    featured: false,
  },
  {
    image: journalReceptionImage,
    alt: "Rustic barn reception with sage linen runner, brass candlesticks, and string lights at twilight",
    category: "Design",
    title: "Tablescapes That Tell a Story",
    excerpt:
      "Why your reception table is the most underestimated design element — and how to make it unforgettable.",
    readTime: "5 min read",
    date: "January 2026",
    pullQuote: "A table is never just a table — it's the first chapter of your evening.",
    featured: false,
  },
  {
    image: editorialFloralsImage,
    alt: "Sage eucalyptus and ivory garden rose floral arrangement in editorial lighting",
    category: "Florals",
    title: "Seasonal Florals: A Guide to What's In Bloom",
    excerpt:
      "Understanding which flowers are at their peak for each season helps you make choices that feel natural, intentional, and beautifully fresh.",
    readTime: "7 min read",
    date: "December 2025",
    pullQuote: "The best bouquets don't fight the season — they celebrate it.",
    featured: false,
  },
  {
    image: detailImage,
    alt: "Elegant calligraphy place card with gold cutlery on fine linen",
    category: "Stationery",
    title: "The Quiet Power of Handwritten Details",
    excerpt:
      "In an age of digital everything, calligraphy and hand-lettered elements carry an emotional weight that printed fonts simply can't replicate.",
    readTime: "4 min read",
    date: "November 2025",
    pullQuote: "A hand-lettered name says: you matter enough for us to slow down.",
    featured: false,
  },
  {
    image: ceremonyImage,
    alt: "Outdoor mountain ceremony with floral arch at golden hour",
    category: "Venues",
    title: "Choosing Between Indoor & Outdoor Ceremonies in Alberta",
    excerpt:
      "Alberta's weather is unpredictable, but that doesn't mean you have to sacrifice your outdoor dream. Here's how to plan for both.",
    readTime: "6 min read",
    date: "October 2025",
    pullQuote: "The mountains don't care about your timeline — plan accordingly.",
    featured: false,
  },
];

const journalFilters = ["All", "Planning", "Inspiration", "Design", "Florals", "Stationery", "Venues"] as const;

const Journal = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setPageMeta({
      title: "Journal — Wedding Planning Inspiration | Hickory & Rose Edmonton",
      description:
        "Planning wisdom, real wedding stories, and the design details that make each celebration unforgettable. Read the Hickory & Rose journal.",
      path: "/journal",
    });
  }, []);

  const featuredArticle = articles[0];
  const allRemaining = articles.slice(1);
  const remainingArticles = activeFilter === "All" 
    ? allRemaining 
    : allRemaining.filter((a) => a.category === activeFilter);

  return (
    <main id="main-content">
      <Navigation variant="overlay" />

      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[55vh] md:h-[65vh] overflow-hidden grain-overlay vignette">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={journalBrideImage}
            alt="Bride in natural light surrounded by florals — editorial wedding photography"
            className="w-full h-[120%] object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55" />
        </motion.div>

        {/* Watermark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <span className="font-serif-wedding text-[12rem] md:text-[20rem] text-white leading-none tracking-tight whitespace-nowrap">
            Journal
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
                Stories & Wisdom
                <motion.span
                  className="w-8 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </p>
            <h1 className="font-serif-wedding text-display-xl text-white mb-6 max-w-3xl">
              The Journal
            </h1>
            <p className="font-sans-wedding text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto font-light">
              Planning wisdom, real wedding stories, and the design details that make each celebration unforgettable.
            </p>
          </ScrollReveal>
        </motion.div>
      </section>

      {/* Featured Article — Full Width */}
      <section className="py-section-mobile md:py-section-tablet bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ImageReveal direction="left">
                <div className="aspect-[4/5] overflow-hidden relative group">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.alt}
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
                  {/* Corner frames */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/0 group-hover:border-white/15 transition-colors duration-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/0 group-hover:border-white/15 transition-colors duration-500" />
                </div>
              </ImageReveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-primary/60">
                    {featuredArticle.category}
                  </span>
                  <span className="w-4 h-px bg-border/40" />
                  <span className="font-sans-wedding text-[0.55rem] tracking-[0.08em] text-muted-foreground/30">
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="border-l-2 border-primary/15 pl-5 mb-8">
                  <p className="font-serif-wedding text-sm italic text-foreground/50 leading-relaxed">
                    "{featuredArticle.pullQuote}"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans-wedding text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground/30">
                    {featuredArticle.date}
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

      {/* Gold divider */}
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-px origin-center"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.2), transparent)",
          }}
        />
      </div>

      {/* Category Filter Tabs — editorial gold accent */}
      <section className="py-5 md:py-6 bg-background border-b border-border/30 sticky top-[72px] z-30">
        <div className="container mx-auto px-6 lg:px-8 flex justify-center gap-0 overflow-x-auto">
          {journalFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative font-sans-wedding text-xs tracking-[0.15em] uppercase px-4 md:px-6 py-2.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap ${
                activeFilter === f
                  ? "text-foreground"
                  : "text-muted-foreground/40 hover:text-muted-foreground"
              }`}
            >
              {f}
              {activeFilter === f && (
                <motion.div
                  layoutId="journal-filter"
                  className="absolute bottom-0 left-0 w-full h-px origin-left"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-section-mobile md:py-section-tablet bg-background relative overflow-hidden">
        {/* Watermark */}
        <motion.div
          className="absolute -right-8 top-1/4 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-serif-wedding text-[8rem] md:text-[12rem] font-light text-foreground/[0.015] whitespace-nowrap tracking-tight italic">
            Stories
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12 md:mb-16">
              <span className="font-serif-wedding text-sm text-primary/20 font-light">02</span>
              <span className="w-8 h-px bg-primary/15" />
              <p className="font-sans-wedding text-label uppercase text-muted-foreground/40 tracking-[0.2em]">
                All Articles
              </p>
              <span className="flex-1 h-px bg-border/20 hidden md:block" />
              <span className="font-sans-wedding text-[0.55rem] tracking-[0.12em] text-muted-foreground/20 tabular-nums hidden md:block">
                {remainingArticles.length} Stories
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {remainingArticles.map((article, index) => (
              <ScrollReveal key={article.title} delay={index * 0.08}>
                <article className="group cursor-pointer">
                   <ImageReveal direction={index % 2 === 0 ? "up" : "left"} delay={index * 0.04}>
                    <div className="aspect-[4/5] overflow-hidden relative">
                      {/* Gold shimmer sweep on hover */}
                      <div
                        className="absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
                        style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.08) 40%, hsl(var(--gold) / 0.12) 50%, hsl(var(--gold) / 0.08) 60%, transparent 100%)" }}
                      />
                      <img
                        src={article.image}
                        alt={article.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/0 group-hover:border-white/15 transition-colors duration-500" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/0 group-hover:border-white/15 transition-colors duration-500" />
                      <div className="absolute top-4 left-4">
                        <span
                          className="font-sans-wedding text-[0.5rem] tracking-[0.18em] uppercase text-white/80 backdrop-blur-sm px-2.5 py-1"
                          style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.25), hsl(var(--primary) / 0.2))" }}
                        >
                          {article.category}
                        </span>
                      </div>
                      {/* Hover reveal */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="font-serif-wedding text-xs italic text-white/40 mb-1">
                          "{article.pullQuote}"
                        </p>
                      </div>
                      <span className="absolute top-4 right-4 font-serif-wedding text-[0.5rem] text-white/20 tabular-nums">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>
                  </ImageReveal>

                  <div className="mt-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-primary/50">
                        {article.category}
                      </span>
                      <span className="w-3 h-px bg-border/40" />
                      <span className="font-sans-wedding text-[0.55rem] tracking-[0.08em] text-muted-foreground/30">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif-wedding text-display-sm text-foreground group-hover:text-primary transition-colors duration-500 mb-2 leading-tight relative">
                      {article.title}
                      <span
                        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
                        style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1), transparent)" }}
                      />
                    </h3>
                    <p className="font-sans-wedding text-body-sm text-muted-foreground/60 font-light leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-sans-wedding text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground/30">
                        {article.date}
                      </span>
                      <span className="font-sans-wedding text-[0.55rem] tracking-[0.1em] uppercase text-muted-foreground/0 group-hover:text-muted-foreground/30 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe — premium editorial split layout */}
      <section className="py-section-mobile md:py-section-tablet bg-card relative overflow-hidden">
        {/* Decorative background monogram */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-script text-[18rem] text-foreground leading-none">
            J
          </span>
        </motion.div>

        {/* Radial gold ambient glow */}
        <motion.div
          className="absolute right-0 top-1/4 w-[400px] h-[400px] pointer-events-none hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.15), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left: Editorial text */}
              <div className="lg:col-span-5">
                <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">03</span>
                <p className="font-sans-wedding text-label uppercase text-muted-foreground/50 mb-3">
                  <span className="inline-flex items-center gap-3">
                    <span className="w-5 h-px bg-border" />
                    Stay Inspired
                  </span>
                </p>
                <h2 className="font-serif-wedding text-display-lg text-foreground mb-4 leading-tight">
                  Planning wisdom, delivered with care.
                </h2>
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light max-w-sm">
                  Seasonal inspiration, planning tips, and first access to new journal entries. Curated monthly — never spam.
                </p>
              </div>

              {/* Right: Form with decorative frame */}
              <div className="lg:col-span-7 lg:flex lg:justify-end">
                <div className="relative max-w-md w-full">
                  {/* Corner frame accents */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 hidden lg:block pointer-events-none" aria-hidden="true">
                    <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.25), transparent)" }} />
                    <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.25), transparent)" }} />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 hidden lg:block pointer-events-none" aria-hidden="true">
                    <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.25), transparent)" }} />
                    <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.25), transparent)" }} />
                  </div>

                  <div className="border border-border/30 p-8 md:p-10">
                    <p className="font-serif-wedding text-sm italic text-foreground/40 mb-6">
                      "The best planning starts with inspiration."
                    </p>
                    <form
                      onSubmit={(e) => { e.preventDefault(); }}
                      className="flex flex-col sm:flex-row items-stretch gap-3 mb-4"
                    >
                      <div className="flex-1 input-gold-focus relative">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3.5 bg-transparent border border-border/60 font-sans-wedding text-sm text-foreground font-light placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0 focus:border-transparent transition-colors duration-300"
                          aria-label="Email address for newsletter"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-primary text-primary-foreground font-sans-wedding text-xs tracking-[0.18em] uppercase font-light hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 relative overflow-hidden group shrink-0"
                      >
                        <span
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.15), transparent 60%)" }}
                        />
                        <span className="relative z-10">Subscribe</span>
                      </button>
                    </form>
                    <p className="font-sans-wedding text-[0.6rem] tracking-[0.08em] text-muted-foreground/30 font-light">
                      One email per month · Unsubscribe anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Signature Quote — editorial with gold ornaments */}
      <section className="py-20 md:py-28 bg-sage-deep relative overflow-hidden">
        {/* Radial gold ambient glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.12), transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Parallax watermark */}
        <motion.div
          className="absolute -left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.025 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-serif-wedding text-[10rem] md:text-[14rem] text-primary-foreground leading-none tracking-tight italic whitespace-nowrap">
            Wisdom
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative">
          <ScrollReveal>
            {/* Gold diamond ornament */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px origin-right"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.25))" }}
              />
              <motion.span
                className="w-2 h-2 rotate-45 shrink-0"
                style={{
                  background: "hsl(var(--gold) / 0.25)",
                  boxShadow: "0 0 12px 4px hsl(var(--gold) / 0.1)",
                }}
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px origin-left"
                style={{ background: "linear-gradient(270deg, transparent, hsl(var(--gold) / 0.25))" }}
              />
            </div>

            <span className="font-serif-wedding text-6xl text-primary-foreground/[0.06] leading-none block -mb-4" aria-hidden="true">"</span>
            <blockquote className="font-serif-wedding text-display-md text-primary-foreground leading-relaxed mb-8">
              "The best planning doesn't feel like planning — it feels like permission to simply enjoy."
            </blockquote>

            {/* Attribution with gold separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-8 h-px mx-auto mb-4 origin-center"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)" }}
            />
            <span className="font-script text-xl text-primary-foreground/35">
              Hickory & Rose
            </span>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="w-4 h-px bg-primary-foreground/10" />
              <span className="font-sans-wedding text-[0.5rem] tracking-[0.2em] uppercase text-primary-foreground/20">
                Est. 2018
              </span>
              <span className="w-4 h-px bg-primary-foreground/10" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <PreFooterDivider />
      <Footer />
    </main>
  );
};

export default Journal;
