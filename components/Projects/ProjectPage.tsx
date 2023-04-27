import styles from './ProjectPage.module.css'
const ProjectPage = ({title, link, description}: {title?: string, link: string; description?: string}) => {
  return (
    <>
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
        <iframe
          className={styles.frame}
          style={{ border: 'none' }}
          src={link}
        ></iframe>
      </div>
    </>
  )
}

export default ProjectPage