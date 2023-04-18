import styles from './Chip.module.css';

const Chip = ({title}: {title: string}) => {
  let text = '';
  let chipStyles = `${styles.chip}`
  switch(title) {
    case 'html':
      text = 'HTML';
      chipStyles += ` ${styles.html}`
      break;
    case 'css':
      text = 'CSS';
      chipStyles += ` ${styles.css}`
      break;
    case 'js':
      text = 'JavaScript';
      chipStyles += ` ${styles.js}`
      break;
    case 'ts':
      text = 'TypeScript'
      chipStyles += ` ${styles.ts}`
      break;
    case 'sql':
      text = 'SQL';
      chipStyles += ` ${styles.sql}`
      break;
    case 'node':
      text = 'Nodejs';
      chipStyles += ` ${styles.node}`
      break;
    case 'mongo':
      text = 'MongoDB';
      chipStyles += ` ${styles.mongo}`
      break;
    case 'python':
      text = 'Python';
      chipStyles += ` ${styles.python}`
      break;
    case 'react':
      text = 'React';
      chipStyles += ` ${styles.react}`
      break;
  }
  return (
    <div className={chipStyles}>{text}</div>
  )
}

export default Chip