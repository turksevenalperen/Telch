import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Armchair, CheckCircle2, AlertCircle, Info, Phone, Plane, Crown, Sparkles, DoorOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Koltuk Seçimi 2025 | Türk Hava Yolları Koltuk Rehberi - bilethizmeti.com",
  description:
    "Türk Hava Yolları koltuk seçimi rehberi. THY uçuşlarında standart, extra legroom ve acil çıkış koltukları. Koltuk seçim ücretleri ve kuralları.",
  keywords: "thy koltuk seçimi, türk hava yolları koltuk, thy extra legroom, thy acil çıkış koltuğu, thy koltuk ücreti",
}

export default function THYKoltukSecimiPage() {
  const koltukTipleri = [
    {
      tip: "Standart Koltuklar",
      aciklama: "Ekonomi sınıfı standart koltuklar",
      ucret: "Bazı tarifelerde ücretsiz",
      ozellikler: ["Standart diz mesafesi (79 cm)", "Koltuk genişliği: 43-46 cm", "Eğim kapasitesi: 15°"],
      icon: Armchair,
      renk: "blue",
    },
    {
      tip: "Extra Legroom Koltuklar",
      aciklama: "Daha fazla bacak mesafesi",
      ucret: "Ücretli (₺200-600)",
      ozellikler: ["Geniş diz mesafesi (89-97 cm)", "Daha rahat seyahat", "Ön sıra veya kanat üstü"],
      icon: Sparkles,
      renk: "purple",
    },
    {
      tip: "Acil Çıkış Koltukları",
      aciklama: "En geniş bacak mesafesi",
      ucret: "Ücretli (₺300-800)",
      ozellikler: ["Maksimum bacak mesafesi", "18 yaş üstü zorunlu", "İngilizce/Türkçe bilmeli", "Fiziksel yeterlilik gerekli"],
      icon: DoorOpen,
      renk: "green",
    },
    {
      tip: "Business Class",
      aciklama: "Premium konfor deneyimi",
      ucret: "Ücretsiz seçim",
      ozellikler: ["180° yatabilen koltuklar", "Direkt koridor erişimi", "Kişisel ekran ve priz", "Premium ikram servisi"],
      icon: Crown,
      renk: "amber",
    },
  ]

  const ucretTablosu = [
    { rota: "Yurtiçi Uçuşlar", standart: "Ücretsiz*", extraLeg: "₺150-300", acilCikis: "₺200-400" },
    { rota: "Avrupa Uçuşları", standart: "Ücretsiz*", extraLeg: "€15-30", acilCikis: "€20-40" },
    { rota: "Uzak Mesafe", standart: "Ücretsiz*", extraLeg: "$25-50", acilCikis: "$30-60" },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <Armchair className="h-4 w-4" />
              <span>Koltuk Seçimi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Koltuk Seçimi Rehberi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları uçuşlarınızda size en uygun koltuğu seçin. Standart, extra legroom ve acil çıkış koltukları hakkında bilgi edinin.
            </p>
          </div>
        </div>
      </section>

      {/* Koltuk Tipleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Tipleri ve Özellikleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {koltukTipleri.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-${item.renk}-100 shrink-0`}>
                      <item.icon className={`h-6 w-6 text-${item.renk}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{item.tip}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{item.aciklama}</p>
                      <p className="text-red-600 font-semibold text-sm mb-3">{item.ucret}</p>
                      <ul className="space-y-1">
                        {item.ozellikler.map((ozellik, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                            <span>{ozellik}</span>
                          </li>
                        ))}
                      </ul>
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
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Seçim Ücretleri</h2>
            
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Uçuş Tipi</th>
                      <th className="px-6 py-4 text-center">Standart</th>
                      <th className="px-6 py-4 text-center">Extra Legroom</th>
                      <th className="px-6 py-4 text-center">Acil Çıkış</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {ucretTablosu.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{item.rota}</td>
                        <td className="px-6 py-4 text-center text-green-600">{item.standart}</td>
                        <td className="px-6 py-4 text-center">{item.extraLeg}</td>
                        <td className="px-6 py-4 text-center">{item.acilCikis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Bazı promosyon ve ekonomik tarifelerde standart koltuk seçimi ücretli olabilir.
            </p>
          </div>
        </div>
      </section>

      {/* Koltuk Seçim Adımları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Nasıl Seçilir?</h2>
            
            <div className="space-y-4">
              {[
                {
                  adim: 1,
                  baslik: "Bilet Satın Alırken",
                  aciklama: "Bilet satın alma sürecinde koltuk seçimi adımında tercih yapabilirsiniz.",
                },
                {
                  adim: 2,
                  baslik: "Online Check-in Sırasında",
                  aciklama: "Uçuştan 24 saat önce açılan online check-in'de koltuk değişikliği yapabilirsiniz.",
                },
                {
                  adim: 3,
                  baslik: "Rezervasyon Yönetimi",
                  aciklama: "THY web sitesi veya mobil uygulamadan 'Rezervasyonlarım' bölümünden seçim yapın.",
                },
                {
                  adim: 4,
                  baslik: "Çağrı Merkezi",
                  aciklama: "bilethizmeti.com müşteri hizmetlerini arayarak koltuk tercihinizi belirtebilirsiniz.",
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

      {/* Acil Çıkış Koltuğu Şartları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Acil Çıkış Koltuğu Şartları</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Gerekli Şartlar
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>18 yaşından büyük olmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Türkçe veya İngilizce anlayabilmek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Fiziksel olarak yeterli olmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Acil durumda yardım edebilecek olmak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Görme ve işitme yeterliliği</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  Oturamayacak Yolcular
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>18 yaş altı yolcular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Hamile yolcular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Bebek veya çocukla seyahat edenler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Hareket kısıtlılığı olanlar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Evcil hayvanla seyahat edenler</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* İpuçları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Koltuk Seçimi İpuçları</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Erken Seçim Yapın</h4>
                    <p className="text-sm text-muted-foreground">Popüler koltuklar hızla dolar, bilet alır almaz seçim yapın.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Kanat Üstü Daha Sakin</h4>
                    <p className="text-sm text-muted-foreground">Türbülanstan etkilenmek istemiyorsanız kanat üstü tercih edin.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Ön Sıralar Hızlı Çıkış</h4>
                    <p className="text-sm text-muted-foreground">Uçaktan hızlı inmek istiyorsanız ön sıraları tercih edin.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Aile ile Yan Yana</h4>
                    <p className="text-sm text-muted-foreground">Aile ile seyahatte erken rezervasyonla yan yana koltuk garantileyin.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Koltuk Seçiminde Yardıma mı İhtiyacınız Var?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz size en uygun koltuğu bulmanızda yardımcı olabilir.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:08503030787">
              <Phone className="h-5 w-5" />
              Hemen Arayın
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
                { title: "THY Check-in İşlemleri", href: "/havayollari/thy/check-in" },
                { title: "THY Bagaj Hakkı", href: "/havayollari/thy/bagaj-hakki" },
                { title: "THY Bilet Değişikliği", href: "/havayollari/thy/bilet-degisikligi" },
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
