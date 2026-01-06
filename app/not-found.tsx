import Link from "next/link"
import { Home, ArrowLeft, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          
          {/* Error Message */}
          <h2 className="text-2xl font-bold mb-4">Sayfa Bulunamadı</h2>
          <p className="text-muted-foreground mb-8">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <Link href="/iletisim">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                İletişime Geç
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">Popüler sayfalar:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/bilet-al" className="text-primary hover:underline">
                Bilet Al
              </Link>
              <span>•</span>
              <Link href="/havayollari/thy" className="text-primary hover:underline">
                THY
              </Link>
              <span>•</span>
              <Link href="/havayollari/pegasus" className="text-primary hover:underline">
                Pegasus
              </Link>
              <span>•</span>
              <Link href="/hakkimizda" className="text-primary hover:underline">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
