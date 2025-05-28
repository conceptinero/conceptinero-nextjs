import React from "react";

type Props = {};

function FrustrationHeading({}: Props) {
  return (
    <div
      className="text-center mb-16"
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Don&apos;t Be Frustrated With the Complexity of Applying for SR&ED
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        The SR&ED program is notoriously complex, but with our experts by your
        side, the process becomes simple and stress-free.
      </p>
    </div>
  );
}

export default FrustrationHeading;
