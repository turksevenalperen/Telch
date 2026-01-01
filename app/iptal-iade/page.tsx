import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { AlertCircle, CheckCircle2, Clock, Euro, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "İptal & İade Şartları | Uçak Bileti İptal Koşulları - TelchFly",
  description:
    "TelchFly uçak bileti iptal ve iade koşulları, yolcu hakları ve tazminat bilgileri. Havayolu şirketlerine göre iptal şartları ve EU 261 yolcu hakları.",
  keywords: "uçak bileti iptali, bilet iadesi, yolcu hakları, EU 261, rötar tazminatı, bilet değişikliği",
}

export default function IptalIadePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-balance">İptal & İade Şartları</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                TelchFly uçak bileti iptal ve iade koşulları, yolcu hakları ve tazminat bilgileri
              </p>
            </div>

            {/* Genel İptal ve İade Şartları */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Genel İptal ve İade Şartları</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Bilet İptali</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Biletinizi satın aldıktan sonra 24 saat içinde ücretsiz iptal edebilirsiniz</li>
                        <li>• 24 saat sonrası iptal işlemlerinde havayolu şirketinin iptal ücretleri uygulanır</li>
                        <li>
                          • İptal işlemi için müşteri hizmetlerimizi arayabilir veya online başvuru yapabilirsiniz
                        </li>
                        <li>• Promosyonlu biletlerde farklı iptal koşulları geçerli olabilir</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">İade İşlemleri</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• İade işlemleri 7-14 iş günü içinde tamamlanır</li>
                        <li>• İade tutarı, ödeme yaptığınız kartın hesabına aktarılır</li>
                        <li>• Havayolu şirketinin iptal ücretleri düşüldükten sonra kalan tutar iade edilir</li>
                        <li>• TelchFly hizmet bedeli iade kapsamı dışındadır</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Uçuş Rötar ve İptal Hakları */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Uçuş Rötar ve İptal Hakları (EU 261/2004)</h2>
              <Card className="p-6 mb-6 bg-blue-50/50 border-blue-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Avrupa Birliği ülkelerinden kalkan veya AB havayolu şirketleri ile seyahat eden yolcular için
                    geçerlidir.
                  </p>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center">
                  <Euro className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">250 €</div>
                  <h3 className="font-semibold mb-2">3+ Saat Rötar</h3>
                  <p className="text-sm text-muted-foreground">1500 km&apos;ye kadar mesafeler için tazminat hakkı</p>
                </Card>

                <Card className="p-6 text-center">
                  <Euro className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">400 €</div>
                  <h3 className="font-semibold mb-2">3+ Saat Rötar</h3>
                  <p className="text-sm text-muted-foreground">1500-3500 km arası mesafeler için tazminat hakkı</p>
                </Card>

                <Card className="p-6 text-center">
                  <Euro className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">600 €</div>
                  <h3 className="font-semibold mb-2">3+ Saat Rötar</h3>
                  <p className="text-sm text-muted-foreground">3500 km üzeri mesafeler için tazminat hakkı</p>
                </Card>
              </div>

              <Card className="p-6 mb-6">
                <h3 className="font-semibold mb-4">Ek Yolcu Hakları</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "2+ saat rötar durumunda ücretsiz yemek ve içecek",
                    "Ücretsiz telefon görüşmesi ve internet erişimi",
                    "Gerekli durumlarda konaklama desteği",
                    "Havaalanı-otel arası ücretsiz transfer",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-amber-50/50 border-amber-200">
                <h3 className="font-semibold mb-3">Tazminat Şartları</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Olağanüstü durumlar (hava koşulları, grev vb.) tazminat kapsamı dışındadır</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Havayolu şirketinin kusuru varsa tazminat hakkı doğar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Tazminat talebi için 3 yıl süre sınırı vardır</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>Boarding pass ve bilet bilgilerini saklamanız önemlidir</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* Havayolu Şirketlerine Göre İptal Şartları */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Havayolu Şirketlerine Göre İptal Şartları</h2>

              <div className="space-y-6">
                {[
                  {
                    name: "Türk Hava Yolları",
                    packages: [
                      { name: "Economy Flex", price: "Ücretsiz" },
                      { name: "Economy", price: "₺200-400" },
                      { name: "Promo", price: "İade Yok" },
                    ],
                  },
                  {
                    name: "Pegasus Hava Yolları",
                    packages: [
                      { name: "Flex", price: "Ücretsiz" },
                      { name: "Essentials", price: "₺150-300" },
                      { name: "Basic", price: "İade Yok" },
                    ],
                  },
                  {
                    name: "SunExpress",
                    packages: [
                      { name: "SunFares Plus", price: "Ücretsiz" },
                      { name: "SunFares", price: "₺100-250" },
                      { name: "SunEco", price: "İade Yok" },
                    ],
                  },
                  {
                    name: "AJet",
                    packages: [
                      { name: "Flex", price: "Ücretsiz" },
                      { name: "Standard", price: "₺120-280" },
                      { name: "Basic", price: "İade Yok" },
                    ],
                  },
                ].map((airline, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold mb-4">{airline.name}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {airline.packages.map((pkg, pkgIndex) => (
                        <div key={pkgIndex} className="text-center p-4 rounded-lg bg-accent/50">
                          <div className="font-medium mb-1">{pkg.name}</div>
                          <div className="text-primary font-semibold">{pkg.price}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* İletişim */}
            <Card className="p-8 text-center bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">İptal & İade Desteği</h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                Bilet iptal ve iade işlemleriniz için uzman ekibimiz size yardımcı olmaya hazır. 7/24 müşteri
                hizmetlerimizden destek alabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:08503030787"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  İptal İşlemi: 0850 303 07 87
                </a>
                <a
                  href="mailto:info@telchfly.com.tr"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium hover:bg-accent"
                >
                  E-posta Desteği
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
