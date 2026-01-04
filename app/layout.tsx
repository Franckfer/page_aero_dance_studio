import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aeropuerto Dance Studio | Clases de Baile - Reggaetón, Urbano y Más",
  description:
    "Aprende a bailar en Aeropuerto Dance Studio. Clases de reggaetón, dancehall, hip hop, bachata y más. Instructores profesionales y ambiente único. ¡Despega con nosotros!",
  keywords: [
    "clases de baile",
    "reggaetón",
    "dancehall",
    "hip hop",
    "bachata",
    "dance studio",
    "escuela de baile",
    "aeropuerto dance",
  ],
  authors: [{ name: "Aeropuerto Dance Studio" }],
  openGraph: {
    title: "Aeropuerto Dance Studio | Clases de Baile",
    description: "Aprende a bailar en Aeropuerto Dance Studio. Clases de reggaetón, dancehall, hip hop y más.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeropuerto Dance Studio",
    description: "Clases de baile profesionales. ¡Despega con nosotros!",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0fdfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
