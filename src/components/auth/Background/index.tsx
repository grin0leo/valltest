import styles from './background.module.css';
import Image from 'next/image';

export default function Background() {
    return (
      <div className={styles.background}>
        <div className={styles.imageContainer}>
          <Image src="/auth/background.svg" alt="Background" width={1920} height={1080} className={styles.image} priority/>
        </div>
  
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Vall<span className={styles.title_2}>test</span></h1>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>&copy; 2024 Valltest</p>
        </div>
      </div>
    );
  }