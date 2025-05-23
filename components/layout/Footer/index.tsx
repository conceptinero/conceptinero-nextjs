import { Separator } from "@/components/ui/separator";
import Industries from "./Industries";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import CompanyInfo from "./CompanyInfo";
import Rights from "./Rights";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo />
          <QuickLinks />
          <Industries />
          <ContactInfo />
        </div>
        <Separator className="my-8" />
        <Rights />
      </div>
    </footer>
  );
}
