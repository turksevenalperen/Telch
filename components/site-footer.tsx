import { Plane, Phone, Mail, Globe, Shield } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5 text-primary" />
              <span className="font-semibold">TelchFly</span>
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
                <a href="mailto:info@telchfly.com.tr" className="hover:text-primary">
                  info@telchfly.com.tr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <a href="https://www.telchfly.com.tr" className="hover:text-primary">
                  www.telchfly.com.tr
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
                <Link href="/havayollari" className="hover:text-primary">
                  Havayolları
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
            <h3 className="font-semibold mb-4">Havayolları</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/havayollari/thy" className="hover:text-primary">
                  Türk Hava Yolları
                </Link>
              </li>
              <li>
                <Link href="/havayollari/ajet" className="hover:text-primary">
                  AJET
                </Link>
              </li>
              <li>
                <Link href="/havayollari/pegasus" className="hover:text-primary">
                  Pegasus
                </Link>
              </li>
              <li>
                <Link href="/havayollari/sunexpress" className="hover:text-primary">
                  SunExpress
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
                TelchFly bir seyahat acentesidir. Havayolu şirketi değiliz. Bilet satışı, değişiklik ve iptal
                işlemlerinde aracılık hizmeti sunmaktayız.
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-6">
            <p>© 2026 TelchFly. Tüm hakları saklıdır.</p>
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
