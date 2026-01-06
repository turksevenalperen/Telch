import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { HelpCircle, Phone, CreditCard, Plane, RefreshCw, Shield, Clock, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular (S.S.S) - bilethizmeti.com",
  description:
    "Uçak bileti satın alma, iptal, iade, değişiklik ve ödeme işlemleri hakkında sık sorulan sorular ve cevapları. 7/24 müşteri desteği.",
  keywords: "sss, sık sorulan sorular, uçak bileti sss, bilet iptal, bilet iade, ödeme yöntemleri",
  openGraph: {
    title: "S.S.S - bilethizmeti.com",
    description: "Uçak bileti hakkında sık sorulan sorular ve cevapları.",
  },
  alternates: {
    canonical: "https://www.bilethizmeti.com/sss",
  },
}

const faqData = [
  {
    question: "Nasıl uçak bileti satın alabilirim?",
    answer: "Web sitemiz üzerinden online olarak veya 0850 302 1444 numaralı çağrı merkezimizi arayarak 7/24 bilet satın alabilirsiniz. Ayrıca WhatsApp üzerinden 0532 055 2555 numarasından da işlem yapabilirsiniz.",
  },
  {
    question: "Bilet fiyatlarına neler dahildir?",
    answer: "Bilet fiyatlarımız vergiler ve havalimanı ücretleri dahil toplam fiyattır. Ek hizmetler (bagaj, koltuk seçimi vb.) havayolu şirketinin politikasına göre ekstra ücretlendirilebilir.",
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Kredi kartı, banka kartı, havale/EFT ve sanal kart ile ödeme yapabilirsiniz. Tüm ödemeler 256-bit SSL şifrelemesi ile güvence altındadır.",
  },
  {
    question: "Taksit imkanı var mı?",
    answer: "Evet, anlaşmalı bankalarımız ile 2, 3, 6 ve 9 taksit seçenekleri sunmaktayız. Taksit seçenekleri bankanıza göre değişiklik gösterebilir.",
  },
  {
    question: "Biletimi iptal edebilir miyim?",
    answer: "Evet, bilet iptal işlemleri havayolu şirketinin kuralları dahilinde yapılmaktadır. İptal koşulları bilet tipine ve havayoluna göre değişmektedir. Detaylı bilgi için 0850 302 1444 numaramızı arayabilirsiniz.",
  },
  {
    question: "İade ne kadar sürede hesabıma yatar?",
    answer: "İade işlemi onaylandıktan sonra, kredi kartı iadeleri 7-14 iş günü içinde, havale/EFT iadeleri ise 3-5 iş günü içinde hesabınıza yansır.",
  },
  {
    question: "Müşteri hizmetlerine nasıl ulaşabilirim?",
    answer: "7/24 çağrı merkezimizi 0850 302 1444 veya 0532 055 2555 numaralarından arayabilirsiniz. WhatsApp üzerinden de destek alabilirsiniz.",
  },
  {
    question: "IATA ve TÜRSAB üyesi misiniz?",
    answer: "Evet, IATA (8261626) ve TÜRSAB (18270) üyesiyiz. Bu üyelikler, uluslararası standartlarda güvenilir hizmet verdiğimizin garantisidir.",
  },
  {
    question: "E-biletimi nasıl alabilirim?",
    answer: "Satın alma işlemi tamamlandığında e-biletiniz e-posta adresinize otomatik olarak gönderilir. Ayrıca hesabınızdan da erişebilirsiniz.",
  },
  {
    question: "Hangi havayolu şirketlerinin biletlerini satıyorsunuz?",
    answer: "Türk Hava Yolları, Pegasus, AnadoluJet, SunExpress ve diğer tüm yurtiçi/yurtdışı havayolu şirketlerinin biletlerini satmaktayız.",
  },
]

const faqCategories = [
  {
    icon: Plane,
    title: "Bilet Satın Alma",
    faqs: [
      {
        question: "Nasıl uçak bileti satın alabilirim?",
        answer:
          "Web sitemiz üzerinden online olarak veya 0850 302 1444 numaralı çağrı merkezimizi arayarak 7/24 bilet satın alabilirsiniz. Ayrıca WhatsApp üzerinden 0532 055 2555 numarasından da işlem yapabilirsiniz.",
      },
      {
        question: "Bilet fiyatlarına neler dahildir?",
        answer:
          "Bilet fiyatlarımız vergiler ve havalimanı ücretleri dahil toplam fiyattır. Ek hizmetler (bagaj, koltuk seçimi vb.) havayolu şirketinin politikasına göre ekstra ücretlendirilebilir.",
      },
      {
        question: "Bebek ve çocuk biletleri nasıl alınır?",
        answer:
          "0-2 yaş arası bebekler için kucak bileti, 2-12 yaş arası çocuklar için indirimli çocuk bileti düzenlenir. Detaylı bilgi için çağrı merkezimizi arayabilirsiniz.",
      },
      {
        question: "Hangi havayolu şirketlerinin biletlerini satıyorsunuz?",
        answer:
          "Türk Hava Yolları, Pegasus, AnadoluJet, SunExpress ve diğer tüm yurtiçi/yurtdışı havayolu şirketlerinin biletlerini satmaktayız.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Ödeme İşlemleri",
    faqs: [
      {
        question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
        answer:
          "Kredi kartı, banka kartı, havale/EFT ve sanal kart ile ödeme yapabilirsiniz. Tüm ödemeler 256-bit SSL şifrelemesi ile güvence altındadır.",
      },
      {
        question: "Taksit imkanı var mı?",
        answer:
          "Evet, anlaşmalı bankalarımız ile 2, 3, 6 ve 9 taksit seçenekleri sunmaktayız. Taksit seçenekleri bankanıza göre değişiklik gösterebilir.",
      },
      {
        question: "Ödeme güvenli mi?",
        answer:
          "Tüm ödeme işlemleri 256-bit SSL sertifikası ile şifrelenmektedir. 3D Secure altyapısı ile kredi kartı bilgileriniz tamamen güvende tutulmaktadır.",
      },
      {
        question: "Fatura alabilir miyim?",
        answer:
          "Evet, tüm bilet satışlarımız için e-fatura veya kurumsal fatura düzenliyoruz. Fatura talebinizi müşteri hizmetlerimize iletebilirsiniz.",
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "İptal ve İade",
    faqs: [
      {
        question: "Biletimi iptal edebilir miyim?",
        answer:
          "Evet, bilet iptal işlemleri havayolu şirketinin kuralları dahilinde yapılmaktadır. İptal koşulları bilet tipine ve havayoluna göre değişmektedir. Detaylı bilgi için 0850 302 1444 numaramızı arayabilirsiniz.",
      },
      {
        question: "İade ne kadar sürede hesabıma yatar?",
        answer:
          "İade işlemi onaylandıktan sonra, kredi kartı iadeleri 7-14 iş günü içinde, havale/EFT iadeleri ise 3-5 iş günü içinde hesabınıza yansır.",
      },
      {
        question: "Biletimi değiştirebilir miyim?",
        answer:
          "Bilet değişikliği havayolu kuralları ve bilet tipine bağlıdır. Değişiklik talepleriniz için müşteri hizmetlerimizi arayabilirsiniz. Fark ücreti uygulanabilir.",
      },
      {
        question: "İptal ücreti var mı?",
        answer:
          "İptal ücreti havayolu şirketinin politikasına ve bilet tipine göre değişmektedir. Esnek biletlerde iptal ücreti daha düşük olabilir.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Güvenlik ve Gizlilik",
    faqs: [
      {
        question: "Kişisel bilgilerim güvende mi?",
        answer:
          "Evet, tüm kişisel verileriniz KVKK kapsamında korunmaktadır. Bilgileriniz üçüncü şahıslarla paylaşılmaz ve güvenli sunucularda saklanır.",
      },
      {
        question: "Site güvenli mi?",
        answer:
          "Web sitemiz SSL sertifikası ile korunmaktadır. Tarayıcınızın adres çubuğunda kilit simgesini görebilirsiniz. Tüm veriler şifrelenmiş olarak iletilir.",
      },
      {
        question: "IATA ve TÜRSAB üyesi misiniz?",
        answer:
          "Evet, IATA (8261626) ve TÜRSAB (18270) üyesiyiz. Bu üyelikler, uluslararası standartlarda güvenilir hizmet verdiğimizin garantisidir.",
      },
    ],
  },
  {
    icon: Clock,
    title: "Destek ve İletişim",
    faqs: [
      {
        question: "Müşteri hizmetlerine nasıl ulaşabilirim?",
        answer:
          "7/24 çağrı merkezimizi 0850 302 1444 veya 0532 055 2555 numaralarından arayabilirsiniz. WhatsApp üzerinden de destek alabilirsiniz.",
      },
      {
        question: "Çalışma saatleriniz nedir?",
        answer:
          "Çağrı merkezimiz 7 gün 24 saat hizmet vermektedir. Hafta sonları ve resmi tatillerde de ulaşabilirsiniz.",
      },
      {
        question: "Online check-in yapabilir miyim?",
        answer:
          "Online check-in işlemi havayolu şirketinin web sitesi veya mobil uygulaması üzerinden yapılmaktadır. Uçuşunuzdan 24-48 saat önce check-in açılır.",
      },
    ],
  },
  {
    icon: FileText,
    title: "Bilet ve Seyahat",
    faqs: [
      {
        question: "E-biletimi nasıl alabilirim?",
        answer:
          "Satın alma işlemi tamamlandığında e-biletiniz e-posta adresinize otomatik olarak gönderilir. Ayrıca hesabınızdan da erişebilirsiniz.",
      },
      {
        question: "Bagaj hakkım ne kadar?",
        answer:
          "Bagaj hakkı havayolu şirketi ve bilet tipine göre değişir. Genel olarak el bagajı 8 kg, kayıtlı bagaj 15-23 kg arasındadır.",
      },
      {
        question: "Uçuş saati değişirse ne olur?",
        answer:
          "Havayolu şirketi kaynaklı uçuş saati değişikliklerinde SMS ve e-posta ile bilgilendirilirsiniz. Uygun olmayan değişikliklerde ücretsiz değişiklik veya iade hakkınız bulunur.",
      },
      {
        question: "Aktarmalı uçuşlarda bagajımı almam gerekir mi?",
        answer:
          "Aynı havayolu şirketinin iç hat-dış hat bağlantılı uçuşlarında bagajınız genellikle otomatik aktarılır. Farklı havayollarında bagajınızı almanız gerekebilir.",
      },
    ],
  },
]

// FAQ Schema for Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://www.bilethizmeti.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sık Sorulan Sorular",
      item: "https://www.bilethizmeti.com/sss",
    },
  ],
}

function StarRating({ rating }: { rating: number }) {
  return null
}

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema - Google'da Zengin Snippet için */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen">
        <SiteHeader />

        {/* Breadcrumb Navigation */}
        <nav className="bg-accent/30 py-3 border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary">
                  Ana Sayfa
                </a>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-primary font-medium">Sık Sorulan Sorular</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-b from-accent/30 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <HelpCircle className="h-4 w-4" />
                <span>Yardım Merkezi</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Sık Sorulan Sorular
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Uçak bileti satın alma, iptal, iade ve ödeme işlemleri hakkında merak ettikleriniz
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-8 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Sorularınız için:</span>
              </div>
              <a href="tel:08503021444" className="text-xl font-bold hover:underline">
                0850 302 1444
              </a>
              <span className="hidden md:inline">|</span>
              <a href="tel:05320552555" className="text-xl font-bold hover:underline">
                0532 055 2555
              </a>
              <span className="text-sm opacity-90">(7/24 Destek)</span>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-3 border-b pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <details
                        key={faqIndex}
                        className="group rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
                      >
                        <summary className="flex cursor-pointer items-center justify-between font-medium">
                          <span className="pr-4">{faq.question}</span>
                          <span className="shrink-0 text-primary group-open:rotate-180 transition-transform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                        </summary>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Hala Sorunuz mu Var?</h2>
              <p className="text-muted-foreground mb-8">
                Aradığınız cevabı bulamadıysanız, 7/24 müşteri hizmetlerimiz size yardımcı olmaktan mutluluk duyar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:08503021444"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Hemen Ara: 0850 302 1444
                </a>
                <a
                  href="https://wa.me/905320552555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  WhatsApp ile Yazın
                </a>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
        <CallPopup />
      </div>
    </>
  )
}
