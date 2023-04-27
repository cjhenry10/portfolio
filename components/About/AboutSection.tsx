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
        <div className={styles.bio}>
          <p>
            Connor is a an Information Technology graduate student at Arizona
            State University focusing on information systems. He enjoys learning
            about many of the latest technologies such as NextJS, Machine
            Learning, and AWS. As a tutor, Connor has helped others develop
            their skills in HTML, CSS, JavaScript, Excel, Tableau, SQL, and
            Python. In addition to his technical skills, Connor also has
            experience in management, which has helped him develop important
            leadership skills like delegation and conflict management during his
            time as a store manager at Rite Aid. In his free time, Connor enjoys
            building personal projects, gaming, and spending time with loved
            ones.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img src="/keyboard.jpg" alt="backlit keyboard" />       */}
          <div
            style={{
              position: 'relative',
              background:
                'linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25))',
              borderRadius: '0.25rem',
            }}
          >
            <Image
              src='/keyboard1.jpg'
              alt='backlit keyboard'
              fill
              style={{
                borderRadius: '0.25rem',
                mixBlendMode: 'overlay',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <h2>Education</h2>
        <School />
      </div>
    </section>
  );
};

export default AboutSection;
