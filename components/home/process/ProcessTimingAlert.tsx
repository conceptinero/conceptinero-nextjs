import AnimatedSection from "@/components/shared/AnimatedSection";

export function ProcessTimingAlert() {
  return (
    <AnimatedSection
      className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Timing Is Critical
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            SR&ED claims must be filed within 18 months of your fiscal year-end.
            Missing this deadline means losing your eligibility forever.
            Don&apos;t wait until the last minute - contact us today to start
            your claim process.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-600 flex items-center justify-center">
              <div className="text-blue-600 font-bold text-xl">18mo</div>
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              !
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
