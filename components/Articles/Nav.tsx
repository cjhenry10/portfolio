'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';
import Toggle from "@/components/Toggle/Toggle"
import {useLocalStorage} from 'usehooks-ts'
import {BsMoon, BsSun} from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import ThemeToggle from '../Toggle/ThemeToggle';

const Nav = () => {
  const [navLinks, setNavLinks] = useState(`${styles['navbar-links']}`);
  const navRef = useRef<HTMLElement | null>(null);
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  let timer;
  const handleClick = () => {
    if (navLinks === `${styles['navbar-links']} ${styles.active}`) {
      setNavLinks((prev) => prev + ` ${styles.closing}`);
      timer = setTimeout(() => {
        setNavLinks(`${styles['navbar-links']}`);
      }, 500);
    } else if (
      navLinks ===
      `${styles['navbar-links']} ${styles.active} ${styles.closing}`
    ) {
      setNavLinks(`${styles['navbar-links']}`);
    } else {
      setNavLinks(`${styles['navbar-links']} ${styles.active}`);
    }
  };

  useEffect(() => {
    if (isToggled) {
      document.querySelector('html')?.classList.add('dark');
      document.querySelector('html')?.classList.remove('light');
      setDarkTheme(true)
    } else {
      document.querySelector('html')?.classList.remove('dark');
      document.querySelector('html')?.classList.add('light');
      setDarkTheme(false)
    }
  }, [isToggled])

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        typeof navRef.current !== 'undefined' &&
        navRef.current !== null &&
        !navRef.current.contains(e.target) &&
        navLinks !== `${styles['navbar-links']}`
      ) {
        handleClick();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navRef, navLinks]);

  return (
    <>
    <nav
      ref={navRef}
      className={`${styles.navbar} ${styles['no-transitions']} article-nav-top`}
    >
      <div className={`${styles['brand-title']} use-serif`}>
            <div className='flex items-center mr-3'>
      <ThemeToggle />
      </div>
        <Link href='/'>
              Connor Henry
            </Link>
            </div>
      <button
        type='button'
        className={styles['toggle-button']}
        onClick={handleClick}
      >
        {/* <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span> */}
        <FiMenu size={20} />
      </button>
      
      <div className={navLinks}>
        <ul>
        {/* <div className='flex items-center justify-center gap-1 py-1.5 px-3'> */}
            {/* <BsSun size={12} /> */}
            {/* <Toggle isToggled={isToggled} onToggle={() => setIsToggled(prev => !prev)} /> */}
            {/* <BsMoon size={12} /> */}
            {/* </div> */}
          <li className={styles['nav-item']}>
            <Link href='/learn'>
              Articles
            </Link>
          </li>
          {/* <li className={styles['nav-item']}>
            <Link href='/learn/tags'>
              Tags
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Nav;
