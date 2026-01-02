import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { RefreshCw, Phone, Plane, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Bilet Değişikliği 2026 | Tarih ve İsim Değişikliği - bilethizmeti.com",
  description:
    "SunExpress bilet değişikliği nasıl yapılır? Tarih değişikliği ücreti, isim düzeltme ve koşulları.",
  keywords: "sunexpress bilet değişikliği, sunexpress tarih değişikliği, sunexpress isim değişikliği",
}

export default function SunExpressBiletDegisikligiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <RefreshCw className="h-4 w-4" />
              <span>Bilet Değişikliği</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Bilet Değişikliği
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress&apos;te uçuş tarih veya saat değişikliği çoğu tarifede mümkündür.
            </p>
          </div>
        </div>
      </section>

      {/* Değişiklik Kuralları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Değişiklik Kuralları</h2>
            
            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: "Değişiklik ücreti + bilet farkı alınabilir", color: "text-amber-600" },
                { icon: CheckCircle2, text: "SunClassic ve SunPremium tarifelerde daha esnek kurallar bulunur", color: "text-green-600" },
                { icon: XCircle, text: "Uçuşa kısa süre kala değişiklik yapılamayabilir", color: "text-red-600" },
                { icon: CheckCircle2, text: "Değişiklik işlemleri online olarak kolayca gerçekleştirilebilir", color: "text-amber-600" },
              ].map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <item.icon className={`h-5 w-5 ${item.color} shrink-0`} />
                    <span>{item.text}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tarife Bazlı */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarifeye Göre Değişiklik Hakları</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center">
                <h3 className="font-bold text-lg mb-4">SunLight</h3>
                <p className="text-muted-foreground mb-2">Yüksek ücret</p>
                <p className="text-sm text-gray-500">Değişiklik zor</p>
              </Card>

              <Card className="p-6 text-center border-amber-200">
                <h3 className="font-bold text-lg mb-4">SunEco</h3>
                <p className="text-muted-foreground mb-2">Ücretli değişiklik</p>
                <p className="text-sm text-amber-600">Standart koşullar</p>
              </Card>

              <Card className="p-6 text-center border-green-200">
                <h3 className="font-bold text-lg mb-4">SunClassic/Premium</h3>
                <p className="text-muted-foreground mb-2">Esnek değişiklik</p>
                <p className="text-sm text-green-600">Avantajlı koşullar</p>
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
                  <h3 className="font-bold text-amber-800 mb-2">Online Değişiklik</h3>
                  <p className="text-sm text-amber-700">
                    Değişiklik işlemleri sunexpress.com üzerinden veya çağrı merkezi aracılığıyla yapılabilir.
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
          <h2 className="text-2xl font-bold mb-4">Değişiklik Yapmak mı İstiyorsunuz?</h2>
          <p className="mb-8 opacity-90">
            Bilet değişikliği konusunda size yardımcı olalım.
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
                { title: "SunExpress Bagaj Hakkı", href: "/havayollari/sunexpress/bagaj-hakki" },
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