import { features } from "@/components/data";
import AnimatedSection from "@/components/shared/AnimatedSection";

export function WhyChooseFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <AnimatedSection
          key={index}
          className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-6">
            <feature.icon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 flex-grow">
            {feature.description}
          </p>
        </AnimatedSection>
      ))}
    </div>
  );
}
