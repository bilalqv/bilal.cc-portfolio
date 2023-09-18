import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Navbar from './components/Navbar'


const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bilal Ahmad Bhat',
  description: 'My personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
