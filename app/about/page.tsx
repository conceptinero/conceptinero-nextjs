import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Conceptinero",
  description:
    "Learn about Conceptinero's expertise in SR&ED tax credit consulting for Medical Science, Software, and Manufacturing industries.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Conceptinero
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We specialize in maximizing SR&ED tax credits for innovative
              companies in Medical Science, Software, and Manufacturing
              industries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With years of experience in the SR&ED program, our team of
              specialized consultants understands the complexities and nuances
              of the application process. We have helped hundreds of companies
              secure millions in tax refunds.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-6">
              <li>94.25% success rate in SR&ED claims</li>
              <li>$152K average claim value</li>
              <li>Success-based fee structure</li>
              <li>Industry-specialized consultants</li>
              <li>End-to-end claim management</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We handle everything from initial assessment to final submission
              and defense if needed. Our streamlined process ensures maximum
              refunds with minimal effort from your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
