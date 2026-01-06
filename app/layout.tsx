/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "bilethizmeti.com - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu | IATA & TÜRSAB Üyesi",
  description:
    "bilethizmeti.com ile dünyaya açılın. 14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi. En uygun fiyatlarla uçak bileti, bilet değişikliği ve 24/7 müşteri desteği.",
  keywords:
    "uçak bileti, havayolu, seyahat acentesi, bilethizmeti.com, IATA, TÜRSAB, ucuz uçak bileti, bilet satışı, Turkish Airlines, Pegasus, SunExpress",
  authors: [{ name: "bilethizmeti.com" }],
  creator: "bilethizmeti.com",
  publisher: "bilethizmeti.com",
  icons: {
    icon: "/bilethizmeti.com.png",
    shortcut: "/bilethizmeti.com.png",
    apple: "/bilethizmeti.com.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.bilethizmeti.com",
    title: "bilethizmeti.com - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu",
    description: "14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi.",
    siteName: "bilethizmeti.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "bilethizmeti.com - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu",
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
    canonical: "https://www.bilethizmeti.com",
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T2F4656S');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <link rel="canonical" href="https://www.bilethizmeti.com" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İstanbul" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "bilethizmeti.com",
              description: "Türkiye'nin güvenilir uçak bileti satış platformu",
              url: "https://www.bilethizmeti.com",
              telephone: "+90-850-303-07-87",
              email: "info@bilethizmeti.com",
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2F4656S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
