import AnimatedSection from "@/components/shared/AnimatedSection";
import HiglightText from "@/components/ui/HiglightText";

function FrustrationHeading() {
  return (
    <AnimatedSection
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Don&apos;t Be Frustrated With the Complexity of Applying for SR&ED
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
        Business owners tell us they want to get as much of their R&D reimbursed
        from the CRA as possible, but find it difficult to submit tax claims
        that stand up to the scrutiny of the CRA.{" "}
        <HiglightText>
          Many companies have had a bad experience with SR&ED consulting firms
          who have filed a claim on their behalf.
        </HiglightText>
      </p>
    </AnimatedSection>
  );
}

export default FrustrationHeading;
