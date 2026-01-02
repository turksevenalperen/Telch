import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Accessibility, Phone, Plane, CheckCircle2, AlertTriangle, Eye, Ear } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Engelli Yolcu 2026 | Özel Yardım Hizmetleri - FlyTR",
  description:
    "SunExpress engelli yolcu hizmetleri, tekerlekli sandalye, görme ve işitme engelli yardım.",
  keywords: "sunexpress engelli yolcu, sunexpress tekerlekli sandalye, sunexpress özel yardım",
}

export default function SunExpressEngelliYolcuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Accessibility className="h-4 w-4" />
              <span>Engelli Yolcu</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Engelli Yolcu Hizmetleri
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress, özel ihtiyaçları olan yolcular için destek hizmetleri sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Sunulan Hizmetler</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-amber-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Accessibility className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tekerlekli Sandalye</h3>
                <p className="text-muted-foreground">Havalimanı içi ve uçak kapısına kadar hizmet</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Görme Engelli Yardım</h3>
                <p className="text-muted-foreground">Refakat ve yönlendirme desteği</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Ear className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">İşitme Engelli Yardım</h3>
                <p className="text-muted-foreground">Görsel bilgilendirme ve destek</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detaylar */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Hizmet Detayları</h2>
            
            <div className="space-y-4">
              {[
                "Tekerlekli sandalye hizmeti (WCHR, WCHS, WCHC)",
                "Havalimanında refakat desteği",
                "Görme engelli yolculara yardım",
                "İşitme engelli yolculara destek",
                "Uçağa biniş ve inişte yardım",
                "Özel diyet seçenekleri",
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

      {/* Uyarı */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Önemli Bilgi</h3>
                  <p className="text-sm text-amber-700">
                    Bu hizmetlerin uçuş öncesinde (en az 48 saat önce) bildirilmesi önerilir.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Özel Yardım Talebi</h2>
          <p className="mb-8 opacity-90">
            Özel ihtiyaçlarınız için hemen rezervasyon yapın.
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
                { title: "SunExpress Yolcu Hakları", href: "/havayollari/sunexpress/yolcu-haklari" },
                { title: "SunExpress Hamile Yolcu", href: "/havayollari/sunexpress/hamile-yolcu" },
                { title: "SunExpress İletişim", href: "/havayollari/sunexpress/iletisim" },
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