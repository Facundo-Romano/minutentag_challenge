import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import styles from '@/styles/ProductDetail.module.css';
import { Product } from '@/types';
import Image from 'next/image';
import TextComponent from '@/src/components/textComponent';

export default function ProductDetail() {
    const router = useRouter();
    const [product, setProduct] = useState<Product>();
    const [stock, setStock] = useState<number>();
    const [price, setPrice] = useState<string>();
    const [image, setImage] = useState<string>();
    const [notFound, setNotFound] = useState<boolean>(false);

    useEffect(() => {
        if(!router.isReady) return;

        const getStockAndPricePromise = async (code: string) => {
            try {
                const { data } = await axios.get("/api/stock-price/" + code);

                return data?.stockPrice;
            } catch (error) { 
                setNotFound(true);
                console.log(error);
            }
        };

        const getProductPromise = async () => {
            try {
                const id = getId();

                const { data } = await axios.get("/api/brand/" + id);

                const thisBrand = data?.brand;

                setProduct(thisBrand);

                turnImageToPng(thisBrand.image);
                
                const stockPrice = await getStockAndPricePromise(thisBrand.skus[0].code);

                const priceInUsd = priceToUsd(stockPrice.price);

                setStock(stockPrice.stock);
                setPrice(priceInUsd);
            } catch (error) { 
                setNotFound(true);
                console.log(error);
            }
        };
        
        getProductPromise();
    }, [router.isReady]);

    const priceToUsd = (price: number) => {
        const priceString = price.toString();

        const cents = priceString.slice(priceString.length-2);

        const dollars = priceString.slice(0, priceString.length-2);

        return dollars + "." + cents
    };

    const getId = () => {
        const { idAndBrand } = router.query;
                
        let queries: string[] = [];

        if (typeof idAndBrand === "string") {
            queries = idAndBrand.split("-");
        } else {
            setNotFound(true);
        }

        return queries[0];
    };

    const turnImageToPng = (image: string) => {
        const imgArr = image.split(".");

        const img = imgArr[0] + ".png";

        setImage(img);
    };

    return (
        <>
        <Head>
            <title>The Beer Cellar</title>
            <meta name="description" content="The beer cellar product page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <button>
                        <svg
                            fill="#323232"
                            viewBox="0 0 16 16"
                            height={30}
                            width={30}
                            >
                            <path fillRule="evenodd" d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"/>
                        </svg>
                    </button>
                    <h2>Detail</h2>
                    <button>
                        <svg
                            fill="#323232"
                            viewBox="0 0 16 16"
                            height={25}
                            width={25}>
                                <path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                        </svg>
                    </button>
                </div>
                <div className={styles.img}>
                    { image ? <Image src={image} fill style={{ objectFit: 'contain' }} alt="product image" /> : <></> }
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.firstSection}>
                        <div className={styles.brand}>
                            <h1>{product?.brand}</h1>
                            <p>Origin: {product?.origin} | Stock: {stock}</p>
                        </div>
                        <p className={styles.price}>${ price }</p>
                    </div>
                    <div className={styles.secondSection}>
                        <h3>Description</h3>
                        <TextComponent text={product?.information || ""} maxHeight={96} />
                    </div>
                </div>
            </div>
        </>
        </>
    );
};

