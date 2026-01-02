import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { MapPin, Phone, Plane, Clock, Globe, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Popüler Rotalar 2026 | En Çok Tercih Edilen Destinasyonlar - bilethizmeti.com",
  description:
    "Türk Hava Yolları en popüler uçuş rotaları. İstanbul çıkışlı yurtiçi ve yurtdışı en çok tercih edilen destinasyonlar.",
  keywords: "thy rotalar, türk hava yolları destinasyonlar, thy uçuş noktaları, istanbul uçuşları",
}

export default function THYPopulerRotalarPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <MapPin className="h-4 w-4" />
              <span>Popüler Rotalar</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY En Çok Tercih Edilen Rotalar
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              130+ ülke, 340+ destinasyon. İstanbul hub&apos;ı ile dünyaya bağlanın.
            </p>
          </div>
        </div>
      </section>

      {/* Yurtiçi Rotalar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Plane className="h-6 w-6 text-red-600" />
              Yurtiçi Popüler Rotalar
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { rota: "İstanbul → Ankara", sure: "1s 10dk", siklik: "Günde 20+ sefer" },
                { rota: "İstanbul → İzmir", sure: "1s 05dk", siklik: "Günde 15+ sefer" },
                { rota: "İstanbul → Antalya", sure: "1s 15dk", siklik: "Günde 12+ sefer" },
                { rota: "İstanbul → Adana", sure: "1s 25dk", siklik: "Günde 8+ sefer" },
                { rota: "İstanbul → Trabzon", sure: "1s 40dk", siklik: "Günde 6+ sefer" },
                { rota: "İstanbul → Bodrum", sure: "1s 10dk", siklik: "Günde 5+ sefer" },
                { rota: "Ankara → İzmir", sure: "1s 15dk", siklik: "Günde 6+ sefer" },
                { rota: "İstanbul → Dalaman", sure: "1s 15dk", siklik: "Günde 4+ sefer" },
                { rota: "İstanbul → Gaziantep", sure: "1s 35dk", siklik: "Günde 5+ sefer" },
              ].map((item) => (
                <Card key={item.rota} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{item.rota}</h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{item.sure}</span>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{item.siklik}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avrupa Rotaları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              Avrupa Popüler Rotaları
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { rota: "İstanbul → Londra", sure: "4s 00dk", siklik: "Günde 6+ sefer" },
                { rota: "İstanbul → Paris", sure: "3s 30dk", siklik: "Günde 5+ sefer" },
                { rota: "İstanbul → Frankfurt", sure: "3s 00dk", siklik: "Günde 6+ sefer" },
                { rota: "İstanbul → Amsterdam", sure: "3s 30dk", siklik: "Günde 4+ sefer" },
                { rota: "İstanbul → Münih", sure: "2s 45dk", siklik: "Günde 4+ sefer" },
                { rota: "İstanbul → Roma", sure: "2s 30dk", siklik: "Günde 3+ sefer" },
                { rota: "İstanbul → Barselona", sure: "3s 30dk", siklik: "Günde 2+ sefer" },
                { rota: "İstanbul → Viyana", sure: "2s 20dk", siklik: "Günde 3+ sefer" },
                { rota: "İstanbul → Zürih", sure: "2s 45dk", siklik: "Günde 3+ sefer" },
              ].map((item) => (
                <Card key={item.rota} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{item.rota}</h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{item.sure}</span>
                      </div>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{item.siklik}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Uzak Mesafe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              Uzak Mesafe Rotaları
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { rota: "İstanbul → New York", sure: "10s 30dk", siklik: "Günde 3 sefer" },
                { rota: "İstanbul → Dubai", sure: "4s 00dk", siklik: "Günde 5+ sefer" },
                { rota: "İstanbul → Los Angeles", sure: "13s 30dk", siklik: "Günde 1 sefer" },
                { rota: "İstanbul → Tokyo", sure: "11s 30dk", siklik: "Günde 1 sefer" },
                { rota: "İstanbul → Singapur", sure: "10s 30dk", siklik: "Günde 1 sefer" },
                { rota: "İstanbul → Bangkok", sure: "9s 30dk", siklik: "Günde 2 sefer" },
                { rota: "İstanbul → Şangay", sure: "10s 00dk", siklik: "Günde 1 sefer" },
                { rota: "İstanbul → Miami", sure: "12s 30dk", siklik: "Günde 1 sefer" },
                { rota: "İstanbul → Hong Kong", sure: "10s 00dk", siklik: "Günde 1 sefer" },
              ].map((item) => (
                <Card key={item.rota} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{item.rota}</h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{item.sure}</span>
                      </div>
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{item.siklik}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İstanbul Hub */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İstanbul: Dünyanın Merkezi</h2>
            
            <Card className="p-6 border-red-200">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mx-auto mb-4">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-xl mb-4">İstanbul Havalimanı Hub Avantajları</h3>
                <p className="text-muted-foreground mb-6">
                  Coğrafi konumu sayesinde İstanbul, Avrupa, Asya, Afrika ve Amerika arasında ideal bir aktarma noktasıdır.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 bg-accent rounded-lg">
                    <p className="text-2xl font-bold text-red-600">340+</p>
                    <p className="text-sm text-muted-foreground">Destinasyon</p>
                  </div>
                  <div className="p-4 bg-accent rounded-lg">
                    <p className="text-2xl font-bold text-red-600">130+</p>
                    <p className="text-sm text-muted-foreground">Ülke</p>
                  </div>
                  <div className="p-4 bg-accent rounded-lg">
                    <p className="text-2xl font-bold text-red-600">400+</p>
                    <p className="text-sm text-muted-foreground">Uçak</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bilet Rezervasyonu İçin Arayın</h2>
          <p className="mb-8 opacity-90">
            En uygun fiyatlı biletler ve özel kampanyalar için hemen bizi arayın.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:4440849">
              <Phone className="h-5 w-5" />
              444 0 849
            </a>
          </Button>
        </div>
      </section>

      {/* İlgili Konular */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">İlgili Konular</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "THY Bagaj Hakkı", href: "/havayollari/thy/bagaj-hakki" },
                { title: "THY Check-in", href: "/havayollari/thy/check-in" },
                { title: "THY Bilet Değişikliği", href: "/havayollari/thy/bilet-degisikligi" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-red-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-red-600" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}