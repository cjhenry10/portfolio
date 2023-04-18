import styles from './Cube.module.css';

const Cube = () => {
  return (
    <div className={styles.cubeWrapper}>
    <div className={styles.cube}>
      <div className={styles.cubeFace}></div>
      <div className={`${styles.cubeFace} ${styles.face2}`}></div>
    </div>
    </div>
  );
};

export default Cube;
