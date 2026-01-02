import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Shield, Scale, CheckCircle2, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kullanım Şartları - bilethizmeti.com | Yasal Şartlar ve Koşullar",
  description:
    "bilethizmeti.com kullanım şartları. Web sitesi kullanım kuralları, rezervasyon şartları, iptal ve iade politikası, yasal uyumluluk ve müşteri sorumlulukları hakkında detaylı bilgi.",
  keywords:
    "kullanım şartları, yasal şartlar, rezervasyon kuralları, iptal şartları, müşteri sorumlulukları, hizmet koşulları",
  openGraph: {
    title: "Kullanım Şartları - bilethizmeti.com",
    description: "Web sitemizi kullanırken uymanız gereken kurallar ve şartlar hakkında detaylı bilgilendirme.",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-accent/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Scale className="h-4 w-4" />
              <span>Son Güncelleme: 7 Ekim 2024</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">Kullanım Şartları</h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Web sitemizi kullanırken uymanız gereken kurallar ve şartlar hakkında detaylı bilgilendirme metni
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <Scale className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Yasal Uyumluluk</div>
              <div className="text-sm opacity-90">Kanunlara uygun hizmet</div>
            </div>
            <div>
              <CheckCircle2 className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Adil Şartlar</div>
              <div className="text-sm opacity-90">Şeffaf koşullar</div>
            </div>
            <div>
              <Shield className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Güvenli Hizmet</div>
              <div className="text-sm opacity-90">Korunan haklar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Giriş */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Giriş</h2>
              <p className="text-muted-foreground mb-4 text-pretty">
                Bu kullanım şartları, www.bilethizmeti.com web sitesini kullanırken uymanız gereken kuralları ve
                koşulları belirler. Web sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
              </p>
              <p className="text-muted-foreground text-pretty">
                bilethizmeti.com (Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi) olarak, müşterilerimize en iyi hizmeti
                sunmak ve yasal yükümlülüklerimizi yerine getirmek amacıyla bu kullanım şartlarını hazırladık.
              </p>
            </Card>

            {/* Şirket Bilgileri */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Şirket Bilgileri</h2>

              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Şirket Unvanı", value: "Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi" },
                    { label: "Ticaret Sicil No", value: "İstanbul Ticaret Sicili" },
                    { label: "Vergi Dairesi", value: "Kozyatağı Vergi Dairesi" },
                    { label: "Vergi No", value: "0930531316" },
                    { label: "IATA Üyelik No", value: "8261626" },
                    { label: "TÜRSAB Üyelik No", value: "18270" },
                  ].map((item, index) => (
                    <div key={index} className="pb-3 border-b last:border-b-0">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  ))}
                  <div className="md:col-span-2 pt-3">
                    <p className="text-sm text-muted-foreground mb-1">Adres</p>
                    <p className="font-semibold">Ulus Şehit İbrahim Akpınar Cad. No:4 Beşiktaş/İstanbul</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Hizmet Tanımı */}
            <Card className="p-8 mb-8 bg-accent/20">
              <h2 className="text-2xl font-bold mb-4">Hizmet Tanımı</h2>
              <p className="text-muted-foreground mb-4 text-pretty">
                bilethizmeti.com bir seyahat acentesidir ve havayolu şirketi değildir. Aşağıdaki hizmetleri sunmaktayız:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Uçak Bileti Satışı",
                    desc: "Yurt içi ve yurt dışı uçak bileti rezervasyon ve satış hizmetleri",
                  },
                  {
                    title: "Bilet Değişikliği",
                    desc: "Mevcut biletlerde tarih, saat ve güzergah değişiklik işlemleri",
                  },
                  { title: "Bilet İptali", desc: "Bilet iptal işlemleri ve iade süreçlerinin yönetimi" },
                  { title: "Müşteri Desteği", desc: "7/24 müşteri hizmetleri ve seyahat danışmanlığı" },
                ].map((service, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Kullanıcı Sorumlulukları */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Kullanıcı Sorumlulukları</h2>
              <div className="space-y-3">
                {[
                  "Doğru ve güncel kişisel bilgiler sağlamak",
                  "Pasaport ve vize gerekliliklerini kontrol etmek",
                  "Havayolu şirketlerinin kurallarına uymak",
                  "Ödeme işlemlerini zamanında gerçekleştirmek",
                  "Web sitesini yasalara uygun şekilde kullanmak",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Önemli Uyarı</p>
                    <p className="text-sm text-amber-800">
                      Yanlış bilgi verilmesi durumunda ortaya çıkabilecek sorunlardan kullanıcı sorumludur. Pasaport,
                      vize ve sağlık belgesi gereklilikleri yolcunun sorumluluğundadır.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Rezervasyon Süreci */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Rezervasyon ve Ödeme Şartları</h2>

              <div className="grid gap-4">
                {[
                  {
                    step: "1",
                    title: "Arama ve Seçim",
                    desc: "Web sitemizden istediğiniz güzergah ve tarihlerde uçuş arayabilir, uygun seçenekleri karşılaştırabilirsiniz.",
                  },
                  {
                    step: "2",
                    title: "Bilgi Girişi",
                    desc: "Yolcu bilgilerini eksiksiz ve doğru şekilde girmeniz gerekmektedir. Pasaport bilgileri kimlik belgesi ile uyumlu olmalıdır.",
                  },
                  {
                    step: "3",
                    title: "Ödeme",
                    desc: "Güvenli ödeme sistemimiz üzerinden kredi kartı ile ödeme yapabilirsiniz. Ödeme onaylandıktan sonra biletiniz düzenlenir.",
                  },
                  {
                    step: "4",
                    title: "Onay",
                    desc: "Rezervasyon onayı e-posta adresinize gönderilir. Bilet bilgilerinizi kontrol etmeniz önemlidir.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* İptal ve İade */}
            <Card className="p-8 mb-8 border-2 border-primary/20">
              <h2 className="text-2xl font-bold mb-4">İptal ve İade Politikası</h2>

              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">Önemli Bilgi</p>
                <p className="text-sm text-blue-800">
                  İptal ve iade koşulları havayolu şirketlerinin belirlediği kurallara tabidir. Her havayolu şirketinin
                  farklı iptal politikaları bulunmaktadır.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "24 Saat İçinde",
                    desc: "Rezervasyon sonrası 24 saat içinde ücretsiz iptal hakkı (havayolu kurallarına göre)",
                  },
                  {
                    title: "Uçuş Öncesi",
                    desc: "Uçuş tarihinden önce iptal işlemleri havayolu ücret tarifesine tabidir",
                  },
                  {
                    title: "İptal Edilemez",
                    desc: "Bazı promosyonlu biletler ve özel tarifeler iptal edilemez olabilir",
                  },
                ].map((item, index) => (
                  <div key={index} className="pb-4 border-b last:border-b-0">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sorumluluk Sınırları */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Sorumluluk ve Sınırlamalar</h2>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">bilethizmeti.com&apos;ın Sorumlulukları</h4>
                <div className="space-y-2">
                  {[
                    "Doğru bilet bilgilerini havayolu şirketine iletmek",
                    "Güvenli ödeme işlemlerini sağlamak",
                    "Müşteri hizmetleri desteği sunmak",
                    "Kişisel verilerin güvenliğini sağlamak",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Sorumluluk Sınırları</h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  bilethizmeti.com, havayolu şirketlerinin operasyonel kararlarından, uçuş iptalleri, gecikmeler ve bagaj
                  kayıplarından sorumlu değildir. Bu durumlar doğrudan havayolu şirketinin sorumluluğundadır. Teknik
                  arızalar, doğal afetler ve mücbir sebeplerden kaynaklanan hizmet kesintilerinden bilethizmeti.com sorumlu
                  tutulamaz.
                </p>
              </div>
            </Card>

            {/* Uyuşmazlık Çözümü */}
            <Card className="p-8 mb-8 bg-accent/20">
              <h2 className="text-2xl font-bold mb-4">Uyuşmazlık Çözümü</h2>
              <p className="text-muted-foreground mb-4">
                Bu kullanım şartlarından doğacak uyuşmazlıklarda İstanbul Mahkemeleri yetkili olup, Türk Hukuku
                uygulanacaktır.
              </p>
              <p className="text-sm text-muted-foreground">
                Tüketici işlemlerinde Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
              </p>
            </Card>

            {/* İletişim */}
            <Card className="p-8 bg-primary text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
              <p className="mb-4 opacity-90">
                Kullanım şartları hakkında herhangi bir sorunuz varsa destek ekibimiz yardımcı olmaya hazır.
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">Telefon</p>
                  <p className="opacity-90">0850 303 07 87</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">E-posta</p>
                  <p className="opacity-90">info@bilethizmeti.com</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Çalışma Saatleri</p>
                  <p className="opacity-90">7/24 Destek</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
