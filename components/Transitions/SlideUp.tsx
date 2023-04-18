'use client'
import React, { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './SlideUp.module.css';

interface propTypes {
  children: ReactNode;
  delay: string;
}

const SlideUp = (props: propTypes) => {
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
  }, [inView])

  return (
    <div className={classes} ref={ref} style={{transitionDelay: props.delay}}>
      {props.children}
    </div>
  );
};

export default SlideUp;