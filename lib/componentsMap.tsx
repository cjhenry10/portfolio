import CodeInline from "@/components/Codeblock/CodeInline"
import { BsLink45Deg } from "react-icons/bs";
import { Pre } from "@/components/mdComponents/Pre";
import {ReactNode} from 'react';
import { H1, H2, H3 } from "@/components/mdComponents/Headers";
import Link from 'next/link';
import CustomLink from "@/components/Articles/CustomLink";
import Table from "@/components/mdComponents/Table";
import Hr from "@/components/mdComponents/Hr";
import Toc from "@/components/mdComponents/Toc";
import Code from "@/components/mdComponents/Code";
const components = {
  pre: Pre,
  h1: H1,
  h2: H2,
  h3: H3,
  a: CustomLink,
  table: Table,
  hr: Hr,
  nav: Toc,
  code: Code
}

export const link = <span><BsLink45Deg /></span>

export default components;