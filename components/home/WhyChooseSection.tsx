"use client";

import { UserCheck, ThumbsUp, Target, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: UserCheck,
    title: "Dedicated Consultant",
    description:
      "Work with one consultant from start to finish. No passing you around from person to person.",
  },
  {
    icon: ThumbsUp,
    title: "Success Fee",
    description:
      "Only pay when your claim is successful. No upfront costs or hidden fees.",
  },
  {
    icon: Target,
    title: "95% Success Rate",
    description:
      "Our claims have a 94.25% approval rate, well above the industry average.",
  },
  {
    icon: Briefcase,
    title: "Deep Industry Focus",
    description:
      "Our consultants have technical backgrounds in the industries they serve.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Conceptinero?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We specialize in maximizing your SR&ED tax credits with a
            stress-free experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
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
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Unlike most consulting firms, we don&apos;t just advise - we handle
            the entire process, from identifying eligible activities to
            defending your claim if needed.
          </p>
          <div className="inline-flex items-center justify-center">
            <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-lg">
              <span className="text-green-800 dark:text-green-300 font-semibold flex items-center">
                <ThumbsUp className="h-5 w-5 mr-2" /> 98% Client Satisfaction
                Rate
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
