"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 dark:text-white leading-tight mb-6">
              Get a Tax Refund for Your Research & Development
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              At Conceptinero, our SR&ED consultants specialize in Medical
              Science, Software, and Manufacturing industries.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => setConsultationOpen(true)}
              >
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <svg
                    className="h-5 w-5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  94.25% Success Rate
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <svg
                    className="h-5 w-5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  $152K Average Claim
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Business professionals reviewing financial documents"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-blue-900 dark:bg-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">$75M+</p>
              <p className="text-sm text-blue-200">In Tax Credits Filed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">94.25%</p>
              <p className="text-sm text-blue-200">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">$2.1M</p>
              <p className="text-sm text-blue-200">Largest Approved Claim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
