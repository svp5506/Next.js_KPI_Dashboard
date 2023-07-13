import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Store Insights',
  description: 'App Store Statistics for Telecom Support Apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <main className="flex min-h-screen flex-col items-stretch bg-gray-800">
          <Header></Header>
          {children}
        </main>
      </body>
    </html>
  )
}
