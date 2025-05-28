"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Conceptinero was a game-changer for our tech startup. They secured over $180,000 in SR&ED credits for us, which was critical for our R&D investments. Their process was smooth and their expertise was evident.",
    author: "Sarah Chen",
    position: "CTO, TechInnovate Solutions",
    company: "Software & IT",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "After struggling with SR&ED claims on our own for years, we brought in Conceptinero. They increased our claim amount by 43% and handled everything from documentation to CRA questions. I only wish we'd found them sooner.",
    author: "Michael Patel",
    position: "CEO, MediTech Labs",
    company: "Healthcare & Medical Sciences",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote:
      "As a manufacturing company, we were skeptical about whether our innovations qualified for SR&ED. Conceptinero not only confirmed our eligibility but secured us a $245,000 tax credit. Their industry knowledge was impressive.",
    author: "Jennifer Wilson",
    position: "Director of Operations, Precision Manufacturing",
    company: "Manufacturing",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      handleNext();
    }

    if (touchEndX - touchStartX > 50) {
      // Swipe right
      handlePrev();
    }
  };

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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Success stories from companies that have trusted us with their SR&ED
            claims.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-2/3 md:pl-8">
                          <Quote className="h-10 w-10 text-blue-200 dark:text-blue-800 mb-4" />
                          <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6">
                            &quot;{testimonial.quote}&quot;
                          </p>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.author}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {testimonial.position}
                            </p>
                            <p className="text-blue-600 dark:text-blue-400 text-sm">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white dark:bg-gray-800 rounded-full shadow-md z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white dark:bg-gray-800 rounded-full shadow-md z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-blue-600"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
