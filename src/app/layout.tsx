import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SPACEX LIVE',
  description: 'This is an SpaceX API created from the official API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
