import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Armchair, Phone, Plane, CheckCircle2, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Koltuk Seçimi 2026 | Ücretler ve Koltuk Tipleri - bilethizmeti.com",
  description:
    "SunExpress koltuk seçimi ücretleri, koltuk tipleri ve extra legroom seçenekleri hakkında bilgi.",
  keywords: "sunexpress koltuk seçimi, sunexpress koltuk ücreti, sunexpress extra legroom",
}

export default function SunExpressKoltukSecimiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Armchair className="h-4 w-4" />
              <span>Koltuk Seçimi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Koltuk Seçimi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress&apos;te koltuk seçimi tarifeye göre ücretsiz veya ücretlidir.
            </p>
          </div>
        </div>
      </section>

      {/* Koltuk Tipleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Tipleri</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <Armchair className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Standart Koltuk</h3>
                <p className="text-muted-foreground mb-4">Orta ve arka sıralar</p>
                <p className="text-sm text-gray-600">Bazı tarifelerde ücretsiz</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-amber-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Armchair className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Ön Sıra / Extra Legroom</h3>
                <p className="text-muted-foreground mb-4">Ekstra diz mesafesi</p>
                <p className="text-sm font-medium text-amber-600">Ücretli</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-orange-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Armchair className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Acil Çıkış Koltuğu</h3>
                <p className="text-muted-foreground mb-4">En geniş alan</p>
                <p className="text-sm text-orange-600">Belirli şartlara bağlı</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Seçimi Hakkında</h2>
            
            <div className="space-y-4">
              {[
                "Standart koltuklar bazı tarifelerde ücretsiz",
                "Ön sıralar ve ekstra diz mesafeli koltuklar ücretli",
                "Acil çıkış koltukları belirli şartlara bağlıdır",
                "Koltuk seçimi bilet alım sırasında veya sonradan eklenebilir",
              ].map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
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
                { title: "SunExpress Bagaj Hakkı", href: "/havayollari/sunexpress/bagaj-hakki" },
                { title: "SunExpress Check-in", href: "/havayollari/sunexpress/check-in" },
                { title: "SunExpress Bilet Değişikliği", href: "/havayollari/sunexpress/bilet-degisikligi" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-amber-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-amber-500" />
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