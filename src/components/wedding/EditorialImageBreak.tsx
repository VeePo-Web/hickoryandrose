import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import editorialImage from "@/assets/editorial-florals.jpg";

const EditorialImageBreak = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden"
      aria-label="Editorial wedding detail"
    >
      <div className="aspect-[21/9] md:aspect-[21/9] w-full overflow-hidden">
        <motion.img
          src={editorialImage}
          alt="Elegant floral arrangement with sage eucalyptus and ivory garden roses in warm natural light"
          className="w-full h-[120%] object-cover"
          style={{ y }}
          loading="lazy"
          width={1920}
          height={823}
        />
      </div>
    </section>
  );
};

export default EditorialImageBreak;
