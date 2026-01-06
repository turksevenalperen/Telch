"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Gift, Phone, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Sadece üst kısımdan çıkışlarda göster
    if (e.clientY <= 0) {
      // Daha önce gösterildi mi kontrol et
      const hasShown = sessionStorage.getItem("exit-popup-shown");
      const lastShown = localStorage.getItem("exit-popup-last-shown");
      
      // 24 saat içinde gösterilmemişse ve bu oturumda gösterilmemişse
      if (!hasShown) {
        const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
        if (!lastShown || parseInt(lastShown) < oneDayAgo) {
          setIsVisible(true);
          sessionStorage.setItem("exit-popup-shown", "true");
          localStorage.setItem("exit-popup-last-shown", Date.now().toString());
        }
      }
    }
  }, []);

  useEffect(() => {
    // Cookie consent verildiyse popup'ı etkinleştir
    const consent = localStorage.getItem("cookie-consent");
    if (consent) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={closePopup}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
            <Gift className="w-16 h-16 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold mb-2">Bekleyin!</h2>
            <p className="text-blue-100">Özel bir teklifimiz var</p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Şu an ayrılmak mı istiyorsunuz? Bizi arayarak{" "}
                <span className="font-bold text-green-600">ekstra %5 indirim</span>{" "}
                kazanabilirsiniz!
              </p>
              <div className="bg-blue-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Telefonda &quot;ÖZEL5&quot; kodunu söyleyin
                </p>
                <p className="text-2xl font-bold text-blue-600">%5 İNDİRİM</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                asChild
              >
                <a href="tel:08503466476" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Hemen Ara: 0850 346 64 76
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={closePopup}
              >
                <Plane className="w-4 h-4 mr-2" />
                Aramaya Devam Et
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-500">
              <span>✓ 7/24 Destek</span>
              <span>✓ Güvenli Ödeme</span>
              <span>✓ Anında Onay</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
