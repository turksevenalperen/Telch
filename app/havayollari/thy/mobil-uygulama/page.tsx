import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Smartphone, Phone, Plane, CheckCircle2, Download, CreditCard, QrCode, Bell, Map } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Mobil Uygulama 2026 | Türk Hava Yolları App İndir - bilethizmeti.com",
  description:
    "Türk Hava Yolları mobil uygulaması. iOS ve Android için ücretsiz THY app. Bilet alma, check-in, boarding pass ve uçuş takibi.",
  keywords: "thy mobil uygulama, türk hava yolları app, thy uygulama indir, thy ios, thy android",
}

export default function THYMobilUygulamaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <Smartphone className="h-4 w-4" />
              <span>Mobil Uygulama</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Mobil Uygulama
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Tüm THY hizmetleri cebinizde. iOS ve Android için ücretsiz indirin.
            </p>
          </div>
        </div>
      </section>

      {/* İndirme Butonları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Hemen İndirin</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/app/turkish-airlines/id383aborplane" target="_blank" rel="noopener noreferrer">
                <Card className="p-6 hover:shadow-lg transition-shadow flex items-center gap-4 cursor-pointer">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Download on the</p>
                    <p className="font-bold text-lg">App Store</p>
                  </div>
                </Card>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.turkishairlines.mobile" target="_blank" rel="noopener noreferrer">
                <Card className="p-6 hover:shadow-lg transition-shadow flex items-center gap-4 cursor-pointer">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">GET IT ON</p>
                    <p className="font-bold text-lg">Google Play</p>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uygulama Özellikleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                  <CreditCard className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Bilet Satın Alma</h3>
                <p className="text-sm text-muted-foreground">Uçuş arama, fiyat karşılaştırma ve güvenli ödeme ile bilet alın.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Online Check-in</h3>
                <p className="text-sm text-muted-foreground">Uçuştan 24 saat önce check-in yapın, koltuk seçin.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <QrCode className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mobil Biniş Kartı</h3>
                <p className="text-sm text-muted-foreground">Kağıtsız seyahat. QR kodlu boarding pass telefonunuzda.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-4">
                  <Bell className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Uçuş Bildirimleri</h3>
                <p className="text-sm text-muted-foreground">Kapı değişikliği, rötar ve uçuş durumu anlık bildirimler.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4">
                  <Map className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Canlı Uçuş Takibi</h3>
                <p className="text-sm text-muted-foreground">Uçuşunuzun konumunu harita üzerinde gerçek zamanlı izleyin.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 mb-4">
                  <Plane className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Miles&Smiles</h3>
                <p className="text-sm text-muted-foreground">Mil bakiyesi sorgulama, mil harcama ve kart bilgileri.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ek Özellikler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Daha Fazla Özellik</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Rezervasyon yönetimi",
                "Uçuş programı görüntüleme",
                "Koltuk yükseltme",
                "Ekstra bagaj satın alma",
                "Lounge erişim bilgileri",
                "Havaalanı haritaları",
                "Destinasyon rehberleri",
                "Döviz hesaplayıcı",
              ].map((ozellik) => (
                <Card key={ozellik} className="p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    <span>{ozellik}</span>
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
          <h2 className="text-2xl font-bold mb-4">Uygulama Hakkında Sorularınız mı Var?</h2>
          <p className="mb-8 opacity-90">
            Teknik destek veya uygulama kullanımı hakkında yardım için bizi arayın.
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
                { title: "THY Check-in", href: "/havayollari/thy/check-in" },
                { title: "THY Miles&Smiles", href: "/havayollari/thy/miles-smiles" },
                { title: "THY İletişim", href: "/havayollari/thy/iletisim" },
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