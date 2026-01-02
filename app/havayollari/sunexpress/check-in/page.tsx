import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { CheckSquare, Phone, Plane, Smartphone, Monitor, MapPin, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Check-in 2026 | Online Check-in Nasıl Yapılır - bilethizmeti.com",
  description:
    "SunExpress online check-in işlemleri. Web, mobil ve havaalanı check-in adımları. Ne zaman check-in açılır?",
  keywords: "sunexpress check-in, sunexpress online check-in, sunexpress mobil check-in",
}

export default function SunExpressCheckInPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <CheckSquare className="h-4 w-4" />
              <span>Check-in İşlemleri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Check-in
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress&apos;te check-in işlemleri farklı yöntemlerle yapılabilir.
            </p>
          </div>
        </div>
      </section>

      {/* Check-in Yöntemleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Check-in Yöntemleri</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-green-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Monitor className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Online Check-in</h3>
                <p className="text-muted-foreground mb-4">sunexpress.com üzerinden</p>
                <p className="text-sm font-medium text-green-600">Ücretsiz</p>
                <p className="text-xs text-muted-foreground mt-2">Uçuştan 36-24 saat önce açılır</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-amber-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Smartphone className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mobil Check-in</h3>
                <p className="text-muted-foreground mb-4">SunExpress uygulaması ile</p>
                <p className="text-sm font-medium text-amber-500">Ücretsiz</p>
                <p className="text-xs text-muted-foreground mt-2">Hızlı ve pratik</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-orange-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Havalimanı Kontuarı</h3>
                <p className="text-muted-foreground mb-4">Check-in kontuarından</p>
                <p className="text-sm font-medium text-orange-600">Ücretli Olabilir</p>
                <p className="text-xs text-muted-foreground mt-2">Bazı tarifelerde ek ücret</p>
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
                  <h3 className="font-bold text-amber-800 mb-2">Önemli Bilgi</h3>
                  <p className="text-sm text-amber-700">
                    Online check-in yapılması zaman kazandırır ve ek ücretlerden kaçınmanızı sağlar. Bazı tarifelerde havalimanı check-in ücreti alınabilir.
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
          <h2 className="text-2xl font-bold mb-4">Check-in Konusunda Yardım mı Gerekiyor?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz check-in işlemlerinizde size yardımcı olabilir.
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