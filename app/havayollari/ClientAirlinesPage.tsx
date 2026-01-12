"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ClientAirlinesPage() {
  const airlines = [
    { name: "Türk Hava Yolları", slug: "thy", image: "/thy.jpg", description: "Dünyanın en çok ülkeye uçan havayolu" },
    { name: "Pegasus Airlines", slug: "pegasus", image: "/pegasus.png", description: "Uygun fiyatlı uçuş fırsatları" },
    { name: "SunExpress", slug: "sunexpress", image: "/sunexpress.jpg", description: "Türkiye-Avrupa arası uzman" },
    { name: "AJET", slug: "ajet", image: "/ajet.png", description: "Yurtiçi uçuşlarda ekonomik seçenek" },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-balance" aria-label="Popüler Havayolları">Popüler Havayolları</h1>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Türkiye&apos;nin en güvenilir havayolu şirketleri ile seyahat edin. 
              En uygun fiyatları karşılaştırın ve rezervasyonunuzu hemen yapın.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {airlines.map((airline) => (
              <Link
                key={airline.slug}
                href={`/havayollari/${airline.slug}`}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all hover:scale-105 h-full flex flex-col items-center justify-center border-2 hover:border-primary/30">
                  <div className="relative w-32 h-20 mb-4">
                    <Image
                      src={airline.image}
                      alt={airline.name}
                      fill
                      className="object-contain"
                      loading="lazy"
                      fetchpriority="auto"
                    />
                  </div>
                  <p className="font-bold text-lg mb-2">{airline.name}</p>
                  <p className="text-sm text-muted-foreground">{airline.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
