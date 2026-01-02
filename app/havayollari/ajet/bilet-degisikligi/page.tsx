import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { RefreshCw, Phone, Plane, AlertTriangle, CheckCircle2, Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Bilet Değişikliği 2026 | Tarih ve Saat Değişikliği - bilethizmeti.com",
  description:
    "AJet bilet değişikliği nasıl yapılır? Tarih, saat değişiklik kuralları ve ücretleri hakkında bilgi.",
  keywords: "ajet bilet değişikliği, ajet tarih değişikliği, ajet uçuş değişikliği",
}

export default function AJetBiletDegisikligiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <RefreshCw className="h-4 w-4" />
              <span>Bilet Değişikliği</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Bilet Değişikliği
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet biletinizde tarih veya saat değişikliği yapabilirsiniz. Değişiklik kurallarını öğrenin.
            </p>
          </div>
        </div>
      </section>

      {/* Değişiklik Kuralları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tarifeye Göre Değişiklik Kuralları</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-4 text-center">Basic Tarife</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Değişiklik ücreti: ₺200-400</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>+ Fiyat farkı ödenir</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Uçuşa 3 saat kala kapalı</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-blue-200">
                <h3 className="font-bold text-lg mb-4 text-center">Advantage Tarife</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Değişiklik ücreti: ₺100-200</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>+ Fiyat farkı ödenir</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>1 ücretsiz değişiklik hakkı</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
                <h3 className="font-bold text-lg mb-4 text-center">Comfort Tarife</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Ücretsiz değişiklik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Sadece fiyat farkı</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>Sınırsız değişiklik hakkı</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Neleri Değiştirebilirsiniz */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Neleri Değiştirebilirsiniz?</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-green-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Değiştirilebilir
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Uçuş tarihi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Uçuş saati</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-muted-foreground" />
                    <span>Uçuş güzergahı (aynı bölge içi)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-red-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-700">
                  <AlertTriangle className="h-5 w-5" />
                  Değiştirilemez
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Yolcu ismi (küçük düzeltmeler hariç)</li>
                  <li>• Bilet sahibi</li>
                  <li>• Tamamen farklı güzergah</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Değişiklik Nasıl Yapılır */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Değişiklik Nasıl Yapılır?</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Online</h3>
                <p className="text-sm text-muted-foreground">ajet.com veya mobil uygulamadan rezervasyon yönetimi</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Çağrı Merkezi</h3>
                <p className="text-sm text-muted-foreground">AJet müşteri hizmetlerini arayarak</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">bilethizmeti.com</h3>
                <p className="text-sm text-muted-foreground">Bizi arayarak kolayca değişiklik yapın</p>
              </Card>
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
                    Uçuşa çok kısa süre kala değişiklik yapılamayabilir. Değişiklik işlemini en az 3 saat önce yapmanız önerilir. Fiyat farkı yeni uçuşun fiyatına göre belirlenir.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bilet Değişikliği Yapmak mı İstiyorsunuz?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz değişiklik işlemlerinizde size yardımcı olsun.
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
                { title: "AJet Bilet İptali", href: "/havayollari/ajet/bilet-iptali" },
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