import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Luggage, CheckCircle2, AlertCircle, Info, Phone, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY Bagaj Hakkı 2025 | Türk Hava Yolları Bagaj Kuralları - FlyTR",
  description:
    "Türk Hava Yolları bagaj hakları, ağırlık limitleri ve boyut bilgileri. THY yurtiçi ve yurtdışı uçuşlarda kaç kg bagaj hakkınız var? Güncel bagaj kuralları.",
  keywords: "thy bagaj hakkı, türk hava yolları bagaj, thy bagaj kg, thy bagaj ücreti, thy el bagajı, thy kabin bagajı",
}

export default function THYBagajHakkiPage() {
  const bagajHaklari = [
    {
      sinif: "Economy Class (İç Hat)",
      kayitli: "15-20 kg",
      el: "8 kg (1 adet)",
      renk: "blue",
    },
    {
      sinif: "Economy Class (Dış Hat)",
      kayitli: "23 kg (1-2 parça)",
      el: "8 kg (1 adet)",
      renk: "green",
    },
    {
      sinif: "Business Class",
      kayitli: "32 kg (parça başı)",
      el: "16 kg (2 adet)",
      renk: "purple",
    },
    {
      sinif: "Miles&Smiles Elite/Elite Plus",
      kayitli: "+1 parça ekstra",
      el: "8 kg",
      renk: "amber",
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
              <Luggage className="h-4 w-4" />
              <span>Bagaj Bilgileri</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Bagaj Hakkı ve Kuralları
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk Hava Yolları ile seyahatinizde bagaj haklarınızı öğrenin. Yurtiçi ve yurtdışı uçuşlarda geçerli güncel bagaj limitleri.
            </p>
          </div>
        </div>
      </section>

      {/* Bagaj Hakları Tablosu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Sınıflara Göre Bagaj Hakları</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {bagajHaklari.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-4">{item.sinif}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Kayıtlı Bagaj:</span>
                      <span className="font-semibold text-red-600">{item.kayitli}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">El Bagajı:</span>
                      <span className="font-semibold">{item.el}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* El Bagajı Detayları */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">El Bagajı (Kabin Bagajı) Kuralları</h2>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    Boyut Limitleri
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Maksimum boyut: 55 x 40 x 23 cm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Ekonomi: 1 adet, maksimum 8 kg</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Business: 2 adet, toplam 16 kg</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>+1 kişisel eşya (el çantası, laptop vb.)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Kişisel Eşya
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Laptop çantası veya el çantası</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Maksimum boyut: 40 x 30 x 15 cm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Koltuk altına sığmalıdır</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ekstra Bagaj Ücretleri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Fazla Bagaj Ücretleri</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Luggage className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Yurtiçi Uçuşlar</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₺150/kg</p>
                <p className="text-sm text-muted-foreground">Fazla bagaj ücreti</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Luggage className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Avrupa Uçuşları</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">€15/kg</p>
                <p className="text-sm text-muted-foreground">Fazla bagaj ücreti</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Luggage className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Uzak Mesafe</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">$20/kg</p>
                <p className="text-sm text-muted-foreground">Fazla bagaj ücreti</p>
              </Card>
            </div>
            
            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800 flex items-start gap-2">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <span>
                  <strong>Önemli:</strong> Fazla bagaj ücretleri destinasyona ve bilet sınıfına göre değişiklik gösterebilir. Güncel fiyatlar için bizimle iletişime geçin.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bagaj Hakkında Sorularınız mı Var?</h2>
          <p className="mb-8 opacity-90">
            Uzman ekibimiz bagaj kuralları hakkında size yardımcı olmaya hazır.
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
                { title: "THY Koltuk Seçimi", href: "/havayollari/thy/koltuk-secimi" },
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
