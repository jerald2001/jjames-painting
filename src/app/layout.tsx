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
  adjustFontFallback: "Times New Roman",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const inter = localFont({
  src: "../../public/fonts/inter-variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
  style: "normal",
  preload: true,
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
});

const SITE_TITLE_DEFAULT =
  "Sunshine Coast Painters Since 1985 | J. James Painting";
const SITE_DESCRIPTION =
  "Sunshine Coast painters since 1985. Rental, pre-sale, new-home and boutique residential painting across Noosa, Buderim, Caloundra, Maleny and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jjamespaintingcontractorsqld.com.au"),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: "%s | J. James Painting",
  },
  description: SITE_DESCRIPTION,
  manifest: "/manifest.webmanifest",
  applicationName: "J. James Painting Contractors",
  authors: [{ name: "J. James Painting Contractors" }],
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    siteName: "J. James Painting Contractors",
    locale: "en_AU",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/og/default.webp",
        width: 1200,
        height: 630,
        alt: "Freshly painted single-storey Sunshine Coast home by J. James Painting Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: ["/og/default.webp"],
  },
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
