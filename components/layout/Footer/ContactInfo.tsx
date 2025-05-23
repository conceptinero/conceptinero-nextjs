import { Mail, MapPin, Phone } from "lucide-react";

type Props = {};

function ContactInfo({}: Props) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
        Contact Us
      </h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            info@conceptinero.com
          </span>
        </li>
        <li className="flex items-start">
          <Phone className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            +1 (123) 456-7890
          </span>
        </li>
        <li className="flex items-start">
          <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            123 Business Ave, Suite 500
            <br />
            Toronto, ON, Canada
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
