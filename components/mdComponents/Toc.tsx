'use client'
import {ReactNode} from 'react'
import { useEffect, useRef } from 'react';

export default function Toc({children}: {children: ReactNode}) {
  const headers = useRef<NodeListOf<Element>>();
  const tocLinks = useRef<NodeListOf<Element>>();
  if (typeof document !== 'undefined') {
    
  }
  useEffect(()=> {
    headers.current = document.querySelectorAll('h1, h2, h3');
    tocLinks.current = document.querySelectorAll('nav ol a');
    window.addEventListener('scroll', () => {
      headers.current!.forEach((header, i) => {
        // skip article title header
        if (i === 0) return;
        let top = window.scrollY + 75;
        // @ts-expect-error
        let offset = header.offsetTop;
        // @ts-expect-error
        let height = header.offsetHeight;
        let id = header.getAttribute('id');
        // console.log(id, top, offset, height);
        // console.log('---')
        if (top <= 100) {
          tocLinks.current!.forEach((link: any, i) => {
            // link.classList.add('testing!');
            link.classList.remove('text-highlight-scroll');
        });
      }
        if (top >= offset && top < offset + height) {
          tocLinks.current!.forEach((link: any, i) => {
            // link.classList.add('testing!');
            link.classList.remove('text-highlight-scroll');
            if (id === link.getAttribute('href')!.match(/(?<=#).*/)![0]) {
              // console.log(top, offset, height);
              // console.log(id);
              // console.log(link.getAttribute('href')!.match(/(?<=#).*/)![0])
              link.classList.add('text-highlight-scroll');
            }
            
            // console.log(link);
            // console.log(document.querySelector('nav ol a[href*='))
          })
        } else if (top <= (offset - 150) && top >= (offset - 200)) {
          tocLinks.current!.forEach((link: any, i) => {
            link.classList.remove('text-highlight-scroll');
            if (id === link.getAttribute('href')!.match(/(?<=#).*/)![0]) {
              // console.log(top, offset, height);
              // console.log('100 - 150px above', id, i);
              if (i >= 1) {
                tocLinks.current![i-1].classList.add('text-highlight-scroll');
              }
              // console.log(link.getAttribute('href')!.match(/(?<=#).*/)![0])
              // link.classList.add('text-highlight-scroll');
              // console.log(tocLinks.current![i-1]);
            }
          })
        }
      })
    })
  }, [])
  return (
    <nav className='page-outline text-sm'>{children}</nav>
  )
}
