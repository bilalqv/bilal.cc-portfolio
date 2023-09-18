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
  title: {
    template: '%s | Bilal Ahmad Bhat',
    default: 'Bilal Ahmad Bhat | Software Developer',
  },
  description: 'Bilal Ahmad Bhat - Software Developer - My personal portfolio website',
  authors: [{ name: 'Bilal Ahmad Bhat' }],
  applicationName: 'Bilal Ahmad Bhat - Portfolio',
  generator: 'Next.js',
  keywords: ['nextjs', 'portfolio', 'TypeScript', 'developer', 'Computer Science', 'Software Engineer'],
  creator: 'Bilal Ahmad Bhat - crediblebilal@gmail.com',
  publisher: 'Bilal Ahmad Bhat',
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
