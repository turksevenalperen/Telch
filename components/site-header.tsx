"use client"

import { Plane, Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const airlines = [
  { name: "Türk Hava Yolları", href: "/havayollari/thy", image: "/thy.jpg" },
  { name: "Pegasus", href: "/havayollari/pegasus", image: "/pegasus.png" },
  { name: "SunExpress", href: "/havayollari/sunexpress", image: "/sunexpress.jpg" },
  { name: "AJET", href: "/havayollari/ajet", image: "/ajet.png" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [airlineDropdownOpen, setAirlineDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/ucak.jpeg" alt="bilethizmeti.com" width={56} height={56} className="rounded-lg shadow-sm" />
          <span className="text-2xl font-bold">
            <span className="text-blue-600">bilet</span>
            <span className="text-orange-500">hizmeti</span>
            <span className="text-blue-800">.com</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="transition-colors hover:text-primary">
            Anasayfa
          </Link>
          <Link href="/hakkimizda" className="transition-colors hover:text-primary">
            Hakkımızda
          </Link>
          
          {/* Havayolları Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAirlineDropdownOpen(true)}
            onMouseLeave={() => setAirlineDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 transition-colors hover:text-primary">
              Havayolları
              <ChevronDown className={`h-4 w-4 transition-transform ${airlineDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {airlineDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-xl shadow-xl border p-4 min-w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    {airlines.map((airline) => (
                      <Link
                        key={airline.href}
                        href={airline.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={airline.image}
                            alt={airline.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                          {airline.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/kullanim-sartlari" className="transition-colors hover:text-primary">
            Kullanım Şartları
          </Link>
          <Link href="/cerez-politikasi" className="transition-colors hover:text-primary">
            Çerez Politikası
          </Link>
          <Link href="/iletisim" className="transition-colors hover:text-primary">
            İletişim
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:08503030787" className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" />
            <span>0850 303 07 87</span>
          </a>
          <Button size="sm" asChild>
            <a href="tel:08503030787">İletişime Geç</a>
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            
            {/* Havayolları - Mobil */}
            <div className="py-2">
              <span className="font-medium text-muted-foreground">Havayolları</span>
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {airlines.map((airline) => (
                  <Link
                    key={airline.href}
                    href={airline.href}
                    className="flex items-center gap-3 py-2 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="relative w-8 h-8 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={airline.image}
                        alt={airline.name}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    <span>{airline.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/kullanim-sartlari"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kullanım Şartları
            </Link>
            <Link
              href="/cerez-politikasi"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Çerez Politikası
            </Link>
            <Link
              href="/iletisim"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <a href="tel:08503030787" className="flex items-center gap-2 py-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>0850 303 07 87</span>
            </a>
            <Button size="sm" asChild className="w-full">
              <a href="tel:08503030787" onClick={() => setMobileMenuOpen(false)}>
                İletişime Geç
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
