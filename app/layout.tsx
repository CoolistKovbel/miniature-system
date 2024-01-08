import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FooterComp from '@/components/FooterComp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mystic Kitten',
  description: 'A small NFT collection with more value than you can dream of',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FooterComp />
        </body>
    </html>
  )
}
