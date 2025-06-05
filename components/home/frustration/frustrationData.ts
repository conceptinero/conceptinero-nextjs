import { XCircle, Dumbbell, FileCode } from "lucide-react";
import { IconComponent } from "../homeData";

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
      "We handle the complex paperwork and calculations, so you can focus on running your business.",
    icon: Dumbbell,
  },
  {
    title: "No IT or software experience",
    description:
      "Our consultants have technical backgrounds in the industries they serve, ensuring accurate claims.",
    icon: FileCode,
  },
];

export type FrustrationItem = {
  title: string;
  description: string;
  icon: IconComponent;
};
