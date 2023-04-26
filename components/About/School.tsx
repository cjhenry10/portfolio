'use client';
import useInterval from '@/hooks/useInterval';
import { useEffect, useState } from 'react';
import Progress from '../ProgressBar/Progress';
import styles from './School.module.css';

const School = () => {
  const [classes, setClasses] = useState(
    `${styles.pillars} ${styles.animated} ${styles.shimmer}`
  );

  const intervalRef = useInterval(() => {
    setClasses(`${styles.pillars}`);
    setTimeout(() => {
      setClasses(`${styles.pillars} ${styles.animated} ${styles.shimmer}`);
    }, 1000);
  }, 20_000);
  return (
    <div className={styles.school}>
      <div className={classes}>
        <div>Programming</div>
        <div>Databases</div>
        <div>Networking</div>
        <div>Machine Learning</div>
        <div>Cybersecurity</div>
      </div>
      <div>
        <h3>Arizona State University</h3>
        <h2>Information Technology, B.S.</h2>
        <h4>Information Systems — Summa Cum Laude</h4>
        <h5>January 2018 - December 2022</h5>
      </div>
      <div>
        <h3>Arizona State University</h3>
        <h2>Information Technology, M.S.</h2>
        <h4>Information Systems — 4.0 GPA</h4>
        <h5>December 2022 - December 2023</h5>
        <Progress />
      </div>
    </div>
  );
};

export default School;
