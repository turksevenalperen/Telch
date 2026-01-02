"use client"

import { Shield, Clock, Award, CheckCircle2, Phone, Headphones, MessageCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import Link from "next/link"
import Image from "next/image"

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section
        id="anasayfa"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 py-20 md:py-32"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span>IATA & TÜRSAB Üyesi</span>
            </div>

            <h2 className="mb-2 text-2xl font-bold text-white/90 md:text-3xl">Bilethizmeti.com</h2>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-balance">
              <span className="text-white">Dünyaya</span>{" "}
              <span className="text-amber-400">Açılın</span>
            </h1>

            <p className="mb-8 text-lg text-white/90 md:text-xl text-pretty">
              Türkiye&apos;nin en güvenilir seyahat acentesi ile hayalinizdeki destinasyonlara uçun
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-4 py-3 text-white">
                <Shield className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs text-white/80">IATA & TÜRSAB</div>
                  <div className="text-sm font-semibold">Üyesi</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-4 py-3 text-white">
                <Clock className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs text-white/80">14 Yıl</div>
                  <div className="text-sm font-semibold">Deneyim</div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-4 py-3 text-white">
                <Award className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs text-white/80">5M+</div>
                  <div className="text-sm font-semibold">Mutlu Müşteri</div>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-white/90" asChild>
              <a href="tel:08503030787">
                <Phone className="h-4 w-4" />
                Hemen İletişime Geçin
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why bilethizmeti.com Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden bilethizmeti.com?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Güvenilir ve kaliteli hizmet garantimiz
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Güvenli Ödeme</h3>
              <p className="text-sm text-muted-foreground">SSL Sertifikalı</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">24/7 Destek</h3>
              <p className="text-sm text-muted-foreground">Kesintisiz Hizmet</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">En İyi Fiyat</h3>
              <p className="text-sm text-muted-foreground">Garanti Ediyoruz</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Hızlı İşlem</h3>
              <p className="text-sm text-muted-foreground">Anında Onay</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Hakkımızda
              </div>
              <h2 className="text-3xl font-bold mb-6 text-balance">bilethizmeti.com Hakkında</h2>
              <p className="text-muted-foreground mb-4 text-pretty">
                Türkiye&apos;nin önde gelen uçak bileti satış platformu olarak, size en uygun fiyatlarla güvenli seyahat
                deneyimi sunuyoruz.
              </p>
              <p className="text-muted-foreground mb-6 text-pretty">
                bilethizmeti.com, 2010 yılında Türkiye&apos;de kurulan ve havacılık sektöründe güvenilir hizmet anlayışıyla öne
                çıkan bir seyahat acentesidir. 14 yıllık deneyimimiz boyunca, müşteri odaklı yaklaşımımız ve yenilikçi
                çözümlerimizle sektörün öncü firmalarından biri haline geldik.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="rounded-lg border p-4">
                  <div className="text-3xl font-bold text-primary mb-1">2010</div>
                  <div className="text-sm text-muted-foreground">Kuruluş Yılı</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-3xl font-bold text-primary mb-1">2024</div>
                  <div className="text-sm text-muted-foreground">14 Yıl Deneyim</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-pretty">
                IATA (8261626) ve TÜRSAB (18270) üyeliğimizle uluslararası standartlarda hizmet garantisi veriyoruz.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Hizmet Anlayışımız</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  bilethizmeti.com olarak, sadece uçak bileti satışı yapmakla kalmayıp, müşterilerimizin seyahat sürecinin her
                  aşamasında yanlarında olmayı hedefliyoruz.
                </p>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5M+</div>
                  <div className="text-xs text-muted-foreground">Mutlu Müşteri</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">150+</div>
                  <div className="text-xs text-muted-foreground">Destinasyon</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Destek</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Hizmetlerimiz</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              bilethizmeti.com&apos;ın kapsamlı hizmet ağı ile seyahat ihtiyaçlarınızın tamamını karşılıyoruz
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: "Uçak Bileti Satışı",
                description: "Yurt içi ve yurt dışı tüm destinasyonlar için en uygun fiyatlı biletler",
              },
              {
                title: "Bilet Değişikliği",
                description: "Esnek tarih ve güzergah değişiklikleri ile seyahat planlarınızı ayarlayın",
              },
              {
                title: "Bilet İptali",
                description: "Hızlı ve güvenli iade süreçleri ile kolay iptal işlemleri",
              },
              {
                title: "24/7 Müşteri Desteği",
                description: "Her zaman ulaşılabilir profesyonel yardım ve danışmanlık",
              },
              {
                title: "Fiyat Karşılaştırma",
                description: "En uygun bilet fiyatlarını bulma garantisi ile tasarruf edin",
              },
              {
                title: "Güvenli Ödeme",
                description: "SSL sertifikalı güvenli ödeme altyapısı ile koruma",
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Airlines Section */}
      <section id="havayollari" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Popüler Havayolları</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Türkiye&apos;nin en güvenilir havayolu şirketleri ile seyahat edin. En uygun fiyatları karşılaştırın ve
              rezervasyonunuzu hemen yapın.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Türk Hava Yolları", href: "/havayollari/thy", image: "/thy.jpg" },
              { name: "Pegasus Airlines", href: "/havayollari/pegasus", image: "/pegasus.png" },
              { name: "SunExpress", href: "/havayollari/sunexpress", image: "/sunexpress.jpg" },
              { name: "AJET", href: "/havayollari/ajet", image: "/ajet.png" },
            ].map((airline, index) => (
              <Link key={index} href={airline.href}>
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 flex flex-col items-center justify-center cursor-pointer h-full">
                  <div className="relative w-24 h-16 mb-3">
                    <Image
                      src={airline.image}
                      alt={airline.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium">{airline.name}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Havayolu Danışmanlık Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Profesyonel Destek
            </div>
            <h2 className="text-3xl font-bold mb-4 text-balance">Havayolu Danışmanlığı</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Uzman ekibimiz seyahat planlamanızda size rehberlik eder. Bilet seçiminden bagaj kurallarına, vize işlemlerinden otel önerilerine kadar tüm sorularınızda yanınızdayız.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all border-2 hover:border-primary/20">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Headphones className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bilet Satış Danışmanlığı</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                En uygun uçuş seçeneklerini bulmanıza yardımcı oluyoruz. Tarih esnekliği, aktarma seçenekleri ve fiyat karşılaştırması konusunda uzman desteği.
              </p>
              <a href="tel:08503025493">
                <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
                  <Phone className="h-4 w-4" />
                  0850 302 54 93
                </Button>
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all border-2 hover:border-primary/20">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Değişiklik & Destek</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Mevcut biletlerinizde tarih, saat veya güzergah değişiklikleri için profesyonel destek. Havayolu kuralları hakkında detaylı bilgi.
              </p>
              <a href="tel:08508402369">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
                  <Phone className="h-4 w-4" />
                  0850 840 23 69
                </Button>
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all border-2 hover:border-primary/20 md:col-span-2 lg:col-span-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kurumsal Seyahat</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Şirketler için özel fiyatlandırma ve toplu bilet çözümleri. Kurumsal seyahat yönetimi ve raporlama hizmetleri.
              </p>
              <a href="tel:08503030787">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 gap-2">
                  <Phone className="h-4 w-4" />
                  0850 303 07 87
                </Button>
              </a>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium">Tüm hatlarımız 7/24 hizmet vermektedir</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Neden bilethizmeti.com?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            2010&apos;dan beri Türkiye&apos;de hizmet veren bilethizmeti.com, milyonlarca müşterisine güvenli ve ekonomik
            seyahat imkanı sunmaktadır.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-1">5M+</div>
              <div className="text-sm opacity-90">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">150+</div>
              <div className="text-sm opacity-90">Destinasyon</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-90">Müşteri Desteği</div>
            </div>
          </div>

          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:08503030787">
              <Phone className="h-4 w-4" />
              0850 303 07 87
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
      <CallPopup />
    </div>
  )
}
