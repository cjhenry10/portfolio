'use client';
import Icon from '../Icon/Icon';
import styles from './Chip.module.css';

const Chip = ({ title, onClick, active }: { title: string, onClick?: Function, active: boolean[] }) => {
  let text = '';
  let icon;
  let chipStyles = `${styles.chip}`;
  switch (title) {
    case 'html':
      text = 'HTML';
      icon = <Icon type='html' size={16} />;
      chipStyles += ` ${styles.html}`;
      break;
    case 'css':
      text = 'CSS';
      icon = <Icon type='html' size={16} />;
      chipStyles += ` ${styles.css}`;
      break;
    case 'js':
      text = 'JavaScript';
      chipStyles += ` ${styles.js}`;
      icon = <Icon type='js' size={16} />;
      break;
    case 'ts':
      text = 'TypeScript';
      chipStyles += ` ${styles.ts}`;
      icon = <Icon type='ts' size={16} />;
      break;
    case 'sql':
      text = 'SQL';
      chipStyles += ` ${styles.sql}`;
      icon = <Icon type='sql' size={16} />;
      break;
    case 'express':
      text = 'Express';
      chipStyles += ` ${styles.express}`;
      icon = <Icon type='express' size={16} />;
      break;
    case 'next':
      text = 'Next';
      chipStyles += ` ${styles.next}`;
      icon = <Icon type='next' size={16} />;
      break;
    case 'mongo':
      text = 'MongoDB';
      chipStyles += ` ${styles.mongo}`;
      icon = <Icon type='mongo' size={16} />;
      break;
    case 'python':
      text = 'Python';
      chipStyles += ` ${styles.python}`;
      icon = <Icon type='python' size={16} />;
      break;
    case 'react':
      text = 'React';
      chipStyles += ` ${styles.react}`;
      icon = <Icon type='react' size={16} />;
      break;
    case 'mssql':
      text = 'SQL Server';
      chipStyles += ` ${styles.mssql}`;
      icon = <Icon type='mssql' size={16} />;
      break;
      case 'ml':
        text = 'ML/AI';
        chipStyles += ` ${styles.ml}`;
        icon = <Icon type='ml' size={16} />;
        break;
    default: 
      text = 'All';
  }

  function createRipple(event: any) {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
  
    const circle = document.createElement("span");
    const diameter = Math.max(buttonRect.width, buttonRect.height);
    // const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - buttonRect.left - radius}px`;
    // circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - buttonRect.top - radius}px`;
    // circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple_cjh123");
    // if (theme === "light") {
    //     circle.classList.add("light_cjh123");
    // }
  
    const ripple = button.getElementsByClassName("ripple_cjh123")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }

  function handleClick(e: any) {
    if (onClick) onClick();
    createRipple(e);
  }
  // console.log(text, active[0]);
  if (active[1]) {
    chipStyles += ` ${styles.active}`
  } else if (active[0] && !active[1]) {
    chipStyles += ` ${styles.active}`
  }

  return (
    <div className={chipStyles} onClick={handleClick}>
      {text} {icon}
    </div>
  );
};

export default Chip;
