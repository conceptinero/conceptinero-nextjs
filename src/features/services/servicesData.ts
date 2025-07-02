import {
  FileCheck,
  BarChartHorizontal,
  FileClock,
  PieChart,
  Users,
  LucideIcon,
} from "lucide-react";

export const industryIcons = {
  software: PieChart,
  healthcare: FileCheck,
  manufacturing: BarChartHorizontal,
  engineering: Users,
  food: FileClock,
};

export const industries = [
  {
    id: "software",
    name: "Software & IT",
    description: `Technology companies often have eligible SR&ED activities but don't realize it. We specialize in identifying qualifying software development work and maximizing claims.`,
    activities: [
      "New algorithm development",
      "Novel software architectures",
      "Integration of disparate systems",
      "Performance optimization research",
      "Overcoming technical challenges in development",
    ],
    image: "/services/1.webp",
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Sciences",
    description:
      "From pharmaceuticals to medical devices, healthcare companies engage in significant R&D. Our healthcare specialists can help identify and document eligible activities.",
    activities: [
      "Novel drug formulation development",
      "Medical device design and testing",
      "Clinical study protocol development",
      "Biotech research activities",
      "Diagnostic methodologies",
    ],
    image: "/services/2.webp",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Manufacturing companies often develop new processes, materials, or tools that qualify for SR&ED. Our technical team can help identify these activities and maximize your claim.",
    activities: [
      "Process improvement research",
      "New material development",
      "Custom tooling and fixture design",
      "Quality control method development",
      "Manufacturing automation research",
    ],
    image: "/services/3.webp",
  },
  {
    id: "engineering",
    name: "Engineering",
    description:
      "Engineering firms regularly engage in SR&ED-eligible work through problem-solving and innovation. Our engineering experts can identify qualifying projects and maximize your claim.",
    activities: [
      "Prototyping and testing novel designs",
      "Simulation and modeling of new systems",
      "Development of more efficient processes",
      "Systems integration challenges",
      "Environmental engineering solutions",
    ],
    image: "/services/4.webp",
  },
  {
    id: "food",
    name: "Food & Life Sciences",
    description:
      "Food science and agri-food companies engage in significant R&D when developing new products, processes, or improving shelf-life. Our specialists understand this industry.",
    activities: [
      "Food preservation technique development",
      "Nutritional enhancement research",
      "Novel ingredient applications",
      "Processing method improvements",
      "Shelf-life extension research",
    ],
    image: "/services/5.webp",
  },
];

export const services: Service[] = [
  {
    id: "eligibility",
    name: "Eligibility Assessment",
    description:
      "We review your R&D activities to determine if they qualify for SR&ED tax credits and provide an estimate of your potential claim amount.",
    icon: FileCheck,
    details: [
      "Comprehensive review of your R&D activities",
      "Identification of eligible projects and expenditures",
      "Preliminary claim amount calculation",
      "Assessment of documentation requirements",
      "Strategic recommendations",
    ],
  },
  {
    id: "claim",
    name: "Claim Preparation",
    description:
      "Our team of technical writers and financial experts prepare a comprehensive, audit-ready SR&ED claim on your behalf.",
    icon: PieChart,
    details: [
      "Technical narrative writing by industry experts",
      "Eligible expenditure calculation",
      "Supporting documentation preparation",
      "Financial schedule development",
      "Claim submission via CRA portal",
    ],
  },
  {
    id: "audit",
    name: "Audit Defense",
    description:
      "If your claim is selected for review or audit, our team of experts will defend your claim at no additional cost.",
    icon: Users,
    details: [
      "Preparation for CRA meetings and interviews",
      "Response to CRA information requests",
      "Development of technical defense documents",
      "Representation during audit proceedings",
      "Appeals process management if necessary",
    ],
  },
  {
    id: "training",
    name: "SR&ED Training & Documentation",
    description:
      "We train your team on how to identify and document SR&ED activities throughout the year, making future claims easier and more robust.",
    icon: BarChartHorizontal,
    details: [
      "Custom SR&ED training workshops",
      "Documentation system implementation",
      "Project tracking tools and templates",
      "Ongoing eligibility assessments",
      "R&D planning for maximum SR&ED benefits",
    ],
  },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  details: string[];
};
