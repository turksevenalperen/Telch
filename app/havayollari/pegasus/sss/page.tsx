import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { HelpCircle, Phone, Plane, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pegasus Sık Sorulan Sorular 2026 | SSS - bilethizmeti.com",
  description:
    "Pegasus hakkında sık sorulan sorular ve cevapları. Bagaj, check-in, bilet değişikliği ve daha fazlası.",
  keywords: "pegasus sss, pegasus sık sorulan sorular, pegasus yardım, pegasus sorular",
}

const sssData = [
  {
    kategori: "Bagaj",
    sorular: [
      {
        soru: "Pegasus'ta kabin bagajı kaç kg?",
        cevap: "Tüm tarifelerde 8 kg el bagajı hakkınız bulunmaktadır. Boyut sınırı 40x30x20 cm (küçük çanta) + 55x40x20 cm (kabin çantası) şeklindedir."
      },
      {
        soru: "Checked bagaj ücreti ne kadar?",
        cevap: "Online alımda 15 kg bagaj yaklaşık 150-300 TL, 20 kg bagaj 200-400 TL arasındadır. Havalimanında alım daha pahalıdır."
      },
      {
        soru: "Fazla bagaj ücreti nasıl hesaplanır?",
        cevap: "Fazla bagaj kg başına ücretlendirilir. Online önceden eklemek havalimanından eklemekten daha ekonomiktir."
      }
    ]
  },
  {
    kategori: "Check-in",
    sorular: [
      {
        soru: "Online check-in ne zaman açılır?",
        cevap: "Pegasus online check-in uçuştan 24 saat önce açılır ve uçuştan 2 saat öncesine kadar yapılabilir."
      },
      {
        soru: "Havalimanı check-in ücreti var mı?",
        cevap: "Light tarifede havalimanı check-in ücreti uygulanabilir. Online check-in yaparak bu ücretten kaçınabilirsiniz."
      },
      {
        soru: "Mobil biniş kartı geçerli mi?",
        cevap: "Evet, Pegasus mobil uygulaması veya e-posta ile gelen biniş kartı tüm iç hat uçuşlarda geçerlidir."
      }
    ]
  },
  {
    kategori: "Bilet İşlemleri",
    sorular: [
      {
        soru: "Biletimi değiştirebilir miyim?",
        cevap: "Evet, tarife tipine göre değişiklik yapılabilir. Light tarifede yüksek ücret, Flex tarifede ücretsiz değişiklik hakkı vardır."
      },
      {
        soru: "Bilet iptali nasıl yapılır?",
        cevap: "flypgs.com üzerinden veya çağrı merkezi aracılığıyla iptal yapılabilir. İade koşulları tarife tipine göre değişir."
      },
      {
        soru: "İsim değişikliği yapılabilir mi?",
        cevap: "Küçük yazım hataları düzeltilebilir ancak tam isim değişikliği genellikle mümkün değildir."
      }
    ]
  },
  {
    kategori: "Uçuş",
    sorular: [
      {
        soru: "Uçakta yemek var mı?",
        cevap: "Pegasus uçuşlarında ikram ücretlidir. Uçak içi menüden satın alabilir veya önceden sipariş verebilirsiniz."
      },
      {
        soru: "Koltuk seçimi ücretli mi?",
        cevap: "Çoğu tarifede ücretlidir. Sadece Flex tarifede standart koltuk seçimi ücretsizdir. Extra legroom her zaman ücretlidir."
      },
      {
        soru: "Evcil hayvan taşıyabilir miyim?",
        cevap: "Evet, kabinde 8 kg'a kadar (taşıma çantası dahil), kargoda daha büyük hayvanlar taşınabilir. Önceden rezervasyon gereklidir."
      }
    ]
  },
  {
    kategori: "BolBol Program",
    sorular: [
      {
        soru: "BolBol nedir?",
        cevap: "Pegasus'un sadakat programıdır. Uçuşlardan ve partner harcamalardan puan kazanır, bilet veya hizmetlerde kullanabilirsiniz."
      },
      {
        soru: "Puanlar ne zaman yüklenir?",
        cevap: "Uçuş tamamlandıktan sonra 72 saat içinde BolBol hesabınıza yüklenir."
      },
      {
        soru: "Puanlarımın geçerlilik süresi var mı?",
        cevap: "Evet, puanlar kazanıldıktan sonra 3 yıl içinde kullanılmazsa geçerliliğini yitirir."
      }
    ]
  }
]

export default function PegasusSSSPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              <HelpCircle className="h-4 w-4" />
              <span>Sık Sorulan Sorular</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              Pegasus SSS
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Pegasus hakkında merak ettiğiniz tüm sorularin cevapları burada.
            </p>
          </div>
        </div>
      </section>

      {/* SSS Kategorileri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sssData.map((kategori) => (
              <div key={kategori.kategori}>
                <h2 className="text-2xl font-bold mb-6 text-yellow-600">{kategori.kategori}</h2>
                <div className="space-y-4">
                  {kategori.sorular.map((item, index) => (
                    <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <h3 className="font-bold text-lg pr-4">{item.soru}</h3>
                          <ChevronDown className="h-5 w-5 text-yellow-600 shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="mt-4 text-muted-foreground pt-4 border-t">
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
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Sorunuzun Cevabını Bulamadınız mı?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır.
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
            <h2 className="text-2xl font-bold mb-8">İlgili Sayfalar</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Pegasus Bagaj Hakkı", href: "/havayollari/pegasus/bagaj-hakki" },
                { title: "Pegasus Check-in", href: "/havayollari/pegasus/check-in" },
                { title: "Pegasus İletişim", href: "/havayollari/pegasus/iletisim" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-yellow-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-yellow-600" />
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