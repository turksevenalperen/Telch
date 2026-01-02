import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { MapPin, Phone, Plane, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Popüler Rotalar 2026 | En Çok Uçulan Hatlar - bilethizmeti.com",
  description:
    "SunExpress popüler uçuş rotaları, Antalya, İzmir ve Avrupa hatları.",
  keywords: "sunexpress rotalar, sunexpress antalya, sunexpress izmir, sunexpress avrupa",
}

const populerRotalar = [
  { from: "Antalya", to: "Frankfurt", code: "AYT → FRA", sure: "3s 30dk" },
  { from: "İzmir", to: "Düsseldorf", code: "ADB → DUS", sure: "3s 45dk" },
  { from: "Antalya", to: "Londra", code: "AYT → LGW", sure: "4s 15dk" },
  { from: "İstanbul", to: "Antalya", code: "SAW → AYT", sure: "1s 15dk" },
  { from: "İzmir", to: "Berlin", code: "ADB → BER", sure: "3s 20dk" },
  { from: "Antalya", to: "Amsterdam", code: "AYT → AMS", sure: "4s" },
  { from: "Antalya", to: "Münih", code: "AYT → MUC", sure: "3s 15dk" },
  { from: "İzmir", to: "Köln", code: "ADB → CGN", sure: "3s 30dk" },
]

export default function SunExpressPopulerRotalarPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <MapPin className="h-4 w-4" />
              <span>Popüler Rotalar</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Popüler Rotalar
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress özellikle turistik ve Avrupa hatlarında yoğun olarak tercih edilir.
            </p>
          </div>
        </div>
      </section>

      {/* Ana Üsler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Ana Üsler</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-amber-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Plane className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Antalya (AYT)</h3>
                <p className="text-muted-foreground">Avrupa&apos;ya yoğun turistik uçuşlar</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-orange-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Plane className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">İzmir (ADB)</h3>
                <p className="text-muted-foreground">Almanya ve Avrupa bağlantıları</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Rotalar */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">En Popüler Rotalar</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {populerRotalar.map((rota, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <Globe className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <p className="font-bold">{rota.from} → {rota.to}</p>
                        <p className="text-sm text-muted-foreground">{rota.code}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-amber-600">{rota.sure}</p>
                      <p className="text-xs text-muted-foreground">Direkt</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">SunExpress Bileti Alın</h2>
          <p className="mb-8 opacity-90">
            En uygun SunExpress biletleri için hemen arayın.
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
                { title: "SunExpress Bagaj Hakkı", href: "/havayollari/sunexpress/bagaj-hakki" },
                { title: "SunExpress Check-in", href: "/havayollari/sunexpress/check-in" },
                { title: "SunExpress Bilet Değişikliği", href: "/havayollari/sunexpress/bilet-degisikligi" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-amber-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-amber-500" />
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