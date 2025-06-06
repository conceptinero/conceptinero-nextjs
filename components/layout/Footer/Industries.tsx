import { industries } from "@/components/data";

function Industries() {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
        Industries We Serve
      </h3>
      <ul className="space-y-2">
        {industries.map((industry) => (
          <IndustryLabel industry={industry} key={industry} />
        ))}
      </ul>
    </div>
  );
}

function IndustryLabel({ industry }: { industry: string }) {
  return (
    <li>
      <span className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm transition-colors duration-300">
        {industry}
      </span>
    </li>
  );
}

export default Industries;
