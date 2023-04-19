import {
  SiExpress,
  SiMicrosoftsqlserver,
  SiReact,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTableau,
} from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs';
import {TbFilter} from 'react-icons/tb'
import {GiBrain} from 'react-icons/gi';


const Icon = ({ type, size }: { type: string; size?: number }) => {
  let icon;
  switch (type) {
    case 'tableau':
      icon = <SiTableau size={size}/>
      break;
    case 'ml': 
      icon = <GiBrain size={size} />
      break;
    case 'html':
      icon = <SiHtml5 size={size} />;
      break;
    case 'css':
      icon = <SiCss3 size={size} />;
      break;
    case 'js':
      icon = <SiJavascript size={size} />;
      break;
    case 'ts':
      icon = <SiTypescript size={size} />;
      break;
    case 'sql':
      icon = <BsFiletypeSql size={size} />;
      break;
    case 'express':
      icon = <SiExpress size={size} />;
      break;
    case 'next':
      icon = <SiNextdotjs size={size} />;
      break;
    case 'mongo':
      icon = <SiMongodb size={size} />;
      break;
    case 'python':
      icon = <SiPython size={size} />;
      break;
    case 'react':
      icon = <SiReact size={size} />;
      break;
    case 'mssql':
      icon = <SiMicrosoftsqlserver size={size} />;
      break;
    case 'filter':
      icon = <TbFilter size={size} />
      break;
  }
  return (
    <div
      style={{
        paddingLeft: '0.25rem',
        display: 'flex',
        alignItems: 'middle',
        verticalAlign: 'bottom',
      }}
    >
      {icon}
    </div>
  );
};

export default Icon;
