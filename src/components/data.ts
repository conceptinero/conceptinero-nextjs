import { Mail, Phone, LucideIcon } from "lucide-react";

export const industries = [
  "Software & IT",
  "Healthcare & Medical Sciences",
  "Manufacturing",
  "Engineering",
  "Food & Life Sciences",
];

export const contacts: Contact[] = [
  {
    icon: Mail,
    href: "mailto:kevin@conceptinero.com",
    content: "kevin@conceptinero.com",
    title: "Email Us",
  },
  {
    icon: Phone,
    href: "tel:+16472999241",
    content: "+1 (647) 299 9241",
    title: "Call Us",
  },
];

export type Contact = {
  icon: LucideIcon;
  href: string;
  content: string;
  title?: string;
};
