import AboutCards from "./AboutCards";
import { HomeAboutIndustries } from "@/features/Industries";
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
      {/* About Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Canada&apos;s Trusted SR&ED Specialists
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Founded in 2015, Conceptinero has grown into one of Canada&apos;s most
        trusted SR&ED consulting firms. With a team of industry specialists and
        former CRA auditors, we understand exactly what it takes to create
        successful claims.
      </p>

      <AboutCards />

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Our mission is simple: help innovative Canadian companies get the
        maximum tax credits they deserve while eliminating the complexity and
        stress of the SR&ED process.
      </p>

      <HomeAboutIndustries />
    </AnimatedSection>
  );
}

export default ContentColumn;
