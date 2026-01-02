import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { HelpCircle, Phone, Plane, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet Sık Sorulan Sorular 2026 | SSS ve Cevaplar - FlyTR",
  description:
    "AJet hakkında sık sorulan sorular. Bilet, bagaj, check-in, iptal ve değişiklik hakkında merak edilenler.",
  keywords: "ajet sss, ajet sorular, ajet yardım, ajet sıkça sorulan sorular",
}

export default function AJetSSSPage() {
  const sorular = [
    {
      kategori: "Bilet ve Rezervasyon",
      items: [
        {
          soru: "AJet biletlerinde bagaj dahil mi?",
          cevap: "AJet'in ekonomik biletlerinde genellikle sadece 8 kg kabin bagajı dahildir. Check-in bagajı çoğu tarifede ücretli olarak eklenebilir. Bilet alırken veya sonradan online olarak 15-25 kg bagaj satın alabilirsiniz."
        },
        {
          soru: "AJet bilet fiyatına neler dahil?",
          cevap: "Temel AJet biletine uçuş, 8 kg kabin bagajı ve havalimanı vergileri dahildir. Check-in bagajı, koltuk seçimi, yiyecek-içecek ve öncelikli biniş gibi hizmetler ek ücretlidir."
        },
        {
          soru: "Biletimi nasıl satın alabilirim?",
          cevap: "AJet biletinizi ajet.com web sitesi, mobil uygulama, çağrı merkezi veya FlyTR gibi yetkili acenteler üzerinden satın alabilirsiniz."
        },
      ]
    },
    {
      kategori: "Check-in İşlemleri",
      items: [
        {
          soru: "Online check-in ne zaman açılır?",
          cevap: "AJet online check-in uçuştan 24 saat önce açılır ve uçuştan 2 saat öncesine kadar yapılabilir."
        },
        {
          soru: "Online check-in ücretli mi?",
          cevap: "Hayır, online check-in ücretsizdir. Ancak havalimanı kontuarından check-in yaptırırsanız ek ücret alınabilir."
        },
        {
          soru: "Mobil biniş kartı kabul ediliyor mu?",
          cevap: "Evet, AJet uçuşlarında mobil biniş kartı (boarding pass) geçerlidir. Telefonunuza kaydedip kullanabilirsiniz."
        },
      ]
    },
    {
      kategori: "Bagaj",
      items: [
        {
          soru: "Kabin bagajı limiti nedir?",
          cevap: "AJet'te kabin bagajı limiti 1 adet, maksimum 8 kg ve 55x40x23 cm boyutlarındadır. Bu tüm tarifelerde dahildir."
        },
        {
          soru: "Ekstra bagaj nasıl satın alınır?",
          cevap: "Ekstra bagaj bilet alırken, sonradan online olarak veya havalimanında satın alınabilir. Online almak daha ekonomiktir."
        },
        {
          soru: "Fazla bagaj ücreti ne kadar?",
          cevap: "Fazla bagaj ücretleri 15 kg için yaklaşık ₺150-250, 20 kg için ₺200-350 arasında değişir. Havalimanında daha pahalıdır."
        },
      ]
    },
    {
      kategori: "İptal ve Değişiklik",
      items: [
        {
          soru: "Bilet değişikliği nasıl yapılır?",
          cevap: "Bilet değişikliği AJet web sitesi, mobil uygulama veya çağrı merkezi üzerinden yapılabilir. Değişiklik ücreti + fiyat farkı uygulanabilir."
        },
        {
          soru: "Bilet iptali yapılabilir mi?",
          cevap: "İptal koşulları tarife türüne göre değişir. Basic tarifelerde genellikle iade yoktur, esnek tarifelerde kesintili iade yapılabilir."
        },
        {
          soru: "İade ne kadar sürede yapılır?",
          cevap: "Kredi kartına yapılan iadelerde tutar 7-14 iş günü içinde hesabınıza yansır."
        },
      ]
    },
    {
      kategori: "Evcil Hayvan",
      items: [
        {
          soru: "Evcil hayvan taşıyabilir miyim?",
          cevap: "Evet, AJet uçuşlarında evcil hayvan taşınabilir. Küçük hayvanlar kabinde, büyük hayvanlar kargo bölümünde taşınır. Önceden rezervasyon ve sağlık belgesi gereklidir."
        },
        {
          soru: "Evcil hayvan taşıma ücreti ne kadar?",
          cevap: "Kabin taşıma yurtiçi uçuşlarda yaklaşık ₺500-800, kargo taşıma ₺800-1200 arasındadır."
        },
      ]
    },
    {
      kategori: "Uçuş ve Hizmetler",
      items: [
        {
          soru: "AJet uçuşlarında yemek var mı?",
          cevap: "AJet uçuşlarında ücretsiz yemek servisi yoktur. Yiyecek ve içecekler ücretli olarak satın alınabilir."
        },
        {
          soru: "Uçuş rötarı olursa ne olur?",
          cevap: "2+ saat rötar durumunda ikram, uzun gecikmelerde konaklama sağlanır. Haklarınız uçuş süresine ve gecikme nedenine göre değişir."
        },
      ]
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <HelpCircle className="h-4 w-4" />
              <span>Sık Sorulan Sorular</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet Sık Sorulan Sorular
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet hakkında en çok merak edilen sorular ve cevapları.
            </p>
          </div>
        </div>
      </section>

      {/* SSS Listesi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {sorular.map((kategori) => (
              <div key={kategori.kategori} className="mb-12">
                <h2 className="text-xl font-bold mb-6 text-blue-600 border-b pb-2">{kategori.kategori}</h2>
                <div className="space-y-4">
                  {kategori.items.map((item, index) => (
                    <Card key={index} className="p-6">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <h3 className="font-bold text-lg pr-4">{item.soru}</h3>
                          <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform shrink-0" />
                        </summary>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {item.cevap}
                        </p>
                      </details>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Sorunuzun Cevabını Bulamadınız mı?</h2>
          <p className="mb-8 opacity-90">
            Müşteri hizmetlerimiz size yardımcı olmaya hazır.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:08503030787">
              <Phone className="h-5 w-5" />
              Hemen Arayın
            </a>
          </Button>
        </div>
      </section>

      {/* İlgili Konular */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Detaylı Bilgi Sayfaları</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "AJet Bagaj Hakkı", href: "/havayollari/ajet/bagaj-hakki" },
                { title: "AJet Check-in", href: "/havayollari/ajet/check-in" },
                { title: "AJet Bilet İptali", href: "/havayollari/ajet/bilet-iptali" },
                { title: "AJet Bilet Değişikliği", href: "/havayollari/ajet/bilet-degisikligi" },
                { title: "AJet Evcil Hayvan", href: "/havayollari/ajet/evcil-hayvan" },
                { title: "AJet İletişim", href: "/havayollari/ajet/iletisim" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-blue-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-blue-600" />
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