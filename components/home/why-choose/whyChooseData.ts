import { UserCheck, ThumbsUp, Target, Briefcase } from "lucide-react";
import { IconComponent } from "../homeData";

export const features = [
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

export type Feature = {
  title: string;
  description: string;
  icon: IconComponent;
};
