// use client
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
