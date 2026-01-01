import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Globe, Award, Clock, CheckCircle2, Star, DollarSign, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Hava Yolları Uçak Bileti | En Uygun Fiyatlar - TelchFly",
  description:
    "Pegasus ile 100+ destinasyona uygun fiyatlı uçuşlar. Düşük maliyetli havayolu ile ekonomik seyahat. En uygun Pegasus bilet fiyatları TelchFly'da.",
  keywords: "pegasus, pegasus hava yolları, pegasus bilet, pegasus uçak bileti, pegasus fiyatları, telchfly",
}

export default function PegasusPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Pegasus Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-24">
                <Image
                  src="/pegasus.png"
                  alt="Pegasus Airlines Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus Hava Yolları Uçak Bileti
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty mb-8">
              Düşük maliyetli havayolu şirketi ile uygun fiyatlı uçuş deneyimi. En uygun Pegasus bilet fiyatları
              TelchFly&apos;da.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Destinasyon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">90+</div>
                <div className="text-sm text-muted-foreground">Uçak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">Uygun</div>
                <div className="text-sm text-muted-foreground">Fiyatlar</div>
              </div>
            </div>

            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700" asChild>
              <Link href="/bilet-al">Pegasus Bilet Al</Link>
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
              Pegasus Hava Yolları ile en popüler destinasyonlara özel fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "İstanbul", to: "Ankara", code: "SAW → ESB", price: "₺599", duration: "1s 20dk" },
              { from: "İstanbul", to: "İzmir", code: "SAW → ADB", price: "₺799", duration: "1s 10dk" },
              { from: "İstanbul", to: "Antalya", code: "SAW → AYT", price: "₺899", duration: "1s 25dk" },
              { from: "Ankara", to: "İzmir", code: "ESB → ADB", price: "₺699", duration: "1s 30dk" },
              { from: "İstanbul", to: "Trabzon", code: "SAW → TZX", price: "₺1.199", duration: "1s 40dk" },
              { from: "İstanbul", to: "Gaziantep", code: "SAW → GZT", price: "₺999", duration: "1s 45dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-yellow-600" />
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
                    <div className="text-2xl font-bold text-yellow-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Bilet Al</Button>
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
              Pegasus ile Avrupa&apos;nın en popüler şehirlerine özel fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "İstanbul", to: "Amsterdam", code: "SAW → AMS", price: "₺2.999", duration: "3s 45dk" },
              { from: "İstanbul", to: "Berlin", code: "SAW → BER", price: "₺2.799", duration: "3s 30dk" },
              { from: "İstanbul", to: "Paris", code: "SAW → CDG", price: "₺3.299", duration: "3s 50dk" },
              { from: "İstanbul", to: "Londra", code: "SAW → STN", price: "₺3.599", duration: "4s 05dk" },
              { from: "İstanbul", to: "Milano", code: "SAW → BGY", price: "₺2.599", duration: "3s 15dk" },
              { from: "İstanbul", to: "Viyana", code: "SAW → VIE", price: "₺2.899", duration: "2s 55dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-yellow-600" />
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
                    <div className="text-2xl font-bold text-yellow-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Bilet Al</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pegasus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden Pegasus Hava Yolları?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Düşük maliyetli havayolu modeli ile ekonomik seyahat deneyimi
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Uygun Fiyatlar",
                subtitle: "Düşük maliyetli model",
                description: "Ekonomik uçuş seçenekleri",
              },
              {
                icon: Globe,
                title: "Geniş Ağ",
                subtitle: "100+ destinasyon",
                description: "Türkiye ve Avrupa'da yaygın uçuş ağı",
              },
              {
                icon: Clock,
                title: "Zamanında Uçuş",
                subtitle: "Yüksek performans",
                description: "Güvenilir uçuş programı",
              },
              {
                icon: Star,
                title: "Dijital Hizmetler",
                subtitle: "Mobil çözümler",
                description: "Online check-in ve mobil uygulama",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                  <feature.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <div className="text-sm font-medium text-yellow-600 mb-2">{feature.subtitle}</div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Pegasus */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-balance">
              Pegasus Hava Yolları Online Uçak Bileti Nasıl Alınır?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-pretty">
                Türkiye&apos;nin önde gelen düşük maliyetli havayolu şirketi Pegasus Hava Yolları ile seyahat etmek
                istiyorsanız, TelchFly üzerinden kolayca bilet satın alabilirsiniz.
              </p>

              <Card className="p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Pegasus Bilet Alma Süreci</h3>
                <p className="text-muted-foreground text-pretty">
                  Pegasus Hava Yolları biletinizi TelchFly üzerinden satın almak oldukça basittir. Yukarıdaki arama
                  formunu kullanarak kalkış ve varış noktalarınızı, seyahat tarihlerinizi ve yolcu sayınızı
                  belirledikten sonra &quot;Pegasus Uçuş Ara&quot; butonuna tıklayın.
                </p>
              </Card>

              <h3 className="text-2xl font-bold mb-4">Pegasus&apos;un Avantajları</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Uygun Fiyatlar: Düşük maliyetli havayolu modeli ile ekonomik seçenekler",
                  "Geniş Destinasyon Ağı: 100'den fazla destinasyona uçuş imkanı",
                  "Modern Filo: Yeni nesil Airbus A320 ve Boeing 737 uçakları",
                  "Sabiha Gökçen Hub: İstanbul'dan Avrupa ve Orta Doğu'ya kolay bağlantı",
                  "BolBol: Avantajlı sadakat programı",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Pegasus Bagaj Hakları</h3>
              <Card className="p-6 mb-8">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Essentials: 15 kg bagaj hakkı (yurtiçi), 20 kg (yurtdışı)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                    <span>Advantage: 20 kg bagaj hakkı (yurtiçi), 25 kg (yurtdışı)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                    <span>El Bagajı: 8 kg (55x40x20 cm)</span>
                  </li>
                </ul>
              </Card>

              <h3 className="text-2xl font-bold mb-4">Pegasus Check-in İşlemleri</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4">
                  <Clock className="h-8 w-8 text-yellow-600 mb-3" />
                  <h4 className="font-semibold mb-2">Online Check-in</h4>
                  <p className="text-sm text-muted-foreground">Uçuştan 24 saat önce başlar</p>
                </Card>
                <Card className="p-4">
                  <Plane className="h-8 w-8 text-yellow-600 mb-3" />
                  <h4 className="font-semibold mb-2">Mobil Check-in</h4>
                  <p className="text-sm text-muted-foreground">Pegasus mobil uygulaması üzerinden</p>
                </Card>
                <Card className="p-4">
                  <Globe className="h-8 w-8 text-yellow-600 mb-3" />
                  <h4 className="font-semibold mb-2">Havaalanı</h4>
                  <p className="text-sm text-muted-foreground">Self-servis veya kontuardan</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TelchFly for Pegasus */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Neden TelchFly ile Pegasus Bileti?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            TelchFly üzerinden Pegasus Hava Yolları bileti almanın avantajları
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
              Pegasus Bilet Al
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
