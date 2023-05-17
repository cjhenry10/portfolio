'use client';
import { ReactNode, useState } from 'react';
import CopyLink from '../Articles/CopyLink';
export function H1({ children, ...props }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  return (
      <h1 className='use-serif flex items-center' {...props}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      >
        {children}
        {/* @ts-expect-error */}
      <CopyLink size={20} visible={visible} hrefId={props.id}/>
      </h1>
  );
}

export function H2({ children, ...props }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  return (
      <h2 className='use-serif flex items-center' {...props}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      >
        {children}
        {/* @ts-expect-error */}
      <CopyLink size={18} visible={visible} hrefId={props.id}/>
      </h2>
  );
}

export function H3({ children, ...props }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  return (
      <h3 className='use-serif flex items-center' {...props}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      >
        {children}
        {/* @ts-expect-error */}
      <CopyLink size={20} visible={visible} hrefId={props.id}/>
      </h3>
  );
}