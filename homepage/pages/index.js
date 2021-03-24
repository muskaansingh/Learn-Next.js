import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header';
import HomePage from '../Components/Homepage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <HomePage/>
    </div>
  )
}
