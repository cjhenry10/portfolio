import React from 'react';
import styles from './Background.module.css';
import Cube from './Cube';

const Background = () => {
  return (
    <div className={styles.wrapper}>
    <ul className={styles['bg-bubbles']}>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
      <li>
        <Cube/>
      </li>
    </ul>
    </div>
  )
}

export default Background