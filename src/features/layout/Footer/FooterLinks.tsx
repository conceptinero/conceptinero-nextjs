import { navigationLinks } from "../layoutData";
import Link from "next/link";

function FooterLinks() {
  return (
    <ul className="space-y-2">
      {navigationLinks.map((link) => (
        <FooterLink {...link} key={link.href} />
      ))}
    </ul>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
}

export default FooterLinks;
