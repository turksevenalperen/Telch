import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Coffee, Phone, Plane, CheckCircle2, UtensilsCrossed, Wine } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress İkram Servisi 2026 | Yemek ve İçecek - bilethizmeti.com",
  description:
    "SunExpress uçak içi ikram servisi, yemek ve içecek seçenekleri hakkında bilgi.",
  keywords: "sunexpress ikram, sunexpress yemek, sunexpress uçak içi servis",
}

export default function SunExpressIkramServisiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <Coffee className="h-4 w-4" />
              <span>İkram Servisi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress İkram Servisi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress&apos;te ikram hizmeti tarifeye göre değişir.
            </p>
          </div>
        </div>
      </section>

      {/* Tarife Bazlı İkram */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarifeye Göre İkram</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-l-gray-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">SunLight Tarife</h3>
                    <p className="text-muted-foreground">İkram dahil değil</p>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Ücretli</span>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-amber-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">SunEco Tarife</h3>
                    <p className="text-muted-foreground">İkram dahil değil</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Ücretli</span>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">SunClassic / SunPremium</h3>
                    <p className="text-muted-foreground">İkram dahil olabilir</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">Dahil*</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menü Seçenekleri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Menü Seçenekleri</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Coffee className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sıcak İçecekler</h3>
                <p className="text-muted-foreground">Çay, kahve çeşitleri</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <UtensilsCrossed className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Atıştırmalıklar</h3>
                <p className="text-muted-foreground">Sandviç, tatlı ve snackler</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Wine className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Soğuk İçecekler</h3>
                <p className="text-muted-foreground">Meşrubat ve su</p>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground mt-8 text-center">
              * İkram seçenekleri uçuş süresine göre farklılık gösterebilir
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">İkram Hakkında Bilgi Alın</h2>
          <p className="mb-8 opacity-90">
            Uçuşunuzdaki ikram seçenekleri hakkında bilgi alın.
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
                { title: "SunExpress Bagaj Hakkı", href: "/havayollari/sunexpress/bagaj-hakki" },
                { title: "SunExpress Koltuk Seçimi", href: "/havayollari/sunexpress/koltuk-secimi" },
                { title: "SunExpress Eğlence Sistemi", href: "/havayollari/sunexpress/eglence-sistemi" },
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