import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Uçak Bileti Rehberi & Seyahat İpuçları | BiletHizmeti",
  description:
    "Ucuz uçak bileti bulma taktikleri, seyahat rehberleri, havayolu karşılaştırmaları ve yolcu hakları hakkında güncel blog yazıları. 35+ uzman içerik!",
  keywords: [
    "uçak bileti blog",
    "seyahat rehberi",
    "ucuz bilet ipuçları",
    "havayolu karşılaştırma",
    "yolcu hakları",
    "tatil rehberi",
  ],
  openGraph: {
    title: "Blog | BiletHizmeti",
    description: "35+ uzman içerik ile uçak bileti ve seyahat rehberi",
    url: "https://bilethizmeti.com/blog",
    siteName: "BiletHizmeti",
    type: "website",
  },
  alternates: {
    canonical: "https://bilethizmeti.com/blog",
  },
};

// Kategorilere göre grupla
const categories = [...new Set(blogPosts.map((post) => post.category))];

// Kategori renkleri
const categoryColors: Record<string, string> = {
  "Tasarruf Rehberi": "bg-green-100 text-green-700",
  "Yasal Haklar": "bg-purple-100 text-purple-700",
  "Özel Yolcular": "bg-pink-100 text-pink-700",
  "Sağlık & Konfor": "bg-red-100 text-red-700",
  "Havayolu Rehberi": "bg-blue-100 text-blue-700",
  "Sezonluk Rehber": "bg-orange-100 text-orange-700",
  "Havalimanı Rehberi": "bg-cyan-100 text-cyan-700",
  "Uçuş Deneyimi": "bg-indigo-100 text-indigo-700",
};

export default function BlogPage() {
  // En son 3 yazı (öne çıkan)
  const featuredPosts = blogPosts.slice(0, 3);
  // Diğer yazılar
  const otherPosts = blogPosts.slice(3);

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
        name: "Blog",
        item: "https://bilethizmeti.com/blog",
      },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BiletHizmeti Blog",
    description: "Uçak bileti ve seyahat rehberi blog yazıları",
    url: "https://bilethizmeti.com/blog",
    publisher: {
      "@type": "Organization",
      name: "BiletHizmeti",
      url: "https://bilethizmeti.com",
    },
    blogPost: blogPosts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `https://bilethizmeti.com/blog/${post.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
              <li className="text-gray-600 font-medium">Blog</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">{blogPosts.length} Uzman İçerik</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Seyahat Rehberi & Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ucuz uçak bileti bulma taktikleri, yolcu hakları, havayolu
              karşılaştırmaları ve daha fazlası
            </p>
          </div>
        </section>

        {/* Kategoriler */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <span
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    categoryColors[category] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Öne Çıkan Yazılar */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Öne Çıkan Yazılar</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <article
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col ${
                      index === 0 ? "md:flex-row" : ""
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br from-blue-500 to-blue-700 ${
                        index === 0 ? "md:w-1/2 h-48 md:h-auto" : "h-48"
                      } flex items-center justify-center`}
                    >
                      <BookOpen
                        className={`text-white/30 ${
                          index === 0 ? "w-32 h-32" : "w-20 h-20"
                        }`}
                      />
                    </div>
                    <div className={`p-6 flex-1 ${index === 0 ? "md:w-1/2" : ""}`}>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          categoryColors[post.category] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.category}
                      </span>
                      <h3
                        className={`font-bold mb-3 group-hover:text-blue-600 transition ${
                          index === 0 ? "text-2xl" : "text-lg"
                        }`}
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "long",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tüm Yazılar */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Tüm Yazılar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl shadow hover:shadow-lg transition h-full">
                    <div className="p-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          categoryColors[post.category] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.category}
                      </span>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Oku <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              En Uygun Uçak Bileti İçin Hemen Arayın
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Uzman ekibimiz size en iyi fiyatı bulsun
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
