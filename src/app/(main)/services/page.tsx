import { IndustriesAsService } from "@/features/Industries";
import {
  Hero,
  ValueProposition,
  DetailedServices,
  CallToAction,
} from "@/features/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SR&ED Consulting Services | Expert Tax Credit Claims | Conceptinero",
  description:
    "Professional SR&ED consulting services including eligibility assessment, claim preparation, CRA audit support, and tax credit optimization. Maximize your R&D refunds with our expert team.",
  keywords: [
    "SR&ED consulting services",
    "SR&ED claim preparation",
    "R&D tax credit consulting",
    "CRA audit support",
    "SR&ED eligibility assessment",
    "scientific research tax credits",
    "experimental development claims",
    "SR&ED documentation",
    "tax credit optimization",
    "R&D funding Canada",
  ],
  openGraph: {
    title: "SR&ED Consulting Services | Expert Tax Credit Claims",
    description:
      "Professional SR&ED consulting services including eligibility assessment, claim preparation, and CRA audit support. Maximize your R&D refunds.",
    type: "website",
    images: [
      {
        url: "/services/1.webp",
        width: 1200,
        height: 630,
        alt: "SR&ED Consulting Services by Conceptinero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SR&ED Consulting Services | Expert Tax Credit Claims",
    description:
      "Professional SR&ED consulting services including eligibility assessment, claim preparation, and CRA audit support.",
    images: ["/services/1.webp"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <DetailedServices />
      <IndustriesAsService />
      <CallToAction />
    </>
  );
}

// export default function ServicesPage() {
//   return <p>SERVICES</p>;
// }
