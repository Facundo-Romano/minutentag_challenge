import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Nav from '@/src/components/nav';
import SearchBar from '@/src/components/searchBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Beer Cellar</title>
        <meta name="description" content="The beer cellar home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Nav />
        <h2 className={styles.h2}>Hi Mr. Michael,</h2>
        <h1 className={styles.h1}>Welcome Back!</h1>
        <SearchBar />
        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesSubContainer}>
            <h3 className={styles.h3}>Drink Category</h3>
            <p className={styles.seeAll}>See All</p>
          </div>
          <div className={styles.categoriesSubContainer}>
            <button className={styles.button}>All</button>
            <button className={`${styles.button} ${styles.selected}`}>
              <img className={styles.icon} src="/icons/beer.png" alt="beer icon" />
              Beer
            </button>
            <button className={styles.button}>
              <img className={styles.icon} src="/icons/wine-glass.png" alt="wine icon" />
              Wine
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
