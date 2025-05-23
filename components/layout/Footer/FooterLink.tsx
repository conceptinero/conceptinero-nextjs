import Link from "next/link";

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
      >
        {label}
      </Link>
    </li>
  );
}

export default FooterLink;
