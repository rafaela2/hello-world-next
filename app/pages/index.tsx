import Head from 'next/head'
import styles from '../styles/Home.module.css'
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          { publicRuntimeConfig.NEXT_PUBLIC_TITLE}
        </p>
      </main>

    </div>
  )
}
