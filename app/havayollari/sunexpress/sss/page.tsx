import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { HelpCircle, Phone, Plane, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SunExpress Sık Sorulan Sorular 2026 | SSS - FlyTR",
  description:
    "SunExpress hakkında sık sorulan sorular ve cevapları. Bagaj, check-in, bilet değişikliği ve daha fazlası.",
  keywords: "sunexpress sss, sunexpress sık sorulan sorular, sunexpress yardım",
}

const sssData = [
  {
    kategori: "Bagaj",
    sorular: [
      {
        soru: "SunExpress'te kabin bagajı kaç kg?",
        cevap: "Kabin bagajı maksimum 8 kg olup, ölçüleri 55x40x23 cm'yi geçmemelidir. SunLight tarifede yalnızca küçük el çantası hakkı vardır."
      },
      {
        soru: "SunExpress biletlerinde bagaj dahil mi?",
        cevap: "SunLight tarifede check-in bagajı dahil değildir. SunEco'da genellikle 20 kg, SunClassic/SunPremium'da 25-30 kg bagaj hakkı bulunur."
      },
      {
        soru: "Fazla bagaj ücreti ne kadar?",
        cevap: "Fazla bagaj ücretleri rota ve zamana göre değişir. Online önceden eklemek havalimanından eklemekten daha ekonomiktir."
      }
    ]
  },
  {
    kategori: "Check-in",
    sorular: [
      {
        soru: "Online check-in ne zaman açılır?",
        cevap: "SunExpress online check-in uçuştan yaklaşık 36-24 saat önce açılır."
      },
      {
        soru: "Online check-in ücretli mi?",
        cevap: "Hayır, online check-in ücretsizdir. Ancak bazı tarifelerde havalimanı check-in ücreti olabilir."
      },
      {
        soru: "Mobil biniş kartı kullanabilir miyim?",
        cevap: "Evet, SunExpress mobil uygulaması üzerinden dijital biniş kartı alabilirsiniz."
      }
    ]
  },
  {
    kategori: "Bilet İşlemleri",
    sorular: [
      {
        soru: "Bilet değişikliği nasıl yapılır?",
        cevap: "SunExpress web sitesi, mobil uygulama veya çağrı merkezi üzerinden değişiklik yapılabilir. Değişiklik ücreti + fark alınabilir."
      },
      {
        soru: "Bilet iptali yapabilir miyim?",
        cevap: "Tarife tipine göre değişir. SunLight'ta iade yoktur, diğer tarifelerde kesinti ile iade mümkün olabilir."
      },
      {
        soru: "İsim düzeltmesi yapılabilir mi?",
        cevap: "Küçük yazım hataları düzeltilebilir, tam isim değişikliği genellikle mümkün değildir."
      }
    ]
  },
  {
    kategori: "Evcil Hayvan",
    sorular: [
      {
        soru: "Evcil hayvan taşıma ücreti ne kadar?",
        cevap: "Evcil hayvan taşıma ücretli bir hizmettir. Ücret rota ve taşıma tipine göre değişir."
      },
      {
        soru: "Kabinde hangi hayvanlar taşınabilir?",
        cevap: "Küçük kedi ve köpekler taşıma çantası ile birlikte max 8 kg olmak üzere kabinde taşınabilir."
      },
      {
        soru: "Evcil hayvan için hangi belgeler gerekli?",
        cevap: "Sağlık belgesi, aşı kartı (kuduz aşısı zorunlu) ve mikroçip bilgisi gereklidir."
      }
    ]
  }
]

export default function SunExpressSSSPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
              <HelpCircle className="h-4 w-4" />
              <span>Sık Sorulan Sorular</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              SunExpress SSS
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              SunExpress hakkında merak ettiğiniz tüm soruların cevapları.
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
                <h2 className="text-2xl font-bold mb-6 text-amber-600">{kategori.kategori}</h2>
                <div className="space-y-4">
                  {kategori.sorular.map((item, index) => (
                    <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <h3 className="font-bold text-lg pr-4">{item.soru}</h3>
                          <ChevronDown className="h-5 w-5 text-amber-500 shrink-0 transition-transform group-open:rotate-180" />
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
      <section className="py-16 bg-amber-500 text-white">
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

      {/* İlgili Sayfalar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">İlgili Sayfalar</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "SunExpress Bagaj Hakkı", href: "/havayollari/sunexpress/bagaj-hakki" },
                { title: "SunExpress Check-in", href: "/havayollari/sunexpress/check-in" },
                { title: "SunExpress İletişim", href: "/havayollari/sunexpress/iletisim" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="p-4 hover:shadow-md transition-shadow hover:border-amber-200">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-amber-500" />
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