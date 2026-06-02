import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CB Engineering — software products from Brussels",
  description:
    "CB Engineering is the studio of Bruno Coussement, building software products from Brussels. Home of Expedait and Babyfoon.",
  keywords: [
    "CB Engineering",
    "Bruno Coussement",
    "Expedait",
    "Babyfoon",
    "software studio",
    "Brussels",
    "data engineering",
  ],
  authors: [{ name: "Bruno Coussement" }],
  openGraph: {
    title: "CB Engineering — software products from Brussels",
    description:
      "The studio of Bruno Coussement. Building Expedait and Babyfoon from Brussels.",
    url: SITE_URL,
    siteName: "CB Engineering",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CB Engineering — software products from Brussels",
    description:
      "The studio of Bruno Coussement. Building Expedait and Babyfoon from Brussels.",
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
