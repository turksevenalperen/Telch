import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Shield, Phone, Plane, Clock, AlertTriangle, CheckCircle2, Coffee, Hotel } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Yolcu Hakları 2026 | Rötar ve İptal Tazminatları - bilethizmeti.com",
  description:
    "AJet yolcu hakları. Uçuş iptali, rötar durumunda haklarınız, tazminat ve ikram bilgileri.",
  keywords: "ajet yolcu hakları, ajet rötar, ajet iptal tazminat, ajet gecikme hakları",
}

export default function AJetYolcuHaklariPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Shield className="h-4 w-4" />
              <span>Yolcu Hakları</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Yolcu Hakları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Uçuş iptali veya rötar durumunda haklarınızı bilin. Tazminat ve ikram hakları.
            </p>
          </div>
        </div>
      </section>

      {/* Rötar Hakları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Rötar Durumunda Haklarınız</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
                    <Clock className="h-7 w-7 text-yellow-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">2 Saat Rötar</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Ücretsiz içecek</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Bilgilendirme</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-orange-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                    <Clock className="h-7 w-7 text-orange-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">3+ Saat Rötar</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Yemek ikramı</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Ücretsiz iletişim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Alternatif uçuş seçeneği</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-red-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <Hotel className="h-7 w-7 text-red-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Gece Gecikmesi</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Hotel className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Ücretsiz konaklama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Transfer hizmeti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Yemek ve içecek</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* İptal Hakları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uçuş İptali Durumunda</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Seçenekleriniz
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">1.</span>
                    <span>Alternatif uçuşa ücretsiz transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">2.</span>
                    <span>Tam bilet iadesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">3.</span>
                    <span>Farklı tarihe ücretsiz değişiklik</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Ek Haklarınız
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>• Uzun beklemelerde ikram</li>
                  <li>• Gece kalınması gerekirse otel</li>
                  <li>• Ücretsiz iletişim imkanı</li>
                  <li>• Havaalanı-otel transferi</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tazminat Bilgisi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tazminat Hakları</h2>
            
            <Card className="p-6 border-blue-200">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">SHY-Yolcu Yönetmeliği</h3>
                  <p className="text-muted-foreground mb-4">
                    Türkiye&apos;de tüm yolcular Sivil Havacılık Genel Müdürlüğü&apos;nün SHY-Yolcu yönetmeliği kapsamında korunmaktadır.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Rötar ve iptallerde bilgilendirme hakkı</li>
                    <li>• Belirli süreleri aşan gecikmelerde ikram</li>
                    <li>• İptal durumunda tam iade veya alternatif uçuş</li>
                    <li>• Hasar gören bagaj için tazminat</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="mt-6">
              <Card className="p-4 border-yellow-200 bg-yellow-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-800">
                    <strong>Not:</strong> Olağanüstü koşullar (hava durumu, güvenlik, vb.) nedeniyle yapılan iptallerde tazminat hakları farklılık gösterebilir.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Haklarınız Konusunda Yardım mı Gerekiyor?</h2>
          <p className="mb-8 opacity-90">
            Uçuş sorunu yaşadıysanız haklarınızı öğrenmek için bizi arayın.
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
                { title: "AJet Bilet İptali", href: "/havayollari/ajet/bilet-iptali" },
                { title: "AJet Bilet Değişikliği", href: "/havayollari/ajet/bilet-degisikligi" },
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