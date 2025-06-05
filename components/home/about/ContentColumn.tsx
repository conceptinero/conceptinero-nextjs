import AboutHeading from "./AboutHeading";
import AboutCards from "./AboutCards";
import AboutIndustries from "./AboutIndustries";
import AnimatedSection from "@/components/shared/AnimatedSection";

function ContentColumn() {
  return (
    <AnimatedSection
      className="lg:w-1/2"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* <Badge
        variant="outline"
        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-4"
      >
        About Conceptinero
      </Badge> */}
      <AboutHeading />
      <AboutCards />
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Our mission is simple: help innovative Canadian companies get the
        maximum tax credits they deserve while eliminating the complexity and
        stress of the SR&ED process.
      </p>
      <AboutIndustries />
    </AnimatedSection>
  );
}

export default ContentColumn;
