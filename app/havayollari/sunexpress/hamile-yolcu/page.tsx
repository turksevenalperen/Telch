import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Baby, Phone, Plane, CheckCircle2, AlertTriangle, XCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Hamile Yolcu 2026 | Gebelik Kuralları - bilethizmeti.com",
  description:
    "SunExpress hamile yolcu politikası, gebelik haftasına göre uçuş kuralları ve gerekli belgeler.",
  keywords: "sunexpress hamile yolcu, sunexpress gebelik, sunexpress hamile uçuş",
}

export default function SunExpressHamileYolcuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Baby className="h-4 w-4" />
              <span>Hamile Yolcu</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Hamile Yolcu Politikası
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress&apos;te hamile yolcular için uçuş kuralları ve koşullar.
            </p>
          </div>
        </div>
      </section>

      {/* Gebelik Haftalarına Göre */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gebelik Haftasına Göre Kurallar</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-l-green-500">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-8 w-8 text-green-500 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-green-700">0-28 Hafta</h3>
                    <p className="text-muted-foreground">Belge gerekmez, normal uçuş yapılabilir</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-amber-500 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-amber-700">28-36 Hafta</h3>
                    <p className="text-muted-foreground">Doktor raporu gereklidir (uçuşa uygunluk belgesi)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-red-500">
                <div className="flex items-start gap-4">
                  <XCircle className="h-8 w-8 text-red-500 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-red-700">36+ Hafta</h3>
                    <p className="text-muted-foreground">Uçuşa kabul edilmez</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Çoğul Gebelik Uyarısı */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Çoğul Gebelik</h3>
                  <p className="text-sm text-amber-700">
                    İkiz veya çoğul gebeliklerde bu süreler daha erkendir. Lütfen havayolu ile iletişime geçin.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gerekli Belgeler */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gerekli Belgeler (28-36 Hafta)</h2>
            
            <div className="space-y-4">
              {[
                "Doktor raporu (uçuşa uygunluk belgesi)",
                "Tahmini doğum tarihi belirtilmeli",
                "Raporun uçuş tarihine yakın olması önerilir",
                "Tekil/çoğul gebelik bilgisi",
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
          <h2 className="text-2xl font-bold mb-4">Hamile Yolcu Desteği</h2>
          <p className="mb-8 opacity-90">
            Hamilelik döneminde seyahat planlamanızda size yardımcı olalım.
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
                { title: "SunExpress Engelli Yolcu", href: "/havayollari/sunexpress/engelli-yolcu" },
                { title: "SunExpress SSS", href: "/havayollari/sunexpress/sss" },
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