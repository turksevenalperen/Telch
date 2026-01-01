/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TelchFly - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu | IATA & TÜRSAB Üyesi",
  description:
    "TelchFly ile dünyaya açılın. 14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi. En uygun fiyatlarla uçak bileti, bilet değişikliği ve 24/7 müşteri desteği.",
  keywords:
    "uçak bileti, havayolu, seyahat acentesi, telchfly, IATA, TÜRSAB, ucuz uçak bileti, bilet satışı, Turkish Airlines, Pegasus, SunExpress",
  authors: [{ name: "TelchFly" }],
  creator: "TelchFly",
  publisher: "TelchFly",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.telchfly.com.tr",
    title: "TelchFly - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu",
    description: "14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi.",
    siteName: "TelchFly",
  },
  twitter: {
    card: "summary_large_image",
    title: "TelchFly - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu",
    description: "14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.telchfly.com.tr",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5a5f8f" },
    { media: "(prefers-color-scheme: dark)", color: "#7d8bbd" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://www.telchfly.com.tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İstanbul" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "TelchFly",
              description: "Türkiye'nin güvenilir uçak bileti satış platformu",
              url: "https://www.telchfly.com.tr",
              telephone: "+90-850-303-07-87",
              email: "info@telchfly.com.tr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ulus Şehit İbrahim Akpınar Cad. No:4",
                addressLocality: "Beşiktaş",
                addressRegion: "İstanbul",
                addressCountry: "TR",
              },
              foundingDate: "2010",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "5000000",
              },
            }),
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
