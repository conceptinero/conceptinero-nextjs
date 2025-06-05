import { testimonials } from "./testimonialsData";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsHeader />

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
