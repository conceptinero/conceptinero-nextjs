import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import JotaiProvider from "@/components/providers/JotaiProvider";
import { BookConsultation } from "@/components/layout/BookConsultation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conceptinero - SR&ED Tax Credit Specialists",
  description:
    "Get a tax refund of up to 65% on your R&D costs with our expert SR&ED consulting services.",
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
          enableSystem
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
      </body>
    </html>
  );
}
