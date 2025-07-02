"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ConsultationButton from "@/features/calendly/ConsultationButton";
import { industries, industryIcons } from "./servicesData";

export default function Industries() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our team has deep expertise across multiple industries, ensuring
            your SR&ED claim is handled by someone who understands your
            technical work.
          </p>
        </AnimatedSection>

        <Tabs defaultValue="software" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {industries.map((industry) => (
              <TabsTrigger key={industry.id} value={industry.id}>
                {industry.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((industry) => {
            const Icon =
              industryIcons[industry.id as keyof typeof industryIcons];
            return (
              <TabsContent key={industry.id} value={industry.id}>
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-10">
                      <div className="flex items-center mb-6">
                        <Icon className="h-8 w-8 text-blue-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {industry.name}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {industry.description}
                      </p>

                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Common SR&ED Activities:
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {industry.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <ConsultationButton />
                    </div>
                    <div className="relative min-h-[300px] lg:min-h-full">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
