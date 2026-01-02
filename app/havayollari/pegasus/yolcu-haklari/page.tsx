import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Scale, Phone, Plane, CheckCircle2, Clock, AlertTriangle, Euro } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Yolcu Hakları 2026 | Tazminat ve Haklarınız - bilethizmeti.com",
  description:
    "Pegasus yolcu hakları, iptal ve rötar tazminatları, EU261 hakları. Bagaj kaybı ve hasarında tazminat bilgileri.",
  keywords: "pegasus yolcu hakları, pegasus tazminat, pegasus rötar hakkı, pegasus bagaj kaybı",
}

export default function PegasusYolcuHaklariPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <Scale className="h-4 w-4" />
              <span>Yolcu Hakları</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus Yolcu Hakları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus, AB (EU261) ve Türkiye SHY düzenlemelerine tabidir. Uçuş iptallerinde ve uzun rötarlarda tazminat hakkınız olabilir.
            </p>
          </div>
        </div>
      </section>

      {/* Tazminat Hakları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">EU261 Tazminat Hakları</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Euro className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Kısa Mesafe</h3>
                <p className="text-muted-foreground mb-2">1500 km&apos;ye kadar</p>
                <p className="text-2xl font-bold text-green-600">€250</p>
                <p className="text-sm text-muted-foreground mt-2">3+ saat rötar/iptal</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-yellow-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Euro className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Orta Mesafe</h3>
                <p className="text-muted-foreground mb-2">1500-3500 km</p>
                <p className="text-2xl font-bold text-yellow-600">€400</p>
                <p className="text-sm text-muted-foreground mt-2">3+ saat rötar/iptal</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Euro className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Uzun Mesafe</h3>
                <p className="text-muted-foreground mb-2">3500 km üzeri</p>
                <p className="text-2xl font-bold text-blue-600">€600</p>
                <p className="text-sm text-muted-foreground mt-2">4+ saat rötar/iptal</p>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              * AB&apos;den kalkan veya AB&apos;ye inen uçuşlarda geçerlidir
            </p>
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
                    <h3 className="font-bold text-lg mb-2">2 Saat Üzeri Rötar</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Ücretsiz yiyecek ve içecek</li>
                      <li>• 2 ücretsiz telefon görüşmesi veya e-posta</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">5 Saat Üzeri Rötar</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Tam bilet iadesi talep hakkı</li>
                      <li>• Alternatif uçuş seçeneği</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ertesi Güne Sarkan Rötar</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Ücretsiz otel konaklaması</li>
                      <li>• Havalimanı-otel transferi</li>
                      <li>• Yemek masrafları</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bagaj Hakları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Bagaj Hakları</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Bagaj Kaybı/Hasarı</h3>
                <ul className="space-y-3">
                  {[
                    "Maksimum 1.288 SDR (~€1.500) tazminat",
                    "21 gün içinde kayıp bildirimi",
                    "7 gün içinde hasar bildirimi",
                    "PIR formu doldurulmalı",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Geciken Bagaj</h3>
                <ul className="space-y-3">
                  {[
                    "Temel ihtiyaç masrafları karşılanır",
                    "Makbuz/fatura gereklidir",
                    "Makul harcamalar kabul edilir",
                    "21 gün içinde başvuru",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                  <h3 className="font-bold text-yellow-800 mb-2">İstisna Durumlar</h3>
                  <p className="text-sm text-yellow-700">
                    Olağanüstü koşullar (hava durumu, grev, güvenlik tehditleri vb.) nedeniyle yaşanan aksaklıklarda tazminat ödenmeyebilir. Ancak bakım hakları (yemek, konaklama) her durumda geçerlidir.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Haklarınızı Öğrenmek İster misiniz?</h2>
          <p className="mb-8 opacity-90">
            Tazminat hakkınız olup olmadığını uzmanlarımıza sorun.
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
                { title: "Pegasus Bilet İptali", href: "/havayollari/pegasus/bilet-iptali" },
                { title: "Pegasus Bilet Değişikliği", href: "/havayollari/pegasus/bilet-degisikligi" },
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