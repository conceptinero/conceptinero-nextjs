"use client";

import {
  CheckCircle2,
  ClipboardList,
  FileCheck,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: CheckCircle2,
    title: "Assess",
    description:
      "We evaluate your R&D activities to determine eligibility and potential claim size.",
    color: "blue",
  },
  {
    icon: ClipboardList,
    title: "Make a Plan",
    description:
      "We develop a customized claim strategy to maximize your eligible expenses.",
    color: "green",
  },
  {
    icon: FileCheck,
    title: "Submit Claim",
    description:
      "We prepare and submit all required documentation to the CRA on your behalf.",
    color: "amber",
  },
  {
    icon: CreditCard,
    title: "Get Paid",
    description:
      "You receive your tax credit, typically within 8-12 weeks of submission.",
    color: "rose",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
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
        </motion.div>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
          {steps.map((step, index) => {
            const colorClasses = {
              blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
              green: "bg-green-100 dark:bg-green-900/30 text-green-600",
              amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600",
              rose: "bg-rose-100 dark:bg-rose-900/30 text-rose-600",
            };

            return (
              <motion.div
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
              </motion.div>
            );
          })}
        </div>

        <motion.div
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
                SR&ED claims must be filed within 18 months of your fiscal
                year-end. Missing this deadline means losing your eligibility
                forever. Don&apos;t wait until the last minute - contact us
                today to start your claim process.
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
        </motion.div>
      </div>
    </section>
  );
}
