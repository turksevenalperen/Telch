import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { PawPrint, Phone, Plane, AlertTriangle, CheckCircle2, FileText, Scale, Box } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Evcil Hayvan Taşıma 2026 | Türk Hava Yolları Pet Kuralları - bilethizmeti.com",
  description:
    "Türk Hava Yolları evcil hayvan taşıma kuralları. THY ile kedi, köpek uçak yolculuğu. Kabin ve kargo taşıma, gerekli belgeler ve ücretler.",
  keywords: "thy evcil hayvan, türk hava yolları pet, thy kedi taşıma, thy köpek taşıma, uçakta evcil hayvan",
}

export default function THYEvcilHayvanPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <PawPrint className="h-4 w-4" />
              <span>Evcil Hayvan Taşıma</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Evcil Hayvan Taşıma Rehberi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları ile evcil hayvanınızı güvenle taşıyın. Kabin ve kargo seçenekleri hakkında bilgi alın.
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
                        <span>Yanınızda, koltuk altında seyahat eder</span>
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
                        <span>Isı kontrollü kargo bölümü</span>
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
                  <tr className="bg-red-600 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Güzergah</th>
                    <th className="p-4 text-center">Kabin (PETC)</th>
                    <th className="p-4 text-center rounded-tr-lg">Kargo (AVIH)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Yurtiçi Uçuşlar</td>
                    <td className="p-4 text-center">35 USD</td>
                    <td className="p-4 text-center">50 USD</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Avrupa</td>
                    <td className="p-4 text-center">50 USD</td>
                    <td className="p-4 text-center">100 USD</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Amerika / Uzak Doğu</td>
                    <td className="p-4 text-center">70 USD</td>
                    <td className="p-4 text-center">200 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Ücretler değişiklik gösterebilir. Güncel fiyatlar için THY ile iletişime geçin.
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
                { belge: "Sağlık Sertifikası", aciklama: "Uçuştan en fazla 10 gün önce alınmış veteriner sağlık belgesi" },
                { belge: "Aşı Kartı", aciklama: "Kuduz aşısı dahil tüm aşıların güncel olması" },
                { belge: "Mikroçip", aciklama: "ISO standartlarına uygun mikroçip takılı olmalı" },
                { belge: "Pet Pasaportu", aciklama: "Uluslararası uçuşlarda AB Pet Pasaportu veya eşdeğeri" },
              ].map((item) => (
                <Card key={item.belge} className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-red-600 mt-1 shrink-0" />
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

      {/* Taşıma Kafesi Kuralları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Taşıma Kafesi/Çantası Kuralları</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-red-600" />
                  Kabin Taşıma Çantası
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Maksimum boyut: 23x30x40 cm</li>
                  <li>• Su geçirmez taban</li>
                  <li>• Yeterli havalandırma delikleri</li>
                  <li>• Yumuşak veya sert kenarlı olabilir</li>
                  <li>• Hayvan içinde ayakta durabilmeli</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Box className="h-5 w-5 text-blue-600" />
                  Kargo Taşıma Kafesi
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• IATA onaylı olmalı</li>
                  <li>• Sert plastik veya fiberglass</li>
                  <li>• Metal kapı ve havalandırma</li>
                  <li>• Su ve yem kabı takılabilir</li>
                  <li>• &quot;Canlı Hayvan&quot; etiketi yapıştırılmalı</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Uyarılar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Önemli Uyarılar</h2>
            
            <div className="space-y-4">
              <Card className="p-4 border-yellow-200 bg-yellow-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-yellow-800">Rezervasyon Şart</h3>
                    <p className="text-sm text-yellow-700">Evcil hayvan taşıma için uçuştan en az 48 saat önce rezervasyon yaptırmanız gerekmektedir.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-red-200 bg-red-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-800">Yasak Irklar</h3>
                    <p className="text-sm text-red-700">Kısa burunlu (brachycephalic) ırklar solunum problemleri nedeniyle kargo bölümünde taşınamaz. Bulldog, Pug, Persian kedisi vb.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-blue-200 bg-blue-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800">Ülke Kuralları</h3>
                    <p className="text-sm text-blue-700">Her ülkenin evcil hayvan girişi için farklı kuralları vardır. Gideceğiniz ülkenin karantina ve belge gereksinimlerini önceden araştırın.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Evcil Hayvan Taşıma Rezervasyonu</h2>
          <p className="mb-8 opacity-90">
            Evcil hayvanınız için yer ayırtmak ve detaylı bilgi almak için bizi arayın.
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
                { title: "THY Bagaj Hakkı", href: "/havayollari/thy/bagaj-hakki" },
                { title: "THY Check-in", href: "/havayollari/thy/check-in" },
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