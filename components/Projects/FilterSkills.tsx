'use client';
import Chip from '../SkillChips/Chip';
import Icon from '../Icon/Icon';
import { useReducer } from 'react';

// const initialState = {
//   projectsShown: [],
//   all: true,
//   html: false,
//   css: false,
//   js: false,
//   ts: false,
//   sql: false,
//   python: false,
//   react: false,
//   express: false,
//   next: false,
//   mongo: false,
//   mssql: false,
// };

// const reducer = (state: any, action: any) => {
//   console.log('action', action.type);
//   switch (action.type) {
//     case 'html':
//       return { ...state, html: !state.html, all: false };
//     case 'css':
//       return { ...state, css: !state.css, all: false };
//     case 'js':
//       return { ...state, js: !state.js, all: false };
//     case 'ts':
//       return { ...state, ts: !state.ts, all: false };
//     case 'sql':
//       return { ...state, sql: !state.sql, all: false };
//     case 'python':
//       return { ...state, python: !state.python, all: false };
//     case 'react':
//       return { ...state, react: !state.react, all: false };
//     case 'express':
//       return { ...state, express: !state.express, all: false };
//     case 'next':
//       return { ...state, next: !state.next, all: false };
//     case 'mongo':
//       return { ...state, mongo: !state.mongo, all: false };
//     case 'mssql':
//       return { ...state, mssql: !state.mssql, all: false };
//     case 'all':
//       return initialState;
//     default:
//       throw new Error();
//   }
// };

const FilterSkills = ({handleClick, state}: {handleClick: Function, state: any}) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const handleClick = (type: string) => {
  //   dispatch({ type: type });
  // };

  // getState(state);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        paddingTop: '10vh',
        maxWidth: 'min(85vw, 1400px)',
        margin: '0 auto',
      }}
    >
      <Icon type='filter' size={30} />
      <Chip
        onClick={() => handleClick('all')}
        title={'all'}
        active={[state.all, state.all]}
      />
      <Chip
        onClick={() => handleClick('html')}
        title={'html'}
        active={[state.html, state.all]}
      />
      <Chip
        onClick={() => handleClick('css')}
        title={'css'}
        active={[state.css, state.all]}
      />
      <Chip onClick={() => handleClick('js')} title={'js'} active={[state.js, state.all]} />
      <Chip onClick={() => handleClick('ts')} title={'ts'} active={[state.ts, state.all]} />
      <Chip
        onClick={() => handleClick('sql')}
        title={'sql'}
        active={[state.sql, state.all]}
      />
      <Chip
        onClick={() => handleClick('python')}
        title={'python'}
        active={[state.python, state.all]}
      />
      <div style={{ border: '#ddd 1px solid' }}></div>
      <Chip
        onClick={() => handleClick('react')}
        title={'react'}
        active={[state.react, state.all]}
      />
      <Chip
        onClick={() => handleClick('express')}
        title={'express'}
        active={[state.express, state.all]}
      />
      <Chip
        onClick={() => handleClick('next')}
        title={'next'}
        active={[state.next, state.all]}
      />
      <Chip
        onClick={() => handleClick('mongo')}
        title={'mongo'}
        active={[state.mongo, state.all]}
      />
      <Chip
        onClick={() => handleClick('mssql')}
        title={'mssql'}
        active={[state.mssql, state.all]}
      />
      <Chip
        onClick={() => handleClick('ml')}
        title={'ml'}
        active={[state.ml, state.all]}
      />
      <Chip
        onClick={() => handleClick('aws')}
        title={'aws'}
        active={[state.aws, state.all]}
      />
      <Chip
        onClick={() => handleClick('tableau')}
        title={'tableau'}
        active={[state.tableau, state.all]}
      />
    </div>
  );
};

export default FilterSkills;
