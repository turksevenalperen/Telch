"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Star, Globe, Award, Clock, Utensils, Monitor, CheckCircle2, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function THYClientPage() {

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* THY Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-24">
                <Image
                  src="/thy.jpg"
                  alt="Türk Hava Yolları Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Türk Hava Yolları Uçak Bileti
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty mb-8">
              Dünyanın en çok ülkeye uçan havayolu şirketi ile seyahat edin. En uygun THY bilet fiyatları FlyTR&apos;da.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">130+</div>
                <div className="text-sm text-muted-foreground">Ülke</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">340+</div>
                <div className="text-sm text-muted-foreground">Destinasyon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">5 Yıldız</div>
                <div className="text-sm text-muted-foreground">Havayolu</div>
              </div>
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <a href="tel:08503030787">THY Bilet Al</a>
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
              Türk Hava Yolları ile en popüler yurtiçi destinasyonlara özel fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "İstanbul", to: "Ankara", code: "IST → ESB", price: "₺899", duration: "1s 25dk" },
              { from: "İstanbul", to: "İzmir", code: "IST → ADB", price: "₺1.199", duration: "1s 15dk" },
              { from: "İstanbul", to: "Antalya", code: "IST → AYT", price: "₺1.399", duration: "1s 30dk" },
              { from: "Ankara", to: "İzmir", code: "ESB → ADB", price: "₺1.099", duration: "1s 35dk" },
              { from: "İstanbul", to: "Trabzon", code: "IST → TZX", price: "₺1.599", duration: "1s 45dk" },
              { from: "İstanbul", to: "Gaziantep", code: "IST → GZT", price: "₺1.299", duration: "1s 50dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-red-600" />
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
                    <div className="text-2xl font-bold text-red-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:08503030787">Bilet Al</a>
                </Button>
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
              Türk Hava Yolları ile dünya destinasyonlarına özel fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "İstanbul", to: "Londra", code: "IST → LHR", price: "₺4.299", duration: "4s 10dk" },
              { from: "İstanbul", to: "Paris", code: "IST → CDG", price: "₺3.899", duration: "3s 55dk" },
              { from: "İstanbul", to: "New York", code: "IST → JFK", price: "₺8.999", duration: "11s 30dk" },
              { from: "İstanbul", to: "Dubai", code: "IST → DXB", price: "₺2.799", duration: "4s 45dk" },
              { from: "İstanbul", to: "Frankfurt", code: "IST → FRA", price: "₺3.599", duration: "3s 40dk" },
              { from: "İstanbul", to: "Tokyo", code: "IST → NRT", price: "₺7.299", duration: "9s 50dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-red-600" />
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
                    <div className="text-2xl font-bold text-red-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:08503030787">Bilet Al</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why THY */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden Türk Hava Yolları?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Dünyanın en büyük havayolu ağlarından birine sahip THY&apos;nin avantajları
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Geniş Uçuş Ağı",
                subtitle: "130+ ülke, 340+ destinasyon",
                description: "Dünyanın en çok ülkeye uçan havayolu şirketi",
              },
              {
                icon: Star,
                title: "5 Yıldızlı Hizmet",
                subtitle: "Skytrax 5 yıldız",
                description: "Dünya standartlarında kaliteli hizmet",
              },
              {
                icon: Utensils,
                title: "Lezzetli İkramlar",
                subtitle: "Türk mutfağı",
                description: "Uçakta özel hazırlanmış yemekler",
              },
              {
                icon: Monitor,
                title: "Eğlence Sistemi",
                subtitle: "Planet Entertainment",
                description: "Binlerce film, müzik ve oyun",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <feature.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <div className="text-sm font-medium text-red-600 mb-2">{feature.subtitle}</div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About THY */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-balance">Türk Hava Yolları Online Uçak Bileti Nasıl Alınır?</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-pretty">
                Türkiye&apos;nin milli havayolu şirketi Türk Hava Yolları (THY) ile seyahat etmek istiyorsanız, FlyTR
                üzerinden kolayca bilet satın alabilirsiniz.
              </p>

              <Card className="p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">THY Bilet Alma Süreci</h3>
                <p className="text-muted-foreground text-pretty">
                  Türk Hava Yolları biletinizi FlyTR üzerinden satın almak oldukça basittir. Yukarıdaki arama formunu
                  kullanarak kalkış ve varış noktalarınızı, seyahat tarihlerinizi ve yolcu sayınızı belirledikten sonra
                  &quot;THY Uçuş Ara&quot; butonuna tıklayın.
                </p>
              </Card>

              <h3 className="text-2xl font-bold mb-4">THY&apos;nin Avantajları</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Türk Hava Yolları, dünyanın en çok ülkeye uçan havayolu şirketi olarak 130&apos;dan fazla ülkede
                340&apos;dan fazla destinasyona hizmet vermektedir.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Geniş Destinasyon Ağı: Dünyada en çok ülkeye uçan havayolu",
                  "5 Yıldızlı Hizmet: Skytrax tarafından verilen 5 yıldız sertifikası",
                  "Modern Filo: Yeni nesil Boeing ve Airbus uçakları",
                  "İstanbul Hub: Avrupa, Asya ve Afrika arasında ideal bağlantı noktası",
                  "Miles&Smiles: Kapsamlı sadakat programı",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">THY Bagaj Hakları</h3>
              <Card className="p-6 mb-8">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Economy Class: 23 kg bagaj hakkı (yurtiçi), 30 kg (yurtdışı)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Business Class: 32 kg bagaj hakkı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>El Bagajı: 8 kg (55x40x23 cm)</span>
                  </li>
                </ul>
              </Card>

              <h3 className="text-2xl font-bold mb-4">THY Check-in İşlemleri</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4">
                  <Clock className="h-8 w-8 text-red-600 mb-3" />
                  <h4 className="font-semibold mb-2">Online Check-in</h4>
                  <p className="text-sm text-muted-foreground">Uçuştan 24 saat önce başlar</p>
                </Card>
                <Card className="p-4">
                  <Monitor className="h-8 w-8 text-red-600 mb-3" />
                  <h4 className="font-semibold mb-2">Mobil Check-in</h4>
                  <p className="text-sm text-muted-foreground">THY mobil uygulaması üzerinden</p>
                </Card>
                <Card className="p-4">
                  <Plane className="h-8 w-8 text-red-600 mb-3" />
                  <h4 className="font-semibold mb-2">Havaalanı</h4>
                  <p className="text-sm text-muted-foreground">Self-servis veya kontuardan</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FlyTR for THY */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Neden FlyTR ile THY Bileti?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            FlyTR üzerinden Türk Hava Yolları bileti almanın avantajları
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
            <a href="tel:08503030787">
              <Plane className="h-5 w-5" />
              THY Bilet Al
            </a>
          </Button>
        </div>
      </section>

      {/* Benzer Konular */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">THY Hakkında Faydalı Bilgiler</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Türk Hava Yolları ile seyahatinizi kolaylaştıracak rehberler ve bilgiler
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {[
              { title: "THY Bagaj Hakkı", desc: "Bagaj ağırlık ve boyut limitleri", href: "/havayollari/thy/bagaj-hakki" },
              { title: "THY Bilet İptali", desc: "İptal koşulları ve iade işlemleri", href: "/havayollari/thy/bilet-iptali" },
              { title: "THY Bilet Değişikliği", desc: "Tarih ve saat değişiklik kuralları", href: "/havayollari/thy/bilet-degisikligi" },
              { title: "THY Check-in", desc: "Online ve mobil check-in rehberi", href: "/havayollari/thy/check-in" },
              { title: "THY Koltuk Seçimi", desc: "Koltuk seçim rehberi ve ücretler", href: "/havayollari/thy/koltuk-secimi" },
              { title: "THY İletişim", desc: "Çağrı merkezi ve iletişim bilgileri", href: "/havayollari/thy/iletisim" },
              { title: "THY Evcil Hayvan", desc: "Pet taşıma kuralları ve prosedürler", href: "/havayollari/thy/evcil-hayvan" },
              { title: "THY Yolcu Hakları", desc: "Haklarınız ve tazminat bilgileri", href: "/havayollari/thy/yolcu-haklari" },
              { title: "THY Hamile Yolcu", desc: "Hamile seyahat kuralları", href: "/havayollari/thy/hamile-yolcu" },
              { title: "THY Miles&Smiles", desc: "Sadakat programı avantajları", href: "/havayollari/thy/miles-smiles" },
              { title: "THY Eğlence Sistemi", desc: "Planet Entertainment özellikleri", href: "/havayollari/thy/eglence-sistemi" },
              { title: "THY İkram Servisi", desc: "Uçak içi yemek ve ikram", href: "/havayollari/thy/ikram-servisi" },
              { title: "THY Mobil Uygulama", desc: "Uygulama özellikleri ve kullanım", href: "/havayollari/thy/mobil-uygulama" },
              { title: "THY Popüler Rotalar", desc: "En çok tercih edilen destinasyonlar", href: "/havayollari/thy/populer-rotalar" },
              { title: "THY Sık Sorulan Sorular", desc: "Merak edilen sorular ve cevaplar", href: "/havayollari/thy/sss" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="p-5 h-full hover:shadow-lg transition-all hover:border-red-200 group">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 shrink-0 group-hover:bg-red-200 transition-colors">
                      <Plane className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-red-600 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
