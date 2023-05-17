'use client'
import {BsMoon, BsSun} from 'react-icons/bs';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function ThemeToggle() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);
  const [isToggled, setIsToggled] = useState(isDarkTheme);
  const [icon, setIcon] = useState(<></>);
  useEffect(() => {
    if (isToggled) {
      document.querySelector('html')?.classList.add('dark');
      document.querySelector('html')?.classList.remove('light');
      setDarkTheme(true)
      setIcon(<BsSun/>)
    } else {
      document.querySelector('html')?.classList.remove('dark');
      document.querySelector('html')?.classList.add('light');
      setDarkTheme(false);
      setIcon(<BsMoon/>)
    }
  }, [isToggled])
  return (
    // <div className='dark_mode'>
    //         <input
    //             className='dark_mode_input'
    //             type='checkbox'
    //             id='darkmode-toggle'
    //         />
    //         <label className='dark_mode_label' htmlFor='darkmode-toggle'>
    //     <BsSun className='sun-icon'/>
    //     <BsMoon className='moon-icon'/>
    //   </label>
    // </div>
    <Button onClick={()=>{setIsToggled(prev => !prev)}} size='sm' sxc={{minWidth: '0', height: '30px', boxShadow: 'none', border: '1px solid hsla(0,0%,80%,.25)'}}>{icon}</Button>
  )
}
