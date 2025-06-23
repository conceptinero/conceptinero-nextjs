import AnimatedSection from "@/components/shared/AnimatedSection";

export function TestimonialsHeader() {
  return (
    <AnimatedSection
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        What Our Clients Say
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Success stories from companies that have trusted us with their SR&ED
        claims.
      </p>
    </AnimatedSection>
  );
}
