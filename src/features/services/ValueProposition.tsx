import AnimatedSection from "@/components/shared/AnimatedSection";
import ConsultationButton from "@/features/calendly/ConsultationButton";

export default function ValueProposition() {
  return (
    <section className="py-16 lg:py-20 bg-blue-900 dark:bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Our SR&ED Services?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 inline-flex mb-4">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Industry-Specific Expertise
              </h3>
              <p className="text-blue-100">
                Our consultants have technical backgrounds in the industries
                they serve, allowing for deeper insights and more robust claims.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 inline-flex mb-4">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Success-Based Fees
              </h3>
              <p className="text-blue-100">
                You only pay when your claim is successful. No upfront costs, no
                hidden fees – our interests are aligned with yours.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 inline-flex mb-4">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                94.25% Success Rate
              </h3>
              <p className="text-blue-100">
                Our claims are approved at a rate far above the industry
                average, resulting in more tax credits for our clients.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mt-12">
          <ConsultationButton style="white" />
        </div>
      </div>
    </section>
  );
}
