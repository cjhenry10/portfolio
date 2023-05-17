'use client';
import {ReactNode} from 'react'
import styles from './CodeInline.module.css'

export default function CodeInline({children}: {children: ReactNode}) {
  // console.log(document.querySelector('html')!.classList.contains('dark'))
  return (
    <code className={`${styles.code} inline-code-cjh`}>{children}</code>
  )
}
