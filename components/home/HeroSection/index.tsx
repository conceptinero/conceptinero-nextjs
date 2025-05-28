import StatusBar from "./StatusBar";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <HeroContent />
        <HeroImage />
      </div>
      <StatusBar />
    </section>
  );
}
