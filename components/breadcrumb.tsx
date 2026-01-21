import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  // JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://BiletHizmeti.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://BiletHizmeti.com${item.href}` }),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`bg-white border-b ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <ol className="flex items-center space-x-1 text-sm flex-wrap">
            <li>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Ana Sayfa</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-600 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
