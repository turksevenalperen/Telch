import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Scale, Phone, Plane, CheckCircle2, AlertTriangle, Clock, Coffee, Hotel } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Yolcu Hakları 2026 | Gecikme ve İptal Hakları - bilethizmeti.com",
  description:
    "SunExpress yolcu hakları, uçuş iptali ve gecikme durumunda haklarınız hakkında bilgi.",
  keywords: "sunexpress yolcu hakları, sunexpress gecikme, sunexpress iptal tazminat",
}

export default function SunExpressYolcuHaklariPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Scale className="h-4 w-4" />
              <span>Yolcu Hakları</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Yolcu Hakları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress yolcuları ulusal ve uluslararası havacılık mevzuatına göre haklara sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* Temel Haklar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Temel Haklarınız</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="font-bold mb-2">Bilgilendirme</h3>
                <p className="text-sm text-muted-foreground">İptal ve rötarlarda anında bilgilendirme</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Coffee className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold mb-2">İkram</h3>
                <p className="text-sm text-muted-foreground">Uzun gecikmelerde yiyecek ve içecek</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Hotel className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Konaklama</h3>
                <p className="text-sm text-muted-foreground">Gerekli durumlarda otel</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Plane className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Alternatif Uçuş</h3>
                <p className="text-sm text-muted-foreground">Veya ücret iadesi seçeneği</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gecikme Hakları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Gecikme Durumunda Haklar</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-l-amber-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">2+ Saat Gecikme</h3>
                    <p className="text-muted-foreground">Yiyecek, içecek ve iletişim imkanı</p>
                  </div>
                  <Clock className="h-8 w-8 text-amber-500" />
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-orange-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">3+ Saat Gecikme</h3>
                    <p className="text-muted-foreground">Tazminat hakkı doğabilir (EU261)</p>
                  </div>
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-red-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Gece Gecikmesi</h3>
                    <p className="text-muted-foreground">Otel konaklaması ve transfer</p>
                  </div>
                  <Hotel className="h-8 w-8 text-red-600" />
                </div>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              * Haklar uçuş mesafesi ve gecikme süresine göre değişir
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Haklarınız Konusunda Yardım Alın</h2>
          <p className="mb-8 opacity-90">
            Uçuş iptali veya gecikme yaşadıysanız haklarınızı öğrenin.
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
                { title: "SunExpress Bilet İptali", href: "/havayollari/sunexpress/bilet-iptali" },
                { title: "SunExpress Bilet Değişikliği", href: "/havayollari/sunexpress/bilet-degisikligi" },
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