"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Star, Clock, CheckCircle2, Plane, Wallet, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AJetClientPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* AJet Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-24">
                <Image
                  src="/ajet.png"
                  alt="AJet Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Uçak Bileti
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty mb-8">
              Türk Hava Yolları grubunun ekonomik markası ile uygun fiyatlı seyahat. En ucuz AJet biletleri bilethizmeti.com&apos;da.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Destinasyon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">Ekonomik</div>
                <div className="text-sm text-muted-foreground">Fiyatlar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">THY</div>
                <div className="text-sm text-muted-foreground">Güvencesi</div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="tel:08503030787">AJet Bilet Al</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Popüler Yurtiçi Rotalar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Popüler AJet Uçuşları</h2>
            <p className="text-muted-foreground text-pretty">
              AJet ile en popüler yurtiçi destinasyonlara ekonomik fiyatlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { from: "İstanbul", to: "Ankara", code: "IST → ESB", price: "₺599", duration: "1s 25dk" },
              { from: "İstanbul", to: "İzmir", code: "IST → ADB", price: "₺699", duration: "1s 15dk" },
              { from: "İstanbul", to: "Antalya", code: "IST → AYT", price: "₺799", duration: "1s 30dk" },
              { from: "Ankara", to: "İzmir", code: "ESB → ADB", price: "₺649", duration: "1s 35dk" },
              { from: "İstanbul", to: "Adana", code: "IST → ADA", price: "₺749", duration: "1s 40dk" },
              { from: "İstanbul", to: "Trabzon", code: "IST → TZX", price: "₺849", duration: "1s 45dk" },
            ].map((route, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{route.from} - {route.to}</div>
                    <div className="text-sm text-muted-foreground">{route.code}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{route.price}</div>
                    <div className="text-xs text-muted-foreground">tek yön, vergiler dahil</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{route.duration}</div>
                    <div className="text-xs text-muted-foreground">Direkt</div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:08503030787">Bilet Al</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neden AJet */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden AJet?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              THY güvencesiyle ekonomik uçuş deneyimi
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingDown,
                title: "Uygun Fiyatlar",
                subtitle: "Ekonomik biletler",
                description: "Bütçenize uygun uçuş seçenekleri",
              },
              {
                icon: Wallet,
                title: "Esnek Paketler",
                subtitle: "İhtiyacınız kadar ödeyin",
                description: "Bagaj ve hizmetleri isteğe bağlı ekleyin",
              },
              {
                icon: Star,
                title: "THY Güvencesi",
                subtitle: "Kaliteli hizmet",
                description: "Türk Hava Yolları grubunun markası",
              },
              {
                icon: Clock,
                title: "Sık Uçuşlar",
                subtitle: "Yoğun sefer programı",
                description: "Popüler hatlarda günde çok sayıda uçuş",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <div className="text-sm font-medium text-blue-600 mb-2">{feature.subtitle}</div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AJet Hakkında */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-balance">AJet Hakkında</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-pretty">
                AJet, Türk Hava Yolları grubuna bağlı olarak faaliyet gösteren ve özellikle iç hatlar ile yakın coğrafya uçuşlarına odaklanan bir havayolu markasıdır. Daha ekonomik fiyatlı bilet seçenekleri sunmayı hedefleyen AJet, temel hizmetlerin ayrı ayrı satın alınabildiği bir yapıyla çalışır.
              </p>

              <Card className="p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">AJet&apos;in Avantajları</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Ekonomik fiyatlı bilet seçenekleri",
                    "THY grubunun güvenilirliği",
                    "İhtiyacınız kadar ödeme imkanı",
                    "Modern ve bakımlı uçak filosu",
                    "Kolay online işlemler",
                    "Esnek paket seçenekleri",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <h3 className="text-2xl font-bold mb-4">AJet Bagaj Politikası</h3>
              <Card className="p-6 mb-8">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Kabin Bagajı: 1 adet, maksimum 8 kg (55x40x23 cm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Check-in Bagajı: Çoğu tarifede ücretli (15-25 kg seçenekleri)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Bagaj online satın alındığında daha uygun fiyatlı</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">AJet Bileti Almak İçin Arayın</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            En uygun AJet bilet fiyatları ve kampanyalar için hemen bizi arayın
          </p>

          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:08503030787">
              <Plane className="h-5 w-5" />
              AJet Bilet Al
            </a>
          </Button>
        </div>
      </section>

      {/* Faydalı Bilgiler */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">AJet Hakkında Faydalı Bilgiler</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              AJet ile seyahatinizi kolaylaştıracak rehberler ve bilgiler
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {[
              { title: "AJet Bagaj Hakkı", desc: "Bagaj ağırlık ve boyut limitleri", href: "/havayollari/ajet/bagaj-hakki" },
              { title: "AJet Bilet İptali", desc: "İptal koşulları ve iade işlemleri", href: "/havayollari/ajet/bilet-iptali" },
              { title: "AJet Bilet Değişikliği", desc: "Tarih ve saat değişiklik kuralları", href: "/havayollari/ajet/bilet-degisikligi" },
              { title: "AJet Check-in", desc: "Online ve mobil check-in rehberi", href: "/havayollari/ajet/check-in" },
              { title: "AJet Koltuk Seçimi", desc: "Koltuk seçim rehberi ve ücretler", href: "/havayollari/ajet/koltuk-secimi" },
              { title: "AJet İletişim", desc: "Çağrı merkezi ve iletişim bilgileri", href: "/havayollari/ajet/iletisim" },
              { title: "AJet Evcil Hayvan", desc: "Pet taşıma kuralları ve prosedürler", href: "/havayollari/ajet/evcil-hayvan" },
              { title: "AJet Yolcu Hakları", desc: "Haklarınız ve tazminat bilgileri", href: "/havayollari/ajet/yolcu-haklari" },
              { title: "AJet Hamile Yolcu", desc: "Hamile seyahat kuralları", href: "/havayollari/ajet/hamile-yolcu" },
              { title: "AJet İkram Servisi", desc: "Uçak içi yemek ve ikram", href: "/havayollari/ajet/ikram-servisi" },
              { title: "AJet Popüler Rotalar", desc: "En çok tercih edilen destinasyonlar", href: "/havayollari/ajet/populer-rotalar" },
              { title: "AJet Sık Sorulan Sorular", desc: "Merak edilen sorular ve cevaplar", href: "/havayollari/ajet/sss" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="p-5 h-full hover:shadow-lg transition-all hover:border-blue-200 group">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Plane className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
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