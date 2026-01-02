import type { Metadata } from "next"
import AJetClientPage from "./ajet-client-page"

export const metadata: Metadata = {
  title: "AJet Uçak Bileti 2026 | En Ucuz AJet Bilet Fiyatları - bilethizmeti.com",
  description:
    "AJet uçak bileti al. THY güvencesiyle ekonomik AJet bilet fiyatları. İstanbul, Ankara, İzmir, Antalya ve tüm yurtiçi uçuşlar.",
  keywords: "ajet bilet, ajet uçak bileti, ajet fiyatları, ucuz ajet bileti, ajet online bilet",
}

export default function AJetPage() {
  return <AJetClientPage />
}