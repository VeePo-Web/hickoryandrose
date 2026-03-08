import { useState } from "react";
import { Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceAreas = [
  { name: "Edmonton", venues: 45 },
  { name: "Jasper", venues: 12 },
  { name: "Banff", venues: 18 },
  { name: "Lake Louise", venues: 8 },
  { name: "Calgary", venues: 22 },
  { name: "The Canadian Rockies", venues: 30 },
];

const FooterServiceAreas = () => {
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);

  return (
    <div>
      <p className="font-overline text-background/20 mb-5 text-[0.6rem]">
        Follow
      </p>
      <a
        href="https://www.instagram.com/hickoryandrose"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 font-sans-wedding text-sm text-background/40 hover:text-background transition-colors duration-200 font-light group/social relative overflow-hidden"
      >
        <Instagram size={14} strokeWidth={1.5} className="text-background/20 group-hover/social:text-background/50 transition-colors duration-300" />
        <span className="relative">
          @hickoryandrose
          <span
            className="absolute inset-0 -translate-x-full group-hover/social:translate-x-[200%] transition-transform duration-700 ease-out pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.2), transparent)", width: "60%" }}
          />
        </span>
      </a>

      <div className="mt-8">
        <p className="font-overline text-background/20 mb-3 text-[0.6rem]">
          Serving
        </p>
        <div className="flex flex-wrap gap-x-1.5 gap-y-1">
          {serviceAreas.map((area, i) => (
            <span
              key={area.name}
              className="inline-flex items-center gap-1 group/area cursor-default"
              onMouseEnter={() => setHoveredArea(i)}
              onMouseLeave={() => setHoveredArea(null)}
            >
              <span className="font-sans-wedding text-[0.7rem] text-background/20 font-light group-hover/area:text-background/50 transition-colors duration-300">
                {area.name}
              </span>
              <AnimatePresence>
                {hoveredArea === i && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-serif-wedding text-[0.55rem] italic text-background/15 overflow-hidden whitespace-nowrap"
                  >
                    ({area.venues} venues)
                  </motion.span>
                )}
              </AnimatePresence>
              {i < serviceAreas.length - 1 && (
                <span className="text-background/10 mx-0.5">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterServiceAreas;
