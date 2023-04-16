'use client'
import React, { useState, useEffect } from 'react';
import SlideIn from '../Transitions/SlideIn';
import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < window.innerWidth / 2.5) {
      setScrollY(window.scrollY * 1.8);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <section id='projects' className={styles.projects}>
        <SlideIn>
        <h1>Projects</h1>
        </SlideIn>
        <div style={{ height: '200vh' }}></div>
      </section>
    </>
  );
};

export default ProjectSection;
