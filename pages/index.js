import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>surgeyos.com</title>
        <meta name="description" content="personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          
        </div>

        <div className={styles.center}>
          <h1 className={inter.className}>surgeyos.com</h1>
        </div>
        <div>
          <p className={inter.className}>A modular Robotic Surgery platform which is a more accessible and inexpensive tool to researchers, students and doctors.</p>
        </div>

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Documentation <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              under development
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blog <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              under development
            </p>
          </a>

          <a
            href="https://github.com/surgeyos/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>

          <a
            href="https://cad.onshape.com/documents/a4980ca5defc02a5d8b9d8fa/w/6e51ff7b9fc96f487dff85ec/e/892e4b76d40bef9650f287e3"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Hardware <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              under development
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
