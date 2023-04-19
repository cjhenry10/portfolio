import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Landing from '@/components/Landing/Landing';
import Nav from '@/components/Nav/Nav';
import ProjectSection from '@/components/Projects/ProjectSection';
import SkillSection from '@/components/Skills/SkillSection';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Nav />
    <Landing />
    {/* <SkillSection /> */}
    <ProjectSection />
    </>
  )
}
