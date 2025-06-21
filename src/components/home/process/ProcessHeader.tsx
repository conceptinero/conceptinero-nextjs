import AnimatedSection from "@/components/shared/AnimatedSection";

export function ProcessHeader() {
  return (
    <AnimatedSection
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        How It Works
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Our streamlined 4-step process makes securing your SR&ED tax credits
        simple and hassle-free.
      </p>
    </AnimatedSection>
  );
}
