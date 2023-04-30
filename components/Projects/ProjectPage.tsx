import { ReactNode } from 'react';
import styles from './ProjectPage.module.css';
const ProjectPage = ({
  title,
  link,
  description,
  children,
  height
}: {
  title?: string;
  link: string;
  description?: string;
  children?: ReactNode
  height?: string
}) => {
  return (
    <>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <iframe
          className={styles.frame}
          style={{ border: 'none', height: height || '' }}
          src={link}
        ></iframe>
      </div>
    </>
  );
};

export default ProjectPage;
