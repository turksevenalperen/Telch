"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-destructive/20 mb-4">Hata!</h1>
          <h2 className="text-2xl font-bold mb-4">Bir şeyler yanlış gitti</h2>
          <p className="text-muted-foreground mb-8">
            Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin veya ana sayfaya dönün.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Tekrar Dene
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg">
                <Home className="mr-2 h-4 w-4" />
                Ana Sayfa
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
