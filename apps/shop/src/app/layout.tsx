import 'ui/styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin'], weight: ['200', '400', '600']})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
