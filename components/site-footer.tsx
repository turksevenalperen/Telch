import { Plane, Phone, Mail, Globe, Shield, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/ucak.jpeg" alt="bilethizmeti.com" width={40} height={40} className="rounded-lg" />
              <span className="font-bold text-lg">
                <span className="text-blue-600">bilet</span>
                <span className="text-orange-500">hizmeti</span>
                <span className="text-blue-800">.com</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-pretty">
              Türkiye&apos;nin güvenilir uçak bileti satış platformu. En uygun fiyatlarla dünyaya açılın.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:08503030787" className="hover:text-primary">
                  0850 303 07 87
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@bilethizmeti.com" className="hover:text-primary">
                  info@bilethizmeti.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <a href="https://www.bilethizmeti.com" className="hover:text-primary">
                  www.bilethizmeti.com
                </a>
              </div>
            </div>
            
            {/* Sosyal Medya Linkleri */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm">Bizi Takip Edin</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com/bilethizmeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  aria-label="Facebook'ta takip edin"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com/bilethizmeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white p-2 rounded-full hover:opacity-90 transition"
                  aria-label="Instagram'da takip edin"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/bilethizmeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
                  aria-label="X (Twitter)'da takip edin"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com/@bilethizmeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                  aria-label="YouTube'da takip edin"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/company/bilethizmeti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition"
                  aria-label="LinkedIn'de takip edin"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-primary">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/ucuslar" className="hover:text-primary">
                  Popüler Uçuşlar
                </Link>
              </li>
              <li>
                <Link href="/havayollari" className="hover:text-primary">
                  Havayolları
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sss" className="hover:text-primary">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-primary">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/kullanim-sartlari" className="hover:text-primary">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="hover:text-primary">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-primary">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-primary">
                  KVKK
                </Link>
              </li>
              <li>
                <Link href="/iptal-iade" className="hover:text-primary">
                  İptal & İade Şartları
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popüler Rotalar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/ucuslar/istanbul-ankara" className="hover:text-primary">
                  İstanbul - Ankara
                </Link>
              </li>
              <li>
                <Link href="/ucuslar/istanbul-izmir" className="hover:text-primary">
                  İstanbul - İzmir
                </Link>
              </li>
              <li>
                <Link href="/ucuslar/istanbul-antalya" className="hover:text-primary">
                  İstanbul - Antalya
                </Link>
              </li>
              <li>
                <Link href="/ucuslar/istanbul-bodrum" className="hover:text-primary">
                  İstanbul - Bodrum
                </Link>
              </li>
              <li>
                <Link href="/ucuslar/ankara-izmir" className="hover:text-primary">
                  Ankara - İzmir
                </Link>
              </li>
              <li>
                <Link href="/ucuslar" className="hover:text-primary font-medium">
                  Tüm Rotalar →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Üyeliklerimiz</h3>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border p-3">
                <div className="font-medium">IATA Üyesi</div>
                <div className="text-xs text-muted-foreground">No: 8261626</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="font-medium">TÜRSAB Üyesi</div>
                <div className="text-xs text-muted-foreground">No: 18270</div>
              </div>
            </div>
            
            {/* Güven Rozetleri */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-4 w-4 text-green-600" />
                <span>256-bit SSL Güvenlik</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Güvenli Ödeme</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Şirket Bilgileri</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Unvan: Doğa Turizm Gıda İşletmeleri Ticaret Limited Şirketi</p>
              <p>Adres: Ulus Şehit İbrahim Akpınar Cad. No:4 Beşiktaş/İstanbul</p>
              <p>Vergi Dairesi: Kozyatağı | Vergi No: 0930531316</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block rounded-lg bg-accent px-4 py-3 mb-4">
              <p className="text-sm font-medium">Önemli Bilgilendirme</p>
              <p className="text-xs text-muted-foreground mt-1">
                bilethizmeti.com bir seyahat acentesidir. Havayolu şirketi değiliz. Bilet satışı, değişiklik ve iptal
                işlemlerinde aracılık hizmeti sunmaktayız.
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-6">
            <p>© 2026 bilethizmeti.com. Tüm hakları saklıdır.</p>
            <div className="mt-2 flex items-center justify-center gap-2 flex-wrap">
              <Link href="/kullanim-sartlari" className="hover:text-primary">
                Kullanım Şartları
              </Link>
              <span>•</span>
              <Link href="/cerez-politikasi" className="hover:text-primary">
                Çerez Politikası
              </Link>
              <span>•</span>
              <Link href="/gizlilik-politikasi" className="hover:text-primary">
                Gizlilik Politikası
              </Link>
              <span>•</span>
              <Link href="/kvkk" className="hover:text-primary">
                KVKK
              </Link>
            </div>
            <p className="mt-2">
              <span className="inline-flex items-center gap-1">
                <Shield className="h-3 w-3" />
                SSL Sertifikalı Güvenli Alışveriş
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
