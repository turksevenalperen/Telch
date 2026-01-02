import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Phone, Plane, Globe, MessageCircle, Mail, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress İletişim 2026 | Müşteri Hizmetleri - bilethizmeti.com",
  description:
    "SunExpress müşteri hizmetleri iletişim bilgileri. Çağrı merkezi, canlı destek ve sosyal medya kanalları.",
  keywords: "sunexpress iletişim, sunexpress müşteri hizmetleri, sunexpress telefon",
}

export default function SunExpressIletisimPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Phone className="h-4 w-4" />
              <span>İletişim</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress İletişim
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress müşteri hizmetlerine ulaşmanın tüm yolları.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Kanalları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İletişim Kanalları</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-amber-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Phone className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Çağrı Merkezi</h3>
                <p className="text-muted-foreground mb-4">SunExpress müşteri hizmetleri</p>
                <Button className="bg-amber-500 hover:bg-amber-600" asChild>
                  <a href="tel:08503030787">Hemen Ara</a>
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Web Sitesi</h3>
                <p className="text-muted-foreground mb-4">Canlı destek ve iletişim formu</p>
                <p className="text-sm text-blue-600">sunexpress.com</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                  <MessageCircle className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sosyal Medya</h3>
                <p className="text-muted-foreground mb-4">Sosyal medya destek kanalları</p>
                <p className="text-sm text-pink-600">Twitter, Facebook, Instagram</p>
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
                <Clock className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Önemli Bilgi</h3>
                  <p className="text-sm text-amber-700">
                    Yoğun sezonlarda çağrı merkezi bekleme süreleri uzayabilir. Online kanalları tercih etmenizi öneririz.
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
          <h2 className="text-2xl font-bold mb-4">Hızlı Destek Alın</h2>
          <p className="mb-8 opacity-90">
            bilethizmeti.com uzman ekibi SunExpress işlemlerinizde size yardımcı olabilir.
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
                { title: "SunExpress Bilet İptali", href: "/havayollari/sunexpress/bilet-iptali" },
                { title: "SunExpress Bilet Değişikliği", href: "/havayollari/sunexpress/bilet-degisikligi" },
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