import React from "react";
import ConsultationButton from "@/components/shared/ConsultationButton";

function CallToAction() {
  return (
    <section className="py-16 lg:py-24 bg-blue-600 dark:bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Book your free strategy session today to discover how we can help
            maximize your SR&ED tax credits.
          </p>
          <ConsultationButton size="lg" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
