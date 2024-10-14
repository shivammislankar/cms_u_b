import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HR Dashboard',
  description: 'Manage your workforce efficiently with our HR dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#1c2a2b] text-white">
          <header className="bg-[#243435] p-4">
            <nav className="container mx-auto flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-400">MAGIX</span>
              <ul className="flex space-x-4">
                <li><a href="/" className="text-gray-300 hover:text-white">Dashboard</a></li>
                <li><a href="/employees" className="text-gray-300 hover:text-white">Employees</a></li>
                <li><a href="/jobs" className="text-gray-300 hover:text-white">Jobs</a></li>
                <li><a href="/candidates" className="text-gray-300 hover:text-white">Candidates</a></li>
                <li><a href="/leave" className="text-gray-300 hover:text-white">Leave</a></li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-[#243435] p-4 mt-8">
            <div className="container mx-auto text-center text-gray-400">
              © 2024 MAGIX HR. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}