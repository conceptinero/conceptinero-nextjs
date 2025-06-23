import ImageColumn from "./ImageColumn";
import ContentColumn from "./ContentColumn";

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <ImageColumn />
          <ContentColumn />
        </div>
      </div>
    </section>
  );
}
