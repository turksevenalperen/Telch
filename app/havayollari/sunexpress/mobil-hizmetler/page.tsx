import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Smartphone, Phone, Plane, CheckCircle2, Download, CreditCard, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Mobil Hizmetler 2026 | Mobil Uygulama - FlyTR",
  description:
    "SunExpress mobil uygulama özellikleri, bilet alma, check-in ve uçuş takibi.",
  keywords: "sunexpress mobil, sunexpress uygulama, sunexpress app",
}

export default function SunExpressMobilHizmetlerPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Smartphone className="h-4 w-4" />
              <span>Mobil Hizmetler</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Mobil Uygulama
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress mobil uygulaması ile tüm işlemlerinizi kolayca yapın.
            </p>
          </div>
        </div>
      </section>

      {/* Uygulama Özellikleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uygulama Özellikleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <CreditCard className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="font-bold mb-2">Bilet Satın Alma</h3>
                <p className="text-sm text-muted-foreground">Hızlı ve kolay bilet alımı</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Online Check-in</h3>
                <p className="text-sm text-muted-foreground">Mobil biniş kartı</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Koltuk & Bagaj</h3>
                <p className="text-sm text-muted-foreground">Ek hizmet satın alma</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Uçuş Takibi</h3>
                <p className="text-sm text-muted-foreground">Anlık uçuş durumu</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Mobil Avantajları</h2>
            
            <div className="space-y-4">
              {[
                "Bilet satın alma ve yönetme",
                "Online check-in ve mobil biniş kartı",
                "Koltuk ve bagaj ekleme",
                "Uçuş durumu takibi",
                "Anlık bildirimler",
                "Kolay rezervasyon yönetimi",
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

      {/* İndirme */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Uygulamayı İndirin</h2>
            <p className="text-muted-foreground mb-8">
              App Store ve Google Play&apos;den ücretsiz indirin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-gray-800" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Download on the</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-green-600" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">GET IT ON</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Yardıma mı İhtiyacınız Var?</h2>
          <p className="mb-8 opacity-90">
            Mobil uygulama hakkında sorularınız için bizi arayın.
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
                { title: "SunExpress Check-in", href: "/havayollari/sunexpress/check-in" },
                { title: "SunExpress Koltuk Seçimi", href: "/havayollari/sunexpress/koltuk-secimi" },
                { title: "SunExpress Bagaj Hakkı", href: "/havayollari/sunexpress/bagaj-hakki" },
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