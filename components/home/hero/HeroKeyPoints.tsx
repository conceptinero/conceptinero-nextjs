import TickIcon from "@/icons/TickIcon";
import React from "react";

const points = ["94.25% Success Rate", "$152K Average Claim"];

function HeroKeyPoints() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
      {points.map((point, i) => (
        <HeroKeyPoint point={point} key={i} />
      ))}
    </div>
  );
  2;
}

function HeroKeyPoint({ point }: { point: string }) {
  return (
    <div className="flex items-center">
      <div className="bg-green-100 rounded-full p-2 mr-2">
        <TickIcon />
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
        {point}
      </span>
    </div>
  );
}

export default HeroKeyPoints;
