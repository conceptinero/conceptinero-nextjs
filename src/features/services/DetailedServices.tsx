import { Check } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { services } from "./servicesData";

export default function DetailedServices() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our SR&ED Services in Detail
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive SR&ED support for Canadian businesses of all sizes.
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.id}
                id={service.id}
                className="flex flex-col md:flex-row items-center gap-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:w-2/5 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 flex justify-center items-center">
                  <Icon className="h-40 w-40 text-blue-600" />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
