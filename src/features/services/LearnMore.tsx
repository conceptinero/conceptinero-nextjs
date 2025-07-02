"use client";
import { Button } from "@/components/ui/button";

type Props = {
  serviceId: string;
};

function LearnMore({ serviceId }: Props) {
  return (
    <Button
      variant="outline"
      className="mt-auto"
      onClick={() =>
        document
          .getElementById(serviceId)
          ?.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    >
      Learn More
    </Button>
  );
}

export default LearnMore;
