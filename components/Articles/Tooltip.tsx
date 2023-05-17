import { ReactNode } from 'react';
import styles from './Tooltip.module.css';

export default function Tooltip({children, text}: {children: ReactNode, text: string}) {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles['tooltip-text']}>{text}</div>
    </div>
  )
}
