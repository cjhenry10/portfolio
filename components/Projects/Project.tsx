import { ReactNode } from 'react';
import Button from '../Button/Button';
import Chip from '../SkillChips/Chip';
import styles from './Project.module.css';
import Icon from '../Icon/Icon';
interface propTypes {
  title: string;
  description?: string;
  buttons?: {
    buttonTitle: string;
    buttonLink: string;
  }[];
  skills: string[];
}
const Project = (props: propTypes) => {
  let skillChips: ReactNode[] = [];

  props.skills!.forEach((s) => {
    switch (s) {
      case 'html':
        skillChips.push(<Icon type='html' key='html' size={24} />);
        break;
      case 'css':
        skillChips.push(<Icon type='css' key='css' size={24} />);
        break;
      case 'js':
        skillChips.push(<Icon type='js' key='js' size={24} />);
        break;
      case 'ts':
        skillChips.push(<Icon type='ts' key='ts' size={24} />);
        break;
      case 'sql':
        skillChips.push(<Icon type='sql' key='sql' size={24} />);
        break;
      case 'express':
        skillChips.push(<Icon type='express' key='express' size={24} />);
        break;
      case 'mongo':
        skillChips.push(<Icon type='mongo' key='mongo' size={24} />);
        break;
      case 'python':
        skillChips.push(<Icon type='python' key='python' size={24} />);
        break;
      case 'react':
        skillChips.push(<Icon type='react' key='react' size={24} />);
        break;
      case 'next':
        skillChips.push(<Icon type='next' key='next' size={24} />);
        break;
        case 'mssql':
          skillChips.push(<Icon type='mssql' key='mssql' size={24} />);
          break;
          case 'ml':
          skillChips.push(<Icon type='ml' key='ml' size={24} />);
          break;
    }
  });

  return (
    <div className={styles.project}>
      <h1>{props.title}</h1>
      <p>
        {props.description}
      </p>
      <div className={styles.skills}>{skillChips.map((s) => s)}</div>
      <div>
        <Button variant='contained' color='var(--c3)'>
          Code
        </Button>
        <Button variant='contained' color='var(--c3)'>
          Live
        </Button>
      </div>
    </div>
  );
};

export default Project;
