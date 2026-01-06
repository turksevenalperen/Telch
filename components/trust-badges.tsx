"use client"

import { Shield, Lock, Award, CreditCard, Clock, CheckCircle2, Phone } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="py-8 bg-accent/30 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
          {/* SSL Güvenlik */}
          <div className="flex flex-col items-center text-center gap-2 p-3">
            <Lock className="h-8 w-8 text-green-600" />
            <span className="text-xs font-medium">256-bit SSL</span>
          </div>

          {/* 3D Secure */}
          <div className="flex flex-col items-center text-center gap-2 p-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xs font-medium">3D Secure</span>
          </div>

          {/* IATA Üyesi */}
          <div className="flex flex-col items-center text-center gap-2 p-3">
            <Award className="h-8 w-8 text-primary" />
            <span className="text-xs font-medium">IATA Üyesi</span>
          </div>

          {/* TÜRSAB */}
          <div className="flex flex-col items-center text-center gap-2 p-3">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <span className="text-xs font-medium">TÜRSAB 18270</span>
          </div>

          {/* Güvenli Ödeme */}
          <div className="flex flex-col items-center text-center gap-2 p-3">
            <CreditCard className="h-8 w-8 text-orange-500" />
            <span className="text-xs font-medium">Güvenli Ödeme</span>
          </div>

          {/* 7/24 Destek */}
          <div className="flex flex-col items-center text-center gap-2 p-3">
            <Clock className="h-8 w-8 text-purple-600" />
            <span className="text-xs font-medium">7/24 Destek</span>
          </div>

          {/* Hızlı Cevap */}
          <div className="flex flex-col items-center text-center gap-2 p-3">
            <Phone className="h-8 w-8 text-green-600" />
            <span className="text-xs font-medium">Anında Cevap</span>
          </div>
        </div>

        {/* Alt bilgi */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            🔒 Tüm ödemeleriniz 256-bit SSL şifrelemesi ile korunmaktadır. 
            Kredi kartı bilgileriniz asla saklanmaz.
          </p>
        </div>
      </div>
    </section>
  )
}
