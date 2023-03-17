import { NextPage } from 'next';
import styles from './index.module.css';
import { Product } from '@/types';
import Image from 'next/image';

const Card: NextPage<Product> = ({ brand, image, price, code, name, idx }) => {
    const priceString = price.toString();
    const cents = priceString.slice(priceString.length-2);
    const dollars = priceString.slice(0, priceString.length-2);

    //Pendiente agregar shadowbox

    return (
        <div className={`${styles.container} ${idx%2 === 0 ? styles.even : styles.odd}`}>
            <p className={styles.brand}>{brand}</p>
            <div className={styles.img}>
                <Image src={image} fill style={{ objectFit: 'contain' }} alt={`${name} image`} />
            </div>
            <div className={styles.bottom}>
                <p>{`$${dollars}.${cents}`}</p>
                <div className={styles.icon}>
                    <div className={styles.lineVertical} />
                    <div className={styles.lineHorizontal} />
                </div>
            </div>
        </div>
    );
};

export default Card;