import { motion } from "framer-motion";

const PreFooterDivider = () => {
  return (
    <section className="py-10 md:py-14 bg-background" aria-hidden="true">
      <div className="container mx-auto px-6 lg:px-8 max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="w-12 h-px bg-border" />
          <span className="font-script text-lg text-muted-foreground/30">
            H & R
          </span>
          <span className="w-12 h-px bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooterDivider;
