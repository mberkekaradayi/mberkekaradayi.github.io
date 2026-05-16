import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const siteUrl = "https://mberkekaradayi.com";

const seoDescription =
  "Software Engineer at Coinbase focused on software architecture, real-time product systems, AI-assisted engineering workflows, and product-quality software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mehmet Berke Karadayi | Software Engineer",
    template: "%s | Mehmet Berke Karadayi",
  },

  description: seoDescription,

  keywords: [
    "Mehmet Berke Karadayi",
    "Software Engineer",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "GraphQL",
    "Next.js",
    "Coinbase",
    "UBC",
  ],

  authors: [{ name: "Mehmet Berke Karadayi", url: siteUrl }],
  creator: "Mehmet Berke Karadayi",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mehmet Berke Karadayi",
    title: "Mehmet Berke Karadayi | Software Engineer",
    description: seoDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: "Mehmet Berke Karadayi | Software Engineer",
    description: seoDescription,
  },

  icons: {
    icon: { url: "/icon.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
