import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRouteBySlug, popularRoutes, getAllRouteSlugs } from "@/lib/routes-data";
import { Plane, Clock, MapPin, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoutePageProps {
  params: Promise<{ rota: string }>;
}

export async function generateStaticParams() {
  return getAllRouteSlugs().map((slug) => ({
    rota: slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const { rota } = await params;
  const route = getRouteBySlug(rota);
  
  if (!route) {
    return {
      title: "Rota Bulunamadı | BiletHizmeti",
    };
  }

  const title = `${route.from} - ${route.to} Uçak Bileti | En Uygun Fiyatlar | BiletHizmeti`;
  const description = `${route.from} - ${route.to} arası uçak bileti fiyatları ${route.avgPrice}'den başlıyor. ${route.airlines.join(", ")} havayolları ile ${route.duration} sürede ulaşın. Hemen rezervasyon yapın!`;

  return {
    title,
    description,
    keywords: [
      `${route.from} ${route.to} uçak bileti`,
      `${route.fromCode} ${route.toCode} bilet`,
      `${route.from} ${route.to} ucuz bilet`,
      `${route.to} uçuş`,
      "ucuz uçak bileti",
      "bilet hizmeti",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://bilethizmeti.com/ucuslar/${rota}`,
      siteName: "BiletHizmeti",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://bilethizmeti.com/ucuslar/${rota}`,
    },
  };
}

export default async function RoutePage({ params }: RoutePageProps) {
  const { rota } = await params;
  const route = getRouteBySlug(rota);

  if (!route) {
    notFound();
    return null; // TypeScript için unreachable olduğunu belirt
  }

  // JSON-LD Schema
  const routeSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${route.from} - ${route.to} Uçak Bileti`,
    description: route.description,
    brand: {
      "@type": "Brand",
      name: "BiletHizmeti",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      lowPrice: route.avgPrice.replace("₺", "").replace(",", ""),
      offerCount: route.airlines.length,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "BiletHizmeti",
      },
    },
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: `${route.from} - ${route.to}`,
        item: `https://bilethizmeti.com/ucuslar/${rota}`,
      },
    ],
  };

  // Diğer popüler rotalar (mevcut rota hariç)
  const otherRoutes = popularRoutes.filter((r) => r.slug !== rota).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <li>
                <Link href="/ucuslar" className="text-blue-600 hover:underline">
                  Uçuşlar
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium">
                {route.from} - {route.to}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {route.from} → {route.to}
                </h1>
                <p className="text-xl text-blue-100 mb-6">{route.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {route.duration}
                  </span>
                  <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {route.distance}
                  </span>
                  <span className="bg-green-500 px-4 py-2 rounded-full flex items-center gap-2 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    {route.avgPrice}'den başlayan fiyatlar
                  </span>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="bg-white/10 backdrop-blur p-8 rounded-2xl text-center">
                  <Plane className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-3xl font-bold">{route.fromCode}</p>
                  <p className="text-sm text-blue-200">→</p>
                  <p className="text-3xl font-bold">{route.toCode}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Info */}
              <div className="md:col-span-2 space-y-8">
                {/* Airlines */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Plane className="text-blue-600" />
                    Bu Rotadaki Havayolları
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {route.airlines.map((airline) => (
                      <div
                        key={airline}
                        className="bg-gray-50 p-4 rounded-xl text-center font-semibold hover:bg-blue-50 transition"
                      >
                        {airline}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Route Info */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    {route.from} - {route.to} Uçuş Bilgileri
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {route.from} ile {route.to} arasındaki uçuşlar, Türkiye&apos;nin en popüler
                      iç hat güzergahlarından biridir. {route.distance} mesafedeki bu rota,
                      ortalama {route.duration} sürmektedir.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-4">Neden BiletHizmeti?</h3>
                    <ul className="space-y-3">
                      {[
                        "En uygun fiyat garantisi",
                        "7/24 müşteri desteği",
                        "Kolay iptal ve değişiklik",
                        "Güvenli ödeme sistemi",
                        "Tüm havayollarını karşılaştırma",
                        "Özel kampanya ve indirimler",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">
                    {route.from} - {route.to} Uçuşlarında Tasarruf İpuçları
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2">🗓️ Erken Rezervasyon</h3>
                      <p className="text-gray-600 text-sm">
                        Uçuşunuzu 2-3 hafta önceden rezerve ederek %30&apos;a varan indirimlerden
                        yararlanın.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2">📅 Esnek Tarihler</h3>
                      <p className="text-gray-600 text-sm">
                        Hafta ortası uçuşlar genellikle daha uygun fiyatlıdır.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2">🔔 Fiyat Alarmı</h3>
                      <p className="text-gray-600 text-sm">
                        Fiyat düşüşlerinden anında haberdar olmak için bizi takip edin.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2">✈️ Karşılaştırın</h3>
                      <p className="text-gray-600 text-sm">
                        Farklı havayollarının fiyatlarını karşılaştırarak en uygununu bulun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - CTA */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-4">
                  <h3 className="text-xl font-bold mb-4">Hemen Rezervasyon Yapın</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Kalkış:</span>
                      <span className="font-semibold">{route.from} ({route.fromCode})</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Varış:</span>
                      <span className="font-semibold">{route.to} ({route.toCode})</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Süre:</span>
                      <span className="font-semibold">{route.duration}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Fiyatlar:</span>
                      <span className="text-2xl font-bold text-green-600">{route.avgPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500">*Fiyatlar değişkenlik gösterebilir</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6" asChild>
                    <a href="tel:08503466476">
                      📞 Hemen Ara: 0850 346 64 76
                    </a>
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    7/24 Müşteri Hizmetleri
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Routes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Diğer Popüler Rotalar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ucuslar/${r.slug}`}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold group-hover:text-blue-600 transition">
                      {r.from} → {r.to}
                    </span>
                    <span className="text-green-600 font-bold">{r.avgPrice}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{r.duration}</span>
                    <span>{r.distance}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/ucuslar">Tüm Rotaları Gör →</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
