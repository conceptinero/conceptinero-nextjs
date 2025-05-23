export const links: Link[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const industries: string[] = [
  "Software & IT",
  "Healthcare & Medical Sciences",
  "Manufacturing",
  "Engineering",
  "Food & Life Sciences",
];

type Link = {
  href: "/" | "/services" | "/about" | "/blog" | "/contact";
  label: "Home" | "Services" | "About Us" | "Blog" | "Contact";
};
