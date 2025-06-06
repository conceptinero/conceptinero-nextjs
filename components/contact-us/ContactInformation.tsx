import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import ConsultationButton from "../shared/ConsultationButton";
import { Contact, contacts } from "../data";

function ContactInformation() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Get In Touch
      </h2>

      <div className="space-y-6">
        {contacts.map((contact) => (
          <ContactItem {...contact} key={contact.title} />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Book a Free Consultation
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Discover if your R&D work qualifies for SR&ED tax credits with a free
          15-minute consultation.
        </p>
        <ConsultationButton />
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, href, content, newTab }: Contact) {
  return (
    <a
      className="flex items-start "
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </a>
  );
}

export default ContactInformation;
