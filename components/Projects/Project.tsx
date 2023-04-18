import { ReactNode } from 'react';
import Button from '../Button/Button';
import Chip from '../SkillChips/Chip';
import styles from './Project.module.css';
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
        skillChips.push(<Chip title={'html'} />);
        break;
      case 'css':
        skillChips.push(<Chip title={'css'} />);
        break;
      case 'js':
        skillChips.push(<Chip title={'js'} />);
        break;
      case 'ts':
        skillChips.push(<Chip title={'ts'} />);
        break;
        case 'sql':
        skillChips.push(<Chip title={'sql'} />);
        break;
        case 'node':
        skillChips.push(<Chip title={'node'} />);
        break;
        case 'mongo':
        skillChips.push(<Chip title={'mongo'} />);
        break;
        case 'python':
        skillChips.push(<Chip title={'python'} />);
        break;
        case 'react':
        skillChips.push(<Chip title={'react'} />);
        break;
    }
  });

  return (
    <div className={styles.project}>
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ducimus
        doloribus debitis dolore magnam aut ipsam reiciendis quis incidunt esse
        hic, suscipit beatae magni soluta. Iure ad ut perferendis obcaecati?
      </p>
      <div className={styles.skills}>
        {skillChips.map(s => s)}
      </div>
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
