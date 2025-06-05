import {
  CheckCircle2,
  ClipboardList,
  FileCheck,
  CreditCard,
} from "lucide-react";
import { IconComponent } from "../homeData";

export const steps = [
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

export type Step = {
  title: string;
  description: string;
  icon: IconComponent;
  color: string;
};
