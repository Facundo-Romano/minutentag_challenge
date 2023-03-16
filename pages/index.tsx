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
      </div>
    </>
  );
};
