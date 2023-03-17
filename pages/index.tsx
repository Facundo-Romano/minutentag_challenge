import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styles from '@/styles/Home.module.css';
import Nav from '@/src/components/nav';
import SearchBar from '@/src/components/searchBar';
import Card from '@/src/components/card';
import BottomNavBar from '@/src/components/bottomNavBar';
import { Product } from '@/types';
import Image from 'next/image';

export default function Home() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const productsPromise = async () => {
      try {
        const { data } = await axios.get("/api/products");

        setProducts(data?.products);
      } catch (error) { 
        console.log(error)
      }
    };
    
    productsPromise();
  }, []);

  return (
    <>
      <Head>
        <title>The Beer Cellar</title>
        <meta name="description" content="The beer cellar home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className={styles.container}>
          <Nav />
          <h2 className={styles.h2}>Hi Mr. Michael,</h2>
          <h1 className={styles.h1}>Welcome Back!</h1>
          <SearchBar />
          <div className={styles.subContainer}>
            <div className={styles.section}>
              <h3 className={styles.h3}>Drink Category</h3>
              <p className={styles.seeAll}>See All</p>
            </div>
            <div className={styles.section}>
              <button className={styles.button}>All</button>
              <button className={`${styles.button} ${styles.selected}`}>
                <Image className={styles.icon} width={23} height={23} src="/icons/beer.png" alt="beer icon" />
                Beer
              </button>
              <button className={styles.button}>
                <Image className={styles.icon} width={23} height={23} src="/icons/wine-glass.png" alt="wine icon" />
                Wine
              </button>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.section}>
              <h4 className={styles.h3}>Popular</h4>
              <p className={styles.seeAll}>See All</p>
            </div>
            <div className={styles.cardSection}>
              {
                products?.map((product, idx) => <Card brand={product.brand} image={product.image} price={product.price || 0} id={product.id} idx={idx} key={product.id}/>)
              }
            </div>
          </div>
        </div>
        <BottomNavBar />
      </>
    </>
  );
};
