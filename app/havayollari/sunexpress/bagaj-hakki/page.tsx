import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Luggage, Phone, Plane, Briefcase, ShoppingBag, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Bagaj Hakkı 2026 | Kg Sınırları ve Ücretler - FlyTR",
  description:
    "SunExpress bagaj hakları, kabin ve check-in bagaj ücretleri. SunLight, SunEco, SunClassic tarife bagaj bilgileri.",
  keywords: "sunexpress bagaj, sunexpress bagaj hakkı, sunexpress kabin bagajı, sunexpress bagaj ücreti",
}

export default function SunExpressBagajHakkiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Luggage className="h-4 w-4" />
              <span>Bagaj Hakkı</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Bagaj Hakkı
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress&apos;te bagaj hakları seçilen tarife paketine göre değişiklik gösterir.
            </p>
          </div>
        </div>
      </section>

      {/* Kabin Bagajı */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Kabin Bagajı</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-l-4 border-l-gray-400">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 shrink-0">
                    <ShoppingBag className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">SunLight Tarife</h3>
                    <p className="text-muted-foreground mb-2">Yalnızca 1 adet küçük el çantası</p>
                    <p className="text-sm text-gray-600">Koltuk altına sığacak boyutta</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-amber-400">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 shrink-0">
                    <Briefcase className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">SunEco ve Üzeri</h3>
                    <p className="text-muted-foreground mb-2">1 adet kabin bagajı</p>
                    <p className="text-sm text-amber-600 font-medium">Maks. 8 kg • 55x40x23 cm</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Check-in Bagajı */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Check-in Bagajı</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <Luggage className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">SunLight</h3>
                <p className="text-3xl font-bold text-gray-500 mb-2">0 kg</p>
                <p className="text-sm text-muted-foreground">Dahil değil</p>
              </Card>

              <Card className="p-6 text-center border-amber-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Luggage className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">SunEco</h3>
                <p className="text-3xl font-bold text-amber-500 mb-2">20 kg</p>
                <p className="text-sm text-muted-foreground">Genellikle dahil</p>
              </Card>

              <Card className="p-6 text-center border-green-200">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Luggage className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">SunClassic/Premium</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">25-30 kg</p>
                <p className="text-sm text-muted-foreground">Dahil</p>
              </Card>
            </div>

            <Card className="mt-8 p-6 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Önemli Bilgi</h3>
                  <p className="text-sm text-amber-700">
                    Tek parça bagajın ağırlığı 32 kg&apos;ı geçemez. Bagaj hakkı bilet alırken veya sonradan online olarak satın alınabilir. Havalimanında alınan bagajlar daha pahalıdır.
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
          <h2 className="text-2xl font-bold mb-4">Bagaj Hakkında Yardım mı Gerekiyor?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz bagaj sorularınızda size yardımcı olabilir.
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
                { title: "SunExpress Check-in", href: "/havayollari/sunexpress/check-in" },
                { title: "SunExpress Koltuk Seçimi", href: "/havayollari/sunexpress/koltuk-secimi" },
                { title: "SunExpress Bilet Değişikliği", href: "/havayollari/sunexpress/bilet-degisikligi" },
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