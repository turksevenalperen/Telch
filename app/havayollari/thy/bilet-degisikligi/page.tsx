import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { RefreshCw, CheckCircle2, AlertCircle, Clock, Phone, Plane, Calendar, CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Bilet Değişikliği 2025 | Türk Hava Yolları Tarih ve İsim Değişikliği - bilethizmeti.com",
  description:
    "Türk Hava Yolları bilet değişikliği işlemleri. THY biletinizde tarih, saat veya isim değişikliği nasıl yapılır? Değişiklik ücretleri ve kuralları.",
  keywords: "thy bilet değişikliği, türk hava yolları değişiklik, thy tarih değişikliği, thy isim değişikliği, thy bilet erteleme",
}

export default function THYBiletDegisikligiPage() {
  const degisiklikTurleri = [
    {
      tur: "Tarih Değişikliği",
      aciklama: "Uçuş tarihinizi değiştirin",
      kosul: "Bilet tipine göre ücretsiz veya ücretli",
      icon: Calendar,
    },
    {
      tur: "Saat Değişikliği",
      aciklama: "Aynı gün farklı saate geçiş",
      kosul: "Genellikle ücretsiz (müsaitliğe bağlı)",
      icon: Clock,
    },
    {
      tur: "Güzergah Değişikliği",
      aciklama: "Varış noktanızı değiştirin",
      kosul: "Fark ücreti + değişiklik ücreti",
      icon: RefreshCw,
    },
    {
      tur: "İsim Düzeltme",
      aciklama: "Yazım hatası düzeltme",
      kosul: "İlk 3 karakter ücretsiz",
      icon: Plane,
    },
  ]

  const ucretTablosu = [
    {
      biletTipi: "Business Esnek",
      yurtici: "Ücretsiz",
      yurtdisi: "Ücretsiz",
    },
    {
      biletTipi: "Economy Esnek",
      yurtici: "₺200",
      yurtdisi: "€25",
    },
    {
      biletTipi: "Economy Standart",
      yurtici: "₺400",
      yurtdisi: "€50",
    },
    {
      biletTipi: "Promosyonlu",
      yurtici: "₺600 + fark",
      yurtdisi: "€75 + fark",
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <RefreshCw className="h-4 w-4" />
              <span>Değişiklik İşlemleri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Bilet Değişikliği
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Planlarınız mı değişti? Türk Hava Yolları biletinizde tarih, saat veya güzergah değişikliği yapabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Değişiklik Türleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Yapılabilecek Değişiklikler</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {degisiklikTurleri.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 shrink-0">
                      <item.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.tur}</h3>
                      <p className="text-muted-foreground mb-2">{item.aciklama}</p>
                      <p className="text-sm font-medium text-red-600">{item.kosul}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ücret Tablosu */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Değişiklik Ücretleri</h2>
            
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Bilet Tipi</th>
                      <th className="px-6 py-4 text-center">Yurtiçi</th>
                      <th className="px-6 py-4 text-center">Yurtdışı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {ucretTablosu.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{item.biletTipi}</td>
                        <td className="px-6 py-4 text-center">{item.yurtici}</td>
                        <td className="px-6 py-4 text-center">{item.yurtdisi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800 flex items-start gap-2">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <span>
                  <strong>Not:</strong> Değişiklik ücreti + varsa yeni bilet ile eski bilet arasındaki fark ücreti alınır. Fiyatlar kampanya dönemlerinde değişebilir.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değişiklik Adımları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Değişiklik Nasıl Yapılır?</h2>
            
            <div className="space-y-4">
              {[
                {
                  adim: 1,
                  baslik: "Bizi Arayın",
                  aciklama: "7/24 çağrı merkezimizi arayarak değişiklik talebinizi iletin.",
                },
                {
                  adim: 2,
                  baslik: "Alternatif Seçenekleri Öğrenin",
                  aciklama: "Uzmanlarımız size uygun alternatif uçuşları ve fiyatları sunacaktır.",
                },
                {
                  adim: 3,
                  baslik: "Fark Ücretini Ödeyin",
                  aciklama: "Varsa değişiklik ücreti ve fiyat farkını güvenli ödeme ile tamamlayın.",
                },
                {
                  adim: 4,
                  baslik: "Yeni Biletinizi Alın",
                  aciklama: "Değişiklik onaylandıktan sonra yeni biletiniz e-posta ile gönderilir.",
                },
              ].map((item) => (
                <Card key={item.adim} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold shrink-0">
                      {item.adim}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.baslik}</h3>
                      <p className="text-muted-foreground">{item.aciklama}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Önemli Kurallar */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Değişiklik Kuralları</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Yapılabilir
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Uçuştan en az 3 saat önce değişiklik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Aynı yolcu için tarih/saat değişikliği</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>İsimde küçük düzeltmeler (3 karakter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Uçuş sınıfı yükseltme</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  Yapılamaz
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Yolcu ismi tamamen değiştirme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Uçuş sonrası değişiklik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>No-show sonrası değişiklik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Bazı promosyon biletlerde değişiklik</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Biletinizde Değişiklik mi Yapmak İstiyorsunuz?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz değişiklik işlemlerinizi hızlı ve uygun fiyatla gerçekleştiriyor.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:08503030787">
              <Phone className="h-5 w-5" />
              Değişiklik İçin Arayın
            </a>
          </Button>
        </div>
      </section>

      {/* Benzer Konular */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">İlgili Konular</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "THY Bilet İptali", href: "/havayollari/thy/bilet-iptali" },
                { title: "THY Koltuk Değişimi", href: "/havayollari/thy/koltuk-degisimi" },
                { title: "THY Yolcu Hakları", href: "/havayollari/thy/yolcu-haklari" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-red-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-red-600" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
