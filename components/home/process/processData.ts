import {
  CheckCircle2,
  ClipboardList,
  FileCheck,
  CreditCard,
  LucideIcon,
} from "lucide-react";

export const steps = [
  {
    icon: CheckCircle2,
    title: "Assess",
    description: "We do an in-depth assessment of your software R&D.",
    color: "blue",
  },
  {
    icon: ClipboardList,
    title: "Make a Plan",
    description:
      "We create a framework for easy tracking of relevant information.",
    color: "green",
  },
  {
    icon: FileCheck,
    title: "Submit Claim",
    description:
      "We help your accountant to file a SR&ED claim on your behalf and we handle all correspondence with CRA.",
    color: "amber",
  },
  {
    icon: CreditCard,
    title: "Get Paid",
    description:
      "We make sure you get paid. If there is an audit we'll make sure you are ready for it.",
    color: "rose",
  },
];

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};
