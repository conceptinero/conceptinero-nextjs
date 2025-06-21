import Logo from "../Logo";
import SocialIcons from "./SocialIcons";

function CompanyInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Logo type="footer" />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Full-service SR&ED tax credit consulting firm with a 94.25% success rate
        and over $75M in tax credits filed.
      </p>
      <div className="flex space-x-4">
        <SocialIcons />
      </div>
    </div>
  );
}

export default CompanyInfo;
