'use client';
import useInterval from '@/hooks/useInterval';
import { useEffect, useState } from 'react';
import Progress from '../ProgressBar/Progress';
import styles from './School.module.css';

const School = () => {
  const [classes, setClasses] = useState(
    `${styles.pillars} ${styles.animated}`
  );

  const intervalRef = useInterval(() => {
    setClasses(`${styles.pillars}`);
    setTimeout(() => {
      setClasses(`${styles.pillars} ${styles.animated}`);
    }, 1000);
  }, 20_000);
  return (
    <div className={styles.school}>
      <div className={classes}>
        <div>Programming</div>
        <div>Databases</div>
        <div>Machine Learning</div>
        <div>Networking</div>
        <div>Cybersecurity</div>
      </div>
      <div>
        <h3 className='py-2 text-xl'>Arizona State University</h3>
        <h2 className='py-2 text-2xl'>Information Technology, B.S.</h2>
        <h4 className='py-2 text-lg'>Information Systems — Summa Cum Laude</h4>
        <h5 className='py-2 text-lg'>January 2018 - December 2022</h5>
      </div>
      <div>
        <h3 className='py-2 text-xl'>Arizona State University</h3>
        <h2 className='py-2 text-2xl'>Information Technology, M.S.</h2>
        <h4 className='py-2 text-lg'>Information Systems — With Distinction</h4>
        <h5 className='py-2 text-lg'>December 2022 - December 2023</h5>
      </div>
    </div>
  );
};

export default School;
