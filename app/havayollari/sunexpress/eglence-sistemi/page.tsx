import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Tv, Phone, Plane, Smartphone, Wifi, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Eğlence Sistemi 2026 | Uçak İçi Eğlence - FlyTR",
  description:
    "SunExpress uçak içi eğlence sistemi, film, müzik ve kablosuz eğlence hakkında bilgi.",
  keywords: "sunexpress eğlence, sunexpress film, sunexpress wifi",
}

export default function SunExpressEglenceSistemiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Tv className="h-4 w-4" />
              <span>Eğlence Sistemi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Eğlence Sistemi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress uçaklarının çoğunda koltuk arkası eğlence sistemi bulunmaz.
            </p>
          </div>
        </div>
      </section>

      {/* Eğlence Durumu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uçak İçi Eğlence</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 hover:shadow-lg transition-shadow border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 shrink-0">
                    <Tv className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Koltuk Arkası Ekran</h3>
                    <p className="text-muted-foreground">Çoğu uçakta bulunmaz</p>
                    <p className="text-sm text-gray-500 mt-2">Uçuş içi eğlence sınırlıdır</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 shrink-0">
                    <Wifi className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Kablosuz Eğlence</h3>
                    <p className="text-muted-foreground">Bazı uzun uçuşlarda mevcut</p>
                    <p className="text-sm text-amber-600 mt-2">Kendi cihazınızla bağlanın</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Öneri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uçuşta Eğlence Önerileri</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Kişisel Cihaz</h3>
                <p className="text-sm text-muted-foreground">Film ve dizi indirin</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Plane className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Dergi / Kitap</h3>
                <p className="text-sm text-muted-foreground">Okuma materyali getirin</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Tv className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Müzik</h3>
                <p className="text-sm text-muted-foreground">Çalma listesi hazırlayın</p>
              </Card>
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
                  <h3 className="font-bold text-amber-800 mb-2">Tavsiye</h3>
                  <p className="text-sm text-amber-700">
                    Yolcular kişisel cihazlarını kullanır. Uçuş öncesi içerik indirmenizi öneririz.
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
          <h2 className="text-2xl font-bold mb-4">Uçuş Bilgisi Alın</h2>
          <p className="mb-8 opacity-90">
            Uçuşunuzdaki hizmetler hakkında bilgi alın.
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
                { title: "SunExpress İkram Servisi", href: "/havayollari/sunexpress/ikram-servisi" },
                { title: "SunExpress Koltuk Seçimi", href: "/havayollari/sunexpress/koltuk-secimi" },
                { title: "SunExpress Mobil Hizmetler", href: "/havayollari/sunexpress/mobil-hizmetler" },
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