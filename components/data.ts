export const links: WebLink[] = [
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

export const colours: string[] = ["blue", "green", "amber", "purple", "rose"];

export type IndustryWithColor = {
  industry: string;
  color: string;
};

export const industriesWithColors: IndustryWithColor[] = industries.map(
  (industry, index) => ({
    industry,
    color: colours[index],
  })
);

// data.ts or a util file

export const stats: Status[] = [
  { quantity: "$75M+", description: "In Tax Credits Filed" },
  { quantity: "94.25%", description: "Success Rate" },
  { quantity: "$2.1M", description: "Largest Approved Claim" },
  { quantity: "$152K", description: "Average Claim" },
];

type WebLink = {
  href: "/" | "/services" | "/about" | "/blog" | "/contact";
  label: "Home" | "Services" | "About Us" | "Blog" | "Contact";
};

export type Status = {
  quantity: string;
  description: string;
};
