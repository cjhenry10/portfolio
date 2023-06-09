'use client'
import {useEffect, useState, ReactNode} from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import Button from '../Button/Button';
import {BsClipboard, BsClipboardCheck, BsFileEarmark} from 'react-icons/bs';
type Props = {
  children: ReactNode,
  fileName: string,
  code: string,
}
export default function Codeblock({children, fileName, code}: Props) {
  const [color, setColor] = useState('inherit');
  const [icon, setIcon] = useState(<BsClipboard size={14}/>)
  const [text, setText] = useState('');
  const [value, copy] = useCopyToClipboard();
  function handleClick() {
    console.log(code);
    copy(code);
    setColor('#A3BE8C');
    setIcon(<BsClipboardCheck size={14}/>);
    setText('Copied to clipboard')
    setTimeout(() => {
      setColor('inherit');
      setIcon(<BsClipboard size={14}/>)
      setText('');
    }, 4000)
  }
  return (
    <>
    <div className='codeblock-wrapper'>
    <div className='text-slate-200 px-3 pt-2 pb-3 -mb-8 text-sm flex justify-between align-center' style={{borderRadius: '0.25rem', backgroundColor: '#171c26'}}>
      <p className='my-1 flex gap-2' style={{fontFamily: 'monospace'}}><BsFileEarmark size={16}/>{fileName}</p>
      <p className='my-1 text-slate-400' style={{marginLeft:'auto'}}>{text}</p>
      <Button onClick={handleClick} sxc={{padding: '0.25rem', minWidth: '0', marginBottom: '0.25rem', transition: '500ms background-color'}} variant='contained' color={color}>{icon}</Button>
    </div>
    {children}
    </div>
    </>
  );
};
