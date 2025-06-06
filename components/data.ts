import { Mail, Phone, MapPin, LucideIcon } from "lucide-react";

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
    newTab: false,
    title: "Email Us",
  },
  {
    icon: Phone,
    href: "tel:+16472999241",
    content: "+1 (647) 299 9241",
    newTab: false,
    title: "Call Us",
  },
  {
    icon: MapPin,
    href: "https://maps.app.goo.gl/LuWyJK4UezZXxbKr8",
    content: "196 Waldoncroft Cr.\nBurlington, ON L7L 3A5\nCanada",
    newTab: true,
    title: "Visit Us",
  },
];

export type Contact = {
  icon: LucideIcon;
  href: string;
  content: string;
  newTab: boolean;
  title?: string;
};
