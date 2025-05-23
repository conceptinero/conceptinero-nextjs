import { industries } from "../data";

function Industries() {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
        Industries We Serve
      </h3>
      <ul className="space-y-2">
        {industries.map((industry) => (
          <li key={industry}>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              {industry}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Industries;
