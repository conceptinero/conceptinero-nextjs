import { Button } from "@/components/ui/button";
import ConsultationButton from "@/features/calendly/ConsultationButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TickIcon from "@/icons/TickIcon";
import HiglightText from "@/components/ui/HiglightText";

const keyPoints = ["94.25% Success Rate", "$152K Average Claim"];

function HeroContent() {
  return (
    <AnimatedSection
      className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      {/* Hero Text */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 dark:text-white leading-tight mb-6">
        Get a Tax Refund for Your Research & Development
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        At Conceptinero, our SR&ED consultants specialize in Medical Science,
        Software, and Manufacturing industries.
        <br />
        We get CRA to <HiglightText>refund</HiglightText> up to{" "}
        <HiglightText>65%</HiglightText> of your development{" "}
        <HiglightText>costs</HiglightText>
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
        <ConsultationButton size="lg" />
        <Button
          size="lg"
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-600 px-8"
        >
          Learn More
        </Button>
      </div>

      {/* Key Points */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
        {keyPoints.map((point, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-green-100 rounded-full p-2 mr-2">
              <TickIcon />
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {point}
            </span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default HeroContent;
