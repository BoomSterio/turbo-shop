import 'ui/styles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen bg-blue-100 text-woodsmoke-950'>{children}</body>
    </html>
  )
}
