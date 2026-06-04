import { motion, type HTMLMotionProps } from "framer-motion";
import type { ImgHTMLAttributes } from "react";
import { optimizedImages, type OptimizedImageData } from "@/lib/optimized-images";

type ImageSource = {
  width: number;
  src: string;
};

type SharedOptimizedProps = {
  src: string;
  sizes?: string;
  pictureClassName?: string;
};

type OptimizedImageProps = SharedOptimizedProps &
  Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes">;

type OptimizedMotionImageProps = SharedOptimizedProps &
  Omit<HTMLMotionProps<"img">, "src" | "srcSet" | "sizes">;

const imagesBySlug = Object.values(optimizedImages).reduce<Record<string, OptimizedImageData>>(
  (acc, image) => {
    acc[image.slug] = image;
    return acc;
  },
  {},
);
const imageSlugs = Object.keys(imagesBySlug).sort((a, b) => b.length - a.length);

const getOptimizedImageForSrc = (src: string): OptimizedImageData | undefined => {
  const filename = src.split("/").pop() ?? "";
  const basename = filename.replace(/\.jpg$/i, "");
  const slug = imageSlugs.find((candidate) => basename === candidate || basename.startsWith(`${candidate}-`));
  return slug ? imagesBySlug[slug] : undefined;
};

const srcSet = (sources: readonly ImageSource[]) =>
  sources.map(({ src, width }) => `${src} ${width}w`).join(", ");

const ImageSources = ({ image, sizes }: { image: OptimizedImageData; sizes: string }) => (
  <>
    <source type="image/avif" srcSet={srcSet(image.sources.avif)} sizes={sizes} />
    <source type="image/webp" srcSet={srcSet(image.sources.webp)} sizes={sizes} />
  </>
);

export const OptimizedImage = ({
  src,
  sizes,
  pictureClassName = "contents",
  width,
  height,
  decoding = "async",
  loading = "lazy",
  ...props
}: OptimizedImageProps) => {
  const image = getOptimizedImageForSrc(src);
  const resolvedSizes = sizes ?? (image?.width === image?.height ? "(max-width: 768px) 100vw, 50vw" : "100vw");

  if (!image) {
    return <img src={src} width={width} height={height} decoding={decoding} loading={loading} {...props} />;
  }

  return (
    <picture className={pictureClassName}>
      <ImageSources image={image} sizes={resolvedSizes} />
      <img
        src={src}
        width={width ?? image.width}
        height={height ?? image.height}
        decoding={decoding}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

export const OptimizedMotionImage = ({
  src,
  sizes,
  pictureClassName = "contents",
  width,
  height,
  decoding = "async",
  loading = "lazy",
  ...props
}: OptimizedMotionImageProps) => {
  const image = getOptimizedImageForSrc(src);
  const resolvedSizes = sizes ?? (image?.width === image?.height ? "(max-width: 768px) 100vw, 50vw" : "100vw");

  if (!image) {
    return (
      <motion.img src={src} width={width} height={height} decoding={decoding} loading={loading} {...props} />
    );
  }

  return (
    <picture className={pictureClassName}>
      <ImageSources image={image} sizes={resolvedSizes} />
      <motion.img
        src={src}
        width={width ?? image.width}
        height={height ?? image.height}
        decoding={decoding}
        loading={loading}
        {...props}
      />
    </picture>
  );
};
