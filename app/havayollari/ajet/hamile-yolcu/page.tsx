import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Baby, Phone, Plane, FileText, AlertTriangle, CheckCircle2, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Hamile Yolcu 2026 | Gebelikte Uçuş Kuralları - bilethizmeti.com",
  description:
    "AJet hamile yolcu kuralları. Gebelik haftasına göre uçuş izinleri ve gerekli belgeler.",
  keywords: "ajet hamile yolcu, ajet gebelik, hamile uçuş kuralları ajet",
}

export default function AJetHamileYolcuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Baby className="h-4 w-4" />
              <span>Hamile Yolcu</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Hamile Yolcu Rehberi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Gebelik döneminde güvenli uçuş için AJet kuralları ve önerileri.
            </p>
          </div>
        </div>
      </section>

      {/* Gebelik Haftasına Göre Kurallar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gebelik Haftasına Göre Kurallar</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">0 - 28 Hafta</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">Belge gerekmez</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Serbest uçuş</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Rapor istenmez</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-yellow-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">28 - 36 Hafta</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">Doktor raporu zorunlu</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 shrink-0" />
                    <span>Sağlık raporu şart</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 shrink-0" />
                    <span>7 gün geçerli</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-red-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">36+ Hafta</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">Uçuş kabul edilmez</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>Uçuşa alınmaz</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>Doğum riski yüksek</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Çoğul Gebelik */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Çoğul Gebelik (İkiz, Üçüz)</h2>
            
            <Card className="p-6 border-blue-200">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Özel Kurallar</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>32 haftaya kadar:</strong> Belge gerekmez</li>
                    <li>• <strong>32-34 hafta:</strong> Doktor raporu zorunlu</li>
                    <li>• <strong>34+ hafta:</strong> Uçuş kabul edilmez</li>
                  </ul>
                  <p className="mt-4 text-sm bg-blue-50 p-3 rounded-lg">
                    Çoğul gebeliklerde süreler tekil gebeliklere göre daha kısadır.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Doktor Raporu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Doktor Raporu Gereksinimleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Rapor İçeriği
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Gebelik haftası</li>
                  <li>• Tahmini doğum tarihi</li>
                  <li>• Tekil/çoğul gebelik</li>
                  <li>• &quot;Uçuşa uygundur&quot; ifadesi</li>
                  <li>• Doktor imza ve kaşesi</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Önemli Notlar
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Rapor en fazla 7 gün önce alınmalı</li>
                  <li>• Türkçe veya İngilizce olmalı</li>
                  <li>• Orijinal belge istenir</li>
                  <li>• Gidiş-dönüşü kapsamalı</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Hamile Yolcu Bilgilendirmesi</h2>
          <p className="mb-8 opacity-90">
            Gebelik döneminde seyahat hakkında detaylı bilgi için bizi arayın.
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
                { title: "AJet Yolcu Hakları", href: "/havayollari/ajet/yolcu-haklari" },
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