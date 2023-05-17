import './globals.css'
import Nav from '@/components/Nav/Nav'
import {inter, rubik, jakarta, serif, nunito} from '@/fonts/fonts';

export const metadata = {
  title: 'Connor Henry',
  description: 'Connor Henry\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable} ${serif.variable} ${nunito.className} dark`}>
      <body>
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
