import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { PawPrint, Phone, Plane, AlertTriangle, CheckCircle2, FileText, Box } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Evcil Hayvan Taşıma 2026 | Pet Kuralları ve Ücretler - bilethizmeti.com",
  description:
    "AJet evcil hayvan taşıma kuralları. Kedi, köpek uçak yolculuğu, kabin ve kargo taşıma ücretleri.",
  keywords: "ajet evcil hayvan, ajet pet, ajet kedi taşıma, ajet köpek taşıma",
}

export default function AJetEvcilHayvanPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <PawPrint className="h-4 w-4" />
              <span>Evcil Hayvan Taşıma</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Evcil Hayvan Taşıma
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet ile evcil hayvanınızı güvenle taşıyın. Kabin ve kargo taşıma seçenekleri.
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
              <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 shrink-0">
                    <PawPrint className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Kabin İçi Taşıma (PETC)</h3>
                    <p className="text-muted-foreground mb-4">Küçük kedi ve köpekler için</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Hayvan + taşıma çantası: max 8 kg</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Çanta boyutu: 23x30x40 cm</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Koltuk altında seyahat eder</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 shrink-0">
                    <Box className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Kargo Bölümü (AVIH)</h3>
                    <p className="text-muted-foreground mb-4">Büyük hayvanlar için</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        <span>8 kg üzeri hayvanlar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        <span>Isı kontrollü bölüm</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        <span>IATA onaylı kafes zorunlu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ücretler */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Taşıma Ücretleri</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Taşıma Türü</th>
                    <th className="p-4 text-center">Yurtiçi</th>
                    <th className="p-4 text-center rounded-tr-lg">Yurtdışı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Kabin (PETC)</td>
                    <td className="p-4 text-center">₺500 - ₺800</td>
                    <td className="p-4 text-center">₺1.000 - ₺1.500</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Kargo (AVIH)</td>
                    <td className="p-4 text-center">₺800 - ₺1.200</td>
                    <td className="p-4 text-center">₺1.500 - ₺2.500</td>
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

      {/* Gerekli Belgeler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gerekli Belgeler</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { belge: "Sağlık Sertifikası", aciklama: "Uçuştan en fazla 10 gün önce alınmış veteriner belgesi" },
                { belge: "Aşı Kartı", aciklama: "Kuduz dahil tüm aşıların güncel olması" },
                { belge: "Mikroçip", aciklama: "ISO standartlarına uygun mikroçip" },
                { belge: "Pet Pasaportu", aciklama: "Uluslararası uçuşlarda zorunlu" },
              ].map((item) => (
                <Card key={item.belge} className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold">{item.belge}</h3>
                      <p className="text-sm text-muted-foreground">{item.aciklama}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Önemli Uyarılar */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Önemli Bilgiler</h2>
            
            <div className="space-y-4">
              <Card className="p-4 border-yellow-200 bg-yellow-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-yellow-800">Rezervasyon Zorunlu</h3>
                    <p className="text-sm text-yellow-700">Evcil hayvan taşıma için uçuştan en az 48 saat önce rezervasyon yapılmalıdır. Kontenjan sınırlıdır.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-red-200 bg-red-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-800">Yasak Irklar</h3>
                    <p className="text-sm text-red-700">Kısa burunlu ırklar (Bulldog, Pug, vb.) solunum riski nedeniyle kabul edilmeyebilir.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Evcil Hayvan Taşıma Rezervasyonu</h2>
          <p className="mb-8 opacity-90">
            Evcil hayvanınız için yer ayırtmak için bizi arayın.
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