import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  type: "desktop" | "mobile";
};

const styles = {
  desktop: "text-sm font-medium transition-colors hover:text-blue-600",
  mobile: "block py-3 text-base font-medium",
};

function NavLink({ href, label, type }: Props) {
  const pathname = usePathname();

  return (
    <Link
      key={href}
      href={href}
      className={cn(
        styles[type],
        pathname === href ? "text-blue-600" : "text-gray-900 dark:text-gray-100"
      )}
    >
      {label}
    </Link>
  );
}

export default NavLink;
