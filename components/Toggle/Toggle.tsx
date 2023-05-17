'use client';
import styles from './Toggle.module.css'
import {BsMoon, BsSun} from 'react-icons/bs';


export default function Toggle({isToggled, onToggle}: {isToggled: boolean, onToggle: any}) {
  return (
    <label className={styles.switch}>
      <input type='checkbox' checked={isToggled} onChange={onToggle}/>
      <span className={styles.slider}/>
    </label>
  )
}
