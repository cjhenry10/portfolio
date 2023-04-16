'use client'
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeIn.module.css';

const FadeIn = (props) => {
  const [classes, setClasses] = useState(`${styles.hidden}`);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setClasses(`${styles.hidden} ${styles.show}`);
    } else {
      setClasses(`${styles.hidden}`);
    }
  }, [inView]);

  return (
    <div className={classes} ref={ref} style={{transitionDelay: props.delay}}>
      {props.children}
    </div>
  );
};

export default FadeIn;
