import CurrentYear from "./CurrentYear";
import Link from "next/link";

function Rights() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; <CurrentYear /> Conceptinero. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <Link
          href="/privacy"
          className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
}

export default Rights;
