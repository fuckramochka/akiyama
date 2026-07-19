import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Poppins, Righteous } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-righteous',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'akiyama mindset upgrading',
  description:
    'akiyama mindset upgrading — личная страница, ссылки и музыка.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`bg-background ${poppins.variable} ${righteous.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
