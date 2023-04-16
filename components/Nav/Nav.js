'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const [color, setColor] = useState(`var(--dark3)`);
  const [navLinks, setNavLinks] = useState(`${styles['navbar-links']}`);
  const navRef = useRef();

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
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - (window.innerHeight/2)) {
        setColor(`var(--dark2)`);
      } else {
        setColor(`var(--dark3)`);
      }
    };
    window.onscroll = handleScroll;
    return window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
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
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <div className={navLinks}>
        <ul style={{backgroundColor: color }}>
          <li className={styles['nav-item']}>
            <a onClick={handleClick} href='#'>
              Home
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a onClick={handleClick} href='#skills'>
              Skills
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a onClick={handleClick} href='#projects'>
              Projects
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
