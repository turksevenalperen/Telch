import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Luggage, Phone, Plane, AlertTriangle, CheckCircle2, ShoppingCart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Bagaj Hakkı 2026 | Bagaj Kuralları ve Ücretleri - FlyTR",
  description:
    "AJet bagaj hakkı ve kuralları. Kabin bagajı, check-in bagajı ağırlık limitleri ve ek bagaj ücretleri.",
  keywords: "ajet bagaj, ajet bagaj hakkı, ajet kabin bagajı, ajet bagaj ücreti",
}

export default function AJetBagajHakkiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Luggage className="h-4 w-4" />
              <span>Bagaj Hakkı</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Bagaj Hakkı ve Kuralları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet&apos;te bagaj hakları satın alınan tarife paketine göre belirlenir. İhtiyacınız kadar bagaj ekleyin.
            </p>
          </div>
        </div>
      </section>

      {/* Bagaj Türleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Bagaj Türleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 hover:shadow-lg transition-shadow border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 shrink-0">
                    <Luggage className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Kabin Bagajı</h3>
                    <p className="text-muted-foreground mb-4">Tüm tarifelerde dahil</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>1 adet kabin bagajı</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Maksimum 8 kg ağırlık</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>55x40x23 cm boyut</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 shrink-0">
                    <ShoppingCart className="h-7 w-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Check-in Bagajı</h3>
                    <p className="text-muted-foreground mb-4">Çoğu tarifede ücretli</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span>15 kg - 20 kg - 25 kg seçenekleri</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span>Tek parça max 32 kg</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span>Online alımda indirimli</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bagaj Ücretleri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Bagaj Ücretleri</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Bagaj</th>
                    <th className="p-4 text-center">Online</th>
                    <th className="p-4 text-center rounded-tr-lg">Havalimanı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">15 kg</td>
                    <td className="p-4 text-center text-green-600 font-semibold">₺150</td>
                    <td className="p-4 text-center text-red-600">₺250</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">20 kg</td>
                    <td className="p-4 text-center text-green-600 font-semibold">₺200</td>
                    <td className="p-4 text-center text-red-600">₺350</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">25 kg</td>
                    <td className="p-4 text-center text-green-600 font-semibold">₺250</td>
                    <td className="p-4 text-center text-red-600">₺450</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Fazla kg (kg başı)</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center text-red-600">₺30/kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="mt-6 p-4 border-green-200 bg-green-50">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <p className="text-sm text-green-800">
                  <strong>Tasarruf İpucu:</strong> Bagajınızı bilet alırken veya online olarak eklerseniz havalimanına göre %40&apos;a kadar tasarruf edebilirsiniz.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Önemli Bilgiler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Önemli Bilgiler</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { baslik: "Boyut Aşımı", aciklama: "Belirtilen boyutları aşan bagajlar kabine alınmaz, ücretli olarak bagaj bölümüne verilir." },
                { baslik: "Kilo Aşımı", aciklama: "Satın alınan bagaj hakkını aşan kilolar için kg başına ek ücret alınır." },
                { baslik: "Değerli Eşyalar", aciklama: "Elektronik cihazlar, değerli eşyalar ve ilaçlar kabin bagajında taşınmalıdır." },
                { baslik: "Yasak Maddeler", aciklama: "Yanıcı, patlayıcı ve kesici aletler bagajda taşınamaz." },
              ].map((item) => (
                <Card key={item.baslik} className="p-4">
                  <h3 className="font-bold mb-2">{item.baslik}</h3>
                  <p className="text-sm text-muted-foreground">{item.aciklama}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bagaj Hakkında Sorularınız mı Var?</h2>
          <p className="mb-8 opacity-90">
            Bagaj kuralları ve ücretleri hakkında detaylı bilgi için bizi arayın.
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
                { title: "AJet Check-in", href: "/havayollari/ajet/check-in" },
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