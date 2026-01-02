import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { CheckSquare, CheckCircle2, Clock, Phone, Plane, Smartphone, Monitor, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Check-in 2025 | Türk Hava Yolları Online Check-in Nasıl Yapılır - FlyTR",
  description:
    "Türk Hava Yolları online check-in işlemleri. THY web, mobil ve havaalanı check-in adımları. Ne zaman check-in açılır? Güncel check-in rehberi.",
  keywords: "thy check-in, türk hava yolları check-in, thy online check-in, thy mobil check-in, thy check-in nasıl yapılır",
}

export default function THYCheckInPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <CheckSquare className="h-4 w-4" />
              <span>Check-in İşlemleri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Check-in Nasıl Yapılır?
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları online, mobil ve havaalanı check-in işlemleri hakkında detaylı bilgi.
            </p>
          </div>
        </div>
      </section>

      {/* Check-in Türleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Check-in Yöntemleri</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Monitor className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Web Check-in</h3>
                <p className="text-muted-foreground mb-4">turkishairlines.com üzerinden</p>
                <p className="text-sm font-medium text-red-600">Uçuştan 24 saat önce açılır</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mobil Check-in</h3>
                <p className="text-muted-foreground mb-4">THY mobil uygulaması ile</p>
                <p className="text-sm font-medium text-blue-600">Uçuştan 24 saat önce açılır</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Havaalanı Check-in</h3>
                <p className="text-muted-foreground mb-4">Kiosk veya kontuardan</p>
                <p className="text-sm font-medium text-green-600">Uçuştan 3 saat önce</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Adımlar */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Online Check-in Adımları</h2>
            
            <div className="space-y-4">
              {[
                { adim: 1, baslik: "THY web sitesine veya uygulamasına girin", aciklama: "turkishairlines.com veya THY mobil uygulamasını açın." },
                { adim: 2, baslik: "Check-in bölümünü seçin", aciklama: "Ana sayfadaki 'Online Check-in' butonuna tıklayın." },
                { adim: 3, baslik: "Rezervasyon bilgilerinizi girin", aciklama: "PNR kodu ve soyadınızı girerek devam edin." },
                { adim: 4, baslik: "Yolcu bilgilerini doğrulayın", aciklama: "Pasaport ve iletişim bilgilerinizi kontrol edin." },
                { adim: 5, baslik: "Koltuk seçin (opsiyonel)", aciklama: "Tercih ettiğiniz koltuğu seçebilirsiniz." },
                { adim: 6, baslik: "Biniş kartınızı alın", aciklama: "E-posta veya mobil biniş kartınızı kaydedin." },
              ].map((item) => (
                <Card key={item.adim} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold shrink-0">
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

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Check-in Konusunda Yardıma mı İhtiyacınız Var?</h2>
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

      {/* Benzer Konular */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">İlgili Konular</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "THY Bagaj Hakkı", href: "/havayollari/thy/bagaj-hakki" },
                { title: "THY Koltuk Seçimi", href: "/havayollari/thy/koltuk-secimi" },
                { title: "THY Mobil Uygulama", href: "/havayollari/thy/mobil-uygulama" },
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
