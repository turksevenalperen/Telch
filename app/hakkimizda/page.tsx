import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Shield, Award, Clock, Users, Globe, CheckCircle2, TrendingUp, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda - FlyTR | 14 Yıllık Deneyim, IATA & TÜRSAB Üyesi",
  description:
    "FlyTR 2010'dan beri Türkiye'nin güvenilir seyahat acentesi. 5M+ mutlu müşteri, 150+ destinasyon, IATA ve TÜRSAB üyesi. 14 yıllık tecrübe ile güvenli seyahat hizmeti.",
  keywords: "FlyTR hakkında, seyahat acentesi, IATA üyesi, TÜRSAB üyesi, havayolu bileti, güvenilir seyahat",
  openGraph: {
    title: "Hakkımızda - FlyTR | 14 Yıllık Deneyim",
    description: "2010'dan beri 5M+ mutlu müşteri. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-accent/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              <span>2010&apos;dan Beri Hizmetinizdeyiz</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">FlyTR Hakkında</h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              2010&apos;dan beri Türkiye&apos;nin güvenilir seyahat acentesi olarak, size en uygun fiyatlarla güvenli
              seyahat deneyimi sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2010</div>
              <div className="text-sm opacity-90">Kuruluş Yılı</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-sm opacity-90">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">14 Yıl</div>
              <div className="text-sm opacity-90">Sektör Deneyimi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-balance">Şirket Tarihçemiz</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="p-6 border-2 border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-2">2010</div>
                  <div className="font-semibold mb-2">Kuruluş Yılı</div>
                  <p className="text-sm text-muted-foreground">İstanbul&apos;da kurulduk</p>
                </Card>

                <Card className="p-6 border-2 border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-2">2024</div>
                  <div className="font-semibold mb-2">14 Yıl Deneyim</div>
                  <p className="text-sm text-muted-foreground">Sektör lideri olduk</p>
                </Card>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4">Şirket Geçmişimiz</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                FlyTR, 2010 yılında Türkiye&apos;de kurulan ve havacılık sektöründe güvenilir hizmet anlayışıyla öne
                çıkan bir uçak bileti satış platformudur. Kuruluşumuzdan bu yana, seyahat endüstrisinde müşteri odaklı
                yaklaşımımız ve yenilikçi çözümlerimizle sektörün öncü firmalarından biri haline geldik.
              </p>

              <p className="text-muted-foreground mb-4 text-pretty">
                14 yıllık deneyimimiz boyunca, milyonlarca memnun müşteriye hizmet vermenin gururunu yaşıyor ve her
                geçen gün büyüyen müşteri portföyümüzle Türkiye&apos;nin en güvenilir seyahat acentelerinden biri olmaya
                devam ediyoruz. Teknolojik altyapımızı sürekli geliştirerek, müşterilerimize en modern ve kullanıcı
                dostu rezervasyon deneyimi sunmaktayız.
              </p>

              <p className="text-muted-foreground text-pretty">
                IATA (8261626) ve TÜRSAB (18270) üyeliğimizle uluslararası standartlarda hizmet garantisi veriyoruz. Bu
                üyelikler, müşterilerimize maksimum güvence sağlarken, aynı zamanda küresel havacılık endüstrisi ile
                olan güçlü bağlarımızı da ortaya koymaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-balance">Hizmet Anlayışımız</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              FlyTR olarak, sadece uçak bileti satışı yapmakla kalmayıp, müşterilerimizin seyahat sürecinin her
              aşamasında yanlarında olmayı hedefliyoruz. Müşteri memnuniyeti bizim için en öncelikli konudur.
            </p>
            <p className="text-muted-foreground text-pretty">
              Deneyimli ekibimizle, her müşterimize özel çözümler sunarak, unutulmaz seyahat deneyimleri yaratmak için
              çalışıyoruz. Müşterilerimizin seyahat danışmanı rolünü üstlenerek, en uygun seçenekleri sunmaya
              odaklanıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-linear-to-br from-primary/10 to-accent/20 border-primary/20">
              <h2 className="text-3xl font-bold mb-4 text-balance">Misyonumuz</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Türkiye&apos;de ve dünyada seyahat etmek isteyen herkese, en uygun fiyatlarla ve en yüksek kalitede
                hizmet sunmak. Teknoloji ve deneyimimizi birleştirerek, müşterilerimizin hayallerindeki seyahatleri
                gerçekleştirmelerine yardımcı olmak temel misyonumuz.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Rakamlarla FlyTR</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">5M+</div>
              <h3 className="font-semibold mb-1">Mutlu Müşteri</h3>
              <p className="text-xs text-muted-foreground">14 yılda hizmet verdiğimiz müşteri sayısı</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <h3 className="font-semibold mb-1">Destinasyon</h3>
              <p className="text-xs text-muted-foreground">Dünya genelinde ulaştığımız noktalar</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <h3 className="font-semibold mb-1">Destek</h3>
              <p className="text-xs text-muted-foreground">Kesintisiz müşteri hizmetleri</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">14</div>
              <h3 className="font-semibold mb-1">Yıl Deneyim</h3>
              <p className="text-xs text-muted-foreground">Sektördeki tecrübemiz</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Hizmetlerimiz</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              FlyTR&apos;ın kapsamlı hizmet ağı ile seyahat ihtiyaçlarınızın tamamını karşılıyoruz
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: CheckCircle2,
                title: "Uçak Bileti Satışı",
                description:
                  "Yurt içi ve yurt dışı tüm destinasyonlar için en uygun fiyatlı biletler. Türk Hava Yolları, Pegasus, SunExpress ve daha fazlası.",
              },
              {
                icon: TrendingUp,
                title: "Bilet Değişikliği",
                description:
                  "Esnek tarih ve güzergah değişiklikleri ile seyahat planlarınızı kolayca ayarlayın. Hızlı ve güvenilir değişiklik hizmeti.",
              },
              {
                icon: Shield,
                title: "Bilet İptali",
                description:
                  "Hızlı ve güvenli iade süreçleri ile kolay iptal işlemleri. Şeffaf iade politikası ve hızlı geri ödeme.",
              },
              {
                icon: Clock,
                title: "24/7 Müşteri Desteği",
                description:
                  "Her zaman ulaşılabilir profesyonel yardım ve danışmanlık. Deneyimli ekibimiz her zaman yanınızda.",
              },
              {
                icon: Award,
                title: "Fiyat Karşılaştırma",
                description:
                  "En uygun bilet fiyatlarını bulma garantisi ile tasarruf edin. Yüzlerce havayolunu karşılaştırıyoruz.",
              },
              {
                icon: Heart,
                title: "Güvenli Ödeme",
                description: "SSL sertifikalı güvenli ödeme altyapısı ile koruma. Kredi kartı bilgileriniz güvende.",
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why FlyTR */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Neden FlyTR?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
            2010&apos;dan beri Türkiye&apos;de hizmet veren FlyTR, milyonlarca müşterisine güvenli ve ekonomik
            seyahat imkanı sunmaktadır. Geniş havayolu ağımız, rekabetçi fiyatlarımız ve kaliteli hizmet anlayışımızla
            sektörde öncü konumdayız.
          </p>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
