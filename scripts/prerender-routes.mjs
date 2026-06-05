import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

const siteUrl = "https://hickoryandrose.com";

const landscapeWidths = [640, 960, 1280, 1920];
const portraitWidths = [320, 512, 1024];

const routes = [
  {
    path: "/",
    title: "Hickory & Rose | Edmonton Luxury Wedding Planner",
    description: "Refined, calm wedding planning in Edmonton & the Canadian Rockies. Day-of, partial, and full-service planning for the day you'll actually live in.",
    hero: "hero-wedding-premium",
    widths: landscapeWidths,
  },
  {
    path: "/services",
    title: "Services | Hickory & Rose Edmonton Wedding Planner",
    description: "Day-of coordination, partial planning, and full-service wedding planning in Edmonton & the Canadian Rockies. Tailored proposals, calm execution.",
    hero: "services-hero",
    widths: landscapeWidths,
  },
  {
    path: "/portfolio",
    title: "Portfolio | Hickory & Rose Edmonton Wedding Planner",
    description: "Aesthetic direction from Hickory & Rose - refined rustic elegance for Edmonton & Alberta weddings. A glimpse of the day we design for our couples.",
    hero: "portfolio-hero",
    widths: landscapeWidths,
  },
  {
    path: "/about",
    title: "About | Hickory & Rose Edmonton Wedding Planner",
    description: "Meet Alexandra Rose, founder of Hickory & Rose - calm leadership, intentional design, and refined rustic elegance for Edmonton & Alberta couples.",
    hero: "about-hero",
    widths: landscapeWidths,
  },
  {
    path: "/approach",
    title: "Our Approach | Hickory & Rose Edmonton Wedding Planner",
    description: "From discovery call to wedding day - Hickory & Rose's calm, intentional planning process. Meticulous coordination and elevated design at every step.",
    hero: "approach-hero",
    widths: landscapeWidths,
  },
  {
    path: "/journal",
    title: "Journal | Hickory & Rose Edmonton Wedding Planner",
    description: "Planning notes, design inspiration, and real-wedding stories from the Hickory & Rose studio in Edmonton, Alberta.",
    hero: "journal-bride",
    widths: portraitWidths,
  },
  {
    path: "/inquire",
    title: "Inquire | Hickory & Rose Edmonton Wedding Planner",
    description: "Start your planning conversation with Hickory & Rose. A warm, no-pressure inquiry - replies within 24-48 business hours.",
    hero: "inquire-hero",
    widths: landscapeWidths,
  },
  {
    path: "/faq",
    title: "FAQ | Hickory & Rose Edmonton Wedding Planner",
    description: "Answers on pricing, services, planning timelines, and coverage across Edmonton, the Canadian Rockies, and Alberta - from Hickory & Rose.",
    hero: "faq-hero",
    widths: landscapeWidths,
  },
  {
    path: "/404",
    output: "404.html",
    title: "Page Not Found | Hickory & Rose Edmonton Wedding Planner",
    description: "Find your way back to Hickory & Rose wedding planning services, portfolio, approach, and inquiry pages.",
    hero: "notfound-editorial",
    widths: landscapeWidths,
    canonicalPath: "/404",
  },
];

const escapeAttribute = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const routeUrl = (route) => `${siteUrl}${route.canonicalPath ?? (route.path === "/" ? "" : route.path)}`;

const buildHeroPreload = ({ hero, widths }) => {
  const srcset = widths
    .map((width) => `/optimized-images/${hero}-${width}.avif ${width}w`)
    .join(", ");
  const href = `/optimized-images/${hero}-${widths.includes(960) ? 960 : widths[widths.length - 1]}.avif`;

  return [
    "<!-- Route Hero Preload -->",
    `<link rel="preload" as="image" href="${href}" type="image/avif" imagesrcset="${srcset}" imagesizes="100vw" fetchpriority="high">`,
  ].join("\n    ");
};

const upsertMeta = (html, route) => {
  const title = escapeAttribute(route.title);
  const description = escapeAttribute(route.description);
  const canonical = escapeAttribute(routeUrl(route));
  const preload = buildHeroPreload(route);

  let next = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?">/s, `<meta name="description" content="${description}">`)
    .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?">/s, `<meta property="og:title" content="${title}">`)
    .replace(/<meta name="twitter:title" content=".*?">/s, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta property="og:description" content=".*?">/s, `<meta property="og:description" content="${description}">`)
    .replace(/<meta name="twitter:description" content=".*?">/s, `<meta name="twitter:description" content="${description}">`)
    .replace(/\n\s*<!-- Route Hero Preload -->\n\s*<link rel="preload" as="image".*?fetchpriority="high">\n?/s, "\n");

  next = next.replace(
    /(<link rel="preload" as="font" href="\/fonts\/jost-latin-normal\.woff2"[^>]*>)/,
    `$1\n    ${preload}`,
  );

  return next;
};

const template = await readFile(templatePath, "utf8");

for (const route of routes) {
  const html = upsertMeta(template, route);
  const outputPath = route.output
    ? path.join(distDir, route.output)
    : route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.path.slice(1), "index.html");
  const cleanUrlOutputPath =
    !route.output && route.path !== "/" ? path.join(distDir, `${route.path.slice(1)}.html`) : null;

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);

  if (cleanUrlOutputPath) {
    await writeFile(cleanUrlOutputPath, html);
  }
}

console.log(`Prerendered ${routes.length} route HTML shells.`);
