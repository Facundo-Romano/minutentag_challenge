import { NextPage } from 'next';
import Image from 'next/image';
import styles from './index.module.css';
import { NavProps } from '@/types';
import Link from 'next/link';

const Nav: NextPage<NavProps> = ({ activeNav }) => {
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
        <Link href="/" className={`${styles.navDesktop} ${ activeNav === "Home" ? styles.active : ""}`}>Home</Link>
        <p className={`${styles.navDesktop} ${ activeNav === "Product" ? styles.active : ""}`}>Products</p>
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

export default Nav;