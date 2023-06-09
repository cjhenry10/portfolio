'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

const Nav = () => {
  const [color, setColor] = useState(`transparent`);
  const [navLinks, setNavLinks] = useState(`${styles['navbar-links']}`);
  const navRef = useRef<HTMLElement | null>(null);

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

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    document.querySelector('html')?.classList.add('dark');
  }, [])

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
    <nav
      ref={navRef}
      className={`${styles.navbar} ${styles['no-transitions']}`}
      style={{ backgroundColor: color }}
    >
      <div className={styles['brand-title']}></div>
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
          <li className={styles['nav-item']}>
            <a onClick={() => {handleClick(); smoothScrollTo('top')}} className={styles.pulse}>
              Home
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a onClick={() => {handleClick(); smoothScrollTo('projects')}} className={styles.pulse}>
              Projects
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a onClick={() => {handleClick(); smoothScrollTo('about')}} className={styles.pulse}>
              About
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a onClick={handleClick} href='/resume' className={styles.pulse}>
              Resume
            </a>
          </li>
          <li className={styles['nav-item']}>
            <Link href='/learn' className={styles.pulse}>
              Learn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
