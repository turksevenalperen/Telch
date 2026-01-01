import type { Metadata } from "next"
import ClientAirlinesPage from "./ClientAirlinesPage"

export const metadata: Metadata = {
  title: "Havayolları - En Uygun Uçak Biletleri | TelchFly",
  description:
    "Türkiye'nin önde gelen havayolu şirketleri ile en uygun fiyatlarla uçun. THY, Pegasus, SunExpress, AJET ve daha fazlası.",
  keywords: "havayolları, uçak bileti, thy, pegasus, sunexpress, ajet, telchfly",
}

export default function AirlinesPage() {
  return <ClientAirlinesPage />
}
