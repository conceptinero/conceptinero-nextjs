import { Testimonial } from "./testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
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
      <div className="flex flex-col justify-center items-center h-full text-center">
        <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-8 max-w-4xl">
          &quot;{testimonial.quote}&quot;
        </p>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-lg">
            {testimonial.author}
          </p>
          <p className="text-blue-600 dark:text-blue-400 text-base font-medium">
            {testimonial.company}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
