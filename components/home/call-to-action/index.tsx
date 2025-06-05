import AnimatedSection from "@/components/shared/AnimatedSection";
import { CTAButtons } from "./CTAButtons";
import { CTAStats } from "./CTAStats";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-800 to-blue-900 dark:from-blue-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your SR&ED Tax Credits?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Book your free strategy session today and discover how much your
            business could receive in tax refunds. No obligation, no pressure.
          </p>

          <CTAButtons />

          <CTAStats />
        </AnimatedSection>
      </div>
    </section>
  );
}
