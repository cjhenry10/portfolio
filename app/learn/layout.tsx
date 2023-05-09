import {ReactNode} from 'react';
import styles from './layout.module.css'
export default function Layout({children}: {children: ReactNode}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
