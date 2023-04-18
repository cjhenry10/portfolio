'use client'
import React, { useEffect, useState } from 'react';
import FadeIn from '../Transitions/FadeIn';
import SlideIn from '../Transitions/SlideIn';
import styles from './Landing.module.css';
import { vh } from '../../utils/viewport';
import Background from './Background';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

const Landing = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [font, setFont] = useState(`clamp(2rem, 8vw, 8rem)`);
  const [opacity, setOpacity] = useState(1);
  const [opacity1, setOpacity1] = useState(0);
  const [z, setZ] = useState(0);
  // const [color, setColor] = useState(`var(--dark3)`);
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setTop(window.innerHeight/2)
      setLeft(window.innerWidth/2)
    }
  },[])

  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 50) {
      setFont(`clamp(1.2rem, 2vw, 2rem)`);
      setZ(100);
      setTop(vh(2.5));
      setLeft(Math.min(window.innerWidth/3.5, 200));
      setOpacity((prev) => Math.min(prev - 0.00001, 0));
      // setColor(`var(--light3)`);
    } else {
      setZ(0);
      setTop(window.innerHeight/3);
      setLeft(window.innerWidth/2);
      setFont(`clamp(2rem, 8vw, 8rem)`);
      setOpacity(1);
      // setColor(`var(--dark3)`);
    }
    // setTop(window.bo);
  }, [opacity]);

  useEffect(() => {
    setOpacity1(1);
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={styles.landing}>
        <Background/>
        {/* <FadeIn> */}
        <h1 style={{ zIndex: z, fontSize: font, position: 'fixed', top: `${top}px`, left: `${left}px`, opacity: opacity1}}>Connor Henry</h1>
        {/* </FadeIn> */}
        <SlideIn delay={'1s'} pos='fixed'>
        <h3 style={{opacity: opacity, transition: 'opacity 0.25s linear'}}>Under Construction!</h3>
        </SlideIn>
        {/* <FadeIn> */}
        <div className={styles.buttons}>
        <a href='https://github.com/cjhenry10' target='_blank' rel='noopener noreferrer'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/connor-henry-b071a6211/' target='_blank' rel='noopener noreferrer'><BsLinkedin /></a>
        </div>
        {/* </FadeIn> */}
      </div>
    </>
  );
};

export default Landing;
