import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Tv, Phone, Plane, Film, Music, Gamepad2, Map, Baby, Wifi, Headphones } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Eğlence Sistemi 2026 | Planet Entertainment Özellikleri - bilethizmeti.com",
  description:
    "Türk Hava Yolları uçak içi eğlence sistemi. Planet Entertainment ile film, dizi, müzik, oyun ve canlı uçuş haritası.",
  keywords: "thy eğlence sistemi, türk hava yolları planet, thy film, thy uçak içi eğlence, planet entertainment",
}

export default function THYEglenceSistemiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <Tv className="h-4 w-4" />
              <span>Uçak İçi Eğlence</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Planet Entertainment Sistemi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları&apos;nın ödüllü eğlence sistemi ile uçuşunuzu keyifli geçirin.
            </p>
          </div>
        </div>
      </section>

      {/* İçerik Kategorileri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İçerik Kategorileri</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 mb-4">
                  <Film className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Filmler</h3>
                <p className="text-sm text-muted-foreground">400+ Hollywood, Türk ve dünya sinemasından filmler. Yeni vizyon filmler dahil.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <Tv className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Diziler</h3>
                <p className="text-sm text-muted-foreground">Popüler TV dizileri ve belgeseller. Tüm sezonları izleyin.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Music className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Müzik</h3>
                <p className="text-sm text-muted-foreground">Binlerce şarkı ve albüm. Pop, rock, klasik, caz ve daha fazlası.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 mb-4">
                  <Gamepad2 className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Oyunlar</h3>
                <p className="text-sm text-muted-foreground">Eğlenceli video oyunları. Tek veya çok oyunculu seçenekler.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 mb-4">
                  <Map className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Canlı Uçuş Haritası</h3>
                <p className="text-sm text-muted-foreground">3D uçuş rotası, hız, irtifa ve varış bilgileri anlık olarak.</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 mb-4">
                  <Baby className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Çocuk İçerikleri</h3>
                <p className="text-sm text-muted-foreground">Çizgi filmler, eğitici oyunlar ve çocuklara özel programlar.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Uçak Tiplerine Göre */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uçak Tiplerine Göre Eğlence Sistemi</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="p-4 text-left rounded-tl-lg">Uçak Tipi</th>
                    <th className="p-4 text-center">Ekran</th>
                    <th className="p-4 text-center">Wi-Fi</th>
                    <th className="p-4 text-center rounded-tr-lg">USB Şarj</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Boeing 777-300ER</td>
                    <td className="p-4 text-center">13.3&quot; HD</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Airbus A350</td>
                    <td className="p-4 text-center">18&quot; 4K</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Boeing 787 Dreamliner</td>
                    <td className="p-4 text-center">12&quot; HD</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                  </tr>
                  <tr className="border-b bg-accent/50">
                    <td className="p-4 font-medium">Airbus A321neo</td>
                    <td className="p-4 text-center">10&quot; HD</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Kısa mesafe uçakları</td>
                    <td className="p-4 text-center">Kişisel cihaz</td>
                    <td className="p-4 text-center text-yellow-600">Bazılarında</td>
                    <td className="p-4 text-center text-green-600">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Wi-Fi Hizmeti */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Uçak İçi Wi-Fi</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-blue-200">
                <div className="flex items-center gap-4 mb-4">
                  <Wifi className="h-8 w-8 text-blue-600" />
                  <h3 className="font-bold text-lg">Wi-Fi Paketleri</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Mesaj Paketi:</strong> WhatsApp, iMessage - 5 USD</li>
                  <li>• <strong>Sörf Paketi:</strong> Web, e-posta - 15 USD</li>
                  <li>• <strong>Full Paket:</strong> Streaming dahil - 25 USD</li>
                </ul>
              </Card>

              <Card className="p-6 border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <Headphones className="h-8 w-8 text-green-600" />
                  <h3 className="font-bold text-lg">Kulaklık</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Ekonomi: Tek kullanımlık kulaklık</li>
                  <li>• Business: Gürültü önleyici kulaklık</li>
                  <li>• Kendi kulaklığınızı da kullanabilirsiniz</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Eğlence Sistemi Hakkında Sorularınız mı Var?</h2>
          <p className="mb-8 opacity-90">
            Uçak içi eğlence ve Wi-Fi hakkında detaylı bilgi alın.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:4440849">
              <Phone className="h-5 w-5" />
              444 0 849
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
                { title: "THY İkram Servisi", href: "/havayollari/thy/ikram-servisi" },
                { title: "THY Koltuk Seçimi", href: "/havayollari/thy/koltuk-secimi" },
                { title: "THY Mobil Uygulama", href: "/havayollari/thy/mobil-uygulama" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-red-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-red-600" />
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