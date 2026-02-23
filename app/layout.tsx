import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Templaris | Soluciones en Vidrio para Arquitectura y Construcción',
  description: 'Fabricación, procesamiento, distribución y comercialización de vidrio plano para arquitectura y construcción en el norte argentino. Vidrio templado, laminado, DVH, espejos y más.',
  keywords: ['vidrio templado', 'vidrio laminado', 'DVH', 'espejos', 'vidrio arquitectónico', 'Salta', 'norte argentino', 'Templaris'],
}

export const viewport: Viewport = {
  themeColor: '#05075E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
