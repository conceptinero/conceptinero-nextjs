import {
  PieChart,
  FileCheck,
  BarChartHorizontal,
  Users,
  FileClock,
} from "lucide-react";

export const industryIcons = {
  software: PieChart,
  healthcare: FileCheck,
  manufacturing: BarChartHorizontal,
  engineering: Users,
  food: FileClock,
};

export const industries: Industry[] = [
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

export type Industry = {
  id: string;
  name: string;
  description: string;
  activities: string[];
  image: string;
};

const colours = ["blue", "green", "amber", "purple", "rose"];

export const industriesWithColors = industries.map((industry, index) => ({
  industry: industry.name,
  color: colours[index],
}));

export type IndustryWithColor = {
  industry: string;
  color: string;
};
