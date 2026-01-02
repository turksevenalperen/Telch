import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { UtensilsCrossed, Phone, Plane, Coffee, Wine, Leaf, Baby, Clock, ChefHat } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "THY İkram Servisi 2026 | Uçak İçi Yemek ve İçecekler - FlyTR",
  description:
    "Türk Hava Yolları uçak içi ikram servisi. Ekonomi ve Business Class yemek menüleri, özel diyet seçenekleri ve Flying Chef hizmeti.",
  keywords: "thy yemek, türk hava yolları ikram, thy menü, uçak yemeği, thy özel yemek",
}

export default function THYIkramServisiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              <UtensilsCrossed className="h-4 w-4" />
              <span>İkram Servisi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              THY Uçak İçi İkram Servisi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Türk mutfağının lezzetlerini gökyüzünde deneyimleyin. Ödüllü ikram hizmetimiz.
            </p>
          </div>
        </div>
      </section>

      {/* Sınıflara Göre İkram */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Kabin Sınıflarına Göre İkram</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 shrink-0">
                    <Coffee className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Economy Class</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sıcak ana yemek (2+ saat uçuşlarda)</li>
                      <li>• Soğuk sandviç/atıştırmalık (kısa uçuşlar)</li>
                      <li>• Çay, kahve, meşrubat</li>
                      <li>• Yurtiçi: Simit, poğaça servisi</li>
                      <li>• Uzun mesafe: 2 öğün yemek</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 shrink-0">
                    <ChefHat className="h-7 w-7 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Business Class</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Gurme à la carte menü</li>
                      <li>• Flying Chef servisi (uzun uçuşlar)</li>
                      <li>• Şarap ve içki seçenekleri</li>
                      <li>• Türk ve dünya mutfağı</li>
                      <li>• Do&Co kalitesinde sunum</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Özel Yemek Seçenekleri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Özel Yemek Seçenekleri</h2>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Leaf, renk: "green", baslik: "Vejetaryen", aciklama: "Ovo-lacto, vegan, Hint vejetaryen" },
                { icon: UtensilsCrossed, renk: "amber", baslik: "Dini Yemekler", aciklama: "Helal, Koşer, Hindu menüleri" },
                { icon: Baby, renk: "pink", baslik: "Çocuk Menüsü", aciklama: "2-12 yaş arası çocuklar için" },
                { icon: Coffee, renk: "orange", baslik: "Bebek Maması", aciklama: "0-2 yaş bebekler için" },
                { icon: UtensilsCrossed, renk: "blue", baslik: "Diyet Yemekleri", aciklama: "Diyabetik, düşük kalorili, tuzsuz" },
                { icon: UtensilsCrossed, renk: "purple", baslik: "Alerji Menüsü", aciklama: "Glütensiz, laktoz ve fıstık içermeyen" },
              ].map((item) => (
                <Card key={item.baslik} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-${item.renk}-100 shrink-0`}>
                      <item.icon className={`h-5 w-5 text-${item.renk}-600`} />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.baslik}</h3>
                      <p className="text-sm text-muted-foreground">{item.aciklama}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-4 border-yellow-200 bg-yellow-50">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-600 shrink-0" />
                <p className="text-sm text-yellow-800">
                  <strong>Önemli:</strong> Özel yemek talepleri uçuştan en az 24-48 saat önce web sitesi veya çağrı merkezi üzerinden yapılmalıdır.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Flying Chef */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Flying Chef Hizmeti</h2>
            
            <Card className="p-6 border-red-200">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 shrink-0 mx-auto md:mx-0">
                  <ChefHat className="h-10 w-10 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-center md:text-left">Gökyüzünde Şef Deneyimi</h3>
                  <p className="text-muted-foreground mb-4">
                    Business Class uzun mesafe uçuşlarında profesyonel şeflerimiz size özel yemek hazırlar ve servis yapar.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• İstanbul çıkışlı 8+ saat uçuşlarda</li>
                    <li>• Canlı yemek hazırlama</li>
                    <li>• Kişiselleştirilmiş menü</li>
                    <li>• Türk ve uluslararası lezzetler</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* İçecekler */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">İçecek Seçenekleri</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-brown-600" />
                  Alkolsüz İçecekler
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Türk çayı ve kahvesi</li>
                  <li>• Nescafe ve espresso</li>
                  <li>• Meyve suları</li>
                  <li>• Meşrubatlar</li>
                  <li>• Su (gazlı/gazsız)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Wine className="h-5 w-5 text-purple-600" />
                  Alkollü İçecekler (Business)
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Türk şarapları</li>
                  <li>• Uluslararası şaraplar</li>
                  <li>• Rakı</li>
                  <li>• Bira</li>
                  <li>• Kokteyl seçenekleri</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Özel Yemek Talebi Oluşturun</h2>
          <p className="mb-8 opacity-90">
            Diyet veya tercihlerinize uygun yemek siparişi için bizi arayın.
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
            <h2 className="text-2xl font-bold mb-8">İlgili Konular</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "THY Eğlence Sistemi", href: "/havayollari/thy/eglence-sistemi" },
                { title: "THY Koltuk Seçimi", href: "/havayollari/thy/koltuk-secimi" },
                { title: "THY Bagaj Hakkı", href: "/havayollari/thy/bagaj-hakki" },
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