import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Shield, FileCheck, UserCheck, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Kişisel Verilerin Korunması - TelchFly",
  description:
    "6698 sayılı KVKK kapsamında kişisel verilerinizin nasıl işlendiği, korunduğu ve haklarınız hakkında detaylı bilgilendirme metni.",
  keywords: "KVKK, kişisel verilerin korunması, aydınlatma metni, veri sorumlusu, KVKK hakları",
}

export default function KVKKPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-balance">KVKK Aydınlatma Metni</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Kişisel verilerinizin nasıl işlendiği, korunduğu ve haklarınız hakkında detaylı bilgilendirme metni
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <Card className="p-4 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Güvenli İşleme</h3>
                </Card>
                <Card className="p-4 text-center">
                  <FileCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Yasal Uyumluluk</h3>
                </Card>
                <Card className="p-4 text-center">
                  <UserCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Haklarınız Korunur</h3>
                </Card>
              </div>
            </div>

            <Card className="p-6 mb-8 bg-blue-50/50 border-blue-200">
              <p className="text-sm">
                <strong>Son Güncelleme:</strong> 7 Ekim 2024
              </p>
            </Card>

            {/* Aydınlatma Metni Hakkında */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Aydınlatma Metni Hakkında</h2>
              <Card className="p-6">
                <p className="text-muted-foreground text-pretty">
                  Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında,
                  Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi (&quot;TelchFly&quot; veya &quot;Şirket&quot;)
                  tarafından kişisel verilerinizin işlenmesi hakkında sizleri bilgilendirmek amacıyla hazırlanmıştır.
                </p>
              </Card>
            </section>

            {/* Veri Sorumlusu */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Veri Sorumlusu</h2>

              <Card className="p-6 mb-6">
                <h3 className="font-semibold mb-4">Şirket Bilgileri</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Unvan:</strong> Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi
                  </p>
                  <p>
                    <strong>Ticaret Unvanı:</strong> TelchFly
                  </p>
                  <p>
                    <strong>Adres:</strong> Ulus Şehit İbrahim Akpınar Cad. No:4 Beşiktaş/İstanbul
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">İletişim Bilgileri</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <a href="tel:08503030787" className="text-primary hover:underline">
                      0850 303 07 87
                    </a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-posta</p>
                    <a href="mailto:info@telchfly.com.tr" className="text-primary hover:underline">
                      info@telchfly.com.tr
                    </a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Web</p>
                    <a href="https://www.telchfly.com.tr" className="text-primary hover:underline">
                      www.telchfly.com.tr
                    </a>
                  </div>
                </div>
              </Card>
            </section>

            {/* İşlenen Kişisel Veriler */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">İşlenen Kişisel Veriler</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Kimlik Bilgileri</h3>
                  <p className="text-sm text-muted-foreground">
                    Ad, soyad, T.C. kimlik numarası, doğum tarihi, cinsiyet, uyruk bilgileri
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">İletişim Bilgileri</h3>
                  <p className="text-sm text-muted-foreground">Telefon numarası, e-posta adresi, adres bilgileri</p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Finansal Bilgiler</h3>
                  <p className="text-sm text-muted-foreground">
                    Kredi kartı bilgileri (güvenli ödeme sistemleri aracılığıyla), fatura bilgileri
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Seyahat Bilgileri</h3>
                  <p className="text-sm text-muted-foreground">
                    Rezervasyon detayları, seyahat tercihleri, geçmiş rezervasyon kayıtları
                  </p>
                </Card>
              </div>
            </section>

            {/* Kişisel Verilerin İşlenme Amaçları */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Kişisel Verilerin İşlenme Amaçları</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Hizmet Sunumu",
                    items: [
                      "Uçak bileti rezervasyonu ve satışı",
                      "Bilet değişiklik ve iptal işlemleri",
                      "Müşteri hizmetleri desteği",
                    ],
                  },
                  {
                    title: "Yasal Yükümlülükler",
                    items: [
                      "Vergi mevzuatı gereği kayıt tutma",
                      "MASAK bildirimleri",
                      "Havacılık otoriteleri ile paylaşım",
                    ],
                  },
                  {
                    title: "İş Geliştirme",
                    items: ["Hizmet kalitesinin artırılması", "Pazarlama faaliyetleri", "Müşteri memnuniyeti analizi"],
                  },
                  {
                    title: "Güvenlik",
                    items: ["Dolandırıcılık önleme", "Sistem güvenliği", "Risk yönetimi"],
                  },
                ].map((section, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold mb-3">{section.title}</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </section>

            {/* KVKK Kapsamındaki Haklar */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">KVKK Kapsamındaki Haklarınız</h2>

              <Card className="p-6 mb-6 bg-amber-50/50 border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm">
                    6698 sayılı KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
                  </p>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: FileCheck,
                    title: "Bilgi Talep Etme",
                    description: "Kişisel verilerinizin işlenip işlenmediğini öğrenme hakkı",
                  },
                  {
                    icon: UserCheck,
                    title: "Bilgi Alma",
                    description: "İşlenen veriler hakkında bilgi alma hakkı",
                  },
                  {
                    icon: FileCheck,
                    title: "Düzeltme",
                    description: "Yanlış verilerin düzeltilmesini talep etme hakkı",
                  },
                  {
                    icon: AlertCircle,
                    title: "Silme",
                    description: "Kişisel verilerinizin silinmesini talep etme hakkı",
                  },
                  {
                    icon: Shield,
                    title: "İtiraz",
                    description: "Veri işlemeye itiraz etme hakkı",
                  },
                  {
                    icon: FileCheck,
                    title: "Şikayet",
                    description: "Kişisel Verileri Koruma Kurulu'na şikayet hakkı",
                  },
                ].map((right, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <right.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Haklarınızı Nasıl Kullanabilirsiniz */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Haklarınızı Nasıl Kullanabilirsiniz?</h2>

              <Card className="p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-4">
                  KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="font-semibold mb-2">E-posta</div>
                    <a href="mailto:info@telchfly.com.tr" className="text-sm text-primary hover:underline">
                      info@telchfly.com.tr
                    </a>
                  </div>

                  <div className="text-center">
                    <div className="font-semibold mb-2">Posta</div>
                    <p className="text-sm text-muted-foreground">
                      Ulus Şehit İbrahim Akpınar Cad. No:4 Beşiktaş/İstanbul
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="font-semibold mb-2">Telefon</div>
                    <a href="tel:08503030787" className="text-sm text-primary hover:underline">
                      0850 303 07 87
                    </a>
                  </div>
                </div>
              </Card>
            </section>

            <p className="text-center text-sm text-muted-foreground">
              Bu aydınlatma metni son olarak 7 Ekim 2024 tarihinde güncellenmiştir.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
