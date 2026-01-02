import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Armchair, Phone, Plane, AlertTriangle, CheckCircle2, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Koltuk Seçimi 2026 | Koltuk Ücretleri ve Rehber - bilethizmeti.com",
  description:
    "AJet koltuk seçimi nasıl yapılır? Standart, ön sıra ve acil çıkış koltuk ücretleri ve kuralları.",
  keywords: "ajet koltuk seçimi, ajet koltuk ücreti, ajet extra legroom, ajet ön sıra koltuk",
}

export default function AJetKoltukSecimiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Armchair className="h-4 w-4" />
              <span>Koltuk Seçimi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Koltuk Seçimi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet&apos;te koltuk seçimi genellikle ücretlidir. İhtiyacınıza göre koltuk seçin.
            </p>
          </div>
        </div>
      </section>

      {/* Koltuk Türleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Türleri ve Ücretleri</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                    <Armchair className="h-7 w-7 text-gray-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Standart Koltuk</h3>
                <p className="text-2xl font-bold text-blue-600 text-center mb-4">₺50 - ₺100</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Orta ve arka sıralar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Pencere veya koridor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Standart diz mesafesi</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-blue-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <Star className="h-7 w-7 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Ön Sıra Koltuk</h3>
                <p className="text-2xl font-bold text-blue-600 text-center mb-4">₺150 - ₺250</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>İlk 3-5 sıra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Hızlı iniş avantajı</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Ekstra diz mesafesi</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-orange-200">
                <div className="text-center mb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                    <AlertTriangle className="h-7 w-7 text-orange-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">Acil Çıkış Koltuğu</h3>
                <p className="text-2xl font-bold text-blue-600 text-center mb-4">₺200 - ₺300</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>En geniş diz mesafesi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>18 yaş üstü zorunlu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Fiziksel yeterlilik şartı</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Acil Çıkış Kuralları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Acil Çıkış Koltuğu Kuralları</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-green-200">
                <h3 className="font-bold text-lg mb-4 text-green-700">Oturabilecek Yolcular</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 18 yaş ve üzeri</li>
                  <li>• Fiziksel olarak sağlıklı</li>
                  <li>• Türkçe veya İngilizce anlayabilen</li>
                  <li>• Acil durumda yardım edebilecek</li>
                </ul>
              </Card>

              <Card className="p-6 border-red-200">
                <h3 className="font-bold text-lg mb-4 text-red-700">Oturamayacak Yolcular</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 18 yaş altı çocuklar</li>
                  <li>• Hamile yolcular</li>
                  <li>• Hareket kısıtlılığı olanlar</li>
                  <li>• Bebekli yolcular</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nasıl Seçilir */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Nasıl Seçilir?</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-bold mb-4">1. Bilet Alırken</h3>
                <p className="text-sm text-muted-foreground">
                  Bilet satın alma sırasında koltuk seçimi adımında tercih yapabilirsiniz. En avantajlı fiyatlar bu aşamada sunulur.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">2. Sonradan Online</h3>
                <p className="text-sm text-muted-foreground">
                  Rezervasyon yönetimi sayfasından veya check-in sırasında koltuk seçimi yapabilirsiniz.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">3. Çağrı Merkezi</h3>
                <p className="text-sm text-muted-foreground">
                  AJet müşteri hizmetlerini arayarak koltuk seçimi yapabilirsiniz.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">4. Havalimanında</h3>
                <p className="text-sm text-muted-foreground">
                  Check-in kontuarında koltuk değişikliği yapılabilir ancak seçenekler sınırlı olabilir.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Koltuk Seçimi İçin Yardım mı Gerekiyor?</h2>
          <p className="mb-8 opacity-90">
            Size en uygun koltuğu seçmenizde yardımcı olalım.
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
                { title: "AJet Check-in", href: "/havayollari/ajet/check-in" },
                { title: "AJet İkram Servisi", href: "/havayollari/ajet/ikram-servisi" },
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