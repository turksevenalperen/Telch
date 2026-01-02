import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Ban, CheckCircle2, AlertCircle, Clock, Phone, Plane, CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Bilet İptali 2025 | Türk Hava Yolları İptal ve İade Kuralları - FlyTR",
  description:
    "Türk Hava Yolları bilet iptal işlemleri, iade koşulları ve kesinti oranları. THY biletinizi nasıl iptal edersiniz? Güncel iptal kuralları ve ücret iadesi bilgileri.",
  keywords: "thy bilet iptali, türk hava yolları iptal, thy iade, thy bilet iptal ücreti, thy iptal koşulları",
}

export default function THYBiletIptaliPage() {
  const iptalKurallari = [
    {
      biletTipi: "Tam Esnek Bilet",
      iptalSuresi: "Uçuştan önce herhangi bir zaman",
      kesinti: "Kesintisiz tam iade",
      iade: "7-14 iş günü",
      renk: "green",
    },
    {
      biletTipi: "Yarı Esnek Bilet",
      iptalSuresi: "Uçuştan 24 saat önce",
      kesinti: "%10-25 kesinti",
      iade: "7-14 iş günü",
      renk: "blue",
    },
    {
      biletTipi: "Ekonomik Bilet",
      iptalSuresi: "Uçuştan 48 saat önce",
      kesinti: "%25-50 kesinti",
      iade: "14-21 iş günü",
      renk: "amber",
    },
    {
      biletTipi: "Promosyonlu Bilet",
      iptalSuresi: "İptal edilemez",
      kesinti: "İade yok",
      iade: "-",
      renk: "red",
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
              <Ban className="h-4 w-4" />
              <span>İptal İşlemleri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Bilet İptali ve İade Koşulları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları biletinizi iptal etmek mi istiyorsunuz? İptal koşulları, kesinti oranları ve iade süreçleri hakkında bilgi edinin.
            </p>
          </div>
        </div>
      </section>

      {/* İptal Kuralları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Bilet Tipine Göre İptal Kuralları</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {iptalKurallari.map((item, index) => (
                <Card key={index} className={`p-6 hover:shadow-lg transition-shadow border-l-4 border-l-${item.renk}-500`}>
                  <h3 className="font-bold text-lg mb-4">{item.biletTipi}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        İptal Süresi:
                      </span>
                      <span className="font-medium">{item.iptalSuresi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Kesinti:
                      </span>
                      <span className="font-semibold text-red-600">{item.kesinti}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">İade Süresi:</span>
                      <span className="font-medium">{item.iade}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İptal Adımları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">THY Bilet İptal Adımları</h2>
            
            <div className="space-y-4">
              {[
                {
                  adim: 1,
                  baslik: "FlyTR ile İletişime Geçin",
                  aciklama: "7/24 çağrı merkezimizi arayarak bilet iptal talebinizi iletin. PNR kodunuz ve yolcu bilgileriniz hazır olsun.",
                },
                {
                  adim: 2,
                  baslik: "Bilet Tipinizi Öğrenin",
                  aciklama: "Uzmanlarımız biletinizin iptal koşullarını ve varsa kesinti oranını size bildirecektir.",
                },
                {
                  adim: 3,
                  baslik: "İptal Onayı Alın",
                  aciklama: "İptal işleminiz onaylandıktan sonra e-posta ile bilgilendirileceksiniz.",
                },
                {
                  adim: 4,
                  baslik: "İade Sürecini Takip Edin",
                  aciklama: "İade tutarı, ödeme yönteminize göre 7-21 iş günü içinde hesabınıza yatırılacaktır.",
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

      {/* Önemli Bilgiler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Önemli Bilgiler</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Tam İade Durumları
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Havayolu kaynaklı uçuş iptali</li>
                  <li>• 3 saatten fazla gecikme</li>
                  <li>• Sağlık raporu ile iptal (belgeli)</li>
                  <li>• Vize reddi (belgeli)</li>
                  <li>• 1. derece yakın vefatı (belgeli)</li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  İade Yapılmayan Durumlar
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• Promosyonlu/indirimli biletler</li>
                  <li>• No-show (uçuşa gelmeme)</li>
                  <li>• Uçuş sonrası iptal talebi</li>
                  <li>• Kişisel nedenler (belgesiz)</li>
                  <li>• Grup biletlerinde özel kurallar</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">THY Biletinizi İptal Etmek mi İstiyorsunuz?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz iptal işlemlerinizi hızlı ve sorunsuz şekilde gerçekleştiriyor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="tel:08503030787">
                <Phone className="h-5 w-5" />
                İptal İçin Arayın
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benzer Konular */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">İlgili Konular</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "THY Bilet Değişikliği", href: "/havayollari/thy/bilet-degisikligi" },
                { title: "THY Yolcu Hakları", href: "/havayollari/thy/yolcu-haklari" },
                { title: "THY İletişim", href: "/havayollari/thy/iletisim" },
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
