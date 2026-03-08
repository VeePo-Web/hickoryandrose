interface FullWidthImageProps {
  src: string;
  alt: string;
  height?: string;
}

const FullWidthImage = ({ 
  src, 
  alt, 
  height = "h-[400px] md:h-[600px]" 
}: FullWidthImageProps) => {
  return (
    <section className="w-full">
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover`}
      />
    </section>
  );
};

export default FullWidthImage;
