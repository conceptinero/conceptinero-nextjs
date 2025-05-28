import React from "react";
import { FrustrationItem } from "./FrustrationData";

function FrustrationCard({ icon, title, description }: FrustrationItem) {
  return (
    <div
      className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
      // initial={{ opacity: 0, y: 30 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full mb-6">
        {/* <XCircle className="h-10 w-10 text-red-500 dark:text-red-400" /> */}
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default FrustrationCard;
