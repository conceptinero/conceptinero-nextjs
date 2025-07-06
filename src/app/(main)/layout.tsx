import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/layout/Navbar";
import { Footer } from "@/features/layout/Footer";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
// import JotaiProvider from "@/components/providers/JotaiProvider";
import { BookConsultation } from "@/features/layout/BookConsultation";
import { Provider as JotaiProvider } from "jotai";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://conceptinero.com"
  ),
  title:
    "Conceptinero - SR&ED Tax Credit Specialists | Get Up to 65% R&D Tax Refunds",
  description:
    "Expert SR&ED consulting services helping Canadian businesses claim up to 65% tax refunds on R&D costs. Free consultation available. Maximize your innovation tax credits today.",
  keywords: [
    "SR&ED tax credits",
    "R&D tax refunds Canada",
    "Scientific Research Experimental Development",
    "tax credit consultants",
    "innovation tax incentives",
    "Canadian R&D funding",
    "SR&ED claims",
  ],
  authors: [{ name: "Conceptinero" }],
  creator: "Conceptinero",
  publisher: "Conceptinero",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://conceptinero.com",
    siteName: "Conceptinero",
    title: "Conceptinero - SR&ED Tax Credit Specialists",
    description:
      "Expert SR&ED consulting services helping Canadian businesses claim up to 65% tax refunds on R&D costs. Free consultation available.",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Conceptinero SR&ED Tax Credit Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conceptinero - SR&ED Tax Credit Specialists",
    description:
      "Expert SR&ED consulting services helping Canadian businesses claim up to 65% tax refunds on R&D costs.",
    images: ["/hero.webp"],
  },
  alternates: {
    canonical: "https://conceptinero.com",
  },
  // verification: {
  //   google: "your-google-verification-code", // Add when you have Google Search Console set up
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <JotaiProvider>
            <BookConsultation />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster position="bottom-right" />
          </JotaiProvider>
        </ThemeProvider>
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://conceptinero.com/#organization",
                  name: "Conceptinero",
                  description:
                    "Expert SR&ED consulting services helping Canadian businesses claim up to 65% tax refunds on R&D costs.",
                  url: "https://conceptinero.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://conceptinero.com/logos/conceptinero.webp",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-647-299-9241",
                    contactType: "customer service",
                    areaServed: "CA",
                    availableLanguage: "English",
                    email: "info@conceptinero.com",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "Ontario",
                    addressCountry: "CA",
                  },
                  sameAs: [
                    // Add your social media profiles here
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://conceptinero.com/#website",
                  url: "https://conceptinero.com",
                  name: "Conceptinero",
                  description:
                    "Expert SR&ED consulting services helping Canadian businesses claim up to 65% tax refunds on R&D costs.",
                  publisher: {
                    "@id": "https://conceptinero.com/#organization",
                  },
                  inLanguage: "en-CA",
                },
                {
                  "@type": "Service",
                  name: "SR&ED Tax Credit Consulting",
                  description:
                    "Professional SR&ED consulting services to help businesses maximize their R&D tax credits and refunds.",
                  provider: {
                    "@id": "https://conceptinero.com/#organization",
                  },
                  areaServed: "CA",
                  serviceType: "Tax Consulting",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
