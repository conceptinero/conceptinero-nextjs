import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
    image: string;
  };
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`h-full bg-gray-50 dark:bg-gray-900 rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 ${className}`}
    >
      <div className="flex-col md:flex-row justify-center items-center h-full">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center items-center">
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
  );
}
