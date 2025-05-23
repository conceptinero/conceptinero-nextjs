'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookConsultation } from '@/components/shared/BookConsultation';
import { motion } from 'framer-motion';

export function CTASection() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-800 to-blue-900 dark:from-blue-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your SR&ED Tax Credits?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Book your free strategy session today and discover how much your business could receive in tax refunds. No obligation, no pressure.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              onClick={() => setConsultationOpen(true)}
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 text-lg"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-800/50 px-8 text-lg"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">No Upfront Fees</p>
              <p className="text-blue-200">Success-based pricing only</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">15-Min Call</p>
              <p className="text-blue-200">Quick initial assessment</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Fast Response</p>
              <p className="text-blue-200">Same-day callback guaranteed</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <BookConsultation open={consultationOpen} setOpen={setConsultationOpen} />
    </section>
  );
}