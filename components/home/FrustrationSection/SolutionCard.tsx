import { PieChart } from "lucide-react";

function SolutionCard() {
  return (
    <div
      className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800/40"
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Solution: Simplified SR&ED Process
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We&apos;ve streamlined the SR&ED application process to make it
            accessible and <span className="font-bold">stress-free</span> for
            businesses of all sizes. Our dedicated{" "}
            <span className="font-bold">industry-specialized</span> consultants
            stay with you from start to finish. And with our{" "}
            <span className="font-bold">success-based fee</span> structure, you
            only pay when your claim is approved.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-full shadow-lg">
            <PieChart className="h-24 w-24 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionCard;
