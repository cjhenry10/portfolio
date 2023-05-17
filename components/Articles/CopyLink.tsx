'use client'
import {useState, useEffect} from 'react';
import {BsLink45Deg, BsClipboard, BsClipboardCheck} from 'react-icons/bs';
import {ClipboardLinkRegular, ClipboardCheckmarkRegular} from '@fluentui/react-icons';
import Button from "../Button/Button"
import { usePathname } from 'next/navigation';
import url from '@/utils/url';
import Tooltip from './Tooltip';

export default function CopyLink({size, visible, hrefId}: {size: number, visible: boolean, hrefId: string,}) {
  const [color, setColor] = useState('inherit');
  const [icon, setIcon] = useState(<ClipboardLinkRegular style={{marginBottom: 'auto'}} fontSize={size}/>)
  const path = usePathname();
  const pathToHeader = `${url}${path}/#${hrefId}`

  async function copy(text: string) {
    await navigator.clipboard.writeText(text)
  }

  function handleClick() {
    copy(pathToHeader);
    setColor('#7ca25c');
    setIcon(<ClipboardCheckmarkRegular fontSize={size}/>);
    setTimeout(() => {
      setColor('inherit');
      setIcon(<ClipboardLinkRegular fontSize={size}/>)
    }, 3000)
  }
  return (
    <>
    <Tooltip text='Copy link'>
    <Button size='sm' onClick={handleClick} sxc={{alignSelf: 'center', padding: '0.25rem', minWidth: '0', maxHeight: '30px', color: 'inherit', visibility: visible? 'visible' : 'hidden'}} variant='contained' color={color}>
      {icon}
    </Button>
    </Tooltip>
    </>
  )
}
