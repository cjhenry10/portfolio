'use client'
import React, { useState, useEffect } from 'react';
import SlideIn from '../Transitions/SlideIn';
import styles from './ProjectSection.module.css';
import Project from './Project';

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
        <h1 className={styles.h1}>Projects</h1>
        </SlideIn>
        <div className={styles.container}>
          <Project title='Frontend Quiz App' skills={['react', 'ts', 'mongo']} />
          <Project title='Help Desk Wizard' skills={['react', 'js', 'mongo', 'python']} />
          <Project title='Dark Souls Matching Game' skills={['html', 'css', 'js']} />
          <Project title='Raspberry Pi Weather Monitoring' skills={['python', 'html', 'css', 'js']} />
          <Project title='Ticketing System Database Design' skills={['sql']} />
          <Project title='Loan Tracking Website' skills={['html', 'js', 'node', 'mongo']} />
          <Project title='Stock Prediction LSTM Neural Network' skills={['python']} />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
