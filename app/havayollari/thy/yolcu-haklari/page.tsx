import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Scale, Phone, Plane, Clock, Euro, Coffee, Hotel, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Yolcu Hakları 2026 | Rötar ve İptal Tazminatı - bilethizmeti.com",
  description:
    "Türk Hava Yolları yolcu hakları. Uçuş iptali, rötar tazminatı, EU261 hakları ve bagaj kayıplarında haklarınız.",
  keywords: "thy yolcu hakları, uçuş iptali tazminat, rötar hakları, eu261, thy tazminat",
}

export default function THYYolcuHaklariPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <Scale className="h-4 w-4" />
              <span>Yolcu Hakları</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance" aria-label="THY Yolcu Hakları Rehberi">
              THY Yolcu Hakları Rehberi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Uçuş iptali, rötar ve bagaj sorunlarında haklarınızı bilin.
            </p>
          </div>
        </div>
      </section>

      {/* EU261 Tazminat Hakları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">EU261 Tazminat Hakları</h2>
            <p className="text-center text-muted-foreground mb-8">AB kalkışlı veya AB havayolu ile AB varışlı uçuşlarda geçerlidir.</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-green-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Euro className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">250 €</h3>
                <p className="text-sm text-muted-foreground">1.500 km&apos;ye kadar uçuşlar</p>
                <p className="text-xs text-muted-foreground mt-2">3+ saat rötar veya iptal</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Euro className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">400 €</h3>
                <p className="text-sm text-muted-foreground">1.500 - 3.500 km arası</p>
                <p className="text-xs text-muted-foreground mt-2">3+ saat rötar veya iptal</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-purple-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Euro className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">600 €</h3>
                <p className="text-sm text-muted-foreground">3.500 km üzeri uçuşlar</p>
                <p className="text-xs text-muted-foreground mt-2">4+ saat rötar veya iptal</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rötar Hakları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Rötar Durumunda Haklarınız</h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 shrink-0">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">2 Saat ve Üzeri Rötar</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Ücretsiz yiyecek ve içecek</li>
                      <li>• 2 adet ücretsiz telefon görüşmesi veya e-posta</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 shrink-0">
                    <Coffee className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">3-4 Saat Rötar</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Yemek ikramı</li>
                      <li>• İletişim imkanı</li>
                      <li>• Bekleme salonu erişimi (varsa)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 shrink-0">
                    <Hotel className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Geceyi Kapsayan Rötar</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Ücretsiz otel konaklaması</li>
                      <li>• Havaalanı-otel transferi</li>
                      <li>• Yemek masrafları karşılanır</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* İptal Durumunda */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uçuş İptali Durumunda</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Haklarınız
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Tam bilet iadesi veya alternatif uçuş</li>
                  <li>• Tazminat hakkı (14 günden az bildirimde)</li>
                  <li>• Bekleme süresinde ikram</li>
                  <li>• Gerekirse konaklama</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  İstisnalar
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Olağanüstü haller (hava koşulları, grev)</li>
                  <li>• 14 gün önceden bildirim yapılması</li>
                  <li>• Güvenlik tehditleri</li>
                  <li>• Politik istikrarsızlık</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bagaj Hakları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Bagaj Sorunlarında Haklarınız</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 text-center">
                <h3 className="font-bold mb-2">Geciken Bagaj</h3>
                <p className="text-sm text-muted-foreground">21 gün içinde teslim edilmezse kayıp sayılır. Temel ihtiyaçlar karşılanır.</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-bold mb-2">Hasarlı Bagaj</h3>
                <p className="text-sm text-muted-foreground">7 gün içinde yazılı başvuru. Tamir veya tazminat hakkı.</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-bold mb-2">Kayıp Bagaj</h3>
                <p className="text-sm text-muted-foreground">Maksimum 1.288 SDR (~1.500 €) tazminat hakkı.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Haklarınız Konusunda Yardıma mı İhtiyacınız Var?</h2>
          <p className="mb-8 opacity-90">
            Tazminat talepleriniz için uzman ekibimizle iletişime geçin.
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
                { title: "THY Bilet İptali", href: "/havayollari/thy/bilet-iptali" },
                { title: "THY Bilet Değişikliği", href: "/havayollari/thy/bilet-degisikligi" },
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