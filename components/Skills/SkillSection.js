'use client'
import React, { useState, useEffect } from 'react';
import Cube from '../Landing/Cube';
import Skill from './Skill';
import styles from './SkillSection.module.css';

const SkillSection = () => {
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
      <section id='skills' className={styles.skills}>
        <h1 style={{ transform: `translateX(${scrollY}px)` }}>Skills</h1>
        <div className={styles.container}>
          <Skill />
          <Skill />
          <Skill />
        </div>
      </section>
    </>
  );
};

export default SkillSection;
