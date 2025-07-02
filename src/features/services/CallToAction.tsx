import ConsultationButton from "@/features/calendly/ConsultationButton";

export default function CallToAction() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Maximize Your SR&ED Tax Credits?
              </h2>
              <p className="text-xl text-blue-100">
                Book your free strategy session today and discover how we can
                help your business.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ConsultationButton style="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
