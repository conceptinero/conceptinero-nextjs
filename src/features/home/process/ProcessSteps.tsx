import { steps } from "./processData";
import AnimatedSection from "@/components/shared/AnimatedSection";

export function ProcessSteps() {
  return (
    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
      {steps.map((step, index) => {
        const colorClasses = {
          blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
          green: "bg-green-100 dark:bg-green-900/30 text-green-600",
          amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600",
          rose: "bg-rose-100 dark:bg-rose-900/30 text-rose-600",
        };

        return (
          <AnimatedSection
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
            )}

            {/* Step Number */}
            <div
              className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                colorClasses[step.color as keyof typeof colorClasses]
              }`}
            >
              <step.icon className="h-10 w-10" />
            </div>

            {/* Step Content */}
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {step.title}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
