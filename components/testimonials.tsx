"use client"

import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mehmet Y.",
    location: "İstanbul",
    rating: 5,
    date: "Aralık 2025",
    comment:
      "İstanbul-Antalya biletimi çok uygun fiyata aldım. Müşteri hizmetleri çok ilgili, her soruma anında cevap verdiler. Kesinlikle tavsiye ederim!",
    route: "İstanbul → Antalya",
  },
  {
    name: "Ayşe K.",
    location: "Ankara",
    rating: 5,
    date: "Aralık 2025",
    comment:
      "Gece 2'de aradım, telefonu hemen açtılar. Biletimde değişiklik yapmam gerekiyordu, çok hızlı çözdüler. 7/24 destek gerçekten var!",
    route: "Ankara → İzmir",
  },
  {
    name: "Ali R.",
    location: "İzmir",
    rating: 5,
    date: "Kasım 2025",
    comment:
      "Yıllardır biletlerimi buradan alıyorum. Her zaman en uygun fiyatı buluyorlar. IATA üyesi olmaları güven veriyor.",
    route: "İzmir → Trabzon",
  },
  {
    name: "Fatma S.",
    location: "Bursa",
    rating: 5,
    date: "Kasım 2025",
    comment:
      "WhatsApp'tan yazdım, 5 dakikada biletim hazırdı. Çok pratik! Fiyatlar da diğer sitelerden daha uygundu.",
    route: "Bursa → Adana",
  },
  {
    name: "Hasan D.",
    location: "Antalya",
    rating: 5,
    date: "Ekim 2025",
    comment:
      "Ailecek yurtdışına gidecektik, 4 kişilik biletimizi çok uygun fiyata aldık. Taksit seçeneği de çok işimize yaradı.",
    route: "Antalya → Amsterdam",
  },
  {
    name: "Zeynep T.",
    location: "Konya",
    rating: 5,
    date: "Ekim 2025",
    comment:
      "İlk kez kullandım, çok memnun kaldım. Site çok kullanışlı, ödeme güvenli. Artık hep buradan alacağım.",
    route: "Konya → İstanbul",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Star className="h-4 w-4 fill-primary" />
            <span>Müşteri Yorumları</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            5 Milyondan Fazla Mutlu Müşteri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            2010&apos;dan beri milyonlarca yolcuya güvenle hizmet veriyoruz. 
            İşte müşterilerimizin deneyimleri...
          </p>
          
          {/* Genel Puan */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-primary">4.9</span>
              <div className="text-left">
                <StarRating rating={5} />
                <span className="text-xs text-muted-foreground">12.500+ değerlendirme</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              
              {/* Rating */}
              <StarRating rating={testimonial.rating} />
              
              {/* Comment */}
              <p className="mt-4 text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              
              {/* User Info */}
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-primary">{testimonial.route}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Siz de binlerce mutlu müşterimiz arasına katılın!
          </p>
          <a
            href="tel:08503021444"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Hemen Bilet Alın: 0850 302 1444
          </a>
        </div>
      </div>
    </section>
  )
}
