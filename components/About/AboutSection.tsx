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
          <div>
            <p className='indent-8'>
              I enjoy building things for the web, from responsive UIs to secure
              and scalable infrastructures. I recently graduated with my
              Master's in Information Technology and passed the AWS Solutions
              Architect Associate exam, and I'm excited to put my skills to use
              creating, maintaining, or deploying web applications.
            </p>
            {/* Connor is an Information Technology graduate student at Arizona
            State University focusing on information systems. He enjoys learning
            about many of the latest technologies such as machine learning,
            NextJS, and AWS. As a tutor and mentor, I've  helped aspiring web
            developers and data analysts strengthen their skillset with HTML,
            CSS, JavaScript, Excel, Tableau, SQL, and Python. In addition to his
            technical skills, he also has experience in management, which
            has helped him develop important leadership skills like delegation
            and conflict management during his time as a store manager at Rite
            Aid. In his free time, Connor enjoys building personal projects,
            gaming, and spending time with loved ones. */}
            <p className='mt-4 indent-8'>
              In my current role at Podium Education, I work as a tutor and
              mentor, helping aspiring web developers and data analysts
              strengthen their skillset in HTML, CSS, JavaScript, Excel,
              Tableau, SQL, and Python. I also have experience with leadership
              and people management from my time as a store manager at Rite Aid.
            </p>
          </div>
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
        <h2 className='py-5 text-2xl'>Education</h2>
        <School />
      </div>
    </section>
  );
};

export default AboutSection;
