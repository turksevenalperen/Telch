export interface FlightRoute {
  slug: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  distance: string;
  duration: string;
  airlines: string[];
  avgPrice: string;
  description: string;
}

export const popularRoutes: FlightRoute[] = [
  {
    slug: "istanbul-ankara",
    from: "İstanbul",
    fromCode: "IST",
    to: "Ankara",
    toCode: "ESB",
    distance: "450 km",
    duration: "1 saat 10 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺850",
    description: "Türkiye'nin en popüler iç hat güzergahı. Günlük 50+ sefer ile İstanbul ve Ankara arasında kesintisiz ulaşım."
  },
  {
    slug: "istanbul-izmir",
    from: "İstanbul",
    fromCode: "IST",
    to: "İzmir",
    toCode: "ADB",
    distance: "330 km",
    duration: "1 saat 5 dk",
    airlines: ["THY", "Pegasus", "SunExpress", "AnadoluJet"],
    avgPrice: "₺750",
    description: "Ege'nin incisi İzmir'e günlük 40+ sefer. İş ve tatil amaçlı en çok tercih edilen rotalardan."
  },
  {
    slug: "istanbul-antalya",
    from: "İstanbul",
    fromCode: "IST",
    to: "Antalya",
    toCode: "AYT",
    distance: "480 km",
    duration: "1 saat 15 dk",
    airlines: ["THY", "Pegasus", "SunExpress", "AnadoluJet"],
    avgPrice: "₺900",
    description: "Türkiye'nin turizm başkenti Antalya'ya günlük 60+ sefer. Yaz aylarında en yoğun rota."
  },
  {
    slug: "ankara-izmir",
    from: "Ankara",
    fromCode: "ESB",
    to: "İzmir",
    toCode: "ADB",
    distance: "520 km",
    duration: "1 saat 10 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺700",
    description: "Başkent ile Ege arasında hızlı ulaşım. İş seyahatleri için ideal."
  },
  {
    slug: "istanbul-trabzon",
    from: "İstanbul",
    fromCode: "IST",
    to: "Trabzon",
    toCode: "TZX",
    distance: "880 km",
    duration: "1 saat 45 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺950",
    description: "Karadeniz'in incisi Trabzon'a direkt uçuşlar. Doğa ve kültür turları için ideal."
  },
  {
    slug: "istanbul-adana",
    from: "İstanbul",
    fromCode: "IST",
    to: "Adana",
    toCode: "ADA",
    distance: "700 km",
    duration: "1 saat 25 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺800",
    description: "Çukurova'nın merkezi Adana'ya günlük seferler. İş ve aile ziyaretleri için tercih edilen rota."
  },
  {
    slug: "istanbul-bodrum",
    from: "İstanbul",
    fromCode: "IST",
    to: "Bodrum",
    toCode: "BJV",
    distance: "420 km",
    duration: "1 saat 10 dk",
    airlines: ["THY", "Pegasus", "SunExpress"],
    avgPrice: "₺1100",
    description: "Ege'nin gözde tatil merkezi Bodrum'a direkt uçuşlar. Yaz sezonunda yoğun talep."
  },
  {
    slug: "istanbul-dalaman",
    from: "İstanbul",
    fromCode: "IST",
    to: "Dalaman",
    toCode: "DLM",
    distance: "500 km",
    duration: "1 saat 15 dk",
    airlines: ["THY", "Pegasus", "SunExpress"],
    avgPrice: "₺1000",
    description: "Fethiye, Marmaris ve Ölüdeniz'e kapı açan Dalaman. Tatilcilerin gözdesi."
  },
  {
    slug: "ankara-antalya",
    from: "Ankara",
    fromCode: "ESB",
    to: "Antalya",
    toCode: "AYT",
    distance: "350 km",
    duration: "1 saat",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺750",
    description: "Başkent'ten Akdeniz'e kısa sürede ulaşım. Hafta sonu kaçamakları için ideal."
  },
  {
    slug: "izmir-antalya",
    from: "İzmir",
    fromCode: "ADB",
    to: "Antalya",
    toCode: "AYT",
    distance: "350 km",
    duration: "55 dk",
    airlines: ["THY", "Pegasus", "SunExpress"],
    avgPrice: "₺650",
    description: "Ege'den Akdeniz'e en kısa yol. İki tatil bölgesi arasında hızlı transfer."
  },
  {
    slug: "istanbul-diyarbakir",
    from: "İstanbul",
    fromCode: "IST",
    to: "Diyarbakır",
    toCode: "DIY",
    distance: "1100 km",
    duration: "2 saat",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺1000",
    description: "Güneydoğu'nun kalbi Diyarbakır'a direkt uçuşlar. Tarihi ve kültürel gezi için."
  },
  {
    slug: "istanbul-gaziantep",
    from: "İstanbul",
    fromCode: "IST",
    to: "Gaziantep",
    toCode: "GZT",
    distance: "850 km",
    duration: "1 saat 40 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺900",
    description: "Gastronomi başkenti Gaziantep'e uçuşlar. Lezzet turları için kaçırılmaz."
  },
  {
    slug: "istanbul-kayseri",
    from: "İstanbul",
    fromCode: "IST",
    to: "Kayseri",
    toCode: "ASR",
    distance: "680 km",
    duration: "1 saat 25 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺800",
    description: "Kapadokya'nın kapısı Kayseri. Balon turları ve tarihi keşifler için."
  },
  {
    slug: "istanbul-samsun",
    from: "İstanbul",
    fromCode: "IST",
    to: "Samsun",
    toCode: "SZF",
    distance: "680 km",
    duration: "1 saat 30 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺850",
    description: "Karadeniz'in önemli limanı Samsun'a direkt seferler."
  },
  {
    slug: "istanbul-erzurum",
    from: "İstanbul",
    fromCode: "IST",
    to: "Erzurum",
    toCode: "ERZ",
    distance: "1200 km",
    duration: "2 saat 10 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺1100",
    description: "Doğu Anadolu'nun merkezi Erzurum. Kış sporları ve doğa için ideal."
  },
  {
    slug: "istanbul-van",
    from: "İstanbul",
    fromCode: "IST",
    to: "Van",
    toCode: "VAN",
    distance: "1400 km",
    duration: "2 saat 20 dk",
    airlines: ["THY", "Pegasus"],
    avgPrice: "₺1200",
    description: "Van Gölü ve Akdamar Adası'na ulaşım. Doğu'nun incisi."
  },
  {
    slug: "istanbul-mardin",
    from: "İstanbul",
    fromCode: "IST",
    to: "Mardin",
    toCode: "MQM",
    distance: "1150 km",
    duration: "2 saat 5 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺1050",
    description: "Medeniyetler şehri Mardin'e uçuşlar. Tarihi taş evler ve muhteşem manzara."
  },
  {
    slug: "istanbul-konya",
    from: "İstanbul",
    fromCode: "IST",
    to: "Konya",
    toCode: "KYA",
    distance: "600 km",
    duration: "1 saat 20 dk",
    airlines: ["THY", "Pegasus", "AnadoluJet"],
    avgPrice: "₺750",
    description: "Mevlana'nın şehri Konya'ya uçuşlar. Manevi ve kültürel turlar için."
  },
  {
    slug: "ankara-trabzon",
    from: "Ankara",
    fromCode: "ESB",
    to: "Trabzon",
    toCode: "TZX",
    distance: "600 km",
    duration: "1 saat 20 dk",
    airlines: ["THY", "AnadoluJet"],
    avgPrice: "₺800",
    description: "Başkent'ten Karadeniz'e direkt ulaşım."
  },
  {
    slug: "izmir-istanbul",
    from: "İzmir",
    fromCode: "ADB",
    to: "İstanbul",
    toCode: "IST",
    distance: "330 km",
    duration: "1 saat 5 dk",
    airlines: ["THY", "Pegasus", "SunExpress", "AnadoluJet"],
    avgPrice: "₺750",
    description: "Ege'den metropole hızlı ulaşım. Günlük 40+ sefer imkanı."
  },
];

export function getRouteBySlug(slug: string): FlightRoute | undefined {
  return popularRoutes.find(route => route.slug === slug);
}

export function getAllRouteSlugs(): string[] {
  return popularRoutes.map(route => route.slug);
}
