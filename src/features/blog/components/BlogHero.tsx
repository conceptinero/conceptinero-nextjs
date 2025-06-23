import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedHeader from "@/components/shared/AnimatedHeader";

export default function BlogHero() {
  return (
    <AnimatedSection
      className="pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedHeader
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            SR&ED Insights & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest news, strategies, and insights about
            the SR&ED program and R&D tax credits in Canada.
          </p>
        </AnimatedHeader>
      </div>
    </AnimatedSection>
  );
}
