"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // localStorage'dan çerez tercihini kontrol et
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // 1 saniye sonra banner'ı göster (daha iyi UX)
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    
    // Google Analytics/GTM için consent güncelle
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    
    // Sadece zorunlu çerezler
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Çerez ayarlarını aç"
      >
        <Cookie className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon & Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <h3 className="font-bold text-lg">Çerez Politikası</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              BiletHizmeti olarak, web sitemizde deneyiminizi geliştirmek, site trafiğini analiz
              etmek ve size kişiselleştirilmiş içerik sunmak için çerezler kullanıyoruz. 
              <Link href="/kvkk" className="text-blue-600 hover:underline ml-1">
                KVKK Aydınlatma Metni
              </Link>{" "}
              ve{" "}
              <Link href="/cerez-politikasi" className="text-blue-600 hover:underline">
                Çerez Politikamızı
              </Link>{" "}
              inceleyebilirsiniz.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <Button
              onClick={acceptEssential}
              variant="outline"
              className="flex-1 md:flex-none text-sm"
            >
              Sadece Zorunlu
            </Button>
            <Button
              onClick={acceptAll}
              className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-sm"
            >
              Tümünü Kabul Et
            </Button>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 text-gray-400 hover:text-gray-600 transition md:ml-2"
              aria-label="Küçült"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// window.gtag için TypeScript deklarasyonu
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: object) => void;
  }
}
