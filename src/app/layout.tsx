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
    default: "Dago Golf Academy | Pelatihan Golf Warisan di Bandung",
    template: "%s | Dago Golf Academy",
  },
  description:
    "Berdiri sejak 1917 di dataran tinggi Bandung. Pelatihan golf elit, program junior, dan analisis swing berbasis AI di Dago Golf Academy, Jawa Barat.",
  keywords: [
    "Dago Golf",
    "akademi golf Bandung",
    "pelatihan golf Jawa Barat",
    "golf junior Indonesia",
    "analisis swing",
    "les golf Bandung",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dago Golf Academy | Pelatihan Golf Warisan di Bandung",
    description:
      "Pelatihan golf elit, program junior, dan analisis swing berbasis AI di dataran tinggi Bandung yang bersejarah sejak 1917.",
    url: SITE_URL,
    siteName: "Dago Golf Academy",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Lapangan Dago Golf Academy di dataran tinggi Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dago Golf Academy | Pelatihan Golf Warisan di Bandung",
    description:
      "Pelatihan golf elit dan analisis swing AI di dataran tinggi Bandung yang bersejarah sejak 1917.",
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
    <html lang="id" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
