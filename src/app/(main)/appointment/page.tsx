import CalendlyEmbed from "@/features/calendly/CalendlyEmbed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Book Your Free SR&ED Consultation | Schedule Appointment | Conceptinero",
  description:
    "Schedule your free SR&ED consultation with our tax credit experts. Book a convenient time to discuss your R&D tax credit opportunities and maximize your refunds.",
  keywords: [
    "book SR&ED consultation",
    "schedule tax credit appointment",
    "free SR&ED consultation booking",
    "R&D tax credit meeting",
    "SR&ED expert appointment",
    "tax credit consultation scheduling",
    "SR&ED assessment booking",
    "R&D funding consultation",
    "book SR&ED expert",
    "schedule SR&ED meeting",
  ],
  openGraph: {
    title: "Book Your Free SR&ED Consultation | Conceptinero",
    description:
      "Schedule your free SR&ED consultation with our tax credit experts. Book a convenient time to discuss your R&D opportunities.",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Book Free SR&ED Consultation with Conceptinero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Free SR&ED Consultation | Conceptinero",
    description:
      "Schedule your free SR&ED consultation with our tax credit experts.",
    images: ["/hero.webp"],
  },
  alternates: {
    canonical: "/appointment",
  },
};

export default function CalendlyPage() {
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <CalendlyEmbed />
    </div>
  );
}
