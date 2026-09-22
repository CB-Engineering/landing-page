import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const SITE_URL = "https://cbengineering.be";

export const viewport: Viewport = {
  // Same value as --color-paper in globals.css; metadata cannot read CSS tokens.
  themeColor: "#fbfaf7",
};

const TITLE = "CB Engineering — AI and data architect, Antwerp";
const DESCRIPTION =
  "Bruno Coussement is an AI and data architect. Cloud data platforms, data products, and machine learning in operations for energy, aviation, rail, and banking. Based in Antwerp, Belgium.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "CB Engineering",
    "Bruno Coussement",
    "AI architect",
    "data architect",
    "data platform",
    "data products",
    "machine learning",
    "Antwerp",
    "Expedait",
  ],
  authors: [{ name: "Bruno Coussement" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "CB Engineering",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
