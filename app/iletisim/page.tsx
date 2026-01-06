import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Phone, Mail, MapPin, Clock, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "İletişim - bilethizmeti.com | 7/24 Müşteri Destek Hattı 0850 303 07 87",
  description:
    "bilethizmeti.com ile iletişime geçin. 7/24 müşteri destek hattı: 0850 303 07 87. Bilet satış, değişiklik ve iptal için profesyonel destek. IATA ve TÜRSAB üyesi güvenilir seyahat acentesi.",
  keywords:
    "bilethizmeti.com iletişim, müşteri hizmetleri, destek hattı, uçak bileti yardım, 0850 303 07 87, seyahat acentesi iletişim",
  openGraph: {
    title: "İletişim - bilethizmeti.com | 7/24 Müşteri Destek",
    description: "7/24 profesyonel müşteri desteği. Hemen arayın: 0850 303 07 87",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-accent/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Clock className="h-4 w-4" />
              <span>7/24 Destek</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">İletişim</h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Size yardımcı olmak için buradayız. Sorularınız için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <a href="tel:08503030787">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full border-2 hover:border-primary/50">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Telefon</h3>
                <p className="text-sm text-muted-foreground mb-3">7/24 Çağrı Merkezi</p>
                <span className="text-2xl font-bold text-primary mb-1 block">0850 303 07 87</span>
                <p className="text-xs text-muted-foreground">Ücretsiz arama</p>
              </Card>
            </a>

            <a href="mailto:info@bilethizmeti.com">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full border-2 hover:border-primary/50">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">E-posta</h3>
                <p className="text-sm text-muted-foreground mb-3">Hızlı yanıt garantisi</p>
                <p className="text-lg font-bold text-primary mb-1">info@bilethizmeti.com</p>
                <p className="text-xs text-muted-foreground">24 saat içinde yanıt</p>
              </Card>
            </a>

            <Card className="p-6 text-center h-full border-2">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Adres</h3>
              <p className="text-sm text-muted-foreground mb-3">Merkez Ofis</p>
              <p className="text-sm font-medium mb-1">Ulus Şehit İbrahim Akpınar Cad. No:4</p>
              <p className="text-xs text-muted-foreground">Beşiktaş/İstanbul</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-balance">Şirket Bilgileri</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-3">Şirket Unvanı</h3>
                  <p className="text-sm text-muted-foreground">Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Adres</h3>
                  <p className="text-sm text-muted-foreground">
                    Ulus Şehit İbrahim Akpınar Cad. No:4 Beşiktaş/İstanbul
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Vergi Bilgileri</h3>
                  <p className="text-sm text-muted-foreground">Kozyatağı Vergi Dairesi - 0930531316</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Faaliyet Alanı</h3>
                  <p className="text-sm text-muted-foreground">791101 - Seyahat Acentesi Faaliyetleri</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-4">Çalışma Saatleri</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-1">Telefon Desteği</p>
                    <p className="text-muted-foreground">7/24 Açık</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-posta Desteği</p>
                    <p className="text-muted-foreground">7/24 Açık</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Ofis Saatleri</p>
                    <p className="text-muted-foreground">09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8 text-balance">Üyeliklerimiz ve Sertifikalarımız</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-2">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">IATA Üyesi</h3>
                <p className="text-2xl font-bold text-primary mb-3">Üyelik No: 8261626</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  Uluslararası Hava Taşımacılığı Birliği üyesi olarak global standartlarda hizmet sunuyoruz.
                </p>
              </Card>

              <Card className="p-8 border-2">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">TÜRSAB Üyesi</h3>
                <p className="text-2xl font-bold text-primary mb-3">Üyelik No: 18270</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  Türkiye Seyahat Acentaları Birliği üyesi olarak güvenilir ve kaliteli hizmet garantisi veriyoruz.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-balance">Destek Türleri</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Bilet rezervasyonu ve satış",
                "Bilet değişiklik işlemleri",
                "Bilet iptal ve iade",
                "Genel bilgi ve danışmanlık",
                "Acil durum desteği",
                "Havayolu bilgilendirme",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <span className="text-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
    

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
