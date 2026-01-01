import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Globe, Award, Clock, CheckCircle2, Star, Utensils, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Hava Yolları Uçak Bileti | En Uygun Fiyatlar - TelchFly",
  description:
    "SunExpress ile Türkiye ve Avrupa arasında 90+ destinasyona güvenilir uçuş deneyimi. THY-Lufthansa ortaklığı ile kaliteli hizmet. En uygun SunExpress bilet fiyatları TelchFly'da.",
  keywords: "sunexpress, sunexpress hava yolları, sunexpress bilet, sunexpress uçak bileti, sunexpress fiyatları, telchfly",
}

export default function SunExpressPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-amber-50 to-background py-20">
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
              SunExpress Hava Yolları Uçak Bileti
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty mb-8">
              Türkiye ve Avrupa arasında güvenilir uçuş deneyimi. En uygun SunExpress bilet fiyatları TelchFly&apos;da.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">90+</div>
                <div className="text-sm text-muted-foreground">Destinasyon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">60+</div>
                <div className="text-sm text-muted-foreground">Uçak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">Kaliteli</div>
                <div className="text-sm text-muted-foreground">Hizmet</div>
              </div>
            </div>

            <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
              <Link href="/bilet-al">SunExpress Bilet Al</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Domestic Routes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Popüler Yurtiçi Uçuşlar</h2>
            <p className="text-muted-foreground text-pretty">
              SunExpress ile Türkiye&apos;nin en popüler şehirlerine özel fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "Antalya", to: "İstanbul", code: "AYT → IST", price: "₺899", duration: "1s 25dk" },
              { from: "Antalya", to: "Ankara", code: "AYT → ESB", price: "₺799", duration: "1s 15dk" },
              { from: "Antalya", to: "İzmir", code: "AYT → ADB", price: "₺699", duration: "1s 05dk" },
              { from: "İstanbul", to: "Antalya", code: "IST → AYT", price: "₺899", duration: "1s 25dk" },
              { from: "İzmir", to: "Antalya", code: "ADB → AYT", price: "₺699", duration: "1s 05dk" },
              { from: "Ankara", to: "Antalya", code: "ESB → AYT", price: "₺799", duration: "1s 15dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-amber-600" />
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
                    <div className="text-2xl font-bold text-amber-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700">Bilet Al</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular International Routes */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Popüler Yurtdışı Uçuşlar</h2>
            <p className="text-muted-foreground text-pretty">
              SunExpress ile Avrupa&apos;nın en popüler şehirlerine özel fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "Antalya", to: "Frankfurt", code: "AYT → FRA", price: "₺3.299", duration: "3s 45dk" },
              { from: "Antalya", to: "Münih", code: "AYT → MUC", price: "₺3.199", duration: "3s 30dk" },
              { from: "Antalya", to: "Düsseldorf", code: "AYT → DUS", price: "₺3.099", duration: "3s 50dk" },
              { from: "Antalya", to: "Viyana", code: "AYT → VIE", price: "₺2.899", duration: "2s 55dk" },
              { from: "Antalya", to: "Zürih", code: "AYT → ZRH", price: "₺3.399", duration: "3s 15dk" },
              { from: "Antalya", to: "Amsterdam", code: "AYT → AMS", price: "₺3.199", duration: "4s 10dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-amber-600" />
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
                    <div className="text-2xl font-bold text-amber-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700">Bilet Al</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why SunExpress */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden SunExpress Hava Yolları?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Türk Hava Yolları ve Lufthansa ortaklığı ile kaliteli hizmet
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Star,
                title: "Kaliteli Hizmet",
                subtitle: "THY-Lufthansa ortaklığı",
                description: "Yüksek standartlarda hizmet",
              },
              {
                icon: Globe,
                title: "Geniş Ağ",
                subtitle: "90+ destinasyon",
                description: "Türkiye-Avrupa arası güçlü bağlantı",
              },
              {
                icon: Plane,
                title: "Modern Filo",
                subtitle: "Yeni nesil uçaklar",
                description: "Boeing 737 ve Airbus A330",
              },
              {
                icon: Utensils,
                title: "İkram Hizmetleri",
                subtitle: "Uçak içi servis",
                description: "Kaliteli yemek ve içecek",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <div className="text-sm font-medium text-amber-600 mb-2">{feature.subtitle}</div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About SunExpress */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-balance">
              SunExpress Hava Yolları Online Uçak Bileti Nasıl Alınır?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-pretty">
                Türk Hava Yolları ve Lufthansa ortaklığı ile kurulan SunExpress Hava Yolları ile seyahat etmek
                istiyorsanız, TelchFly üzerinden kolayca bilet satın alabilirsiniz.
              </p>

              <Card className="p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">SunExpress Bilet Alma Süreci</h3>
                <p className="text-muted-foreground text-pretty">
                  SunExpress Hava Yolları biletinizi TelchFly üzerinden satın almak oldukça basittir. Yukarıdaki arama
                  formunu kullanarak kalkış ve varış noktalarınızı, seyahat tarihlerinizi ve yolcu sayınızı
                  belirledikten sonra &quot;SunExpress Uçuş Ara&quot; butonuna tıklayın.
                </p>
              </Card>

              <h3 className="text-2xl font-bold mb-4">SunExpress&apos;in Avantajları</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Kaliteli Hizmet: THY ve Lufthansa standartlarında hizmet kalitesi",
                  "Geniş Destinasyon Ağı: Türkiye'den Avrupa'ya 90'dan fazla destinasyon",
                  "Modern Filo: Boeing 737 ve Airbus A330 uçakları",
                  "Antalya Hub: Antalya'dan Avrupa'ya direkt uçuşlar",
                  "SunFares Paketleri: Farklı ihtiyaçlara uygun paket seçenekleri",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">SunExpress Bagaj Hakları</h3>
              <Card className="p-6 mb-8">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>SunEco: 20 kg bagaj hakkı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>SunClassic: 25 kg bagaj hakkı + koltuk seçimi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>SunPremium: 30 kg bagaj hakkı + premium hizmetler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>El Bagajı: 8 kg (55x40x20 cm)</span>
                  </li>
                </ul>
              </Card>

              <h3 className="text-2xl font-bold mb-4">SunExpress Check-in İşlemleri</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4">
                  <Clock className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="font-semibold mb-2">Online Check-in</h4>
                  <p className="text-sm text-muted-foreground">Uçuştan 24 saat önce başlar</p>
                </Card>
                <Card className="p-4">
                  <Plane className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="font-semibold mb-2">Mobil Check-in</h4>
                  <p className="text-sm text-muted-foreground">SunExpress mobil uygulaması üzerinden</p>
                </Card>
                <Card className="p-4">
                  <Globe className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="font-semibold mb-2">Havaalanı</h4>
                  <p className="text-sm text-muted-foreground">Check-in kontuarından</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TelchFly for SunExpress */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Neden TelchFly ile SunExpress Bileti?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            TelchFly üzerinden SunExpress Hava Yolları bileti almanın avantajları
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto mb-8">
            {[
              { icon: Award, title: "En Uygun Fiyatlar", description: "Piyasadaki en iyi fiyat garantisi" },
              { icon: CheckCircle2, title: "Güvenli Ödeme", description: "SSL sertifikalı güvenli sistem" },
              { icon: Clock, title: "7/24 Destek", description: "Kesintisiz müşteri hizmetleri" },
              { icon: Star, title: "Hızlı İşlem", description: "Anında bilet onayı" },
              { icon: Globe, title: "IATA & TÜRSAB", description: "Güvenilir seyahat acentesi" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>

          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <Link href="/bilet-al">
              <Plane className="h-5 w-5" />
              SunExpress Bilet Al
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
