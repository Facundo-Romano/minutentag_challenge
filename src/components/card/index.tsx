import { NextPage } from 'next';
import styles from './index.module.css';
import { CardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Card: NextPage<CardProps> = ({ brand, image, price, idx, id }) => {
    const priceString = price.toString();
    const cents = priceString.slice(priceString.length-2);
    const dollars = priceString.slice(0, priceString.length-2);

    return (
        <div className={`${styles.container} ${idx%2 === 0 ? styles.even : styles.odd}`}>
            <Link href={`/${id}-${brand}`} className={styles.brand}>{brand}</Link>
            <Link href={`/${id}-${brand}`} className={styles.img}>
                <Image src={image} fill style={{ objectFit: 'contain' }} alt={`${brand} image`} />
            </Link>
            <div className={styles.bottom}>
                <Link href={`/${id}-${brand}`} className={styles.price}>{`$${dollars}.${cents}`}</Link>
                <div className={styles.icon}>
                    <div className={styles.lineVertical} />
                    <div className={styles.lineHorizontal} />
                </div>
            </div>
        </div>
    );
};

export default Card;