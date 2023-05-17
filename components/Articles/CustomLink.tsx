'use client';
import {ReactNode} from 'react'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CustomLink({children, ...props}: {children: ReactNode, props: any}) {
  const [url, setUrl] = useState('')

  // function scrollTo(event: any, id: string) {
  //   event.preventDefault();
  //   const navbarHeight = 50;
  //   // window.onload = () => {
  //     // @ts-expect-error
  //     const targetOffsetTop = document.querySelector(`${id}`)!.offsetTop;
  //     const scrollToPosition = targetOffsetTop - navbarHeight;
  //     window.scrollTo({
  //       top: scrollToPosition,
  //       behavior: 'smooth'
  //     })
  //   // }
  // }
  // @ts-expect-error
  const id = props.href
  useEffect(()=>{
    if (document?.location.hash) {
      setUrl(document?.location.href.replace(document?.location.hash, '') + id)
    } else {
      setUrl(document?.location.href + id)
    }
  }, [id])
  return (
    <Link {...props} href={url}>{children}</Link>
  )
}
