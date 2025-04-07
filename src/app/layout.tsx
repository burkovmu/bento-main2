import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { ClientLayout } from '@/components/ClientLayout'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const neueMetana = localFont({
  src: '../fonts/NeueMetanaNextOutline-Black.ttf',
  variable: '--font-neue-metana',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'BentoCakes - Уникальные торты на заказ',
  description: 'Создаем особенные торты для ваших особенных моментов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${neueMetana.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
