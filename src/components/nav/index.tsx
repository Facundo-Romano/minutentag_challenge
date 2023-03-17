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
      <div className={styles.navDesktopContainer}>
        <Image src="/favicon.ico" className={styles.logo} width={60} height={60} alt="logo" />
        <p className={`${styles.navDesktop} ${styles.active}`}>Home</p>
        <p className={styles.navDesktop}>Products</p>
        <p className={styles.navDesktop}>Cart</p>
        <p className={styles.navDesktop}>Settings</p>
      </div>
      <div className={styles.subContainer}>
        <p className={styles.profileLink}>Profile</p>
        <Image src="/icons/profile-picture.jpg" width={40} height={40} className={styles.profilePicture} alt="profile picture" />
      </div>
    </div>
  );
};