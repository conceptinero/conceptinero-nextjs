import { ProcessHeader } from "./ProcessHeader";
import { ProcessSteps } from "./ProcessSteps";
import { ProcessTimingAlert } from "./ProcessTimingAlert";

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessHeader />

        <ProcessSteps />

        <ProcessTimingAlert />
      </div>
    </section>
  );
}
