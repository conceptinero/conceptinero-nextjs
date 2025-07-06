import { Hero, MissionAndValues, Team, CallToAction } from "@/features/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Conceptinero | SR&ED Tax Credit Experts & Specialists",
  description:
    "Meet the SR&ED specialists at Conceptinero. Learn about our experienced team, mission, and commitment to helping Canadian businesses maximize their R&D tax credits and refunds.",
  keywords: [
    "SR&ED experts",
    "tax credit specialists",
    "R&D consulting team",
    "SR&ED professionals",
    "Canadian tax consultants",
    "Conceptinero team",
    "SR&ED experience",
    "tax credit expertise",
    "R&D funding specialists",
    "scientific research consultants",
  ],
  openGraph: {
    title: "About Conceptinero | SR&ED Tax Credit Experts",
    description:
      "Meet the SR&ED specialists at Conceptinero. Learn about our experienced team and commitment to maximizing your R&D tax credits.",
    type: "website",
    images: [
      {
        url: "/team/team-1.webp",
        width: 1200,
        height: 630,
        alt: "Conceptinero SR&ED Experts Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Conceptinero | SR&ED Tax Credit Experts",
    description:
      "Meet the SR&ED specialists at Conceptinero. Learn about our experienced team and commitment to maximizing your R&D tax credits.",
    images: ["/team/team-1.webp"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <MissionAndValues />
      <Team />
      <CallToAction />
    </>
  );
}
