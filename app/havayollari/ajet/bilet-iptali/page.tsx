import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { XCircle, Phone, Plane, AlertTriangle, CheckCircle2, Clock, CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Bilet İptali 2026 | İptal Koşulları ve İade - bilethizmeti.com",
  description:
    "AJet bilet iptali nasıl yapılır? İptal koşulları, iade süreleri ve ücretleri hakkında detaylı bilgi.",
  keywords: "ajet bilet iptali, ajet iptal, ajet iade, ajet bilet iptal ücreti",
}

export default function AJetBiletIptaliPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <XCircle className="h-4 w-4" />
              <span>Bilet İptali</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Bilet İptali ve İade
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet bilet iptal koşulları tarife türüne göre değişir. İptal ve iade kurallarını öğrenin.
            </p>
          </div>
        </div>
      </section>

      {/* Tarife Türlerine Göre İptal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarife Türlerine Göre İptal Koşulları</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow border-red-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <XCircle className="h-7 w-7 text-red-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Basic Tarife</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">En ekonomik biletler</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>İptal ve iade hakkı yok</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>Değişiklik ücretli</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Sadece vergi iadesi</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-yellow-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
                    <AlertTriangle className="h-7 w-7 text-yellow-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Advantage Tarife</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">Orta segment</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 shrink-0" />
                    <span>Kesintili iade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 shrink-0" />
                    <span>%50-70 kesinti uygulanır</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Değişiklik hakkı var</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Comfort Tarife</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">Esnek biletler</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Düşük kesintili iade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Ücretsiz değişiklik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Öncelikli destek</span>
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
                { adim: 1, baslik: "AJet web sitesine girin", aciklama: "ajet.com adresine gidin veya mobil uygulamayı açın." },
                { adim: 2, baslik: "Rezervasyonunuzu bulun", aciklama: "PNR kodu ve soyadınızla rezervasyonunuza erişin." },
                { adim: 3, baslik: "İptal seçeneğini seçin", aciklama: "Rezervasyon detaylarında 'Bilet İptal' butonuna tıklayın." },
                { adim: 4, baslik: "İade tutarını görüntüleyin", aciklama: "Kesintiler düşüldükten sonra iade edilecek tutar gösterilir." },
                { adim: 5, baslik: "İptali onaylayın", aciklama: "İşlemi onaylayın, iade 7-14 iş günü içinde hesabınıza yatar." },
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

      {/* İade Süreleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İade Süreleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                  <h3 className="font-bold text-lg">Kredi Kartı İadesi</h3>
                </div>
                <p className="text-muted-foreground">
                  Kredi kartına yapılan iadelerde tutar <strong>7-14 iş günü</strong> içinde hesabınıza yansır. Bankanıza göre süre değişebilir.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <h3 className="font-bold text-lg">Vergi İadesi</h3>
                </div>
                <p className="text-muted-foreground">
                  İade hakkı olmayan biletlerde bile havalimanı vergileri iade edilebilir. Başvuru gereklidir.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Uyarı */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 border-yellow-200 bg-yellow-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Önemli Uyarı</h3>
                  <p className="text-sm text-yellow-700">
                    Uçuşa kalan süre azaldıkça iptal koşulları değişebilir. Uçuş saatine çok yakın iptallerde iade yapılmayabilir. İptal işlemini mümkün olan en erken zamanda yapmanızı öneririz.
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
                { title: "AJet Bilet Değişikliği", href: "/havayollari/ajet/bilet-degisikligi" },
                { title: "AJet Yolcu Hakları", href: "/havayollari/ajet/yolcu-haklari" },
                { title: "AJet İletişim", href: "/havayollari/ajet/iletisim" },
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