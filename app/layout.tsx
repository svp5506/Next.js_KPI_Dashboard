import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './navbar';

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
    <html lang="en">
      <body>
        <main className="flex h-full min-h-screen flex-col items-stretchb bg-gray-100">
          <Navbar></Navbar>
          {children}
          <div className="mt-20"></div>
        </main>
      </body>
    </html>
  )
}
