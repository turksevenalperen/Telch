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
  metadataBase: new URL("https://www.bilethizmeti.com"),
  title: {
    default: "bilethizmeti.com - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu | IATA & TÜRSAB Üyesi",
    template: "%s | bilethizmeti.com"
  },
  description:
    "bilethizmeti.com ile dünyaya açılın. 14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi. En uygun fiyatlarla uçak bileti, bilet değişikliği ve 24/7 müşteri desteği.",
  keywords: [
    "uçak bileti",
    "ucuz uçak bileti",
    "online bilet",
    "havayolu bileti",
    "seyahat acentesi",
    "bilethizmeti.com",
    "IATA",
    "TÜRSAB",
    "bilet satışı",
    "Turkish Airlines bilet",
    "Pegasus bilet",
    "SunExpress bilet",
    "AJet bilet",
    "uçuş rezervasyonu",
    "yurt içi uçak bileti",
    "yurt dışı uçak bileti"
  ],
  authors: [{ name: "bilethizmeti.com", url: "https://www.bilethizmeti.com" }],
  creator: "bilethizmeti.com",
  publisher: "bilethizmeti.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/og-image.svg", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/bilethizmeti.com.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.bilethizmeti.com",
    siteName: "bilethizmeti.com",
    title: "bilethizmeti.com - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu",
    description: "14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi. En uygun uçak bileti fiyatları.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "bilethizmeti.com Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bilethizmeti.com - Türkiye'nin Güvenilir Uçak Bileti Satış Platformu",
    description: "14 yıllık deneyim, 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi.",
    images: ["/og-image.svg"],
    creator: "@bilethizmeti",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.bilethizmeti.com",
    languages: {
      "tr-TR": "https://www.bilethizmeti.com",
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console doğrulama kodu
  },
  category: "travel",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
    <html lang="tr" dir="ltr">
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

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17752335401"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17752335401');
            // Google Analytics 4 - GA4 Measurement ID'nizi buraya ekleyin
            // gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* End Google Ads */}

        {/* Phone Click Conversion Tracking */}
        <Script id="phone-click-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var target = e.target.closest('a[href^="tel:"]');
              if (target) {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17752335401/Rks4CLLpiN4bEKnI_JBC'
                });
              }
            });
          `}
        </Script>
        {/* End Phone Click Conversion Tracking */}

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bilethizmeti.com" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />

        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="Turkish" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta httpEquiv="content-language" content="tr" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "@id": "https://www.bilethizmeti.com/#organization",
              name: "bilethizmeti.com",
              alternateName: "Bilet Hizmeti",
              description: "Türkiye'nin güvenilir uçak bileti satış platformu. IATA ve TÜRSAB üyesi seyahat acentesi.",
              url: "https://www.bilethizmeti.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.bilethizmeti.com/bilethizmeti.com.png",
                width: 1200,
                height: 512
              },
              image: "https://www.bilethizmeti.com/bilethizmeti.com.png",
              telephone: "+90-850-303-07-87",
              email: "info@bilethizmeti.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ulus Şehit İbrahim Akpınar Cad. No:4",
                addressLocality: "Beşiktaş",
                addressRegion: "İstanbul",
                postalCode: "34340",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.0082,
                longitude: 28.9784
              },
              foundingDate: "2010",
              priceRange: "$$",
              currenciesAccepted: "TRY, USD, EUR",
              paymentAccepted: "Cash, Credit Card, Debit Card",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59"
              },
              sameAs: [
                "https://www.facebook.com/bilethizmeti",
                "https://www.instagram.com/bilethizmeti",
                "https://twitter.com/bilethizmeti"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "5000000",
                bestRating: "5",
                worstRating: "1"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Uçak Bileti Hizmetleri",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Yurt İçi Uçak Bileti"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Yurt Dışı Uçak Bileti"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bilet Değişikliği"
                    }
                  }
                ]
              }
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.bilethizmeti.com/#website",
              url: "https://www.bilethizmeti.com",
              name: "bilethizmeti.com",
              description: "Türkiye'nin Güvenilir Uçak Bileti Satış Platformu",
              publisher: {
                "@id": "https://www.bilethizmeti.com/#organization"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.bilethizmeti.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              inLanguage: "tr-TR"
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Ana Sayfa",
                  item: "https://www.bilethizmeti.com"
                }
              ]
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.bilethizmeti.com/#localbusiness",
              name: "bilethizmeti.com",
              image: "https://www.bilethizmeti.com/bilethizmeti.com.png",
              telephone: "+90-850-303-07-87",
              email: "info@bilethizmeti.com",
              url: "https://www.bilethizmeti.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ulus Şehit İbrahim Akpınar Cad. No:4",
                addressLocality: "Beşiktaş",
                addressRegion: "İstanbul",
                postalCode: "34340",
                addressCountry: "TR"
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59"
              }
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
