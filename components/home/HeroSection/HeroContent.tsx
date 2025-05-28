import { Button } from "@/components/ui/button";
import ConsultationButton from "@/components/shared/ConsultationButton";
import HeroKeyPoints from "./HeroKeyPoints";
import HeroText from "./HeroText";

function HeroContent() {
  return (
    <div
      className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left"
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.1 }}
    >
      <HeroText />
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
      <HeroKeyPoints />
    </div>
  );
}

export default HeroContent;
