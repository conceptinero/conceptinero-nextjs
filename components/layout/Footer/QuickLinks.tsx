import FooterLinks from "./FooterLinks";
type Props = {};

function QuickLinks({}: Props) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
        Quick Links
      </h3>
      <ul className="space-y-2">
        <FooterLinks />
      </ul>
    </div>
  );
}

export default QuickLinks;
