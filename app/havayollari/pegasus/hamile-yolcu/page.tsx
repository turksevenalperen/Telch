import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Baby, Phone, Plane, AlertTriangle, CheckCircle2, FileText, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Hamile Yolcu 2026 | Gebelik Kuralları ve Seyahat Koşulları - bilethizmeti.com",
  description:
    "Pegasus hamile yolcu kuralları ve seyahat koşulları. Kaç haftaya kadar uçulabilir? Doktor raporu gerekli mi?",
  keywords: "pegasus hamile yolcu, pegasus gebelik kuralları, pegasus hamile seyahat, pegasus doktor raporu",
}

export default function PegasusHamileYolcuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <Baby className="h-4 w-4" />
              <span>Hamile Yolcu Kuralları</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance" aria-label="Pegasus Hamile Yolcu Rehberi">
              Pegasus Hamile Yolcu Rehberi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus, hamile yolcuların güvenli seyahati için belirli kurallar uygulamaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Gebelik Haftalarına Göre Kurallar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gebelik Haftasına Göre Seyahat Koşulları</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-green-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">0-28 Hafta</h3>
                <p className="text-sm font-medium text-green-600 mb-2">Serbest Seyahat</p>
                <p className="text-muted-foreground text-sm">
                  Herhangi bir belge gerekmeden seyahat edilebilir.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-yellow-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">28-35 Hafta</h3>
                <p className="text-sm font-medium text-yellow-600 mb-2">Doktor Raporu Gerekli</p>
                <p className="text-muted-foreground text-sm">
                  Uçuşa uygunluk belirten doktor raporu ile seyahat edilebilir.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-red-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">36+ Hafta</h3>
                <p className="text-sm font-medium text-red-600 mb-2">Seyahat Edilemez</p>
                <p className="text-muted-foreground text-sm">
                  36. haftadan sonra uçuşa kabul edilmemektedir.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Doktor Raporu Detayları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Doktor Raporu Gereksinimleri</h2>
            
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 shrink-0">
                    <FileText className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Raporda Bulunması Gerekenler</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Gebelik haftası
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Tahmini doğum tarihi
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Uçuşa uygunluk onayı
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Doktorun imzası ve kaşesi
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 shrink-0">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Rapor Geçerlilik Süresi</h3>
                    <p className="text-muted-foreground">
                      Doktor raporu uçuş tarihinden en fazla 7 gün önce düzenlenmiş olmalıdır.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Öneriler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Hamile Yolcular İçin Öneriler</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Bol su için ve hareket edin",
                "Koridor koltuğu tercih edin",
                "Destek çorabı kullanın",
                "Emniyet kemerini karnın altından bağlayın",
                "Önemli belgelerinizi yanınızda bulundurun",
                "Havalimanına erken gidin",
              ].map((oneri, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0" />
                    <span>{oneri}</span>
                  </div>
                </Card>
              ))}
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
                  <h3 className="font-bold text-yellow-800 mb-2">Önemli Bilgi</h3>
                  <p className="text-sm text-yellow-700">
                    Çoğul gebeliklerde (ikiz, üçüz vb.) seyahat limitleri daha erken başlayabilir. 
                    Detaylı bilgi için Pegasus ile iletişime geçin.
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
          <h2 className="text-2xl font-bold mb-4">Hamile Yolcu Seyahati Hakkında Bilgi Alın</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz gebelik döneminde seyahat konusunda size yardımcı olabilir.
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
                { title: "Pegasus Yolcu Hakları", href: "/havayollari/pegasus/yolcu-haklari" },
                { title: "Pegasus Koltuk Seçimi", href: "/havayollari/pegasus/koltuk-secimi" },
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