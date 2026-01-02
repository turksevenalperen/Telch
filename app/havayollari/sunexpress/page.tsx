import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Globe, Award, Clock, CheckCircle2, Star, Sun, Plane, Luggage, RefreshCw, XCircle, CheckSquare, PawPrint, Phone, Armchair, HelpCircle, Scale, Baby, Accessibility, Smartphone, Utensils, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Uçak Bileti | En Uygun Fiyatlar - bilethizmeti.com",
  description:
    "SunExpress ile Türkiye ve Avrupa'ya uygun fiyatlı uçuşlar. Antalya ve İzmir hub'larından dünyaya. En uygun SunExpress bilet fiyatları bilethizmeti.com'da.",
  keywords: "sunexpress, sunexpress bilet, sunexpress uçak bileti, sunexpress fiyatları, bilethizmeti.com",
}

const quickLinks = [
  { title: "Bagaj Hakkı", href: "/havayollari/sunexpress/bagaj-hakki", icon: Luggage, description: "Bagaj kuralları ve ücretleri" },
  { title: "Bilet Değişikliği", href: "/havayollari/sunexpress/bilet-degisikligi", icon: RefreshCw, description: "Değişiklik koşulları" },
  { title: "Bilet İptali", href: "/havayollari/sunexpress/bilet-iptali", icon: XCircle, description: "İptal ve iade işlemleri" },
  { title: "Check-in", href: "/havayollari/sunexpress/check-in", icon: CheckSquare, description: "Online check-in rehberi" },
  { title: "Koltuk Seçimi", href: "/havayollari/sunexpress/koltuk-secimi", icon: Armchair, description: "Koltuk tipleri ve ücretler" },
  { title: "İletişim", href: "/havayollari/sunexpress/iletisim", icon: Phone, description: "Müşteri hizmetleri" },
  { title: "Evcil Hayvan", href: "/havayollari/sunexpress/evcil-hayvan", icon: PawPrint, description: "Pet taşıma kuralları" },
  { title: "Yolcu Hakları", href: "/havayollari/sunexpress/yolcu-haklari", icon: Scale, description: "Yasal haklarınız" },
  { title: "Hamile Yolcu", href: "/havayollari/sunexpress/hamile-yolcu", icon: Baby, description: "Hamile yolcu politikası" },
  { title: "Engelli Yolcu", href: "/havayollari/sunexpress/engelli-yolcu", icon: Accessibility, description: "Özel destek hizmetleri" },
  { title: "İkram Servisi", href: "/havayollari/sunexpress/ikram-servisi", icon: Utensils, description: "Yiyecek ve içecek" },
  { title: "Mobil Hizmetler", href: "/havayollari/sunexpress/mobil-hizmetler", icon: Smartphone, description: "Mobil uygulama" },
  { title: "Popüler Rotalar", href: "/havayollari/sunexpress/populer-rotalar", icon: MapPin, description: "En çok uçulan hatlar" },
  { title: "SSS", href: "/havayollari/sunexpress/sss", icon: HelpCircle, description: "Sık sorulan sorular" },
]

export default function SunExpressPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* SunExpress Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-24">
                <Image
                  src="/sunexpress.jpg"
                  alt="SunExpress Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress Uçak Bileti
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty mb-8">
              Türkiye ve Avrupa&apos;nın turistik destinasyonlarına uygun fiyatlı uçuşlar. En uygun SunExpress bilet fiyatları bilethizmeti.com&apos;da.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-1">90+</div>
                <div className="text-sm text-muted-foreground">Destinasyon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-1">60+</div>
                <div className="text-sm text-muted-foreground">Uçak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-1">Güneşli</div>
                <div className="text-sm text-muted-foreground">Tatil Rotaları</div>
              </div>
            </div>

            <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
              <a href="tel:08503030787">SunExpress Bilet Al</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hızlı Erişim Linkleri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">SunExpress Yolcu Hizmetleri</h2>
            <p className="text-muted-foreground">Tüm SunExpress bilgi ve hizmetlerine hızlı erişim</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="p-4 h-full hover:shadow-lg transition-shadow hover:border-amber-300 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <link.icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="font-semibold mb-1">{link.title}</h3>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popüler Rotalar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Popüler SunExpress Uçuşları</h2>
            <p className="text-muted-foreground text-pretty">
              Antalya ve İzmir hub&apos;larından en çok tercih edilen rotalar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "Antalya", to: "Frankfurt", code: "AYT → FRA", price: "₺2.499", duration: "3s 30dk" },
              { from: "İzmir", to: "Düsseldorf", code: "ADB → DUS", price: "₺2.299", duration: "3s 20dk" },
              { from: "Antalya", to: "Londra", code: "AYT → LGW", price: "₺2.899", duration: "4s 15dk" },
              { from: "İstanbul", to: "Antalya", code: "SAW → AYT", price: "₺899", duration: "1s 15dk" },
              { from: "İzmir", to: "Berlin", code: "ADB → BER", price: "₺2.199", duration: "3s 10dk" },
              { from: "Antalya", to: "Amsterdam", code: "AYT → AMS", price: "₺2.699", duration: "3s 45dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Sun className="h-5 w-5 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">
                      {route.from} - {route.to}
                    </div>
                    <div className="text-sm text-muted-foreground">{route.code}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-amber-500">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600" asChild>
                  <a href="tel:08503030787">Bilet Al</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neden SunExpress */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden SunExpress?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Türkiye&apos;nin güneşli tatil destinasyonlarına uzman havayolu
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Sun,
                title: "Tatil Uzmanı",
                subtitle: "Turistik rotalar",
                description: "Antalya ve İzmir'den Avrupa'ya",
              },
              {
                icon: Globe,
                title: "Geniş Ağ",
                subtitle: "90+ destinasyon",
                description: "Türkiye ve Avrupa'da yaygın hatlar",
              },
              {
                icon: Clock,
                title: "Güvenilir",
                subtitle: "THY ortaklığı",
                description: "Türk Hava Yolları ve Lufthansa ortaklığı",
              },
              {
                icon: Star,
                title: "Konforlu",
                subtitle: "Modern filo",
                description: "Boeing 737 MAX uçakları",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <feature.icon className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <div className="text-sm font-medium text-amber-500 mb-2">{feature.subtitle}</div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">SunExpress Bileti Almak İçin Arayın</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            En uygun SunExpress bilet fiyatları için hemen arayın
          </p>

          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:08503030787">
              <Phone className="h-5 w-5" />
              0850 303 0787
            </a>
          </Button>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
