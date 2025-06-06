import {
  UserCheck,
  ThumbsUp,
  Target,
  Briefcase,
  LucideIcon,
} from "lucide-react";

export const features = [
  {
    icon: UserCheck,
    title: "Dedicated Consultant",
    description:
      "You get full service from a dedicated consultant who will be with you from start to end.",
  },
  {
    icon: ThumbsUp,
    title: "Success Fee",
    description:
      "Our fee structure means we only get paid when you get paid. It's a win-win situation for you.",
  },
  {
    icon: Target,
    title: "95% Success Rate",
    description:
      "We have submitted $50 Million in claims to CRA. Over 320 were Accepted As Filed, for an average $146,000 per company!",
  },
  {
    icon: Briefcase,
    title: "Deep Industry Focus",
    description:
      "We focus on IT-related claims, Manufacturing and Medical Industries. We specialize in these industries and we know the CRA.",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};
