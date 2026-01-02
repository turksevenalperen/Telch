import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { XCircle, Phone, Plane, AlertTriangle, CheckCircle2, Clock, CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Bilet İptali 2026 | İptal Koşulları ve İade - FlyTR",
  description:
    "Pegasus bilet iptali nasıl yapılır? İptal koşulları, iade süreleri ve ücretleri hakkında detaylı bilgi.",
  keywords: "pegasus bilet iptali, pegasus iptal, pegasus iade, pegasus bilet iptal ücreti",
}

export default function PegasusBiletIptaliPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <XCircle className="h-4 w-4" />
              <span>Bilet İptali</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus Bilet İptali ve İade
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus bilet iptal koşulları tarife türüne göre değişir. İptal ve iade kurallarını öğrenin.
            </p>
          </div>
        </div>
      </section>

      {/* Tarife Türlerine Göre İptal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarife Türlerine Göre İptal Koşulları</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6 hover:shadow-lg transition-shadow border-red-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Light</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>İptal/iade yok</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>Değişiklik ücretli</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-orange-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Essentials</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Kesintili iade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Değişiklik ücretli</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-yellow-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Advantage</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 shrink-0" />
                    <span>Düşük kesintili iade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 shrink-0" />
                    <span>İndirimli değişiklik</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Flex</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Tam iade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Ücretsiz değişiklik</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* İptal Nasıl Yapılır */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İptal Nasıl Yapılır?</h2>
            
            <div className="space-y-4">
              {[
                { adim: 1, baslik: "Pegasus web sitesine girin", aciklama: "flypgs.com adresine gidin veya mobil uygulamayı açın." },
                { adim: 2, baslik: "Rezervasyonunuzu bulun", aciklama: "PNR kodu ve soyadınızla rezervasyonunuza erişin." },
                { adim: 3, baslik: "İptal seçeneğini seçin", aciklama: "Rezervasyon detaylarında 'Bilet İptal' butonuna tıklayın." },
                { adim: 4, baslik: "İade tutarını görüntüleyin", aciklama: "Kesintiler düşüldükten sonra iade edilecek tutar gösterilir." },
                { adim: 5, baslik: "İptali onaylayın", aciklama: "İşlemi onaylayın, iade 7-14 iş günü içinde hesabınıza yatar." },
              ].map((item) => (
                <Card key={item.adim} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-600 text-white font-bold shrink-0">
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

      {/* İade Süreleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İade Süreleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <CreditCard className="h-8 w-8 text-yellow-600" />
                  <h3 className="font-bold text-lg">Kredi Kartı İadesi</h3>
                </div>
                <p className="text-muted-foreground">
                  Kredi kartına yapılan iadelerde tutar <strong>7-14 iş günü</strong> içinde hesabınıza yansır.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                  <h3 className="font-bold text-lg">Vergi İadesi</h3>
                </div>
                <p className="text-muted-foreground">
                  Light biletlerde bile havalimanı vergileri iade edilebilir. Başvuru gereklidir.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bilet İptali İçin Yardım mı Gerekiyor?</h2>
          <p className="mb-8 opacity-90">
            İptal işlemlerinizde size yardımcı olalım.
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
                { title: "Pegasus Bilet Değişikliği", href: "/havayollari/pegasus/bilet-degisikligi" },
                { title: "Pegasus Yolcu Hakları", href: "/havayollari/pegasus/yolcu-haklari" },
                { title: "Pegasus İletişim", href: "/havayollari/pegasus/iletisim" },
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