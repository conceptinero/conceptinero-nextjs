import AnimatedSection from "@/components/shared/AnimatedSection";
import HiglightText from "@/components/ui/HiglightText";
import { PieChart } from "lucide-react";

function SolutionCard() {
  return (
    <AnimatedSection
      className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800/40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Solution: Simplified SR&ED Process
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We are a <HiglightText>full-service</HiglightText> SR&ED Consulting
            Firm specialized in the{" "}
            <HiglightText>software industry</HiglightText>.
            <br />
            <br />
            We engage with you to assess the technical and financial viability
            and make sure your claim gets approved by CRA with{" "}
            <HiglightText>minimal audit risk</HiglightText>.
            <br />
            <br />
            Unlike larger SR&ED consulting firms, we offer{" "}
            <HiglightText>full service</HiglightText> from an{" "}
            <HiglightText>individual consultant</HiglightText> who gets to know
            consultant who gets to know your team and fully manages your CRA
            claim.
            <br />
            <br />
            We don&apos;t expect you to do the heavy lifting, which means
            maximum results with minimal input from your team so{" "}
            <HiglightText>you can focus on the business.</HiglightText>
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-full shadow-lg">
            <PieChart className="h-24 w-24 text-blue-600" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default SolutionCard;
