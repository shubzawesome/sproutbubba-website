import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://sproutbubba.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sprout Bubba — Everything your baby needs. Beautifully organised.",
    template: "%s · Sprout Bubba",
  },
  description:
    "Track feeds, sleep, nappies, pumping, growth, milestones and contractions in one beautifully designed app. Share progress securely with your midwife or doctor, with gentle reminders when you need them most.",
  keywords: [
    "baby tracker",
    "newborn app",
    "feeding tracker",
    "sleep tracker",
    "contraction timer",
    "pregnancy app",
    "midwife sharing",
    "Sprout Bubba",
  ],
  applicationName: "Sprout Bubba",
  authors: [{ name: "Sprout Bubba" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sprout Bubba",
    title: "Everything your baby needs. Beautifully organised.",
    description:
      "Track feeds, sleep, nappies, growth, milestones and contractions. Share securely with your midwife. Calm, premium, and made for new parents.",
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: "Sprout Bubba" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprout Bubba — Everything your baby needs.",
    description:
      "A calm, beautifully designed baby & pregnancy tracker with secure midwife sharing and gentle reminders.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5ccb7a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Sprout Bubba",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Baby & pregnancy tracker for feeds, sleep, nappies, growth, milestones and contractions, with secure midwife sharing and gentle reminders.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
