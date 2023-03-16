import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Nav from '@/src/components/nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Beer Cellar</title>
        <meta name="description" content="The beer cellar home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav />
      </div>
    </>
  );
};
