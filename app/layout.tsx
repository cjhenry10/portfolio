import './globals.css'
import Nav from '@/components/Nav/Nav'

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
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
