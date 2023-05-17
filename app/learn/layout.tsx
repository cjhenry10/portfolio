import Nav from '@/components/Articles/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Learn – Articles by Connor",
  description: 'Created by Connor Henry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Nav />
        <div className='article-section min-h-screen'>
        <section className='px-4 md:px-6 prose prose-slate dark:prose-invert mx-auto pt-8'>
          {children}
        </section>
        </div>
    </>
  )
}
