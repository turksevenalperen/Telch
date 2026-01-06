import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CallPopup } from "@/components/call-popup"
import { Shield, Lock, Eye, Settings } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Çerez Politikası - bilethizmeti.com | KVKK ve GDPR Uyumlu Gizlilik",
  description:
    "bilethizmeti.com çerez politikası. Web sitemizde kullanılan çerezler, veri güvenliği ve gizlilik uygulamalarımız hakkında detaylı bilgi. KVKK ve GDPR uyumlu.",
  keywords: "çerez politikası, cookie policy, gizlilik, veri güvenliği, KVKK, GDPR, kişisel veri koruma",
  openGraph: {
    title: "Çerez Politikası - bilethizmeti.com",
    description: "Web sitemizde kullanılan çerezler ve gizlilik uygulamalarımız hakkında şeffaf bilgilendirme.",
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-accent/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span>Son Güncelleme: 7 Ekim 2024</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-balance">Çerez Politikası</h1>

            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Web sitemizde kullanılan çerezler ve gizlilik uygulamalarımız hakkında detaylı bilgilendirme metni
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <Lock className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Güvenli Çerezler</div>
              <div className="text-sm opacity-90">SSL şifreli koruma</div>
            </div>
            <div>
              <Eye className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Şeffaf Politika</div>
              <div className="text-sm opacity-90">Açık bilgilendirme</div>
            </div>
            <div>
              <Settings className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Kullanıcı Kontrolü</div>
              <div className="text-sm opacity-90">Tam kontrol sizde</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Giriş */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Giriş</h2>
              <p className="text-muted-foreground mb-4 text-pretty">
                bilethizmeti.com olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyor ve kişisel
                verilerinin korunması konusunda azami özen gösteriyoruz. Bu çerez politikası, www.bilethizmeti.com web
                sitesinde kullanılan çerezler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
              </p>
              <p className="text-muted-foreground text-pretty">
                Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma
                Tüzüğü (GDPR) kapsamında hazırlanmış olup, çerez kullanımımız hakkında şeffaf bilgi sunmayı
                amaçlamaktadır.
              </p>
            </Card>

            {/* Çerez Nedir */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Çerez Nedir?</h2>
              <p className="text-muted-foreground text-pretty">
                Çerezler (Cookies), web sitelerini ziyaret ettiğinizde tarayıcınız tarafından cihazınızda saklanan küçük
                metin dosyalarıdır. Bu dosyalar, web sitesinin daha iyi çalışmasını, kullanıcı deneyiminin
                geliştirilmesini ve site performansının analiz edilmesini sağlar.
              </p>
            </Card>

            {/* Çerez Türleri */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Kullandığımız Çerez Türleri</h2>

              <div className="grid gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Zorunlu Çerezler</h3>
                  <p className="text-muted-foreground mb-3 text-pretty">
                    Web sitemizin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir. Bu çerezler olmadan
                    web sitesi düzgün çalışamaz.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Güvenlik ve kimlik doğrulama</li>
                    <li>Oturum yönetimi</li>
                    <li>Form verilerinin korunması</li>
                    <li>Temel site işlevselliği</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Performans Çerezleri</h3>
                  <p className="text-muted-foreground mb-3 text-pretty">
                    Web sitemizin performansını analiz etmek ve iyileştirmek için kullanılan çerezlerdir. Bu çerezler
                    anonim bilgi toplar.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Sayfa görüntüleme istatistikleri</li>
                    <li>Site hızı ve performans analizi</li>
                    <li>Hata raporlama</li>
                    <li>Kullanıcı davranış analizi</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">İşlevsel Çerezler</h3>
                  <p className="text-muted-foreground mb-3 text-pretty">
                    Web sitesinin gelişmiş özelliklerini ve kişiselleştirme seçeneklerini sağlayan çerezlerdir.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Dil ve bölge tercihleri</li>
                    <li>Arama geçmişi</li>
                    <li>Kullanıcı arayüzü tercihleri</li>
                    <li>Özelleştirilmiş içerik sunumu</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Pazarlama Çerezleri</h3>
                  <p className="text-muted-foreground mb-3 text-pretty">
                    Size daha alakalı reklamlar göstermek ve pazarlama kampanyalarımızın etkinliğini ölçmek için
                    kullanılan çerezlerdir. Bu çerezler için onayınız gereklidir.
                  </p>
                </Card>
              </div>
            </div>

            {/* Çerez Yönetimi */}
            <Card className="p-8 mb-8 bg-accent/20">
              <h2 className="text-2xl font-bold mb-4">Çerez Yönetimi</h2>
              <p className="text-muted-foreground mb-4 text-pretty">
                Çerez kullanımı konusunda tam kontrole sahipsiniz. Tarayıcı ayarlarınızdan çerezleri devre dışı
                bırakabilir veya yönetebilirsiniz.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  { name: "Chrome", path: "Ayarlar → Gizlilik ve güvenlik → Çerezler" },
                  { name: "Firefox", path: "Seçenekler → Gizlilik ve Güvenlik" },
                  { name: "Safari", path: "Tercihler → Gizlilik → Çerezler" },
                  { name: "Edge", path: "Ayarlar → Çerezler ve site izinleri" },
                ].map((browser, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border">
                    <p className="font-semibold mb-1">{browser.name}</p>
                    <p className="text-sm text-muted-foreground">{browser.path}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Haklarınız */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Haklarınız</h2>
              <p className="text-muted-foreground mb-4 text-pretty">
                KVKK ve GDPR kapsamında, kişisel verileriniz ve çerez kullanımı konusunda aşağıdaki haklara sahipsiniz:
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Bilgi Alma Hakkı",
                    desc: "Hangi kişisel verilerinizin işlendiği ve çerezlerin nasıl kullanıldığı hakkında bilgi alma hakkınız vardır.",
                  },
                  {
                    title: "Düzeltme Hakkı",
                    desc: "Yanlış veya eksik kişisel verilerinizin düzeltilmesini talep etme hakkınız vardır.",
                  },
                  {
                    title: "Silme Hakkı",
                    desc: "Belirli koşullar altında kişisel verilerinizin silinmesini talep etme hakkınız vardır.",
                  },
                  {
                    title: "İtiraz Hakkı",
                    desc: "Kişisel verilerinizin işlenmesine ve çerez kullanımına itiraz etme hakkınız vardır.",
                  },
                ].map((right, index) => (
                  <div key={index} className="pb-3 border-b last:border-b-0">
                    <h4 className="font-semibold mb-1">{right.title}</h4>
                    <p className="text-sm text-muted-foreground">{right.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* İletişim */}
            <Card className="p-8 bg-primary text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">İletişim</h2>
              <p className="mb-4 opacity-90">
                Çerez politikamız hakkında herhangi bir sorunuz varsa bizimle iletişime geçebilirsiniz.
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">Telefon</p>
                  <a href="tel:+908503030787" className="opacity-90 hover:opacity-100 hover:underline">0850 303 07 87</a>
                </div>
                <div>
                  <p className="font-semibold mb-1">E-posta</p>
                  <p className="opacity-90">info@bilethizmeti.com</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Çalışma Saatleri</p>
                  <p className="opacity-90">7/24 Destek</p>
                </div>
              </div>
            </Card>

            {/* Önemli Not */}
            <Card className="p-6 mt-8 border-2 border-primary/20">
              <h3 className="font-semibold mb-2">Önemli Not</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Bu çerez politikası, yasal düzenlemelerdeki değişiklikler veya hizmetlerimizdeki güncellemeler
                doğrultusunda zaman zaman güncellenebilir. Önemli değişiklikler olduğunda sizi bilgilendireceğiz. Web
                sitemizi kullanmaya devam ederek, güncellenmiş çerez politikamızı kabul etmiş sayılırsınız.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
      <CallPopup />
    </div>
  )
}
