import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const fraunces = localFont({
  src: "../../public/fonts/fraunces-variable.woff2",
  variable: "--font-heading",
  display: "swap",
  weight: "100 900",
  style: "normal",
  preload: true,
});

const inter = localFont({
  src: "../../public/fonts/inter-variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
  style: "normal",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jjamespaintingcontractorsqld.com.au"),
  title: {
    default: "Painters Sunshine Coast | J. James Painting, Family-Run Since 1985",
    template: "%s | J. James Painting",
  },
  description:
    "Sunshine Coast painters since 1985. Rental repaints, pre-sale prep, new-home painting, and boutique residential work across Noosa, Buderim, Caloundra, Sunshine Beach, Maleny and beyond.",
  manifest: "/manifest.webmanifest",
  applicationName: "J. James Painting Contractors",
  authors: [{ name: "J. James Painting Contractors" }],
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4EE" },
    { media: "(prefers-color-scheme: dark)", color: "#13225C" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
