import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Türk Hava Yolları (THY) Uçak Bileti | En Uygun Fiyatlar - TelchFly",
  description:
    "Türk Hava Yolları ile 130+ ülke, 340+ destinasyona uçun. 5 yıldızlı hizmet, lezzetli ikramlar ve geniş uçuş ağı. THY biletleri için en uygun fiyatlar TelchFly'da.",
  keywords: "türk hava yolları, thy bilet, turkish airlines, thy uçak bileti, thy fiyatları, thy kampanya, telchfly",
  openGraph: {
    title: "Türk Hava Yolları Uçak Bileti | TelchFly",
    description: "THY ile dünyaya açılın. 130+ ülke, 340+ destinasyon. En uygun fiyatlar.",
  },
}

export default function THYLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
