import { Inter } from 'next/font/google'
import Landing from '@/components/Landing/Landing';
import Nav from '@/components/Nav/Nav';
import ProjectSection from '@/components/Projects/ProjectSection';
import AboutSection from '@/components/About/AboutSection';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Nav />
    <Landing />
    <ProjectSection />
    <AboutSection />
    </>
  )
}
