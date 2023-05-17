'use client';
import {useState, useEffect} from 'react';
import Button from "../Button/Button";
import { BsArrowUpCircle } from "react-icons/bs";
import style from './BackToTop.module.css';

export default function BackToTop() {
  const [visible, setVisible] = useState('invisible');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setVisible('visible');
      } else {
        setVisible('invisible');
      }
    })
  }, [])

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`fixed bottom-4 ${visible} ${style.container}`}>
      <Button onClick={handleClick} variant='contained' color='var(--c4)' size='sm' sxc={{ minWidth: 'unset', paddingInline: 'calc(8px, 2vw, 1.5rem) !important'}}><BsArrowUpCircle size={20}/></Button>
    </div>
  )
}
