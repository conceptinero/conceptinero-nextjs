import FrustrationHeading from "./FrustrationHeading";
import FrustrationCards from "./FrustrationCards";
import SolutionCard from "./SolutionCard";

export function FrustrationSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FrustrationHeading />
        <FrustrationCards />
        <SolutionCard />
      </div>
    </section>
  );
}
