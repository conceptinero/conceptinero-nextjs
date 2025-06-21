// Layout-specific data used across navbar and footer components
export const navigationLinks: NavigationLink[] = [
  { href: "/" as const, label: "Home" as const },
  { href: "/services" as const, label: "Services" as const },
  { href: "/about" as const, label: "About Us" as const },
  { href: "/blog" as const, label: "Blog" as const },
  { href: "/contact" as const, label: "Contact" as const },
];

type NavigationLink = {
  href: "/" | "/services" | "/about" | "/blog" | "/contact";
  label: "Home" | "Services" | "About Us" | "Blog" | "Contact";
};
