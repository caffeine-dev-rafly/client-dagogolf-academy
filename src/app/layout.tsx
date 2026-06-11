import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dago Golf Academy | Heritage Golf Coaching in Bandung",
    template: "%s | Dago Golf Academy",
  },
  description:
    "Established 1917 in the Bandung highlands. Elite golf coaching, junior programs, and AI-driven swing analysis at Dago Golf Academy, West Java.",
  keywords: [
    "Dago Golf",
    "golf academy Bandung",
    "golf coaching West Java",
    "junior golf Indonesia",
    "swing analysis",
    "golf lessons Bandung",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dago Golf Academy | Heritage Golf Coaching in Bandung",
    description:
      "Elite golf coaching, junior programs, and AI-driven swing analysis in the historic Bandung highlands since 1917.",
    url: SITE_URL,
    siteName: "Dago Golf Academy",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Dago Golf Academy course in the Bandung highlands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dago Golf Academy | Heritage Golf Coaching in Bandung",
    description:
      "Elite golf coaching and AI swing analysis in the historic Bandung highlands since 1917.",
    images: ["/images/hero.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
