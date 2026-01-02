import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Phone, ShoppingCart, Edit, Ban, Plane, Clock, Shield, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bilet Al - bilethizmeti.com | Uçak Bileti Rezervasyon",
  description:
    "bilethizmeti.com ile uçak bileti almak çok kolay! Bilet satış, değişim ve iptal işlemleri için hemen bizi arayın. 7/24 müşteri hizmetleri.",
  keywords: "uçak bileti, bilet al, bilet rezervasyon, uçak bileti satın al, thy bilet, pegasus bilet, bilethizmeti.com",
}

export default function BiletAlPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Plane className="h-4 w-4" />
              <span>bilethizmeti.com Bilet Hizmetleri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-white text-balance">
              Uçak Bileti Almak İçin <span className="text-amber-400">Bizi Arayın</span>
            </h1>

            <p className="text-lg text-white/90 md:text-xl text-pretty">
              THY, Pegasus, SunExpress ve AJET için en uygun fiyatlı biletler. 
              Uzman ekibimiz size en iyi seçenekleri sunacak!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            
            {/* Bilet Satış */}
            <Card className="p-0 overflow-hidden border-2 border-green-500 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-green-500 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center">
                    <ShoppingCart className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bilet Satış</h3>
                    <p className="text-sm opacity-90">Yeni bilet rezervasyonu</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Yurtiçi ve yurtdışı tüm uçuşlar için bilet almak istiyorsanız bu numarayı arayın.
                </p>
                <a href="tel:08503025493">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold gap-2 h-12 text-lg">
                    <Phone className="h-5 w-5" />
                    0850 302 54 93
                  </Button>
                </a>
              </div>
            </Card>

            {/* Bilet Değişim */}
            <Card className="p-0 overflow-hidden border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-blue-500 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Edit className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bilet Değişim</h3>
                    <p className="text-sm opacity-90">Tarih ve saat değişikliği</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Mevcut biletinizin tarih veya saatini değiştirmek için bu numarayı arayın.
                </p>
                <a href="tel:08508402369">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-2 h-12 text-lg">
                    <Phone className="h-5 w-5" />
                    0850 840 23 69
                  </Button>
                </a>
              </div>
            </Card>

            {/* Bilet İptal */}
            <Card className="p-0 overflow-hidden border-2 border-red-500 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-red-500 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Ban className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bilet İptal</h3>
                    <p className="text-sm opacity-90">İptal ve iade işlemleri</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Bilet iptali ve iade işlemleri için bu numarayı arayabilirsiniz.
                </p>
                <a href="tel:08503030787">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold gap-2 h-12 text-lg">
                    <Phone className="h-5 w-5" />
                    0850 303 07 87
                  </Button>
                </a>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Call Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Neden Bizi Aramalısınız?</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Online sistemler yerine bizi aradığınızda bu avantajlardan yararlanırsınız
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Güvenli İşlem",
                description: "Tüm işlemleriniz IATA ve TÜRSAB güvencesi altında",
              },
              {
                icon: Headphones,
                title: "Uzman Destek",
                description: "Deneyimli ekibimiz en uygun uçuşu bulur",
              },
              {
                icon: Clock,
                title: "7/24 Hizmet",
                description: "Gece gündüz demeden bizi arayabilirsiniz",
              },
              {
                icon: Plane,
                title: "Tüm Havayolları",
                description: "THY, Pegasus, SunExpress, AJET ve daha fazlası",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Airlines Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Çalıştığımız Havayolları</h2>
            <p className="text-muted-foreground text-pretty">
              Türkiye&apos;nin önde gelen havayollarının yetkili acentesiyiz
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-20 w-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-red-600">THY</span>
              </div>
              <span className="text-sm text-muted-foreground">Türk Hava Yolları</span>
            </div>
            <div className="text-center">
              <div className="h-20 w-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-yellow-600">Pegasus</span>
              </div>
              <span className="text-sm text-muted-foreground">Pegasus</span>
            </div>
            <div className="text-center">
              <div className="h-20 w-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-amber-600">SunExpress</span>
              </div>
              <span className="text-sm text-muted-foreground">SunExpress</span>
            </div>
            <div className="text-center">
              <div className="h-20 w-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <span className="font-bold text-orange-600">AJET</span>
              </div>
              <span className="text-sm text-muted-foreground">AnadoluJet</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hemen Arayın, Biletinizi Alın!</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun fiyatlı ve en konforlu uçuş seçeneklerini sunmak için hazır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:08503025493">
              <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                <Phone className="h-5 w-5" />
                0850 302 54 93
              </Button>
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/80">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <span>Çağrı merkezi şu an açık - 7/24 hizmet</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
