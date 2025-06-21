import { Button } from "@/components/ui/button";
import ConsultationButton from "@/components/shared/ConsultationButton";

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <ConsultationButton
        size="lg"
        className="bg-white text-blue-600 hover:bg-blue-50"
      />

      <Button
        size="lg"
        variant="outline"
        className="border-white text-white bg-inherit hover:bg-white  hover:text-blue-800 px-8 text-lg"
      >
        Learn More
      </Button>
    </div>
  );
}
