import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { MapPin, Phone, Plane, Clock, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Popüler Rotalar 2026 | En Çok Uçulan Hatlar - bilethizmeti.com",
  description:
    "AJet en popüler uçuş rotaları. İstanbul, Ankara, İzmir, Antalya başta olmak üzere en çok tercih edilen hatlar.",
  keywords: "ajet rotalar, ajet uçuş hatları, ajet destinasyonlar, ajet popüler uçuşlar",
}

export default function AJetPopulerRotalarPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <MapPin className="h-4 w-4" />
              <span>Popüler Rotalar</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Popüler Uçuş Rotaları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet ile Türkiye&apos;nin en çok tercih edilen hatlarına ekonomik fiyatlarla uçun.
            </p>
          </div>
        </div>
      </section>

      {/* İstanbul Çıkışlı */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Plane className="h-6 w-6 text-blue-600" />
              İstanbul Çıkışlı Rotalar
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { rota: "İstanbul → Ankara", sure: "1s 10dk", siklik: "Günde 15+ sefer" },
                { rota: "İstanbul → İzmir", sure: "1s 05dk", siklik: "Günde 12+ sefer" },
                { rota: "İstanbul → Antalya", sure: "1s 15dk", siklik: "Günde 10+ sefer" },
                { rota: "İstanbul → Adana", sure: "1s 25dk", siklik: "Günde 6+ sefer" },
                { rota: "İstanbul → Trabzon", sure: "1s 40dk", siklik: "Günde 5+ sefer" },
                { rota: "İstanbul → Gaziantep", sure: "1s 35dk", siklik: "Günde 4+ sefer" },
                { rota: "İstanbul → Diyarbakır", sure: "1s 50dk", siklik: "Günde 3+ sefer" },
                { rota: "İstanbul → Bodrum", sure: "1s 10dk", siklik: "Günde 4+ sefer" },
                { rota: "İstanbul → Dalaman", sure: "1s 15dk", siklik: "Günde 3+ sefer" },
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

      {/* Ankara Çıkışlı */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Plane className="h-6 w-6 text-blue-600" />
              Ankara Çıkışlı Rotalar
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { rota: "Ankara → İstanbul", sure: "1s 10dk", siklik: "Günde 15+ sefer" },
                { rota: "Ankara → İzmir", sure: "1s 15dk", siklik: "Günde 6+ sefer" },
                { rota: "Ankara → Antalya", sure: "1s 05dk", siklik: "Günde 5+ sefer" },
                { rota: "Ankara → Trabzon", sure: "1s 20dk", siklik: "Günde 3+ sefer" },
                { rota: "Ankara → Adana", sure: "1s 00dk", siklik: "Günde 4+ sefer" },
                { rota: "Ankara → Diyarbakır", sure: "1s 25dk", siklik: "Günde 2+ sefer" },
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

      {/* Diğer Popüler Hatlar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              Diğer Popüler Hatlar
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { rota: "İzmir → Antalya", sure: "55dk", siklik: "Günde 3+ sefer" },
                { rota: "İzmir → Ankara", sure: "1s 15dk", siklik: "Günde 6+ sefer" },
                { rota: "Antalya → İzmir", sure: "55dk", siklik: "Günde 3+ sefer" },
                { rota: "Trabzon → Ankara", sure: "1s 20dk", siklik: "Günde 3+ sefer" },
                { rota: "Adana → İzmir", sure: "1s 20dk", siklik: "Günde 2+ sefer" },
                { rota: "Gaziantep → İzmir", sure: "1s 30dk", siklik: "Günde 2+ sefer" },
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

      {/* AJet Ağı */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">AJet Uçuş Ağı</h2>
            
            <Card className="p-6 border-blue-200">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-4">İç Hat Odaklı Uçuş Ağı</h3>
                <p className="text-muted-foreground mb-6">
                  AJet, özellikle Türkiye iç hatlarına odaklanan ekonomik bir havayoludur. THY grubunun bir parçası olarak güvenilir ve uygun fiyatlı uçuş hizmeti sunar.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 bg-accent rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">50+</p>
                    <p className="text-sm text-muted-foreground">Yurtiçi Destinasyon</p>
                  </div>
                  <div className="p-4 bg-accent rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">200+</p>
                    <p className="text-sm text-muted-foreground">Günlük Uçuş</p>
                  </div>
                  <div className="p-4 bg-accent rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">THY</p>
                    <p className="text-sm text-muted-foreground">Grup Güvencesi</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">AJet Bilet Rezervasyonu</h2>
          <p className="mb-8 opacity-90">
            En uygun AJet bilet fiyatları için hemen arayın.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:08503030787">
              <Phone className="h-5 w-5" />
              Hemen Arayın
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
                { title: "AJet Bagaj Hakkı", href: "/havayollari/ajet/bagaj-hakki" },
                { title: "AJet Check-in", href: "/havayollari/ajet/check-in" },
                { title: "AJet Bilet Değişikliği", href: "/havayollari/ajet/bilet-degisikligi" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-blue-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-blue-600" />
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