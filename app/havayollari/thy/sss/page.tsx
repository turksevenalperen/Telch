import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { HelpCircle, Phone, Plane, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Sık Sorulan Sorular 2026 | SSS ve Cevaplar - FlyTR",
  description:
    "Türk Hava Yolları sık sorulan sorular. THY bilet, bagaj, check-in, iptal ve değişiklik hakkında merak edilenler.",
  keywords: "thy sss, türk hava yolları sorular, thy yardım, thy sıkça sorulan sorular",
}

export default function THYSSSPage() {
  const sorular = [
    {
      kategori: "Check-in ve Biniş",
      items: [
        {
          soru: "Online check-in ne zaman açılır?",
          cevap: "THY online check-in uçuştan 24 saat önce açılır ve uçuştan 90 dakika öncesine kadar yapılabilir. Web sitesi veya mobil uygulama üzerinden check-in yapabilirsiniz."
        },
        {
          soru: "Online check-in zorunlu mu?",
          cevap: "Hayır, zorunlu değildir. Havaalanındaki kiosk veya check-in kontuarlarından da işlem yapabilirsiniz. Ancak online check-in zaman kazandırır ve koltuk seçimi yapmanızı kolaylaştırır."
        },
        {
          soru: "Mobil biniş kartı geçerli mi?",
          cevap: "Evet, THY mobil uygulaması veya e-posta ile gönderilen QR kodlu biniş kartı havaalanında geçerlidir. Kağıt biniş kartına gerek yoktur."
        },
      ]
    },
    {
      kategori: "Bagaj",
      items: [
        {
          soru: "Fazla bagaj ücreti ne kadar?",
          cevap: "Fazla bagaj ücretleri güzergaha göre değişir. Yurtiçi uçuşlarda kg başına yaklaşık 5-10 USD, dış hat uçuşlarda ek parça başına 60-150 USD arasında ücretlendirilir."
        },
        {
          soru: "El bagajı boyut limiti nedir?",
          cevap: "Economy Class'ta 1 adet, maksimum 8 kg ve 55x40x23 cm boyutlarında el bagajı taşınabilir. Business Class'ta 2 adet, toplam 16 kg'a kadar izin verilir."
        },
        {
          soru: "Kayıp bagajımı nasıl bulurum?",
          cevap: "Bagajınız gelmezse havaalanındaki THY Lost & Found bölümüne başvurun. PIR (Property Irregularity Report) formu doldurun. Bagaj bulunduğunda size ulaştırılır."
        },
      ]
    },
    {
      kategori: "Bilet İşlemleri",
      items: [
        {
          soru: "Biletimi nasıl iptal edebilirim?",
          cevap: "Bilet iptali web sitesi, mobil uygulama veya 444 0 849 çağrı merkezi üzerinden yapılabilir. İade koşulları bilet tarifesine göre değişir."
        },
        {
          soru: "Uçuş tarihimi değiştirebilir miyim?",
          cevap: "Evet, çoğu bilet tipi tarih değişikliğine izin verir. Esnek biletlerde ücretsiz, promosyon biletlerde ücretli değişiklik yapılabilir. Fiyat farkı ödemeniz gerekebilir."
        },
        {
          soru: "İsim değişikliği yapılabilir mi?",
          cevap: "Küçük yazım hataları düzeltilebilir ancak tam isim değişikliği genellikle yapılamaz. Böyle durumlarda iptal edip yeni bilet almanız gerekebilir."
        },
      ]
    },
    {
      kategori: "Rötar ve İptal",
      items: [
        {
          soru: "Uçuş rötarı olursa ne olur?",
          cevap: "2 saatten uzun rötar durumunda ikram, 4+ saat gecikmelerde konaklama sağlanır. AB uçuşlarında EU261 kapsamında tazminat hakkınız olabilir."
        },
        {
          soru: "Uçuş iptal edilirse ne yapmalıyım?",
          cevap: "THY uçuşu iptal ederse alternatif uçuş veya tam iade seçeneği sunulur. Çağrı merkezi veya havaalanı kontuarından yeni uçuş ayarlanır."
        },
        {
          soru: "Aktarma uçuşumu kaçırırsam?",
          cevap: "THY kaynaklı gecikmeden aktarma kaçırılırsa bir sonraki uygun uçuşa ücretsiz transfer yapılır. Bağımsız biletlerde bu garanti yoktur."
        },
      ]
    },
    {
      kategori: "Evcil Hayvan",
      items: [
        {
          soru: "Evcil hayvan nasıl taşınır?",
          cevap: "Küçük kedi/köpekler (8 kg altı) kabinde, büyük hayvanlar kargo bölümünde taşınır. Uçuştan 48 saat önce rezervasyon ve sağlık belgesi gerekir."
        },
        {
          soru: "Evcil hayvan taşıma ücreti ne kadar?",
          cevap: "Yurtiçi kabinde 35 USD, dış hatlarda 50-70 USD. Kargo taşıma daha yüksek ücretlidir ve güzergaha göre değişir."
        },
      ]
    },
    {
      kategori: "Miles&Smiles",
      items: [
        {
          soru: "Mil nasıl kazanılır?",
          cevap: "THY ve Star Alliance uçuşlarından, anlaşmalı otellerden, araç kiralamadan ve kredi kartı harcamalarından mil kazanabilirsiniz."
        },
        {
          soru: "Millerin geçerlilik süresi nedir?",
          cevap: "Kazanılan miller 3 yıl boyunca geçerlidir. Süre dolmadan mil kazanırsanız tüm millerinizin süresi uzar."
        },
      ]
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <HelpCircle className="h-4 w-4" />
              <span>Sık Sorulan Sorular</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Sık Sorulan Sorular
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları hakkında en çok merak edilen sorular ve cevapları.
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
                <h2 className="text-xl font-bold mb-6 text-red-600 border-b pb-2">{kategori.kategori}</h2>
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
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Sorunuzun Cevabını Bulamadınız mı?</h2>
          <p className="mb-8 opacity-90">
            Müşteri hizmetlerimiz 7/24 hizmetinizdedir. Hemen arayın, yardımcı olalım.
          </p>
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:4440849">
              <Phone className="h-5 w-5" />
              444 0 849
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
                { title: "THY Bagaj Hakkı", href: "/havayollari/thy/bagaj-hakki" },
                { title: "THY Check-in", href: "/havayollari/thy/check-in" },
                { title: "THY Bilet İptali", href: "/havayollari/thy/bilet-iptali" },
                { title: "THY Bilet Değişikliği", href: "/havayollari/thy/bilet-degisikligi" },
                { title: "THY Evcil Hayvan", href: "/havayollari/thy/evcil-hayvan" },
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