import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Globe, Award, Clock, CheckCircle2, Star, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJET (AnadoluJet) Uçak Bileti | En Uygun Fiyatlar - TelchFly",
  description:
    "AJET ile Türkiye'nin 50+ şehrine güvenli ve konforlu uçuşlar. AnadoluJet biletleri için en uygun fiyatlar TelchFly'da.",
  keywords: "ajet, anadolujet, ajet bilet, anadolujet uçak bileti, ajet fiyatları, thy anadolujet, telchfly",
}

export default function AJETPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-orange-50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* AJET Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-24">
                <Image
                  src="/ajet.png"
                  alt="AJET Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">AJET Uçak Bileti</h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty mb-8">
              Türkiye&apos;nin güvenilir iç hat havayolu şirketi AJET ile konforlu ve ekonomik seyahat edin. En uygun
              AJET bilet fiyatları TelchFly&apos;da.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Destinasyon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">Modern Filo</div>
                <div className="text-sm text-muted-foreground">Yeni Nesil Uçaklar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">Anadolu</div>
                <div className="text-sm text-muted-foreground">Kalbi</div>
              </div>
            </div>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/bilet-al">AJET Bilet Al</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Popüler Yurtiçi Uçuşlar</h2>
            <p className="text-muted-foreground text-pretty">
              AJET ile Türkiye&apos;nin en güzel şehirlerine özel fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "İstanbul", to: "Ankara", code: "IST → ESB", price: "₺699", duration: "1s 25dk" },
              { from: "İstanbul", to: "İzmir", code: "IST → ADB", price: "₺899", duration: "1s 15dk" },
              { from: "İstanbul", to: "Antalya", code: "IST → AYT", price: "₺999", duration: "1s 30dk" },
              { from: "Ankara", to: "İzmir", code: "ESB → ADB", price: "₺799", duration: "1s 35dk" },
              { from: "İstanbul", to: "Trabzon", code: "IST → TZX", price: "₺1.199", duration: "1s 45dk" },
              { from: "İstanbul", to: "Gaziantep", code: "IST → GZT", price: "₺999", duration: "1s 50dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-orange-600" />
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
                    <div className="text-2xl font-bold text-orange-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">Bilet Al</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AJET */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden AJET?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Türkiye&apos;nin güvenilir iç hat havayolu şirketi AJET&apos;in avantajları
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Geniş İç Hat Ağı",
                subtitle: "50+ destinasyon",
                description: "Türkiye'nin her köşesine ulaşım",
              },
              {
                icon: Award,
                title: "Uygun Fiyatlar",
                subtitle: "Ekonomik biletler",
                description: "Bütçe dostu seyahat seçenekleri",
              },
              {
                icon: Plane,
                title: "Modern Filo",
                subtitle: "Yeni nesil uçaklar",
                description: "Güvenli ve konforlu seyahat",
              },
              {
                icon: Star,
                title: "Anadolu'nun Kalbi",
                subtitle: "Yerel hizmet",
                description: "Türk misafirperverliği",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <div className="text-sm font-medium text-orange-600 mb-2">{feature.subtitle}</div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About AJET */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-balance">
              AJET Online Uçak Bileti Nasıl Alınır? Kapsamlı Rehber
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-pretty">
                Türkiye&apos;nin güvenilir iç hat havayolu şirketi AJET (AnadoluJet) ile seyahat etmek istiyorsanız,
                TelchFly üzerinden kolayca bilet satın alabilirsiniz.
              </p>

              <Card className="p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">AJET Bilet Alma Süreci</h3>
                <p className="text-muted-foreground text-pretty">
                  AJET biletinizi TelchFly üzerinden satın almak oldukça basittir. Yukarıdaki arama formunu kullanarak
                  kalkış ve varış noktalarınızı, seyahat tarihlerinizi ve yolcu sayınızı belirledikten sonra &quot;AJET
                  Uçuş Ara&quot; butonuna tıklayın.
                </p>
              </Card>

              <h3 className="text-2xl font-bold mb-4">AJET&apos;in Avantajları</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                AJET (AnadoluJet), Türk Hava Yolları&apos;nın iç hat markası olarak 2008 yılında faaliyete başlamıştır.
                Türkiye&apos;nin dört bir yanına güvenli, konforlu ve ekonomik uçuşlar düzenleyen AJET, modern filosu ve
                kaliteli hizmet anlayışıyla yolcularına unutulmaz bir seyahat deneyimi sunmaktadır.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Geniş İç Hat Ağı: Türkiye'nin 50'den fazla şehrine direkt uçuş",
                  "Ekonomik Fiyatlar: Bütçe dostu bilet seçenekleri",
                  "Modern Filo: Yeni nesil Boeing ve Airbus uçakları",
                  "Güvenlik Önceliği: Uluslararası havacılık güvenlik standartları",
                  "Zamanında Kalkış: Yüksek zamanında kalkış oranı",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">AJET Bagaj Hakları</h3>
              <Card className="p-6 mb-8">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>Economy Class: 20 kg bagaj hakkı (yurtiçi uçuşlar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>Business Class: 30 kg bagaj hakkı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>El Bagajı: 8 kg (55x40x23 cm)</span>
                  </li>
                </ul>
              </Card>

              <h3 className="text-2xl font-bold mb-4">AJET Check-in İşlemleri</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4">
                  <Clock className="h-8 w-8 text-orange-600 mb-3" />
                  <h4 className="font-semibold mb-2">Online Check-in</h4>
                  <p className="text-sm text-muted-foreground">Uçuştan 24 saat önce başlar</p>
                </Card>
                <Card className="p-4">
                  <Plane className="h-8 w-8 text-orange-600 mb-3" />
                  <h4 className="font-semibold mb-2">Mobil Check-in</h4>
                  <p className="text-sm text-muted-foreground">AJET mobil uygulaması üzerinden</p>
                </Card>
                <Card className="p-4">
                  <Globe className="h-8 w-8 text-orange-600 mb-3" />
                  <h4 className="font-semibold mb-2">Havaalanı</h4>
                  <p className="text-sm text-muted-foreground">Self-servis veya kontuardan</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TelchFly for AJET */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Neden TelchFly ile AJET Bileti?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            TelchFly üzerinden AJET bileti almanın avantajları
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
              AJET Bilet Al
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
