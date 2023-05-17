'use client'
import Prism from 'prismjs';
import {useEffect, useState} from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import "prism-themes/themes/prism-nord.css";
import Button from '../Button/Button';
import {BsClipboard, BsClipboardCheck, BsFileEarmark} from 'react-icons/bs';
type Props = {
  code: string,
  language?: string,
  fileName: string,
}
export default function CodeblockAlt({code, language, fileName}: Props) {
  const [color, setColor] = useState('inherit');
  const [icon, setIcon] = useState(<BsClipboard size={14}/>)
  const [text, setText] = useState('');
  const [value, copy] = useCopyToClipboard();
  function handleClick() {
    copy(code);
    setColor('green');
    setIcon(<BsClipboardCheck size={14}/>);
    setText('Copied to clipboard')
    setInterval(() => {
      setColor('inherit');
      setIcon(<BsClipboard size={14}/>)
      setText('');
    }, 3500)
  }
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  return (
    <>
    <div className='text-slate-200 px-3 pt-2 pb-3 -mb-2 text-sm flex justify-between align-center' style={{borderRadius: '0.25rem', backgroundColor: 'var(--c2)'}}>
      <p className='my-1 flex gap-2' style={{fontFamily: 'monospace'}}><BsFileEarmark size={16}/>{fileName}</p>
      <p className='my-1 text-slate-400' style={{marginLeft:'auto'}}>{text}</p>
      <Button onClick={handleClick} sxc={{padding: '0.25rem', minWidth: '0', marginBottom: '0.25rem', transition: '500ms background-color'}} variant='contained' color={color}>{icon}</Button>
    </div>
    <div data-rehype-pretty-code-fragment>
    <pre style={{marginTop: '0', borderRadius: '0.25rem', padding: '0.5rem 1rem 1rem', marginBottom: '0.5rem'}} data-language='js' data-theme='default'>
      <code className={`language-${language}`} style={{fontSize: '14px'}}>{code}</code>
    </pre>
    </div>
    </>
  );
};
