import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { PawPrint, Phone, Plane, CheckCircle2, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Evcil Hayvan Taşıma 2026 | Kurallar - bilethizmeti.com",
  description:
    "SunExpress evcil hayvan taşıma kuralları, ücretleri ve gerekli belgeler hakkında bilgi.",
  keywords: "sunexpress evcil hayvan, sunexpress pet, sunexpress kedi köpek taşıma",
}

export default function SunExpressEvcilHayvanPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <PawPrint className="h-4 w-4" />
              <span>Evcil Hayvan</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Evcil Hayvan Taşıma
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress evcil hayvan taşımayı belirli kurallar çerçevesinde kabul eder.
            </p>
          </div>
        </div>
      </section>

      {/* Taşıma Seçenekleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Taşıma Seçenekleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 hover:shadow-lg transition-shadow border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 shrink-0">
                    <PawPrint className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Kabinde Taşıma (PETC)</h3>
                    <p className="text-muted-foreground mb-4">Küçük kedi ve köpekler için</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" />
                        <span>Taşıma çantası ile birlikte max 8 kg</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" />
                        <span>Koltuk altına sığmalı</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" />
                        <span>Önceden rezervasyon gerekli</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 shrink-0">
                    <PawPrint className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Uçak Altı Taşıma (AVIH)</h3>
                    <p className="text-muted-foreground mb-4">Daha büyük hayvanlar için</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-600" />
                        <span>Büyük kedi ve köpekler</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-600" />
                        <span>IATA onaylı kafes gerekli</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-600" />
                        <span>Önceden rezervasyon zorunlu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gerekli Belgeler */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gerekli Belgeler</h2>
            
            <div className="space-y-4">
              {[
                "Geçerli sağlık belgesi / veteriner raporu",
                "Aşı kartı (kuduz aşısı zorunlu)",
                "Mikroçip bilgisi",
                "Varış ülkesine göre ek belgeler gerekebilir",
              ].map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Uyarı */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Önemli Bilgi</h3>
                  <p className="text-sm text-amber-700">
                    Evcil hayvan taşıma hizmeti ücretlidir ve kapasite ile sınırlıdır. Mutlaka önceden rezervasyon yaptırın.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Evcil Hayvan Taşıma Rezervasyonu</h2>
          <p className="mb-8 opacity-90">
            Evcil dostunuzla seyahat için hemen rezervasyon yaptırın.
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
                { title: "SunExpress SSS", href: "/havayollari/sunexpress/sss" },
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