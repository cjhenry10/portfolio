'use client';
import {useState, useEffect} from 'react';
import styles from './Progress.module.css';
const start = new Date('12-10-2022');
const end = new Date('12-10-2023');
const today = new Date();

const dateDiff = (date1: Date, date2: Date) => {
  return (date1.getTime())/(1000*3600*24) - (date2.getTime())/(1000*3600*24);
}

const timeLeft = dateDiff(end, today);
const fullTime = dateDiff(end, start);


const Progress = () => {
  const filled = Math.trunc((1 - (timeLeft/fullTime)) * 100);
  
  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{width: `${filled}%`}}><p style={{margin: 'auto 0', padding: '0 0.25rem 0 0', textAlign: 'right'}}>{`${filled}%`}</p></div>
    </div>
  )
}

export default Progress