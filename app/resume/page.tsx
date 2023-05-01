import styles from './page.module.css'

const Resume = () => {
  return (
    <>
    <h1>Resume</h1>
    <iframe
          className={styles.frame}
          src={'https://drive.google.com/file/d/1dJLA1ke266lkjF7D-MJi62CESbucg3hu/preview'}
        ></iframe>
    {/* <ProjectPage link='https://drive.google.com/file/d/1dJLA1ke266lkjF7D-MJi62CESbucg3hu/preview' title='Resume'/> */}
    </>
  )
}

export default Resume