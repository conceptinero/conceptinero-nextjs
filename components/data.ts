import {
  XCircle,
  FileQuestion,
  FileX,
  LucideProps,
  Briefcase,
  Target,
  ThumbsUp,
  UserCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileCheck,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

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

export const industriesWithColors: IndustryWithColor[] = industries.map(
  (industry, index) => ({
    industry,
    color: colours[index],
  })
);

export const stats: Status[] = [
  { quantity: "$75M+", description: "In Tax Credits Filed" },
  { quantity: "94.25%", description: "Success Rate" },
  { quantity: "$2.1M", description: "Largest Approved Claim" },
  { quantity: "$152K", description: "Average Claim" },
];

export const frustrationItems: FrustrationItem[] = [
  {
    title: "Being passed around",
    description:
      "Avoid the runaround with multiple consultants. Get one dedicated expert from start to finish.",
    icon: XCircle,
  },
  {
    title: "Having to do the heavy lifting",
    description:
      "We handle the complex paperwork and calculations, so you can focus on running your business.",
    icon: FileQuestion,
  },
  {
    title: "No IT or software experience",
    description:
      "Our consultants have technical backgrounds in the industries they serve, ensuring accurate claims.",
    icon: FileX,
  },
];

export const features: Feature[] = [
  {
    icon: UserCheck,
    title: "Dedicated Consultant",
    description:
      "Work with one consultant from start to finish. No passing you around from person to person.",
  },
  {
    icon: ThumbsUp,
    title: "Success Fee",
    description:
      "Only pay when your claim is successful. No upfront costs or hidden fees.",
  },
  {
    icon: Target,
    title: "95% Success Rate",
    description:
      "Our claims have a 94.25% approval rate, well above the industry average.",
  },
  {
    icon: Briefcase,
    title: "Deep Industry Focus",
    description:
      "Our consultants have technical backgrounds in the industries they serve.",
  },
];

export const steps: Step[] = [
  {
    icon: CheckCircle2,
    title: "Assess",
    description:
      "We evaluate your R&D activities to determine eligibility and potential claim size.",
    color: "blue",
  },
  {
    icon: ClipboardList,
    title: "Make a Plan",
    description:
      "We develop a customized claim strategy to maximize your eligible expenses.",
    color: "green",
  },
  {
    icon: FileCheck,
    title: "Submit Claim",
    description:
      "We prepare and submit all required documentation to the CRA on your behalf.",
    color: "amber",
  },
  {
    icon: CreditCard,
    title: "Get Paid",
    description:
      "You receive your tax credit, typically within 8-12 weeks of submission.",
    color: "rose",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Conceptinero was a game-changer for our tech startup. They secured over $180,000 in SR&ED credits for us, which was critical for our R&D investments. Their process was smooth and their expertise was evident.",
    author: "Sarah Chen",
    position: "CTO, TechInnovate Solutions",
    company: "Software & IT",
    image: "/testimonials/testimonial-1.webp",
  },
  {
    quote:
      "After struggling with SR&ED claims on our own for years, we brought in Conceptinero. They increased our claim amount by 43% and handled everything from documentation to CRA questions. I only wish we'd found them sooner.",
    author: "Michael Patel",
    position: "CEO, MediTech Labs",
    company: "Healthcare & Medical Sciences",
    image: "/testimonials/testimonial-2.webp",
  },
  {
    quote:
      "As a manufacturing company, we were skeptical about whether our innovations qualified for SR&ED. Conceptinero not only confirmed our eligibility but secured us a $245,000 tax credit. Their industry knowledge was impressive.",
    author: "Jennifer Wilson",
    position: "Director of Operations, Precision Manufacturing",
    company: "Manufacturing",
    image: "/testimonials/testimonial-3.webp",
  },
];

type WebLink = {
  href: "/" | "/services" | "/about" | "/blog" | "/contact";
  label: "Home" | "Services" | "About Us" | "Blog" | "Contact";
};

export type Status = {
  quantity: string;
  description: string;
};

export type IndustryWithColor = {
  industry: string;
  color: string;
};

export type FrustrationItem = {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type Feature = FrustrationItem;
export type Step = FrustrationItem & {
  color: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
};
