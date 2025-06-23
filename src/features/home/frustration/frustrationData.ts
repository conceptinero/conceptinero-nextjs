import { XCircle, Dumbbell, FileCode, LucideIcon } from "lucide-react";

export const frustrationItems = [
  {
    title: "Being passed around",
    description:
      "Avoid the runaround with multiple consultants. Get one dedicated expert from start to finish.",
    icon: XCircle,
  },
  {
    title: "Having to do the heavy lifting",
    description:
      "SR&ED consulting firms may want your team to create the technical project description and prepare all documentation.",
    icon: Dumbbell,
  },
  {
    title: "No IT or software experience",
    description:
      "SR&ED consultants often find it hard to identify what fits the definition of SR&ED. There is a shortage of experienced consultants.",
    icon: FileCode,
  },
];

export type FrustrationItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};
