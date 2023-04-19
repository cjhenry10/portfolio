'use client';
import React, { useState, useEffect, useReducer } from 'react';
import SlideIn from '../Transitions/SlideIn';
import styles from './ProjectSection.module.css';
import Project from './Project';
import projects from '@/utils/projects';
import FilterSkills from './FilterSkills';
import Button from '../Button/Button';

const initialState = {
  // projectsShown: [],
  all: true,
  html: false,
  css: false,
  js: false,
  ts: false,
  sql: false,
  python: false,
  react: false,
  express: false,
  next: false,
  mongo: false,
  mssql: false,
  ml: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'html':
      return { ...state, html: !state.html, all: false };
    case 'css':
      return { ...state, css: !state.css, all: false };
    case 'js':
      return { ...state, js: !state.js, all: false };
    case 'ts':
      return { ...state, ts: !state.ts, all: false };
    case 'sql':
      return { ...state, sql: !state.sql, all: false };
    case 'python':
      return { ...state, python: !state.python, all: false };
    case 'react':
      return { ...state, react: !state.react, all: false };
    case 'express':
      return { ...state, express: !state.express, all: false };
    case 'next':
      return { ...state, next: !state.next, all: false };
    case 'mongo':
      return { ...state, mongo: !state.mongo, all: false };
    case 'mssql':
      return { ...state, mssql: !state.mssql, all: false };
    case 'ml':
      return { ...state, ml: !state.ml, all: false };
    case 'all':
      return initialState;
    default:
      throw new Error();
  }
};

const ProjectSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (type: string) => {
    dispatch({ type: type });
  };

  const [scrollY, setScrollY] = useState(0);
  const [projectsShown, setProjectsShown] = useState(projects);

  const filterProjects = (filter: any) => {
    let skills: Array<string> = [];
    for (let key in filter) {
      if (key !== 'all' && filter[key]) {
        skills.push(key);
      }
    }
    if (skills.length === 0) {
      dispatch({ type: 'all' });
      setProjectsShown(projects);
    } else {
      const filteredProjects = projects.filter((proj: any) => {
        return skills.every((s: any) => proj.skills.includes(s));
      });
      const titles = filteredProjects.map((p) => p.title);
      setProjectsShown(filteredProjects);
    }
  };

  const handleScroll = () => {
    if (window.scrollY < window.innerWidth / 2.5) {
      setScrollY(window.scrollY * 1.9);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    filterProjects(state);
  }, [state]);

  return (
    <>
      <section id='projects' className={styles.projects}>
        {/* <SlideIn> */}
        <h1
          className={styles.h1}
          style={{ transform: `translateX(${scrollY}px)` }}
        >
          Projects
        </h1>
        {/* </SlideIn> */}
        <FilterSkills state={state} handleClick={handleClick} />
        <div className={styles.container}>
          {projectsShown.length > 0 ? (
            projectsShown.map((proj) => {
              return (
                <Project
                  key={proj.title}
                  title={proj.title}
                  description={proj.description}
                  skills={proj.skills}
                  buttons={proj.buttons}
                />
              );
            })
          ) : (
            <p>
              No projects match this filter.{' '}
              <Button
                onClick={() => {
                  dispatch({ type: 'all' });
                  setProjectsShown(projects);
                }}
                variant='contained'
                color='var(--c3)'
                size={'sm'}
              >
                Show All
              </Button>
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
