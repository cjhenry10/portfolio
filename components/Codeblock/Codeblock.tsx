'use client'
import Prism from 'prismjs';
import { useEffect, useState } from 'react';
interface CodeblockProps {
  className?: string;
  code: string;
}
export default function Codeblock({ className = 'lang-js', code}: CodeblockProps) {
  const language = className.replace('lang-', '');

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const highlight = async () => {
        await Prism.highlightAll();
      }
      highlight();
    }
  }, [])

  return (
    <div>
      <pre>
        <code className={`language-${language}`}>
          {code}
          </code>
      </pre>
    </div>
  )
}
