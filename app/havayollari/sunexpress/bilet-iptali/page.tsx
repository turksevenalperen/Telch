import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { XCircle, Phone, Plane, CheckCircle2, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Bilet İptali 2026 | İptal ve İade Koşulları - bilethizmeti.com",
  description:
    "SunExpress bilet iptali nasıl yapılır? İade koşulları ve kesinti oranları. SunLight, SunEco, SunClassic iptal kuralları.",
  keywords: "sunexpress bilet iptali, sunexpress iade, sunexpress iptal ücreti, sunexpress bilet iptal",
}

export default function SunExpressBiletIptaliPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <XCircle className="h-4 w-4" />
              <span>Bilet İptali</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Bilet İptali
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress biletlerinde iptal ve iade koşulları satın alınan tarifeye göre değişir.
            </p>
          </div>
        </div>
      </section>

      {/* Tarife Bazlı İptal Koşulları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarifeye Göre İptal Koşulları</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-l-red-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">SunLight Tarife</h3>
                    <p className="text-muted-foreground">İptal ve iade hakkı yoktur</p>
                  </div>
                  <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    İade Yok
                  </span>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-amber-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">SunEco Tarife</h3>
                    <p className="text-muted-foreground">Kesinti ile iade mümkündür</p>
                  </div>
                  <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    Kısmi İade
                  </span>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-400">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Esnek Tarifeler</h3>
                    <p className="text-muted-foreground">Daha avantajlı iade koşulları sunulur</p>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Esnek İade
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* İptal Yöntemleri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İptal İşlemi Nasıl Yapılır?</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Plane className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Web Sitesi</h3>
                <p className="text-sm text-muted-foreground">sunexpress.com üzerinden</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Phone className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Çağrı Merkezi</h3>
                <p className="text-sm text-muted-foreground">Müşteri hizmetleri</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <CheckCircle2 className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mobil Uygulama</h3>
                <p className="text-sm text-muted-foreground">SunExpress app</p>
              </Card>
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
                  <h3 className="font-bold text-amber-800 mb-2">Vergi İadesi</h3>
                  <p className="text-sm text-amber-700">
                    Vergi iadesi bazı durumlarda yapılabilir. Detaylı bilgi için müşteri hizmetleri ile iletişime geçin.
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
          <h2 className="text-2xl font-bold mb-4">Bilet İptali Konusunda Yardım Alın</h2>
          <p className="mb-8 opacity-90">
            İptal ve iade işlemlerinizde size yardımcı olalım.
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
                { title: "SunExpress Bilet Değişikliği", href: "/havayollari/sunexpress/bilet-degisikligi" },
                { title: "SunExpress Yolcu Hakları", href: "/havayollari/sunexpress/yolcu-haklari" },
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