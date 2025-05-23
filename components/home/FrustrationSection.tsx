'use client';

import { PieChart, XCircle, FileQuestion, FileX } from 'lucide-react';
import { motion } from 'framer-motion';

const frustrationItems = [
  {
    title: 'Being passed around',
    description: 'Avoid the runaround with multiple consultants. Get one dedicated expert from start to finish.',
    icon: PieChart,
  },
  {
    title: 'Having to do the heavy lifting',
    description: 'We handle the complex paperwork and calculations, so you can focus on running your business.',
    icon: FileQuestion,
  },
  {
    title: 'No IT or software experience',
    description: 'Our consultants have technical backgrounds in the industries they serve, ensuring accurate claims.',
    icon: FileX,
  },
];

export function FrustrationSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Don't Be Frustrated With the Complexity of Applying for SR&ED
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The SR&ED program is notoriously complex, but with our experts by your side, the process becomes simple and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {frustrationItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full mb-6">
                <XCircle className="h-10 w-10 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Solution: Simplified SR&ED Process
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We've streamlined the SR&ED application process to make it accessible and stress-free for businesses of all sizes. Our dedicated industry-specialized consultants stay with you from start to finish.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                And with our success-based fee structure, you only pay when your claim is approved.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-full shadow-lg">
                <PieChart className="h-24 w-24 text-blue-600" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}