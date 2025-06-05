import { WhyChooseHeader } from "./WhyChooseHeader";
import { WhyChooseFeatures } from "./WhyChooseFeatures";
import { WhyChooseFooter } from "./WhyChooseFooter";

export function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyChooseHeader />

        <WhyChooseFeatures />

        <WhyChooseFooter />
      </div>
    </section>
  );
}
