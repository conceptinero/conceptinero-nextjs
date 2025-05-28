"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Image Column */}
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-tl-2xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-br-2xl z-0"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Conceptinero team meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-4"
            >
              About Conceptinero
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Canada&apos;s Trusted SR&ED Specialists
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2015, Conceptinero has grown into one of Canada&apos;s
              most trusted SR&ED consulting firms. With a team of industry
              specialists and former CRA auditors, we understand exactly what it
              takes to create successful claims.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">75M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  In Tax Credits Filed
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">94.25%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Success Rate
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">$152K</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average Claim
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">$2.1M</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Largest Approved Claim
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our mission is simple: help innovative Canadian companies get the
              maximum tax credits they deserve while eliminating the complexity
              and stress of the SR&ED process.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                Software & IT
              </Badge>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                Healthcare & Medical
              </Badge>
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                Manufacturing
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                Engineering
              </Badge>
              <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300">
                Food & Life Sciences
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
