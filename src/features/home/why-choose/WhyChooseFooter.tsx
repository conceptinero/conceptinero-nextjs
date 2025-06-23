import { ThumbsUp } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export function WhyChooseFooter() {
  return (
    <AnimatedSection
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
        Unlike most consulting firms, we don&apos;t just advise - we handle the
        entire process, from identifying eligible activities to defending your
        claim if needed.
      </p>
      <div className="inline-flex items-center justify-center">
        <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-lg">
          <span className="text-green-800 dark:text-green-300 font-semibold flex items-center">
            <ThumbsUp className="h-5 w-5 mr-2" /> 98% Client Satisfaction Rate
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
