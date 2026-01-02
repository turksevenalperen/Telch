import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { CheckSquare, Phone, Plane, Smartphone, Monitor, MapPin, Clock, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Check-in 2026 | Online Check-in Nasıl Yapılır - FlyTR",
  description:
    "AJet online check-in işlemleri. Web, mobil ve havaalanı check-in adımları. Ne zaman check-in açılır?",
  keywords: "ajet check-in, ajet online check-in, ajet mobil check-in, ajet check-in nasıl yapılır",
}

export default function AJetCheckInPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <CheckSquare className="h-4 w-4" />
              <span>Check-in İşlemleri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Check-in Rehberi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet online check-in ile zaman kazanın ve ek ücretlerden kaçının.
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
                <h3 className="font-bold text-lg mb-2">Web Check-in</h3>
                <p className="text-muted-foreground mb-4">ajet.com üzerinden</p>
                <p className="text-sm font-medium text-green-600">Ücretsiz</p>
                <p className="text-xs text-muted-foreground mt-2">Uçuştan 24 saat önce açılır</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mobil Check-in</h3>
                <p className="text-muted-foreground mb-4">Mobil web veya uygulama</p>
                <p className="text-sm font-medium text-blue-600">Ücretsiz</p>
                <p className="text-xs text-muted-foreground mt-2">Uçuştan 24 saat önce açılır</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-orange-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Havalimanı Check-in</h3>
                <p className="text-muted-foreground mb-4">Kontuardan</p>
                <p className="text-sm font-medium text-orange-600">Ücretli Olabilir</p>
                <p className="text-xs text-muted-foreground mt-2">Uçuştan 2-3 saat önce</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Online Check-in Adımları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Online Check-in Adımları</h2>
            
            <div className="space-y-4">
              {[
                { adim: 1, baslik: "AJet web sitesine gidin", aciklama: "ajet.com adresini ziyaret edin veya mobil uygulamayı açın." },
                { adim: 2, baslik: "Check-in bölümünü seçin", aciklama: "Ana sayfada 'Online Check-in' seçeneğine tıklayın." },
                { adim: 3, baslik: "Rezervasyon bilgilerini girin", aciklama: "PNR kodu ve soyadınızı girerek rezervasyonunuzu bulun." },
                { adim: 4, baslik: "Yolcu bilgilerini doğrulayın", aciklama: "Kimlik ve iletişim bilgilerinizi kontrol edin." },
                { adim: 5, baslik: "Koltuk seçin (opsiyonel)", aciklama: "Ücretli veya ücretsiz koltuk seçimi yapabilirsiniz." },
                { adim: 6, baslik: "Biniş kartını kaydedin", aciklama: "E-posta veya mobil biniş kartınızı indirin." },
              ].map((item) => (
                <Card key={item.adim} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold shrink-0">
                      {item.adim}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.baslik}</h3>
                      <p className="text-muted-foreground">{item.aciklama}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Check-in Süreleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Check-in Süreleri</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Yöntem</th>
                    <th className="p-4 text-center">Açılış</th>
                    <th className="p-4 text-center rounded-tr-lg">Kapanış</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Online Check-in</td>
                    <td className="p-4 text-center">24 saat önce</td>
                    <td className="p-4 text-center">2 saat önce</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Mobil Check-in</td>
                    <td className="p-4 text-center">24 saat önce</td>
                    <td className="p-4 text-center">2 saat önce</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Havalimanı Kontuarı</td>
                    <td className="p-4 text-center">3 saat önce</td>
                    <td className="p-4 text-center">45 dk önce</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Uyarı */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 border-green-200 bg-green-50">
              <div className="flex items-start gap-4">
                <CheckSquare className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-800 mb-2">Tasarruf İpucu</h3>
                  <p className="text-sm text-green-700">
                    Online check-in yaparak hem zaman kazanır hem de havalimanında alınabilecek ek ücretlerden kaçınırsınız. Biniş kartınızı telefonunuza kaydedin, kağıt çıktı almak zorunda değilsiniz.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
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
                { title: "AJet Bagaj Hakkı", href: "/havayollari/ajet/bagaj-hakki" },
                { title: "AJet Koltuk Seçimi", href: "/havayollari/ajet/koltuk-secimi" },
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