import { XCircle, FileQuestion, FileX } from "lucide-react";
import { ReactNode } from "react";

export type FrustrationItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconClasses = "h-10 w-10 text-red-500 dark:text-red-400";

export const frustrationItems: FrustrationItem[] = [
  {
    title: "Being passed around",
    description:
      "Avoid the runaround with multiple consultants. Get one dedicated expert from start to finish.",
    icon: <XCircle className={iconClasses} />,
  },
  {
    title: "Having to do the heavy lifting",
    description:
      "We handle the complex paperwork and calculations, so you can focus on running your business.",
    icon: <FileQuestion className={iconClasses} />,
  },
  {
    title: "No IT or software experience",
    description:
      "Our consultants have technical backgrounds in the industries they serve, ensuring accurate claims.",
    icon: <FileX className={iconClasses} />,
  },
];
