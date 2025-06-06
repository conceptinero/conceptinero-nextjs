function MapSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.6129694042456!2d-79.7417371!3d43.3642057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b607f3c1c8d97%3A0xf2e58c9ab2753c2a!2s196%20Waldoncroft%20Crescent%2C%20Burlington%2C%20ON%20L7L%203A5%2C%20Canada!5e0!3m2!1sen!2s!4v1749191569371!5m2!1sen!2s"
          className="border-0 rounded-xl w-full h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
