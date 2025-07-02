import { Service } from "./servicesData";
import LearnMore from "./LearnMore";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div
      key={service.id}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
    >
      <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {service.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {service.description}
      </p>
      <LearnMore serviceId={service.id} />
    </div>
  );
}

export default ServiceCard;
