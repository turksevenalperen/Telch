import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { UtensilsCrossed, Phone, Plane, Coffee, ShoppingCart, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AJet İkram Servisi 2026 | Uçak İçi Yiyecek ve İçecek - bilethizmeti.com",
  description:
    "AJet uçak içi ikram servisi. Ücretli yiyecek ve içecek seçenekleri, fiyatlar ve menü bilgileri.",
  keywords: "ajet ikram, ajet yemek, ajet uçak içi servis, ajet menü",
}

export default function AJetIkramServisiPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <UtensilsCrossed className="h-4 w-4" />
              <span>İkram Servisi</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">
              AJet İkram Servisi
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              AJet uçuşlarında yiyecek ve içecek hizmetleri ücretli olarak sunulmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* İkram Politikası */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 border-yellow-200 bg-yellow-50 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Önemli Bilgi</h3>
                  <p className="text-sm text-yellow-700">
                    AJet ekonomik bir havayolu olduğundan, uçuşlarda ücretsiz ikram servisi bulunmamaktadır. Tüm yiyecek ve içecekler ücretli olarak satın alınabilir.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-2xl font-bold mb-8 text-center">Satın Alınabilir Ürünler</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <UtensilsCrossed className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-lg">Yiyecekler</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sandviçler (₺80 - ₺120)</li>
                  <li>• Tost ve börekler (₺60 - ₺90)</li>
                  <li>• Atıştırmalıklar (₺30 - ₺50)</li>
                  <li>• Çikolata ve bisküviler (₺25 - ₺40)</li>
                  <li>• Kuruyemişler (₺40 - ₺60)</li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Coffee className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">İçecekler</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Su (₺20 - ₺30)</li>
                  <li>• Meşrubatlar (₺35 - ₺45)</li>
                  <li>• Çay ve kahve (₺30 - ₺50)</li>
                  <li>• Meyve suları (₺40 - ₺55)</li>
                  <li>• Enerji içecekleri (₺50 - ₺70)</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ödeme Yöntemleri */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Ödeme Yöntemleri</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <ShoppingCart className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Kredi Kartı</h3>
                <p className="text-sm text-muted-foreground">Uçakta kredi/banka kartı ile ödeme</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <Coffee className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Nakit</h3>
                <p className="text-sm text-muted-foreground">Türk Lirası nakit ödeme</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <Plane className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Ön Sipariş</h3>
                <p className="text-sm text-muted-foreground">Online ön sipariş ile indirim</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* İpuçları */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tasarruf İpuçları</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { baslik: "Kendi Yiyeceğinizi Getirin", aciklama: "Güvenlik kontrolünden geçebilen kuru gıdaları yanınızda getirebilirsiniz." },
                { baslik: "Su Şişesi", aciklama: "Boş su şişesi getirip güvenlik sonrası doldurun." },
                { baslik: "Ön Sipariş Verin", aciklama: "Online ön sipariş ile %10-15 indirim kazanın." },
                { baslik: "Paket Seçenekleri", aciklama: "Yiyecek+içecek paketleri tek tek almaktan daha ekonomik." },
              ].map((item) => (
                <Card key={item.baslik} className="p-4">
                  <h3 className="font-bold mb-2">{item.baslik}</h3>
                  <p className="text-sm text-muted-foreground">{item.aciklama}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Özel Diyet */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Özel Diyet Seçenekleri</h2>
            
            <Card className="p-6 border-red-200 bg-red-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Dikkat</h3>
                  <p className="text-sm text-red-700">
                    AJet&apos;te THY&apos;deki gibi özel yemek siparişi (vejetaryen, helal, glütensiz vb.) hizmeti bulunmamaktadır. Özel diyetiniz varsa kendi yiyeceklerinizi getirmeniz önerilir.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">İkram Servisi Hakkında Sorularınız mı Var?</h2>
          <p className="mb-8 opacity-90">
            Detaylı bilgi için bizi arayın.
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
            <h2 className="text-2xl font-bold mb-8">İlgili Konular</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "AJet Bagaj Hakkı", href: "/havayollari/ajet/bagaj-hakki" },
                { title: "AJet Koltuk Seçimi", href: "/havayollari/ajet/koltuk-secimi" },
                { title: "AJet Check-in", href: "/havayollari/ajet/check-in" },
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