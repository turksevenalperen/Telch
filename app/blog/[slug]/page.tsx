import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, Share2, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Static params for build time generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı | BiletHizmeti",
    };
  }

  return {
    title: `${post.title} | BiletHizmeti Blog`,
    description: post.description,
    keywords: [
      post.category,
      "uçak bileti",
      "seyahat rehberi",
      ...post.title.toLowerCase().split(" ").slice(0, 5),
    ],
    authors: [{ name: "BiletHizmeti" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["BiletHizmeti"],
      url: `https://bilethizmeti.com/blog/${slug}`,
      siteName: "BiletHizmeti",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://bilethizmeti.com/blog/${slug}`,
    },
  };
}

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
    return null;
  }

  // İlgili yazılar (aynı kategoriden)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  // Eğer aynı kategoride yeterli yazı yoksa, rastgele yazılar ekle
  if (relatedPosts.length < 3) {
    const morePosts = blogPosts
      .filter((p) => p.slug !== slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...morePosts);
  }

  // JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "BiletHizmeti",
      url: "https://bilethizmeti.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BiletHizmeti",
      url: "https://bilethizmeti.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bilethizmeti.com/bilethizmeti.com.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bilethizmeti.com/blog/${slug}`,
    },
    articleSection: post.category,
    wordCount: post.content.split(" ").length,
    timeRequired: post.readTime,
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
        name: "Blog",
        item: "https://bilethizmeti.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://bilethizmeti.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm flex-wrap">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Ana Sayfa
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/blog" className="text-blue-600 hover:underline">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm Yazılar
            </Link>

            {/* Header */}
            <header className="mb-8">
              <span
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                  categoryColors[post.category] || "bg-gray-100 text-gray-700"
                }`}
              >
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{post.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} okuma
                </span>
                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                  <Share2 className="w-4 h-4" />
                  Paylaş
                </button>
              </div>
            </header>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-blue-600"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^# /gm, '<h1 class="text-3xl font-bold mt-8 mb-4">')
                    .replace(/^## /gm, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                    .replace(/^### /gm, '<h3 class="text-xl font-bold mt-6 mb-3">')
                    .replace(/\n\n/g, "</p><p>")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/^- /gm, "<li>")
                    .replace(/<\/h1>/g, "</h1><p>")
                    .replace(/<\/h2>/g, "</h2><p>")
                    .replace(/<\/h3>/g, "</h3><p>"),
                }}
              />
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
              <Phone className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">
                En Uygun Uçak Bileti İçin Hemen Arayın
              </h3>
              <p className="text-blue-100 mb-6">
                Uzman ekibimiz size en iyi fiyatı bulsun
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                asChild
              >
                <a href="tel:08503466476">📞 0850 346 64 76</a>
              </Button>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  İlgili Yazılar
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <article className="bg-white rounded-xl shadow hover:shadow-lg transition h-full">
                        <div className="p-6">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                              categoryColors[relatedPost.category] ||
                              "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {relatedPost.category}
                          </span>
                          <h3 className="font-bold mb-2 group-hover:text-blue-600 transition line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.description}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
