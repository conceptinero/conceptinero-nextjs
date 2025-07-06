import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  ContactForm,
  ContactInformation,
} from "@/features/contact-us/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Conceptinero | Get Your Free SR&ED Consultation Today",
  description:
    "Contact our SR&ED experts for a free consultation. Located in Ontario, Canada. Call +1-647-299-9241 or email info@conceptinero.com. Get expert help with your R&D tax credits.",
  keywords: [
    "contact SR&ED consultants",
    "free SR&ED consultation",
    "SR&ED experts Ontario",
    "R&D tax credit consultation",
    "SR&ED help Canada",
    "contact tax credit specialists",
    "SR&ED consultation Ontario",
    "R&D funding consultation",
    "tax credit expert contact",
    "SR&ED claim help",
  ],
  openGraph: {
    title: "Contact Conceptinero | Free SR&ED Consultation",
    description:
      "Contact our SR&ED experts for a free consultation. Located in Ontario, Canada. Get expert help with your R&D tax credits.",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Contact Conceptinero for SR&ED Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Conceptinero | Free SR&ED Consultation",
    description:
      "Contact our SR&ED experts for a free consultation. Located in Ontario, Canada.",
    images: ["/hero.webp"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about SR&ED tax credits? Want to learn more about
              our services? Get in touch with our team.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactInformation />
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
