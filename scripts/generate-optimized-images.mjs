import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assetsDir = path.join(root, "src", "assets");
const outputDir = path.join(root, "public", "optimized-images");
const manifestPath = path.join(root, "src", "lib", "optimized-images.ts");

const landscapeWidths = [640, 960, 1280, 1920];
const squareWidths = [320, 512, 1024];

const toCamelCase = (value) =>
  value.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());

const formatEntries = (slug, widths, format) =>
  widths
    .map((width) => `{ width: ${width}, src: "/optimized-images/${slug}-${width}.${format}" }`)
    .join(", ");

await fs.mkdir(outputDir, { recursive: true });

const files = (await fs.readdir(assetsDir))
  .filter((file) => file.toLowerCase().endsWith(".jpg"))
  .sort();

const manifestEntries = [];

for (const file of files) {
  const sourcePath = path.join(assetsDir, file);
  const slug = path.basename(file, ".jpg");
  const image = sharp(sourcePath);
  const metadata = await image.metadata();
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;
  const candidateWidths = width === height ? squareWidths : landscapeWidths;
  const widths = candidateWidths.filter((candidate) => candidate <= width);

  for (const targetWidth of widths) {
    const resized = sharp(sourcePath).resize({
      width: targetWidth,
      withoutEnlargement: true,
    });

    await resized
      .clone()
      .avif({ quality: 54, effort: 3 })
      .toFile(path.join(outputDir, `${slug}-${targetWidth}.avif`));

    await resized
      .clone()
      .webp({ quality: 78, effort: 5 })
      .toFile(path.join(outputDir, `${slug}-${targetWidth}.webp`));
  }

  manifestEntries.push({
    key: toCamelCase(slug),
    slug,
    width,
    height,
    widths,
  });
}

const manifest = `export const optimizedImages = {
${manifestEntries
  .map(
    ({ key, slug, width, height, widths }) => `  ${key}: {
    slug: "${slug}",
    width: ${width},
    height: ${height},
    sources: {
      avif: [${formatEntries(slug, widths, "avif")}],
      webp: [${formatEntries(slug, widths, "webp")}],
    },
  },`,
  )
  .join("\n")}
} as const;

export type OptimizedImageData = (typeof optimizedImages)[keyof typeof optimizedImages];
`;

await fs.writeFile(manifestPath, manifest, "utf8");

console.log(`Generated ${manifestEntries.length} optimized image manifests.`);
