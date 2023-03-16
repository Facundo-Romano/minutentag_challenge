import Image from 'next/image';
import styles from './index.module.css';

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.navMenu}>
        <div className={styles.linesContainer}>
          <div className={styles.line1} />
          <div className={styles.line2} />
          <div className={styles.line1} />
        </div>
      </div>
      <Image src="/icons/profile-picture.jpg" width={45} height={45} className={styles.profilePicture} alt="profile picture" />
    </div>
  );
};