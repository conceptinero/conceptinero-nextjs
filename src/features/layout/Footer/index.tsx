import { Separator } from "@/components/ui/separator";
import CompanyInfo from "./CompanyInfo";
import Rights from "./Rights";
import FooterLinks from "./FooterLinks";
import { FooterIndustries } from "@/features/Industries";
import FooterContact from "@/features/contact-us/components/FooterContact";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo />
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLinks />
            </ul>
          </div>
          <FooterIndustries />
          <FooterContact />
        </div>
        <Separator className="my-8" />
        <Rights />
      </div>
    </footer>
  );
}
