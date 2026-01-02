import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Phone, Globe, MessageCircle, Clock, Plane, Twitter, Instagram, Facebook } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet İletişim 2026 | Çağrı Merkezi ve Müşteri Hizmetleri - bilethizmeti.com",
  description:
    "AJet iletişim bilgileri. AJet çağrı merkezi, müşteri hizmetleri telefon numarası ve sosyal medya destek kanalları.",
  keywords: "ajet iletişim, ajet telefon, ajet çağrı merkezi, ajet müşteri hizmetleri",
}

export default function AJetIletisimPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Phone className="h-4 w-4" />
              <span>İletişim Bilgileri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet İletişim ve Müşteri Hizmetleri
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet ile iletişime geçmenin tüm yolları. Müşteri hizmetleri ve destek kanalları.
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
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Çağrı Merkezi</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">444 2 538</p>
                <p className="text-sm text-muted-foreground">AJet Müşteri Hizmetleri</p>
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
                <p className="text-muted-foreground mb-2">Online destek ve işlemler</p>
                <a href="https://www.ajet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  ajet.com
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Canlı Destek</h3>
                <p className="text-muted-foreground mb-2">Web sitesi üzerinden</p>
                <p className="text-sm text-green-600">Anlık mesajlaşma</p>
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
                    <p className="text-sm text-muted-foreground">@AJetAirlines</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-pink-500">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <p className="text-sm text-muted-foreground">@ajetairlines</p>
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
                    <p className="text-sm text-muted-foreground">/AJetAirlines</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 text-center">
                <strong>İpucu:</strong> Yoğun dönemlerde çağrı merkezi bekleme süreleri uzayabilir. Basit işlemler için web sitesi veya mobil uygulamayı tercih edebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sık Sorulan Konular */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Hangi Konularda Yardım Alabilirsiniz?</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Bilet satın alma ve rezervasyon",
                "Bilet iptali ve değişikliği",
                "Bagaj sorgulaması",
                "Check-in işlemleri",
                "Kayıp eşya bildirimi",
                "Özel yardım talepleri",
                "Şikayet ve öneri",
                "Fatura ve ödeme işlemleri",
              ].map((item) => (
                <Card key={item} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Hemen AJet ile İletişime Geçin</h2>
          <p className="mb-8 opacity-90">
            Bilet, rezervasyon veya genel sorularınız için bizi arayın.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:4442538">
              <Phone className="h-5 w-5" />
              444 2 538
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
                { title: "AJet Bilet İptali", href: "/havayollari/ajet/bilet-iptali" },
                { title: "AJet Bilet Değişikliği", href: "/havayollari/ajet/bilet-degisikligi" },
                { title: "AJet Yolcu Hakları", href: "/havayollari/ajet/yolcu-haklari" },
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