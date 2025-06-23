import React from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ConsultationButton from "@/components/shared/ConsultationButton";
import Image from "next/image";

function Hero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <AnimatedSection
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Conceptinero
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Canada&apos;s leading SR&ED tax credit consulting firm helping
              innovative companies get the tax refunds they deserve.
            </p>
            <ConsultationButton size="lg" />
          </AnimatedSection>
          <AnimatedSection
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/hero-2.webp"
                alt="Conceptinero team meeting"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Hero;
