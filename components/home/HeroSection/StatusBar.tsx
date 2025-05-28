import React from "react";

type Status = {
  quantity: string;
  description: string;
};

const data: Status[] = [
  { quantity: "$75M+", description: "In Tax Credits Filed" },
  { quantity: "94.25%", description: "Success Rate" },
  { quantity: "$2.1", description: "Largest Approved Claim" },
];

function StatusBar() {
  return (
    <div className="bg-blue-900 dark:bg-blue-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((d, i) => (
            <StatusItem key={i} {...d} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusItem({ quantity, description }: Status) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white">{quantity}</p>
      <p className="text-sm text-blue-200">{description}</p>
    </div>
  );
}

export default StatusBar;
