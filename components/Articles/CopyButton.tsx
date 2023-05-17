"use client";

import { useState } from "react";
import Button from "../Button/Button";
import {BsClipboard, BsClipboardCheck} from 'react-icons/bs';
import { ClipboardCodeRegular, ClipboardCheckmarkRegular } from "@fluentui/react-icons";

export const CopyButton = ({ text, styles }: {text: string, styles?: any}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [color, setColor] = useState('inherit');
  const [icon, setIcon] = useState(<ClipboardCodeRegular fontSize={18}/>)

  function handleClick() {
    setColor('#7ca25c');
    setIcon(<ClipboardCheckmarkRegular fontSize={18}/>);
    setTimeout(() => {
      setColor('inherit');
      setIcon(<ClipboardCodeRegular fontSize={18}/>)
    }, 4000)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    // <button disabled={isCopied} onClick={copy}>
    //   {isCopied ? "Copied!" : "Copy"}
    // </button>
    <>
    {/* <p className='my-1' style={{marginLeft:'auto'}}>{message}</p> */}
    <Button onClick={() => {copy(); handleClick()}} sxc={{ alignSelf: 'center', padding: '0 0.25rem', minWidth: '0', minHeight: '0', marginBottom: '0.25rem', transition: '500ms background-color', ...styles}} variant='contained' color={color}>{icon}</Button>
    </>
  );
};
