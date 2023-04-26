'use client';
import FadeIn from '../Transitions/FadeIn';
import SlideIn from '../Transitions/SlideIn';
import styles from './AboutSection.module.css';
import { useState, useEffect } from 'react';
import School from './School';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>
      <FadeIn delay='500ms'>
        <h1 className={styles.h1}>About</h1>
      </FadeIn>
      <div className={styles.bio} >
      <p>Connor is a an Information Technology graduate student and tutor who enjoys learning about many of the latest technologies. As a tutor,
        he has helped others develop their skills in HTML, CSS, JavaScript, Excel, Tableau, SQL, and Python. In addition to his technical skills,
        Connor also has experience in management, which has helped him develop important leadership skills. In his free time, he enjoys learning
        new technologies by building personal projects, playing video games, and spending time with his partner, family, and friends.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/keyboard.jpg" alt="backlit keyboard" />      
      </div>
        <h2>Education</h2>
          <School />
      </div>
    </section>
  );
};

export default AboutSection;
