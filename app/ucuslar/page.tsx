import type { Metadata } from "next";
import Link from "next/link";
import { popularRoutes } from "@/lib/routes-data";
import { Plane, TrendingUp, Clock, MapPin, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Tüm Uçuş Rotaları | En Ucuz Uçak Bileti Fiyatları | BiletHizmeti",
  description:
    "Türkiye'nin en popüler uçuş rotaları. İstanbul, Ankara, İzmir, Antalya ve daha fazlası. En uygun fiyatlarla uçak bileti alın. 20+ popüler rota!",
  keywords: [
    "uçak bileti",
    "ucuz bilet",
    "iç hat uçuşları",
    "popüler rotalar",
    "istanbul uçuş",
    "ankara uçuş",
    "izmir uçuş",
    "antalya uçuş",
  ],
  openGraph: {
    title: "Tüm Uçuş Rotaları | BiletHizmeti",
    description: "20+ popüler rotada en uygun uçak bileti fiyatları",
    url: "https://bilethizmeti.com/ucuslar",
    siteName: "BiletHizmeti",
    type: "website",
  },
  alternates: {
    canonical: "https://bilethizmeti.com/ucuslar",
  },
};

export default function UcuslarPage() {
  // Rotaları kalkış şehrine göre grupla
  const routesByOrigin = popularRoutes.reduce(
    (acc, route) => {
      if (!acc[route.from]) {
        acc[route.from] = [];
      }
      acc[route.from].push(route);
      return acc;
    },
    {} as Record<string, typeof popularRoutes>
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://bilethizmeti.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Uçuşlar",
        item: "https://bilethizmeti.com/ucuslar",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popüler Uçuş Rotaları",
    description: "Türkiye'nin en popüler iç hat uçuş güzergahları",
    numberOfItems: popularRoutes.length,
    itemListElement: popularRoutes.map((route, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${route.from} - ${route.to} Uçak Bileti`,
      url: `https://bilethizmeti.com/ucuslar/${route.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Ana Sayfa
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium">Uçuşlar</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Popüler Uçuş Rotaları</h1>
            <p className="text-xl text-blue-100 mb-8">
              Türkiye&apos;nin en çok tercih edilen {popularRoutes.length} uçuş güzergahı
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <Plane className="w-5 h-5 inline mr-2" />
                {popularRoutes.length}+ Rota
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <TrendingUp className="w-5 h-5 inline mr-2" />
                En Uygun Fiyatlar
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <Search className="w-5 h-5 inline mr-2" />
                Kolay Karşılaştırma
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{popularRoutes.length}</p>
                <p className="text-gray-600">Popüler Rota</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">4</p>
                <p className="text-gray-600">Havayolu</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">₺650</p>
                <p className="text-gray-600">En Düşük Fiyat</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">7/24</p>
                <p className="text-gray-600">Destek</p>
              </div>
            </div>
          </div>
        </section>

        {/* Routes by Origin */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {Object.entries(routesByOrigin).map(([origin, routes]) => (
              <div key={origin} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Plane className="text-blue-600" />
                  {origin} Kalkışlı Uçuşlar
                  <span className="text-sm font-normal text-gray-500">
                    ({routes.length} rota)
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {routes.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/ucuslar/${route.slug}`}
                      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition group border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-lg font-bold group-hover:text-blue-600 transition">
                            {route.from} → {route.to}
                          </p>
                          <p className="text-sm text-gray-500">
                            {route.fromCode} - {route.toCode}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">{route.avgPrice}</p>
                          <p className="text-xs text-gray-400">başlayan</p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {route.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {route.distance}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {route.airlines.map((airline) => (
                          <span
                            key={airline}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {airline}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Aradığınız Rotayı Bulamadınız mı?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Tüm iç hat ve dış hat uçuşları için bizi arayın. Size en uygun fiyatı bulalım!
            </p>
            <a
              href="tel:08503466476"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition"
            >
              📞 0850 346 64 76
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
