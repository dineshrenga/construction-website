import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DineConstruction",
  description: "Building the future with excellence and precision. Leading construction firm specializing in industrial, commercial, and residential projects.",
};

import { QuoteProvider } from "@/context/QuoteContext";
import GlobalQuote from "@/components/GlobalQuote";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <QuoteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <GlobalQuote />
        </QuoteProvider>
      </body>
    </html>
  );
}
