"use client"

import { useState, useEffect } from "react"
import { Phone, X, ShoppingCart, Edit, Ban } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    const handleOpenPopup = () => {
      setIsOpen(true)
    }

    window.addEventListener("openCallPopup", handleOpenPopup)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("openCallPopup", handleOpenPopup)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-linear-to-r from-red-600 to-red-700 p-6 text-white relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 h-8 w-8 p-0 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">FlyTR İletişim</h3>
              <p className="text-sm opacity-90">Hızlı Arama Numaraları</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {/* Bilet Satış */}
          <a
            href="tel:08503025493"
            className="block p-4 rounded-xl border-2 border-green-500 bg-green-50 hover:bg-green-100 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Bilet Satış</div>
                <div className="text-sm text-gray-600">Yeni bilet rezervasyonu</div>
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold gap-2">
              <Phone className="h-4 w-4" />
              0850 302 54 93
            </Button>
          </a>

          {/* Bilet Değişim */}
          <a
            href="tel:08508402369"
            className="block p-4 rounded-xl border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <Edit className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Bilet Değişim</div>
                <div className="text-sm text-gray-600">Tarih ve saat değişikliği</div>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-2">
              <Phone className="h-4 w-4" />
              0850 840 23 69
            </Button>
          </a>

          {/* Bilet İptal */}
          <a
            href="tel:08503030787"
            className="block p-4 rounded-xl border-2 border-red-500 bg-red-50 hover:bg-red-100 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                <Ban className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Bilet İptal</div>
                <div className="text-sm text-gray-600">İptal ve iade işlemleri</div>
              </div>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold gap-2">
              <Phone className="h-4 w-4" />
              0850 303 07 87
            </Button>
          </a>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Çağrı merkezi 7/24 hizmet vermektedir</span>
          </div>
        </div>
      </div>
    </div>
  )
}
