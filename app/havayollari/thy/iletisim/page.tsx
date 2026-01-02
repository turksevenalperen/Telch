import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Phone, Mail, MessageCircle, Clock, Globe, MapPin, Plane, Twitter, Instagram, Facebook } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY İletişim 2026 | Türk Hava Yolları Çağrı Merkezi ve İletişim Bilgileri - bilethizmeti.com",
  description:
    "Türk Hava Yolları iletişim bilgileri. THY çağrı merkezi 444 0 849, müşteri hizmetleri, sosyal medya ve destek kanalları. 7/24 hizmet.",
  keywords: "thy iletişim, türk hava yolları telefon, thy çağrı merkezi, thy müşteri hizmetleri, 444 0 849",
}

export default function THYIletisimPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <Phone className="h-4 w-4" />
              <span>İletişim Bilgileri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY İletişim ve Müşteri Hizmetleri
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları ile iletişime geçmenin tüm yolları. 7/24 destek hizmeti.
            </p>
          </div>
        </div>
      </section>

      {/* Ana İletişim Kanalları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İletişim Kanalları</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-red-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Çağrı Merkezi</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">444 0 849</p>
                <p className="text-sm text-muted-foreground">Türkiye geneli sabit ücret</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-green-600">
                  <Clock className="h-4 w-4" />
                  <span>7/24 Hizmet</span>
                </div>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Web Sitesi</h3>
                <p className="text-muted-foreground mb-2">Online destek formu</p>
                <a href="https://www.turkishairlines.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  turkishairlines.com
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-2">Hızlı mesajlaşma desteği</p>
                <p className="text-sm text-green-600">+90 850 333 0 849</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sosyal Medya */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Sosyal Medya Kanalları</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                    <Twitter className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Twitter/X</h3>
                    <p className="text-sm text-muted-foreground">@TurkishAirlines</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <p className="text-sm text-muted-foreground">@turkishairlines</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                    <Facebook className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Facebook</h3>
                    <p className="text-sm text-muted-foreground">/TurkishAirlines</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 text-center">
                <strong>İpucu:</strong> Sosyal medya üzerinden yapılan başvurular genellikle hızlı yanıt alır. Özellikle acil durumlarda Twitter/X üzerinden ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uluslararası Numaralar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uluslararası İletişim</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { ulke: "Almanya", numara: "+49 69 9999 2230" },
                { ulke: "İngiltere", numara: "+44 20 7471 6666" },
                { ulke: "ABD", numara: "+1 800 874 8875" },
                { ulke: "Fransa", numara: "+33 1 56 69 39 00" },
              ].map((item) => (
                <Card key={item.ulke} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <span className="font-medium">{item.ulke}</span>
                    </div>
                    <span className="text-muted-foreground">{item.numara}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Hemen THY ile İletişime Geçin</h2>
          <p className="mb-8 opacity-90">
            Rezervasyon, bilet değişikliği veya genel sorularınız için bizi arayın.
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
                { title: "THY Bilet İptali", href: "/havayollari/thy/bilet-iptali" },
                { title: "THY Bilet Değişikliği", href: "/havayollari/thy/bilet-degisikligi" },
                { title: "THY Yolcu Hakları", href: "/havayollari/thy/yolcu-haklari" },
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