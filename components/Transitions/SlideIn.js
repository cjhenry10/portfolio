'use client'
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './SlideIn.module.css';

const SlideIn = (props) => {
  const [classes, setClasses] = useState(`${styles.hidden}`);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [pos, setPos] = useState('relative');

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      if (props.pos) {
        setPos(props.pos);
      }
    }, 1100)
  })

  useEffect(() => {
    if (inView) {
      setClasses(`${styles.show}`);
    } else {
      setClasses(`${styles.hidden}`);
    }
  }, [inView])

  return (
    <div className={classes} ref={ref} style={{transitionDelay: props.delay, transitionDuration: props.duration, position: pos}}>
      {props.children}
    </div>
  );
};

export default SlideIn;