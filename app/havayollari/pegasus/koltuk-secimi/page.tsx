import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Armchair, Phone, Plane, CheckCircle2, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Koltuk Seçimi 2026 | Ücretler ve Koltuk Tipleri - bilethizmeti.com",
  description:
    "Pegasus koltuk seçimi ücretleri, koltuk tipleri ve extra legroom seçenekleri. Ücretsiz koltuk seçimi hangi tarifelerde?",
  keywords: "pegasus koltuk seçimi, pegasus koltuk ücreti, pegasus extra legroom, pegasus ön koltuk",
}

export default function PegasusKoltukSecimiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <Armchair className="h-4 w-4" />
              <span>Koltuk Seçimi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus Koltuk Seçimi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus&apos;ta koltuk seçimi çoğu tarifede ücretlidir. Ancak bazı Flex tarifelerde ücretsiz koltuk seçimi yapılabilir.
            </p>
          </div>
        </div>
      </section>

      {/* Koltuk Tipleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Tipleri ve Ücretleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <Armchair className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Standart Koltuk</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-2">30-80 TL</p>
                <p className="text-sm text-muted-foreground">Orta ve arka sıralar</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-yellow-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Armchair className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Ön Sıra Koltuğu</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-2">100-200 TL</p>
                <p className="text-sm text-muted-foreground">Hızlı iniş avantajı</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-green-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Armchair className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Extra Legroom</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">150-350 TL</p>
                <p className="text-sm text-muted-foreground">Acil çıkış sıraları</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-purple-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Armchair className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Cam/Koridor</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">50-100 TL</p>
                <p className="text-sm text-muted-foreground">Tercih edilen pozisyon</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tarife Bazlı Koltuk Hakları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarifeye Göre Koltuk Seçimi</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-l-gray-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Light Tarife</h3>
                    <p className="text-muted-foreground">Koltuk seçimi ücretli</p>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Ücretli</span>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-yellow-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Standart Tarife</h3>
                    <p className="text-muted-foreground">Koltuk seçimi ücretli</p>
                  </div>
                  <span className="text-lg font-bold text-yellow-600">Ücretli</span>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Flex Tarife</h3>
                    <p className="text-muted-foreground">Standart koltuk seçimi ücretsiz</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">Ücretsiz*</span>
                </div>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Extra legroom koltuklar tüm tarifelerde ücretlidir
            </p>
          </div>
        </div>
      </section>

      {/* Extra Legroom Bilgisi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Extra Legroom Koltuklar</h2>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-green-600">Avantajları</h3>
                  <ul className="space-y-3">
                    {[
                      "Daha fazla bacak mesafesi",
                      "Daha rahat uçuş deneyimi",
                      "Kolay hareket imkanı",
                      "Uzun uçuşlarda konfor",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 text-yellow-600">Koşullar</h3>
                  <ul className="space-y-3">
                    {[
                      "18 yaş üstü olmalısınız",
                      "Acil durumda yardım edebilmelisiniz",
                      "İngilizce anlamanız gerekir",
                      "Fiziksel engel olmamalı",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Koltuk Seçiminde Yardım Alın</h2>
          <p className="mb-8 opacity-90">
            En uygun koltuğu seçmenizde size yardımcı olalım.
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
                { title: "Pegasus Bagaj Hakkı", href: "/havayollari/pegasus/bagaj-hakki" },
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