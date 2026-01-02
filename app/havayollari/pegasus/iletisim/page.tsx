import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Phone, Mail, Globe, MessageCircle, Clock, MapPin, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus İletişim 2026 | Müşteri Hizmetleri Telefon - bilethizmeti.com",
  description:
    "Pegasus müşteri hizmetleri telefon numarası, e-posta ve sosyal medya iletişim kanalları. 7/24 destek hattı.",
  keywords: "pegasus iletişim, pegasus telefon, pegasus müşteri hizmetleri, pegasus çağrı merkezi",
}

export default function PegasusIletisimPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <Phone className="h-4 w-4" />
              <span>İletişim</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus İletişim
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus müşteri hizmetlerine birçok kanaldan ulaşabilirsiniz. Çağrı merkezi, e-posta ve sosyal medya üzerinden destek alabilirsiniz.
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
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-yellow-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Phone className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Çağrı Merkezi</h3>
                <p className="text-xl font-bold text-yellow-600 mb-2">0888 228 12 12</p>
                <p className="text-sm text-muted-foreground">7/24 Hizmet</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Web Sitesi</h3>
                <p className="text-blue-600 mb-2">flypgs.com</p>
                <p className="text-sm text-muted-foreground">Online işlemler</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-green-600 mb-2">Chatbot Desteği</p>
                <p className="text-sm text-muted-foreground">Hızlı yanıt</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">E-posta</h3>
                <p className="text-purple-600 mb-2">Web form üzerinden</p>
                <p className="text-sm text-muted-foreground">1-3 iş günü yanıt</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sosyal Medya</h3>
                <p className="text-blue-600 mb-2">Twitter / Instagram</p>
                <p className="text-sm text-muted-foreground">@flaborpegasus</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Havalimanı Ofisleri</h3>
                <p className="text-orange-600 mb-2">Tüm terminallerde</p>
                <p className="text-sm text-muted-foreground">Yüz yüze destek</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışma Saatleri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Çalışma Saatleri</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Çağrı Merkezi</h3>
                    <p className="text-muted-foreground">Telefon desteği</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">7/24 Açık</span>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Online İşlemler</h3>
                    <p className="text-muted-foreground">Web ve mobil</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">7/24 Erişilebilir</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hızlı Destek */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Hızlı Destek Alın</h2>
                <p className="text-muted-foreground mb-6">
                  Pegasus uçuşlarınızla ilgili tüm sorularınız için bilethizmeti.com uzmanlarına ulaşın.
                </p>
                <Button size="lg" className="gap-2 bg-yellow-600 hover:bg-yellow-700" asChild>
                  <a href="tel:08503030787">
                    <Phone className="h-5 w-5" />
                    0850 303 07 87
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Bilet, bagaj, değişiklik ve iptal işlemlerinde yardımcı oluyoruz
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Pegasus Biletiniz İçin Yardım Alın</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz tüm sorularınızda yanınızda.
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
                { title: "Pegasus SSS", href: "/havayollari/pegasus/sss" },
                { title: "Pegasus Bilet İptali", href: "/havayollari/pegasus/bilet-iptali" },
                { title: "Pegasus Bilet Değişikliği", href: "/havayollari/pegasus/bilet-degisikligi" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-yellow-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-yellow-600" />
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