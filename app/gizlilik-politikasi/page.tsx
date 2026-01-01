import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Shield, Lock, UserCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Kişisel Verilerin Korunması - TelchFly",
  description:
    "TelchFly gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği, korunduğu ve KVKK kapsamındaki haklarınız hakkında detaylı bilgi.",
  keywords: "gizlilik politikası, kişisel veri, KVKK, veri güvenliği, gizlilik",
}

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-balance">Gizlilik Politikası</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Kişisel verilerinizin korunması ve gizliliğiniz bizim için önceliklidir
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <Card className="p-4 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Güvenli Koruma</h3>
                </Card>
                <Card className="p-4 text-center">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Şifreli Veriler</h3>
                </Card>
                <Card className="p-4 text-center">
                  <UserCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Kullanıcı Hakları</h3>
                </Card>
              </div>
            </div>

            <Card className="p-6 mb-8 bg-blue-50/50 border-blue-200">
              <p className="text-sm">
                <strong>Son Güncelleme:</strong> 7 Ekim 2024
              </p>
            </Card>

            {/* Giriş */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Giriş</h2>
              <p className="text-muted-foreground mb-4 text-pretty">
                TelchFly (Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi) olarak, kişisel verilerinizin korunması
                ve gizliliğiniz bizim için son derece önemlidir. Bu gizlilik politikası, www.telchfly.com.tr web
                sitesini kullanırken kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında sizi
                bilgilendirmek amacıyla hazırlanmıştır.
              </p>
              <p className="text-muted-foreground text-pretty">
                Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Avrupa Birliği Genel Veri Koruma
                Tüzüğü (GDPR) ve diğer ilgili mevzuat kapsamında hazırlanmış olup, veri koruma uygulamalarımız hakkında
                şeffaf bilgi sunmayı amaçlamaktadır.
              </p>
            </section>

            {/* Veri Sorumlusu */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Veri Sorumlusu Bilgileri</h2>

              <Card className="p-6 mb-6">
                <h3 className="font-semibold mb-4">Şirket Bilgileri</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Unvan:</strong> Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi
                  </p>
                  <p>
                    <strong>Ticaret Unvanı:</strong> TelchFly
                  </p>
                  <p>
                    <strong>Adres:</strong> Ulus Şehit İbrahim Akpınar Cad. No:4 Beşiktaş/İstanbul
                  </p>
                  <p>
                    <strong>Vergi Dairesi:</strong> Kozyatağı
                  </p>
                  <p>
                    <strong>Vergi No:</strong> 0930531316
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">İletişim Bilgileri</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Telefon:</strong> 0850 303 07 87
                  </p>
                  <p>
                    <strong>E-posta:</strong> info@telchfly.com.tr
                  </p>
                  <p>
                    <strong>Web:</strong> www.telchfly.com.tr
                  </p>
                  <p>
                    <strong>IATA Kodu:</strong> 8261626
                  </p>
                  <p>
                    <strong>TÜRSAB No:</strong> 18270
                  </p>
                </div>
              </Card>
            </section>

            {/* Toplanan Kişisel Veriler */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Toplanan Kişisel Veriler</h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Kimlik ve İletişim Bilgileri</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Hizmetlerimizi kullanırken topladığımız temel kişisel bilgiler:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Ad, soyad ve T.C. kimlik numarası</li>
                    <li>Doğum tarihi, cinsiyet ve uyruk bilgileri</li>
                    <li>Telefon numarası ve e-posta adresi</li>
                    <li>Posta adresi bilgileri</li>
                    <li>Pasaport bilgileri (uluslararası seyahatler için)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Finansal Bilgiler</h3>
                  <p className="text-sm text-muted-foreground mb-3">Ödeme işlemleri için gerekli finansal veriler:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Kredi kartı bilgileri (güvenli ödeme sistemleri aracılığıyla)</li>
                    <li>Fatura bilgileri ve ödeme geçmişi</li>
                    <li>Banka hesap bilgileri (iade işlemleri için)</li>
                    <li>İşlem kayıtları ve makbuzlar</li>
                  </ul>
                  <div className="mt-3 p-3 bg-amber-50/50 border border-amber-200 rounded-lg">
                    <p className="text-xs text-amber-900">
                      <strong>Güvenlik Notu:</strong> Kredi kartı bilgileriniz PCI DSS standartlarına uygun güvenli
                      ödeme sistemleri tarafından işlenir ve saklanmaz.
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Seyahat Bilgileri</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Rezervasyon ve seyahat hizmetleri için toplanan bilgiler:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Rezervasyon detayları ve bilet bilgileri</li>
                    <li>Seyahat tercihleri ve özel istekler</li>
                    <li>Geçmiş rezervasyon kayıtları</li>
                    <li>Check-in bilgileri ve koltuk tercihleri</li>
                    <li>Bagaj bilgileri ve özel hizmet talepleri</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Teknik Bilgiler</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Web sitesi kullanımı sırasında otomatik olarak toplanan bilgiler:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>IP adresi ve konum bilgileri</li>
                    <li>Tarayıcı türü ve versiyonu</li>
                    <li>İşletim sistemi bilgileri</li>
                    <li>Ziyaret edilen sayfalar ve süre</li>
                    <li>Çerez ve benzeri teknolojiler aracılığıyla toplanan veriler</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Kişisel Verilerin Kullanım Amaçları */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Kişisel Verilerin Kullanım Amaçları</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Hizmet Sunumu",
                    items: [
                      "Uçak bileti rezervasyonu ve satışı",
                      "Bilet değişiklik ve iptal işlemleri",
                      "Check-in ve boarding pass hizmetleri",
                      "Müşteri hizmetleri desteği",
                    ],
                  },
                  {
                    title: "Yasal Yükümlülükler",
                    items: [
                      "Vergi mevzuatı gereği kayıt tutma",
                      "MASAK bildirimleri",
                      "Havacılık otoriteleri ile bilgi paylaşımı",
                      "Güvenlik kontrolleri",
                    ],
                  },
                  {
                    title: "İş Geliştirme",
                    items: [
                      "Hizmet kalitesinin artırılması",
                      "Müşteri memnuniyeti analizi",
                      "Pazarlama faaliyetleri (onay ile)",
                      "Yeni hizmet geliştirme",
                    ],
                  },
                  {
                    title: "Güvenlik",
                    items: ["Dolandırıcılık önleme", "Sistem güvenliği sağlama", "Risk yönetimi", "Kimlik doğrulama"],
                  },
                ].map((section, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold mb-3">{section.title}</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </section>

            {/* İletişim */}
            <Card className="p-8 text-center bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">İletişim ve Başvuru</h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                Gizlilik politikamız hakkında sorularınız veya kişisel verilerinizle ilgili talepleriniz için bizimle
                iletişime geçebilirsiniz:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">E-posta</h3>
                  <a href="mailto:info@telchfly.com.tr" className="text-primary hover:underline">
                    info@telchfly.com.tr
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <a href="tel:08503030787" className="text-primary hover:underline">
                    0850 303 07 87
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Adres</h3>
                  <p className="text-sm text-muted-foreground">
                    Ulus Şehit İbrahim Akpınar Cad. No:4 Beşiktaş/İstanbul
                  </p>
                </div>
              </div>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Bu gizlilik politikası son olarak 7 Ekim 2024 tarihinde güncellenmiştir.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
