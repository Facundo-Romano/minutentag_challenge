import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import styles from '@/styles/ProductDetail.module.css';
import { Product } from '@/types';
import Image from 'next/image';
import TextComponent from '@/src/components/textComponent';
import Nav from '@/src/components/nav';

export default function ProductDetail() {
    const router = useRouter();
    const [product, setProduct] = useState<Product>();
    const [stock, setStock] = useState<number>();
    const [price, setPrice] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [activeSize, setActiveSize] = useState<string>("");
    const [notFound, setNotFound] = useState<boolean>(false);

    useEffect(() => {
        if(!router.isReady) return;
        
        const getProductPromise = async () => {
            try {
                const id = getId();

                const { data } = await axios.get("/api/brand/" + id);

                const thisBrand = data?.brand;

                setProduct(thisBrand);

                setImageToPng(thisBrand.image);

                updateStockAndPrice(thisBrand.skus[0].code);
            } catch (error) { 
                setNotFound(true);
                console.log(error);
            }
        };
        
        getProductPromise();
    }, [router.isReady]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeSize !== "") {
                updateStockAndPrice(activeSize);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [activeSize]);

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

    const setImageToPng = (image: string) => {
        const imgArr = image.split(".");

        const img = imgArr[0] + ".png";

        setImage(img);
    };

    const updateStockAndPrice = async (code: string) => {
        try {
            const { data } = await axios.get("/api/stock-price/" + code);

            const stockAndPrice = data?.stockPrice;

            const priceInUsd = priceToUsd(stockAndPrice.price);

            setStock(stockAndPrice.stock);
            setPrice(priceInUsd);
            setActiveSize(code);
        } catch (error) { 
            setNotFound(true);
            console.log(error);
        }
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
                    <Link href={"/"} className={styles.goBack}>
                        <svg
                            fill="#323232"
                            viewBox="0 0 16 16"
                            height={30}
                            width={30}
                            >
                            <path fillRule="evenodd" d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"/>
                        </svg>
                    </Link>
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
                <div className={styles.navDesktop}>
                    <Nav activeNav='Product'/>
                </div>
                <div className={styles.img}>
                    { image ? <Image src={image} fill style={{ objectFit: 'contain' }} alt="product image" /> : <></> }
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.sectionDesktop}>
                        <div className={styles.subSectionDesktop}>
                            <div className={styles.firstSection}>
                                <div className={styles.brand}>
                                    <h1>{product?.brand}</h1>
                                    <p>Origin: {product?.origin} | Stock: {stock}</p>
                                </div>
                                <p className={styles.price}>${ price }</p>
                            </div>
                            <div className={`${styles.secondSection} ${styles.descriptionSectionDesktop}`}>
                                <h3>Description</h3>
                                <TextComponent text={product?.information || ""} />
                            </div>
                        </div>
                        <div className={styles.imgDesktop}>
                            { image ? <Image src={image} fill style={{ objectFit: 'contain' }} alt="product image" /> : <></> }
                        </div>
                    </div>
                    <div className={styles.secondSection}>
                        <h4>Size</h4>
                        <div className={styles.sizesContainer}>
                            {
                                product && product.skus.map(size => {

                                    if (size.code === activeSize) return <button key={size.code} className={styles.activeSize}>{size.name}</button>

                                    return <button onClick={() => updateStockAndPrice(size.code)} key={size.code} className={styles.size}>{size.name}</button>
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.thirdSection}>
                        <button className={styles.shopBag}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="6" r="4.25" stroke="#FF9F24" strokeWidth="1.5"/>
                                <path d="M7.53113 6.75H16.4689C18.1079 6.75 19.4905 7.97049 19.6938 9.59689L20.6938 17.5969C20.9362 19.5367 19.4237 21.25 17.4689 21.25H6.53113C4.57626 21.25 3.06375 19.5367 3.30623 17.5969L4.30623 9.59689C4.50953 7.97049 5.89208 6.75 7.53113 6.75Z" fill="white" stroke="#FF9F24" strokeWidth="1.5"/>
                                <circle cx="9.75" cy="10.75" r="0.75" fill="#FF9F24"/>
                                <circle cx="13.75" cy="10.75" r="0.75" fill="#FF9F24"/>
                            </svg>
                        </button>
                        <button className={styles.addToCart}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
        </>
    );
};

