import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Luggage, Phone, Plane, AlertTriangle, CheckCircle2, ShoppingCart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Bagaj Hakkı 2026 | Bagaj Kuralları ve Ücretleri - bilethizmeti.com",
  description:
    "Pegasus bagaj hakkı ve kuralları. Kabin bagajı, check-in bagajı ağırlık limitleri ve ek bagaj ücretleri.",
  keywords: "pegasus bagaj, pegasus bagaj hakkı, pegasus kabin bagajı, pegasus bagaj ücreti",
}

export default function PegasusBagajHakkiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <Luggage className="h-4 w-4" />
              <span>Bagaj Hakkı</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus Bagaj Hakkı ve Kuralları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus&apos;ta bagaj hakları seçilen tarife paketine göre belirlenir. En düşük fiyatlı biletlerde bagaj dahil değildir.
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
              <Card className="p-6 hover:shadow-lg transition-shadow border-yellow-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 shrink-0">
                    <Luggage className="h-7 w-7 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Kabin Bagajı</h3>
                    <p className="text-muted-foreground mb-4">Tarife türüne göre değişir</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span>Light: Sadece küçük el çantası</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Diğer tarifeler: 1 adet kabin bagajı</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Maksimum 8 kg ağırlık</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>55x40x20 cm boyut</span>
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
                        <span>12 kg - 20 kg - 32 kg seçenekleri</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <span>Tek parça max 32 kg</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
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

      {/* Tarifelere Göre Bagaj */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarifelere Göre Bagaj Hakları</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-yellow-600 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Tarife</th>
                    <th className="p-4 text-center">Kabin Bagajı</th>
                    <th className="p-4 text-center rounded-tr-lg">Check-in Bagajı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Light</td>
                    <td className="p-4 text-center">Küçük el çantası</td>
                    <td className="p-4 text-center text-red-600">Dahil değil</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Essentials</td>
                    <td className="p-4 text-center">8 kg</td>
                    <td className="p-4 text-center">15-20 kg</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Advantage</td>
                    <td className="p-4 text-center">8 kg</td>
                    <td className="p-4 text-center">20-25 kg</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Flex</td>
                    <td className="p-4 text-center">8 kg</td>
                    <td className="p-4 text-center">20-25 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="mt-6 p-4 border-green-200 bg-green-50">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <p className="text-sm text-green-800">
                  <strong>Tasarruf İpucu:</strong> Bagajınızı bilet alırken eklerseniz havalimanına göre %50&apos;ye kadar tasarruf edebilirsiniz.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ek Bagaj Ücretleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Ek Bagaj Ücretleri</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-yellow-600 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Bagaj</th>
                    <th className="p-4 text-center">Online</th>
                    <th className="p-4 text-center rounded-tr-lg">Havalimanı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">12 kg</td>
                    <td className="p-4 text-center text-green-600 font-semibold">₺200</td>
                    <td className="p-4 text-center text-red-600">₺400</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">20 kg</td>
                    <td className="p-4 text-center text-green-600 font-semibold">₺300</td>
                    <td className="p-4 text-center text-red-600">₺550</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">32 kg</td>
                    <td className="p-4 text-center text-green-600 font-semibold">₺450</td>
                    <td className="p-4 text-center text-red-600">₺750</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Ücretler güzergah ve döneme göre değişiklik gösterebilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
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
                { title: "Pegasus Check-in", href: "/havayollari/pegasus/check-in" },
                { title: "Pegasus Koltuk Seçimi", href: "/havayollari/pegasus/koltuk-secimi" },
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