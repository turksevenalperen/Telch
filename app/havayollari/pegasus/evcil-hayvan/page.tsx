import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { PawPrint, Phone, Plane, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Evcil Hayvan Taşıma 2026 | Kurallar ve Ücretler - FlyTR",
  description:
    "Pegasus evcil hayvan taşıma kuralları, kabin ve kargo ücretleri. Kedi, köpek ve diğer hayvanlar için uçuş bilgileri.",
  keywords: "pegasus evcil hayvan, pegasus kedi köpek, pegasus pet taşıma, pegasus hayvan ücreti",
}

export default function PegasusEvcilHayvanPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <PawPrint className="h-4 w-4" />
              <span>Evcil Hayvan Taşıma</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus Evcil Hayvan Politikası
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus, evcil hayvan taşımacılığına izin verir. Kedi ve köpekler kabin veya kargo olarak taşınabilir. Kuş, balık gibi türler kabul edilmez.
            </p>
          </div>
        </div>
      </section>

      {/* Taşıma Seçenekleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Taşıma Seçenekleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 hover:shadow-lg transition-shadow border-yellow-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                    <PawPrint className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Kabin İçi Taşıma</h3>
                    <p className="text-muted-foreground">Yanınızda seyahat</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Maksimum 8 kg (taşıma kabı dahil)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Uygun taşıma kabı gerekli</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Koltuk altına sığmalı</span>
                  </li>
                </ul>
                <p className="text-xl font-bold text-yellow-600">299-599 TL</p>
                <p className="text-sm text-muted-foreground">Uçuş mesafesine göre</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <PawPrint className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Kargo Taşıma</h3>
                    <p className="text-muted-foreground">Bagaj bölümünde</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>8 kg üzeri hayvanlar</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>IATA onaylı kafes gerekli</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Klimalı bagaj bölümü</span>
                  </li>
                </ul>
                <p className="text-xl font-bold text-blue-600">499-999 TL</p>
                <p className="text-sm text-muted-foreground">Ağırlık ve mesafeye göre</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Kabul Edilen Hayvanlar */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Kabul Edilen Hayvanlar</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Kabul Edilenler
                </h3>
                <ul className="space-y-3">
                  {[
                    "Kedi",
                    "Köpek",
                    "Rehber köpekler (ücretsiz)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Kabul Edilmeyenler
                </h3>
                <ul className="space-y-3">
                  {[
                    "Kuşlar",
                    "Balıklar",
                    "Kemirgenler",
                    "Sürüngenler",
                    "Tehlikeli ırk köpekler",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gerekli Belgeler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gerekli Belgeler</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Yurt İçi Uçuşlar</h3>
                <ul className="space-y-3">
                  {[
                    "Aşı kartı",
                    "Sağlık sertifikası",
                    "Mikroçip numarası",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Yurt Dışı Uçuşlar</h3>
                <ul className="space-y-3">
                  {[
                    "Uluslararası pet pasaportu",
                    "Kuduz aşısı (en az 21 gün önce)",
                    "Varış ülkesi gereksinimleri",
                    "CITES belgesi (gerekirse)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600" />
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
                  <h3 className="font-bold text-yellow-800 mb-2">Önemli Bilgiler</h3>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Evcil hayvan rezervasyonu en az 48 saat önce yapılmalıdır</li>
                    <li>• Her uçuşta sınırlı sayıda evcil hayvan kabul edilir</li>
                    <li>• Kısa burunlu (brachycephalic) ırklar için kısıtlamalar olabilir</li>
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
          <h2 className="text-2xl font-bold mb-4">Evcil Hayvanınızla Seyahat mi Edeceksiniz?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz size en doğru bilgiyi verecektir.
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
                { title: "Pegasus Bagaj Hakkı", href: "/havayollari/pegasus/bagaj-hakki" },
                { title: "Pegasus Check-in", href: "/havayollari/pegasus/check-in" },
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