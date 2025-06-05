import { Contact, contacts } from "./footerData";

function ContactItem({ icon: Icon, href, content, newTab }: Contact) {
  return (
    <li>
      <a
        href={href}
        className="flex items-start"
        target={newTab ? "_blank" : "_self"}
      >
        <Icon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
        <span className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm transition-colors duration-300">
          {content}
        </span>
      </a>
    </li>
  );
}

function ContactInfo() {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
        Contact Us
      </h3>
      <ul className="space-y-2">
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            icon={contact.icon}
            href={contact.href}
            content={contact.content}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
