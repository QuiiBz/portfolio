import './globals.scss'
import { Gilda_Display } from 'next/font/google'
import { Footer } from './_components/Footer'

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gilda.className}>
        <div className="noise" />
        <section className="bordered-section">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  )
}
